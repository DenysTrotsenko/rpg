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

const DECLARATIONS = [
  JoinPipe,
  MapPipe,
  FilterTruthyPipe,
  FilterByPipe,
  FindPipe,
  KeyValueArrayComponent,
  SelectionListComponent
];

const IMPORTS = [
  CommonModule,
  CdkModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
  AdminBaseModule,
  AdminUsersModule
];

@NgModule({
  declarations: [ ...DECLARATIONS ],
  imports: [ ...IMPORTS ],
  exports: [ ...DECLARATIONS, ...IMPORTS ]
})
export class SharedModule {}
