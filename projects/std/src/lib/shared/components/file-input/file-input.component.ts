import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'file-input',
    templateUrl: './file-input.component.html',
    styleUrls: ['./file-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FileInputComponent),
            multi: true
        }
    ],
    standalone: false
})
export class FileInputComponent implements ControlValueAccessor {
  @Input() accept: string;
  @Input() color: 'primary' | 'accent' = 'primary';
  @Input() loading: boolean = false;
  @Input() multiple: boolean = false;
  @Input() label: string = 'Upload File';
  @Output() valueChanges: EventEmitter<FileList> = new EventEmitter();

  onFileChange(e: Event): void {
    const input: HTMLInputElement = e.target as HTMLInputElement;
    const files: FileList = input.files;

    if (!files.length) {
      this.propagateChange(null);
      this.valueChanges.emit(null);
    } else {
      this.propagateChange(files);
      this.valueChanges.emit(files);
    }

    input.value = null;
  }

  propagateChange = (_: any) => {};
  writeValue(value: string): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}
}
