import {
  BOOK_ID,
  SPELL_CATEGORY_ID,
  SPELL_DAMAGE_ID,
  SPELL_DURATION_ID, SPELL_ID,
  SPELL_KIND_ID,
  SPELL_RANGE_ID,
  SPELL_TAG_ID,
  SPELL_TYPE_ID
} from './5e.enums';
import {Spell, SpellDuration, SpellRange, SpellTag, SpellType} from './5e.models';

export const SPELL_CATEGORIES = [
  {
    id: SPELL_CATEGORY_ID.COMBAT,
    name: 'Combat',
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_CATEGORY_ID.DETECTION,
    name: 'Detection',
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_CATEGORY_ID.HEALTH,
    name: 'Health',
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_CATEGORY_ID.ILLUSION,
    name: 'Illusion',
    labels: {
      description: 'No matter how realistic they are, illusions cannot directly cause physical harm. They can cause distractions, loss of balance or orientation, and even symptoms like nausea or pain. All such effects vanish, though, as soon as the magician drops the illusion. Illusions can certainly cause harm by manipulating the senses so a victim walks into traffic or off a high building, for example, but they cannot directly cause damage.\nMana-based Illusion spells affect the mind and are ineffective against technological viewing systems like cameras. Mana illusions are resisted by Logic + Willpower. Some mana illusions affect the target’s senses directly; others affect the senses of anyone perceiving the subject of the spell (though you’re never affected by your own illusion spell). Though mana-based illusions can be created on the astral plane, their magical auras give them away as illusions to anyone who makes a successful Assensing Test — illusions can’t fool Assensing and cannot be used to disguise or create auras.\nPhysical illusion spells create actual images or alter physical properties, such as light or sound. Physical illusions can be used on both living and technological systems. They are resisted by Intuition + Logic; non-living devices resist with their Object Resistance. The magician must generate more hits than the observer for the illusion to be considered real. If the spell is not completely resisted, the target is fully affected by the illusion.'
    }
  },
  {
    id: SPELL_CATEGORY_ID.MANIPULATION,
    name: 'Manipulation',
    labels: {
      description: ''
    }
  }
];

export const SPELL_DAMAGE = [
  { id: SPELL_DAMAGE_ID.PHYSICAL, name: 'Physical', alias: 'P' },
  { id: SPELL_DAMAGE_ID.STUN, name: 'Stun', alias: 'S' }
];

export const SPELL_DURATIONS: SpellDuration[] = [
  { id: SPELL_DURATION_ID.INSTANTANEOUS, name: 'Instantaneous', alias: 'I' },
  { id: SPELL_DURATION_ID.SUSTAINED, name: 'Sustained', alias: 'S' },
  { id: SPELL_DURATION_ID.PERMANENT, name: 'Permanent', alias: 'P' },
];

export const SPELL_KINDS = [
  { id: SPELL_KIND_ID.SPELL, name: 'Spell' },
  { id: SPELL_KIND_ID.RITUAL, name: 'Ritual' },
  { id: SPELL_KIND_ID.PREPARATION, name: 'Preparation' },
  { id: SPELL_KIND_ID.FETISH_SPELL, name: 'Fetish Spell' },
  { id: SPELL_KIND_ID.FETISH_RITUAL, name: 'Fetish Ritual' }
];

export const SPELL_RANGES: SpellRange[] = [
  { id: SPELL_RANGE_ID.TOUCH, name: 'Touch', alias: 'T' },
  { id: SPELL_RANGE_ID.LINE_OF_SIGHT, name: 'Line of Sight', alias: 'LOS' },
  { id: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA, name: 'Line of Sight (Area)', alias: 'LOS(A)' }
];

