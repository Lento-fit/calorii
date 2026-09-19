# Changelog — date

Toate schimbările din `alimente-ro.json`, cu dată și sursă. Format: `## [versiune] — AAAA-LL-ZZ`, apoi liste `Adăugat` / `Corectat` / `Eliminat`.

## [0.1.0] — 2026-09-20

### Adăugat

- 38 de alimente de bază din USDA FoodData Central, SR Legacy (publicat 2019-04-01), domeniu public: ouă, pui, somon, orez, cartofi, paste, pâine albă, ovăz, linte, năut, lapte, iaurt, feta, unt, ulei de măsline, nuci, migdale, miere, zahăr și 14 legume și fructe. Fiecare înregistrare are FDC ID, URL, versiunea sursei, data preluării și porții cu gramaje din aceeași fișă.
- Notă standard la 12 înregistrări (majoritatea vegetale) unde energia USDA, calculată cu factori Atwater specifici, diferă cu peste 8% de calculul general 4/4/9.
- Numele românești sunt ale mentenanților; descrierile USDA rămân în `nume.en` și în `sursa.referinta`.
- `scripts/export-csv.py` generează `alimente-ro.csv` din JSON.

### Lipsesc încă

- Preparate românești (sarmale, ciorbe, mămăligă): cer rețete cu gramaje și greutate finală, ca estimări.
- Produse de brand din România: cer valorile de pe etichetă, cu producătorul numit.
- Iaurt grecesc integral, telemea, brânză de vaci, carne de porc și vită: cer alte fișe sau surse.

## [0.0.0] — 2026-09-19

- Schema și regulile de proveniență. Colecția e goală; primele înregistrări vin prin PR-uri cu sursă.
