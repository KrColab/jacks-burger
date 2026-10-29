(function () {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const eur = (n) => n.toFixed(2).replace(".", ",") + " €";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  /* ---------- Čas v Bratislave (nezávisle od časovej zóny návštevníka) ---------- */
  function bratislavaNow() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Bratislava", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false
    }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    const dayIdx = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day: dayIdx, min: (+get("hour") % 24) * 60 + +get("minute") };
  }
  const toMin = (t) => { const [h, m] = t.split(":"); return +h * 60 + +m; };

  /* ---------- Otváracia doba + stav ---------- */
  const ORDER = [1, 2, 3, 4, 5, 6, 0];

  function renderHours() {
    const { day } = bratislavaNow();
    $("#hours").innerHTML = ORDER.map((i) => {
      const h = HOURS[i];
      const val = h.open ? `${h.open} – ${h.close}` : '<span class="closed-day">Zatvorené</span>';
      return `<tr class="${i === day ? "today" : ""}"><td>${h.day}</td><td>${val}</td></tr>`;
    }).join("");
  }

  function renderStatus() {
    const { day, min } = bratislavaNow();
    const el = $("#status"), txt = $("#statusText");
    const h = HOURS[day];
    el.classList.remove("open", "closed");
    if (h.open && min >= toMin(h.open) && min < toMin(h.close)) {
      el.classList.add("open");
      txt.textContent = `Práve otvorené · objednávky do ${h.close}`;
      return;
    }
    el.classList.add("closed");
    // nájdi najbližšie otvorenie
    for (let add = 0; add < 8; add++) {
      const d = (day + add) % 7, hh = HOURS[d];
      if (!hh.open) continue;
      if (add === 0 && min >= toMin(hh.open)) continue;
      const when = add === 0 ? "dnes" : add === 1 ? "zajtra" : hh.day.toLowerCase();
      txt.textContent = `Momentálne zatvorené · otvárame ${when} o ${hh.open}`;
      return;
    }
  }

  /* ---------- Donáška ---------- */
  function renderZones() {
    $("#zones").innerHTML = DELIVERY.map((z) => `
      <article class="zone">
        <div class="zone__fee ${z.fee === 0 ? "free" : ""}">${esc(z.label)}</div>
        <div class="zone__cond">${esc(z.cond)}</div>
        <p class="zone__places">${esc(z.places)}</p>
      </article>`).join("");
  }

  /* ---------- Menu ---------- */
  const KEYS = ["burger", "pizza", "minutky", "prilohy", "napoje"];
  let active = "burger";

  function countOf(k) {
    const c = MENU[k];
    return c.items ? c.items.length : c.groups.reduce((a, g) => a + g.items.length, 0);
  }

  function renderTabs() {
    $("#tabs").innerHTML = KEYS.map((k) => `
      <button class="tab" role="tab" id="tab-${k}" data-k="${k}" aria-selected="${k === active}" aria-controls="menuOut">
        ${esc(MENU[k].title)}<small>${countOf(k)}</small>
      </button>`).join("");
  }

  function itemHTML(it, cat, idx, numbered) {
    const menuLine = cat.menuExtra
      ? `<div class="item__menu">Menu <b>${eur(it.price + cat.menuExtra)}</b> <span class="small">(+${eur(cat.menuExtra)})</span></div>` : "";
    return `
      <article class="item">
        <div class="item__top">
          <h3 class="item__name">${numbered ? `<span class="item__num">${idx + 1}.</span>` : ""}${esc(it.name)}${it.tag ? `<span class="tag">${esc(it.tag)}</span>` : ""}</h3>
          <span class="item__price">${eur(it.price)}</span>
        </div>
        ${it.desc ? `<p class="item__desc">${esc(it.desc)}</p>` : ""}
        ${menuLine}
      </article>`;
  }

  function render() {
    const q = norm($("#q").value.trim());
    const out = $("#menuOut");
    let html = "";

    if (q) {
      // vyhľadávanie naprieč všetkými kategóriami
      let found = 0;
      KEYS.forEach((k) => {
        const cat = MENU[k];
        const all = cat.items ? cat.items.map((it, i) => [it, i]) : cat.groups.flatMap((g) => g.items.map((it, i) => [it, i]));
        const hits = all.filter(([it]) => norm(it.name + " " + (it.desc || "")).includes(q));
        if (!hits.length) return;
        found += hits.length;
        html += `<h3 class="group-title">${esc(cat.title)}</h3><div class="items">${hits.map(([it, i]) => itemHTML(it, cat, i, k === "burger")).join("")}</div>`;
      });
      out.innerHTML = found ? html : `<p class="empty">Nič sme nenašli pre „${esc($("#q").value)}“.</p>`;
      return;
    }

    const cat = MENU[active];
    if (cat.note) html += `<p class="cat-note">${esc(cat.note)}</p>`;
    if (cat.menuInfo) html += `<div class="callout"><b>+${eur(cat.menuExtra)}</b><span>${esc(cat.menuInfo)}</span></div>`;
    if (cat.items) {
      html += `<div class="items">${cat.items.map((it, i) => itemHTML(it, cat, i, active === "burger")).join("")}</div>`;
    } else {
      html += cat.groups.map((g) => `<h3 class="group-title">${esc(g.name)}</h3><div class="items items--compact">${g.items.map((it, i) => itemHTML(it, cat, i, false)).join("")}</div>`).join("");
    }
    if (cat.footer) html += `<p class="foot-note">${esc(cat.footer)}</p>`;
    if (active === "napoje") html += `<p class="foot-note">Alkohol predávame iba osobám starším ako 18 rokov.</p>`;
    out.innerHTML = html;
  }

  function bindTabs() {
    const tabs = $("#tabs");
    tabs.addEventListener("click", (e) => {
      const b = e.target.closest(".tab");
      if (!b) return;
      active = b.dataset.k;
      $("#q").value = "";
      renderTabs();
      render();
    });
    tabs.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const i = KEYS.indexOf(active);
      active = KEYS[(i + (e.key === "ArrowRight" ? 1 : KEYS.length - 1)) % KEYS.length];
      renderTabs(); render();
      $("#tab-" + active).focus();
    });
    $("#q").addEventListener("input", render);
  }

  /* ---------- Mobilná navigácia ---------- */
  function bindNav() {
    const btn = $("#burgerBtn"), links = $("#links");
    const close = () => { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
    btn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", (e) => { if (e.target.tagName === "A") close(); });
  }

  /* ---------- Oznam ---------- */
  function renderNotice() {
    const a = typeof ANNOUNCEMENT !== "undefined" ? ANNOUNCEMENT : null;
    const box = $("#notice");
    if (!a || !a.enabled || !a.text) { box.hidden = true; return; }
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Bratislava" }).format(new Date()); // RRRR-MM-DD
    if ((a.from && today < a.from) || (a.to && today > a.to)) { box.hidden = true; return; }
    const key = "oznam:" + a.title + "|" + a.text;
    let dismissed = false;
    try { dismissed = sessionStorage.getItem(key) === "1"; } catch (e) {}
    if (dismissed) { box.hidden = true; return; }

    const icons = { info: "📢", warning: "⚠️", closed: "⛔" };
    box.className = "notice" + (a.type && a.type !== "info" ? " notice--" + a.type : "");
    $("#noticeIcon").textContent = icons[a.type] || icons.info;
    $("#noticeBody").innerHTML = (a.title ? `<strong>${esc(a.title)}</strong>` : "") + esc(a.text);
    const x = $("#noticeX");
    x.hidden = !a.closable;
    x.onclick = () => { box.hidden = true; try { sessionStorage.setItem(key, "1"); } catch (e) {} };
    box.hidden = false;
  }

  /* ---------- Init ---------- */
  renderNotice();
  renderTabs();
  render();
  bindTabs();
  bindNav();
  renderZones();
  renderHours();
  renderStatus();
  setInterval(() => { renderStatus(); renderHours(); }, 60000);
  $("#year").textContent = new Date().getFullYear();
})();

