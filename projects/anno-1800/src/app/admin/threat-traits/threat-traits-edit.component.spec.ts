import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatTraitsEditComponent } from './threat-traits-edit.component';

describe('ThreatTraitsEditComponent', () => {
  let component: ThreatTraitsEditComponent;
  let fixture: ComponentFixture<ThreatTraitsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreatTraitsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreatTraitsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
