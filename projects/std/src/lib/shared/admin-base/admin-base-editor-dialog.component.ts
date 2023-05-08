import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  templateUrl: './admin-base-editor-dialog.component.html',
  styleUrls: ['./admin-base-editor-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminBaseEditorDialogComponent {
  readonly theme = 'vs-dark';
  readonly model: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}'
  };
  readonly options = {
    contextmenu: true,
    minimap: {
      enabled: false
    }
  };

  onLoaded(): void {}

  onCodeChanged(value): void {
    console.log('CODE', value);
  }
}
