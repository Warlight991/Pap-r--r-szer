 const http = require("http");
 
const items = {
  a12: { id: "a12", name: "Ceruza", price: 120 },
  b99: { id: "b99", name: "Toll", price: 350 },
  x01: { id: "x01", name: "Radír", price: 200 },

  c14: { id: "c14", name: "Filctoll", price: 490 },
  d22: { id: "d22", name: "Vonalzó", price: 250 },
  e31: { id: "e31", name: "Zsírkréta", price: 780 },
  f47: { id: "f47", name: "Tűzőgép", price: 1350 },
  g58: { id: "g58", name: "Gemkapocs készlet", price: 299 },
  h63: { id: "h63", name: "Spirál füzet", price: 890 },
  i70: { id: "i70", name: "Kockás füzet", price: 650 },
  j81: { id: "j81", name: "Sima füzet", price: 620 },
  k92: { id: "k92", name: "Gyűrűs mappa", price: 1790 },
  l03: { id: "l03", name: "Papírvágó", price: 2350 },
  m19: { id: "m19", name: "Kisolló", price: 520 },
  n28: { id: "n28", name: "Nagyolló", price: 890 },
  o39: { id: "o39", name: "Cellux", price: 310 },
  p44: { id: "p44", name: "Post-it jegyzet", price: 590 },
  q57: { id: "q57", name: "Ragasztó stift", price: 480 },
  r66: { id: "r66", name: "Folyékony ragasztó", price: 540 },
  s75: { id: "s75", name: "Tolltartó", price: 2300 },
  t86: { id: "t86", name: "Grafit ceruza 2B", price: 160 },
  u97: { id: "u97", name: "Grafit ceruza HB", price: 150 },
  v08: { id: "v08", name: "Festék készlet", price: 3200 },
  w21: { id: "w21", name: "Ecset készlet", price: 1450 },
  y33: { id: "y33", name: "Képkeret A4", price: 1290 },
  z42: { id: "z42", name: "Akvarell papír", price: 2190 },

  aa11: { id: "aa11", name: "Jegyzetfüzet", price: 990 },
  ab22: { id: "ab22", name: "Tűzőkapocs csomag", price: 390 },
  ac33: { id: "ac33", name: "Színes papír", price: 490 },
  ad44: { id: "ad44", name: "Vonalkód címke", price: 650 },
  ae55: { id: "ae55", name: "Írólap csomag", price: 1390 },
  af66: { id: "af66", name: "Fénymásoló papír", price: 1790 },
  ag77: { id: "ag77", name: "Tollbetét", price: 260 },
  ah88: { id: "ah88", name: "Mechanikus ceruza", price: 1250 },
  ai99: { id: "ai99", name: "Mechanikus ceruza betét", price: 350 },
  aj10: { id: "aj10", name: "Asztali tartó", price: 550 },
  ak20: { id: "ak20", name: "Matrica csomag", price: 780 },
  al30: { id: "al30", name: "Konferencia mappa", price: 3490 },
  am40: { id: "am40", name: "Tollkészlet", price: 2490 },
  an50: { id: "an50", name: "Gyurma készlet", price: 890 },
  ao60: { id: "ao60", name: "Ecsetmosó", price: 690 },
  ap70: { id: "ap70", name: "Festőpaletta", price: 760 },
  aq80: { id: "aq80", name: "Olajfesték készlet", price: 6800 },
  ar90: { id: "ar90", name: "Tűfilc", price: 420 },
  as01: { id: "as01", name: "Nyomtatópapír", price: 1990 },
  at02: { id: "at02", name: "Boríték C6", price: 120 },
  au03: { id: "au03", name: "Boríték LC5", price: 180 },
  av04: { id: "av04", name: "Háttértábla", price: 750 },
  aw05: { id: "aw05", name: "Mappa gumis", price: 890 },
  ax06: { id: "ax06", name: "Iratpapucs", price: 990 },
  ay07: { id: "ay07", name: "Színes jelölő", price: 390 },
  az08: { id: "az08", name: "Rajztábla", price: 2490 },

  ba09: { id: "ba09", name: "Nyomtató tinta", price: 8900 },
  bb10: { id: "bb10", name: "Tinta patron", price: 7600 },
  bc11: { id: "bc11", name: "Papírkosár", price: 1990 },
  bd12: { id: "bd12", name: "Papírvágó kés", price: 1290 },
  be13: { id: "be13", name: "Gumis könyv", price: 1190 },
  bf14: { id: "bf14", name: "Taskalap", price: 330 },
  bg15: { id: "bg15", name: "Címkeíró", price: 4990 },
  bh16: { id: "bh16", name: "Kreatív karton", price: 790 },
  bi17: { id: "bi17", name: "Rendező mappa", price: 1390 },
  bj18: { id: "bj18", name: "Jegyzettömb", price: 450 },
  bk19: { id: "bk19", name: "Papír csipesz", price: 299 },
  bl20: { id: "bl20", name: "Doboz A5", price: 990 },
  bm21: { id: "bm21", name: "Doboz A4", price: 1490 },
  bn22: { id: "bn22", name: "Tartó doboz", price: 1890 },
  bo23: { id: "bo23", name: "Kihúzó", price: 590 },
  bp24: { id: "bp24", name: "Tollhegy készlet", price: 330 },
  bq25: { id: "bq25", name: "Kréta", price: 490 },
  br26: { id: "br26", name: "Krétatábla", price: 3490 },
  bs27: { id: "bs27", name: "Vizesblokk tál", price: 1290 },
  bt28: { id: "bt28", name: "Mini ragasztó", price: 330 },
  bu29: { id: "bu29", name: "Kartonkés", price: 430 },
  bv30: { id: "bv30", name: "Másolópapír csomag", price: 2490 },

  ca31: { id: "ca31", name: "Körző", price: 1290 },
  cb32: { id: "cb32", name: "Tervező füzet", price: 1690 },
  cc33: { id: "cc33", name: "Spirál jegyzet", price: 790 },
  cd34: { id: "cd34", name: "Golyóstoll kék", price: 240 },
  ce35: { id: "ce35", name: "Golyóstoll piros", price: 240 },
  cf36: { id: "cf36", name: "Golyóstoll fekete", price: 240 },
  cg37: { id: "cg37", name: "Szövegkiemelő", price: 520 },
  ch38: { id: "ch38", name: "Kreatív ragasztó", price: 990 },
  ci39: { id: "ci39", name: "Dekor papír", price: 1290 },
  cj40: { id: "cj40", name: "Pausz papír", price: 490 },
  ck41: { id: "ck41", name: "Varrótű", price: 290 },
  cl42: { id: "cl42", name: "Fonal készlet", price: 1350 },
  cm43: { id: "cm43", name: "Hegyező", price: 260 },
  cn44: { id: "cn44", name: "Sarokvédő", price: 180 },
  co45: { id: "co45", name: "Kartonlap", price: 250 },
  cp46: { id: "cp46", name: "Kreatív szalag", price: 460 },
  cq47: { id: "cq47", name: "Alkoholos filc", price: 780 },
  cr48: { id: "cr48", name: "Fóliatasak", price: 390 },
  cs49: { id: "cs49", name: "Fóliahegesztő", price: 9800 },
  ct50: { id: "ct50", name: "Táblafilc", price: 390 },
  cu51: { id: "cu51", name: "Whiteboard törlő", price: 690 },
  cv52: { id: "cv52", name: "Whiteboard spray", price: 1190 },
  cw53: { id: "cw53", name: "Plasztik lap", price: 320 },
  cx54: { id: "cx54", name: "Dosszié", price: 230 },
  cy55: { id: "cy55", name: "Kulcstartó", price: 490 },
  cz56: { id: "cz56", name: "Asztali óra", price: 3490 },

  da57: { id: "da57", name: "Hűtőmágnes", price: 690 },
  db58: { id: "db58", name: "Naptár", price: 1890 },
  dc59: { id: "dc59", name: "Határidőnapló", price: 2190 },
  dd60: { id: "dd60", name: "Kártyatartó", price: 760 },
  de61: { id: "de61", name: "Szögmérő", price: 490 },
  df62: { id: "df62", name: "Iratsín", price: 230 },
  dg63: { id: "dg63", name: "Névjegykártya", price: 170 },
  dh64: { id: "dh64", name: "Nyomtatott címke", price: 650 },
  di65: { id: "di65", name: "Árazó", price: 3990 },
  dj66: { id: "dj66", name: "Árazó címke", price: 580 },
  dk67: { id: "dk67", name: "Fali táblatartó", price: 1990 },
  dl68: { id: "dl68", name: "Könyvtámasz", price: 1390 },
  dm69: { id: "dm69", name: "Gumis dosszié", price: 1090 },
  dn70: { id: "dn70", name: "Gumis tasak", price: 390 },
  do71: { id: "do71", name: "Iratrendező", price: 1490 },
  dp72: { id: "dp72", name: "Könyvkötő lap", price: 490 },
  dq73: { id: "dq73", name: "Könyvkötő fólia", price: 990 },
  dr74: { id: "dr74", name: "Jegyzet marker", price: 340 },
  ds75: { id: "ds75", name: "Pecsét", price: 2490 },
  dt76: { id: "dt76", name: "Pecsétpárna", price: 1190 },
  du77: { id: "du77", name: "Kreatív ecset", price: 780 },
  dv78: { id: "dv78", name: "Rajzszén", price: 890 },
  dw79: { id: "dw79", name: "Képkeret fa", price: 2590 },
  dx80: { id: "dx80", name: "Kifestő készlet", price: 990 },
  dy81: { id: "dy81", name: "Varrókészlet", price: 1490 },
  dz82: { id: "dz82", name: "Tűpárna", price: 650 },

  ea83: { id: "ea83", name: "Ragasztószalag széles", price: 520 },
  eb84: { id: "eb84", name: "Ragasztószalag vékony", price: 310 },
  ec85: { id: "ec85", name: "Spirál könyv", price: 890 },
  ed86: { id: "ed86", name: "Kártyacsomag", price: 990 },
  ee87: { id: "ee87", name: "Montex filc", price: 240 },
  ef88: { id: "ef88", name: "Táblakréta", price: 490 },
  eg89: { id: "eg89", name: "Folyékony tinta", price: 1790 },
  eh90: { id: "eh90", name: "Textil filc", price: 890 },
  ei91: { id: "ei91", name: "Zsineg", price: 290 },
  ej92: { id: "ej92", name: "Műanyag doboz", price: 1390 },
  ek93: { id: "ek93", name: "Tűzőkapocs erős", price: 490 },
  el94: { id: "el94", name: "Gumikarika", price: 190 },
  em95: { id: "em95", name: "Kapocskiszedő", price: 330 },
  en96: { id: "en96", name: "Címkefólia", price: 390 },
  eo97: { id: "eo97", name: "Spirál műanyag", price: 250 },
  ep98: { id: "ep98", name: "Festék patron", price: 4900 },
  eq99: { id: "eq99", name: "Hőpapír tekercs", price: 890 },
  er01: { id: "er01", name: "Kártyavágó", price: 2190 },
  es02: { id: "es02", name: "Matrica nagy", price: 690 },
  et03: { id: "et03", name: "Textil ragasztó", price: 1290 },
  eu04: { id: "eu04", name: "Üvegtoll", price: 4900 },
  ev05: { id: "ev05", name: "Művész ecset", price: 1590 },
  ew06: { id: "ew06", name: "Rafia", price: 390 },
  ex07: { id: "ex07", name: "Filc marker", price: 320 },
  ey08: { id: "ey08", name: "Kártya tok", price: 260 },
  ez09: { id: "ez09", name: "Kreatív doboz", price: 2290 },
};

