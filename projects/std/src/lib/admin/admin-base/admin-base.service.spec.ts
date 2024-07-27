import { TestBed } from '@angular/core/testing';
import { AdminBaseService } from './admin-base.service';
import { HasId } from '@std';

describe('AdminService', () => {
  let service: AdminBaseService<HasId<unknown>, unknown>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
