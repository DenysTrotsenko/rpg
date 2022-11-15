import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getId, StorageService } from '@shared';
import { Setting } from '@grim-and-perilous/models/setting';
import { Quality, Quirk, Skill, Talent, Trait } from '@grim-and-perilous/models/common';
import { shareReplay, tap } from 'rxjs/operators';

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

  readonly alchemicalArts$ = this.storage.download<Quality[]>('/data/alchemical-arts.json').pipe(
    tap(res => this.form.get('alchemical_arts').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly archetypes$ = this.storage.download<Quality[]>('/data/archetypes.json').pipe(
    tap(res => this.form.get('archetypes').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly professions$ = this.storage.download<Trait[]>('/data/professions.json').pipe(
    tap(res => this.form.get('professions').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly qualities$ = this.storage.download<Quality[]>('/data/qualities.json').pipe(
    tap(res => this.form.get('qualities').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly quirks$ = this.storage.download<Quirk[]>('/data/quirks.json').pipe(
    tap(res => this.form.get('quirks').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly skills$ = this.storage.download<Skill[]>('/data/skills.json').pipe(
    tap(res => this.form.get('skills').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly spells$ = this.storage.download<Skill[]>('/data/spells.json').pipe(
    tap(res => this.form.get('spells').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly talents$ = this.storage.download<Talent[]>('/data/talents.json').pipe(
    tap(res => this.form.get('talents').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly threats$ = this.storage.download<Talent[]>('/data/threats.json').pipe(
    tap(res => this.form.get('threats').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly traits$ = this.storage.download<Trait[]>('/data/traits.json').pipe(
    tap(res => this.form.get('traits').patchValue(res.map(i => i.id))),
    shareReplay(1)
  );
  readonly weapons$ = this.storage.download<Trait[]>('/data/weapons.json').pipe(
    tap(res => this.form.get('weapons').patchValue(res.map(i => i.id))),
    shareReplay(1)
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
      } as Setting);
    }
  }

  trackById(_, item): number {
    return item.id;
  }
}
