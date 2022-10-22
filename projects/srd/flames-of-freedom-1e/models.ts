import { HasId } from '@shared';
import {
  AfflictionId,
  AgeId, AilmentId,
  AllegianceId, ArchetypeId,
  AttributeId,
  BeliefId, BuildId,
  CultureId, DrugId, EyesId,
  FlawId, HairColorId, HairLengthId, HairStyleId, InjuryId, InjuryTypeId, LanguageId,
  MarkId, PermanentInjuryId,
  ProfessionId, QualityId,
  QuirkId, SexId,
  SkillId,
  SkillTypeId, SpellId, SpellTypeId, StatureId, StyleId,
  TalentId, ThreatId, ThreatTraitId,
  TierId,
  TraitId, WareId, WareTypeId, WeaponId,
  NotchId, RiskFactorId, SizeId, ThreatTypeId
} from './enums';
import {LightingId, ObscurementId} from '@grim-and-perilous/enums';

export interface Age {
  id: AgeId;
  name: string;
}

export interface Ailment {
  id: AilmentId;
  name: string;
  labels: {
    description?: string;
    resist?: string;
    effect?: string;
    critical_success?: string;
    critical_failure?: string;
    other_considerations?: string;
    duration?: string;
    tooltip?: string;
  };
}

export interface Affliction {
  id: AfflictionId;
  name: string;
  labels?: {
    description?: string;
    effect?: string;
    tooltip?: string;
  };
}

export interface Allegiance {
  id: AllegianceId;
  name: string;
  labels?: {
    description?: string;
  };
}

export interface Archetype extends HasId<ArchetypeId> {
  id: ArchetypeId;
  name: string;
  labels?: {
    description: string;
    wares?: string;
  };
  traits: TraitId[];
  professions: ProfessionId[];
  money?: number;
}

export interface Attribute extends HasId<AttributeId> {
  id: AttributeId;
  name: string;
  labels: {
    description: string;
    bonus: string;
    tooltip?: string;
  };
}

export interface Belief {
  id: BeliefId;
  name: string;
  labels: {
    description: string;
  };
}

export interface Build {
  id: BuildId;
  name: string;
}

export interface Culture {
  id: CultureId;
  name: string;
  labels: {
    description: string;
  };
}

export interface Drug {
  id: DrugId;
  name: string;
  labels: {
    description?: string;
    resist?: string;
    effect?: string;
    critical_success?: string;
    critical_failure?: string;
    other_considerations?: string;
    duration?: string;
    tooltip?: string;
  };
}

export interface Eyes {
  id: EyesId;
  name: string;
}

export interface Flaw {
  id: FlawId;
  name: string;
  labels: {
    description: string;
  };
}

export interface HairStyle {
  id: HairStyleId;
  name: string;
}

export interface HairColor {
  id: HairColorId;
  name: string;
}

export interface HairLength {
  id: HairLengthId;
  name: string;
}

export interface Injury {
  id: InjuryId;
  name: string;
  type: InjuryTypeId;
  labels?: {
    effect?: string;
  };
}

export interface InjuryType {
  id: InjuryTypeId;
  name: string;
}

export interface Language {
  id: LanguageId;
  name: string;
}

export interface Lighting {
  id: LightingId;
  name: string;
  labels: {
    effect: string;
    examples: string;
  };
}

export interface Mark {
  id: MarkId;
  name: string;
}

export interface Notch {
  id: NotchId;
  name: string;
}

export interface AdvancementScheme {
  traits?: TraitId[];
  quirks?: QuirkId[];
  bonuses?: AttributeId[];
  skills?: SkillId[];
  talents?: TalentId[];
}

export interface Obscurement {
  id: ObscurementId;
  name: string;
  labels: {
    effect: string;
    examples: string;
  };
}

export interface Profession extends HasId<ProfessionId> {
  id: ProfessionId;
  name: string;
  traits: TraitId[];
  quirks: QuirkId[];
  advancements: AdvancementScheme;
  labels?: {
    description: string;
  };
}

export interface PermanentInjury extends HasId<PermanentInjuryId> {
  id: PermanentInjuryId;
  name: string;
  labels?: {
    description: string;
    effect: string;
    tooltip?: string;
  };
}

export interface Quality {
  id: QualityId;
  name: string;
  labels: {
    effect: string;
  };
}

export interface Quirk extends HasId<QuirkId> {
  id: QuirkId;
  name: string;
  labels?: {
    description: string;
    effect: string;
    tooltip?: string;
  };
}

export interface RiskFactor {
  id: RiskFactorId;
  name: string;
  mechanics: {
    DAMAGE_THRESHOLD_BONUS: number;
  };
}

export interface Sex {
  id: SexId;
  name: string;
}

export interface Size {
  id: SizeId;
  name: string;
  mechanics: {
    FURY_DICE: number;
  };
}

export interface Skill extends HasId<SkillId> {
  id: SkillId;
  name: string;
  attribute: AttributeId;
  type: SkillTypeId;
  labels?: {
    description: string;
    difficulties: string;
    tooltip?: string;
  };
}

export interface Spell {
  id: SpellId;
  name: string;
  tier: TierId;
  type: SpellTypeId;
  labels: {
    description?: string;
    casting_time?: string;
    distance?: string;
    reagents?: string;
    effect?: string;
    critical_success?: string;
    critical_failure?: string;
    duration?: string;
    tooltip?: string;
  };
}

export interface AlchemicalArt {
  id: SpellId;
  name: string;
  tier: TierId;
  type: SpellTypeId;
  labels: {
    description?: string;
    preparation_time?: string;
    create?: string;
    effect?: string;
    critical_success?: string;
    critical_failure?: string;
    other_considerations?: string;
    tooltip?: string;
  };
}

export interface SpellType {
  id: SpellTypeId;
  name: string;
}

export interface Stature {
  id: StatureId;
  name: string;
}

export interface Style {
  id: StyleId;
  name: string;
}

export interface Talent extends HasId<TalentId> {
  id: TalentId;
  name: string;
  labels?: {
    description: string;
    effect: string;
    tooltip?: string;
  };
}

export interface ThreatType {
  id: ThreatTypeId;
  name: string;
}

export interface Tier {
  id: TierId;
  name: string;
}

export interface Threat extends HasId<ThreatId> {
  id: ThreatId;
  name: string;
  type: ThreatTypeId;
  size: SizeId;
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
}

export interface ThreatTrait extends HasId<ThreatTraitId> {
  id: ThreatTraitId;
  name: string;
  quantifiable?: boolean;
  specifiable?: boolean;
  labels?: {
    effect: string;
    tooltip?: string;
  };
}

export interface Trait extends HasId<TraitId> {
  id: TraitId;
  name: string;
  labels?: {
    description?: string;
    effect: string;
    tooltip?: string;
  };
}

export interface Ware {
  id: WareId;
  name: string;
  type: WareTypeId;
  cost: number;
  labels?: {
    description?: string;
    tooltip?: string;
  };
}

export interface Weapon {
  id: WeaponId;
  name: string;
  skills: SkillId[];
  qualities: QualityId[];
  encumbrance: number;
  price: number;
  quantifiable?: boolean;
  labels?: {
    description?: string;
    handling?: string;
    load?: string;
    ammo?: string;
    distance?: string;
    damage?: string;
    tooltip?: string;
  };
}
