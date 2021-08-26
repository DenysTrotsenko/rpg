import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcAttributesComponent } from './create-pc-attributes.component';

describe('CreatePcAttributesComponent', () => {
  let component: CreatePcAttributesComponent;
  let fixture: ComponentFixture<CreatePcAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
