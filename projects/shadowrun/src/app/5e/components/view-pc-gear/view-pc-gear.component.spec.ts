import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPcGearComponent } from './view-pc-gear.component';

describe('ViewPcGearComponent', () => {
  let component: ViewPcGearComponent;
  let fixture: ComponentFixture<ViewPcGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPcGearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPcGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
