import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonDialogData } from '../dialog.models';

@Component({
  selector: 'lib-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CommonDialogData) {}
}
