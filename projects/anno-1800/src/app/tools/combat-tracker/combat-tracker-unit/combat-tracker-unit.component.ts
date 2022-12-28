import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CombatTrackerUnit } from '../combat-tracker.models';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { AttributeId, Quality, SkillId, Weapon } from '@grim-and-perilous/models/common';
import { ATTRIBUTE_ID_COMBAT } from '@grim-and-perilous/const';
import { Threat } from '@grim-and-perilous/models/threat';

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
        name: this.data[DataTypes.ATTRIBUTES].find(i => i.id === entry[0]).name,
        value: +entry[1],
        bonus: Threat.getAttributeBonus(threat, entry[0] as AttributeId)
      };
    });
  }

  getSkills(threat: Threat, unit: CombatTrackerUnit): { id: SkillId; name: string; tooltip: string; value: number; }[] {
    const skillRanksPenalty = Math.max(unit.peril - 1, 0);

    return Object.entries(threat.advancements.skills
      .reduce((acc: object, cur: SkillId) => {
        if (acc.hasOwnProperty(cur)) {
          acc[cur] += 1;
        } else {
          acc[cur] = 1;
        }

        return acc;
      }, {}))
      .map(entry => {
        const skill = this.data[DataTypes.SKILLS].find(i => i.id === entry[0]);

        return {
          id: skill?.id,
          name: skill?.name,
          tooltip: skill?.labels?.tooltip,
          value: Math.max(+entry[1] - skillRanksPenalty, 0) * 10
        };
      });
  }

  getThresholds(threshold: number): string {
    return `${threshold} (${threshold + 6}/${threshold + 12}/${threshold + 18})`;
  }

  getWeaponChance(weapon: Weapon, threat: Threat, unit: CombatTrackerUnit): number {
    const skillRanksPenalty = Math.max(unit.peril - 1, 0);
    const skillRanks = weapon.skills
      .map(id => threat.advancements.skills.filter(s => s === id).length)
      .map(rank => Math.max(rank - skillRanksPenalty, 0));
    const fromAttribute = threat.attributes[ATTRIBUTE_ID_COMBAT];
    const fromSkill = Math.max(...skillRanks) * 10;
    return fromAttribute + fromSkill;
  }

  getWeaponDamage(weapon: Weapon, threat: Threat): string {
    return weapon.labels.damage ?? Threat.getWeaponDamage(this.data, weapon, threat);
  }

  getAllQualities(weapon: Weapon): Quality[] {
    return this.data[DataTypes.QUALITIES].filter(i => weapon.qualities.includes(i.id));
  }

  getDefences(threat: Threat, unit: CombatTrackerUnit): string {
    return Threat.getDefences(threat, unit.peril);
  }

  getMovement(threat: Threat): string {
    return threat.labels?.movement ?? `${Threat.getMovement(threat)}`;
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
    return Threat.getInitiative(threat);
  }

  getDamageThresholds(threat: Threat): string {
    return this.getThresholds(Threat.getDamageThreshold(this.data, threat));
  }

  getPerilThresholds(threat: Threat): string {
    return this.getThresholds(Threat.getPerilThreshold(threat, this.data[DataTypes.THREAT_TRAITS]));
  }

  trackById(_: number, item): unknown {
    return item.id;
  }
}
