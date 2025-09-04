import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancementDialogComponent } from './advancement-dialog.component';

describe('AdvancementDialogComponent', () => {
  let component: AdvancementDialogComponent;
  let fixture: ComponentFixture<AdvancementDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancementDialogComponent]
    });
    fixture = TestBed.createComponent(AdvancementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
