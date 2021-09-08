import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ATTRIBUTE_ID, CharacterAttribute} from '@shadowrun/app/5e';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-final-calculations',
  templateUrl: './create-pc-final-calculations.component.html',
  styleUrls: ['./create-pc-final-calculations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePcFinalCalculationsComponent {
  @Input() character: any;
  readonly CALCULATIONS = [
    {
      name: 'Initiative',
      labels: {
        tooltip: '(INT + REA) + 1D6'
      },
      value: () => this.initiative
    },
    {
      name: 'Astral Initiative',
      labels: {
        tooltip: '(INT x 2) + 2D6'
      },
      value: () => this.astralInitiative
    },
    {
      name: 'Matrix AR Initiative',
      labels: {
        tooltip: '(INT + REA) + 1D6'
      },
      value: () => this.matrixArInitiative
    },
    {
      name: 'Matrix VR Initiative (Cold Sim)',
      labels: {
        tooltip: '(Data Processing + INT) + 3D6'
      },
      value: () => this.matrixVrColdInitiative
    },
    {
      name: 'Matrix VR Initiative (Hot Sim)',
      labels: {
        tooltip: '(Data Processing + INT) + 4D6'
      },
      value: () => this.matrixVrHotInitiative
    },
    {
      name: 'Mental Limit',
      labels: {
        tooltip: '[(LOG x 2) + INT + WIL] / 3 (round up)'
      },
      value: () => this.mentalLimit
    },
    {
      name: 'Physical Limit',
      labels: {
        tooltip: '[(STR x 2) + BOD + REA] / 3 (round up)'
      },
      value: () => this.physicalLimit
    },
    {
      name: 'Social Limit',
      labels: {
        tooltip: '[(CHA x 2) + WIL + ESS] / 3 (round up)'
      },
      value: () => this.socialLimit
    },
    {
      name: 'Physical Condition Monitor',
      labels: {
        tooltip: '[(BOD + Augmentations) / 2] + 8 (round up)'
      },
      value: () => this.physicalConditionMonitor
    },
    {
      name: 'Stun Condition Monitor',
      labels: {
        tooltip: '[(WIL + Augmentations) / 2] + 8 (round up)'
      },
      value: () => this.stunConditionMonitor
    },
    {
      name: 'Overflow',
      labels: {
        tooltip: 'BOD + Augmentation bonuses'
      },
      value: () => this.overflow
    },
    {
      name: 'Composure',
      labels: {
        tooltip: 'CHA + WIL'
      },
      value: () => this.composure
    },
    {
      name: 'Judge Intentions',
      labels: {
        tooltip: 'CHA + INT'
      },
      value: () => this.judgeIntentions
    },
    {
      name: 'Lifting / Carrying',
      labels: {
        tooltip: 'BOD + STR'
      },
      value: () => this.lifting
    },
    {
      name: 'Memory',
      labels: {
        tooltip: 'LOG + WIL'
      },
      value: () => this.memory
    },
    {
      name: 'Walk Movement Rate',
      labels: {
        tooltip: 'AGI x 2'
      },
      value: () => this.walkMovementRate
    },
    {
      name: 'Run Movement Rate',
      labels: {
        tooltip: 'AGI x 4'
      },
      value: () => this.runMovementRate
    }
  ];

  get attributes(): CharacterAttribute[] { return this.character?.attributes ?? [] as CharacterAttribute[]; }
  get str(): number { return this.attributes.find(i => i.id === ATTRIBUTE_ID.STRENGTH)?.rating ?? 0; }
  get agi(): number { return this.attributes.find(i => i.id === ATTRIBUTE_ID.AGILITY)?.rating ?? 0; }
  get rea(): number { return this.attributes.find(i => i.id === ATTRIBUTE_ID.REACTION)?.rating ?? 0; }
  get bod(): number { return this.attributes.find(i => i.id === ATTRIBUTE_ID.BODY)?.rating ?? 0; }
  get wil(): number { return this.attributes.find(i => i.id === ATTRIBUTE_ID.WILLPOWER)?.rating ?? 0; }
  get log(): number { return this.attributes.find(i => i.id === ATTRIBUTE_ID.LOGIC)?.rating ?? 0; }
  get int(): number { return this.attributes.find(i => i.id === ATTRIBUTE_ID.INTUITION)?.rating ?? 0; }
  get cha(): number { return this.attributes.find(i => i.id === ATTRIBUTE_ID.CHARISMA)?.rating ?? 0; }
  get ess(): number { return this.attributes.find(i => i.id === ATTRIBUTE_ID.ESSENCE)?.rating ?? 0; }
  get augmentations(): number { return 0; }
  get dataProcessing(): number { return 0; }
  get initiative(): string { return `${this.int + this.rea} + 1d6`; }
  get astralInitiative(): string { return `${this.int * 2} + 2d6`; }
  get matrixArInitiative(): string { return `${this.int + this.rea} + 1d6`; }
  get matrixVrColdInitiative(): string { return `${this.int + this.dataProcessing} + 3d6`; }
  get matrixVrHotInitiative(): string { return `${this.int + this.dataProcessing} + 4d6`; }
  get mentalLimit(): string { return `${Math.ceil((this.log * 2 + this.int + this.wil) / 3)}`; }
  get physicalLimit(): string { return `${Math.ceil((this.str * 2 + this.bod + this.rea) / 3)}`; }
  get socialLimit(): string { return `${Math.ceil((this.cha * 2 + this.wil + this.ess) / 3)}`; }
  get physicalConditionMonitor(): string { return `${Math.ceil(8 +  (this.bod + this.augmentations) / 2)}`; }
  get stunConditionMonitor(): string { return `${Math.ceil(8 + (this.wil + this.augmentations) / 2)}`; }
  get overflow(): string { return `${this.bod + this.augmentations}`; }
  get composure(): string { return `${this.cha + this.wil}`; }
  get judgeIntentions(): string { return `${this.cha + this.int}`; }
  get lifting(): string { return `${this.bod + this.str}`; }
  get memory(): string { return `${this.log + this.int}`; }
  get walkMovementRate(): string { return `${this.agi * 2}`; }
  get runMovementRate(): string { return `${this.agi * 4}`; }

  constructor() {}
}
