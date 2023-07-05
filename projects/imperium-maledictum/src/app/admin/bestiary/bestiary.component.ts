import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, startWith, tap } from 'rxjs/operators';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import {
  BestiaryFaction,
  BestiaryRole,
  BestiaryTrait,
  BestiaryType,
  Characteristic,
  Npc,
  Size, Skill, Specialisation
} from '@imperium-maledictum-1e/models/common';
import { getId16, HasBaseProperties } from '@shared';
import { DataService } from '../../common/data.service';

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
    characteristics: new UntypedFormGroup({}),
    skills: new UntypedFormGroup({}),
    specialisations: new UntypedFormGroup({}),
    traits: new UntypedFormControl(null, [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
  });

  readonly characteristics$: Observable<Characteristic[]> = this.data.characteristics$.pipe(
    map(characteristics => characteristics?.sort((a, b) => a.order - b.order)),
    tap(characteristics => {
      const group = this.form.get('characteristics') as UntypedFormGroup;
      characteristics.forEach(i => group.addControl(i.id, new UntypedFormControl(10, [
        Validators.required, Validators.min(10),
      ])));
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

  readonly skills$: Observable<Skill[]> = this.data.skills$.pipe(
    // tap(items => this.setToDefault(this.form.get('size'), items))
  );

  readonly specialisations$: Observable<Specialisation[]> = this.data.specialisations$.pipe(
    // tap(items => this.setToDefault(this.form.get('size'), items))
  );

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public npc: Npc,
    private readonly data: DataService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.npc ? this.npc : { id: getId16() });
  }

  onTest(): void {
    console.log(this.form.getRawValue());
  }

  setToDefault<T extends HasBaseProperties<unknown>>(control: AbstractControl, items: T[]): void {
    control.setValue(items.find(i => i.default)?.id);
  }

  trackById(_, i): string { return i.id; }
}
