import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSettingsComponent } from './admin-settings.component';
import { AdminSettingsEditComponent } from './admin-settings-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    AdminSettingsComponent,
    AdminSettingsEditComponent
  ],
  exports: [
    AdminSettingsComponent,
    AdminSettingsEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminSettingsModule { }
