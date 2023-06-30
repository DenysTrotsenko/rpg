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
  ]
})
export class FileInputComponent implements ControlValueAccessor {
  @Input() accept: string;
  @Output() valueChanges: EventEmitter<File> = new EventEmitter();

  onFileChange(e: Event): void {
    const input: HTMLInputElement = e.target as HTMLInputElement;
    const files: FileList = input.files;

    if (!files.length) {
      this.propagateChange(null);
      this.valueChanges.emit(null);
    } else {
      const file: File = files[0];
      this.propagateChange(file);
      this.valueChanges.emit(file);
    }

    input.value = null;
  }

  propagateChange = (_: any) => {};
  writeValue(value: string): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}
}
