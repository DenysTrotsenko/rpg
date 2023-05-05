import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Ailment } from '@grim-and-perilous/models/common';
import { AdminServiceConfig } from '@shared';
import { AilmentsEditComponent } from '@ti/app/admin/ailments/ailments-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AilmentsComponent {
  config: AdminServiceConfig<Ailment> = {
    path: StoragePath.AILMENTS,
    component: AilmentsEditComponent
  };
}