export const SPELL_TAGS: SpellTag[] = [
  {
    id: SPELL_TAG_ID.DIRECT,
    name: 'Direct',
    labels: {
      description: 'When your direct combat spell is successfully cast, it inflicts a number of boxes of damage equal to your net hits on the opposed test. The opposed test generally pits your Spellcasting + Magic [Force] against either Body (for physical spells) or Willpower (for mana spells). The target does not get to resist the damage, only the Spellcasting test.'
    }
  },
  {
    id: SPELL_TAG_ID.INDIRECT,
    name: 'Indirect',
    labels: {
      description: 'All indirect combat spells originate near the magician’s body (most magicians use their hands or eyes, but some use their feet for “power kicks” or emanate power from the entire body for a kind of an aura-throwing effect). The spell then is launched with an Opposed Test that pits the magician’s Spellcasting + Magic [Force] versus the target’s Reaction + Intuition, kind of like shooting a gun (in this case with bullets made of acid, or fire, or something equally unpleasant to be hit by). So you don’t really need to be able to see the target — you can cast these spells blindfolded or with artificial image enhancement — as long as you’ve got a clear line of fire. The Damage Value of a successful indirect combat spell is Force + net hits, with an AP equal to –(Force). Damage from an indirect combat spell is resisted with Body + Armor (adjusted for the spell’s AP). Area indirect spells travel from the magician to the point of detonation and then go boom. The test is like that for grenades (p. 181): a Spellcasting + Magic [Force] (3) Test with scatter of 2D6 meters. Unlike grenades, you get to add your net hits on this test to the Damage Value of the spell, but only if you beat the threshold; otherwise the spell still detonates, but the hits are used to reduce scatter by one meter per hit.'
    }
  },
  {
    id: SPELL_TAG_ID.ELEMENTAL,
    name: 'Elemental',
    labels: {
      description: 'These spells cause extra damage (Special Damage Types, p. 170). The specific type is listed in the spell description.'
    }
  },
  {
    id: SPELL_TAG_ID.ACTIVE,
    name: 'Active',
    labels: {
      description: 'Active detection spells involve an Opposed Test between the caster’s Spellcasting + Magic [Force] and either Willpower + Logic (+ Counterspelling if available) [Mental] for living things with auras, (Force x 2) for magical objects, or the object resistance for mundane objects (p. 295). Counterspelling may be used to defend against active detection spells, even if the target is unaware of them being cast (for example, if they walk within range of an active Detect Enemies spell). When a spell affects multiple targets, either because it has an area effect or because it is sustained and may be encountered by multiple people, you should only make a single Spellcasting Test. Every potential target then makes an individual Spell Resistance Test and compares their result to yours. New targets may be detected as they enter the range of the spell, and they must make a Spell Resistance Test against your original Spellcasting Test.'
    }
  },
  {
    id: SPELL_TAG_ID.PASSIVE,
    name: 'Passive',
    labels: {
      description: 'A passive sense is simply “on” and feeds sensory input to the subject’s brain like other senses—no interpretation necessary. While the spell is sustained, Per- ception Tests using this sense have a limit equal to the net successes from casting of the spell instead of the subject’s Mental limit. Counterspelling cannot be used to defend against a passive sense, but once an opposing spellcaster realizes there is an active sustained spell, she can try dispelling it (see Dispelling, p. 295).'
    }
  },
  {
    id: SPELL_TAG_ID.DIRECTIONAL,
    name: 'Directional',
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_TAG_ID.AREA,
    name: 'Area',
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_TAG_ID.EXTENDED_AREA,
    name: 'Extended Area',
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_TAG_ID.PSYCHIC,
    name: 'Psychic',
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_TAG_ID.ESSENCE,
    name: 'Essence',
    labels: {
      description: 'Low-Essence characters are more difficult to affect with some health spells. It’s hard to put the body back into its natural state when that state has been unnaturally altered. In game terms, this means you take a dice pool modifier equal to the target’s actual Essence minus his maximum Essence (which will turn out to be 0 or a negative number), rounded up.'
    }
  },
  {
    id: SPELL_TAG_ID.OBVIOUS,
    name: 'Obvious',
    labels: {
      description: 'illusions are used solely for entertainment and cannot fool subjects into believing they are real.'
    }
  },
  {
    id: SPELL_TAG_ID.REALISTIC,
    name: 'Realistic',
    labels: {
      description: 'Illusions seem completely real.'
    }
  },
  {
    id: SPELL_TAG_ID.SINGLE_SENSE,
    name: 'Single-Sense',
    labels: {
      description: 'illusions affect only one sense.'
    }
  },
  {
    id: SPELL_TAG_ID.MULTI_SENSE,
    name: 'Multi-Sense',
    labels: {
      description: 'Illusions affect all senses.'
    }
  },
  {
    id: SPELL_TAG_ID.DAMAGING,
    name: 'Damaging',
    labels: {
      description: 'Manipulation spells that cause damage have a Damage Value equal to their Force (unaltered by hits on the Spellcasting test) and 0 AP. The damage is resisted with Body + Armor.'
    }
  },
  {
    id: SPELL_TAG_ID.ENVIRONMENTAL,
    name: 'Environmental',
    labels: {
      description: 'These spells don’t really have a target, and they don’t really affect targets directly. They just affect an area.'
    }
  },
  {
    id: SPELL_TAG_ID.PHYSICAL,
    name: 'Physical',
    labels: {
      description: 'These spells affect physical forms and are usually defended against with a living target’s Body + Strength or an inanimate object’s Object Resistance dice pool.'
    }
  },
  {
    id: SPELL_TAG_ID.MENTAL,
    name: 'Mental',
    labels: {
      description: 'Targets resist these spells with Logic + Willpower. Keep track of your net hits, as they determine how long you can sustain the spell. While the spell is sustained, the target may take a Complex Action on their turn to resist by making a Logic + Willpower Test with a dice pool penalty equal to the spell’s Force; every hit the target gets reduces the caster’s net hits by 1. The one being controlled can take this action even if they wouldn’t get an action because of the spell. The spell ends when your net hits are reduced to zero. A victim of mental manipulation spell may roll to notice the magical effect according to the usual rules for Perceiving Magic (p. 280). Some of the less subtle mental spells (Control Actions) are pretty obvious, but more subtle spells (like Control Thoughts) can be pretty insidious.'
    }
  }
];

