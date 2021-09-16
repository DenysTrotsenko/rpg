import { Injectable } from '@angular/core';
import {LIFESTYLE_OPTIONS, LIFESTYLES} from '@shadowrun/app/5e/5e.lifestyle';
import {
  CharacterLifestyle, CharacterSpell,
  Lifestyle,
  LifestyleOption,
  Spell,
  SpellCategory, SpellDamage, SpellDuration,
  SpellRange,
  SpellTag,
  SpellType,
  SpellView
} from '@shadowrun/app/5e/5e.models';
import {SPELL_CATEGORIES, SPELL_DAMAGE, SPELL_DURATIONS, SPELL_RANGES, SPELL_TAGS, SPELL_TYPES, SPELLS} from '@shadowrun/app/5e/5e.spells';
import {SPELL_ID} from '@shadowrun/app/5e/5e.enums';

@Injectable()
export class FifthEditionService {
  getId(): string {
    return (Date.now() + Math.random()).toString(36).replace('.', '');
  }

  getLifestylesCost(lifestyles: CharacterLifestyle[]): number {
    return lifestyles.reduce((sum, cur) => {
      const lifestyle: Lifestyle = LIFESTYLES.find(i => i.id === cur.id);
      const options: LifestyleOption[] = LIFESTYLE_OPTIONS.filter(i => (cur.options ?? []).includes(i.id));
      const month: number = lifestyle.cost + options.map(i => i.cost(lifestyle.cost)).reduce((a, b) => a + b, 0);
      return sum + (month * (cur.term ?? 0));
    }, 0);
  }

  getSpellView(cspell: CharacterSpell): SpellView {
    const spell: Spell = SPELLS.find(i => i.id === cspell.id);
    const category: SpellCategory = SPELL_CATEGORIES.find(i => spell?.category === i.id);
    const name: string = spell?.name ?? '';
    const specialty: string = cspell.specialty ?? '';
    const tags: SpellTag[] = SPELL_TAGS.filter(i => (spell.tags ?? []).includes(i.id));
    const type: SpellType = SPELL_TYPES.find(i => spell?.type === i.id);
    const range: SpellRange = SPELL_RANGES.find(i => spell?.range === i.id);
    const duration: SpellDuration = SPELL_DURATIONS.find(i => spell?.duration === i.id);
    const damage: SpellDamage = SPELL_DAMAGE.find(i => spell?.damage === i.id);
    const drain: string = `F${!!spell?.drain ? (spell.drain > 0 ? ` + ${spell.drain}` : ` - ${Math.abs(spell.drain)}`) : ''}`;
    const description: string = spell?.labels?.description;
    const tooltip: string = [
      `${name.toLocaleUpperCase()}${!!specialty ? ' [' + specialty + ']' : ''}`,
      `(${tags?.map(tag => tag.name).join(', ')})\n`,
      `Type: ${type?.labels?.alias}`,
      `Range: ${range?.alias}`,
      `Duration: ${duration?.alias}`,
      damage ? `Damage: ${damage?.alias}` : null,
      `Drain: ${drain}`,
      `\n${description}`
    ].filter(i => !!i).join('\n');

    return {
      category, name, specialty, tags, damage, type, range, duration, drain, description, tooltip
    } as SpellView;
  }
}
