import {AttributeId, Knowledge, Skill, SkillCategory, SkillCategoryId, SkillId} from './5e.models';
import {ATTRIBUTE_ID, SKILL_CATEGORY_ID, SKILL_ID} from './5e.enums';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: SKILL_CATEGORY_ID.ACADEMIC as SkillCategoryId,
    name: 'Academic',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId
  },
  {
    id: SKILL_CATEGORY_ID.INTERESTS as SkillCategoryId,
    name: 'Interests',
    attribute: ATTRIBUTE_ID.INTUITION as AttributeId
  },
  {
    id: SKILL_CATEGORY_ID.PROFESSIONAL as SkillCategoryId,
    name: 'Professional',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId
  },
  {
    id: SKILL_CATEGORY_ID.STREET as SkillCategoryId,
    name: 'Street',
    attribute: ATTRIBUTE_ID.INTUITION as AttributeId
  },
  {
    id: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId,
    name: 'Language',
    attribute: ATTRIBUTE_ID.INTUITION as AttributeId
  },
];

export const ACTIVE_SKILLS: Skill[] = [
  {
    id: SKILL_ID.ARCHERY as SkillId,
    name: 'Archery',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.AUTOMATICS as SkillId,
    name: 'Automatics',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.BLADES as SkillId,
    name: 'Blades',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.CLUBS as SkillId,
    name: 'Clubs',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.EXOTIC_RANGED_WEAPON as SkillId,
    name: 'Exotic Ranged Weapon',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.HEAVY_WEAPONS as SkillId,
    name: 'Heavy Weapons',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.LONGARMS as SkillId,
    name: 'Longarms',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.PISTOLS as SkillId,
    name: 'Pistols',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.THROWING_WEAPONS as SkillId,
    name: 'Archery',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.UNARMED_COMBAT as SkillId,
    name: 'Archery',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.DISGUISE as SkillId,
    name: 'Disguise',
    attribute: ATTRIBUTE_ID.INTUITION as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.DIVING as SkillId,
    name: 'Diving',
    attribute: ATTRIBUTE_ID.BODY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ESCAPE_ARTIST as SkillId,
    name: 'Escape Artist',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.FREE_FALL as SkillId,
    name: 'Free-Fall',
    attribute: ATTRIBUTE_ID.BODY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.GYMNASTICS as SkillId,
    name: 'Gymnastics',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.PALMING as SkillId,
    name: 'Palming',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.PERCEPTION as SkillId,
    name: 'Perception',
    attribute: ATTRIBUTE_ID.INTUITION as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.RUNNING as SkillId,
    name: 'Running',
    attribute: ATTRIBUTE_ID.STRENGTH as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.SNEAKING as SkillId,
    name: 'Sneaking',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.SURVIVAL as SkillId,
    name: 'Survival',
    attribute: ATTRIBUTE_ID.WILLPOWER as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.SWIMMING as SkillId,
    name: 'Swimming',
    attribute: ATTRIBUTE_ID.STRENGTH as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.TRACKING as SkillId,
    name: 'Tracking',
    attribute: ATTRIBUTE_ID.INTUITION as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.CON as SkillId,
    name: 'Con',
    attribute: ATTRIBUTE_ID.CHARISMA as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ETIQUETTE as SkillId,
    name: 'Etiquette',
    attribute: ATTRIBUTE_ID.CHARISMA as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.IMPERSONATION as SkillId,
    name: 'Impersonation',
    attribute: ATTRIBUTE_ID.CHARISMA as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.INSTRUCTION as SkillId,
    name: 'Instruction',
    attribute: ATTRIBUTE_ID.CHARISMA as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.INTIMIDATION as SkillId,
    name: 'Intimidation',
    attribute: ATTRIBUTE_ID.CHARISMA as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.LEADERSHIP as SkillId,
    name: 'Leadership',
    attribute: ATTRIBUTE_ID.CHARISMA as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.NEGOTIATION as SkillId,
    name: 'Negotiation',
    attribute: ATTRIBUTE_ID.CHARISMA as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.PERFORMANCE as SkillId,
    name: 'Performance',
    attribute: ATTRIBUTE_ID.CHARISMA as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ALCHEMY as SkillId,
    name: 'Alchemy',
    attribute: ATTRIBUTE_ID.MAGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.ARCANA as SkillId,
    name: 'Arcana',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.ARTIFICING as SkillId,
    name: 'Artificing',
    attribute: ATTRIBUTE_ID.MAGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.ASSENSING as SkillId,
    name: 'Assensing',
    attribute: ATTRIBUTE_ID.INTUITION as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.ASTRAL_COMBAT as SkillId,
    name: 'Astral Combat',
    attribute: ATTRIBUTE_ID.WILLPOWER as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.BANISHING as SkillId,
    name: 'Banishing',
    attribute: ATTRIBUTE_ID.MAGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.BINDING as SkillId,
    name: 'Binding',
    attribute: ATTRIBUTE_ID.MAGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.COUNTERSPELLING as SkillId,
    name: 'Counterspelling',
    attribute: ATTRIBUTE_ID.MAGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.DISENCHANTING as SkillId,
    name: 'Disenchanting',
    attribute: ATTRIBUTE_ID.MAGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.RITUAL_SPELLCASTING as SkillId,
    name: 'Ritual Spellcasting',
    attribute: ATTRIBUTE_ID.MAGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.SPELLCASTING as SkillId,
    name: 'Spellcasting',
    attribute: ATTRIBUTE_ID.MAGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.SUMMONING as SkillId,
    name: 'Summoning',
    attribute: ATTRIBUTE_ID.MAGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.COMPILING as SkillId,
    name: 'Compiling',
    attribute: ATTRIBUTE_ID.RESONANCE as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.DECOMPILING as SkillId,
    name: 'Decompiling',
    attribute: ATTRIBUTE_ID.RESONANCE as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.REGISTERING as SkillId,
    name: 'Registering',
    attribute: ATTRIBUTE_ID.RESONANCE as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.AERONAUTICS_MECHANIC as SkillId,
    name: 'Aeronautics Mechanic',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.ANIMAL_HANDLING as SkillId,
    name: 'Animal Handling',
    attribute: ATTRIBUTE_ID.CHARISMA as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ARMORER as SkillId,
    name: 'Armorer',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ARTISAN as SkillId,
    name: 'Artisan',
    attribute: ATTRIBUTE_ID.INTUITION as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.AUTOMOTIVE_MECHANIC as SkillId,
    name: 'Automotive Mechanic',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.BIOTECHNOLOGY as SkillId,
    name: 'Biotechnology',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.CHEMISTRY as SkillId,
    name: 'Chemistry',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.COMPUTER as SkillId,
    name: 'Computer',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.CYBERCOMBAT as SkillId,
    name: 'Cybercombat',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.CYBERTECHNOLOGY as SkillId,
    name: 'Cybertechnology',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.DEMOLITIONS as SkillId,
    name: 'Demolitions',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ELECTRONIC_WARFARE as SkillId,
    name: 'Electronic Warfare',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.FIRST_AID as SkillId,
    name: 'First Aid',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.FORGERY as SkillId,
    name: 'Forgery',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.HACKING as SkillId,
    name: 'Hacking',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.HARDWARE as SkillId,
    name: 'Hardware',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.INDUSTRIAL_MECHANIC as SkillId,
    name: 'Industrial Mechanic',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.LOCKSMITH as SkillId,
    name: 'Locksmith',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.MEDICINE as SkillId,
    name: 'Medicine',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.NAUTICAL_MECHANIC as SkillId,
    name: 'Nautical Mechanic',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.NAVIGATION as SkillId,
    name: 'Navigation',
    attribute: ATTRIBUTE_ID.INTUITION as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.SOFTWARE as SkillId,
    name: 'Software',
    attribute: ATTRIBUTE_ID.LOGIC as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.GUNNERY as SkillId,
    name: 'Gunnery',
    attribute: ATTRIBUTE_ID.AGILITY as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_AEROSPACE as SkillId,
    name: 'Pilot Aerospace',
    attribute: ATTRIBUTE_ID.REACTION as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_AIRCRAFT as SkillId,
    name: 'Pilot Aircraft',
    attribute: ATTRIBUTE_ID.REACTION as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_WALKER as SkillId,
    name: 'Pilot Walker',
    attribute: ATTRIBUTE_ID.REACTION as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_EXOTIC_VEHICLE as SkillId,
    name: 'Ritual Spellcasting',
    attribute: ATTRIBUTE_ID.REACTION as AttributeId,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_GROUND_CRAFT as SkillId,
    name: 'Pilot Ground Craft',
    attribute: ATTRIBUTE_ID.REACTION as AttributeId,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_WATERCRAFT as SkillId,
    name: 'Pilot Watercraft',
    attribute: ATTRIBUTE_ID.REACTION as AttributeId,
    default: true,
    specializations: []
  }
];

