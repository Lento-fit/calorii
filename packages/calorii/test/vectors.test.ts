import { describe, expect, it } from 'vitest'
import vectors from './vectors.json'
import {
  bmi,
  bmrHarrisBenedict,
  bmrKatchMcArdle,
  bmrMifflinStJeor,
  calorieTarget,
  healthyWeightRange,
  macros,
  portion,
  tdee,
  CONSTANTS,
} from '../src/index.js'
import type { Activity, Goal, MacroProfile, Sex } from '../src/index.js'

const TOL = vectors.tolerance

function run(fn: string, input: Record<string, unknown>): Record<string, unknown> {
  switch (fn) {
    case 'bmr+tdee': {
      const body = { sex: input.sex as Sex, weightKg: input.weightKg as number, heightCm: input.heightCm as number, ageYears: input.ageYears as number }
      const m = bmrMifflinStJeor(body)
      return { bmrMifflinStJeor: m, bmrHarrisBenedict: bmrHarrisBenedict(body), tdeeMifflin: tdee(m, input.activity as Activity) }
    }
    case 'bmrKatchMcArdle':
      return { bmr: bmrKatchMcArdle({ weightKg: input.weightKg as number, bodyFatPct: input.bodyFatPct as number }) }
    case 'calorieTarget':
      return { ...calorieTarget({ tdee: input.tdee as number, sex: input.sex as Sex, weightKg: input.weightKg as number, goal: input.goal as Goal, rateKgPerWeek: input.rateKgPerWeek as number }) }
    case 'bmi': {
      const r = bmi({ weightKg: input.weightKg as number, heightCm: input.heightCm as number })
      return { bmi: r.value, category: r.category }
    }
    case 'bmi+healthyWeightRange': {
      const r = bmi({ weightKg: input.weightKg as number, heightCm: input.heightCm as number })
      return { bmi: r.value, category: r.category, ...healthyWeightRange({ heightCm: input.heightCm as number }) }
    }
    case 'portion':
      return { ...portion({ per100g: input.per100g as never, grams: input.grams as number }) }
    case 'macros':
      return { ...macros({ kcal: input.kcal as number, weightKg: input.weightKg as number, profile: input.profile as MacroProfile }) }
    default:
      throw new Error(`unknown fn ${fn}`)
  }
}

describe('contract vectors (test/vectors.json)', () => {
  it('constants are identical to the contract', () => {
    expect(JSON.parse(JSON.stringify(CONSTANTS))).toEqual(vectors.constants)
  })

  for (const c of vectors.cases) {
    it(`${c.id} ${c.fn}`, () => {
      const got = run(c.fn, c.input as Record<string, unknown>)
      for (const [key, expected] of Object.entries(c.expected as Record<string, unknown>)) {
        const actual = got[key]
        if (typeof expected === 'number') {
          expect(actual, key).toBeTypeOf('number')
          expect(Math.abs((actual as number) - expected), `${key}: expected ${expected}, got ${String(actual)}`).toBeLessThanOrEqual(TOL)
        } else {
          expect(actual, key).toEqual(expected)
        }
      }
    })
  }
})
