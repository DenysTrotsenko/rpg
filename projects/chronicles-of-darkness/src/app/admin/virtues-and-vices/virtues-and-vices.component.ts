import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdminBaseComponent, AdminBaseConfig } from '@cod/app/admin/admin.models';
import { IVirtueOrVice } from '@cod/app/data/data.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '@cod/app/admin/admin.service';
import { DataService } from '@cod/app/data/data.service';

@Component({
  templateUrl: './virtues-and-vices.component.html',
  styleUrls: ['./virtues-and-vices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtuesAndVicesComponent extends AdminBaseComponent<IVirtueOrVice> {
  readonly form: FormGroup = new FormGroup({
    book: new FormControl(null, [Validators.required]),
    page: new FormControl(null, [Validators.required]),
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    type: new FormControl(null, [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(public admin: AdminService, public data: DataService) {
    super({ filename: 'virtues-vices.json' } as AdminBaseConfig, admin, data);
  }
}
