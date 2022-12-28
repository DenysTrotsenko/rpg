import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatTraitsComponent } from './threat-traits.component';

describe('ThreatTraitsComponent', () => {
  let component: ThreatTraitsComponent;
  let fixture: ComponentFixture<ThreatTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreatTraitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreatTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
