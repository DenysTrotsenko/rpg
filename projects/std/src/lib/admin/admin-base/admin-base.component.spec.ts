import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBaseComponent } from './admin-base.component';

describe('AdminBaseComponent', () => {
  let component: AdminBaseComponent<any, unknown>;
  let fixture: ComponentFixture<AdminBaseComponent<any, unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
