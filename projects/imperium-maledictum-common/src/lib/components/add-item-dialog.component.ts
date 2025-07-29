import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Item,
  ItemId,
  ItemModification,
  ItemModificationId,
  ItemTrait,
  ItemTraitId
} from '@imperium-maledictum-1e/models/common';
import { Observable } from 'rxjs';
import { DataService } from '@im-common';


@Component({
    template: `
    <h1 mat-dialog-title>Add Item</h1>
    <div mat-dialog-content class="d-f fd-c" [formGroup]="form">
      <mat-form-field appearance="outline" style="align-items:stretch;">
        <mat-label>Item</mat-label>
        <mat-select formControlName="id">
          @for (i of items$ | async; track i) {
            <mat-option [value]="i.id">
              {{i.name}}
            </mat-option>
          }
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" style="align-items:stretch;">
        <mat-label>Qualities</mat-label>
        <mat-select formControlName="qualities" multiple>
          @for (i of qualities$ | async; track i) {
            <mat-option [value]="i.id">
              {{i.name}}
            </mat-option>
          }
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" style="align-items:stretch;">
        <mat-label>Flaws</mat-label>
        <mat-select formControlName="flaws" multiple>
          @for (i of flaws$ | async; track i) {
            <mat-option [value]="i.id">
              {{i.name}}
            </mat-option>
          }
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" style="align-items:stretch;">
        <mat-label>Modifications</mat-label>
        <mat-select formControlName="modifications" multiple>
          @for (i of modifications$ | async; track i) {
            <mat-option [value]="i.id">
              {{i.name}}
            </mat-option>
          }
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Quantity</mat-label>
        <input matInput type="number" formControlName="quantity">
        @if (form.get('quantity').hasError('required')) {
          <mat-error>Quantity is required</mat-error>
        }
        @if (form.get('quantity').hasError('min')) {
          <mat-error>Minimum is 0</mat-error>
        }
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="null">Cancel</button>
      <button mat-flat-button color="primary" [disabled]="!form.valid" [mat-dialog-close]="form.getRawValue()">Add</button>
    </div>`,
    standalone: false
})
export class AddItemDialogComponent {
  private readonly data = inject(DataService);

  readonly items$: Observable<Item[]> = this.data.items$;
  readonly traits$: Observable<ItemTrait[]> = this.data.itemTraits$;
  readonly qualities$: Observable<ItemTrait[]> = this.data.itemQualities$;
  readonly flaws$: Observable<ItemTrait[]> = this.data.itemFlaws$;
  readonly modifications$: Observable<ItemModification[]> = this.data.itemModifications$;

  readonly form = new FormGroup({
    id: new FormControl<ItemId>(null, [Validators.required]),
    qualities: new FormControl<ItemTraitId[]>([]),
    flaws: new FormControl<ItemTraitId[]>([]),
    traits: new FormControl<ItemTraitId[]>([]),
    modifications: new FormControl<ItemModificationId[]>([]),
    quantity: new FormControl<number>(1, [Validators.required, Validators.min(0)]),
  });
}
