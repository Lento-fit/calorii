# Specificație tehnică

Documentul de referință pentru toate pachetele de lucru. Contractele executabile sunt fișiere: `packages/calorii/test/vectors.json` (motor), `data/schema/aliment.schema.json` (date), `config/locales.json` (limbi), `site/CONTRACT.md` (site), README-urile pachetelor `calorii-mcp` și `widget` (unelte și atribute). Când acest document și un contract-fișier diferă, contractul-fișier câștigă și se deschide un PR care le aliniază.

## 1. Ce construim

1. **Motor `calorii`** (npm, apoi PyPI): BMR cu trei formule, TDEE, țintă calorică cu praguri și recalculare, macronutrienți cu politică de fezabilitate, IMC pe intervale continue, interval de greutate sănătoasă, porții, timp până la țintă ca scenariu aritmetic. Detalii: `packages/calorii/README.md`.
2. **Date `alimente-ro`**: set deschis CC BY 4.0, valori la 100 g așa cum se consumă, porții uzuale, sursă și licență pe fiecare înregistrare, `null` pentru lipsă. Detalii: `data/README.md`, `data/PROVENIENTA.md`.
3. **Site**: pagini-calculator în română la rădăcină, alte limbi sub prefix, arhitectură multi-locale de la primul commit. Detalii: `site/CONTRACT.md`, `docs/PAGINI-ro.md`.
4. **Server MCP `calorii-mcp`**: aceleași calcule și căutarea în date, pentru asistenți AI. Nivelul 1: local (stdio, `npx calorii-mcp@<versiune>`), fără rețea și fără chei. Nivelul 2 (ulterior, livrabil separat): același cod expus HTTP, fără stare, găzduit; clienții care nu suportă stdio (de exemplu ChatGPT) au nevoie de acest nivel. Unelte: `calculate_daily_calories`, `calculate_deficit_plan`, `calculate_macros`, `calculate_bmi`, `search_food` (cu `locale`, cu și fără diacritice), `portion_nutrition`, `about` (descrierea proiectului și a mentenanților, factual). Toate acceptă `lang` opțional pentru textele destinate oamenilor (implicit `en`; `ro` și `en` în prima versiune). Fiecare răspuns poartă `source` și disclaimer-ul „estimări, nu sfat medical”. Datele introduse nu se loghează. Compatibilitatea declarată doar pentru clienții testați, cu matrice în `docs/mcp-compat.md`.
5. **Widget**: `widget.js` (IIFE, < 20 KB gzip, Shadow DOM). Utilizare (adresa site-ului se stabilește la lansare): `<div data-calorii="deficit" data-lang="ro"></div><script async src="https://<adresa-site-ului>/widget.js"></script>`. Tipuri: `necesar` · `deficit` · `macro` · `imc`. Sub rezultat, o linie de atribuire vizibilă „Calculator de Lento.fit” cu link către pagina corespunzătoare de pe site, **`rel="nofollow"` implicit**, iar gazda poate alege altă calificare prin `data-attribution-rel`. Alternativă iframe: `/embed/<tip>/`. Șirurile în `packages/widget/i18n/<locale>.json`.

## 2. Limbi

Română întâi; arhitectura suportă din prima zi toate limbile din `config/locales.json`. O limbă nouă înseamnă: registru actualizat, `i18n/<locale>.json` complet, `routes/<locale>.json`, conținut scris în limba țintă (nu tradus automat fără revizie de vorbitor nativ), `data/translations/<locale>.json`, șiruri MCP și widget, hreflang și sitemap actualizate, verificări de calitate pe două pagini. Nimic nu intră în producție înainte de `published`.

## 3. Calitate (porți în CI)

- Motor: vectori + teste de proprietate, acoperire ≥ 95%.
- Date: `scripts/validate-data.py` (schema, `null` pentru lipsă, sursă și licență pe rând, diagnostic 4/4/9 cu explicație în `note`, traduceri cu chei existente).
- JSON: `scripts/validate-json.py`.
- Markdown: markdownlint. Secrete: gitleaks. Linkuri: lychee săptămânal.
- Site: `astro check`, validare HTML, Lighthouse mobil ≥ 95 pe trei pagini, link check, sitemap complet, `noindex` pe hosturi non-producție.
- MCP: MCP Inspector pe toate uneltele, cazuri negative, `npm pack --dry-run` curat.
- Widget: dimensiune, funcționare pe o pagină cu CSS agresiv, atribuire vizibilă.

## 4. Reguli editoriale și de siguranță

- Fiecare rezultat e „estimare”; disclaimer pe fiecare pagină și în fiecare răspuns MCP; praguri 1.200/1.500 kcal cu mesaj de consult; formulele sunt pentru adulți sănătoși; sarcina, alăptarea, afecțiunile și minorii primesc mesaj explicit în flux.
- Fără promisiuni de slăbire rapidă; ritmul sustenabil e 0,25–1% din greutate pe săptămână și e prezentat așa.
- Despre aplicația Lento.fit se spun doar faptele din cheile `despre.*` (`site/src/i18n/<locale>.json`), aprobate de mentenanți. Un singur link către aplicație pe pagină.
- Comparațiile cu alte aplicații (pagina `aplicatii`) sunt tabele factuale, cu data verificării, editabile prin PR (`data/aplicatii.json`).
- Nicio cifră fără sursă, nicăieri: nici în date, nici în text, nici în FAQ.
