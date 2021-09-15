import { Knowledge, Skill, SkillCategory } from './5e.models';
import { ATTRIBUTE_ID, SKILL_CATEGORY_ID, SKILL_ID } from './5e.enums';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: SKILL_CATEGORY_ID.ACADEMIC,
    name: 'Academic',
    attribute: ATTRIBUTE_ID.LOGIC
  },
  {
    id: SKILL_CATEGORY_ID.INTERESTS,
    name: 'Interests',
    attribute: ATTRIBUTE_ID.INTUITION
  },
  {
    id: SKILL_CATEGORY_ID.PROFESSIONAL,
    name: 'Professional',
    attribute: ATTRIBUTE_ID.LOGIC
  },
  {
    id: SKILL_CATEGORY_ID.STREET,
    name: 'Street',
    attribute: ATTRIBUTE_ID.INTUITION
  },
  {
    id: SKILL_CATEGORY_ID.LANGUAGE,
    name: 'Language',
    attribute: ATTRIBUTE_ID.INTUITION
  },
];

export const ACTIVE_SKILLS: Skill[] = [
  {
    id: SKILL_ID.ARCHERY,
    name: 'Archery',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.AUTOMATICS,
    name: 'Automatics',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.BLADES,
    name: 'Blades',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.CLUBS,
    name: 'Clubs',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.EXOTIC_RANGED_WEAPON,
    name: 'Exotic Ranged Weapon',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.HEAVY_WEAPONS,
    name: 'Heavy Weapons',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.LONGARMS,
    name: 'Longarms',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.PISTOLS,
    name: 'Pistols',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.THROWING_WEAPONS,
    name: 'Throwing Weapons',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.UNARMED_COMBAT,
    name: 'Unarmed Combat',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.DISGUISE,
    name: 'Disguise',
    attribute: ATTRIBUTE_ID.INTUITION,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.DIVING,
    name: 'Diving',
    attribute: ATTRIBUTE_ID.BODY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ESCAPE_ARTIST,
    name: 'Escape Artist',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.FREE_FALL,
    name: 'Free-Fall',
    attribute: ATTRIBUTE_ID.BODY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.GYMNASTICS,
    name: 'Gymnastics',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.PALMING,
    name: 'Palming',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.PERCEPTION,
    name: 'Perception',
    attribute: ATTRIBUTE_ID.INTUITION,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.RUNNING,
    name: 'Running',
    attribute: ATTRIBUTE_ID.STRENGTH,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.SNEAKING,
    name: 'Sneaking',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.SURVIVAL,
    name: 'Survival',
    attribute: ATTRIBUTE_ID.WILLPOWER,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.SWIMMING,
    name: 'Swimming',
    attribute: ATTRIBUTE_ID.STRENGTH,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.TRACKING,
    name: 'Tracking',
    attribute: ATTRIBUTE_ID.INTUITION,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.CON,
    name: 'Con',
    attribute: ATTRIBUTE_ID.CHARISMA,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ETIQUETTE,
    name: 'Etiquette',
    attribute: ATTRIBUTE_ID.CHARISMA,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.IMPERSONATION,
    name: 'Impersonation',
    attribute: ATTRIBUTE_ID.CHARISMA,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.INSTRUCTION,
    name: 'Instruction',
    attribute: ATTRIBUTE_ID.CHARISMA,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.INTIMIDATION,
    name: 'Intimidation',
    attribute: ATTRIBUTE_ID.CHARISMA,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.LEADERSHIP,
    name: 'Leadership',
    attribute: ATTRIBUTE_ID.CHARISMA,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.NEGOTIATION,
    name: 'Negotiation',
    attribute: ATTRIBUTE_ID.CHARISMA,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.PERFORMANCE,
    name: 'Performance',
    attribute: ATTRIBUTE_ID.CHARISMA,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ALCHEMY,
    name: 'Alchemy',
    attribute: ATTRIBUTE_ID.MAGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.ARCANA,
    name: 'Arcana',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.ARTIFICING,
    name: 'Artificing',
    attribute: ATTRIBUTE_ID.MAGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.ASSENSING,
    name: 'Assensing',
    attribute: ATTRIBUTE_ID.INTUITION,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.ASTRAL_COMBAT,
    name: 'Astral Combat',
    attribute: ATTRIBUTE_ID.WILLPOWER,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.BANISHING,
    name: 'Banishing',
    attribute: ATTRIBUTE_ID.MAGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.BINDING,
    name: 'Binding',
    attribute: ATTRIBUTE_ID.MAGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.COUNTERSPELLING,
    name: 'Counterspelling',
    attribute: ATTRIBUTE_ID.MAGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.DISENCHANTING,
    name: 'Disenchanting',
    attribute: ATTRIBUTE_ID.MAGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.RITUAL_SPELLCASTING,
    name: 'Ritual Spellcasting',
    attribute: ATTRIBUTE_ID.MAGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.SPELLCASTING,
    name: 'Spellcasting',
    attribute: ATTRIBUTE_ID.MAGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.SUMMONING,
    name: 'Summoning',
    attribute: ATTRIBUTE_ID.MAGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.COMPILING,
    name: 'Compiling',
    attribute: ATTRIBUTE_ID.RESONANCE,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.DECOMPILING,
    name: 'Decompiling',
    attribute: ATTRIBUTE_ID.RESONANCE,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.REGISTERING,
    name: 'Registering',
    attribute: ATTRIBUTE_ID.RESONANCE,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.AERONAUTICS_MECHANIC,
    name: 'Aeronautics Mechanic',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.ANIMAL_HANDLING,
    name: 'Animal Handling',
    attribute: ATTRIBUTE_ID.CHARISMA,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ARMORER,
    name: 'Armorer',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ARTISAN,
    name: 'Artisan',
    attribute: ATTRIBUTE_ID.INTUITION,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.AUTOMOTIVE_MECHANIC,
    name: 'Automotive Mechanic',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.BIOTECHNOLOGY,
    name: 'Biotechnology',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.CHEMISTRY,
    name: 'Chemistry',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.COMPUTER,
    name: 'Computer',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.CYBERCOMBAT,
    name: 'Cybercombat',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.CYBERTECHNOLOGY,
    name: 'Cybertechnology',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.DEMOLITIONS,
    name: 'Demolitions',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.ELECTRONIC_WARFARE,
    name: 'Electronic Warfare',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.FIRST_AID,
    name: 'First Aid',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.FORGERY,
    name: 'Forgery',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.HACKING,
    name: 'Hacking',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.HARDWARE,
    name: 'Hardware',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.INDUSTRIAL_MECHANIC,
    name: 'Industrial Mechanic',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.LOCKSMITH,
    name: 'Locksmith',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.MEDICINE,
    name: 'Medicine',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.NAUTICAL_MECHANIC,
    name: 'Nautical Mechanic',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.NAVIGATION,
    name: 'Navigation',
    attribute: ATTRIBUTE_ID.INTUITION,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.SOFTWARE,
    name: 'Software',
    attribute: ATTRIBUTE_ID.LOGIC,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.GUNNERY,
    name: 'Gunnery',
    attribute: ATTRIBUTE_ID.AGILITY,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_AEROSPACE,
    name: 'Pilot Aerospace',
    attribute: ATTRIBUTE_ID.REACTION,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_AIRCRAFT,
    name: 'Pilot Aircraft',
    attribute: ATTRIBUTE_ID.REACTION,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_WALKER,
    name: 'Pilot Walker',
    attribute: ATTRIBUTE_ID.REACTION,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_EXOTIC_VEHICLE,
    name: 'Ritual Spellcasting',
    attribute: ATTRIBUTE_ID.REACTION,
    default: false,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_GROUND_CRAFT,
    name: 'Pilot Ground Craft',
    attribute: ATTRIBUTE_ID.REACTION,
    default: true,
    specializations: []
  },
  {
    id: SKILL_ID.PILOT_WATERCRAFT,
    name: 'Pilot Watercraft',
    attribute: ATTRIBUTE_ID.REACTION,
    default: true,
    specializations: []
  }
];

