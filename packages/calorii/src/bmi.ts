import { CONSTANTS } from './constants.js'
import type { BmiCategory, BmiResult, HealthyWeightRange } from './types.js'
import { inRange } from './validate.js'

function categorize(value: number): BmiCategory {
  for (const c of CONSTANTS.bmiCategories) {
    if (c.max === null || value < c.max) return c.category
  }
  /* c8 ignore next */
  return 'obese_3'
}

/** Body mass index with WHO categories on continuous intervals (18.5 <= x < 25 is 'normal'). */
export function bmi(input: { weightKg: number; heightCm: number }): BmiResult {
  const weightKg = inRange('weightKg', input.weightKg)
  const heightM = inRange('heightCm', input.heightCm) / 100
  const value = weightKg / (heightM * heightM)
  return { value, category: categorize(value) }
}

/** Weight range for a BMI of 18.5 to 24.9 at the given height. Unrounded. */
export function healthyWeightRange(input: { heightCm: number }): HealthyWeightRange {
  const heightM = inRange('heightCm', input.heightCm) / 100
  const [lo, hi] = CONSTANTS.healthyBmiRange
  return { minKg: lo * heightM * heightM, maxKg: hi * heightM * heightM }
}
