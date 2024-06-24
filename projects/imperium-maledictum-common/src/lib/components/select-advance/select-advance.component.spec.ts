import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAdvanceComponent } from './select-advance.component';

describe('SelectAdvanceComponent', () => {
  let component: SelectAdvanceComponent;
  let fixture: ComponentFixture<SelectAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAdvanceComponent]
    });
    fixture = TestBed.createComponent(SelectAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
