import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {getFilteredObject, UnsubscribeDirective} from '@shared';
import {SKILL_CATEGORY_ID} from '@shadowrun/app/5e/5e.enums';
import {Character, CharacterKnowledge, CharacterSkill, SKILL_CATEGORIES, SkillCategory, SPECIALIZATIONS_MAX} from '@shadowrun/app/5e';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-knowledge',
  templateUrl: './create-pc-knowledge.component.html',
  styleUrls: ['./create-pc-knowledge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcKnowledgeComponent),
      multi: true
    }
  ]
})
export class CreatePcKnowledgeComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set initial(value: Character) { this.character$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly categories: SkillCategory[] = SKILL_CATEGORIES;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  private readonly character$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly knowledge$ = this.character$.pipe(
    tap(res => {
      this.setInitialValue(res);
    })
  );
  onChange = (_: any) => {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.knowledge$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        const allowed: string[] = ['id', 'category', 'name', 'rating', 'specializations'];
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

  getSpecializations(control: AbstractControl): string[] {
    return control.value ?? [];
  }

  onAddSpecialization(event: MatChipInputEvent, control: AbstractControl): void {
    const value: string = (event.value ?? '').trim();
    const specializations: string[] = control.value ?? [];

    if (value && specializations.length < SPECIALIZATIONS_MAX) {
      control.setValue([...specializations, value]);
    }

    event.input.value = '';
  }

  onRemoveSpecialization(specialization: string, control: AbstractControl): void {
    control.setValue((control.value ?? []).filter(i => i !== specialization));
  }

  isDeletable(i: AbstractControl): boolean {
    return !i.get('readonly').value;
  }

  isSpecializationDisabled(control: AbstractControl, specialization: string): boolean {
    return (control.get('initialSpecializations').value ?? []).includes(specialization);
  }

  onAddKnowledgeClick(): void {
    this.form.push(new FormGroup({
      id: new FormControl(`knowledge:${Date.now()}`),
      name: new FormControl('', [Validators.required]),
      category: new FormControl(SKILL_CATEGORY_ID.ACADEMIC, [Validators.required]),
      min: new FormControl(1),
      max: new FormControl(6),
      rating: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(6)]),
      specializations: new FormControl(null),
      initialSpecializations: new FormControl(null),
      readonly: new FormControl(false)
    }));
  }

  onRemoveKnowledgeClick(id: string): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }

  setInitialValue(character: Character): void {
    this.form.clear();
    if (!!character) {
      const knowledge: CharacterKnowledge[] = character?.knowledge ?? [];
      knowledge.forEach(i => {
        const group: FormGroup = new FormGroup({
          id: new FormControl(i.id),
          name: new FormControl(i.name, [Validators.required]),
          category: new FormControl(i.category, [Validators.required]),
          min: new FormControl(i.rating),
          max: new FormControl(6),
          rating: new FormControl(i.rating, [Validators.required]),
          specializations: new FormControl(i.specializations),
          initialSpecializations: new FormControl(i.specializations),
          readonly: new FormControl(true)
        });
        this.form.push(group);
        group.disable({ emitEvent: false });
        group.get('rating').enable();
      });
    } else {
      const readonly = true;
      const group = new FormGroup({
        id: new FormControl(`knowledge:${Date.now()}`),
        name: new FormControl('', [Validators.required]),
        category: new FormControl(SKILL_CATEGORY_ID.LANGUAGE, [Validators.required]),
        min: new FormControl(6),
        max: new FormControl(6),
        rating: new FormControl(6, [Validators.required, Validators.min(6), Validators.max(6)]),
        specializations: new FormControl(null),
        initialSpecializations: new FormControl(null),
        readonly: new FormControl(readonly)
      });
      this.form.push(group);
      group.get('category').disable();
      group.get('rating').disable();
    }
  }
}
