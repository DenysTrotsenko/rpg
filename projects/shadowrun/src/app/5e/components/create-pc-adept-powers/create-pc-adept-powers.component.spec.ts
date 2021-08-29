import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcAdeptPowersComponent } from './create-pc-adept-powers.component';

describe('CreatePcAdeptPowersComponent', () => {
  let component: CreatePcAdeptPowersComponent;
  let fixture: ComponentFixture<CreatePcAdeptPowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcAdeptPowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcAdeptPowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