export const SPELL_TYPES: SpellType[] = [
  { id: SPELL_TYPE_ID.PHYSICAL, name: 'Physical', alias: 'P' },
  { id: SPELL_TYPE_ID.MANA, name: 'Mana', alias: 'M' }
];

export const SPELLS: Spell[] = [
  {
    id: SPELL_ID.ACID_STREAM,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Acid Stream',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -3,
    specialty: false,
    labels: {
      description: 'This spell create a powerful corrosive that sprays the target, causing terrible burns and eating away organic and metallic material—treat it as Acid damage (p. 170), with appropriate effects on the affected area and any objects therein. The acid quickly evaporates, but the damage it inflicts remains. Acid Stream is a single-target spell.'
    }
  },
  {
    id: SPELL_ID.TOXIC_WAVE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Toxic Wave',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -1,
    specialty: false,
    labels: {
      description: 'This spell create a powerful corrosive that sprays the target, causing terrible burns and eating away organic and metallic material—treat it as Acid damage (p. 170), with appropriate effects on the affected area and any objects therein. The acid quickly evaporates, but the damage it inflicts remains. Toxic Wave is an area spell.'
    }
  },
  {
    id: SPELL_ID.PUNCH,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Punch',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.TOUCH,
    damage: SPELL_DAMAGE_ID.STUN,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -6,
    specialty: false,
    labels: {
      description: 'This spell smack the target with invisible psychokinetic force, similar to a bruising punch, that inflicts Stun damage. Punch requires you to touch the target.'
    }
  },
  {
    id: SPELL_ID.CLOUT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Clout',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -3,
    specialty: false,
    labels: {
      description: 'This spell smack the target with invisible psychokinetic force, similar to a bruising punch, that inflicts Stun damage. Clout affects a single target.'
    }
  },
  {
    id: SPELL_ID.BLAST,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Blast',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: 0,
    specialty: false,
    labels: {
      description: 'This spell smack the targets with invisible psychokinetic force, similar to a bruising punch, that inflicts Stun damage. Blast is an area spell.'
    }
  },
  {
    id: SPELL_ID.DEATH_TOUCH,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Death Touch',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.DIRECT],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -6,
    specialty: false,
    labels: {
      description: 'Death Touch channel destructive magical power into the target, doing Physical damage. The damage inflicted is similar to massive cellular die off from radiation or necrotizing fasciitis, but without the continuing effects. But still, ick. Since they are mana spells, spells in this group only affect living and magical targets and are resisted with Willpower. Death Touch requires the magician to touch the target.'
    }
  },
  {
    id: SPELL_ID.MANABOLT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Manabolt',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.DIRECT],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -3,
    specialty: false,
    labels: {
      description: 'Manabolt channel destructive magical power into the target, doing Physical damage. The damage inflicted is similar to massive cellular die off from radiation or necrotizing fasciitis, but without the continuing effects. But still, ick. Since they are mana spells, spells in this group only affect living and magical targets and are resisted with Willpower. Manabolt affects a single target.'
    }
  },
  {
    id: SPELL_ID.MANABALL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Manaball',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.DIRECT],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: 0,
    specialty: false,
    labels: {
      description: 'Manaball channel destructive magical power into the target, doing Physical damage. The damage inflicted is similar to massive cellular die off from radiation or necrotizing fasciitis, but without the continuing effects. But still, ick. Since they are mana spells, spells in this group only affect living and magical targets and are resisted with Willpower. Manaball is an area-effect spell.'
    }
  },
  {
    id: SPELL_ID.FLAMETHROWER,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Flamethrower',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.FIREBALL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Fireball',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.LIGHTNING_BOLT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Lightning Bolt',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.BALL_LIGHTNING,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Ball Lightning',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.SHATTER,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Shatter',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.DIRECT],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.TOUCH,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -6,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.POWERBOLT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'PowerBolt',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.DIRECT],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.POWERBALL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'PowerBall',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.DIRECT],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: 0,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.KNOCKOUT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Knockout',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.DIRECT],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    damage: SPELL_DAMAGE_ID.STUN,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -6,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.STUNBOLT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'StunBolt',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.DIRECT],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    damage: SPELL_DAMAGE_ID.STUN,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.STUNBALL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'StunBall',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.DIRECT],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    damage: SPELL_DAMAGE_ID.STUN,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: 0,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.ANALYZE_DEVICE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Analyze Device',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.DIRECTIONAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.ANALYZE_MAGIC,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Analyze Magic',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.DIRECTIONAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.ANALYZE_TRUTH,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Analyze Truth',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.DIRECTIONAL],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.CLAIRAUDIENCE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Clairaudience',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.PASSIVE, SPELL_TAG_ID.DIRECTIONAL],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.CLAIRVOYANCE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Clairvoyance',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.PASSIVE, SPELL_TAG_ID.DIRECTIONAL],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.COMBAT_SENSE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Combat Sense',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.PASSIVE, SPELL_TAG_ID.PSYCHIC],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: 0,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DETECT_ENEMIES,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detect Enemies',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DETECT_ENEMIES_EXTENDED,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detect Enemies, Extended',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.EXTENDED_AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: 0,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DETECT_INDIVIDUAL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detect Individual',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DETECT_LIFE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detect Life',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DETECT_LIFE_EXTENDED,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detect Life, Extended',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.EXTENDED_AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DETECT_LIFE_FORM,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detect [Life Form]',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: true,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DETECT_LIFE_FORM_EXTENDED,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detect [Life Form], Extended',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.EXTENDED_AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: 0,
    specialty: true,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DETECT_MAGIC,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detect Magic',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DETECT_MAGIC_EXTENDED,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detect Magic, Extended',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.EXTENDED_AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: 0,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DETECT_OBJECT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detect Object',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: true,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.MINDLINK,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'MindLink',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.PSYCHIC],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.MIND_PROBE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Mind Probe',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.DIRECTIONAL],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: 0,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.ANTIDOTE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Antidote',
    category: SPELL_CATEGORY_ID.HEALTH,
    tags: [],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.PERMANENT,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.CURE_DISEASE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Cure Disease',
    category: SPELL_CATEGORY_ID.HEALTH,
    tags: [SPELL_TAG_ID.ESSENCE],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.PERMANENT,
    drain: -4,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DECREASE_ATTRIBUTE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Decrease [Attribute]',
    category: SPELL_CATEGORY_ID.HEALTH,
    tags: [SPELL_TAG_ID.ESSENCE],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: true,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.DETOX,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detox',
    category: SPELL_CATEGORY_ID.HEALTH,
    tags: [],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.PERMANENT,
    drain: -6,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.HEAL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Heal',
    category: SPELL_CATEGORY_ID.HEALTH,
    tags: [SPELL_TAG_ID.ESSENCE],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.PERMANENT,
    drain: -4,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.INCREASE_ATTRIBUTE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Increase [Attribute]',
    category: SPELL_CATEGORY_ID.HEALTH,
    tags: [SPELL_TAG_ID.ESSENCE],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -3,
    specialty: true,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.INCREASE_REFLEXES,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Increase Reflexes',
    category: SPELL_CATEGORY_ID.HEALTH,
    tags: [SPELL_TAG_ID.ESSENCE],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: 0,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.OXYGENATE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Oxygenate',
    category: SPELL_CATEGORY_ID.HEALTH,
    tags: [],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -5,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.PROPHYLAXIS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Prophylaxis',
    category: SPELL_CATEGORY_ID.HEALTH,
    tags: [],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -4,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.RESIST_PAIN,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Resist Pain',
    category: SPELL_CATEGORY_ID.HEALTH,
    tags: [],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.PERMANENT,
    drain: -4,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.STABILIZE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Stabilize',
    category: SPELL_CATEGORY_ID.HEALTH,
    tags: [],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.PERMANENT,
    drain: -4,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.AGONY,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Agony',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.SINGLE_SENSE],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -4,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.MASS_AGONY,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Mass Agony',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.SINGLE_SENSE],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.BUGS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Bugs',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.MULTI_SENSE],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.SWARM,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Swarm',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.MULTI_SENSE],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.CONFUSION,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Confusion',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.MULTI_SENSE],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.MASS_CONFUSION,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Mass Confusion',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.MULTI_SENSE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.CHAOS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Chaos',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.MULTI_SENSE],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.CHAOTIC_WORLD,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Chaotic World',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.MULTI_SENSE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: 0,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.ENTERTAINMENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Entertainment',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.OBVIOUS, SPELL_TAG_ID.MULTI_SENSE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.TRID_ENTERTAINMENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Trid Entertainment',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.OBVIOUS, SPELL_TAG_ID.MULTI_SENSE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.INVISIBILITY,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Invisibility',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.SINGLE_SENSE],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.IMPROVED_INVISIBILITY,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Improved Invisibility',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.SINGLE_SENSE],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.MASK,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Mask',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.MULTI_SENSE],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.PHYSICAL_MASK,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Physical Mask',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.MULTI_SENSE],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.PHANTASM,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Phantasm',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.MULTI_SENSE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.TRID_PHANTASM,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Trid Phantasm',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.MULTI_SENSE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: 0,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.HUSH,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Hush',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.SINGLE_SENSE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.SILENCE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Silence',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.SINGLE_SENSE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.STEALTH,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Stealth',
    category: SPELL_CATEGORY_ID.ILLUSION,
    tags: [SPELL_TAG_ID.REALISTIC, SPELL_TAG_ID.SINGLE_SENSE],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.ANIMATE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Animate',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.PHYSICAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.MASS_ANIMATE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Mass Animate',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.PHYSICAL, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: 1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Armor',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.PHYSICAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.CONTROL_ACTIONS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Control Actions',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.MENTAL],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.MOB_CONTROL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Mob Control',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.MENTAL, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: 1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.CONTROL_THOUGHTS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Control Thoughts',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.MENTAL],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.MOB_MIND,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Mob Mind',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.MENTAL, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: 1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.FLING,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Fling',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.PHYSICAL, SPELL_TAG_ID.DAMAGING],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.ICE_SHEET,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Ice Sheet',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.ENVIRONMENTAL, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: 0,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.IGNITE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Ignite',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.PHYSICAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.PERMANENT,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.INFLUENCE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Influence',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.MENTAL],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.PERMANENT,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.LEVITATE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Levitate',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.PHYSICAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.LIGHT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Light',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.ENVIRONMENTAL, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -4,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.MAGIC_FINGERS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Magic Fingers',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.PHYSICAL],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.MANA_BARRIER,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Mana Barrier',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.ENVIRONMENTAL, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.MANA,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.PHYSICAL_BARRIER,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Physical Barrier',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.ENVIRONMENTAL, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -1,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.POLTERGEIST,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Poltergeist',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.ENVIRONMENTAL, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: false,
    labels: {
      description: ''
    }
  },
  {
    id: SPELL_ID.SHADOW,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Shadow',
    category: SPELL_CATEGORY_ID.MANIPULATION,
    tags: [SPELL_TAG_ID.ENVIRONMENTAL, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -3,
    specialty: false,
    labels: {
      description: ''
    }
  },
];
