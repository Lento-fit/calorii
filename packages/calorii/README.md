# `calorii` — motorul de calcul

Funcții pure, fără dependențe, TypeScript strict, ESM + CJS, tipuri incluse. Nimic nu rotunjește aici; rotunjirea și formatarea (virgulă decimală în română, „≈ 1.590 kcal”) sunt treaba stratului de afișare.

**Stare:** implementat; trece toți vectorii contractului și testele de proprietate, acoperire peste 95%; build ESM + CJS + tipuri. Nepublicat încă pe npm (publicarea se face din CI, la primul tag). Contractul este `test/vectors.json`: constante, reguli și cazuri de test cu valori **nerotunjite**, toleranță 0,001. Portul Python, serverul MCP, site-ul și widget-ul folosesc același fișier. Schimbarea lui = PR separat, etichetat `contract-change`.

## Instalare și utilizare

```bash
npm install calorii
```

```ts
import { bmrMifflinStJeor, tdee, calorieTarget, macros } from 'calorii'

const bmr = bmrMifflinStJeor({ sex: 'female', weightKg: 65, heightCm: 165, ageYears: 30 })
const maintenance = tdee(bmr, 'moderate')                       // 2123.8875 kcal/day
const target = calorieTarget({ tdee: maintenance, sex: 'female', weightKg: 65, goal: 'lose', rateKgPerWeek: 0.5 })
// target.targetKcal = 1592.915625, target.adjustments = ['capped_25pct'], target.feasible = true
const split = macros({ kcal: target.targetKcal!, weightKg: 65, profile: 'balanced' })
```

Rezultatele sunt nerotunjite; rotunjirea, intervalul afișat și textele pentru oameni (inclusiv traducerea codurilor din `adjustments`, `warnings` și `reason`) sunt treaba interfeței care folosește motorul. Funcționează în Node 18+ și în browser (fără API-uri specifice).

## API

```ts
type Sex = 'female' | 'male'
type Activity = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active'
type Goal = 'lose' | 'maintain' | 'gain'
type MacroProfile = 'balanced' | 'high_protein' | 'low_carb'

bmrMifflinStJeor({ sex, weightKg, heightCm, ageYears }): number
bmrHarrisBenedict({ sex, weightKg, heightCm, ageYears }): number      // revizia Roza & Shizgal 1984
bmrKatchMcArdle({ weightKg, bodyFatPct }): number
tdee(bmr: number, activity: Activity): number
calorieTarget({ tdee, sex, weightKg, goal, rateKgPerWeek }): {
  targetKcal, requestedDailyDelta, appliedDailyDelta, appliedRateKgPerWeek,
  adjustments: Adjustment[], warnings: Warning[], feasible: boolean, reason?: string
}
macros({ kcal, weightKg, profile }): { proteinG, carbsG, fatG, proteinGPerKg, feasible, adjustments, reason? }
bmi({ weightKg, heightCm }): { value, category }
healthyWeightRange({ heightCm }): { minKg, maxKg }
portion({ per100g, grams }): { kcal, proteinG, carbsG, fatG, fiberG }
timeToGoal({ currentKg, targetKg, appliedDailyDelta }): { weeks, label: 'arithmetic_scenario' }
```

Erorile de validare sunt tipizate (`InvalidInputError` cu `field`, `min`, `max`), nu mesaje libere. Intervalele acceptate sunt în `constants.inputRanges`; sub 18 ani → eroare explicită: formulele sunt pentru adulți.

## Reguli de calcul (rezumat; constantele exacte sunt în `test/vectors.json`)

- **BMR:** Mifflin-St Jeor (1990; PMID 2305711), Harris-Benedict revizuit (Roza & Shizgal 1984; PMID 6741850), Katch-McArdle (din masa slabă). Implicit în interfețe: Mifflin-St Jeor.
- **TDEE:** BMR × factor de activitate (1,2 · 1,375 · 1,55 · 1,725 · 1,9).
- **Țintă calorică:** `requestedDailyDelta = ritm(kg/săpt) × 7700 / 7`; plafon 25% din TDEE la slăbire, 15% la creștere; praguri operaționale 1.200 kcal (femei) / 1.500 kcal (bărbați). Când pragul ridică ținta, **deficitul se recalculează** (`appliedDailyDelta = tdee − targetKcal`) și ajustarea apare în `adjustments`. Dacă pragul ar depăși TDEE-ul, rezultatul e `feasible: false` (`reason: 'floor_above_tdee'`), nu o recomandare mascată. Invariant: `targetKcal = tdee − appliedDailyDelta`. Pragurile sunt limite ale instrumentului, nu validare medicală; interfețele le prezintă așa.
- **Macronutrienți:** proteine pe kg (1,6 · 2,0 · 1,8 după profil), grăsimi ca parte din kcal (27,5% · 27,5% · 40%), carbohidrați = restul; 4/4/9 kcal per gram. Minimuri: carbohidrați 10% din kcal, grăsimi 20%, proteine 1,2 g/kg. Dacă profilul nu încape: (1) se păstrează partea de grăsimi și se reduce proteina până carbohidrații ajung la 10% (`protein_reduced_to_fit`); (2) dacă proteina ar scădea sub 1,2 g/kg, se fixează la 1,2 și se reduc grăsimile spre 20% (`fat_reduced_to_fit`); (3) dacă nici așa nu există soluție, `feasible: false` (`reason: 'kcal_too_low_for_weight'`). Suma macro = kcal (±1). Nu inventăm prescripții ca să salvăm formula.
- **IMC:** `kg / m²`, categorii pe intervale continue (`18,5 ≤ x < 25` = normal etc.), nicio valoare neclasificată. Intervalul de greutate sănătoasă: IMC 18,5–24,9 pentru înălțimea dată.
- **Porție:** scalare liniară a valorilor la 100 g.
- **Timp până la țintă:** scenariu aritmetic din deficitul **aplicat**, etichetat ca atare; nu e predicție individuală.

Toate rezultatele sunt estimări pentru adulți sănătoși; nu sunt sfat medical. Sarcina, alăptarea, afecțiunile și vârsta sub 18 ani sunt în afara domeniului formulelor; interfețele spun asta explicit, în flux.

## Teste

`vitest`, vectorii din `test/vectors.json`, acoperire ≥ 95%, plus teste de proprietate: monotonie (mai multă activitate → TDEE mai mare), pragurile nu sunt niciodată încălcate, invariantul țintei, macro nenegative și finite pentru orice intrare validă, categorii IMC continue.
