import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBonusComponent } from './select-bonus.component';

describe('SelectBonusComponent', () => {
  let component: SelectBonusComponent;
  let fixture: ComponentFixture<SelectBonusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectBonusComponent]
    });
    fixture = TestBed.createComponent(SelectBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
