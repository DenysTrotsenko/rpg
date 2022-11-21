import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfflictionsEditComponent } from './afflictions-edit.component';

describe('AfflictionsEditComponent', () => {
  let component: AfflictionsEditComponent;
  let fixture: ComponentFixture<AfflictionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfflictionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfflictionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
