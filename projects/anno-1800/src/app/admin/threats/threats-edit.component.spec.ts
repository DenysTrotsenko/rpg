import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatsEditComponent } from './threats-edit.component';

describe('ThreatsEditComponent', () => {
  let component: ThreatsEditComponent;
  let fixture: ComponentFixture<ThreatsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreatsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreatsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
