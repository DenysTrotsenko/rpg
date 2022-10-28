import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuirksEditComponent } from './quirks-edit.component';

describe('QuirksEditComponent', () => {
  let component: QuirksEditComponent;
  let fixture: ComponentFixture<QuirksEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuirksEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuirksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
