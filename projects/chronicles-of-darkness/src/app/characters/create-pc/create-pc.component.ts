import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, of } from 'rxjs';
import { filter, map, startWith, take, tap } from 'rxjs/operators';
import { DialogService, FirestoreService, StorageService } from '@shared';
import { DataService } from '@cod/app/data/data.service';
import { IEquipment, IMerit, IVirtueOrVice } from '@cod/app/data/data.models';
import { SpecialtyDialogComponent } from '@cod/app/characters/specialty-dialog/specialty-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pc',
  templateUrl: './create-pc.component.html',
  styleUrls: ['./create-pc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePcComponent implements OnInit {
  readonly ATTRIBUTE_MAX = 5;
  readonly SKILL_MAX = 5;
  readonly MERIT_MAX = 5;
  readonly HEALTH_MAX = 12;
  readonly WILLPOWER_MAX = 12;
  readonly SEPARATORS: number[] = [ENTER, COMMA];
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    name: new FormControl(null, [Validators.required]),
    template: new FormControl(null, [Validators.required]),
    meta: new FormGroup({
      concept: new FormControl(null),
      description: new FormControl(null),
      portrait: new FormControl(null)
    }),
    virtues: new FormControl(null, [Validators.required]),
    vices: new FormControl(null, [Validators.required]),
    attributes: new FormGroup({}),
    skills: new FormArray([]),
    merits: new FormArray([]),
    equipment: new FormArray([]),

    size: new FormControl(5, [Validators.required]),
    integrity: new FormControl(7, [Validators.required]),
  });
  portrait$ = this.form.get(['meta', 'portrait']).valueChanges.pipe(
    startWith(''),
    map(url => !!url ? url : '')
  );
  readonly merits$: Observable<IMerit[]> = this.data.data$.pipe(map(data => data.merits));
  readonly equipment$: Observable<IEquipment[]> = this.data.data$.pipe(map(data => data.equipment));
  readonly virtues$: Observable<IVirtueOrVice[]> = this.data.data$.pipe(
    map(data => data.virtues.filter(i => i.type === 1))
  );
  readonly vices$: Observable<IVirtueOrVice[]> = this.data.data$.pipe(
    map(data => data.virtues.filter(i => i.type === 2))
  );

  constructor(
    private readonly data: DataService,
    private readonly dialog: DialogService,
    private readonly firestore: FirestoreService,
    private readonly storage: StorageService,
    private readonly cd: ChangeDetectorRef,
    private readonly router: Router
  ) {}

  get attributes(): FormGroup { return this.form.get('attributes') as FormGroup; }
  get skills(): FormArray { return this.form.get('skills') as FormArray; }
  get merits(): FormArray { return this.form.get('merits') as FormArray; }
  get equipment(): FormArray { return this.form.get('equipment') as FormArray; }
  get defence(): number {
    const dexterity = this.attributes.get('dexterity');
    const wits = this.attributes.get('wits');
    const athletics = this.skills.value.find(i => i.name === 'athletics');
    return Math.min(dexterity.value, wits.value) + (!!athletics ? athletics.value : 0);
  }

  ngOnInit(): void {
    this.data.data$
      .pipe(
        filter(data => !!data),
        take(1),
        tap(data => {
          data.attributes.forEach(i => {
            this.attributes.addControl(i.name, new FormControl(1, [Validators.required]));
          });
          data.skills.forEach(i => {
            this.skills.push(new FormGroup({
              id: new FormControl(i.id),
              type: new FormControl(i.type),
              name: new FormControl(i.name),
              value: new FormControl(0),
              specialties: new FormControl([])
            }));
          });
        })
      )
      .subscribe();
  }

  getValueFormControl(control: AbstractControl): FormControl {
    return control.get('value') as FormControl;
  }

  getControlNames(group: FormGroup): string[] {
    return Object.keys(group.controls);
  }

  getDots(max: number): number[] {
    return Array.from(Array(max)).map((e, i) => i + 1);
  }

  onPortraitChange(file: File): void {
    this.storage.upload(`images/${this.data.id + '_' + file.name}`, file)
      .pipe(
        tap(url => this.form.get(['meta', 'portrait']).patchValue(url)),
      )
      .subscribe();
  }

  onClearSkillClick(control: AbstractControl): void {
    control.get('value').setValue(0);
  }

  onSpecialtyAdd(control: AbstractControl, event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) { control.get('specialties').setValue([ ...control.get('specialties').value, value ]); }
    if (input) { input.value = ''; }
  }

  onSpecialtyRemove(control: AbstractControl, value: string): void {
    control.get('specialties').setValue([ ...control.get('specialties').value.filter(i => i !== value) ]);
  }

  onAddMeritClick(merit: IMerit): void {
    if (merit.multiple || !this.merits.value.filter(i => i.id === merit.id).length) {
      const specialty$ = !!merit.specialty
        ? this.dialog.open(SpecialtyDialogComponent).afterClosed().pipe(filter(res => !!res))
        : of(null);

      specialty$
        .pipe(
          take(1),
          tap(res => {
            this.merits.push(new FormGroup({
              id: new FormControl(merit.id),
              name: new FormControl(merit.name),
              dots: new FormControl(merit.dots),
              value: new FormControl(Math.min(...merit.dots)),
              specialty: new FormControl(!!res ? res : null)
            }));
            this.cd.markForCheck();
          })
        )
        .subscribe();
    }
  }

  onClearMeritClick(index: number): void {
    this.merits.removeAt(index);
  }

  onAddEquipmentClick(item: IEquipment): void {
    this.equipment.push(new FormGroup({
      id: new FormControl(item.id),
      name: new FormControl(item.name)
    }));
    this.cd.markForCheck();
  }

  onClearEquipmentClick(index: number): void {
    this.equipment.removeAt(index);
  }

  onFormSubmit(form): void {
    console.log(form);
    this.firestore
      .update(`characters/${form.id}`, form)
      .pipe(
        tap(() => this.router.navigate(['..']))
      )
      .subscribe();
  }
}
