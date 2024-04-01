import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Skill, SkillId} from '@imperium-maledictum-1e/models/common';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA} from '@angular/material/legacy-dialog';

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
export class AddSkillDialogComponent {
  readonly form = new FormControl<SkillId>(null, [Validators.required]);
  constructor(
    public dialogRef: MatDialogRef<AddSkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Skill[]
  ) {}
}
