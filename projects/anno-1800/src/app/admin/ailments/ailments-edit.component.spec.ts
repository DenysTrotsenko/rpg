import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilmentsEditComponent } from './ailments-edit.component';

describe('AilmentsEditComponent', () => {
  let component: AilmentsEditComponent;
  let fixture: ComponentFixture<AilmentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilmentsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AilmentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
