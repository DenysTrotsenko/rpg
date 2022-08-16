import {ArchetypeId, ProfessionId} from './enums';
import {Archetype, Profession} from './models';
import {ARCHETYPES} from './archetypes';
import {PROFESSIONS} from './professions';

export function getArchetype(id: ArchetypeId): Archetype {
  return ARCHETYPES.find(i => i.id === id);
}

export function getBonusFromAttribute(value: number): number {
  return Math.floor(value / 10);
}

export function getProfession(id: ProfessionId): Profession {
  return PROFESSIONS.find(i => i.id === id);
}
