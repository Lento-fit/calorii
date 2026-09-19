import { CONSTANTS } from './constants.js'
import type { Adjustment, MacrosInput, MacrosResult } from './types.js'
import { PROFILES, inRange, oneOf, positive } from './validate.js'

/**
 * Split a daily calorie amount into protein, carbohydrate and fat grams.
 *
 * Profile: protein in g/kg and fat as a share of kcal; carbohydrates take the rest.
 * Feasibility policy when the profile does not fit into the calories:
 * 1. keep the fat share, reduce protein until carbohydrates reach their minimum share ('protein_reduced_to_fit');
 * 2. if protein would fall below the minimum g/kg, pin it there and reduce fat towards its minimum share ('fat_reduced_to_fit');
 * 3. if fat would fall below its minimum share, there is no solution: feasible = false.
 * Invariant for feasible results: 4*protein + 4*carbs + 9*fat = kcal.
 */
export function macros(input: MacrosInput): MacrosResult {
  const kcal = positive('kcal', input.kcal)
  const weightKg = inRange('weightKg', input.weightKg)
  const profile = oneOf('profile', input.profile, PROFILES)

  const P = CONSTANTS.macroProfiles[profile]
  const M = CONSTANTS.macroMinimums
  const G = CONSTANTS.kcalPerGram
  const adjustments: Adjustment[] = []

  let fatKcal = P.fatShare * kcal
  const carbMinKcal = M.carbsShare * kcal
  const fatMinKcal = M.fatShare * kcal
  let proteinKcal = P.proteinGPerKg * weightKg * G.protein

  if (kcal - proteinKcal - fatKcal < carbMinKcal) {
    proteinKcal = kcal - fatKcal - carbMinKcal
    adjustments.push('protein_reduced_to_fit')
    const proteinMinKcal = M.proteinGPerKg * weightKg * G.protein
    if (proteinKcal < proteinMinKcal) {
      proteinKcal = proteinMinKcal
      fatKcal = kcal - proteinKcal - carbMinKcal
      adjustments.push('fat_reduced_to_fit')
      if (fatKcal < fatMinKcal) {
        return { proteinG: null, carbsG: null, fatG: null, proteinGPerKg: null, feasible: false, adjustments, reason: 'kcal_too_low_for_weight' }
      }
    }
  }

  const carbsKcal = kcal - proteinKcal - fatKcal
  const proteinG = proteinKcal / G.protein
  return {
    proteinG,
    carbsG: carbsKcal / G.carbs,
    fatG: fatKcal / G.fat,
    proteinGPerKg: proteinG / weightKg,
    feasible: true,
    adjustments,
  }
}
