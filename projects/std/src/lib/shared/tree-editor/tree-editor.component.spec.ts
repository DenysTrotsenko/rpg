import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeEditorComponent } from './tree-editor.component';

describe('TreeEditorComponent', () => {
  let component: TreeEditorComponent;
  let fixture: ComponentFixture<TreeEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeEditorComponent]
    });
    fixture = TestBed.createComponent(TreeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
