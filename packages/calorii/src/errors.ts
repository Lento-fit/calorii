/** Thrown for inputs outside the ranges the formulas are validated for. */
export class InvalidInputError extends RangeError {
  readonly field: string
  readonly min: number | undefined
  readonly max: number | undefined
  readonly received: unknown

  constructor(field: string, received: unknown, min?: number, max?: number, hint?: string) {
    const range = min !== undefined && max !== undefined ? ` (expected ${min}..${max})` : ''
    super(`Invalid input for '${field}': ${String(received)}${range}${hint ? '. ' + hint : ''}`)
    this.name = 'InvalidInputError'
    this.field = field
    this.received = received
    this.min = min
    this.max = max
  }
}
