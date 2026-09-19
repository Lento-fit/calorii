import { describe, expect, it } from 'vitest'
import { bmi, bmrMifflinStJeor, calorieTarget, macros, tdee, timeToGoal, InvalidInputError, CONSTANTS } from '../src/index.js'
import type { Activity, Goal, MacroProfile, Sex } from '../src/index.js'

const SEXES: Sex[] = ['female', 'male']
const ACTIVITIES: Activity[] = ['sedentary', 'light', 'moderate', 'active', 'very_active']
const PROFILES: MacroProfile[] = ['balanced', 'high_protein', 'low_carb']
const GOALS: Goal[] = ['lose', 'maintain', 'gain']

function* grid(from: number, to: number, step: number) {
  for (let v = from; v <= to + 1e-9; v += step) yield Math.round(v * 1000) / 1000
}

describe('properties', () => {
  it('more activity never lowers TDEE', () => {
    for (const bmr of [1000, 1400, 1800, 2500]) {
      let prev = 0
      for (const a of ACTIVITIES) {
        const t = tdee(bmr, a)
        expect(t).toBeGreaterThan(prev)
        prev = t
      }
    }
  })

  it('calorie target: invariants hold for every valid input on a grid', () => {
    for (const sex of SEXES)
      for (const weightKg of grid(40, 150, 10))
        for (const tdeeKcal of grid(1000, 4000, 250))
          for (const goal of GOALS)
            for (const rate of grid(0, 2, 0.25)) {
              const r = calorieTarget({ tdee: tdeeKcal, sex, weightKg, goal, rateKgPerWeek: rate })
              if (!r.feasible) {
                expect(goal).toBe('lose')
                expect(r.targetKcal).toBeNull()
                expect(r.reason).toBe('floor_above_tdee')
                expect(CONSTANTS.safeFloorKcal[sex]).toBeGreaterThanOrEqual(tdeeKcal)
                continue
              }
              const t = r.targetKcal as number
              const d = r.appliedDailyDelta as number
              expect(Number.isFinite(t) && Number.isFinite(d)).toBe(true)
              expect(Math.abs(tdeeKcal - d - t)).toBeLessThan(1e-9)
              if (goal === 'lose') {
                expect(t).toBeGreaterThanOrEqual(CONSTANTS.safeFloorKcal[sex] - 1e-9)
                expect(d).toBeGreaterThanOrEqual(0)
                expect(d).toBeLessThanOrEqual(CONSTANTS.capShareOfTdee.lose * tdeeKcal + 1e-9)
              }
              if (goal === 'gain') {
                expect(d).toBeLessThanOrEqual(0)
                expect(-d).toBeLessThanOrEqual(CONSTANTS.capShareOfTdee.gain * tdeeKcal + 1e-9)
              }
              if (goal === 'maintain') expect(t).toBe(tdeeKcal)
              if (rate > CONSTANTS.rateTooFastShareOfWeight * weightKg && goal !== 'maintain') expect(r.warnings).toContain('rate_too_fast')
            }
  })

  it('macros: finite, non-negative, energy-consistent, or explicitly infeasible', () => {
    for (const kcal of grid(800, 4000, 100))
      for (const weightKg of grid(40, 200, 10))
        for (const profile of PROFILES) {
          const r = macros({ kcal, weightKg, profile })
          if (!r.feasible) {
            expect(r.reason).toBe('kcal_too_low_for_weight')
            expect(r.adjustments).toContain('fat_reduced_to_fit')
            continue
          }
          const { proteinG, carbsG, fatG } = r as { proteinG: number; carbsG: number; fatG: number }
          for (const v of [proteinG, carbsG, fatG]) {
            expect(Number.isFinite(v)).toBe(true)
            expect(v).toBeGreaterThanOrEqual(-1e-9)
          }
          expect(Math.abs(4 * proteinG + 4 * carbsG + 9 * fatG - kcal)).toBeLessThan(1e-6)
          expect(carbsG * 4).toBeGreaterThanOrEqual(CONSTANTS.macroMinimums.carbsShare * kcal - 1e-6)
          expect(fatG * 9).toBeGreaterThanOrEqual(CONSTANTS.macroMinimums.fatShare * kcal - 1e-6)
        }
  })

  it('BMI categories are continuous: every value gets exactly one category and boundaries go up', () => {
    let prevCat = ''
    const order = ['underweight', 'normal', 'overweight', 'obese_1', 'obese_2', 'obese_3']
    for (const w of grid(30, 200, 0.5)) {
      const r = bmi({ weightKg: w, heightCm: 170 })
      expect(order).toContain(r.category)
      if (prevCat) expect(order.indexOf(r.category)).toBeGreaterThanOrEqual(order.indexOf(prevCat))
      prevCat = r.category
    }
    expect(bmi({ weightKg: 25 * 1.7 * 1.7, heightCm: 170 }).category).toBe('overweight')
    expect(bmi({ weightKg: 24.99 * 1.7 * 1.7, heightCm: 170 }).category).toBe('normal')
  })

  it('BMR grows with weight and height and shrinks with age', () => {
    const base = { sex: 'male' as Sex, weightKg: 80, heightCm: 178, ageYears: 35 }
    const b = bmrMifflinStJeor(base)
    expect(bmrMifflinStJeor({ ...base, weightKg: 90 })).toBeGreaterThan(b)
    expect(bmrMifflinStJeor({ ...base, heightCm: 190 })).toBeGreaterThan(b)
    expect(bmrMifflinStJeor({ ...base, ageYears: 50 })).toBeLessThan(b)
    expect(bmrMifflinStJeor({ ...base, sex: 'female' })).toBeLessThan(b)
  })

  it('timeToGoal is a scenario: null without a delta, arithmetic otherwise', () => {
    expect(timeToGoal({ currentKg: 80, targetKg: 75, appliedDailyDelta: 0 }).weeks).toBeNull()
    expect(timeToGoal({ currentKg: 80, targetKg: 75, appliedDailyDelta: null }).weeks).toBeNull()
    const r = timeToGoal({ currentKg: 80, targetKg: 75, appliedDailyDelta: 550 })
    expect(r.label).toBe('arithmetic_scenario')
    expect(r.weeks).toBeCloseTo((5 * 7700) / (550 * 7), 9)
    expect(timeToGoal({ currentKg: 75, targetKg: 80, appliedDailyDelta: -550 }).weeks).toBeCloseTo(10, 9)
  })
})

