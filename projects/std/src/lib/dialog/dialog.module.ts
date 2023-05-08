import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { DialogService } from './dialog.service';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';



@NgModule({
  declarations: [
    AlertComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    DialogService
  ]
})
export class DialogModule { }
