**Română** · [English](CONTRIBUTING.en.md)

# Cum contribui

Mulțumim că vrei să ajuți. Proiectul e construit prin pull request-uri mici, cu surse și cu teste, de oameni și de agenți deopotrivă. Regulile complete pentru oricine lucrează în repo sunt în [AGENTS.md](AGENTS.md); mai jos e drumul scurt.

## Ce poți face, chiar dacă nu scrii cod

- **Adaugi un aliment sau un preparat** în `data/alimente-ro.json`: deschide un issue cu șablonul „Aliment lipsă” (îl completează un mentenant) sau trimite direct PR-ul. Ai nevoie de o sursă: USDA FoodData Central, CIQUAL, CoFID, eticheta produsului sau rețeta cu gramaje și greutatea finală. Detalii: [data/README.md](data/README.md).
- **Corectezi o valoare**: șablonul „Valoare greșită”, cu sursa pentru valoarea corectă. Fără sursă nu putem schimba nimic.
- **Adaugi porții uzuale** („1 felie = 30 g”) la alimentele existente.
- **Traduci nume de alimente** în limba ta: un fișier `data/translations/<locale>.json`, revizuit de un vorbitor nativ ([data/translations/README.md](data/translations/README.md)).
- **Propui întrebări frecvente** pe care le auzi des și care nu au răspuns pe pagini.
- **Raportezi o problemă**: șablonul „Bug”.

## Ce poți face dacă scrii cod sau conținut

- **Iei un pachet de lucru** din [docs/TASKS.md](docs/TASKS.md): motor, date, site, server MCP, widget, Python. Asignează-ți issue-ul, apoi PR.
- **Aduci o limbă nouă** pentru site, MCP și widget: șablonul „Limbă nouă”; checklist-ul e în `docs/SPEC.md` §2. O limbă înseamnă text scris în limba țintă, nu tradus automat, plus sluguri locale, șiruri de interfață și nume de alimente; baza de date și formulele rămân comune.
- **Îmbunătățești documentația**, inclusiv versiuni în engleză ale documentelor scrise în română.

## Pași

1. Fork sau branch din `main`; nume de branch `wpX/scurt-descriere`, `data/aliment-x` sau `i18n/<locale>`.
2. Rulează local `python3 scripts/validate-json.py` și `python3 scripts/validate-data.py` (și `npm test` pentru pachetele Node).
3. Un PR = un subiect. Completează șablonul de PR (ce, de ce, cum ai testat, surse).
4. Review-ul verifică sursele, testele și respectarea contractelor. CI trebuie să fie verde. Nu îți aprobi propriul PR.

## Convenții

- Commit-uri în stil Conventional Commits: `feat(motor): …`, `data: …`, `content(ro): …`, `i18n(de): …`, `docs: …`.
- Cod, nume de funcții și comentarii în engleză; documentația și conținutul pentru utilizatori în limba fiecărei pagini.
- Nicio cifră fără sursă, `null` pentru lipsă, estimări marcate ca estimări, fără sfaturi medicale individuale.

## Licențe

Contribuind, accepți ca codul tău să fie publicat sub MIT și datele sub CC BY 4.0, cu condițiile surselor păstrate ([data/PROVENIENTA.md](data/PROVENIENTA.md)).

## Întrebări

Discussions pe GitHub sau hello@lento.fit.
