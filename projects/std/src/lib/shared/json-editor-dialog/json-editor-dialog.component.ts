import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MaterialModule } from '../../material/material.module';
import { CodeEditorModule } from '../code-editor/code-editor.module';

@Component({
  standalone: true,
  templateUrl: './json-editor-dialog.component.html',
  styleUrls: ['./json-editor-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeEditorModule, MaterialModule, CommonModule]
})
export class JsonEditorDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);
  readonly error$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly value$: BehaviorSubject<any> = new BehaviorSubject<any>(this.data);
}
