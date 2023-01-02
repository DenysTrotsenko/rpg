import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Threat } from '@grim-and-perilous/models/threat';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import {
  ATTRIBUTE_ID_AGILITY,
  ATTRIBUTE_ID_BRAWN,
  ATTRIBUTE_ID_COMBAT, ATTRIBUTE_ID_FELLOWSHIP, ATTRIBUTE_ID_INTELLIGENCE,
  ATTRIBUTE_ID_PERCEPTION, ATTRIBUTE_ID_WILLPOWER,
  DEFAULT_ATTRIBUTE_PERCENTAGES
} from '@grim-and-perilous/const';
import { AttributeId } from '@grim-and-perilous/models/common';
import { getBonusFromAttribute } from '@grim-and-perilous/utils';

@Component({
  selector: 'app-threats-edit',
  templateUrl: './threats-edit.component.html',
  styleUrls: ['./threats-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreatsEditComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    size: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
    risk_factor: new FormControl(null, [Validators.required]),
    notch: new FormControl(null, [Validators.required]),
    // attributes: new FormArray(this.data[DataTypes.ATTRIBUTES].map(i => new FormGroup({
    //   id: new FormControl(i.id),
    //   name: new FormControl(i.name)
    // }))),
    attributes: new FormGroup({
      [ATTRIBUTE_ID_COMBAT]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [ATTRIBUTE_ID_BRAWN]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [ATTRIBUTE_ID_AGILITY]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [ATTRIBUTE_ID_PERCEPTION]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [ATTRIBUTE_ID_INTELLIGENCE]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [ATTRIBUTE_ID_WILLPOWER]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
      [ATTRIBUTE_ID_FELLOWSHIP]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required])
    }),
    advancements: new FormGroup({
      bonuses: new FormControl([]),
      skills: new FormControl([]),
      traits: new FormControl([])
    }),
    labels: new FormGroup({
      description: new FormControl(null),
      wares: new FormControl(null),
      movement: new FormControl(null),
    }),
    weapons: new FormControl([])
  });

  readonly attributes = this.data[DataTypes.ATTRIBUTES];
  readonly sizes = this.data[DataTypes.SIZES];
  readonly types = this.data[DataTypes.THREAT_TYPES];
  readonly risks = this.data[DataTypes.RISK_FACTORS];
  readonly notches = this.data[DataTypes.NOTCHES];
  readonly weapons = this.data[DataTypes.WEAPONS];

  constructor(
    @Inject(MAT_DIALOG_DATA) public threat: Threat,
    private data: DataService
  ) {}

  ngOnInit(): void {
    if (!!this.threat) {
      this.form.patchValue(this.threat);
    }
  }

  getAttributeBonus(id: AttributeId): number {
    return this.getBonusFromAdvances(id) + this.getBonusFromAttribute(id);
  }

  getBonusFromAttribute(id: AttributeId): number {
    const attribute: number = this.form.get('attributes').get(`${id}`).value;
    return getBonusFromAttribute(attribute);
  }

  getBonusFromAdvances(id: AttributeId): number {
    // const advancements = this.form.get('advancements').value;
    // const basic: number = advancements.basic?.bonuses.filter(i => i === id).length;
    // const intermediate: number = advancements.intermediate?.bonuses.filter(i => i === id).length;
    // const advanced: number = advancements.advanced?.bonuses.filter(i => i === id).length;
    // return basic + intermediate + advanced;
    return 0;
  }

  trackById(_, item): number {
    return item.id;
  }
}
