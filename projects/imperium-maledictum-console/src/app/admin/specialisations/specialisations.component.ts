import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Skill, SkillId, Specialisation } from '@imperium-maledictum-1e/models/common';
import { getId16, Setting, SettingService, StorageService } from '@std';
import { Observable, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    templateUrl: './specialisations.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SpecialisationsComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    restricted: new UntypedFormControl(null),
    skill: new UntypedFormControl(null),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
    system: new UntypedFormControl({})
  });

  readonly setting$: Observable<Setting | null> = this.setting.selected$;

  readonly skills$: Observable<Skill[]> = this.setting$.pipe(
    map(setting => `/${setting?.storage}/skills.json`),
    switchMap(path => this.storage.download<Skill[]>(path))
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Specialisation,
    private readonly setting: SettingService,
    private readonly storage: StorageService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }

  getSkillSelectTrigger(skills: Skill[], selected: SkillId): string {
    return skills?.find(i => i.id === selected)?.name || '';
  }

  trackById(_, i): string { return i.id; }
}
