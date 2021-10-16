import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpiritsComponent } from './view-spirits.component';

describe('ViewSpiritsComponent', () => {
  let component: ViewSpiritsComponent;
  let fixture: ComponentFixture<ViewSpiritsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpiritsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpiritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
