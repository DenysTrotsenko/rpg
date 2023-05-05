import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Drug } from '@grim-and-perilous/models/common';
import { AdminServiceConfig } from '@shared';
import { DrugsEditComponent } from '@ti/app/admin/drugs/drugs-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrugsComponent {
  config: AdminServiceConfig<Drug> = {
    path: StoragePath.DRUGS,
    component: DrugsEditComponent
  };
}
