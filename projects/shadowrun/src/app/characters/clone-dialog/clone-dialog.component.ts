import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './clone-dialog.component.html',
  styleUrls: ['./clone-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloneDialogComponent {
  control: FormControl = new FormControl(`(clone) ${this.data}`, [Validators.required, Validators.maxLength(32)]);
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}
