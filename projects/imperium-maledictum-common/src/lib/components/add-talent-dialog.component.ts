import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Talent, TalentId } from '@imperium-maledictum-1e/models/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    template: `
    <form [formGroup]="form">
      <h1 mat-dialog-title>Add Talent</h1>
      <div mat-dialog-content class="d-f fd-c ai-s">
        <mat-form-field appearance="outline">
          <mat-label>Talent</mat-label>
          <mat-select formControlName="id">
            @for (i of data; track i) {
              <mat-option [value]="i.id" [matTooltip]="i.labels?.tooltip">
                {{i.name}}
              </mat-option>
            }
          </mat-select>
        </mat-form-field>
        <!--        <ng-container *ngIf="talent$ | async as talent;">-->
        <!--          <mat-form-field *ngIf="talent?.multiple" appearance="outline">-->
        <!--            <mat-label>Details</mat-label>-->
        <!--            <input matInput formControlName="details">-->
      <!--          </mat-form-field>-->
    <!--        </ng-container>-->
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="null">Cancel</button>
      <button mat-flat-button color="primary" [disabled]="!form.valid" [mat-dialog-close]="form.value">Add</button>
    </div>
    </form>`,
    standalone: false
})
export class AddTalentDialogComponent {
  readonly data: Talent[] = inject(MAT_DIALOG_DATA);
  readonly form = new FormGroup({
    id: new FormControl<TalentId>(null, [Validators.required]),
  });

  readonly talent$: Observable<Talent> = this.form.get('id').valueChanges.pipe(
    startWith(null),
    map(id => this.data.find(i => i.id === id))
  );
}
