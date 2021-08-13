import { TestBed } from '@angular/core/testing';

import { 5eService } from './5e.service';

describe('5eService', () => {
  let service: 5eService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(5eService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
