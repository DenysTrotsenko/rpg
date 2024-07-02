import { NgModule } from '@angular/core';
import { AdminBaseComponent } from './admin-base.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CodeEditorModule } from '../code-editor/code-editor.module';

@NgModule({
  declarations: [
    AdminBaseComponent
  ],
  exports: [
    AdminBaseComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        CodeEditorModule
    ]
})
export class AdminBaseModule {}
