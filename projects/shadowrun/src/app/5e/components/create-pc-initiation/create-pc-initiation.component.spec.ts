import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcInitiationComponent } from './create-pc-initiation.component';

describe('CreatePcInitiationComponent', () => {
  let component: CreatePcInitiationComponent;
  let fixture: ComponentFixture<CreatePcInitiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePcInitiationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcInitiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
