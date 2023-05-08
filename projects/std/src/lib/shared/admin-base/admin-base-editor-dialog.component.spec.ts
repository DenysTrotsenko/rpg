import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBaseEditorDialogComponent } from './admin-base-editor-dialog.component';

describe('AdminBaseEditorDialogComponent', () => {
  let component: AdminBaseEditorDialogComponent;
  let fixture: ComponentFixture<AdminBaseEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBaseEditorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBaseEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
