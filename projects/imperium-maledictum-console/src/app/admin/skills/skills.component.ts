import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Characteristic, Skill } from '@imperium-maledictum-1e/models/common';
import { getId16, Setting, SettingService, StorageService } from '@std';
import { Observable, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileName } from '@imperium-maledictum-1e/models/enums';

@Component({
    templateUrl: './skills.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SkillsComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    characteristic: new UntypedFormControl(null, [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
    system: new UntypedFormControl({})
  });

  readonly setting$: Observable<Setting | null> = this.setting.selected$;

  readonly characteristics$: Observable<Characteristic[]> = this.setting$.pipe(
    map(setting => `/${setting?.storage}/${FileName.CHARACTERISTICS}`),
    switchMap(path => this.storage.download<Characteristic[]>(path))
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
