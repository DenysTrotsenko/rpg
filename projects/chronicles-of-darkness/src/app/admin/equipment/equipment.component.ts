import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminBaseComponent, AdminBaseConfig } from '../admin.models';
import { AdminService } from '../admin.service';
import { IEquipment } from '@cod/app/data/data.models';
import { DataService } from '@cod/app/data/data.service';
import { map, tap } from 'rxjs/operators';

const MELEE_PARAMETERS = {
  damage: 0,
  initiative: 0,
  strength: 0,
  size: 1,
  availability: 1,
  qualities: []
};
const RANGED_PARAMETERS = {
  damage: 0,
  range: false,
  short: 0,
  medium: 0,
  long: 0,
  clips: 1,
  initiative: 0,
  strength: 1,
  size: 1,
  availability: 1,
  qualities: []
};
const ARMOR_PARAMETERS = {
  general: 0,
  ballistic: 0,
  strength: 0,
  defence: 0,
  speed: 0,
  availability: 1,
  coverage: [],
  qualities: []
};
const TOOLS_PARAMETERS = {
  bonus: 0,
  durability: 0,
  size: 1,
  structure: 0,
  availability: 1,
  effect: ''
};
const SHIELD_PARAMETERS = {
  damage: 0,
  initiative: 0,
  defence: 0,
  strength: 0,
  size: 1,
  availability: 1,
  qualities: []
};
const GRENADE_PARAMETERS = {
  damage: 0,
  blast: 0,
  force: 0,
  strength: 1,
  initiative: 0,
  size: 1,
  availability: 1,
  qualities: []
};

@Component({
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentComponent extends AdminBaseComponent<IEquipment> implements OnInit {
  static readonly DEFAULTS = new Map()
    .set(1, MELEE_PARAMETERS)
    .set(2, RANGED_PARAMETERS)
    .set(3, ARMOR_PARAMETERS)
    .set(4, TOOLS_PARAMETERS)
    .set(5, SHIELD_PARAMETERS)
    .set(6, GRENADE_PARAMETERS);
  readonly form: FormGroup = new FormGroup({
    book: new FormControl(null, [Validators.required]),
    page: new FormControl(null, [Validators.required]),
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    type: new FormControl(null, [Validators.required]),
    description: new FormControl('', [Validators.required]),
    parameters: new FormGroup({})
  });
  readonly qualities$ = this.data.data$.pipe(map(i => i.qualities || []));

  constructor(public admin: AdminService, public data: DataService) {
    super({ filename: 'equipment.json' } as AdminBaseConfig, admin, data);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.form.get('type').valueChanges
      .pipe(
        tap(type => {
          const parameters = this.form.get('parameters') as FormGroup;
          Object
            .keys(parameters.controls)
            .forEach(i => parameters.removeControl(i));
          Object
            .entries(EquipmentComponent.DEFAULTS.get(type) || [])
            .forEach(entry => parameters.addControl(entry[0], new FormControl(entry[1])));
        })
      )
      .subscribe();
  }

  hasParameter(param: string): boolean {
    const parameters = this.form.get('parameters') as FormGroup;

    return parameters.controls.hasOwnProperty(param);
  }
}
