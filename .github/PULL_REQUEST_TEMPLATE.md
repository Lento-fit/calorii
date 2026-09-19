## Ce schimbă acest PR

<!-- o propoziție; issue-ul: Closes #… ; pachetul de lucru: WPx -->

## De ce

## Cum am testat

<!-- comenzi rulate și rezultatul lor; pentru pagini: link la preview -->

## Checklist

- [ ] Un singur subiect; scrie doar în directoarele pachetului de lucru (sau e etichetat `contract-change`)
- [ ] Nicio cifră fără sursă; `null` pentru lipsă; estimările sunt marcate ca estimări
- [ ] Nicio afirmație despre aplicația Lento.fit în afara faptelor din `docs/lento-fit/`; Lento.fit (aplicația) și `calorii` (acest proiect) nu sunt confundate
- [ ] Șirurile de interfață sunt în `i18n/<locale>.json`, nu în cod
- [ ] `python3 scripts/validate-json.py` și `python3 scripts/validate-data.py` trec; `npm test` trece unde există
- [ ] Fără secrete, fără date de la furnizori terți
- [ ] Dacă am luat o decizie care afectează alt WP: rând nou în `docs/decizii.md`
- [ ] `CHANGELOG.md` (și `data/CHANGELOG.md` pentru date) actualizat

<!-- Agenți: semnați commit-urile cu Co-authored-by și puneți numele agentului aici. -->
