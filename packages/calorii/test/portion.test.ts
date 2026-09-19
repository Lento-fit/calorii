import { describe, expect, it } from 'vitest'
import { portion } from '../src/index.js'

describe('portion', () => {
  it('scales linearly and keeps fiber null when absent', () => {
    const r = portion({ per100g: { kcal: 100, proteinG: 10, carbsG: 5, fatG: 2 }, grams: 250 })
    expect(r).toEqual({ kcal: 250, proteinG: 25, carbsG: 12.5, fatG: 5, fiberG: null })
  })
  it('rejects non-positive grams and negative nutrients', () => {
    expect(() => portion({ per100g: { kcal: 100, proteinG: 1, carbsG: 1, fatG: 1 }, grams: 0 })).toThrow(/grams/)
    expect(() => portion({ per100g: { kcal: -1, proteinG: 1, carbsG: 1, fatG: 1 }, grams: 100 })).toThrow(/kcal/)
  })
})
