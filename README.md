# Jack´s Burger Delivery – web

Statická stránka (HTML + CSS + JS, bez build kroku). Obsah pochádza z https://www.jacksburger.sk.

## Štruktúra
- `index.html` – stránka
- `css/style.css` – štýly
- `js/data.js` – **menu, ceny, otváracia doba, donáška** (tu sa upravuje obsah)
- `js/app.js` – vykresľovanie menu, vyhľadávanie, stav „otvorené/zatvorené“
- `assets/` – logo, favicon, náhľad pre sociálne siete

## Nasadenie na GitHub Pages
```bash
git init
git add .
git commit -m "Jack's Burger web"
git branch -M main
git remote add origin https://github.com/<pouzivatel>/<repozitar>.git
git push -u origin main
```
Potom na GitHube: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.
Stránka bude na `https://<pouzivatel>.github.io/<repozitar>/`.

Všetky cesty sú relatívne, takže funguje aj v podadresári repozitára.
Vlastná doména: pridajte súbor `CNAME` s názvom domény.

