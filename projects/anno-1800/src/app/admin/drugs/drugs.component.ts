import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Drug} from '@flames-of-freedom-1e/models';
import {DialogService, SnackbarService, StorageService} from '@shared';
import {DrugId} from '@flames-of-freedom-1e/enums';
import {AdminService} from '@ti/app/admin/admin.service';
import {DrugsEditComponent} from '@ti/app/admin/drugs/drugs-edit.component';

@Component({
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class DrugsComponent implements OnInit {
  readonly items$: BehaviorSubject<Drug[]> = this.admin.items$;

  constructor(
    private admin: AdminService,
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      dialog: this.dialog,
      path: '/data/drugs.json',
      snackbar: this.snackbar,
      storage: this.storage,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Drug> {
    return this.dialog.open(DrugsEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: DrugId): void {
    this.admin.delete(id);
  }

  onEditClick(quality: Drug): void {
    this.admin.edit(quality);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}