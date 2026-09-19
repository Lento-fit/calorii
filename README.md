**Română** · [English](README.en.md)

# calorii — calculator de calorii open-source

Calcule nutriționale de bază, corecte și explicate: necesar caloric zilnic (BMR, TDEE), deficit sau surplus caloric cu praguri de siguranță, macronutrienți, IMC și calorii pe porție, pe o bază de date deschisă cu alimente și preparate românești în care fiecare valoare are sursa ei.

**Stare: schelet (v0).** Structura, contractele, regulile de contribuție și CI-ul sunt gata. Motorul, datele, site-ul, serverul MCP și widget-ul se construiesc pe pachete de lucru, prin pull request-uri. Lista e în [docs/TASKS.md](docs/TASKS.md).

## Viziune

O resursă deschisă, verificabilă și multilingvă despre calorii și nutriție: un fel de enciclopedie a caloriilor, cu date pe care le pot folosi oamenii, dezvoltatorii și asistenții AI, în care fiecare cifră are o sursă și fiecare corecție lasă urmă. Începem cu nucleul: calculatoare corecte, date documentate și un mod clar de a contribui. Româna e prima limbă publicată; arhitectura e făcută pentru toate limbile care urmează.

## Ce va conține

| Componentă | Ce face | Unde |
|---|---|---|
| `calorii` (npm) | motor de calcul, funcții pure, fără dependențe | [`packages/calorii/`](packages/calorii/) |
| `alimente-ro` | set de date deschis (CC BY 4.0), valori la 100 g cu proveniență | [`data/`](data/) |
| site | calculatoare interactive, explicații, surse; română întâi, apoi alte limbi | [`site/`](site/) |
| `calorii-mcp` | server MCP cu aceleași calcule și căutare în date, pentru asistenți AI | `packages/calorii-mcp/` |
| widget | calculatorul, de pus pe orice site, cu o linie de atribuire | `packages/widget/` |
| `calorii` (PyPI) | port Python al motorului, aceiași vectori de test | `packages/calorii-py/` |

## Principii

- **Nicio cifră fără sursă.** Nici în date, nici în text. `null` înseamnă lipsă, nu 0.
- **Estimări, nu diagnostic.** Fiecare rezultat e o estimare pentru adulți sănătoși, cu praguri de siguranță și cu limitele spuse pe față.
- **Deschis, dar verificat.** Oricine poate propune un aliment, o corecție sau o limbă; publicarea trece prin review cu surse.
- **Română întâi, apoi celelalte limbi.** Arhitectura e multi-locale de la primul commit ([`config/locales.json`](config/locales.json)); o bază comună de date și formule, cu denumiri și texte locale deasupra; o limbă intră doar cu text revizuit de un vorbitor nativ.
- **Contribuții prin PR.** Pachete de lucru independente, contracte în fișiere, review încrucișat, CI verde.

## Contribuie

Ghidul complet, în română și engleză: [CONTRIBUTING.md](CONTRIBUTING.md) · [CONTRIBUTING.en.md](CONTRIBUTING.en.md). Regulile pentru oricine lucrează în repo, om sau agent: [AGENTS.md](AGENTS.md). Specificația: [docs/SPEC.md](docs/SPEC.md). Deciziile: [docs/decizii.md](docs/decizii.md).

```bash
python3 scripts/validate-json.py
python3 scripts/validate-data.py
```

## Cine suntem

Proiect creat și întreținut de echipa [Lento.fit](https://lento.fit/) (Netwise Media SRL, România). Lento.fit este un asistent de nutriție pentru iPhone și Android. Acest proiect este independent de aplicație: tot ce e aici funcționează fără ea. Contact: hello@lento.fit.

## Licențe

Cod: [MIT](LICENSE). Date din `data/`: [CC BY 4.0](data/LICENSE), atribuire „Date: Lento.fit — github.com/Lento-fit/calorii”. Sursele datelor își păstrează condițiile ([data/PROVENIENTA.md](data/PROVENIENTA.md)).
