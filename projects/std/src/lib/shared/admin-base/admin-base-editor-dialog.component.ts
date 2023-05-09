import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  templateUrl: './admin-base-editor-dialog.component.html',
  styleUrls: ['./admin-base-editor-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminBaseEditorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
