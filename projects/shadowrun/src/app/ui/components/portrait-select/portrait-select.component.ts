import {Component, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
import {DialogService} from '@shared';
import {PortraitSelectDialogComponent} from './portrait-select-dialog.component';
import {PORTRAITS} from '@shadowrun/app/ui/ui.models';

@Component({
  /* tslint:disable-next-line */
  selector: 'portrait-select',
  templateUrl: './portrait-select.component.html',
  styleUrls: ['./portrait-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PortraitSelectComponent),
      multi: true
    }
  ]
})
export class PortraitSelectComponent implements ControlValueAccessor {
  readonly portraits = PORTRAITS;
  value: number = 0;
  src$: BehaviorSubject<string> = new BehaviorSubject(this.getPortrait());
  touched: boolean = false;
  disabled: boolean = false;
  onChange = (_: any) => {};
  onTouched = () => {};

  constructor(private dialog: DialogService) {}

  writeValue(value: string): void {
    this.value = PORTRAITS.indexOf(value) ?? 0;
    this.src$.next(this.getPortrait());
  }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  isDisabled(): boolean { return this.disabled; }

  getPortrait(): string {
    return 'assets/images/portraits/' + this.portraits[this.value];
  }

  onBackClick(): void {
    this.markAsTouched();
    this.value = this.value - 1 < 0 ? PORTRAITS.length - 1 : this.value - 1;
    this.onChange(this.portraits[this.value]);
    this.src$.next(this.getPortrait());
  }

  onForwardClick(): void {
    this.markAsTouched();
    this.value = this.value + 1 > PORTRAITS.length - 1 ? 0 : this.value + 1;
    this.onChange(this.portraits[this.value]);
    this.src$.next(this.getPortrait());
  }

  onListClick(): void {
    this.markAsTouched();
    this.dialog
      .open(PortraitSelectDialogComponent, { data: this.value })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => {
          this.value = res;
          this.onChange(this.portraits[this.value]);
          this.src$.next(this.getPortrait());
        })
      )
      .subscribe();
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean): void { this.disabled = disabled; }
}
