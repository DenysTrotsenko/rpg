import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quirk, QuirkId } from '@grim-and-perilous/models/common';
import { AdminService } from '@ti/app/admin/admin.service';
import { DialogService, SnackbarService, StorageService } from '@shared';
import { QuirksEditComponent } from '@ti/app/admin/quirks/quirks-edit.component';

@Component({
  templateUrl: './quirks.component.html',
  styleUrls: ['./quirks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class QuirksComponent implements OnInit {
  readonly items$: BehaviorSubject<Quirk[]> = this.admin.items$;

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

  getResponse(data): Observable<Quirk> {
    return this.dialog.open(QuirksEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: QuirkId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Quirk): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
