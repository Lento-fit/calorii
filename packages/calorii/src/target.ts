import { CONSTANTS } from './constants.js'
import type { Adjustment, CalorieTargetInput, CalorieTargetResult, TimeToGoalResult, Warning } from './types.js'
import { GOALS, SEXES, inRange, nonNegative, oneOf, positive } from './validate.js'

/**
 * Daily calorie target for a goal and a desired weekly rate.
 *
 * Rules (all constants in CONSTANTS):
 * - requestedDailyDelta = rate * kcalPerKgBodyFat / 7
 * - the delta is capped at a share of TDEE (25% when losing, 15% when gaining)
 * - when losing, the target never goes below the safe floor for the sex; if the floor
 *   raises the target, the applied delta is recomputed so that targetKcal = tdee - appliedDailyDelta
 * - if the floor is at or above TDEE, no coherent deficit exists: feasible = false
 * - a rate above 1% of body weight per week adds the 'rate_too_fast' warning
 *
 * Floors are operational limits of this tool, not medical validation.
 */
export function calorieTarget(input: CalorieTargetInput): CalorieTargetResult {
  const tdee = positive('tdee', input.tdee)
  const sex = oneOf('sex', input.sex, SEXES)
  const weightKg = inRange('weightKg', input.weightKg)
  const goal = oneOf('goal', input.goal, GOALS)
  const rate = nonNegative('rateKgPerWeek', input.rateKgPerWeek)

  if (goal === 'maintain') {
    return {
      targetKcal: tdee,
      requestedDailyDelta: 0,
      appliedDailyDelta: 0,
      appliedRateKgPerWeek: 0,
      adjustments: [],
      warnings: [],
      feasible: true,
    }
  }

  const requested = (rate * CONSTANTS.kcalPerKgBodyFat) / 7
  const adjustments: Adjustment[] = []
  const warnings: Warning[] = []
  const cap = CONSTANTS.capShareOfTdee[goal] * tdee
  let delta = requested
  if (delta > cap) {
    delta = cap
    adjustments.push(goal === 'lose' ? 'capped_25pct' : 'capped_15pct')
  }

  let target: number
  if (goal === 'lose') {
    target = tdee - delta
    const floor = CONSTANTS.safeFloorKcal[sex]
    if (target < floor) {
      if (floor >= tdee) {
        warnings.push('below_safe_floor')
        return {
          targetKcal: null,
          requestedDailyDelta: requested,
          appliedDailyDelta: null,
          appliedRateKgPerWeek: null,
          adjustments,
          warnings,
          feasible: false,
          reason: 'floor_above_tdee',
        }
      }
      target = floor
      delta = tdee - target
      adjustments.push('raised_to_floor')
      warnings.push('below_safe_floor')
    }
  } else {
    target = tdee + delta
  }

  if (rate > CONSTANTS.rateTooFastShareOfWeight * weightKg) warnings.push('rate_too_fast')

  return {
    targetKcal: target,
    requestedDailyDelta: requested,
    appliedDailyDelta: goal === 'lose' ? delta : -delta,
    appliedRateKgPerWeek: (delta * 7) / CONSTANTS.kcalPerKgBodyFat,
    adjustments,
    warnings,
    feasible: true,
  }
}

/**
 * Weeks to reach a target weight if the applied daily delta held constant and every
 * kilogram cost exactly kcalPerKgBodyFat. Pure arithmetic; real change is not linear.
 */
export function timeToGoal(input: { currentKg: number; targetKg: number; appliedDailyDelta: number | null }): TimeToGoalResult {
  const currentKg = inRange('weightKg', input.currentKg)
  const targetKg = inRange('weightKg', input.targetKg)
  const delta = input.appliedDailyDelta
  if (delta === null || delta === 0 || !Number.isFinite(delta)) return { weeks: null, label: 'arithmetic_scenario' }
  const kcalNeeded = Math.abs(currentKg - targetKg) * CONSTANTS.kcalPerKgBodyFat
  return { weeks: kcalNeeded / (Math.abs(delta) * 7), label: 'arithmetic_scenario' }
}
