import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Skill, Specialisation, SpecialisationId } from '@imperium-maledictum-1e/models/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  template: `
    <form [formGroup]="form">
      <h1 mat-dialog-title>Add Specialisation</h1>
      <div mat-dialog-content class="d-f fd-c ai-s">
        <mat-form-field appearance="outline">
          <mat-label>Specialisation</mat-label>
          <mat-select formControlName="id">
            <mat-option *ngFor="let i of data;" [value]="i.id">
              {{i.name}} ({{(i.skill | getById)?.name}}<span *ngIf="i.restricted">, Restricted</span>)
            </mat-option>
          </mat-select>
        </mat-form-field>
        <ng-container *ngIf="specialisation$ | async as specialisation;">
          <mat-form-field *ngIf="specialisation?.multiple" appearance="outline">
            <mat-label>Details</mat-label>
            <input matInput formControlName="details">
          </mat-form-field>
        </ng-container>
      </div>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="null">Cancel</button>
        <button mat-flat-button color="primary" [disabled]="!form.valid" [mat-dialog-close]="form.value">Add</button>
      </div>
    </form>`
})
export class AddSpecialisationDialogComponent {
  readonly data: Specialisation[] = inject(MAT_DIALOG_DATA);
  readonly form = new FormGroup({
    id: new FormControl<SpecialisationId>(null, [Validators.required]),
    details: new FormControl<string>(null)
  });

  readonly specialisation$: Observable<Specialisation> = this.form.get('id').valueChanges.pipe(
    startWith(null),
    map(id => this.data.find(i => i.id === id))
  );
}
