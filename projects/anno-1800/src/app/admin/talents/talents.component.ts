import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Talent } from '@grim-and-perilous/models/common';
import { AdminServiceConfig } from '@shared';
import { TalentsEditComponent } from '@ti/app/admin/talents/talents-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsComponent {
  config: AdminServiceConfig<Talent> = {
    path: StoragePath.TALENTS,
    component: TalentsEditComponent
  };
}
