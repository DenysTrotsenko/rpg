import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminBaseComponent, AdminBaseConfig } from '../admin.models';
import { AdminService } from '../admin.service';
import { ITilt } from '@cod/app/data/data.models';
import { DataService } from '@cod/app/data/data.service';

@Component({
  templateUrl: './tilts.component.html',
  styleUrls: ['./tilts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TiltsComponent extends AdminBaseComponent<ITilt> {
  readonly form: FormGroup = new FormGroup({
    book: new FormControl(null, [Validators.required]),
    page: new FormControl(null, [Validators.required]),
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    effect: new FormControl('', [Validators.required]),
    causing: new FormControl('', [Validators.required]),
    ending: new FormControl('', [Validators.required])
  });

  constructor(public admin: AdminService, public data: DataService) {
    super({ filename: 'tilts.json' } as AdminBaseConfig, admin, data);
  }
}
