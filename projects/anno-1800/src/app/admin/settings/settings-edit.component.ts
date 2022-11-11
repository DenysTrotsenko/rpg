import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getId, StorageService } from '@shared';
import { Setting } from '@grim-and-perilous/models/setting';
import { Quality, Quirk, Skill, Talent, Trait } from '@grim-and-perilous/models/common';

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
    qualities: new FormControl([], [Validators.required]),
    quirks: new FormControl([], [Validators.required]),
    skills: new FormControl([], [Validators.required]),
    talents: new FormControl([], [Validators.required]),
    traits: new FormControl([], [Validators.required]),
    professions: new FormControl([], [Validators.required]),
  });

  readonly qualities$ = this.storage.download<Quality[]>('/data/qualities.json');
  readonly quirks$ = this.storage.download<Quirk[]>('/data/quirks.json');
  readonly skills$ = this.storage.download<Skill[]>('/data/skills.json');
  readonly talents$ = this.storage.download<Talent[]>('/data/talents.json');
  readonly traits$ = this.storage.download<Trait[]>('/data/traits.json');
  readonly professions$ = this.storage.download<Trait[]>('/data/professions.json');

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
        qualities: this.data.qualities ?? [],
        quirks: this.data.quirks ?? [],
        skills: this.data.skills ?? [],
        talents: this.data.talents ?? [],
        traits: this.data.traits ?? []
      });
    }
  }

  trackById(_, item): number {
    return item.id;
  }
}
