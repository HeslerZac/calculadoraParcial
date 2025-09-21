import { ISubtractor } from '../api/ISubtractor';

/**
 * Implementación simple de resta.
 */
export class SubtractorService implements ISubtractor {
  subtract(a: number, b: number): number {
    return a - b;
  }
}

export default SubtractorService;
