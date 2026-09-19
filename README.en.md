[Română](README.md) · **English**

# calorii — open-source calorie calculator

Correct, explained nutrition basics: daily energy needs (BMR, TDEE), calorie deficit or surplus with safety floors, macronutrients, BMI and calories per portion, on top of an open dataset of Romanian foods and dishes where every value has a source.

**Status: skeleton (v0).** Structure, contracts, contribution rules and CI are in place. The engine, the data, the site, the MCP server and the widget are built in independent work packages, through pull requests. See [docs/TASKS.md](docs/TASKS.md) (Romanian; the work-package table is self-explanatory).

## Vision

An open, verifiable, multilingual resource about calories and nutrition: something like an encyclopedia of calories, with data that people, developers and AI assistants can all use, where every number has a source and every correction leaves a trace. We start with the core: correct calculators, documented data and a clear way to contribute. Romanian is the first published language; the architecture is built for every language that follows.

## What it will contain

| Component | What it does | Where |
|---|---|---|
| `calorii` (npm) | calculation engine, pure functions, zero dependencies | [`packages/calorii/`](packages/calorii/) |
| `alimente-ro` | open dataset (CC BY 4.0), values per 100 g with provenance | [`data/`](data/) |
| site | interactive calculators, explanations, sources; Romanian first, then other languages | [`site/`](site/) |
| `calorii-mcp` | MCP server exposing the same calculations and food search to AI assistants | `packages/calorii-mcp/` |
| widget | the calculator, embeddable on any site, with a visible attribution line | `packages/widget/` |
| `calorii` (PyPI) | Python port of the engine, same test vectors | `packages/calorii-py/` |

## Principles

- **No number without a source.** Not in the data, not in the text. `null` means missing, never 0.
- **Estimates, not diagnosis.** Every result is an estimate for healthy adults, with safety floors and limitations stated up front.
- **Open, but reviewed.** Anyone can propose a food, a correction or a language; publishing goes through review with sources.
- **Romanian first, then the other languages.** Multi-locale architecture from the first commit ([`config/locales.json`](config/locales.json)): one shared base of data and formulas, with local names and texts on top; a language ships only with native-speaker-reviewed text.
- **Contributions through PRs.** Independent work packages, contracts as files, cross review, green CI.

## Contribute

Full guide: [CONTRIBUTING.en.md](CONTRIBUTING.en.md) (English) · [CONTRIBUTING.md](CONTRIBUTING.md) (Romanian). Rules for anyone working in the repo, human or agent: [AGENTS.md](AGENTS.md) (bilingual). Specification: [docs/SPEC.md](docs/SPEC.md). Decisions: [docs/decizii.md](docs/decizii.md). Most engineering documents are currently in Romanian; code, identifiers and contracts are in English, and English versions of the docs are welcome contributions.

```bash
python3 scripts/validate-json.py
python3 scripts/validate-data.py
```

## Who we are

Created and maintained by the [Lento.fit](https://lento.fit/) team (Netwise Media SRL, Romania). Lento.fit is a nutrition assistant for iPhone and Android. This project is independent of the app: everything here works without it. Contact: hello@lento.fit.

## Licences

Code: [MIT](LICENSE). Data in `data/`: [CC BY 4.0](data/LICENSE), attribution “Data: Lento.fit — github.com/Lento-fit/calorii”. Upstream sources keep their own terms ([data/PROVENIENTA.md](data/PROVENIENTA.md), Romanian).
