# Pachete de lucru și sarcini

Proiectul e construit de mai mulți contribuitori (oameni și agenți) în paralel. Fiecare pachet de lucru (WP) scrie doar în directoarele lui; ce e comun (contractele) se schimbă doar prin PR etichetat `contract-change`. Fiecare rând de mai jos devine un issue pe GitHub (șablonul „Sarcină”), cu criteriile de acceptare copiate. Board: GitHub Projects, coloane Backlog · Ready · În lucru · În review · Blocat · Gata.

| WP | Livrabil | Directoare | Depinde de | Stare |
| --- | --- | --- | --- | --- |
| WP0 Guvernanță și CI | schelet, licențe, `AGENTS.md`, `CONTRIBUTING.md`, `CODEOWNERS`, șabloane, CI, registrul de limbi, contracte inițiale | rădăcină, `.github/`, `config/`, `docs/` | — | gata (acest commit) |
| WP1 Cercetare pagini | confirmarea listei de pagini și a întrebărilor frecvente pentru română | `docs/PAGINI-ro.md` | — | ready |
| WP2 Motor `calorii` | pachet TypeScript care trece toți vectorii; README API; publicare npm | `packages/calorii/` | — | implementat, în review (PR); publicarea npm rămâne pentru primul tag |
| WP3 Date `alimente-ro` | primele înregistrări cu sursă și licență; export CSV la build; validator extins la nevoie | `data/`, `scripts/` | — | primele 38 de alimente (USDA) în review (PR); deschis pentru preparate românești, produse de brand și alte surse |
| WP4 Site shell și i18n | Astro, layout, componente-calculator, registrul de limbi în build, rute, hreflang, sitemap, `llms.txt`, deploy Vercel | `site/` (fără `src/content/`) | WP2 | ready |
| WP5 Conținut română | cele 13 pagini din `docs/PAGINI-ro.md`, `i18n/ro.json`, surse verificate | `site/src/content/ro/`, `site/src/i18n/ro.json` | WP1, WP4 | blocat de WP4 |
| WP6 Server MCP | `calorii-mcp` local, `server.json`, snippet-uri testate, `docs/mcp-compat.md`; ulterior nivelul HTTP | `packages/calorii-mcp/` | WP2, WP3 | ready după merge WP2 |
| WP7 Widget | `widget.js`, `/embed/`, atribuire `nofollow` implicit | `packages/widget/`, `site/src/pages/embed/` | WP2, WP4 | blocat de WP4 |
| WP8 Python | port cu aceiași vectori; publicare PyPI prin Trusted Publishing | `packages/calorii-py/` | WP2 | ready după merge WP2 |
| WP9 Limbi | un WP per limbă, după checklist-ul din `docs/SPEC.md` §2 | `site/src/content/<locale>/`, `site/src/i18n/<locale>.json`, `data/translations/<locale>.json` | WP4, WP5 | după română |

## Criterii de acceptare (rezumat; detaliile în `docs/SPEC.md` și în contracte)

- **WP2:** `npm test` trece toți vectorii din `test/vectors.json`; acoperire ≥ 95%; teste de proprietate; `npm pack --dry-run` curat; README API complet.
- **WP3:** `scripts/validate-data.py` fără erori; fiecare înregistrare cu sursă, licență și dată; `CHANGELOG.md` actualizat; export CSV generat.
- **WP4:** build static; registrul de limbi respectat; hreflang doar între pagini publicate; `noindex` pe hosturi non-producție; Lighthouse ≥ 95; testul cu locale fictiv trece.
- **WP5:** fiecare pagină cu toate câmpurile din frontmatter, calculator funcțional, exemplu, metodă, întrebări frecvente, surse care răspund 200, un singur link către aplicație.
- **WP6:** toate uneltele răspund corect în MCP Inspector; cazuri negative; `server.json` valid; `docs/mcp-compat.md` cu matricea client/versiune/transport/dată.
- **WP7:** < 20 KB gzip; funcționează pe o pagină cu CSS agresiv; atribuire vizibilă și calificabilă; `/embed/` cu generator de cod.
- **WP8:** aceiași vectori, `pytest` verde, zero dependențe.

## Primele 48 de ore

1. Mentenanții: protecția ramurii `main` (CI obligatoriu, fără push direct), proiectul Vercel, secretele pentru publicare.
2. Integratorul deschide issue-urile WP1–WP8 din acest tabel.
3. Contribuitorii iau WP-urile fără dependențe: WP1, WP2, WP3, WP4. WP5 începe când WP4 fixează frontmatter-ul.
4. Prima integrare: când WP2 și WP4 au CI verde, primul calculator apare pe `/`.
