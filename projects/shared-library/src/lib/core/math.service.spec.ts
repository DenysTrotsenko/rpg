import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSumFromOneToN', () => {
    it(' should return 0 if no arg provided', () => {
      expect(service.getSumFromOneToN()).toBe(0);
    });
    it(' should return null if non-number arg provided', () => {
      expect(service.getSumFromOneToN('test' as any)).toBe(null);
    });
    it(' should return correct sum (15 for n=5)', () => {
      expect(service.getSumFromOneToN(5)).toBe(15);
    });
  });
});