export const KNOWLEDGE: Knowledge[] = [
  { category: SKILL_CATEGORY_ID.ACADEMIC, name: 'Biology' },
  { category: SKILL_CATEGORY_ID.ACADEMIC, name: 'Medicine' },
  { category: SKILL_CATEGORY_ID.ACADEMIC, name: 'Magic Theory' },
  { category: SKILL_CATEGORY_ID.ACADEMIC, name: 'Politics' },
  { category: SKILL_CATEGORY_ID.ACADEMIC, name: 'Philosophy' },
  { category: SKILL_CATEGORY_ID.ACADEMIC, name: 'Literature' },
  { category: SKILL_CATEGORY_ID.ACADEMIC, name: 'History' },
  { category: SKILL_CATEGORY_ID.ACADEMIC, name: 'Music' },
  { category: SKILL_CATEGORY_ID.ACADEMIC, name: 'Parabotany' },
  { category: SKILL_CATEGORY_ID.ACADEMIC, name: 'Parazoology' },
  { category: SKILL_CATEGORY_ID.INTERESTS, name: 'Current Simsense movies' },
  { category: SKILL_CATEGORY_ID.INTERESTS, name: 'popular trideo shows' },
  { category: SKILL_CATEGORY_ID.INTERESTS, name: '20th Century trivia' },
  { category: SKILL_CATEGORY_ID.INTERESTS, name: 'Elven Wine' },
  { category: SKILL_CATEGORY_ID.INTERESTS, name: 'Urban Brawl' },
  { category: SKILL_CATEGORY_ID.INTERESTS, name: 'Combat Biking' },
  { category: SKILL_CATEGORY_ID.INTERESTS, name: 'Pop music' },
  { category: SKILL_CATEGORY_ID.PROFESSIONAL, name: 'Journalism' },
  { category: SKILL_CATEGORY_ID.PROFESSIONAL, name: 'Business' },
  { category: SKILL_CATEGORY_ID.PROFESSIONAL, name: 'Law' },
  { category: SKILL_CATEGORY_ID.PROFESSIONAL, name: 'Military Service' },
  { category: SKILL_CATEGORY_ID.STREET, name: 'Gang Identification' },
  { category: SKILL_CATEGORY_ID.STREET, name: 'Criminal Organizations' },
  { category: SKILL_CATEGORY_ID.STREET, name: 'Smuggling Routes' },
  { category: SKILL_CATEGORY_ID.STREET, name: 'Fences' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'Sperethiel' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'Or’zet' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'English' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'Japanese' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'Mandarin' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'Russian' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'French' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'Italian' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'German' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'Aztlaner Spanish' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'Spanish' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'Lakota' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'Dakota' },
  { category: SKILL_CATEGORY_ID.LANGUAGE, name: 'Diné (Navajo)' }
];
