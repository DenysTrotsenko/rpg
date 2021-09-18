import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComplexFormsComponent } from './view-complex-forms.component';

describe('ViewComplexFormsComponent', () => {
  let component: ViewComplexFormsComponent;
  let fixture: ComponentFixture<ViewComplexFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComplexFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComplexFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
