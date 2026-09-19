import { CONSTANTS } from './constants.js'
import type { Activity, BodyInput } from './types.js'
import { ACTIVITIES, SEXES, inRange, oneOf, positive } from './validate.js'

function body(input: BodyInput) {
  return {
    sex: oneOf('sex', input.sex, SEXES),
    weightKg: inRange('weightKg', input.weightKg),
    heightCm: inRange('heightCm', input.heightCm),
    ageYears: inRange('ageYears', input.ageYears),
  }
}

/** Basal metabolic rate, kcal/day. Mifflin MD et al., Am J Clin Nutr 1990 (PMID 2305711). */
export function bmrMifflinStJeor(input: BodyInput): number {
  const b = body(input)
  const c = CONSTANTS.mifflinStJeor
  return c.weight * b.weightKg + c.height * b.heightCm + c.age * b.ageYears + c[b.sex]
}

/** Basal metabolic rate, kcal/day. Harris-Benedict as revised by Roza & Shizgal 1984 (PMID 6741850). */
export function bmrHarrisBenedict(input: BodyInput): number {
  const b = body(input)
  const c = CONSTANTS.harrisBenedictRevised1984[b.sex]
  return c.base + c.weight * b.weightKg + c.height * b.heightCm + c.age * b.ageYears
}

/** Basal metabolic rate from lean body mass, kcal/day (Katch-McArdle). */
export function bmrKatchMcArdle(input: { weightKg: number; bodyFatPct: number }): number {
  const weightKg = inRange('weightKg', input.weightKg)
  const bodyFatPct = inRange('bodyFatPct', input.bodyFatPct)
  const lean = weightKg * (1 - bodyFatPct / 100)
  return CONSTANTS.katchMcArdle.base + CONSTANTS.katchMcArdle.leanMass * lean
}

/** Total daily energy expenditure: BMR times the activity factor. */
export function tdee(bmr: number, activity: Activity): number {
  const b = positive('bmr', bmr)
  const a = oneOf('activity', activity, ACTIVITIES)
  return b * CONSTANTS.activity[a]
}
