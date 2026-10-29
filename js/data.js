/* Dáta prevzaté z https://www.jacksburger.sk – úpravy cien/položiek rob len tu. */
const MENU = {
  burger: {
    title: "Burgre",
    note: "100% hovädzie mäso KRAVA & CO · domáce omáčky · domáce žemle",
    menuExtra: 3.0,
    menuInfo: "Burger menu = burger + 160 g crispers hranolky, 3 ks cibuľové krúžky a omáčka",
    items: [
      { name: "Tennessee", price: 9.5, desc: "Domáca žemľa, domáca BBQ omáčka, poľníček, 120 g grilovaný hermelín, brusnicová omáčka, volské oko, rukola" },
      { name: "Florida", price: 10.0, desc: "Domáca žemľa, domáca horčicovo-medová omáčka, lolo šalát, domáca karamelizovaná červená cibuľa, paradajka, 150 g marinovaný kurací steak, cheddar, grilovaný ananás", tag: "Kuracie" },
      { name: "Oklahoma", price: 10.5, desc: "Domáca žemľa, sriracha mayo, ľadový šalát, červená cibuľa, 160 g mleté hovädzie mäso, cheddar, slaninka" },
      { name: "New York", price: 10.5, desc: "Domáca žemľa, domáca BBQ omáčka, lolo šalát, 160 g mleté hovädzie KRAVA&CO, cheddar, paradajka, kyslá uhorka, rukola, domáca horčicovo-medová mayo" },
      { name: "Alabama", price: 10.5, desc: "Domáca žemľa, domáca BBQ omáčka, poľníček, avokádo, paradajka, karamelizovaná červená cibuľa, 160 g mleté hovädzie KRAVA&CO, cheddar, volské oko, domáca slanina, majonéza" },
      { name: "Kentucky", price: 10.5, desc: "Domáca žemľa, domáca BBQ omáčka, lolo šalát, paradajka, kyslá uhorka, čerstvá červená cibuľa, 160 g mleté hovädzie KRAVA&CO, cheddar, domáca slanina, rukola" },
      { name: "Texas", price: 10.5, desc: "Domáca žemľa, chilli omáčka, lolo šalát, tortilla chips, paradajka, kyslá uhorka, čerstvá červená cibuľa, jalapeños, 160 g mleté hovädzie KRAVA&CO, cheddar, domáca slanina, rukola, majonéza", tag: "Pikantný" },
      { name: "Kansas", price: 10.5, desc: "Domáca žemľa, domáca horčicovo-medová omáčka, poľníček, domáca slanina, 160 g mleté hovädzie KRAVA&CO, cheddar, domáca karamelizovaná červená cibuľa, nakladané kukuričky" },
      { name: "Ohio", price: 10.5, desc: "Domáca žemľa, cesnaková omáčka, rukola, 2× domáca slanina, 160 g mleté hovädzie KRAVA&CO, cheddar, brusnicová omáčka, hranolky" },
      { name: "Jack Daniel´s", price: 10.5, desc: "Domáca žemľa, poľníček, 160 g mleté hovädzie KRAVA&CO, cheddar, domáca karamelizovaná červená cibuľka, volské oko, domáca slanina, rukola, originál BBQ omáčka JACK DANIEĹS" },
      { name: "Nevada", price: 14.0, desc: "Domáca žemľa, domáca BBQ omáčka, lolo šalát, 2× 160 g mleté hovädzie KRAVA&CO, 2× cheddar, 4× domáca slanina, volské oko, majonéza", tag: "Double" },
      { name: "Vermont", price: 14.0, desc: "Domáca žemľa, domáca cesnaková omáčka, lolo šalát, 160 g mleté hovädzie KRAVA&CO, cheddar, 4× domáca slanina, grilovaný hermelín, brusnicová omáčka, majonéza" }
    ],
    footer: "Omáčky na výber: BBQ, horčicovo-medová, čili, sweet čili, cesnaková, majonéza, brusnicová, kečup, tatárska"
  },

  pizza: {
    title: "Pizza",
    note: "Pizza 36 cm · možnosť smotanového základu · pizze pol na pol nerobíme · výhradne živočíšny syr",
    items: [
      { name: "Margharita", price: 9.9, desc: "tomat, oregáno, syr, mozzarella, cesnakové okraje (700 g)" },
      { name: "Kukuricová", price: 9.9, desc: "tomat, oregáno, šunka, kukurica, syr, cesnakové okraje (740 g)" },
      { name: "Hawai", price: 9.9, desc: "tomat, oregáno, šunka, ananás, syr, cesnakové okraje (740 g)" },
      { name: "Funghi", price: 9.9, desc: "tomat, oregáno, šunka, čerstvé šampióny, syr, cesnakové okraje (720 g)" },
      { name: "Olivová", price: 9.9, desc: "tomat, oregáno, šunka, olivy, syr, cesnakové okraje (730 g)" },
      { name: "Brokolicová", price: 9.9, desc: "tomat, oregáno, šunka, brokolica, syr, cesnakové okraje (740 g)" },
      { name: "Gazdovská", price: 10.9, desc: "tomat, oregáno, saláma, klobása, slanina, cibuľa, vajíčko, feferóny, syr, cesnakové okraje (930 g)" },
      { name: "Sedliacka", price: 10.9, desc: "tomat, oregáno, klobása, feferóny, kuracie mäso, syr, mozzarella, cesnakové okraje (890 g)" },
      { name: "Hawai II", price: 10.9, desc: "tomat, oregáno, šunka, saláma, ananás, syr, niva, cesnakové okraje (920 g)" },
      { name: "Talianska", price: 10.9, desc: "tomat, oregáno, saláma, čierne olivy, paradajky, syr, cesnakové okraje (890 g)" },
      { name: "Mexická", price: 10.9, desc: "tomat, oregáno, klobása, jalapeños, kukurica, fazuľa, cibuľa, syr, cesnakové okraje (900 g)", tag: "Pikantná" },
      { name: "Quattro formaggi", price: 10.9, desc: "tomat, oregáno, syr, mozzarella, niva, hermelín, cesnakové okraje (820 g)" },
      { name: "Kuracia", price: 10.9, desc: "tomat, oregáno, šunka, kukurica, kuracie mäso, brokolica, syr, cesnakové okraje (850 g)" },
      { name: "Labužnícka", price: 10.9, desc: "tomat, oregáno, šunka, 8× slanina, niva, syr, cesnakové okraje (800 g)" },
      { name: "Pikant", price: 10.9, desc: "tomat, oregáno, pikantná saláma, cibuľa, feferóny, syr, mozzarella, cesnakové okraje (830 g)", tag: "Pikantná" },
      { name: "R'spécial", price: 10.9, desc: "tomat, oregáno, prosciutto, čerstvé šampióny, cherry paradajky, olivy, mokrá mozzarella, rukola, cesnakové okraje (680 g)" },
      { name: "Delikates", price: 11.5, desc: "tomat, oregáno, saláma, klobása, slanina, paradajky, zelené olivy, čerstvé šampióny, syr, cesnakové okraje (940 g)" },
      { name: "Sweetchilli", price: 11.9, desc: "tomat, oregáno, eidam, pikantná saláma, ananás, niva, červená cibuľa, chilli nite, cesnakové okraje (890 g)", tag: "Pikantná" },
      { name: "Carbonara", price: 11.9, desc: "smotanový základ, oregáno, šunka, 2× vajíčko, 8× slanina, eidam, parmezán, cesnakové okraje (720 g)" },
      { name: "Kráľovská", price: 11.9, desc: "tomat, oregáno, šunka, klobása, šampióny, zelené olivy, niva, jalapeño papričky, fazuľa, syr, cesnakové okraje (880 g)" },
      { name: "Prominent", price: 11.9, desc: "tomat, oregáno, pikantná saláma, eidam, jalapeño, gorgonzola, karamelizovaná cibuľa, rukola, cesnakové okraje (820 g)", tag: "Pikantná" }
    ]
  },

  minutky: {
    title: "Minútky",
    items: [
      { name: "Kuracie nugetky", price: 3.5, desc: "5 ks" },
      { name: "Kuracie krídielka pikantné chrumkavé", price: 5.5, desc: "5 ks", tag: "Pikantné" },
      { name: "Kuracie stripsy v kukuričných lupienkoch", price: 6.0, desc: "5 ks" },
      { name: "Vyprážaný syr", price: 6.0, desc: "125 g, 200 g hranolky, tatárska omáčka / kečup 30 g" },
      { name: "Vyprážaný kurací rezeň", price: 6.5, desc: "125 g, 200 g hranolky, tatárska omáčka / kečup 30 g" },
      { name: "Grilovaný hermelín s brusnicovou omáčkou", price: 6.5, desc: "120 g hermelín, 200 g hranolky, 50 g brusnicová omáčka" }
    ]
  },

  napoje: {
    title: "Nápoje",
    items: [
      { name: "Pepsi, Mirinda, 7up", price: 2.0, desc: "plechovka 0,33 l" },
      { name: "Pilsner Urquell", price: 3.0, desc: "sklo 0,5 l · alkoholický nápoj", tag: "18+" }
    ]
  },

  prilohy: {
    title: "Prílohy a omáčky",
    groups: [
      {
        name: "Prílohy",
        items: [
          { name: "Hranolky", price: 3.0, desc: "250 g" },
          { name: "Crispers", price: 3.0, desc: "250 g" },
          { name: "Batatové hranolky", price: 4.5, desc: "250 g" },
          { name: "Cibuľové krúžky", price: 4.0, desc: "10 ks" },
          { name: "Hovädzie mäso", price: 3.5, desc: "160 g" },
          { name: "Karamelizovaná cibuľka", price: 2.0, desc: "80 g" },
          { name: "Pikantná saláma", price: 2.0, desc: "50 g" },
          { name: "Eidam", price: 1.5, desc: "50 g" },
          { name: "Hermelín", price: 1.5, desc: "50 g" },
          { name: "Kuracie mäso", price: 1.5, desc: "80 g" },
          { name: "Mozzarella", price: 1.5, desc: "50 g" },
          { name: "Niva", price: 1.5, desc: "50 g" },
          { name: "Ananás", price: 1.0, desc: "50 g" },
          { name: "Brokolica", price: 1.0, desc: "50 g" },
          { name: "Cibuľa", price: 1.0, desc: "50 g" },
          { name: "Feferóny", price: 1.0, desc: "50 g" },
          { name: "Klobása", price: 1.0, desc: "50 g" },
          { name: "Kukurica", price: 1.0, desc: "50 g" },
          { name: "Olivy", price: 1.0, desc: "50 g" },
          { name: "Paradajky", price: 1.0, desc: "50 g" },
          { name: "Prosciutto", price: 1.0, desc: "25 g" },
          { name: "Saláma", price: 1.0, desc: "50 g" },
          { name: "Slanina", price: 1.0, desc: "50 g" },
          { name: "Šampióny", price: 1.0, desc: "50 g" },
          { name: "Šunka", price: 1.0, desc: "50 g" },
          { name: "Vajíčko", price: 1.0, desc: "1 ks" },
          { name: "Cheddar", price: 0.5, desc: "1 plátok" },
          { name: "Príbor so servítkou", price: 0.5, desc: "hygienicky balené, 1 ks" }
        ]
      },
      {
        name: "Omáčky",
        items: [
          { name: "BBQ", price: 2.0, desc: "50 g" },
          { name: "Brusnicová", price: 2.0, desc: "50 g" },
          { name: "Chilli", price: 2.0, desc: "50 g" },
          { name: "Sweet chilli", price: 2.0, desc: "50 g" },
          { name: "Domáca cesnaková", price: 2.0, desc: "50 g" },
          { name: "Domáca horčicovo-medová", price: 2.0, desc: "50 g" },
          { name: "Majonéza", price: 2.0, desc: "50 g" },
          { name: "Kečup", price: 1.0, desc: "30 g" },
          { name: "Tatárska omáčka", price: 1.0, desc: "30 g" }
        ]
      }
    ]
  }
};

