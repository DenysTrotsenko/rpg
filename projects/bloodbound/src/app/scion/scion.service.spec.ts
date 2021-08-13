import { TestBed } from '@angular/core/testing';

import { ScionService } from './scion.service';

describe('ScionService', () => {
  let service: ScionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
