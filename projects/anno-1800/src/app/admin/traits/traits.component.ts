import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { Trait } from '@grim-and-perilous/models/common';
import { TraitsEditComponent } from '@ti/app/admin/traits/traits-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TraitsComponent {
  config: AdminServiceConfig<Trait> = {
    path: StoragePath.TRAITS,
    component: TraitsEditComponent
  };
}
