import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

const SNACKBAR_DEFAULT_DURATION = 5000;
const SNACKBAR_ERROR_CLASS = 'snackbar-error';
const SNACKBAR_SUCCESS_CLASS = 'snackbar-success';
const SNACKBAR_INFO_CLASS = 'snackbar-info';

@Injectable()
export class SnackbarService {
  constructor(private snack: MatSnackBar) {}

  info(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.snack.open(message, 'OK', {
      duration: SNACKBAR_DEFAULT_DURATION,
      panelClass: SNACKBAR_INFO_CLASS
    });
  }

  success(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.snack.open(message, 'OK', {
      duration: SNACKBAR_DEFAULT_DURATION,
      panelClass: SNACKBAR_SUCCESS_CLASS
    });
  }

  error(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.snack.open(message, 'OK', {
      duration: SNACKBAR_DEFAULT_DURATION,
      panelClass: SNACKBAR_ERROR_CLASS
    });
  }
}
