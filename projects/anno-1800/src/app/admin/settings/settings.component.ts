import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminService, DialogService } from '@shared';
import { Setting } from '@grim-and-perilous/models/setting';
import { SettingId } from '@grim-and-perilous/models/common';
import { SettingsEditComponent } from '@ti/app/admin/settings/settings-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class SettingsComponent implements OnInit {
  readonly items$: BehaviorSubject<Setting[]> = this.admin.items$;

  constructor(
    @Self() private admin: AdminService<Setting, string>,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      path: StoragePath.SETTINGS,
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Setting> {
    return this.dialog.open(SettingsEditComponent, {
      disableClose: true,
      width: '100%',
      data
    }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: SettingId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Setting): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
