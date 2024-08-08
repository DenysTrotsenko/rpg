import { HasBaseProperties, HasWeight, Opaque } from '@std';
import { System } from './system';

export type ActionId = Opaque<string, 'ActionId'>;
export type AvailabilityId = Opaque<string, 'AvailabilityId'>;
export type BestiaryId = Opaque<string, 'BestiaryId'>;
export type BestiaryRoleId = Opaque<string, 'BestiaryRoleId'>;
export type BestiaryFactionId = Opaque<string, 'BestiaryFactionId'>;
export type BestiaryTraitId = Opaque<string, 'BestiaryTraitId'>;
export type BestiaryTypeId = Opaque<string, 'BestiaryTypeId'>;
export type NpcId = Opaque<string, 'NpcId'>;
export type CharacteristicId = Opaque<string, 'CharacteristicId'>;
export type ConditionId = Opaque<string, 'ConditionId'>;
export type DifficultyId = Opaque<string, 'DifficultyId'>;
export type DurationId = Opaque<string, 'DurationId'>;
export type EndeavourId = Opaque<string, 'EndeavourId'>;
export type EnvironmentalTraitId = Opaque<string, 'EnvironmentalTraitId'>;
export type EventId = Opaque<string, 'EventId'>;
export type FactionId = Opaque<string, 'FactionId'>;
export type ItemId = Opaque<string, 'ItemId'>;
export type ItemModificationId = Opaque<string, 'ItemModificationId'>;
export type ItemTraitId = Opaque<string, 'ItemTraitId'>;
export type ItemTypeId = Opaque<string, 'ItemTypeId'>;
export type MalignancyId = Opaque<string, 'MalignancyId'>;
export type MutationId = Opaque<string, 'MutationId'>;
export type OriginId = Opaque<string, 'OriginId'>;
export type PerilOfTheWarpId = Opaque<string, 'PerilOfTheWarpId'>;
export type PsychicPhenomenaId = Opaque<string, 'PsychicPhenomenaId'>;
export type PsychicPowerId = Opaque<string, 'PsychicPowerId'>;
export type RangeId = Opaque<string, 'RangeId'>;
export type RoleId = Opaque<string, 'RoleId'>;
export type PsychicDisciplineId = Opaque<string, 'PsychicDisciplineId'>;
export type SizeId = Opaque<string, 'SizeId'>;
export type SkillId = Opaque<string, 'SkillId'>;
export type SpeedId = Opaque<string, 'SpeedId'>;
export type SpecialisationId = Opaque<string, 'SpecialisationId'>;
export type TalentId = Opaque<string, 'TalentId'>;
export type TargetId = Opaque<string, 'TargetId'>;

export interface Action extends HasBaseProperties<ActionId> {
  labels: {
    description: string;
    tooltip?: string;
  };
}

export interface Availability extends HasBaseProperties<AvailabilityId> {
  labels: {
    description: string;
    tooltip?: string;
  };
}

export interface Npc {
  id: NpcId;
  name: string;
  labels: {
    description: string;
  };
}

export interface BestiaryFaction extends HasBaseProperties<BestiaryFactionId> {
  labels?: {
    description?: string;
    tooltip?: string;
  };
}

export interface Bestiary extends HasBaseProperties<BestiaryId> {
  size: SizeId;
  type: BestiaryTypeId;
  faction: BestiaryFactionId;
  role: BestiaryRoleId;
  characteristics: { id: CharacteristicId; value: number; }[];
  skills: { id: SkillId; value: number; }[];
  specialisations: { id: SpecialisationId; value: number; }[];
  traits: BestiaryTraitId[];
  powers: PsychicPowerId[];
}

export interface BestiaryRole extends HasBaseProperties<BestiaryRoleId> {
  labels: {
    description: string;
    tooltip?: string;
  };
  characteristic_maximum: number;
  characteristics_total: number;
  skill_spec_advances: number;
  critical_wounds_max: number;
}

export interface BestiaryTrait extends HasBaseProperties<BestiaryTraitId> {
  labels: {
    flavor?: string;
    description: string;
    tooltip?: string;
  };
}

export interface BestiaryType extends HasBaseProperties<BestiaryTypeId> {
  labels?: {
    description?: string;
    tooltip?: string;
  };
}

export interface BonusOption {
  id?: CharacteristicId | SkillId | SpecialisationId | TalentId;
  ids?: TalentId[];
  value: number;
  /* internal, VM */
  disabled?: boolean;
  label?: string;
}

export interface Bonus {
  type: string;
  pick: number;
  options: BonusOption[];
}

export interface ItemBonusOption {
  id?: ItemId;
  ids?: ItemId[];
  qualities: ItemTraitId[];
  flaws: ItemTraitId[];
  modifications: ItemModificationId[];
  quantity: number;
  /* internal, VM */
  label?: string;
}

export interface ItemBonus {
  type: 'items';
  pick: number;
  options: ItemBonusOption[];
}

