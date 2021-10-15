import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPcKnowledgeComponent } from './view-pc-knowledge.component';

describe('ViewPcKnowledgeComponent', () => {
  let component: ViewPcKnowledgeComponent;
  let fixture: ComponentFixture<ViewPcKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPcKnowledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPcKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
