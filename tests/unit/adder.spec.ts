import { AdderService } from '../../src/impl/AdderService';

describe('AdderService', () => {
  it('suma números positivos', () => {
    const svc = new AdderService();
    expect(svc.add(2, 3)).toBe(5);
  });

  it('suma con negativos', () => {
    const svc = new AdderService();
    expect(svc.add(-2, 3)).toBe(1);
  });
});
