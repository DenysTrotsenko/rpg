import { TestBed } from '@angular/core/testing';
import { TestingModule } from '@cod/app/testing/testing.module';
import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule]
    });
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSortedItems', () => {
    it('should correctly sort objects in asc order', () => {
      const unsorted = [{ name: 'c' }, { name: 'a' }, { name: 'b' }];
      const sorted = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];

      expect(service.getPrettifiedStrings(unsorted)).toEqual(sorted);
    });
  });

  describe('getPrettifiedStrings', () => {
    it('should correctly handled strings in objects', () => {
      const unhandled = [{ a: 1, b: true, c: '  a- b c-d ' }];
      const handled = [{ a: 1, b: true, c: 'ab c-d' }];

      expect(service.getPrettifiedStrings(unhandled)).toEqual(handled);
    });
  });
});
