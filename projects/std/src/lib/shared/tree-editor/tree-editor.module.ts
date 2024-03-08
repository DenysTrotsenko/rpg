import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkModule } from '../../cdk/cdk.module';
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
    MaterialModule,
    CdkModule
  ],
  exports: [
    TreeEditorComponent
  ]
})
export class TreeEditorModule { }
