import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTalentsComponent } from './character-talents.component';

describe('TalentsComponent', () => {
  let component: CharacterTalentsComponent;
  let fixture: ComponentFixture<CharacterTalentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterTalentsComponent]
    });
    fixture = TestBed.createComponent(CharacterTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
