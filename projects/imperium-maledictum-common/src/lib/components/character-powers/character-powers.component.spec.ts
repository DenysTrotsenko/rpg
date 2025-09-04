import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPowersComponent } from './character-powers.component';

describe('CharacterPowersComponent', () => {
  let component: CharacterPowersComponent;
  let fixture: ComponentFixture<CharacterPowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterPowersComponent]
    });
    fixture = TestBed.createComponent(CharacterPowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
