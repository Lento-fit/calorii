# AGENTS.md

**Română** (mai jos) · **English** (second half of this file). Same rules in both languages.

---

## Reguli pentru oricine lucrează în acest repo (om sau agent)

Citește întâi acest fișier, apoi `docs/SPEC.md` și `docs/TASKS.md`. Repo-ul e construit de mai mulți contribuitori în paralel; regulile de mai jos există ca să nu ne călcăm pe picioare și ca nimic greșit să nu ajungă public.

### Cum e organizată munca

- **Pachete de lucru (WP)** cu directoare proprii: `docs/TASKS.md`. Un WP scrie doar în directoarele lui.
- **Contractele sunt fișiere:** `packages/calorii/test/vectors.json`, `data/schema/aliment.schema.json`, `config/locales.json`, `site/CONTRACT.md`, README-urile pachetelor. Se schimbă doar prin PR separat, etichetat `contract-change`, cu review de la cei care depind de ele.
- **Un issue = un PR.** Asignează-ți issue-ul înainte să începi (comentariu „lucrez pe asta”). PR-uri mici (orientativ sub 400 de linii de diff în afara datelor și a fișierelor generate), titlu cu prefix `WPx:`, descriere cu „cum am testat”. Draft PR devreme.
- **Review încrucișat:** nu îți aprobi propriul PR. Cineva altcineva verifică checklist-ul din șablon.
- **CI verde e condiție de merge.** `main` e protejat; fără push direct; squash merge.
- **Decizii:** orice abatere de la specificație sau alegere care afectează alt WP → rând nou în `docs/decizii.md` (dată, motiv, cine), înainte de merge.
- **Identitate:** agenții semnează commit-urile cu `Co-authored-by: <Nume agent> <email-noreply>` și își pun numele în descrierea PR-ului. Oamenii, cu contul lor.

### Reguli care nu se negociază

1. **Nicio cifră fără sursă.** Valori nutriționale, constante, afirmații din text: toate cu sursă verificabilă. Dacă nu ai sursă, scrii „de verificat” și nu publici.
2. **`null` pentru lipsă, niciodată 0.** Și niciodată o valoare pentru aliment crud redenumită „gătit”.
3. **Estimări, nu sfat medical.** Fiecare rezultat afișat e „estimare”; disclaimer pe fiecare pagină și în fiecare răspuns MCP; pragurile 1.200/1.500 kcal sunt limite ale instrumentului, nu validare medicală. Fără text despre slăbire rapidă.
4. **Despre aplicația Lento.fit se spun doar faptele din cheile `despre.*`** (`site/src/i18n/<locale>.json`), aprobate de mentenanți. Fără alte afirmații despre aplicație, oriunde în repo.
5. **Fără date din baze proprietare** ale altor aplicații, fără conținut licențiat copiat, fără date de la furnizori terți în repo (`research/private/` e ignorat de git).
6. **i18n de la început.** Nicio propoziție de interfață în cod; totul în `i18n/<locale>.json`. Numere formatate după `config/locales.json`. O limbă nouă nu trebuie să ceară modificări de cod.
7. **Zero secrete în repo, loguri sau output.** `gitleaks` rulează în CI; dacă ai scăpat ceva, rotești secretul, nu doar ștergi commit-ul.
8. **Fără umplutură.** O pagină e completă când unealta funcționează, metoda e explicată, exemplul e calculat, limitele sunt spuse și sursele sunt linkate. Nu se scrie text ca să pară pagina lungă.

### Cum rulezi

```bash
python3 scripts/validate-json.py      # toate fișierele JSON se parsează
python3 scripts/validate-data.py      # date, registrul de limbi, vectorii motorului (recalculați din constante)
npm test                              # când pachetele Node există (workspaces)
```

Fiecare pachet are propriul `AGENTS.md` scurt cu comenzile lui.

### Ce nu faci

- Nu schimbi un contract fără PR `contract-change`.
- Nu adaugi dependențe în motor (`packages/calorii` are zero dependențe runtime).
- Nu publici pachete manual; publicarea se face din CI la tag.
- Nu modifici `config/locales.json` ca să pui o limbă `published` fără checklist-ul din `docs/SPEC.md` §2.
- Nu inventezi funcții ale aplicației, cifre, surse sau rezultate de test.

---

## Rules for anyone working in this repo (human or agent)

Read this file first, then `docs/SPEC.md` and `docs/TASKS.md` (Romanian; tables and file names are self-explanatory, and English versions are welcome contributions). The repo is built by several contributors in parallel; these rules exist so we do not step on each other and so nothing wrong goes public.

### How the work is organised

- **Work packages (WP)** with their own directories: `docs/TASKS.md`. A WP writes only inside its directories.
- **Contracts are files:** `packages/calorii/test/vectors.json`, `data/schema/aliment.schema.json`, `config/locales.json`, `site/CONTRACT.md`, the package READMEs. They change only through a separate PR labelled `contract-change`, reviewed by those who depend on them.
- **One issue = one PR.** Assign yourself the issue before starting (comment “working on this”). Small PRs (roughly under 400 lines of diff excluding data and generated files), title prefixed `WPx:`, description with “how I tested”. Open a draft PR early.
- **Cross review:** you do not approve your own PR. Someone else checks the template checklist.
- **Green CI is a merge condition.** `main` is protected; no direct pushes; squash merge.
- **Decisions:** any deviation from the spec or any choice affecting another WP → new row in `docs/decizii.md` (date, reason, who), before merging.
- **Identity:** agents sign commits with `Co-authored-by: <Agent name> <noreply-email>` and put the agent name in the PR description. Humans use their own account.

### Non-negotiable rules

1. **No number without a source.** Nutrition values, constants, claims in text: all with a verifiable source. If you have no source, write “to verify” and do not publish.
2. **`null` for missing, never 0.** And never a raw-food value relabelled as “cooked”.
3. **Estimates, not medical advice.** Every displayed result is an “estimate”; a disclaimer on every page and in every MCP response; the 1,200/1,500 kcal floors are tool limits, not medical validation. No rapid-weight-loss copy.
4. **About the Lento.fit app, only the facts in the `despre.*` keys** (`site/src/i18n/<locale>.json`), approved by maintainers. No other claims about the app anywhere in the repo.
5. **No data from other apps' proprietary databases**, no copied licensed content, no third-party vendor data in the repo (`research/private/` is git-ignored).
6. **i18n from the start.** No interface sentence in code; everything in `i18n/<locale>.json`. Numbers formatted per `config/locales.json`. A new language must not require code changes.
7. **Zero secrets in the repo, logs or output.** `gitleaks` runs in CI; if something leaked, rotate the secret, do not just delete the commit.
8. **No filler.** A page is complete when the tool works, the method is explained, the example is computed, limits are stated and sources are linked. No text written to make a page look long.

### How to run

```bash
python3 scripts/validate-json.py      # every JSON file parses
python3 scripts/validate-data.py      # data, locale registry, engine vectors (recomputed from constants)
npm test                              # once Node packages exist (workspaces)
```

Each package has its own short `AGENTS.md` with its commands.

### What you do not do

- Change a contract without a `contract-change` PR.
- Add dependencies to the engine (`packages/calorii` has zero runtime dependencies).
- Publish packages manually; publishing happens from CI on tag.
- Set a language to `published` in `config/locales.json` without the checklist in `docs/SPEC.md` §2.
- Invent app features, numbers, sources or test results.
