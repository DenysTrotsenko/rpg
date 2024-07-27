import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingsEditComponent } from './admin-settings-edit.component';

describe('AdminSettingsEditComponent', () => {
  let component: AdminSettingsEditComponent;
  let fixture: ComponentFixture<AdminSettingsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSettingsEditComponent]
    });
    fixture = TestBed.createComponent(AdminSettingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
