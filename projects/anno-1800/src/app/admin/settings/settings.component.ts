import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DialogService } from '@shared';
import { AdminService } from '@ti/app/admin/admin.service';
import { Setting } from '@grim-and-perilous/models/setting';
import { SettingId } from '@grim-and-perilous/models/common';
import { SettingsEditComponent } from '@ti/app/admin/settings/settings-edit.component';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class SettingsComponent implements OnInit {
  readonly items$: BehaviorSubject<Setting[]> = this.admin.items$;

  constructor(
    private admin: AdminService,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      path: '/data/settings.json',
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
