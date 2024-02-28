import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { TreeEditorComponent } from './tree-editor.component';
import { TreeNodeComponent } from './tree-node.component';

@NgModule({
  declarations: [
    TreeEditorComponent,
    TreeNodeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TreeEditorComponent
  ]
})
export class TreeEditorModule { }
