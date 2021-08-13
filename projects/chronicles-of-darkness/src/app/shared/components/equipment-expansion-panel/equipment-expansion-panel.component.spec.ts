import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentExpansionPanelComponent } from './equipment-expansion-panel.component';

describe('EquipmentExpansionPanelComponent', () => {
  let component: EquipmentExpansionPanelComponent;
  let fixture: ComponentFixture<EquipmentExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
