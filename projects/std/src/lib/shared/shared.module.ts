import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkModule } from '../cdk/cdk.module';
import { MaterialModule } from '../material/material.module';
import { JoinPipe } from './pipes/join.pipe';
import { MapPipe } from './pipes/map.pipe';
import { FilterTruthyPipe } from './pipes/filter-truthy.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { FindPipe } from './pipes/find.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { KeyValueArrayComponent } from './components/key-value-array/key-value-array.component';
import { SelectionListComponent } from './components/selection-list/selection-list.component';
import { JsonEditorDialogComponent } from './json-editor-dialog/json-editor-dialog.component';
import { CodeEditorModule } from './code-editor/code-editor.module';
import { TodoEditorModule } from './todo-editor/todo-editor.module';
import { TreeEditorModule } from './tree-editor/tree-editor.module';
import { SelectAllComponent } from './components/select-all/select-all.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ImageInputComponent } from './components/image-input/image-input.component';
import { ImageInputDialogComponent } from './components/image-input/image-input-dialog.component';

const DECLARATIONS = [
  JoinPipe,
  MapPipe,
  FilterTruthyPipe,
  FilterByPipe,
  FindPipe,
  SortPipe,
  KeyValueArrayComponent,
  SelectionListComponent,
  SelectAllComponent,
  FileInputComponent,
  ImageUploadComponent,
  ImageInputComponent,
  ImageInputDialogComponent
];

const IMPORTS = [
  CommonModule,
  CdkModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
  CodeEditorModule,
  TodoEditorModule,
  JsonEditorDialogComponent,
  TreeEditorModule,
  NgOptimizedImage
];

@NgModule({
  declarations: [ ...DECLARATIONS ],
  imports: [...IMPORTS],
  exports: [ ...DECLARATIONS, ...IMPORTS ]
})
export class SharedModule {}
