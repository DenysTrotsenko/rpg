import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Affliction, AfflictionId } from '@grim-and-perilous/models/common';
import { AdminService } from '@ti/app/admin/admin.service';
import { DialogService, SnackbarService, StorageService } from '@shared';
import { AfflictionsEditComponent } from '@ti/app/admin/afflictions/afflictions-edit.component';

@Component({
  selector: 'app-afflictions',
  templateUrl: './afflictions.component.html',
  styleUrls: ['./afflictions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class AfflictionsComponent implements OnInit {
  readonly items$: BehaviorSubject<Affliction[]> = this.admin.items$;

  constructor(
    private admin: AdminService,
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      dialog: this.dialog,
      path: '/data/afflictions.json',
      snackbar: this.snackbar,
      storage: this.storage,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Affliction> {
    return this.dialog.open(AfflictionsEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: AfflictionId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Affliction): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
