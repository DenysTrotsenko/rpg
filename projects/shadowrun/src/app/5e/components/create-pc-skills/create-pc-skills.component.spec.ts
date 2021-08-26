import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcSkillsComponent } from './create-pc-skills.component';

describe('CreatePcSkillsComponent', () => {
  let component: CreatePcSkillsComponent;
  let fixture: ComponentFixture<CreatePcSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
