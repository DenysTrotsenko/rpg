import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDictionaryComponent } from './admin-dictionary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    AdminDictionaryComponent
  ],
  exports: [
    AdminDictionaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminDictionaryModule {}
