import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { Threat } from '@grim-and-perilous/models/threat';
import { ThreatsEditComponent } from '@ti/app/admin/threats/threats-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreatsComponent {
  config: AdminServiceConfig<Threat> = {
    path: StoragePath.THREATS,
    component: ThreatsEditComponent
  };
}
