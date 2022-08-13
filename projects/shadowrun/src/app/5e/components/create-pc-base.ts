import {Directive, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {getFilteredObject, UnsubscribeDirective} from '@shared';
import {Character} from '@shadowrun-5e';

export interface CreatePc {
  allowed: string[];
  form: FormArray | FormGroup;
  isAddDisabled(form: unknown): boolean;
  isOptionDisabled(id: unknown): boolean;
  onAddClick(): void;
  onRemoveClick(id: unknown): void;
  onSetInitial(i: Character): void;
}

@Directive()
export class CreatePcBase extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set previous(value: Character) { this.previous$.next(value); }
  protected readonly previous$: BehaviorSubject<Character> = new BehaviorSubject(null);
  protected readonly initial$ = this.previous$.pipe(tap(res => this.setInitial(res)));
  allowed: string[] = [];
  form: FormGroup | FormArray;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.initial$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.setChange(this.allowed);
      } else {
        this.onChange(null);
      }
    });
  }

  onChange = (_: any) => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  onSetInitial(character: Character): void {}

  protected setInitial(character: Character): void {
    this.onSetInitial(character);
    this.setChange(this.allowed);
  }

  protected setChange(allowed: string[]): void {
    this.onChange(this.form.getRawValue().map(res => getFilteredObject(res, allowed)));
  }
}
