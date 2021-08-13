import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-specialty-dialog',
  templateUrl: './specialty-dialog.component.html',
  styleUrls: ['./specialty-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecialtyDialogComponent {
  readonly specialty = new FormControl('', [Validators.required, Validators.minLength(1)]);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
