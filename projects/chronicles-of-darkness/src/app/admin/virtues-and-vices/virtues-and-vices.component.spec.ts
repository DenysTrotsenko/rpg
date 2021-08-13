import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtuesAndVicesComponent } from './virtues-and-vices.component';

describe('VirtuesAndVicesComponent', () => {
  let component: VirtuesAndVicesComponent;
  let fixture: ComponentFixture<VirtuesAndVicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtuesAndVicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtuesAndVicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
