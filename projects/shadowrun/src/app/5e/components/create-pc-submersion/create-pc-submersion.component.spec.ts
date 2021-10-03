import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcSubmersionComponent } from './create-pc-submersion.component';

describe('CreatePcSubmersionComponent', () => {
  let component: CreatePcSubmersionComponent;
  let fixture: ComponentFixture<CreatePcSubmersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePcSubmersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcSubmersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
