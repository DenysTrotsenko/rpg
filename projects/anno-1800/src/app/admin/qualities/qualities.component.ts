import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminServiceConfig } from '@shared';
import { Quality } from '@grim-and-perilous/models/common';
import { StoragePath } from '@grim-and-perilous/enums';
import { QualitiesEditComponent } from '@ti/app/admin/qualities/qualities-edit.component';

@Component({
  template: '<std-admin-base [config]="config"></std-admin-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualitiesComponent {
  config: AdminServiceConfig<Quality> = {
    path: StoragePath.QUALITIES,
    component: QualitiesEditComponent
  };
}
