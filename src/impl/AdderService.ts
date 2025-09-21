import { IAdder } from '../api/IAdder';

export class AdderService implements IAdder {
  add(a: number, b: number): number {
    return a + b;
  }
}
