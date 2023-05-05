import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { Weapon } from '@grim-and-perilous/models/common';
import { StoragePath } from '@grim-and-perilous/enums';
import { WeaponsEditComponent } from '@ti/app/admin/weapons/weapons-edit.component';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeaponsComponent {
  config: AdminServiceConfig<Weapon> = {
    path: StoragePath.AILMENTS,
    component: WeaponsEditComponent
  };
}
