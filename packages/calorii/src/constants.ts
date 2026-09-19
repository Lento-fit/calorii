/**
 * Every constant the engine uses. Mirrors `constants` in test/vectors.json exactly;
 * a test asserts the two are identical so the contract cannot drift.
 */
export const CONSTANTS = {
  mifflinStJeor: { weight: 10, height: 6.25, age: -5, male: 5, female: -161 },
  harrisBenedictRevised1984: {
    male: { base: 88.362, weight: 13.397, height: 4.799, age: -5.677 },
    female: { base: 447.593, weight: 9.247, height: 3.098, age: -4.33 },
  },
  katchMcArdle: { base: 370, leanMass: 21.6 },
  activity: { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, very_active: 1.9 },
  kcalPerKgBodyFat: 7700,
  capShareOfTdee: { lose: 0.25, gain: 0.15 },
  safeFloorKcal: { female: 1200, male: 1500 },
  rateTooFastShareOfWeight: 0.01,
  kcalPerGram: { protein: 4, carbs: 4, fat: 9 },
  macroProfiles: {
    balanced: { proteinGPerKg: 1.6, fatShare: 0.275 },
    high_protein: { proteinGPerKg: 2.0, fatShare: 0.275 },
    low_carb: { proteinGPerKg: 1.8, fatShare: 0.4 },
  },
  macroMinimums: { carbsShare: 0.1, fatShare: 0.2, proteinGPerKg: 1.2, efsaDrvProteinGPerKg: 0.83 },
  bmiCategories: [
    { max: 18.5, category: 'underweight' },
    { max: 25, category: 'normal' },
    { max: 30, category: 'overweight' },
    { max: 35, category: 'obese_1' },
    { max: 40, category: 'obese_2' },
    { max: null, category: 'obese_3' },
  ],
  healthyBmiRange: [18.5, 24.9],
  inputRanges: { ageYears: [18, 100], weightKg: [30, 300], heightCm: [120, 250], bodyFatPct: [3, 70] },
} as const
