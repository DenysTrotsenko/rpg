import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilmentsComponent } from './ailments.component';

describe('AilmentsComponent', () => {
  let component: AilmentsComponent;
  let fixture: ComponentFixture<AilmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AilmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
