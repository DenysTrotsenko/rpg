import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DialogService, SnackbarService, StorageService } from '@shared';
import { AdminService } from '@ti/app/admin/admin.service';
import { Quality, QualityId } from '@grim-and-perilous/models/common';
import { QualitiesEditComponent } from '@ti/app/admin/qualities/qualities-edit.component';

@Component({
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class QualitiesComponent implements OnInit {
  readonly items$: BehaviorSubject<Quality[]> = this.admin.items$;

  constructor(
    private admin: AdminService,
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      dialog: this.dialog,
      path: '/data/qualities.json',
      snackbar: this.snackbar,
      storage: this.storage,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Quality> {
    return this.dialog.open(QualitiesEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: QualityId): void {
    this.admin.delete(id);
  }

  onEditClick(quality: Quality): void {
    this.admin.edit(quality);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
