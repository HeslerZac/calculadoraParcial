import { IAdder } from '../api/IAdder';
import { ISubtractor } from '../api/ISubtractor';
import { IMultiplier } from '../api/IMultiplier';

/**
 * Calculator: orquesta servicios inyectados (DI por constructor).
 * Integrante C puede extender con división, validaciones, etc.
 */
export class Calculator {
  constructor(
    private readonly adder: IAdder,
    private readonly subtractor: ISubtractor,
    private readonly multiplier: IMultiplier,
  ) {}

  sum(a: number, b: number): number {
    return this.adder.add(a, b);
  }
  sub(a: number, b: number): number {
    return this.subtractor.subtract(a, b);
  }
  mul(a: number, b: number): number {
    return this.multiplier.multiply(a, b);
  }
}
