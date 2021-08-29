import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcComplexFormsComponent } from './create-pc-complex-forms.component';

describe('CreatePcComplexFormsComponent', () => {
  let component: CreatePcComplexFormsComponent;
  let fixture: ComponentFixture<CreatePcComplexFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcComplexFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcComplexFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
