import { NgModule } from '@angular/core';
import { AdminBaseComponent } from './admin-base.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { AdminBaseEditorDialogComponent } from './admin-base-editor-dialog.component';

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
    MaterialModule
  ]
})
export class AdminBaseModule {}
