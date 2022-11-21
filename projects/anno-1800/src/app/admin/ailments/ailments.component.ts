import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ailment, AilmentId } from '@grim-and-perilous/models/common';
import { DialogService, SnackbarService, StorageService } from '@shared';
import { AdminService } from '@ti/app/admin/admin.service';
import { AilmentsEditComponent } from '@ti/app/admin/ailments/ailments-edit.component';

@Component({
  templateUrl: './ailments.component.html',
  styleUrls: ['./ailments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class AilmentsComponent implements OnInit {
  readonly items$: BehaviorSubject<Ailment[]> = this.admin.items$;

  constructor(
    private admin: AdminService,
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      dialog: this.dialog,
      path: '/data/ailments.json',
      snackbar: this.snackbar,
      storage: this.storage,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Ailment> {
    return this.dialog.open(AilmentsEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: AilmentId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Ailment): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
