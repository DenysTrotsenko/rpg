import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpellsComponent } from './view-spells.component';

describe('ViewSpellsComponent', () => {
  let component: ViewSpellsComponent;
  let fixture: ComponentFixture<ViewSpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
