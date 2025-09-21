import { SubtractorService } from '../../src/impl/SubtractorService';

describe('SubtractorService', () => {
  const service = new SubtractorService();

  test('resta números positivos', () => {
    expect(service.subtract(7, 3)).toBe(4);
  });

  test('resta con negativos', () => {
    expect(service.subtract(-5, -2)).toBe(-3);
    expect(service.subtract(-5, 2)).toBe(-7);
  });

  test('resta con decimales', () => {
    expect(service.subtract(5.5, 2.2)).toBeCloseTo(3.3, 10);
  });
});
