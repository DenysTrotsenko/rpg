import { TestBed } from '@angular/core/testing';
import { AdminService } from './admin.service';
import { HasId } from '@shared';

describe('AdminService', () => {
  let service: AdminService<HasId<unknown>, unknown>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
