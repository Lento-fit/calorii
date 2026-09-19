import { CONSTANTS } from './constants.js'
import { InvalidInputError } from './errors.js'
import type { Activity, Goal, MacroProfile, Sex } from './types.js'

function finite(field: string, value: unknown): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) throw new InvalidInputError(field, value)
  return value
}

export function inRange(field: keyof typeof CONSTANTS.inputRanges, value: unknown): number {
  const n = finite(field, value)
  const [min, max] = CONSTANTS.inputRanges[field]
  if (n < min || n > max) {
    const hint = field === 'ageYears' && n < min ? 'The formulas are validated for adults only.' : undefined
    throw new InvalidInputError(field, n, min, max, hint)
  }
  return n
}

export function positive(field: string, value: unknown): number {
  const n = finite(field, value)
  if (n <= 0) throw new InvalidInputError(field, n, Number.EPSILON, Number.POSITIVE_INFINITY)
  return n
}

export function nonNegative(field: string, value: unknown): number {
  const n = finite(field, value)
  if (n < 0) throw new InvalidInputError(field, n, 0, Number.POSITIVE_INFINITY)
  return n
}

export function oneOf<T extends string>(field: string, value: unknown, allowed: readonly T[]): T {
  if (typeof value !== 'string' || !(allowed as readonly string[]).includes(value)) {
    throw new InvalidInputError(field, value, undefined, undefined, `Expected one of: ${allowed.join(', ')}`)
  }
  return value as T
}

export const SEXES: readonly Sex[] = ['female', 'male']
export const ACTIVITIES: readonly Activity[] = ['sedentary', 'light', 'moderate', 'active', 'very_active']
export const GOALS: readonly Goal[] = ['lose', 'maintain', 'gain']
export const PROFILES: readonly MacroProfile[] = ['balanced', 'high_protein', 'low_carb']
