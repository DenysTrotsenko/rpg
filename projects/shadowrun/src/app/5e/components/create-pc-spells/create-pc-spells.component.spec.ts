import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcSpellsComponent } from './create-pc-spells.component';

describe('CreatePcSpellsComponent', () => {
  let component: CreatePcSpellsComponent;
  let fixture: ComponentFixture<CreatePcSpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcSpellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
