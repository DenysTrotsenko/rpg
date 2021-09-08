import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcFinalCalculationsComponent } from './create-pc-final-calculations.component';

describe('CreatePcFinalCalculationsComponent', () => {
  let component: CreatePcFinalCalculationsComponent;
  let fixture: ComponentFixture<CreatePcFinalCalculationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcFinalCalculationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcFinalCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
