import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Character, CharacterGear, Gear, GearType} from '@shadowrun/app/5e/5e.models';
import {GEAR_ID, GEAR_TYPE_ID} from '@shadowrun/app/5e/5e.enums';
import {getFilteredObject, UnsubscribeDirective} from '@shared';
import {GEAR, GEAR_TYPES} from '@shadowrun/app/5e/5e.gear';

@Component({
  selector: 's5e-create-pc-gear',
  templateUrl: './create-pc-gear.component.html',
  styleUrls: ['./create-pc-gear.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcGearComponent),
      multi: true
    }
  ]
})
export class CreatePcGearComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set previous(value: Character) { this.previous$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly items: Gear[] = GEAR;
  readonly types: GearType[] = GEAR_TYPES;
  private readonly previous$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly initial$ = this.previous$.pipe(tap(res => this.setInitial(res)));

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

  onChange = (_: any) => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  getItemsByType(type: GEAR_TYPE_ID): Gear[] {
    return GEAR.filter(i => i.type === type);
  }

  onAddClick(): void {
    const item: Gear = GEAR.find(s => !this.form.value.find(i => i.id === s.id));
    if (!item) { return; }
    const group: FormGroup = new FormGroup({
      id: new FormControl(item.id, [Validators.required]),
      rating: new FormControl(item.ratings[0], [Validators.required]),
      quantity: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(9999)]),
      /* *** */
      readonly: new FormControl(false),
      type: new FormControl(item.type),
      min: new FormControl(item.ratings[0]),
      max: new FormControl(item.ratings[item.ratings.length - 1]),
    });
    this.form.push(group);
  }

  onRemoveClick(index: number): void {
    this.form.removeAt(index);
  }

  private setInitial(previous: Character): void {
    const gear: CharacterGear[] = previous?.gear ?? [];
    this.form.clear({ emitEvent: false });
    gear.forEach(i => {
      const item: Gear = GEAR.find(g => g.id === i.id);
      this.form.push(new FormGroup({
        id: new FormControl({ value: i.id, disabled: true }, [Validators.required]),
        rating: new FormControl({ value: i.rating , disabled: true }, [Validators.required]),
        quantity: new FormControl(i.quantity, [Validators.required, Validators.min(1), Validators.max(9999)]),
        /* *** */
        readonly: new FormControl(true),
        type: new FormControl(item.type),
        min: new FormControl(i.rating),
        max: new FormControl(item.ratings[item.ratings.length - 1]),
      }));
    });
    this.setChange();
  }

  private setChange(): void {
    const allowed: string[] = ['id', 'rating', 'quantity'];
    const value: CharacterGear[] = this.form.getRawValue().map(res => getFilteredObject(res, allowed));
    this.onChange(value);
  }
}
