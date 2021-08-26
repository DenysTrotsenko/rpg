import { Injectable } from '@angular/core';
import { Attribute, Awakening, Book, Knowledge, Metatype, Quality, Skill, SkillCategory } from './5e.models';
import { ATTRIBUTES } from './5e.attributes';
import { AWAKENINGS } from './5e.awakenings';
import { BOOKS } from './5e.books';
import { METATYPES } from './5e.metatypes';
import { NEGATIVE_QUALITIES, POSITIVE_QUALITIES } from './5e.qualities';
import { ACTIVE_SKILLS, KNOWLEDGE, SKILL_CATEGORIES } from './5e.skills';

@Injectable()
export class FifthEditionService {
  readonly attributes: Attribute[] = ATTRIBUTES;
  readonly awakenings: Awakening[] = AWAKENINGS;
  readonly books: Book[] = BOOKS;
  readonly knowledge: Knowledge[] = KNOWLEDGE;
  readonly metatypes: Metatype[] = METATYPES;
  readonly qualities: Quality[] = [...POSITIVE_QUALITIES, ...NEGATIVE_QUALITIES];
  readonly skillCategories: SkillCategory[] = SKILL_CATEGORIES;
  readonly skills: Skill[] = ACTIVE_SKILLS;
}
