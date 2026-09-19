# Pachete

| Pachet | Rol | Contract |
| --- | --- | --- |
| `calorii/` | motorul de calcul (TypeScript, fără dependențe, funcții pure); publicat pe npm ca `calorii` | `calorii/README.md` (API) + `calorii/test/vectors.json` |
| `calorii-py/` | portul Python al motorului; publicat pe PyPI ca `calorii` | aceiași vectori, copiați la build |
| `calorii-mcp/` | server MCP care expune calculele și căutarea în date; local (stdio) întâi, HTTP găzduit ulterior | `calorii-mcp/README.md` (unelte, scheme) |
| `widget/` | calculatorul ca script de pus pe orice site, cu Shadow DOM și o linie de atribuire | `widget/README.md` (atribute `data-*`) |

Fiecare pachet are propriul `README.md`, un `AGENTS.md` scurt (cum rulezi, ce nu atingi) și teste rulabile izolat. Vezi `docs/SPEC.md` pentru specificația completă și `docs/TASKS.md` pentru pachetele de lucru.
