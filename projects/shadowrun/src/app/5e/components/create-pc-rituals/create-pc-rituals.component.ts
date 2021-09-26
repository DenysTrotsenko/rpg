import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {getFilteredObject, UnsubscribeDirective} from '@shared';
import {
  Character,
  CharacterRitual,
  CharacterSkill,
  Ritual,
  RITUAL_ID,
  RITUALS,
} from '@shadowrun/app/5e';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-rituals',
  templateUrl: './create-pc-rituals.component.html',
  styleUrls: ['./create-pc-rituals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcRitualsComponent),
      multi: true
    }
  ]
})
export class CreatePcRitualsComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set previous(value: Character) { this.previous$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly rituals: Ritual[] = RITUALS;
  private readonly previous$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly initial$ = this.previous$.pipe(tap(res => this.setInitial(res)));
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
    const ritual: Ritual = RITUALS.find(s => !this.form.value.find(i => i.id === s.id));
    if (!ritual) { return; }
    const group: FormGroup = new FormGroup({
      id: new FormControl(ritual.id, [Validators.required]),
      /* *** */
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

  isOptionDisabled(id: RITUAL_ID): boolean {
    return !!this.form.value.find(i => i.id === id);
  }

  private setInitial(previous: Character): void {
    const starting: CharacterRitual[] = previous?.rituals ?? [];
    this.form.clear({ emitEvent: false });
    starting.forEach(ritual => {
      const group: FormGroup = new FormGroup({
        id: new FormControl(ritual.id),
        /* *** */
        readonly: new FormControl(true)
      });
      this.form.push(group);
      group.disable();
    });
    this.setChange();
  }

  private setChange(): void {
    const allowed: string[] = ['id'];
    const value: CharacterRitual[] = this.form.getRawValue().map(res => getFilteredObject(res, allowed));
    this.onChange(value);
  }
}
