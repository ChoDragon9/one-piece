export class Stepper {
  readonly min: number
  readonly max: number
  readonly step: number
  private current: number

  private constructor(min: number, max: number, step: number, current: number) {
    this.min = min
    this.max = max
    this.step = step
    this.current = current
  }

  get isMax(): boolean {
    return this.current === this.max
  }

  get isMin(): boolean {
    return this.current === this.min
  }

  get currentPosition(): number {
    return this.current
  }

  next(): void {
    const current = this.current + this.step
    this.current = this.calibratePosition(current)
  }

  prev(): void {
    const current = this.current - this.step
    this.current = this.calibratePosition(current)
  }

  moveTo(position: number): void {
    this.current = this.calibratePosition(position)
  }

  private calibratePosition(position: number): number {
    return position > this.max
      ? this.max
      : position < this.min
        ? this.min
        : position
  }

  static create(max: number): Stepper {
    return new Stepper(1, max, 1, 1)
  }
}
