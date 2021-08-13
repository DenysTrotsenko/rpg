import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentQualitiesComponent } from './equipment-qualities.component';

describe('EquipmentQualitiesComponent', () => {
  let component: EquipmentQualitiesComponent;
  let fixture: ComponentFixture<EquipmentQualitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentQualitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentQualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