describe('validation', () => {
  const ok = { sex: 'female' as Sex, weightKg: 65, heightCm: 165, ageYears: 30 }
  it('rejects minors with an explicit hint', () => {
    expect(() => bmrMifflinStJeor({ ...ok, ageYears: 17 })).toThrow(InvalidInputError)
    expect(() => bmrMifflinStJeor({ ...ok, ageYears: 17 })).toThrow(/adults/)
  })
  it('rejects out-of-range, non-finite and unknown enum values', () => {
    expect(() => bmrMifflinStJeor({ ...ok, weightKg: 20 })).toThrow(/weightKg/)
    expect(() => bmrMifflinStJeor({ ...ok, heightCm: Number.NaN })).toThrow(InvalidInputError)
    expect(() => bmrMifflinStJeor({ ...ok, sex: 'other' as Sex })).toThrow(/sex/)
    expect(() => tdee(1500, 'couch' as Activity)).toThrow(/activity/)
    expect(() => tdee(-1, 'light')).toThrow(/bmr/)
    expect(() => calorieTarget({ tdee: 2000, sex: 'male', weightKg: 80, goal: 'lose', rateKgPerWeek: -1 })).toThrow(/rateKgPerWeek/)
    expect(() => macros({ kcal: 0, weightKg: 70, profile: 'balanced' })).toThrow(/kcal/)
    expect(() => macros({ kcal: 2000, weightKg: 70, profile: 'keto' as MacroProfile })).toThrow(/profile/)
  })
  it('exposes field and range on the error', () => {
    try {
      bmrMifflinStJeor({ ...ok, weightKg: 500 })
      expect.unreachable()
    } catch (e) {
      const err = e as InvalidInputError
      expect(err.field).toBe('weightKg')
      expect(err.min).toBe(30)
      expect(err.max).toBe(300)
      expect(err.received).toBe(500)
    }
  })
})
