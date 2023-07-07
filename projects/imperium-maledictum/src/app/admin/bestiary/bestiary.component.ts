import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import {combineLatest, Observable, switchMap} from 'rxjs';
import {filter, map, shareReplay, startWith, take, tap} from 'rxjs/operators';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import {
  BestiaryFaction,
  BestiaryRole,
  BestiaryTrait,
  BestiaryType,
  Characteristic,
  Npc,
  Size, Skill, SkillId, Specialisation, SpecialisationId
} from '@imperium-maledictum-1e/models/common';
import { DialogService, getId16, HasBaseProperties } from '@shared';
import { DataService } from '../../common/data.service';
import { MatDialogRef } from '@angular/material/dialog';

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

  readonly skills$: Observable<Skill[]> = this.data.skills$;

  readonly specialisations$: Observable<Specialisation[]> = this.data.specialisations$;

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
    private readonly data: DataService,
    private readonly dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.npc ? this.npc : { id: getId16() });
  }

  onAddSkillClick(): void {
    const group = this.form.get('skills') as UntypedFormGroup;
    this.skills$
      .pipe(
        take(1),
        switchMap(skills => this.dialog.open(SkillDialogComponent, { data: skills }).afterClosed()),
        filter(res => !!res),
        tap(id => group.addControl(
          id,
          new UntypedFormControl(0, [
            Validators.required,
            Validators.min(0),
            Validators.max(20)
          ])
        ))
      )
      .subscribe();
  }

  onAddSpecialisationClick(): void {
    const group = this.form.get('specialisations') as UntypedFormGroup;
    this.specialisations$
      .pipe(
        take(1),
        switchMap(specialisations => this.dialog.open(SpecialisationDialogComponent, { data: specialisations }).afterClosed()),
        filter(res => !!res),
        tap(id => group.addControl(
          id,
          new UntypedFormControl(0, [
            Validators.required,
            Validators.min(0),
            Validators.max(20)
          ])
        ))
      )
      .subscribe();
  }

  onTest(): void {
    console.log(this.form.getRawValue());
    console.log(this.form.get('skills'));
  }

  private setToDefault<T extends HasBaseProperties<unknown>>(control: AbstractControl, items: T[]): void {
    control.setValue(items.find(i => i.default)?.id);
  }

  trackById(_, i): string { return i.id; }
}


@Component({
  template: `
    <h1 mat-dialog-title>Add Skill</h1>
    <div mat-dialog-content class="d-f fd-c">
      <mat-form-field appearance="outline" style="align-items:stretch;">
        <mat-label>Skill</mat-label>
        <mat-select [formControl]="form">
          <mat-option *ngFor="let i of data;" [value]="i.id">
            {{i.name}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="null">Cancel</button>
      <button mat-flat-button color="primary" [disabled]="!form.valid" [mat-dialog-close]="form.getRawValue()">Add</button>
    </div>`
})
export class SkillDialogComponent {
  readonly form = new FormControl<SkillId>(null, [Validators.required]);
  constructor(
    public dialogRef: MatDialogRef<SkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Skill[]
  ) {}
}

@Component({
  template: `
  <h1 mat-dialog-title>Add Specialisation</h1>
    <div mat-dialog-content class="d-f fd-c">
      <mat-form-field appearance="outline" style="align-items:stretch;">
        <mat-label>Specialisation</mat-label>
        <mat-select [formControl]="form">
          <mat-option *ngFor="let i of data;" [value]="i.id">
            {{i.name}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="null">Cancel</button>
      <button mat-flat-button color="primary" [disabled]="!form.valid" [mat-dialog-close]="form.getRawValue()">Add</button>
    </div>`
})
export class SpecialisationDialogComponent {
  readonly form = new FormControl<SpecialisationId>(null, [Validators.required]);
  constructor(
    public dialogRef: MatDialogRef<SpecialisationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Specialisation[]
  ) {}
}