const HOURS = [
  // index = Date.getDay(): 0 = nedeľa
  { day: "Nedeľa", open: null, close: null },
  { day: "Pondelok", open: "15:00", close: "20:45" },
  { day: "Utorok", open: "15:00", close: "20:45" },
  { day: "Streda", open: "11:00", close: "20:45" },
  { day: "Štvrtok", open: "11:00", close: "20:45" },
  { day: "Piatok", open: "11:00", close: "21:30" },
  { day: "Sobota", open: "12:00", close: "21:30" }
];

const DELIVERY = [
  { fee: 0, label: "Zadarmo", places: "Vranov, Čemerné, Čičava, Nižný Kručov, Komárany", cond: "pri minimálne 1 jedle" },
  { fee: 4, label: "4,00 €", places: "Hencovce, Merník, Vechec, Čakľov, Jastrabie, Lomnica, Majerovce", cond: "pri objednávke 3 jedál zdarma" },
  { fee: 6, label: "6,00 €", places: "Michalok, Sedliská, Sačurov, Kamenná Poruba, Nižný Hrabovec, Soľ", cond: "pri objednávke 4 jedál zdarma" },
  { fee: 8, label: "8,00 €", places: "Vyšný Kazimír, Ondavské Matiašovce, Tovarné, Kladzany, Kučín, Poša, Rudľov, Jusková Voľa", cond: "pri objednávke 5 jedál zdarma" }
];
