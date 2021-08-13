import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltsComponent } from './tilts.component';

describe('TiltsComponent', () => {
  let component: TiltsComponent;
  let fixture: ComponentFixture<TiltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiltsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
