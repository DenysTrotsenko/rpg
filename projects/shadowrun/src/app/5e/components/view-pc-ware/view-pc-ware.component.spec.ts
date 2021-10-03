import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPcWareComponent } from './view-pc-ware.component';

describe('ViewPcWareComponent', () => {
  let component: ViewPcWareComponent;
  let fixture: ComponentFixture<ViewPcWareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPcWareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPcWareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
