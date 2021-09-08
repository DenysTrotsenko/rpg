import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcLifestyleComponent } from './create-pc-lifestyle.component';

describe('CreatePcLifestyleComponent', () => {
  let component: CreatePcLifestyleComponent;
  let fixture: ComponentFixture<CreatePcLifestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcLifestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcLifestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
