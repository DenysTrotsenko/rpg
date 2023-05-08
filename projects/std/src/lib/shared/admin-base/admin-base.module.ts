import { NgModule } from '@angular/core';
import { AdminBaseComponent } from './admin-base.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { AdminBaseEditorDialogComponent } from './admin-base-editor-dialog.component';
import { CodeEditorModule } from '@ngstack/code-editor';

@NgModule({
  declarations: [
    AdminBaseComponent,
    AdminBaseEditorDialogComponent
  ],
  exports: [
    AdminBaseComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CodeEditorModule.forChild()
  ]
})
export class AdminBaseModule {}
