import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { CombatTrackerUnit } from '../combat-tracker.models';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Quality, Threat, Weapon } from '@flames-of-freedom-1e/models';
import { AttributeId, SkillId } from '@flames-of-freedom-1e/enums';
import {
  getWeaponDamage,
  getDamageThreshold,
  getDefences,
  getInitiative,
  getMovement,
  getPerilThreshold,
  getThresholds, getAttributeBonus,
} from '@ti/app/game/threat.utils';
import { ATTRIBUTES } from '@flames-of-freedom-1e/attributes';

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

  getAttributes(threat: Threat): { name: string; value: number; bonus: number; }[] {
    return Object.entries(threat.attributes).map(entry => {
      return {
        name: ATTRIBUTES.find(i => i.id === +entry[0]).name,
        value: +entry[1],
        bonus: getAttributeBonus(threat, +entry[0])
      };
    });
  }

  getSkills(threat: Threat): { id: SkillId; name: string; tooltip: string; value: number; }[] {
    return Object.entries(threat.advancements.skills
      .reduce((acc: object, cur: SkillId) => {
        if (acc.hasOwnProperty(cur)) {
          acc[cur] += 10;
        } else {
          acc[cur] = 10;
        }
        return acc;
      }, {}))
      .map(entry => {
        const skill = this.data[DataTypes.SKILLS].find(i => i.id === +entry[0]);
        return {
          id: skill?.id,
          name: skill?.name,
          tooltip: skill?.labels?.tooltip,
          value: entry[1] as number
        };
      });
  }

  getWeaponChance(weapon: Weapon, threat: Threat): number {
    const skills = weapon.skills;
    const fromAttribute = threat.attributes[AttributeId.COMBAT];
    const fromSkill = Math.max(...skills.map(i => threat.advancements.skills.filter(s => s === i).length)) * 10;
    return fromAttribute + fromSkill;
  }

  getWeaponDamage(weapon: Weapon, threat: Threat): string {
    return weapon.labels.damage ?? getWeaponDamage(weapon, threat);
  }

  getAllQualities(weapon: Weapon): Quality[] {
    return this.data[DataTypes.QUALITIES].filter(i => weapon.qualities.includes(i.id));
  }

  getDefences(threat: Threat): string {
    return getDefences(threat);
  }

  getMovement(threat: Threat): string {
    return threat.labels?.movement ?? `${getMovement(threat)}`;
  }

  getType(threat: Threat): string {
    return this.data[DataTypes.THREAT_TYPES].find(i => i.id === threat.type)?.name;
  }

  getSize(threat: Threat): string {
    const size = this.data[DataTypes.SIZES].find(i => i.id === threat.size);
    return `${size.name} (${size.mechanics.FURY_DICE}d6)`;
  }

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

  trackById(_: number, item): unknown {
    return item.id;
  }
}
