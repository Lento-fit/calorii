# Paginile site-ului în română (prima versiune)

Fiecare pagină răspunde unei întrebări concrete și are o unealtă sau o explicație distinctă. Dacă două pagini ajung să spună același lucru, se unesc. Slugurile în română nu se schimbă după publicare.

| # | URL | Întrebarea la care răspunde | Unealta de pe pagină |
|---|---|---|---|
| 1 | `/` | Câte calorii am nevoie pe zi și cum le împart? | calculatorul complet: BMR → TDEE → țintă (menținere / slăbire / creștere) → macro |
| 2 | `/calculator-deficit-caloric/` | Cât de mare să fie deficitul ca să slăbesc sănătos? | deficit cu ritm ales (0,25–1 kg/săpt), plafon 25%, praguri, explicația deficitului |
| 3 | `/calculator-necesar-caloric/` | Care e necesarul meu zilnic de menținere? | necesar pe niveluri de activitate, comparație între cele trei formule |
| 4 | `/calculator-calorii-slabit/` | Câte calorii trebuie să mănânc ca să slăbesc? | răspuns direct, ritm sustenabil, timp estimat (scenariu aritmetic), avertismente |
| 5 | `/calculator-calorii-alimente/` | Câte calorii are porția mea? | căutare în `alimente-ro`, porții uzuale sau grame, total pe masă cu kcal + macro, sursa fiecărui rând |
| 6 | `/calculator-macronutrienti/` | Cum îmi împart proteinele, carbohidrații și grăsimile? | trei profiluri, proteine în g/kg cu interval, politică de fezabilitate vizibilă |
| 7 | `/calculator-imc/` | Ce IMC am și ce înseamnă? | IMC, categoria OMS, intervalul de greutate sănătoasă, limitele IMC |
| 8 | `/formula-calcul-calorii/` | Care sunt formulele și cât de precise sunt? | cele trei formule cu constante, când se folosește care, exemple, erorile tipice (±10–15%) |
| 9 | `/aplicatii-calculator-calorii/` | Ce aplicații și programe există și cu ce diferă? | comparație factuală, editabilă prin PR (`data/aplicatii.json`), cu data verificării |
| 10 | `/calculator-calorii-mentinere/` | Cum îmi mențin greutatea? | TDEE + interval ±100 kcal + cum ajustezi după 2–3 săptămâni (poate deveni secțiune în #3) |
| 11 | `/embed/` | Cum pun calculatorul pe site-ul meu? | generator de cod, previzualizare, regula de atribuire |
| 12 | `/dezvoltatori/` | Cum folosesc motorul, datele și serverul MCP? | npm, PyPI, MCP (configurări per client), setul de date, schema |
| 13 | `/despre/` | Cine face asta și cum? | metodologie, surse, limitări, disclaimer, mentenanți, licențe, contact |

Întrebările frecvente de pe fiecare pagină pornesc de la felul în care oamenii formulează întrebarea în viața reală (de exemplu „câte calorii trebuie să mănânc pe zi ca să slăbesc?”, „ce înseamnă deficit caloric?”, „care e formula de calcul?”), cu răspunsul în prima propoziție.

Pagini pe care nu le facem: „cure rapide”, „X kg în Y zile”, suplimente sau ceaiuri de slăbit. Sunt în afara scopului și contra regulilor de siguranță.
