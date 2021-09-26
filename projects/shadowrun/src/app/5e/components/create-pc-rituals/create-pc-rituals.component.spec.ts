import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcRitualsComponent } from './create-pc-rituals.component';

describe('CreatePcRitualsComponent', () => {
  let component: CreatePcRitualsComponent;
  let fixture: ComponentFixture<CreatePcRitualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePcRitualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcRitualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
