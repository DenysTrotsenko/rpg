import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkModule } from '../cdk/cdk.module';
import { MaterialModule } from '../material/material.module';
import { JoinPipe } from './pipes/join.pipe';
import { MapPipe } from './pipes/map.pipe';
import { FilterTruthyPipe } from './pipes/filter-truthy.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { FindPipe } from './pipes/find.pipe';
import { KeyValueArrayComponent } from './components/key-value-array/key-value-array.component';
import { SelectionListComponent } from './components/selection-list/selection-list.component';
import { AdminBaseModule } from './admin-base/admin-base.module';
import { AdminUsersModule } from './admin-users/admin-users.module';
import { AdminSettingsModule } from './admin-settings/admin-settings.module';
import { AdminDictionaryModule } from './admin-dictionary/admin-dictionary.module';
import { JsonEditorDialogComponent } from './json-editor-dialog/json-editor-dialog.component';
import { CodeEditorModule } from './code-editor/code-editor.module';

const DECLARATIONS = [
  JoinPipe,
  MapPipe,
  FilterTruthyPipe,
  FilterByPipe,
  FindPipe,
  KeyValueArrayComponent,
  SelectionListComponent,
  JsonEditorDialogComponent
];

const IMPORTS = [
  CommonModule,
  CdkModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
  CodeEditorModule,
  AdminBaseModule,
  AdminDictionaryModule,
  AdminUsersModule,
  AdminSettingsModule
];

@NgModule({
  declarations: [ ...DECLARATIONS ],
  imports: [ ...IMPORTS ],
  exports: [ ...DECLARATIONS, ...IMPORTS ]
})
export class SharedModule {}
