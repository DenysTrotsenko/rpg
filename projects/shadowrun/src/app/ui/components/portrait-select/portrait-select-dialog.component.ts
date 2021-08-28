import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PORTRAITS } from './portrait-select.models';

@Component({
  templateUrl: './portrait-select-dialog.component.html',
  styleUrls: ['./portrait-select-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortraitSelectDialogComponent {
  readonly portraits = PORTRAITS;
  value: number = this.data;
  constructor(@Inject(MAT_DIALOG_DATA) public data: number) {}
}
