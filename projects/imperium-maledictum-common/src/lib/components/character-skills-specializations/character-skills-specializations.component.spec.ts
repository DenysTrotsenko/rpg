import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSkillsSpecializationsComponent } from './character-skills-specializations.component';

describe('SkillsSpecializationsComponent', () => {
  let component: CharacterSkillsSpecializationsComponent;
  let fixture: ComponentFixture<CharacterSkillsSpecializationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSkillsSpecializationsComponent]
    });
    fixture = TestBed.createComponent(CharacterSkillsSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
