import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {getFilteredObject, UnsubscribeDirective} from '@shared';
import {
  Character,
  CharacterContact,
  CharacterKnowledge,
  CharacterSkill,
  CharacterSpell,
  CONTACT_TYPE_ID,
  SKILL_CATEGORY_ID
} from '@shadowrun/app/5e';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-contacts',
  templateUrl: './create-pc-contacts.component.html',
  styleUrls: ['./create-pc-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcContactsComponent),
      multi: true
    }
  ]
})
export class CreatePcContactsComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set initial(value: Character) { this.previous$.next(value); }
  readonly form: FormArray = new FormArray([]);
  private readonly previous$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly initial$: Observable<Character> = this.previous$.pipe(
    tap(res => this.setInitialValue(res))
  );
  onChange = (_: any) => {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.initial$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        const allowed: string[] = ['id', 'connection', 'loyalty', 'type', 'name', 'details'];
        const value: CharacterSkill[] = this.form.getRawValue().map(res => getFilteredObject(res, allowed));
        this.onChange(value);
      } else {
        this.onChange(null);
      }
    });
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  isDeletable(i: AbstractControl): boolean {
    return !i.get('readonly').value;
  }

  onAddContactClick(): void {
    this.form.push(new FormGroup({
      id: new FormControl(`contact:${Date.now()}`),
      connection: new FormControl(1, [Validators.min(1), Validators.max(6)]),
      loyalty: new FormControl(1, [Validators.min(1), Validators.max(6)]),
      type: new FormControl(CONTACT_TYPE_ID.CUSTOM, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      details: new FormControl(''),
      /* *** */
      readonly: new FormControl(false),
      minC: new FormControl(1),
      minL: new FormControl(1)
    }));
  }

  onRemoveContactClick(id: string): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }

  setInitialValue(character: Character): void {
    this.form.clear();
    const starting: CharacterContact[] = character?.contacts ?? [];
    starting.forEach(i => {
      const group: FormGroup = new FormGroup({
        id: new FormControl(i.id),
        connection: new FormControl(i.connection, [Validators.min(i.connection), Validators.max(6)]),
        loyalty: new FormControl(i.loyalty, [Validators.min(i.connection), Validators.max(6)]),
        type: new FormControl(i.type),
        name: new FormControl(i.name, [Validators.required]),
        details: new FormControl(i.details),
        /* *** */
        readonly: new FormControl(true),
        minC: new FormControl(i.connection),
        minL: new FormControl(i.loyalty)
      });
      this.form.push(group);
      group.get('name').disable();
      group.get('type').disable();
    });
  }
}
