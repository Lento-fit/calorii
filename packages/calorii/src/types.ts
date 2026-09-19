export type Sex = 'female' | 'male'
export type Activity = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active'
export type Goal = 'lose' | 'maintain' | 'gain'
export type MacroProfile = 'balanced' | 'high_protein' | 'low_carb'
export type BmiCategory = 'underweight' | 'normal' | 'overweight' | 'obese_1' | 'obese_2' | 'obese_3'

/** Machine-readable adjustments the engine applied to keep a result inside its rules. */
export type Adjustment =
  | 'capped_25pct'
  | 'capped_15pct'
  | 'raised_to_floor'
  | 'protein_reduced_to_fit'
  | 'fat_reduced_to_fit'

/** Machine-readable warnings the caller must surface to the person. */
export type Warning = 'below_safe_floor' | 'rate_too_fast'

export interface BodyInput {
  sex: Sex
  weightKg: number
  heightCm: number
  ageYears: number
}

export interface CalorieTargetInput {
  /** Total daily energy expenditure, kcal/day. */
  tdee: number
  sex: Sex
  weightKg: number
  goal: Goal
  /** Desired rate of change, kg per week (magnitude; direction comes from `goal`). */
  rateKgPerWeek: number
}

export interface CalorieTargetResult {
  /** Daily energy target, kcal/day. `null` when no coherent target exists (`feasible: false`). */
  targetKcal: number | null
  /** Deficit the caller asked for, kcal/day, before any rule was applied (magnitude). */
  requestedDailyDelta: number
  /** Signed daily delta actually applied: positive = deficit, negative = surplus. Invariant: targetKcal = tdee - appliedDailyDelta. */
  appliedDailyDelta: number | null
  /** Rate implied by the applied delta, kg/week (magnitude). */
  appliedRateKgPerWeek: number | null
  adjustments: Adjustment[]
  warnings: Warning[]
  feasible: boolean
  reason?: 'floor_above_tdee'
}

export interface MacrosInput {
  kcal: number
  weightKg: number
  profile: MacroProfile
}

export interface MacrosResult {
  proteinG: number | null
  carbsG: number | null
  fatG: number | null
  proteinGPerKg: number | null
  feasible: boolean
  adjustments: Adjustment[]
  reason?: 'kcal_too_low_for_weight'
}

export interface Per100g {
  kcal: number
  proteinG: number
  carbsG: number
  fatG: number
  fiberG?: number
}

export interface PortionResult {
  kcal: number
  proteinG: number
  carbsG: number
  fatG: number
  fiberG: number | null
}

export interface BmiResult {
  value: number
  category: BmiCategory
}

export interface HealthyWeightRange {
  minKg: number
  maxKg: number
}

export interface TimeToGoalResult {
  /** Weeks implied by pure arithmetic on the applied daily delta; `null` when the delta is zero or missing. */
  weeks: number | null
  /** This is a scenario, not a prediction: real change is not linear. */
  label: 'arithmetic_scenario'
}
