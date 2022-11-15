import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Talent, TalentId} from '@grim-and-perilous/models/common';
import {AdminService} from '@ti/app/admin/admin.service';
import {DialogService, SnackbarService, StorageService} from '@shared';
import {TalentsEditComponent} from '@ti/app/admin/talents/talents-edit.component';

@Component({
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsComponent implements OnInit {
  readonly items$: BehaviorSubject<Talent[]> = this.admin.items$;

  constructor(
    private admin: AdminService,
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      dialog: this.dialog,
      path: '/data/talents.json',
      snackbar: this.snackbar,
      storage: this.storage,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Talent> {
    return this.dialog.open(TalentsEditComponent, { data }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: TalentId): void {
    this.admin.delete(id);
  }

  onEditClick(quality: Talent): void {
    this.admin.edit(quality);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
