import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSpecializationsComponent } from './skills-specializations.component';

describe('SkillsSpecializationsComponent', () => {
  let component: SkillsSpecializationsComponent;
  let fixture: ComponentFixture<SkillsSpecializationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsSpecializationsComponent]
    });
    fixture = TestBed.createComponent(SkillsSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
