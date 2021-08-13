import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeritExpansionPanelComponent } from './merit-expansion-panel.component';

describe('MeritExpansionPanelComponent', () => {
  let component: MeritExpansionPanelComponent;
  let fixture: ComponentFixture<MeritExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeritExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeritExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
