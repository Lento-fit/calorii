**Română** · [English](README.en.md)

<h1 align="center">calorii</h1>

<p align="center"><strong>Enciclopedia deschisă a caloriilor.</strong><br>
Calculatoare corecte, date cu sursă pe fiecare cifră, în limba fiecăruia.<br>
Pentru oameni, pentru dezvoltatori, pentru asistenții AI.</p>

<p align="center">[![CI](https://github.com/Lento-fit/calorii/actions/workflows/ci.yml/badge.svg)](https://github.com/Lento-fit/calorii/actions/workflows/ci.yml) [![Cod: MIT](https://img.shields.io/badge/cod-MIT-2ea44f)](LICENSE) [![Date: CC BY 4.0](https://img.shields.io/badge/date-CC%20BY%204.0-2ea44f)](data/LICENSE) [![Contribuții binevenite](https://img.shields.io/badge/contribu%C8%9Bii-binevenite-D1F06F)](CONTRIBUTING.md) [![Limbi](https://img.shields.io/badge/limbi-RO%20%E2%86%92%2016-123E32)](config/locales.json)</p>

---

## De ce există

Toată lumea caută același lucru: *câte calorii am nevoie, câte are ce mănânc, cum le împart.* Răspunsurile de pe internet sunt de trei feluri: calculatoare fără explicații, tabele fără surse și articole care vor să-ți vândă ceva. Niciunul nu poate fi verificat. Niciunul nu poate fi corectat. Niciunul nu poate fi refolosit de altcineva.

**`calorii` este alternativa deschisă.** Un singur motor de calcul, publicat cu formulele la vedere și cu teste pe care oricine le poate rula. Un singur set de date, în care fiecare valoare spune de unde vine și fiecare corecție lasă urmă. Un singur loc din care pot citi la fel de bine un om cu un telefon, un dezvoltator care construiește o aplicație și un asistent AI care răspunde la o întrebare.

Ne place să-i spunem **Wikipedia caloriilor**: deschisă la contribuții, verificată înainte de publicare, tradusă în limbile oamenilor care o folosesc. Începem cu româna. Arhitectura e construită pentru toate limbile care urmează.

## Ce primești

| | Componentă | Ce face |
| --- | --- | --- |
| 🧮 | **Motorul `calorii`** ([npm](packages/calorii/)) | BMR cu trei formule, TDEE, țintă calorică cu praguri de siguranță și deficit recalculat, macronutrienți cu politică de fezabilitate, IMC pe intervale continue, porții. Funcții pure, zero dependențe, contract de teste public. |
| 🗂️ | **Setul de date `alimente-ro`** ([CC BY 4.0](data/)) | Alimente și preparate românești, valori la 100 g așa cum se consumă, porții uzuale, **sursă și licență pe fiecare înregistrare**. `null` înseamnă „nu știm”, niciodată 0. |
| 🌐 | **Site-ul** (în construcție, sub [lento.fit](https://lento.fit/); calea exactă se anunță la lansare) | Calculatoare interactive cu exemplu, metodă, limite și surse pe aceeași pagină. Română la rădăcină, alte limbi sub prefix. |
| 🤖 | **Serverul MCP `calorii-mcp`** | Aceleași calcule și căutarea în date, expuse asistenților AI prin Model Context Protocol. Local întâi, găzduit apoi. |
| 🧩 | **Widget-ul** | Calculatorul, de lipit pe orice site cu două linii de HTML. Shadow DOM, sub 20 KB, o linie de atribuire vizibilă. |
| 🐍 | **`calorii` pentru Python** (PyPI) | Același motor, aceiași vectori de test, pentru cine lucrează în Python. |

## Ce ne deosebește

- **Nicio cifră fără sursă.** Nici în date, nici în text, nici în răspunsurile pentru AI. Dacă nu putem arăta de unde vine, nu publicăm.
- **Un contract, multe implementări.** [`vectors.json`](packages/calorii/test/vectors.json) definește constantele, regulile și rezultatele așteptate, nerotunjite. TypeScript, Python, site, MCP și widget trec toate prin același fișier. Dacă două implementări dau rezultate diferite, una e greșită și testele o spun.
- **Estimări, spuse ca estimări.** Fiecare rezultat vine cu interval, cu limitele formulei și cu pragurile de siguranță explicate. Nu suntem dispozitiv medical și nu ne prefacem.
- **Deschis, dar verificat.** Oricine poate propune un aliment, o corecție sau o limbă. Publicarea trece prin review cu surse. „Deschis” nu înseamnă „oricine schimbă orice, instantaneu”.
- **Multilingv de la primul commit.** O bază comună de date și formule, cu denumiri și texte locale deasupra. O limbă nouă nu creează o copie care începe să dea alte rezultate.
- **Construit în public, de mai mulți.** Pachete de lucru independente, contracte în fișiere, review încrucișat, CI verde. Oameni și agenți AI contribuie după aceleași reguli.

## Unde suntem

**Faza 0, scheletul: gata.** Guvernanță, contracte, CI, licențe, registrul de limbi, schema datelor, vectorii motorului.

**Faza 1, în lucru:** motorul TypeScript, primele înregistrări în set, site-ul în română.

**Faza 2:** serverul MCP, widget-ul, portul Python.

**Faza 3:** limbile care urmează, oglinzi ale setului de date pe platforme de date deschise, plugin pentru WordPress.

Lista completă a pachetelor de lucru, cu ce e liber de luat: [docs/TASKS.md](docs/TASKS.md).

## Începe în 30 de secunde

```bash
git clone https://github.com/Lento-fit/calorii.git && cd calorii
python3 scripts/validate-json.py     # toate fișierele JSON se parsează
python3 scripts/validate-data.py     # date, registrul de limbi, vectorii motorului
```

Pachetele npm și PyPI, serverul MCP și widget-ul se publică odată cu prima versiune stabilă a motorului.

## Contribuie

Nu trebuie să scrii cod. Poți adăuga un aliment cu sursa lui, corecta o valoare, traduce nume de alimente în limba ta, propune întrebări la care paginile nu răspund încă. Dacă scrii cod sau conținut, ia un pachet de lucru sau adu o limbă nouă.

Ghidul complet: [CONTRIBUTING.md](CONTRIBUTING.md) · Regulile pentru oricine lucrează în repo, om sau agent: [AGENTS.md](AGENTS.md) · Specificația: [docs/SPEC.md](docs/SPEC.md) · Deciziile și motivele lor: [docs/decizii.md](docs/decizii.md) · Întrebări: [Discussions](https://github.com/Lento-fit/calorii/discussions).

## Cine suntem, și ce nu este acest proiect

`calorii` este creat și întreținut de echipa [Lento.fit](https://lento.fit/) (Netwise Media SRL, România). **Lento.fit este altceva: o aplicație mobilă de nutriție pentru iPhone și Android**, în care notezi ce ai mâncat dintr-o poză a farfuriei, prin voce, text sau cod de bare, iar planul zilei se recalculează după ce ai mâncat de fapt. Aplicația nu este open source și nu folosește datele de aici; `calorii` nu recunoaște mâncarea din poze. Sunt două produse ale aceleiași echipe. Descrierea completă a aplicației, în 16 limbi, cu faptele verificate: [docs/lento-fit/](docs/lento-fit/). Contact: <hello@lento.fit>.

## Licențe

Cod: [MIT](LICENSE). Date din `data/`: [CC BY 4.0](data/LICENSE), atribuire „Date: proiectul calorii (github.com/Lento-fit/calorii), echipa Lento.fit”. Sursele datelor își păstrează condițiile ([data/PROVENIENTA.md](data/PROVENIENTA.md)).
