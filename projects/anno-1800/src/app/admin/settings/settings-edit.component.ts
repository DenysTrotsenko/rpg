import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getId, StorageService } from '@shared';
import { Setting } from '@grim-and-perilous/models/setting';
import {
  AlchemicalArt,
  Archetype,
  Profession, ProfessionId,
  Quality,
  QualityId,
  Quirk, QuirkId,
  Skill, SkillId,
  Spell,
  Talent, TalentId, ThreatId,
  Trait, TraitId,
  Weapon,
  WeaponId
} from '@grim-and-perilous/models/common';
import { map, shareReplay } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { Threat } from '@grim-and-perilous/models/threat';

@Component({
  templateUrl: './settings-edit.component.html',
  styleUrls: ['./settings-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    alchemical_arts: new FormControl([], [Validators.required]),
    archetypes: new FormControl([], [Validators.required]),
    professions: new FormControl([], [Validators.required]),
    qualities: new FormControl([], [Validators.required]),
    quirks: new FormControl([], [Validators.required]),
    skills: new FormControl([], [Validators.required]),
    spells: new FormControl([], [Validators.required]),
    talents: new FormControl([], [Validators.required]),
    threats: new FormControl([], [Validators.required]),
    traits: new FormControl([], [Validators.required]),
    weapons: new FormControl([], [Validators.required]),
  });

  readonly alchemicalArts$ = this.storage.download<AlchemicalArt[]>('/data/alchemical-arts.json').pipe(
    // tap(res => this.form.get('alchemical_arts').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly archetypes$ = this.storage.download<Archetype[]>('/data/archetypes.json').pipe(
    // tap(res => this.form.get('archetypes').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly professions$ = this.storage.download<Profession[]>('/data/professions.json').pipe(
    // tap(res => this.form.get('professions').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly qualities$ = this.storage.download<Quality[]>('/data/qualities.json').pipe(
    // tap(res => this.form.get('qualities').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly quirks$ = this.storage.download<Quirk[]>('/data/quirks.json').pipe(
    // tap(res => this.form.get('quirks').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly skills$ = this.storage.download<Skill[]>('/data/skills.json').pipe(
    // tap(res => this.form.get('skills').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly spells$ = this.storage.download<Spell[]>('/data/spells.json').pipe(
    // tap(res => this.form.get('spells').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly talents$ = this.storage.download<Talent[]>('/data/talents.json').pipe(
    // tap(res => this.form.get('talents').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly threats$ = this.storage.download<Threat[]>('/data/threats.json').pipe(
    // tap(res => this.form.get('threats').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly traits$ = this.storage.download<Trait[]>('/data/traits.json').pipe(
    // tap(res => this.form.get('traits').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly weapons$ = this.storage.download<Weapon[]>('/data/weapons.json').pipe(
    // tap(res => this.form.get('weapons').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly form$ = this.form.valueChanges;
  readonly warnings$: Observable<string[]> = combineLatest([
    this.form$,
    this.professions$,
    this.qualities$,
    this.quirks$,
    this.talents$,
    this.traits$,
    this.weapons$
  ]).pipe(
    map(res => this.getSettingValidation(...res))
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Setting,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    if (!!this.data) {
      this.form.patchValue({
        id: this.data.id ?? getId(),
        name: this.data.name ?? '',
        description: this.data.description ?? '',
        alchemical_arts: this.data.alchemical_arts ?? [],
        archetypes: this.data.archetypes ?? [],
        qualities: this.data.qualities ?? [],
        quirks: this.data.quirks ?? [],
        professions: this.data.professions ?? [],
        skills: this.data.skills ?? [],
        spells: this.data.spells ?? [],
        talents: this.data.talents ?? [],
        threats: this.data.threats ?? [],
        traits: this.data.traits ?? [],
        weapons: this.data.weapons ?? []
      } as Setting, { emitEvent: true });
    }
  }

  trackById(_, item): number {
    return item.id;
  }

  getSettingValidation(
    form,
    professions: Profession[],
    qualities: Quality[],
    quirks: Quirk[],
    talents: Talent[],
    traits: Trait[],
    weapons: Weapon[]
  ): string[] {
    const selected = {
      qualities: form.qualities as QualityId[],
      quirks: form.quirks as QuirkId[],
      professions: form.professions as ProfessionId[],
      skills: form.skills as SkillId[],
      talents: form.talents as TalentId[],
      threats: form.threats as ThreatId[],
      traits: form.traits as TraitId[],
      weapons: form.weapons as WeaponId[]
    };
    const allSelectedProfessionsTraitIds: TraitId[] = [...new Set(
      professions
        .filter(profession => selected.professions.includes(profession.id))
        .reduce((acc, profession) => {
          return [...acc, ...profession.traits];
        }, [])
    )];
    const allSelectedProfessionsQuirkIds: QuirkId[] = [...new Set(
      professions
        .filter(profession => selected.professions.includes(profession.id))
        .reduce((acc, profession) => {
          return [...acc, ...profession.quirks];
        }, [])
    )];
    // const allSelectedProfessionsSkillIds: QuirkId[] = [...new Set(
    //   professions
    //     .filter(profession => selected.professions.includes(profession.id))
    //     .reduce((acc, profession) => {
    //       return [...acc, ...profession.quirks];
    //     }, [])
    // )];
    // const allSelectedProfessionsTalentIds: QuirkId[] = [...new Set(
    //   professions
    //     .filter(profession => selected.professions.includes(profession.id))
    //     .reduce((acc, profession) => {
    //       return [...acc, ...profession.quirks];
    //     }, [])
    // )];
    const allSelectedWeaponsQualityIds: QualityId[] = [...new Set(
      weapons
        .filter(weapon => selected.weapons.includes(weapon.id))
        .reduce((acc, weapon) => {
          return [...acc, ...weapon.qualities];
        }, [])
    )];
    const allSelectedWeaponsSkillIds: SkillId[] = [...new Set(
      weapons
        .filter(weapon => selected.weapons.includes(weapon.id))
        .reduce((acc, weapon) => {
          return [...acc, ...weapon.qualities];
        }, [])
    )];

    const isProfessionsTraitsValid = allSelectedProfessionsTraitIds.every(i => selected.traits.includes(i));
    const isProfessionsQuirksValid = allSelectedProfessionsQuirkIds.every(i => selected.quirks.includes(i));
    const isWeaponsQualitiesValid = allSelectedWeaponsQualityIds.every(i => selected.qualities.includes(i));
    const isWeaponsSkillsValid = allSelectedWeaponsSkillIds.every(i => selected.skills.includes(i));

    return [
      isProfessionsTraitsValid ? null : 'Professions have traits that are not selected.',
      isProfessionsQuirksValid ? null : 'Professions have quirks that are not selected.',
      isWeaponsQualitiesValid ? null : 'Weapons have qualities that are not selected.',
      isWeaponsSkillsValid ? null : 'Weapons have skills that are not selected.',
    ].filter(i => !!i);
  }
}
