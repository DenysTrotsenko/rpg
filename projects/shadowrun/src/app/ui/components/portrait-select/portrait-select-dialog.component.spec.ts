import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitSelectDialogComponent } from './portrait-select-dialog.component';

describe('PortraitSelectDialogComponent', () => {
  let component: PortraitSelectDialogComponent;
  let fixture: ComponentFixture<PortraitSelectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitSelectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
