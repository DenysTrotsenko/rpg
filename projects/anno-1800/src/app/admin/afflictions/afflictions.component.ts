import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Affliction } from '@grim-and-perilous/models/common';
import { AdminServiceConfig } from '@shared';
import { AfflictionsEditComponent } from '@ti/app/admin/afflictions/afflictions-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AfflictionsComponent {
  config: AdminServiceConfig<Affliction> = {
    path: StoragePath.AFFLICTIONS,
    component: AfflictionsEditComponent
  };
}
