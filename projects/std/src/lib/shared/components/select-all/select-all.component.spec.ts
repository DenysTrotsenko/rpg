import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAllComponent } from './select-all.component';

describe('SelectAllComponent', () => {
  let component: SelectAllComponent;
  let fixture: ComponentFixture<SelectAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAllComponent]
    });
    fixture = TestBed.createComponent(SelectAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
