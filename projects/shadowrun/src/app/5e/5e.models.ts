import { Opaque } from '@shared';
import { ATTRIBUTE_ID } from '@shadowrun/app/5e/5e.enums';

export type AttributeId = Opaque<string, 'AttributeId'>;
export type BookId = Opaque<string, 'BookId'>;
export type AwakeningId = Opaque<string, 'AwakeningId'>;
export type MetatypeId = Opaque<string, 'MetatypeId'>;
export type QualityId = Opaque<string, 'QualityId'>;
export type ShadowrunnerId = Opaque<string, 'ShadowrunnerId'>;
export type SkillId = Opaque<string, 'SkillId'>;

export interface Attribute {
  id: AttributeId;
  name: string;
}

export interface Awakening {
  id: AwakeningId;
  name: string;
  cost: number;
}

export interface Book {
  id: BookId;
  name: string;
}

export interface Metatype {
  id: MetatypeId;
  book: BookId;
  name: string;
  qualities: QualityId[];
  attributes: {
    [ATTRIBUTE_ID.BODY]: [number, number];
    [ATTRIBUTE_ID.AGILITY]: [number, number];
    [ATTRIBUTE_ID.REACTION]: [number, number];
    [ATTRIBUTE_ID.STRENGTH]: [number, number];
    [ATTRIBUTE_ID.WILLPOWER]: [number, number];
    [ATTRIBUTE_ID.LOGIC]: [number, number];
    [ATTRIBUTE_ID.INTUITION]: [number, number];
    [ATTRIBUTE_ID.CHARISMA]: [number, number];
    [ATTRIBUTE_ID.EDGE]: [number, number];
    [ATTRIBUTE_ID.ESSENCE]: [number, number];
    [ATTRIBUTE_ID.MAGIC]: [number, number];
  };
  cost: number;
}

export interface Quality {
  id: QualityId;
  name: string;
  description: string;
}

export interface Skill {
  id: SkillId;
  name: string;
}