export const KNOWLEDGE: Knowledge[] = [
  { category: SKILL_CATEGORY_ID.ACADEMIC as SkillCategoryId, name: 'Biology' },
  { category: SKILL_CATEGORY_ID.ACADEMIC as SkillCategoryId, name: 'Medicine' },
  { category: SKILL_CATEGORY_ID.ACADEMIC as SkillCategoryId, name: 'Magic Theory' },
  { category: SKILL_CATEGORY_ID.ACADEMIC as SkillCategoryId, name: 'Politics' },
  { category: SKILL_CATEGORY_ID.ACADEMIC as SkillCategoryId, name: 'Philosophy' },
  { category: SKILL_CATEGORY_ID.ACADEMIC as SkillCategoryId, name: 'Literature' },
  { category: SKILL_CATEGORY_ID.ACADEMIC as SkillCategoryId, name: 'History' },
  { category: SKILL_CATEGORY_ID.ACADEMIC as SkillCategoryId, name: 'Music' },
  { category: SKILL_CATEGORY_ID.ACADEMIC as SkillCategoryId, name: 'Parabotany' },
  { category: SKILL_CATEGORY_ID.ACADEMIC as SkillCategoryId, name: 'Parazoology' },
  { category: SKILL_CATEGORY_ID.INTERESTS as SkillCategoryId, name: 'Current Simsense movies' },
  { category: SKILL_CATEGORY_ID.INTERESTS as SkillCategoryId, name: 'popular trideo shows' },
  { category: SKILL_CATEGORY_ID.INTERESTS as SkillCategoryId, name: '20th Century trivia' },
  { category: SKILL_CATEGORY_ID.INTERESTS as SkillCategoryId, name: 'Elven Wine' },
  { category: SKILL_CATEGORY_ID.INTERESTS as SkillCategoryId, name: 'Urban Brawl' },
  { category: SKILL_CATEGORY_ID.INTERESTS as SkillCategoryId, name: 'Combat Biking' },
  { category: SKILL_CATEGORY_ID.INTERESTS as SkillCategoryId, name: 'Pop music' },
  { category: SKILL_CATEGORY_ID.PROFESSIONAL as SkillCategoryId, name: 'Journalism' },
  { category: SKILL_CATEGORY_ID.PROFESSIONAL as SkillCategoryId, name: 'Business' },
  { category: SKILL_CATEGORY_ID.PROFESSIONAL as SkillCategoryId, name: 'Law' },
  { category: SKILL_CATEGORY_ID.PROFESSIONAL as SkillCategoryId, name: 'Military Service' },
  { category: SKILL_CATEGORY_ID.STREET as SkillCategoryId, name: 'Gang Identification' },
  { category: SKILL_CATEGORY_ID.STREET as SkillCategoryId, name: 'Criminal Organizations' },
  { category: SKILL_CATEGORY_ID.STREET as SkillCategoryId, name: 'Smuggling Routes' },
  { category: SKILL_CATEGORY_ID.STREET as SkillCategoryId, name: 'Fences' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'Sperethiel' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'Or’zet' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'English' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'Japanese' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'Mandarin' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'Russian' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'French' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'Italian' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'German' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'Aztlaner Spanish' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'Spanish' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'Lakota' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'Dakota' },
  { category: SKILL_CATEGORY_ID.LANGUAGE as SkillCategoryId, name: 'Diné (Navajo)' }
];
