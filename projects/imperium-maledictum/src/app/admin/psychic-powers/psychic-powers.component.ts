import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { PsychicDiscipline, PsychicPower } from '@imperium-maledictum-1e/models/common';
import { getId16, Setting, SettingService, StorageService } from '@shared';
import { Observable, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileName } from '@imperium-maledictum-1e/models/enums';

@Component({
  templateUrl: './psychic-powers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychicPowersComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    discipline: new UntypedFormControl(null, [Validators.required]),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
  });

  readonly setting$: Observable<Setting | null> = this.setting.selected$;

  readonly disciplines$: Observable<PsychicDiscipline[]> = this.setting$.pipe(
    map(setting => `/${setting?.storage}/${FileName.PSYCHIC_DISCIPLINES}`),
    switchMap(path => this.storage.download<PsychicDiscipline[]>(path))
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PsychicPower,
    private readonly setting: SettingService,
    private readonly storage: StorageService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }

  trackById(_, i): string { return i.id; }
}
