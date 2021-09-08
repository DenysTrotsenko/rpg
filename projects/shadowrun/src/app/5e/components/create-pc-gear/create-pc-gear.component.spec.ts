import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcGearComponent } from './create-pc-gear.component';

describe('CreatePcGearComponent', () => {
  let component: CreatePcGearComponent;
  let fixture: ComponentFixture<CreatePcGearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcGearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
