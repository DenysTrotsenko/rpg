import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { CombatTrackerUnit } from '../combat-tracker.models';
import {DataService, DataTypes} from '@ti/app/game/data.service';
import {Quality, Threat, Weapon} from '@flames-of-freedom-1e/models';
import {AttributeId} from '@flames-of-freedom-1e/enums';
import {
  getWeaponDamage,
  getDamageThreshold,
  getDefences,
  getInitiative,
  getPerilThreshold,
  getThresholds,
} from '@ti/app/game/threat.utils';

@Component({
  selector: 'app-combat-tracker-unit',
  templateUrl: './combat-tracker-unit.component.html',
  styleUrls: ['./combat-tracker-unit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombatTrackerUnitComponent {
  @Input() value: CombatTrackerUnit;
  @Output() changed: EventEmitter<CombatTrackerUnit> = new EventEmitter();
  @Output() selected: EventEmitter<CombatTrackerUnit> = new EventEmitter();
  @Output() clone: EventEmitter<CombatTrackerUnit> = new EventEmitter();
  @Output() remove: EventEmitter<CombatTrackerUnit> = new EventEmitter();
  readonly DataTypes = DataTypes;

  constructor(private readonly data: DataService) {}

  onCloneClick(data): void {
    this.clone.emit(data);
  }

  onRemoveClick(data): void {
    this.remove.emit(data);
  }

  getWeaponChance(weapon: Weapon, threat: Threat): number {
    const skills = weapon.skills;
    const fromAttribute = threat.attributes[AttributeId.COMBAT];
    const fromSkill = Math.max(...skills.map(i => threat.advancements.skills.filter(s => s === i).length)) * 10;
    return fromAttribute + fromSkill;
  }

  getWeaponDamage(weapon: Weapon, threat: Threat): string {
    return getWeaponDamage(weapon, threat);
  }

  getAllQualities(weapon: Weapon): Quality[] {
    return this.data[DataTypes.QUALITIES].filter(i => weapon.qualities.includes(i.id));
  }

  getDefences(threat: Threat): string {
    return getDefences(threat);
  }
  // getSize(threat: Threat): string {}
  // getSize(threat: Threat): string {}
  // getSize(threat: Threat): string {
  //   const size = this.data[DataTypes.SIZES].find(i => i.id === threat.size);
  // }
  getRiskFactorAndNotch(threat: Threat): string {
    const risk = this.data[DataTypes.RISK_FACTORS].find(i => i.id === threat.risk_factor);
    const notch = this.data[DataTypes.NOTCHES].find(i => i.id === threat.notch);
    return `${risk?.name} (${notch?.name})`;
  }
  getInitiative(threat: Threat): number {
    return getInitiative(threat);
  }
  getDamageThresholds(threat: Threat): string {
    return getThresholds(getDamageThreshold(threat));
  }
  getPerilThresholds(threat: Threat): string {
    return getThresholds(getPerilThreshold(threat));
  }
}
