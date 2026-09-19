[Română](CONTRIBUTING.md) · **English**

# How to contribute

Thank you for helping. The project is built through small pull requests, with sources and tests, by humans and agents alike. The full rules for anyone working in the repo are in [AGENTS.md](AGENTS.md) (bilingual); below is the short path.

## What you can do without writing code

- **Add a food or a dish** to `data/alimente-ro.json`: open an issue with the “Aliment lipsă” (missing food) template, which a maintainer will turn into an entry, or send the PR yourself. You need a source: USDA FoodData Central, CIQUAL, CoFID, the product label or a recipe with ingredient weights and the final cooked weight. Details: [data/README.md](data/README.md) (Romanian; the JSON example and field names are self-explanatory).
- **Fix a value**: the “Valoare greșită” (wrong value) template, with a source for the correct value. Without a source nothing can change.
- **Add common portions** (“1 slice = 30 g”) to existing foods.
- **Translate food names** into your language: one file, `data/translations/<locale>.json`, reviewed by a native speaker ([data/translations/README.md](data/translations/README.md)).
- **Propose frequently asked questions** you hear often that the pages do not answer yet.
- **Report a problem**: the “Bug” template.

## What you can do if you write code or content

- **Pick up a work package** from [docs/TASKS.md](docs/TASKS.md): engine, data, site, MCP server, widget, Python. Assign yourself the issue, then open a PR.
- **Bring a new language** to the site, the MCP server and the widget: the “Limbă nouă” (new language) template; the checklist is in `docs/SPEC.md` §2. A language means text written in the target language (not machine-translated), local slugs, interface strings and food names; the dataset and the formulas stay shared.
- **Improve the documentation**, including English versions of documents currently written in Romanian.

## Steps

1. Fork or branch from `main`; branch names like `wpX/short-description`, `data/food-x` or `i18n/<locale>`.
2. Run `python3 scripts/validate-json.py` and `python3 scripts/validate-data.py` locally (and `npm test` for Node packages).
3. One PR = one topic. Fill in the PR template (what, why, how you tested, sources).
4. Review checks sources, tests and contract compliance. CI must be green. You do not approve your own PR.

## Conventions

- Conventional Commits: `feat(engine): …`, `data: …`, `content(ro): …`, `i18n(de): …`, `docs: …`.
- Code, identifiers and comments in English; documentation and user-facing content in the language of each page.
- No number without a source, `null` for missing, estimates labelled as estimates, no individual medical advice.

## Licences

By contributing you agree that your code is published under MIT and your data under CC BY 4.0, with upstream source conditions preserved ([data/PROVENIENTA.md](data/PROVENIENTA.md)).

## Questions

GitHub Discussions or <hello@lento.fit>.
