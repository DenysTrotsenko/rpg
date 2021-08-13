import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeritCardComponent } from './merit-card.component';

describe('MeritCardComponent', () => {
  let component: MeritCardComponent;
  let fixture: ComponentFixture<MeritCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeritCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeritCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
