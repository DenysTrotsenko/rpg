import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { AdminUsersComponent } from './admin-users.component';
import { AdminUsersEditComponent } from './admin-users-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminUsersComponent,
    AdminUsersEditComponent
  ],
  exports: [
    AdminUsersComponent,
    AdminUsersEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminUsersModule {}
