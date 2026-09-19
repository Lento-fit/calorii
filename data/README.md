# Date: `alimente-ro`

Set de date deschis cu alimente și preparate consumate în România: valori nutriționale la 100 g așa cum se consumă, porții uzuale și **proveniența fiecărei valori**. Licență: CC BY 4.0 (vezi `LICENSE` din acest director).

## Fișiere

| Fișier | Rol |
| --- | --- |
| `alimente-ro.json` | colecția, sursa de adevăr; se editează manual sau prin script, niciodată din CSV |
| `alimente-ro.csv` | export generat din JSON cu `python3 scripts/export-csv.py` (nu se editează manual; se regenerează la fiecare PR care schimbă JSON-ul) |
| `schema/aliment.schema.json` | schema unei înregistrări (JSON Schema 2020-12) |
| `translations/<locale>.json` | numele alimentelor în alte limbi decât `ro`/`en`, cheie = `id` |
| `PROVENIENTA.md` | sursele acceptate, licențele lor și atribuirea cerută |
| `CHANGELOG.md` | fiecare adăugare sau corecție, cu dată și sursă |

## Reguli (se aplică oricui: om sau agent)

1. **Nicio valoare fără sursă.** Fiecare înregistrare are `sursa.tip`, `sursa.referinta`, `sursa.licenta` și `sursa.preluat_la`. Fără sursă, înregistrarea nu există.
2. **`null` înseamnă „lipsă”.** Nu scriem 0 pentru un nutrient necunoscut. 0 e o valoare măsurată.
3. **La 100 g, așa cum se consumă.** Starea de preparare e explicită în `stare_preparare` și, când contează, în `id` și în nume (`orez-alb-fiert`, nu `orez`). O valoare pentru aliment crud nu devine „gătit” prin redenumire.
4. **Rețetele sunt estimări.** Un preparat calculat din ingrediente are `stare: "estimare"`, `sursa.tip: "reteta"` și, în `referinta`, ingredientele cu gramaje și greutatea finală a preparatului, ca să poată fi recalculat.
5. **Licența sursei rămâne.** CC BY 4.0 acoperă compilația; nu înlocuiește condițiile sursei. Sursele acceptate și atribuirile lor sunt în `PROVENIENTA.md`. O sursă cu termeni neclari nu intră.
6. **Fără date din baze proprietare** ale altor aplicații și fără copiere de conținut licențiat.
7. **Verificarea energiei e diagnostic, nu adevăr.** Validatorul semnalează când `kcal` diferă cu peste 8% de `4·proteine + 4·carbohidrați + 9·grăsimi`; diferențele legitime (fibre, alcool, factori Atwater specifici) se explică în `note`. Valoarea sursei nu se „corectează” ca să treacă testul.

## Cum adaugi un aliment

1. Deschide un issue cu șablonul „Aliment lipsă” (sau sari direct la PR dacă ai sursa).
2. Adaugă înregistrarea în `alimente-ro.json`, respectând schema. Rulează `python3 scripts/validate-data.py`.
3. Adaugă un rând în `CHANGELOG.md`.
4. PR mic, un aliment sau o familie de alimente per PR, cu sursa în descriere.

## Exemplu de înregistrare (structură, nu valori reale)

```json
{
  "id": "exemplu-aliment-fiert",
  "nume": { "ro": "Exemplu (fiert)", "en": "Example (boiled)" },
  "categorie": "cereale-si-derivate",
  "stare_preparare": "gatit",
  "la_100g": { "kcal": null, "proteine_g": null, "carbohidrati_g": null, "grasimi_g": null, "fibre_g": null },
  "portii": [ { "nume": "1 porție medie", "grame": 200 } ],
  "stare": "verificat",
  "sursa": { "tip": "usda", "referinta": "FDC ID …", "url": "https://fdc.nal.usda.gov/…", "licenta": "public-domain", "versiune_sursa": null, "preluat_la": "2026-09-19" },
  "tara": null,
  "note": null
}
```
