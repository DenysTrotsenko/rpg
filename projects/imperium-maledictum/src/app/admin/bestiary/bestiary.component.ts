import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, startWith, tap } from 'rxjs/operators';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { BestiaryRole, BestiaryTrait, Characteristic, Npc, Size } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@shared';
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
    role: new UntypedFormControl(null, [Validators.required]),
    characteristics: new UntypedFormGroup({}),
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

  readonly roles$: Observable<BestiaryRole[]> = this.data.bestiaryRoles$;

  readonly sizes$: Observable<Size[]> = this.data.sizes$;

  readonly traits$: Observable<BestiaryTrait[]> = this.data.bestiaryTraits$;

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

  trackById(_, i): string { return i.id; }
}
