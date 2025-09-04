import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpEditDialogComponent } from './xp-edit-dialog.component';

describe('XpEditDialogComponent', () => {
  let component: XpEditDialogComponent;
  let fixture: ComponentFixture<XpEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XpEditDialogComponent]
    });
    fixture = TestBed.createComponent(XpEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
