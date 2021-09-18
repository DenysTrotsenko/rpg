import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQualitiesComponent } from './view-qualities.component';

describe('ViewQualitiesComponent', () => {
  let component: ViewQualitiesComponent;
  let fixture: ComponentFixture<ViewQualitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQualitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
