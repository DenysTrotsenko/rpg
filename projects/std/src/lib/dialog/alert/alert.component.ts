import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { CommonDialogData } from '../dialog.models';

@Component({
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CommonDialogData) {}
}
