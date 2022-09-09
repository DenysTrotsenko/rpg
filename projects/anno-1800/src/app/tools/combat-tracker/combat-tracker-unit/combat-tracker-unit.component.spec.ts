import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatTrackerUnitComponent } from './combat-tracker-unit.component';

describe('CombatTrackerUnitComponent', () => {
  let component: CombatTrackerUnitComponent;
  let fixture: ComponentFixture<CombatTrackerUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatTrackerUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatTrackerUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
