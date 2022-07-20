import { Injectable } from '@angular/core';
import {
  Attribute,
  AttributeView,
  CharacterAttribute,
  CharacterComplexForm,
  CharacterGear,
  CharacterGeneral,
  CharacterKnowledge,
  CharacterLifestyle,
  CharacterQuality, CharacterSkill, CharacterSpell,
  ComplexForm,
  ComplexFormDuration,
  ComplexFormTarget,
  ComplexFormView,
  Gear,
  GearView,
  GeneralView,
  KnowledgeView,
  Lifestyle,
  LifestyleOption, Power, Quality, QualityView, Skill,
  SkillCategory, SkillView, Spell, SpellCategory, SpellDamage, SpellDuration, SpellRange, SpellTag, SpellType, SpellView, Spirit, SpiritView
} from '@shadowrun-5e/models';
import {LIFESTYLE_OPTIONS, LIFESTYLES} from '@shadowrun-5e/lifestyle';
import {ATTRIBUTES} from '@shadowrun-5e/attributes';
import {COMPLEX_FORM_DURATIONS, COMPLEX_FORM_TARGETS, COMPLEX_FORMS} from '@shadowrun-5e/complex-forms';
import {GEAR} from '@shadowrun-5e/gear';
import {METATYPES} from '@shadowrun-5e/metatypes';
import {AWAKENINGS} from '@shadowrun-5e/awakenings';
import {ACTIVE_SKILLS, SKILL_CATEGORIES} from '@shadowrun-5e/skills';
import {NEGATIVE_QUALITIES, POSITIVE_QUALITIES, RACIAL_QUALITIES} from '@shadowrun-5e/qualities';
import {SPELL_CATEGORIES, SPELL_DAMAGE, SPELL_DURATIONS, SPELL_RANGES, SPELL_TAGS, SPELL_TYPES, SPELLS} from '@shadowrun-5e/spells';
import {SPIRIT_ID} from '@shadowrun-5e/enums';
import {SPIRITS} from '@shadowrun-5e/spirits';
import {POWERS} from '@shadowrun-5e/powers';

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

  getAttributeView(value: CharacterAttribute): AttributeView {
    const attribute: Attribute = ATTRIBUTES.find(i => i.id === value.id);
    const name: string = attribute?.name ?? '';
    const rating: number = value?.rating ?? 1;
    const description: string = attribute?.labels?.description;
    const tooltip: string = [
      `${name.toLocaleUpperCase()}\n`,
      `Base: ${rating}`,
      `Bonus:`,
      `\n${description}`
    ].filter(i => !!i).join('\n');

    return { name, rating, tooltip } as AttributeView;
  }

  getComplexFormView(value: CharacterComplexForm): ComplexFormView {
    const form: ComplexForm = COMPLEX_FORMS.find(i => i.id === value.id);
    const name: string = form?.name;
    const target: ComplexFormTarget = COMPLEX_FORM_TARGETS.find(i => i.id === form.target);
    const duration: ComplexFormDuration = COMPLEX_FORM_DURATIONS.find(i => i.id === form.duration);
    const fading: string = `L${!!form?.fading ? (form.fading > 0 ? ` + ${form.fading}` : ` - ${Math.abs(form.fading)}`) : ''}`;
    const description: string = form?.labels?.description;
    const tooltip: string = [
      `${name.toLocaleUpperCase()}\n`,
      `Target: ${target?.name}`,
      `Duration: ${duration?.name}`,
      `Fading: ${fading}`,
      `\n${description}`
    ].filter(i => !!i).join('\n');

    return { name, target, duration, fading, description, tooltip } as ComplexFormView;
  }

  getGearView(value: CharacterGear): GearView {
    const item: Gear = GEAR.find(i => i.id === value.id);
    const name: string = item?.name;
    const availability: string = item?.labels?.availability ?? `${item?.formulas?.availability(value)}${item?.restricted ? 'R' : ''}${item?.forbidden ? 'F' : ''}`;
    const cost: string = item?.labels?.cost ?? `¥${item?.formulas?.cost(value)}`;
    const description: string = item?.labels?.description;
    const quantity: number = value.quantity;
    const data: string = Object
      .entries(item?.data ?? {})
      .map(i => `${i[0].split('_').map(w => w.charAt(0).toLocaleUpperCase() + w.slice(1)).join(' ')}: ${i[1]}`)
      .join('\n');
    const tooltip: string = [
      `${name}\n`,
      `${data}`,
      `${description}`,
      `Availability: ${availability}`,
      `Cost: ${cost}`,
    ].filter(i => !!i).join('\n');

    return { availability, cost, name, quantity, tooltip } as GearView;
  }

  getGeneralView(value: CharacterGeneral): GeneralView {
    const portrait: string = value?.portrait;
    const name: string = value?.name;
    const gender: string = value?.miscellaneous?.gender;
    const metatype: string = METATYPES.find(i => i.id === value?.metatype)?.name;
    const awakening: string = AWAKENINGS.find(i => i.id === value?.awakening)?.name;
    // const biography: string = value?.miscellaneous?.biography;
    // const tooltip: string = [
    //   `${name.toLocaleUpperCase()}\n`,
    //   `${description}`
    // ].filter(i => !!i).join('\n');

    return { portrait, name, gender, metatype, awakening } as GeneralView;
  }

  getKnowledgeView(value: CharacterKnowledge): KnowledgeView {
    const name: string = value?.name ?? '';
    const category: SkillCategory = SKILL_CATEGORIES.find(i => i.id === value.category);
    const attribute: Attribute = ATTRIBUTES.find(i => i.id === category.attribute);
    const rating: number = value?.rating ?? 0;
    const specializations: string = (value?.specializations ?? []).join(', ');
    const tooltip: string = [
      `${name.toLocaleUpperCase()}\n`,
      `Category: ${category.name} (${attribute.labels.alias})`,
      `Rating: ${rating}`,
      `Specializations: ${specializations}`
    ].filter(i => !!i).join('\n');

    return {
      name, category, rating, specializations, tooltip
    } as KnowledgeView;
  }

  getQualityView(value: CharacterQuality): QualityView {
    const QUALITIES = [...RACIAL_QUALITIES, ...POSITIVE_QUALITIES, ...NEGATIVE_QUALITIES];
    const quality: Quality = QUALITIES.find(i => i.id === value.id);
    const name: string = quality?.name;
    const rating: string = (quality?.ratings ?? [])[value?.rating ?? 0]?.name;
    const specialty: string = !!quality?.formulas?.SPECIALTIES
      ? quality.formulas.SPECIALTIES.find(i => i.id === value?.specialty)?.name
      : value?.specialty;
    const description: string = quality?.labels?.description;
    const tooltip: string = [
      `${name.toLocaleUpperCase()}\n`,
      `${description}`
    ].filter(i => !!i).join('\n');

    return { name, rating, specialty, description, tooltip } as QualityView;
  }

  getSkillView(value: CharacterSkill): SkillView {
    const skill: Skill = ACTIVE_SKILLS.find(i => i.id === value.id);
    const name: string = skill?.name ?? '';
    const rating: number = value?.rating ?? 0;
    const specializations: string = (value?.specializations ?? []).join(', ');
    // const description: string = skill?.labels?.description;
    const tooltip: string = [
      `${name.toLocaleUpperCase()}\n`,
      `Rating: ${rating}`,
      `Specializations: ${specializations}`,
      // `\n${description}`
    ].filter(i => !!i).join('\n');

    return { name, rating, specializations, tooltip } as SkillView;
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

  getSpiritView(id: SPIRIT_ID, category: string): SpiritView {
    const spirit: Spirit = SPIRITS.find(i => i.id === id);
    const name: string = spirit?.name ?? '';
    const skills: Skill[] = ACTIVE_SKILLS.filter(i => (spirit.skills ?? []).includes(i.id));
    const powers: Power[] = POWERS.filter(i => (spirit.powers ?? []).includes(i.id));
    // const type: SpellType = SPELL_TYPES.find(i => spell?.type === i.id);
    // const range: SpellRange = SPELL_RANGES.find(i => spell?.range === i.id);
    // const duration: SpellDuration = SPELL_DURATIONS.find(i => spell?.duration === i.id);
    // const damage: SpellDamage = SPELL_DAMAGE.find(i => spell?.damage === i.id);
    // const drain: string = `F${!!spell?.drain ? (spell.drain > 0 ? ` + ${spell.drain}` : ` - ${Math.abs(spell.drain)}`) : ''}`;
    // const description: string = spell?.labels?.description;
    const tooltip: string = [
      `${name.toLocaleUpperCase()}`,
    //   `(${tags?.map(tag => tag.name).join(', ')})\n`,
    //   `Type: ${type?.labels?.alias}`,
    //   `Range: ${range?.alias}`,
    //   `Duration: ${duration?.alias}`,
    //   damage ? `Damage: ${damage?.alias}` : null,
    //   `Drain: ${drain}`,
    //   `\n${description}`
    ].filter(i => !!i).join('\n');

    return {
      name, category, tooltip
    } as SpiritView;
  }
}
