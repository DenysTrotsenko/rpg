import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { Setting } from '@grim-and-perilous/models/setting';
import { SettingsEditComponent } from '@ti/app/admin/settings/settings-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  config: AdminServiceConfig<Setting> = {
    path: StoragePath.SETTINGS,
    component: SettingsEditComponent
  };
}
