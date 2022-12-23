import { Component, ChangeDetectionStrategy, forwardRef, OnInit, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, ValidationErrors, Validator,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

function validateKey(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) { return null; }

    const isOnlyUppercaseLettersNumbersAndUnderscore = /^[A-Z0-9_]+$/.test(control.value);
    const isValidKey = isOnlyUppercaseLettersNumbersAndUnderscore;

    return !isValidKey ? { validKey: true } : null;
  };
}

@Component({
  selector: 'app-key-value-array',
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
  ]
})
export class KeyValueArrayComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
  readonly form: FormGroup = new FormGroup({
    entries: new FormArray([])
  });
  readonly unsubscribe$: Subject<void> = new Subject();
  private onChange: (value: string) => void;
  private onTouched: () => void;
  private onValidatorChange: () => void;

  get entries(): FormArray {
    return this.form.get('entries') as FormArray;
  }

  get errorState(): boolean {
    return !this.form.valid && !!this.form.touched;
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(form => {
          if (!this.onChange) { return; }
          const ads = form.entries.reduce((acc, cur) => {
            return {
              ...acc,
              [cur.key]: cur.value
            };
          }, {});
          this.onChange(ads);
        })
      )
      .subscribe();

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getFormGroup(i: number): FormGroup {
    return this.entries.controls[i] as FormGroup;
  }

  onAddClick(): void {
    this.add('', '');
  }

  onRemoveClick(index: number): void {
    this.entries.removeAt(index);
  }

  registerOnChange(fn: () => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  registerOnValidatorChange(fn: () => void): void { this.onValidatorChange = fn; }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.form.invalid ? { internal: true } : null;
  }

  writeValue(obj: Record<string, any>): void {
    if (!obj) { return; }
    Object.entries(obj).forEach(entry => this.add(entry[0], entry[1]));
  }

  private add(key: string, value: any): void {
    this.entries.push(new FormGroup({
      key: new FormControl(key, [Validators.required, validateKey()]),
      value: new FormControl(value, [Validators.required])
    }));
  }
}