import {Component, OnInit, ChangeDetectionStrategy, Input, forwardRef} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {getFilteredObject, UnsubscribeDirective} from '@shared';
import {AWAKENING_ID, Character, CharacterEcho, Echo, ECHO_ID} from '@shadowrun/app/5e';
import {ECHOES} from '@shadowrun/app/5e/5e.submersion';

@Component({
  selector: 's5e-create-pc-submersion',
  templateUrl: './create-pc-submersion.component.html',
  styleUrls: ['./create-pc-submersion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcSubmersionComponent),
      multi: true
    }
  ]
})
export class CreatePcSubmersionComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set previous(value: Character) { this.previous$.next(value); }
  @Input() set awakening(value: AWAKENING_ID) { this.awakening$.next(value); }
  readonly form: FormArray = new FormArray([]);
  private readonly previous$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly awakening$: BehaviorSubject<AWAKENING_ID> = new BehaviorSubject(null);
  private readonly initial$ = this.previous$.pipe(tap(res => this.setInitial(res)));
  readonly echoes$: Observable<Echo[]> = of(ECHOES);
  onChange = (_: any) => {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.initial$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.setChange();
      } else {
        this.onChange(null);
      }
    });
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  onAddClick(): void {
    const echo: Echo = ECHOES.find(s => !this.form.value.find(i => i.id === s.id && !s.specialty));
    if (!echo) { return; }
    const group: FormGroup = new FormGroup({
      id: new FormControl(echo.id),
      rating: new FormControl(1),
      specialty: new FormControl(null),
      readonly: new FormControl(false),
      min: new FormControl(1),
      max: new FormControl(true),
    });
    this.form.push(group);
  }

  onRemoveClick(id: string): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }

  isDeletable(i: AbstractControl): boolean {
    return !i.get('readonly').value;
  }

  isOptionDisabled(id: ECHO_ID): boolean {
    return !!this.form.value.find(i => i.id === id) && !ECHOES.find(i => i.id === id).specialty;
  }

  private setInitial(previous: Character): void {
    const starting: CharacterEcho[] = previous?.echoes ?? [];
    const echo: Echo = ECHOES.find(s => !this.form.value.find(i => i.id === s.id && !s.specialty));
    this.form.clear({ emitEvent: false });
    starting.forEach(i => {
      const group: FormGroup = new FormGroup({
        id: new FormControl({ value: i.id, disabled: true }),
        rating: new FormControl(i.rating),
        specialty: new FormControl({ value: i.specialty, disabled: true }),
        /* *** */
        readonly: new FormControl(true),
        min: new FormControl(i.rating),
        max: new FormControl(echo.max),
      });
      this.form.push(group);
    });
    this.setChange();
  }

  private setChange(): void {
    const allowed: string[] = ['id', 'rating', 'specialty'];
    const value: CharacterEcho[] = this.form.getRawValue().map(res => getFilteredObject(res, allowed));
    this.onChange(value);
  }
}
