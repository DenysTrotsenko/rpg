import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { TodoEditorComponent } from './todo-editor.component';
import { TodoTaskComponent } from './todo-task.component';
import { TodoDialogComponent } from './todo-dialog.component';

@NgModule({
  declarations: [
    TodoEditorComponent,
    TodoTaskComponent,
    TodoDialogComponent
  ],
  exports: [
    TodoEditorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodoEditorModule {}
