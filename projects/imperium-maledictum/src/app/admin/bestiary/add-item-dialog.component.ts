import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item, ItemId, ItemTrait } from '@imperium-maledictum-1e/models/common';
import { Observable } from 'rxjs';
import { DataService } from '../../common/data.service';

@Component({
  template: `
    <h1 mat-dialog-title>Add Item</h1>
    <div mat-dialog-content class="d-f fd-c" [formGroup]="form">
      <mat-form-field appearance="outline" style="align-items:stretch;">
        <mat-label>Item</mat-label>
        <mat-select formControlName="id">
          <mat-option *ngFor="let i of items$ | async;" [value]="i.id">
            {{i.name}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" style="align-items:stretch;">
        <mat-label>Qualities & Flaws</mat-label>
        <mat-select formControlName="traits" multiple>
          <mat-optgroup label="Qualities">
            <mat-option *ngFor="let i of qualities$ | async;" [value]="i.id">
              {{i.name}}
            </mat-option>
          </mat-optgroup>
          <mat-optgroup label="Flaws">
            <mat-option *ngFor="let i of flaws$ | async;" [value]="i.id">
              {{i.name}}
            </mat-option>
          </mat-optgroup>
        </mat-select>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="null">Cancel</button>
      <button mat-flat-button color="primary" [disabled]="!form.valid" [mat-dialog-close]="form.getRawValue()">Add</button>
    </div>`
})
export class AddItemDialogComponent {
  private readonly data: DataService = inject(DataService);

  readonly items$: Observable<Item[]> = this.data.items$;
  readonly traits$: Observable<ItemTrait[]> = this.data.itemTraits$;
  readonly qualities$: Observable<ItemTrait[]> = this.data.itemQualities$;
  readonly flaws$: Observable<ItemTrait[]> = this.data.itemFlaws$;

  readonly form = new FormGroup({
    id: new FormControl<ItemId>(null, [Validators.required]),
    traits: new FormControl([])
  });
}
