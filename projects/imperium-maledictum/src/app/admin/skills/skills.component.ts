import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Characteristic, Skill, Specialisation } from '@imperium-maledictum-1e/models/common';
import { getId16, Setting, StorageService } from '@shared';
import { Observable, ReplaySubject, share, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { SettingService } from '../../../../../std/src/lib/core/setting.service';

@Component({
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    characteristic: new UntypedFormControl(null),
    specialisations: new UntypedFormControl([]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
    system: new UntypedFormControl({})
  });

  readonly setting$: Observable<Setting | null> = this.setting.selected$.pipe(
    share({
      connector: () => new ReplaySubject(),
      resetOnComplete: true,
      resetOnError: true,
      resetOnRefCountZero: true
    })
  );

  readonly characteristics$: Observable<Characteristic[]> = this.setting$.pipe(
    map(setting => `/${setting.storage}/characteristics.json`),
    switchMap(path => this.storage.download<Characteristic[]>(path))
  );

  readonly specialisations$: Observable<Specialisation[]> = this.setting$.pipe(
    map(setting => `/${setting.storage}/specialisations.json`),
    switchMap(path => this.storage.download<Specialisation[]>(path))
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Skill,
    private readonly setting: SettingService,
    private readonly storage: StorageService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }

  trackById(_, i): string { return i.id; }
}
