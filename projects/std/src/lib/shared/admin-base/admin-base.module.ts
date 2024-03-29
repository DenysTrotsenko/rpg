import { NgModule } from '@angular/core';
import { AdminBaseComponent } from './admin-base.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ]
})
export class AdminBaseModule {}
