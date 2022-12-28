import {
  AttributeId,
  NotchId,
  RiskFactor,
  RiskFactorId,
  SizeId,
  SkillId,
  ThreatId,
  ThreatTrait,
  ThreatTraitId,
  ThreatTypeId,
  Weapon,
  WeaponId
} from '@grim-and-perilous/models/common';
import { getBonusFromAttribute } from '@grim-and-perilous/utils';
import {
  ATTRIBUTE_ID_AGILITY,
  ATTRIBUTE_ID_BRAWN,
  ATTRIBUTE_ID_COMBAT,
  ATTRIBUTE_ID_PERCEPTION,
  ATTRIBUTE_ID_WILLPOWER,
  SKILL_ID_COORDINATION,
  SKILL_ID_SIMPLE_MELEE,
} from '@grim-and-perilous/const';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { getIntegerInRange } from '@shared';
import { System } from '@grim-and-perilous/models/system';

export class Threat {
  id: ThreatId;
  name: string;
  type: ThreatTypeId;
  size: SizeId;
  // tslint:disable-next-line:variable-name
  risk_factor: RiskFactorId;
  notch: NotchId;
  attributes: {
    [k in AttributeId]: number;
  };
  advancements: {
    bonuses: AttributeId[];
    skills: SkillId[];
    traits: { id: ThreatTraitId; value?: number | string; }[];
  };
  labels?: {
    description?: string;
    wares?: string;
    movement?: string;
  };
  weapons?: WeaponId[];

  static getAttributeBonus(threat: Threat, attributeId: AttributeId, traits: ThreatTrait[]): number {
    const fromAttribute: number = getBonusFromAttribute(threat.attributes[attributeId]);
    const fromAdvances: number = Math.min(threat.advancements.bonuses.filter(i => i === attributeId).length, 6);
    const traitsWithBrawnBonus = traits.filter(i => i.system?.BRAWN_BONUS).map(i => i.id);
    const fromTraits: number = threat.advancements.traits.reduce((acc, trait) => {
      let bonus = 0;
      if (traitsWithBrawnBonus.includes(trait.id) && attributeId === ATTRIBUTE_ID_BRAWN) {
        bonus += +trait.value;
      }
      return acc + bonus;
    }, 0);

    return fromAttribute + fromAdvances + fromTraits;
  }

  static getWeaponDamage(data: DataService, weapon: Weapon, threat: Threat): string {
    const system = System.getSystemProperties([
      ...data[DataTypes.QUALITIES].filter(i => weapon.qualities.includes(i.id)).map(i => i.system ?? {})
    ]);
    const dices = data[DataTypes.SIZES].find(i => i.id === threat.size)?.mechanics?.FURY_DICE ?? 1;
    let bonus;
    if (system.hasOwnProperty('BRAWN_WEAPON_BONUS')) {
      bonus = Threat.getAttributeBonus(threat, ATTRIBUTE_ID_BRAWN, data[DataTypes.THREAT_TRAITS]);
    } else if (system.hasOwnProperty('AGILITY_WEAPON_BONUS')) {
      bonus = Threat.getAttributeBonus(threat, ATTRIBUTE_ID_AGILITY, data[DataTypes.THREAT_TRAITS]);
    } else {
      bonus = Threat.getAttributeBonus(threat, ATTRIBUTE_ID_COMBAT, data[DataTypes.THREAT_TRAITS]);
    }
    return system.hasOwnProperty('INEFFECTIVE_WEAPON') ? 'None' : `${dices}d6+${bonus}`;
  }

