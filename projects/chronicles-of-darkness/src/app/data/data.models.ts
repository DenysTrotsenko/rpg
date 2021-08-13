export enum DATAFILE {
  ATTRIBUTES = 'attributes.json',
  BOOKS = 'books.json',
  CONDITIONS = 'conditions.json',
  EQUIPMENT = 'equipment.json',
  EQUIPMENT_QUALITIES = 'equipment-qualities.json',
  MERITS = 'merits.json',
  SKILLS = 'skills.json',
  TILTS = 'tilts.json',
  VIRTUES_VICES = 'virtues-vices.json'
}

export interface IBase {
  id: number;
  name: string;
}

export interface IAction extends IBase {
  dicepool: string;
  description: string;
  penalties: string;
  dramatic: string;
  failure: string;
  success: string;
  exceptional: string;
}

export interface IAttribute extends IBase {
  type: number;
}

export interface ICondition extends IBase {
  description: string;
  resolution?: string;
  beat?: string;
}

export interface IEquipmentQuality extends IBase {
  effect: string;
}

export interface IMelee {
  damage: number;
  initiative: number;
  strength: number;
  size: number;
  availability: number;
  qualities: number[];
}

export interface IRanged {
  damage: number;
  short: number;
  medium: number;
  long: number;
  clips: number;
  initiative: number;
  strength: number;
  size: number;
  availability: number;
  qualities: number[];
}

export interface IArmor {
  general: number;
  ballistic: number;
  strength: number;
  defence: number;
  speed: number;
  availability: number;
  coverage: number[];
  qualities: number[];
}

export interface ITools {
  bonus: number;
  durability: number;
  size: number;
  structure: number;
  availability: number;
  effect: string;
}

export interface IEquipment extends IBase {
  type: number;
  description: string;
  parameters: IMelee | IRanged | IArmor | ITools;
}

export interface IMerit extends IBase {
  type: number;
  maneuver: boolean;
  multiple: boolean;
  specialty: boolean;
  dots: number[];
  prerequisite?: string;
  description?: string;
  effect: string;
  drawback?: string;
  maneuvers?: number[];
  ordered?: boolean;
}

export interface ISkill extends IBase {
  type: number;
  description: string;
}

export interface ITilt extends IBase {
  type: number[];
  description: string;
  effect: string;
  causing: string;
  ending: string;
}

export interface IVirtueOrVice extends IBase {
  book: number;
  page: number;
  type: number;
  description: string;
}

export interface IData {
  attributes: IAttribute[];
  books: IBase[];
  conditions: ICondition[];
  coverage: IBase[];
  equipment: IEquipment[];
  merits: IMerit[];
  qualities: IEquipmentQuality[];
  skills: ISkill[];
  tilts: ITilt[];
  virtues: IVirtueOrVice[];
}

export interface ICharacterMeta {
  age: number;
  concept: string;
  description: string;
  portrait: string;
}

export interface ICharacter extends IBase {
  id: number;
  name: string;
  template: string;
  meta: ICharacterMeta;
  virtues: number[];
  vices: number[];
  attributes: {
    intelligence: number;
    wits: number;
    resolve: number;
    strength: number;
    dexterity: number;
    stamina: number;
    presence: number;
    manipulation: number;
    composure: number;
  };
  skills: object[];
  merits: object[];
}
