import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonDialogData } from '../dialog.models';

@Component({
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css'],
    standalone: false
})
export class AlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CommonDialogData) {}
}
