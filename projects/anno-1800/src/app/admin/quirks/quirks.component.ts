import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Quirk } from '@grim-and-perilous/models/common';
import { AdminServiceConfig } from '@shared';
import { QuirksEditComponent } from '@ti/app/admin/quirks/quirks-edit.component';
import { StoragePath } from '@grim-and-perilous/enums';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuirksComponent {
  config: AdminServiceConfig<Quirk> = {
    path: StoragePath.QUIRKS,
    component: QuirksEditComponent
  };
}
