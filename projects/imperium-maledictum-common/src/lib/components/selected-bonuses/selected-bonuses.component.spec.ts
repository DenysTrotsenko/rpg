import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBonusesComponent } from './selected-bonuses.component';

describe('SelectedBonusesComponent', () => {
  let component: SelectedBonusesComponent;
  let fixture: ComponentFixture<SelectedBonusesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedBonusesComponent]
    });
    fixture = TestBed.createComponent(SelectedBonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
