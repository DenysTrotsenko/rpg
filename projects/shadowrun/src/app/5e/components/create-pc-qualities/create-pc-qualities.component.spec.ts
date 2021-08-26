import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcQualitiesComponent } from './create-pc-qualities.component';

describe('CreatePcQualitiesComponent', () => {
  let component: CreatePcQualitiesComponent;
  let fixture: ComponentFixture<CreatePcQualitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcQualitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcQualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
