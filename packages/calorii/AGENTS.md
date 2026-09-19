# packages/calorii — note pentru cine lucrează aici

- Motor pur, **zero dependențe runtime**. Nu adăuga pachete în `dependencies`.
- Contractul e `test/vectors.json`. Constantele din `src/constants.ts` trebuie să fie identice cu `constants` din vectori; un test verifică asta. Schimbarea vectorilor sau a semnăturilor = PR separat, etichetat `contract-change`.
- Motorul nu rotunjește și nu formatează. Nicio propoziție destinată oamenilor în cod; codurile (`adjustments`, `warnings`, `reason`) sunt stabile și în engleză, textele le pun interfețele.
- Comenzi: `npm run lint` (tsc), `npm test` (vitest + acoperire ≥ 95%), `npm run build` (tsup, ESM + CJS + tipuri).
- Publicarea pe npm se face din CI, la tag. Nu publica manual.

*English: pure engine, zero runtime dependencies; `test/vectors.json` is the contract and constants must match it (a test checks); no rounding or human-facing text in the engine; `npm run lint`, `npm test`, `npm run build`; publishing happens from CI on tag.*
