import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkModule } from '../cdk/cdk.module';
import { MaterialModule } from '../material/material.module';
import { JoinPipe } from './pipes/join.pipe';
import { MapPipe } from './pipes/map.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { FindPipe } from './pipes/find.pipe';

const DECLARATIONS = [
  JoinPipe,
  MapPipe,
  FilterByPipe,
  FindPipe
];

const IMPORTS = [
  CommonModule,
  CdkModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [ ...DECLARATIONS ],
  imports: [ ...IMPORTS ],
  exports: [ ...DECLARATIONS, ...IMPORTS ]
})
export class SharedModule {}
