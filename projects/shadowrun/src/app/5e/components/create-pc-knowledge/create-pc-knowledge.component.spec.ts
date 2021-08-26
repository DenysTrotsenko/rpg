import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcKnowledgeComponent } from './create-pc-knowledge.component';

describe('CreatePcKnowledgeComponent', () => {
  let component: CreatePcKnowledgeComponent;
  let fixture: ComponentFixture<CreatePcKnowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcKnowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
