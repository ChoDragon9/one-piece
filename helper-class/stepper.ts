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
    this.changeCurrent(this.current + this.step)
  }
  prev(): void {
    this.changeCurrent(this.current - this.step)
  }
  moveTo(position: number): void {
    this.changeCurrent(position)
  }

  private changeCurrent(position: number): void {
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
