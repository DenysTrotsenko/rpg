import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  templateUrl: './json-editor-dialog.component.html',
  styleUrls: ['./json-editor-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonEditorDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);
  readonly error$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly value$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.data);
}
