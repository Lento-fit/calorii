import type { Per100g, PortionResult } from './types.js'
import { nonNegative, positive } from './validate.js'

/** Scale per-100 g values to a portion in grams. Linear; the engine never rounds. */
export function portion(input: { per100g: Per100g; grams: number }): PortionResult {
  const grams = positive('grams', input.grams)
  const p = input.per100g
  const f = grams / 100
  const fiber = p.fiberG === undefined || p.fiberG === null ? null : nonNegative('fiberG', p.fiberG) * f
  return {
    kcal: nonNegative('kcal', p.kcal) * f,
    proteinG: nonNegative('proteinG', p.proteinG) * f,
    carbsG: nonNegative('carbsG', p.carbsG) * f,
    fatG: nonNegative('fatG', p.fatG) * f,
    fiberG: fiber,
  }
}