export interface Characteristic {
  id: CharacteristicId;
  name: string;
  order: number;
  labels: {
    abbreviation: string;
    description: string;
    tooltip?: string;
  };
  system?: Partial<System>;
}

export interface Condition {
  id: ConditionId;
  name: string;
  labels: {
    description: string;
    tooltip?: string;
  };
  system?: Partial<System>;
}

export interface Difficulty {
  id: DifficultyId;
  name: string;
  bonus: number;
}

export type Duration = HasBaseProperties<DurationId>;

export type Endeavour = HasBaseProperties<EndeavourId>;

export type EnvironmentalTrait = HasBaseProperties<EnvironmentalTraitId>;

export type Event = HasBaseProperties<EventId>;

export interface Faction {
  id: FactionId | string;
  name: string;
  labels: {
    description: string;
  };
  bonuses: Bonus[];
  items: ItemBonus[];
  money: number | [number, number];
}

export type AmmoType = 'round' | 'shell' | 'arrow' | 'bolt';
export type ItemCategory = 'melee' | 'ranged' | 'ammo' | 'augmetics';

export interface Item extends HasBaseProperties<ItemId> {
  category: ItemCategory;
  type: ItemTypeId;
  availability: AvailabilityId;
  encumbrance: number;
  cost: number;
  data: {
    specialisations?: SpecialisationId[];
    damage?: number;
    penetration?: number;
    rend?: number;
    range?: RangeId;
    ammoType: string;
    magazine?: number;
    magazineCost?: number;
    magazineCostMultiplier?: number;
    locations?: string[];
    armour?: number;
    traits?: ItemTraitId[];
  };
  labels: {
    description?: string;
    tooltip?: string;
  };
  system?: Partial<System>;
}

export interface ItemTrait {
  id: ItemTraitId;
  name: string;
  labels: {
    flavor?: string;
    description: string;
    tooltip?: string;
  };
  system?: Partial<System>;
}

export interface ItemModification {
  id: ItemModificationId;
  name: string;
  cost: number;
  availability: AvailabilityId;
  labels: {
    flavor?: string;
    description: string;
    tooltip?: string;
  };
  system?: Partial<System>;
}

export interface ItemType extends HasBaseProperties<ItemTypeId> {
  labels: {
    description: string;
  };
}

export interface Malignancy extends HasBaseProperties<MalignancyId>, HasWeight {
  labels: {
    flavor?: string;
    description: string;
    tooltip?: string;
  };
}

export interface Mutation extends HasBaseProperties<MutationId>, HasWeight {
  labels: {
    flavor?: string;
    description: string;
    tooltip?: string;
  };
}

export interface Origin {
  id: OriginId;
  name: string;
  labels: {
    example?: string;
    modifications?: string;
    description: string;
  };
  bonuses: Bonus[];
  items: ItemBonus[];
  money: number | [number, number];
}

export interface PerilOfTheWarp extends HasBaseProperties<PerilOfTheWarpId>, HasWeight {
  corruption: number;
  order: number;
  labels: {
    description: string;
    tooltip?: string;
  };
}

export interface PsychicPhenomena extends HasBaseProperties<PsychicPhenomenaId>, HasWeight {
  order: number;
  labels: {
    description: string;
    lingering: string;
    tooltip?: string;
  };
}

export interface PsychicDiscipline extends HasBaseProperties<PsychicDisciplineId> {
  labels: {
    description: string;
  };
}

export interface PsychicPower extends HasBaseProperties<PsychicPowerId> {
  cost: number;
  discipline: PsychicDisciplineId;
  difficulty: DifficultyId;
  duration: DurationId;
  overt: boolean;
  range: RangeId;
  target: TargetId[];
  labels: {
    description: string;
    tooltip?: string;
  };
}

export interface Range extends HasBaseProperties<RangeId> {
  order?: number;
  labels: {
    description: string;
  };
}

export interface Role extends HasBaseProperties<RoleId> {
  order?: number;
  labels: {
    description: string;
  };
  bonuses: Bonus[];
  items: ItemBonus[];
  money: number | [number, number];
}

export interface Size extends HasBaseProperties<SizeId> {
  order?: number;
  labels: {
    description: string;
  };
}

export interface Speed extends HasBaseProperties<SpeedId> {
  labels: {
    description: string;
  };
}

export interface Skill extends HasBaseProperties<SkillId> {
  characteristic: CharacteristicId;
  system?: Partial<System>;
}

export interface Specialisation extends HasBaseProperties<SpecialisationId> {
  restricted?: boolean;
  multiple?: boolean;
  skill: SkillId;
  system?: Partial<System>;
}

export interface Talent extends HasBaseProperties<TalentId> {
  labels: {
    flavor?: string;
    description: string;
    requirements: string;
    tooltip?: string;
  };
  system?: Partial<System>;
}

export type Target = HasBaseProperties<TargetId>;
