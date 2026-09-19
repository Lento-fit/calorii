# Proveniența datelor

Surse acceptate pentru `alimente-ro`, licențele lor și atribuirea cerută. O înregistrare fără una dintre aceste surse nu intră în set.

| `sursa.tip` | Sursa | Licență (`sursa.licenta`) | Atribuire cerută | Note |
| --- | --- | --- | --- | --- |
| `usda` | USDA FoodData Central (Foundation Foods, SR Legacy) | `public-domain` | recomandată: „U.S. Department of Agriculture, FoodData Central” | valorile energetice pot folosi factori Atwater specifici; păstrăm valoarea sursei |
| `ciqual` | ANSES, tabelul CIQUAL (Franța) | `etalab-2.0` (Licence Ouverte 2.0) | obligatorie: „ANSES, Table Ciqual” + data versiunii | compatibilă cu redistribuirea sub CC BY cu atribuire |
| `cofid` | McCance and Widdowson's, CoFID (UK) | `ogl-3` (Open Government Licence v3) | obligatorie: „Contains public sector information licensed under the Open Government Licence v3.0” | |
| `eticheta` | tabelul nutrițional de pe ambalaj sau pagina oficială a producătorului | `fapte-de-pe-eticheta` | numim producătorul și produsul | valorile nutriționale sunt fapte; nu copiem texte sau imagini de pe ambalaj |
| `reteta` | calcul propriu din ingrediente cu sursă | `calcul-propriu` | — | `stare: "estimare"`; ingredientele cu gramaje și greutatea finală în `referinta` |

Nu se acceptă: baze de date ale altor aplicații, site-uri de rețete, valori „din memorie”, valori fără dată de preluare.

Licența compilației: CC BY 4.0. Atribuire pentru reutilizatori: „Date: Lento.fit — github.com/Lento-fit/calorii”, plus atribuirile surselor de mai sus atunci când redistribuie înregistrări provenite din ele.

Fiecare versiune a setului notează în `CHANGELOG.md` sursele folosite și versiunile lor (`sursa.versiune_sursa`).
