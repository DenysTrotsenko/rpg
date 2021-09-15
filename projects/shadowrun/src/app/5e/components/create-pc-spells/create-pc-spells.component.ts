import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {UnsubscribeDirective} from '@shared';
import {Character, CharacterSpell, Spell, SPELL_ID, SPELLS} from '@shadowrun/app/5e';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-spells',
  templateUrl: './create-pc-spells.component.html',
  styleUrls: ['./create-pc-spells.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcSpellsComponent),
      multi: true
    }
  ]
})
export class CreatePcSpellsComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set initial(value: Character) { this.character$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly spells: Spell[] = SPELLS;
  private readonly character$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly initial$ = this.character$.pipe(tap(res => this.setInitial(res)));
  onChange = (_: any) => {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.initial$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      this.form.valid ? this.onChange(this.form.getRawValue()) : this.onChange(null);
    });
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  onAddClick(): void {
    const spell: Spell = SPELLS.find(s => !this.form.value.find(i => i.id === s.id && !s.specialty));
    const group: FormGroup = new FormGroup({
      id: new FormControl(spell.id, [Validators.required]),
      specialty: new FormControl(null, !!spell.specialty ? [Validators.required] : []),
      readonly: new FormControl(false, [Validators.required])
    });
    this.form.push(group);
  }

  onRemoveClick(id: string): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }

  isDeletable(i: AbstractControl): boolean {
    return !i.get('readonly').value;
  }

  isOptionDisabled(id: SPELL_ID): boolean {
    return !!this.form.value.find(i => i.id === id) && !SPELLS.find(i => i.id === id).specialty;
  }

  private setInitial(character: Character): void {
    const starting: CharacterSpell[] = character?.spells ?? [];
    starting.forEach(spell => {
      const group: FormGroup = new FormGroup({
        id: new FormControl(spell.id),
        specialty: new FormControl(spell.specialty),
        readonly: new FormControl(true)
      });
      this.form.push(group);
      group.disable();
    });
  }
}
