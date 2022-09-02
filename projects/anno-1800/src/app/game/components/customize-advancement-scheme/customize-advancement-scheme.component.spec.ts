import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeAdvancementSchemeComponent } from './customize-advancement-scheme.component';

describe('CustomizeAdvancementSchemeComponent', () => {
  let component: CustomizeAdvancementSchemeComponent;
  let fixture: ComponentFixture<CustomizeAdvancementSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeAdvancementSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeAdvancementSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
