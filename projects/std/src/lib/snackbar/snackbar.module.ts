import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { SnackbarService } from './snackbar.service';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [
    SnackbarService
  ]
})
export class SnackbarModule { }
