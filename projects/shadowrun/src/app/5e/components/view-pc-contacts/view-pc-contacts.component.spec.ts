import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPcContactsComponent } from './view-pc-contacts.component';

describe('ViewPcContactsComponent', () => {
  let component: ViewPcContactsComponent;
  let fixture: ComponentFixture<ViewPcContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPcContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPcContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
