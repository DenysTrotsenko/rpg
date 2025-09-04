import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Skill, SkillId } from '@imperium-maledictum-1e/models/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    template: `
    <h1 mat-dialog-title>Add Skill</h1>
    <div mat-dialog-content class="d-f fd-c">
      <mat-form-field appearance="outline" style="align-items:stretch;">
        <mat-label>Skill</mat-label>
        <mat-select [formControl]="form">
          @for (i of data; track i) {
            <mat-option [value]="i.id">
              {{i.name}} ({{(i.characteristic | getById)?.labels?.abbreviation}})
            </mat-option>
          }
        </mat-select>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="null">Cancel</button>
      <button mat-flat-button color="primary" [disabled]="!form.valid" [mat-dialog-close]="form.getRawValue()">Add</button>
    </div>`,
    standalone: false
})
export class AddSkillDialogComponent {
  readonly data: Skill[] = inject(MAT_DIALOG_DATA);
  readonly form = new FormControl<SkillId>(null, [Validators.required]);
}
