import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { ThreatTrait } from '@grim-and-perilous/models/common';
import { StoragePath } from '@grim-and-perilous/enums';
import { ThreatTraitsEditComponent } from '@ti/app/admin/threat-traits/threat-traits-edit.component';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreatTraitsComponent {
  config: AdminServiceConfig<ThreatTrait> = {
    path: StoragePath.THREAT_TRAITS,
    component: ThreatTraitsEditComponent
  };
}