  static getDamageThreshold(threat: Threat, traits: ThreatTrait[], riskFactors: RiskFactor[]): number {
    const system = System.getSystemProperties([
      ...traits.filter(i => threat.advancements.traits.map(j => j.id).includes(i.id)).map(i => i.system ?? {})
    ]);
    const fromRiskFactor: number = riskFactors.find(i => i.id === threat.risk_factor)?.mechanics?.DAMAGE_THRESHOLD_BONUS ?? 0;
    const fromBrawnBonus: number = Threat.getAttributeBonus(threat, ATTRIBUTE_ID_BRAWN, traits);
    const fromWillpowerBonus: number = Threat.getAttributeBonus(threat, ATTRIBUTE_ID_WILLPOWER, traits);
    const fromAttribute: number = system.hasOwnProperty('DAMAGE_THRESHOLD_MAX_OF_BRAWN_WILLPOWER_BONUS')
      ? Math.max(fromBrawnBonus, fromWillpowerBonus)
      : fromBrawnBonus;
    const traitsWithDamageThresholdBonus = traits.filter(i => i.system?.DAMAGE_THRESHOLD_BONUS).map(i => i.id);
    const fromTraits: number = threat.advancements.traits.reduce((acc, trait) => {
      return traitsWithDamageThresholdBonus.includes(trait.id) ? acc + +trait.value : acc;
    }, 0);
    return fromAttribute + fromTraits + fromRiskFactor;
  }

  static getDefences(threat: Threat, peril: number): string {
    const fromCombat: number = threat.attributes[ATTRIBUTE_ID_COMBAT];
    const fromAgility: number = threat.attributes[ATTRIBUTE_ID_AGILITY];
    const skillRanksPenalty = Math.max(peril - 1, 0);
    const simpleMeleeRanks = threat.advancements.skills.filter(i => i === SKILL_ID_SIMPLE_MELEE).length;
    const coordinationRanks = threat.advancements.skills.filter(i => i === SKILL_ID_COORDINATION).length;
    const fromSimpleMelee: number = Math.max(0, simpleMeleeRanks - skillRanksPenalty) * 10;
    const fromCoordination: number = Math.max(0, coordinationRanks - skillRanksPenalty) * 10;
    const ranged: number = Math.round(fromAgility + fromCoordination);
    const melee: number = Math.round(fromCombat + fromSimpleMelee);
    return `${melee}% / ${ranged}%`;
  }

  static getEncumbranceLimit(threat: Threat, traits: ThreatTrait[]): number {
    return Threat.getAttributeBonus(threat, ATTRIBUTE_ID_BRAWN, traits) + 3;
  }

  static getMovement(threat: Threat, traits: ThreatTrait[]): number {
    const system = System.getSystemProperties([
      ...traits.filter(i => threat.advancements.traits.map(j => j.id).includes(i.id)).map(i => i.system ?? {})
    ]);
    return system.hasOwnProperty('IMMOBILE')
      ? 0
      : Threat.getAttributeBonus(threat, ATTRIBUTE_ID_AGILITY, traits) + 3;
  }

  static getPerilThreshold(threat: Threat, traits: ThreatTrait[]): number {
    const system = System.getSystemProperties([
      ...traits.filter(i => threat.advancements.traits.map(j => j.id).includes(i.id)).map(i => i.system ?? {})
    ]);
    const fromBrawnBonus: number = Threat.getAttributeBonus(threat, ATTRIBUTE_ID_BRAWN, traits);
    const fromWillpowerBonus: number = Threat.getAttributeBonus(threat, ATTRIBUTE_ID_WILLPOWER, traits);
    const fromAttribute: number = system.hasOwnProperty('PERIL_THRESHOLD_MAX_OF_BRAWN_WILLPOWER_BONUS')
      ? Math.max(fromBrawnBonus, fromWillpowerBonus)
      : fromWillpowerBonus;
    return 3 + fromAttribute;
  }

  static getBaseInitiative(threat: Threat, traits: ThreatTrait[]): number {
    return Threat.getAttributeBonus(threat, ATTRIBUTE_ID_PERCEPTION, traits) + 3;
  }

  static getRolledInitiative(threat: Threat, traits: ThreatTrait[]): number {
    const system = System.getSystemProperties([
      ...traits.filter(i => threat.advancements.traits.map(j => j.id).includes(i.id)).map(i => i.system ?? {})
    ]);
    if (system.hasOwnProperty('SLOW_INITIATIVE')) {
      return getIntegerInRange(1, 6);
    } else if (system.hasOwnProperty('FAST_INITIATIVE')) {
      return getIntegerInRange(1, 10) + getIntegerInRange(1, 10);
    } else {
      return getIntegerInRange(1, 10);
    }
  }

  static getTotalInitiative(threat: Threat, traits: ThreatTrait[]): number {
    return Threat.getBaseInitiative(threat, traits) + Threat.getRolledInitiative(threat, traits);
  }
}
