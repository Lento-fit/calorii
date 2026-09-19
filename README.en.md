[Română](README.md) · **English**

<h1 align="center">calorii</h1>

<p align="center"><strong>The open encyclopedia of calories.</strong><br>
Correct calculators, data with a source on every number, in everyone's language.<br>
For people, for developers, for AI assistants.</p>

<p align="center">[![CI](https://github.com/Lento-fit/calorii/actions/workflows/ci.yml/badge.svg)](https://github.com/Lento-fit/calorii/actions/workflows/ci.yml) [![Code: MIT](https://img.shields.io/badge/code-MIT-2ea44f)](LICENSE) [![Data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-2ea44f)](data/LICENSE) [![Contributions welcome](https://img.shields.io/badge/contributions-welcome-D1F06F)](CONTRIBUTING.en.md) [![Languages](https://img.shields.io/badge/languages-RO%20%E2%86%92%2016-123E32)](config/locales.json)</p>

---

## Why this exists

Everyone searches for the same things: *how many calories do I need, how many are in what I eat, how do I split them.* The answers online come in three kinds: calculators without explanations, tables without sources, and articles that want to sell you something. None can be verified. None can be corrected. None can be reused by anyone else.

**`calorii` is the open alternative.** One calculation engine, published with its formulas in the open and tests anyone can run. One dataset where every value says where it comes from and every correction leaves a trace. One place that a person with a phone, a developer building an app and an AI assistant answering a question can all read equally well.

We like to call it the **Wikipedia of calories**: open to contributions, reviewed before publishing, translated into the languages of the people who use it. We start with Romanian. The architecture is built for every language that follows.

## What you get

| | Component | What it does |
| --- | --- | --- |
| 🧮 | **The `calorii` engine** ([npm](packages/calorii/)) | BMR with three formulas, TDEE, calorie targets with safety floors and recalculated deficits, macronutrients with an explicit feasibility policy, BMI on continuous intervals, portions. Pure functions, zero dependencies, a public test contract. |
| 🗂️ | **The `alimente-ro` dataset** ([CC BY 4.0](data/)) | Romanian foods and dishes, values per 100 g as eaten, common portions, **a source and a licence on every entry**. `null` means "we don't know", never 0. |
| 🌐 | **The site** (under construction, under [lento.fit](https://lento.fit/); the exact path will be announced at launch) | Interactive calculators with a worked example, the method, the limits and the sources on the same page. Romanian at the root, other languages under a prefix. |
| 🤖 | **The `calorii-mcp` server** | The same calculations and food search, exposed to AI assistants through the Model Context Protocol. Local first, hosted later. |
| 🧩 | **The widget** | The calculator, embeddable on any site with two lines of HTML. Shadow DOM, under 20 KB, a visible attribution line. |
| 🐍 | **`calorii` for Python** (PyPI) | The same engine, the same test vectors, for people who work in Python. |

## What sets it apart

- **No number without a source.** Not in the data, not in the text, not in the answers given to AI. If we cannot show where it comes from, we do not publish it.
- **One contract, many implementations.** [`vectors.json`](packages/calorii/test/vectors.json) defines the constants, the rules and the expected results, unrounded. TypeScript, Python, site, MCP and widget all pass through the same file. If two implementations disagree, one is wrong and the tests say so.
- **Estimates, called estimates.** Every result comes with a range, with the limits of the formula and with the safety floors explained. We are not a medical device and do not pretend to be.
- **Open, but reviewed.** Anyone can propose a food, a correction or a language. Publishing goes through review with sources. "Open" does not mean "anyone changes anything, instantly".
- **Multilingual from the first commit.** One shared base of data and formulas, with local names and texts on top. A new language never creates a copy that starts giving different results.
- **Built in public, by many.** Independent work packages, contracts as files, cross review, green CI. Humans and AI agents contribute under the same rules.

## Where we are

**Phase 0, the skeleton: done.** Governance, contracts, CI, licences, the locale registry, the data schema, the engine vectors.

**Phase 1, in progress:** the TypeScript engine, the first dataset entries, the Romanian site.

**Phase 2:** the MCP server, the widget, the Python port.

**Phase 3:** the languages that follow, dataset mirrors on open-data platforms, a WordPress plugin.

The full list of work packages, including what is free to pick up: [docs/TASKS.md](docs/TASKS.md) (Romanian; the table is self-explanatory).

## Start in 30 seconds

```bash
git clone https://github.com/Lento-fit/calorii.git && cd calorii
python3 scripts/validate-json.py     # every JSON file parses
python3 scripts/validate-data.py     # data, locale registry, engine vectors
```

The npm and PyPI packages, the MCP server and the widget ship with the first stable release of the engine.

## Contribute

You do not need to write code. You can add a food with its source, fix a value, translate food names into your language, propose questions the pages do not answer yet. If you write code or content, pick up a work package or bring a new language.

Full guide: [CONTRIBUTING.en.md](CONTRIBUTING.en.md) · Rules for anyone working in the repo, human or agent: [AGENTS.md](AGENTS.md) (bilingual) · Specification: [docs/SPEC.md](docs/SPEC.md) · Decisions and their reasons: [docs/decizii.md](docs/decizii.md) · Questions: [Discussions](https://github.com/Lento-fit/calorii/discussions). Most engineering documents are currently in Romanian; code, identifiers and contracts are in English, and English versions of the docs are welcome contributions.

## Who we are

Created and maintained by the [Lento.fit](https://lento.fit/) team (Netwise Media SRL, Romania). Lento.fit is a nutrition assistant for iPhone and Android. `calorii` is independent of the app: everything here works without it and stays open. Contact: <hello@lento.fit>.

## Licences

Code: [MIT](LICENSE). Data in `data/`: [CC BY 4.0](data/LICENSE), attribution "Data: Lento.fit — github.com/Lento-fit/calorii". Upstream sources keep their own terms ([data/PROVENIENTA.md](data/PROVENIENTA.md), Romanian).