const server = http.createServer((req, res) => {

  // ----- CORS fejlécek -----
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // OPTIONS = preflight → azonnali válasz
  if (req.method === "OPTIONS") {
    res.statusCode = 200;
    res.end();
    return;
  }

  // MINDIG JSON
  res.setHeader("Content-Type", "application/json");

  const url = req.url.split("/");

  // GET /items
  if (req.method === "GET" && req.url === "/items") {
    const weird = Math.random() < 0.5;

    if (weird) {
      res.end(JSON.stringify({
        status: "ok",
        data: items
      }));
    } else {
      res.end(JSON.stringify(Object.values(items)));
    }
    return;
  }

  // GET /items/:id
  if (req.method === "GET" && url[1] === "items" && url[2]) {
    const id = url[2];
    const item = items[id];

    if (!item) {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Nem találom..." }));
      return;
    }

    const weird = Math.random() < 0.5;
    if (weird) {
      res.end(JSON.stringify({
        found: true,
        item
      }));
    } else {
      res.end(JSON.stringify(item));
    }
    return;
  }

  // Nem létező útvonal
  res.statusCode = 404;
  res.end(JSON.stringify({ error: "ismeretlen útvonal!" }));
});

server.listen(3005, () => {
  console.log("Server running on http://localhost:3005");
});