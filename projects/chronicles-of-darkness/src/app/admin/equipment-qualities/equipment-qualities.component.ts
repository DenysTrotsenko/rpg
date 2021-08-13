import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { AdminBaseComponent, AdminBaseConfig } from '../admin.models';
import { IEquipmentQuality } from '@cod/app/data/data.models';
import { DataService } from '@cod/app/data/data.service';

@Component({
  templateUrl: './equipment-qualities.component.html',
  styleUrls: ['./equipment-qualities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentQualitiesComponent extends AdminBaseComponent<IEquipmentQuality> {
  readonly form: FormGroup = new FormGroup({
    book: new FormControl(null, [Validators.required]),
    page: new FormControl(null, [Validators.required]),
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    effect: new FormControl('', [Validators.required])
  });

  constructor(public admin: AdminService, public data: DataService) {
    super({ filename: 'equipment-qualities.json' } as AdminBaseConfig, admin, data);
  }
}
