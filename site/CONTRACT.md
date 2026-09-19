# Contractul site-ului (WP4 ↔ WP5 ↔ WP9)

## Structură

```text
site/
  src/content/<locale>/<pagina>.md     # conținutul paginilor, un fișier per pagină și limbă
  src/content/_schema.ts               # schema frontmatter (Zod), sursa de adevăr pentru câmpuri
  src/i18n/<locale>.json               # toate șirurile de interfață (etichete, unități, validări, avertismente, CTA)
  src/routes/<locale>.json             # pageId → slug local; din el se generează hreflang și selectorul de limbă
  src/components/calculators/          # insule JS vanilla care importă motorul `calorii`
  public/robots.txt
```

Registrul limbilor e `config/locales.json` (rădăcina repo-ului). Doar limbile `published` intră în build, sitemap și hreflang.

## Frontmatter (obligatoriu pentru fiecare pagină)

| Câmp | Tip | Note |
|---|---|---|
| `pageId` | string | identificator stabil, comun între limbi (`deficit-caloric`) |
| `slug` | string | slugul local al paginii (fără prefix de limbă) |
| `title` | string | ≤ 60 caractere |
| `description` | string | 120–155 caractere, răspunsul direct |
| `h1` | string | |
| `lead` | string | 2–3 propoziții cu răspunsul, înainte de orice unealtă |
| `calculator` | enum | `necesar` · `deficit` · `slabit` · `alimente` · `macro` · `imc` · `none` |
| `faq` | listă `{ q, a }` | 3–6 întrebări; răspunsul în prima propoziție; 40–90 de cuvinte |
| `surse` | listă `{ titlu, url }` | verificate la build (link check) |
| `status` | enum | `draft` · `reviewed` · `published` |
| `updated` | dată | |

## Anatomia unei pagini-calculator (ordinea din DOM)

1. `<title>`, `<meta name="description">`, canonical, hreflang (doar între variante publicate, inclusiv pagina însăși; niciodată spre homepage-ul altei limbi).
2. H1.
3. Lead (`<p class="lead">`).
4. Calculatorul: `<label>` pentru fiecare câmp, unități vizibile, validare inline, rezultat marcat „estimare” cu interval, `aria-live` pe rezultat, buton „Copiază rezultatul”, link „Cum am calculat”. Pagina rămâne utilă și fără JavaScript (textul și exemplul calculat).
5. Exemplu calculat (profil concret, cifre rotunjite la 10 kcal).
6. Cum calculăm: formula cu constante, factorul ales, ce nu poate estima formula.
7. Întrebări frecvente (vizibile; `FAQPage` JSON-LD opțional și identic cu textul).
8. Surse.
9. Un singur link către aplicație, sub rezultat, cu text calm; în footer: „Un proiect open-source de la Lento.fit · cod pe GitHub · date CC BY 4.0”.
10. JSON-LD: `WebApplication` (gratuit, `HealthApplication`) + `BreadcrumbList`; pe `/despre/`: `Organization` + `SoftwareApplication` pentru aplicație.

## Reguli tehnice

- Fără framework de UI la runtime; JS total pe pagină < 25 KB gzip; fără fonturi externe; LCP < 1,5 s pe mobil; Lighthouse mobil ≥ 95 la toate cele patru categorii.
- Fără cookies, fără analytics cu identificatori; evenimente anonime („calculator folosit”, „click către aplicație”) fără valorile introduse.
- Contrast AA, focus vizibil, navigare din tastatură.
- `robots.txt` permisiv, cu `Sitemap:`; `X-Robots-Tag: noindex` pe orice host care nu e domeniul final.
- Numere formatate cu `Intl.NumberFormat` după `config/locales.json`; unități metric implicit, toggle imperial disponibil.
- `llms.txt` și `llms-full.txt` generate la build din conținutul publicat, cu o secțiune per limbă.

## Textele despre aplicația Lento.fit

Descrierea aplicației există într-un singur loc per limbă: cheile `despre.*` din `src/i18n/<locale>.json` (aprobată de mentenanți). Paginile, footer-ul și `/despre/` o folosesc de acolo; nu se rescrie liber. Fapte permise: cele din `despre.*`. Nimic altceva despre aplicație în conținut.

## Test de acceptare al arhitecturii

Într-un branch de test se adaugă un locale fictiv `xx` cu două pagini: build-ul trece, hreflang-ul și selectorul apar corect, erorile de validare nu rămân în română, textele lungi nu rup interfața, separatorul decimal e cel din registru. Dacă adăugarea unei limbi cere modificări în cod, arhitectura nu e gata.
