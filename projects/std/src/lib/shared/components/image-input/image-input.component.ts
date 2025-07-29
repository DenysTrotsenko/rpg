import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, inject, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogService } from '@std';
import { ImageInputDialogComponent, ImageInputDialogData } from './image-input-dialog.component';
import { filter, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'image-input',
    templateUrl: './image-input.component.html',
    styleUrls: ['./image-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ImageInputComponent),
            multi: true
        }
    ],
    standalone: false
})
export class ImageInputComponent implements ControlValueAccessor {
  readonly dialog = inject(DialogService);

  @Input() width: number = 100;
  @Input() height: number = 100;
  @Input() path: string;
  @Output() valueChanges: EventEmitter<FileList> = new EventEmitter();

  readonly src$: BehaviorSubject<string> = new BehaviorSubject(null);

  onClick(selected: string = null): void {
    if (!this.path) { return; }

    const data: ImageInputDialogData = {
      selected,
      path: this.path
    };
    this.dialog.open(ImageInputDialogComponent, { data }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(src => {
          this.src$.next(src);
          this.propagateChange(src);
          this.valueChanges.emit(src);
        })
      )
      .subscribe();
  }

  propagateChange = (_: any) => {};
  writeValue(value: string): void { this.src$.next(value); }
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}
}
