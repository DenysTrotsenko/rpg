import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { combineLatest, Observable, switchMap, take } from 'rxjs';
import { map, shareReplay, startWith, tap } from 'rxjs/operators';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { BestiaryRole, BestiaryTrait, Characteristic, Npc, Size } from '@imperium-maledictum-1e/models/common';
import { getId16, Setting, SettingService, StorageService } from '@shared';
import { FileName } from '@imperium-maledictum-1e/models/enums';

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
    role: new UntypedFormControl(null, [Validators.required]),
    characteristics: new UntypedFormGroup({}),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
    }),
  });

  readonly setting$: Observable<Setting | null> = this.setting.selected$;

  readonly characteristics$: Observable<Characteristic[]> = this.setting$.pipe(
    take(1),
    map(setting => `/${setting?.storage}/${FileName.CHARACTERISTICS}`),
    switchMap(path => this.storage.download<Characteristic[]>(path)),
    map(characteristics => characteristics?.sort((a, b) => a.order - b.order)),
    tap(characteristics => {
      const group = this.form.get('characteristics') as UntypedFormGroup;
      characteristics.forEach(i => group.addControl(i.id, new UntypedFormControl(10, [
        Validators.required, Validators.min(10),
      ])));
    }),
    shareReplay(1)
  );

  readonly roles$: Observable<BestiaryRole[]> = this.setting$.pipe(
    map(setting => `/${setting?.storage}/${FileName.BESTIARY_ROLES}`),
    switchMap(path => this.storage.download<BestiaryRole[]>(path)),
    shareReplay(1)
  );

  readonly sizes$: Observable<Size[]> = this.setting$.pipe(
    map(setting => `/${setting?.storage}/${FileName.SIZES}`),
    switchMap(path => this.storage.download<Size[]>(path)),
    shareReplay(1)
  );

  readonly traits$: Observable<BestiaryTrait[]> = this.setting$.pipe(
    map(setting => `/${setting?.storage}/${FileName.BESTIARY_TRAITS}`),
    switchMap(path => this.storage.download<BestiaryTrait[]>(path)),
    shareReplay(1)
  );

  readonly characteristicMax$: Observable<number> = combineLatest([
    this.roles$,
    this.form.get('role').valueChanges.pipe(startWith(null))
  ]).pipe(
    map(([roles, id]) => roles.find(i => i.id === id)?.characteristic_maximum ?? 99)
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Npc,
    private readonly setting: SettingService,
    private readonly storage: StorageService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.data ? this.data : { id: getId16() });
  }

  onTest(): void {
    console.log(this.form.getRawValue());
  }

  trackById(_, i): string { return i.id; }
}
