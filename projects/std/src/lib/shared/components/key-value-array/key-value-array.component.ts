import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup, NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { DialogService } from '@std';

function validateKey(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) { return null; }

    const isOnlyUppercaseLettersNumbersAndUnderscore = /^[A-Z0-9_]+$/.test(control.value);
    const isValidKey = isOnlyUppercaseLettersNumbersAndUnderscore;

    return !isValidKey ? { validKey: true } : null;
  };
}

type ValueType = 'string' | 'number' | 'boolean';

@Component({
    selector: 'std-key-value-array',
    templateUrl: './key-value-array.component.html',
    styleUrls: ['./key-value-array.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => KeyValueArrayComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => KeyValueArrayComponent),
            multi: true
        },
    ],
    standalone: false
})
export class KeyValueArrayComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    entries: new UntypedFormArray([])
  });
  readonly unsubscribe$: Subject<void> = new Subject();
  private onChange: (value: string) => void;
  private onTouched: () => void;
  private onValidatorChange: () => void;

  get entries(): UntypedFormArray {
    return this.form.get('entries') as UntypedFormArray;
  }

  get errorState(): boolean {
    return !this.form.valid && !!this.form.touched;
  }

  constructor(private dialog: DialogService, private change: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(form => {
          if (!this.onChange) { return; }
          const entries = form.entries.reduce((acc, cur) => {
            return {
              ...acc,
              [cur.key]: cur.value
            };
          }, {});
          this.onChange(entries);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getFormGroup(i: number): UntypedFormGroup {
    return this.entries.controls[i] as UntypedFormGroup;
  }

  onAddClick(): void {
    this.add('', 'string', '');
  }

  onRemoveClick(index: number): void {
    this.dialog
      .confirm({
        data: {
          title: 'Delete Entry',
          description: `Are sure you want to delete this entry?`,
          ok: 'Delete',
          cancel: 'Cancel'
        }
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        tap(() => {
          this.entries.removeAt(index);
          this.change.detectChanges();
        })
      )
      .subscribe();
  }

  registerOnChange(fn: () => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  registerOnValidatorChange(fn: () => void): void { this.onValidatorChange = fn; }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.form.invalid ? { internal: true } : null;
  }

  writeValue(obj: Record<string, any>): void {
    if (!obj) { return; }
    Object.entries(obj).forEach(entry => this.add(entry[0], typeof entry[1] as ValueType, entry[1]));
  }

  onTypeChange(type: ValueType, group): void {
    const control = group.get('value');
    const value = control.value;
    switch (type) {
      case 'boolean':
        control.setValue(Boolean(value));
        break;
      case 'number':
        const num = Number(value);
        control.setValue(typeof num === 'number' ? num : 0);
        break;
      case 'string':
      default:
        control.setValue(String(value));
        break;
    }
  }

  private add(key: string, type: ValueType, value: any): void {
    this.entries.push(new UntypedFormGroup({
      key: new UntypedFormControl(key, [Validators.required, validateKey()]),
      type: new UntypedFormControl(type, [Validators.required]),
      value: new UntypedFormControl(value, [Validators.required])
    }));
  }
}
