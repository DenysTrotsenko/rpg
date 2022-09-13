import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { CombatTrackerUnit } from '../combat-tracker.models';
import {DataService, DataTypes} from '@ti/app/game/data.service';
import {Quality, Threat, Weapon} from '@flames-of-freedom-1e/models';
import {AttributeId, QualityId} from '@flames-of-freedom-1e/enums';
import {getWeaponDamage} from '@ti/app/game/threat.utils';
import {QUALITIES} from '@flames-of-freedom-1e/qualities';

@Component({
  selector: 'app-combat-tracker-unit',
  templateUrl: './combat-tracker-unit.component.html',
  styleUrls: ['./combat-tracker-unit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombatTrackerUnitComponent {
  @Input() data: CombatTrackerUnit;
  @Output() changed: EventEmitter<CombatTrackerUnit> = new EventEmitter();
  @Output() selected: EventEmitter<CombatTrackerUnit> = new EventEmitter();
  @Output() clone: EventEmitter<CombatTrackerUnit> = new EventEmitter();
  @Output() remove: EventEmitter<CombatTrackerUnit> = new EventEmitter();
  readonly DataTypes = DataTypes;

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
    return QUALITIES.filter(i => weapon.qualities.includes(i.id));
  }
}
