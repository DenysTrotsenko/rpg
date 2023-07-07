import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { combineLatest, Observable, switchMap } from 'rxjs';
import { filter, map, shareReplay, startWith, take, tap } from 'rxjs/operators';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import {
  BestiaryFaction, BestiaryRole, BestiaryTrait, BestiaryType,
  Characteristic, Npc, Size, Skill, SkillId, Specialisation, SpecialisationId
} from '@imperium-maledictum-1e/models/common';
import { DialogService, getId16, HasBaseProperties } from '@shared';
import { DataService } from '../../common/data.service';
import { AddSpecialisationDialogComponent } from './add-specialisation-dialog.component';
import { AddSkillDialogComponent } from './add-skill-dialog.component';

@Component({
  templateUrl: './bestiary.component.html',
  styleUrls: ['./bestiary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BestiaryComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    size: new UntypedFormControl(null, [Validators.required]),
    type: new UntypedFormControl(null, [Validators.required]),
    faction: new UntypedFormControl(null, [Validators.required]),
    role: new UntypedFormControl(null, [Validators.required]),
    characteristics: new UntypedFormArray([]),
    skills: new UntypedFormArray([]),
    specialisations: new UntypedFormArray([]),
    traits: new UntypedFormControl(null, [Validators.required]),
    items: new UntypedFormControl(null, [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl(''),
    }),
  });

  readonly characteristics$: Observable<Characteristic[]> = this.data.characteristics$.pipe(
    map(characteristics => characteristics?.sort((a, b) => a.order - b.order)),
    tap(characteristics => {
      const group = this.form.get('characteristics') as UntypedFormArray;
      characteristics.forEach(i => group.push(new UntypedFormGroup({
        id: new UntypedFormControl(i.id),
        value: new UntypedFormControl(10)
      })));
    }),
    shareReplay(1)
  );

  readonly factions$: Observable<BestiaryFaction[]> = this.data.bestiaryFactions$.pipe(
    tap(items => this.setToDefault(this.form.get('faction'), items))
  );

  readonly roles$: Observable<BestiaryRole[]> = this.data.bestiaryRoles$.pipe(
    tap(items => this.setToDefault(this.form.get('role'), items))
  );

  readonly sizes$: Observable<Size[]> = this.data.sizes$.pipe(
    tap(items => this.setToDefault(this.form.get('size'), items))
  );

  readonly skills$: Observable<Skill[]> = this.data.skills$;

  readonly specialisations$: Observable<Specialisation[]> = this.data.specialisations$;

  readonly traits$: Observable<BestiaryTrait[]> = this.data.bestiaryTraits$;

  readonly types$: Observable<BestiaryType[]> = this.data.bestiaryTypes$.pipe(
    tap(items => this.setToDefault(this.form.get('type'), items))
  );

  readonly characteristicMax$: Observable<number> = combineLatest([
    this.roles$,
    this.form.get('role').valueChanges.pipe(startWith(null))
  ]).pipe(
    map(([roles, id]) => roles.find(i => i.id === id)?.characteristic_maximum ?? 99)
  );

  readonly selectedSkills$: Observable<Skill[]> = this.form.get('skills').valueChanges.pipe(
    startWith([]),
    map(skills => skills.map(i => i.id).map(i => this.data.get(i)))
  );

  readonly selectedSpecialisations$: Observable<Specialisation[]> = this.form.get('specialisations').valueChanges.pipe(
    startWith([]),
    map(specialisations => specialisations.map(i => i.id).map(i => this.data.get(i)))
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public npc: Npc,
    private readonly data: DataService,
    private readonly dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.npc ? this.npc : { id: getId16() });
  }

  onAddSkillClick(): void {
    const group = this.form.get('skills') as UntypedFormArray;
    const selected = group.value?.map(i => i.id);

    this.skills$
      .pipe(
        take(1),
        switchMap(skills => this.dialog.open(AddSkillDialogComponent, {
          data: skills.filter(i => !selected.includes(i.id))
        }).afterClosed()),
        filter(res => !!res),
        tap(id => group.push(new UntypedFormGroup({
          id: new UntypedFormControl(id),
          value: new UntypedFormControl(0)
        })))
      )
      .subscribe();
  }

  onAddSpecialisationClick(): void {
    const group = this.form.get('specialisations') as UntypedFormArray;
    const selected = group.value?.map(i => i.id);

    this.specialisations$
      .pipe(
        take(1),
        switchMap(specialisations => this.dialog.open(AddSpecialisationDialogComponent, {
          data: specialisations.filter(i => !(selected.includes(i.id) && !i.multiple))
        }).afterClosed()),
        filter(res => !!res),
        tap(id => group.push(new UntypedFormGroup({
          id: new UntypedFormControl(id),
          value: new UntypedFormControl(0)
        })))
      )
      .subscribe();
  }

  onTest(): void {
    console.log(this.form.getRawValue());
  }

  private setToDefault<T extends HasBaseProperties<unknown>>(control: AbstractControl, items: T[]): void {
    control.setValue(items.find(i => i.default)?.id);
  }

  trackById(_, i): string { return i.id; }
}
