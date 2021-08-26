import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstralComponent } from './astral.component';

describe('AstralComponent', () => {
  let component: AstralComponent;
  let fixture: ComponentFixture<AstralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
