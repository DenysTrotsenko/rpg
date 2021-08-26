import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcContactsComponent } from './create-pc-contacts.component';

describe('CreatePcContactsComponent', () => {
  let component: CreatePcContactsComponent;
  let fixture: ComponentFixture<CreatePcContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
