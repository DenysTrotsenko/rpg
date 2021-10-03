import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {getFilteredObject, UnsubscribeDirective} from '@shared';
import {AWAKENING_ID, Character, CharacterMetamagic, METAMAGIC, Metamagic, METAMAGIC_ID} from '@shadowrun/app/5e';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 's5e-create-pc-initiation',
  templateUrl: './create-pc-initiation.component.html',
  styleUrls: ['./create-pc-initiation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcInitiationComponent),
      multi: true
    }
  ]
})
export class CreatePcInitiationComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set previous(value: Character) { this.previous$.next(value); }
  @Input() set awakening(value: AWAKENING_ID) { this.awakening$.next(value); }
  readonly form: FormArray = new FormArray([]);
  private readonly previous$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly awakening$: BehaviorSubject<AWAKENING_ID> = new BehaviorSubject(null);
  private readonly initial$ = this.previous$.pipe(tap(res => this.setInitial(res)));
  readonly metamagic$: Observable<Metamagic[]> = this.awakening$.pipe(map(awakening => METAMAGIC.filter(i => {
    return (i.type === 'adept' && this.isAdept(awakening)) || (i.type === 'all' && this.isMagician(awakening));
  })));
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
    const metamagic: Metamagic = METAMAGIC.find(s => !this.form.value.find(i => i.id === s.id && !s.multiple));
    if (!metamagic) { return; }
    const group: FormGroup = new FormGroup({
      id: new FormControl(metamagic.id),
      readonly: new FormControl(false)
    });
    this.form.push(group);
  }

  onRemoveClick(id: string): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }

  isDeletable(i: AbstractControl): boolean {
    return !i.get('readonly').value;
  }

  isOptionDisabled(id: METAMAGIC_ID): boolean {
    return !!this.form.value.find(i => i.id === id) && !METAMAGIC.find(i => i.id === id).multiple;
  }

  private isAdept(awakening: AWAKENING_ID): boolean {
    return [
      AWAKENING_ID.ADEPT,
      AWAKENING_ID.MYSTIC_ADEPT
    ].includes(awakening);
  }

  private isMagician(awakening: AWAKENING_ID): boolean {
    return [
      AWAKENING_ID.MYSTIC_ADEPT,
      AWAKENING_ID.MAGICIAN,
      AWAKENING_ID.ASPECTED_MAGICIAN_ALCHEMIST,
      AWAKENING_ID.ASPECTED_MAGICIAN_SUMMONER,
      AWAKENING_ID.ASPECTED_MAGICIAN_SPELLCASTER
    ].includes(awakening);
  }

  private setInitial(previous: Character): void {
    const starting: CharacterMetamagic[] = previous?.metamagic ?? [];
    this.form.clear({ emitEvent: false });
    starting.forEach(metamagic => {
      const group: FormGroup = new FormGroup({
        id: new FormControl({ value: metamagic.id, disabled: true }),
        readonly: new FormControl(true)
      });
      this.form.push(group);
    });
    this.setChange();
  }

  private setChange(): void {
    const allowed: string[] = ['id'];
    const value: CharacterMetamagic[] = this.form.getRawValue().map(res => getFilteredObject(res, allowed));
    this.onChange(value);
  }
}
