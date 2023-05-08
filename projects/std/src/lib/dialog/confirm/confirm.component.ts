import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { CommonDialogData } from '../dialog.models';

@Component({
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CommonDialogData) {}
}
