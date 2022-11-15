import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminService } from '@ti/app/admin/admin.service';
import { DialogService, SnackbarService, StorageService } from '@shared';
import { TraitId, Trait } from '@grim-and-perilous/models/common';
import { TraitsEditComponent } from '@ti/app/admin/traits/traits-edit.component';

@Component({
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class TraitsComponent implements OnInit {
  readonly items$: BehaviorSubject<Trait[]> = this.admin.items$;

  constructor(
    private admin: AdminService,
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      dialog: this.dialog,
      path: '/data/quirks.json',
      snackbar: this.snackbar,
      storage: this.storage,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Trait> {
    return this.dialog.open(TraitsEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: TraitId): void {
    this.admin.delete(id);
  }

  onEditClick(quality: Trait): void {
    this.admin.edit(quality);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
