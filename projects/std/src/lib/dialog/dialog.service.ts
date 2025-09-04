import { Injectable, TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  alert<D = any, R = any>(config?: MatDialogConfig<D>): MatDialogRef<AlertComponent, R> {
    return this.dialog.open(AlertComponent, config);
  }

  confirm<D = any, R = any>(config?: MatDialogConfig<D>): MatDialogRef<ConfirmComponent, R> {
    return this.dialog.open(ConfirmComponent, config);
  }

  open<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: MatDialogConfig<D>): MatDialogRef<T, R> {
    return this.dialog.open(componentOrTemplateRef, config);
  }
}
