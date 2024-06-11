import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCharacteristicsComponent } from './character-characteristics.component';

describe('CharacteristicsComponent', () => {
  let component: CharacterCharacteristicsComponent;
  let fixture: ComponentFixture<CharacterCharacteristicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterCharacteristicsComponent]
    });
    fixture = TestBed.createComponent(CharacterCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
