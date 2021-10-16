import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRitualsComponent } from './view-rituals.component';

describe('ViewRitualsComponent', () => {
  let component: ViewRitualsComponent;
  let fixture: ComponentFixture<ViewRitualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRitualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRitualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
