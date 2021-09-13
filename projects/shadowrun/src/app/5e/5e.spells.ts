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
import {ICON} from '@shadowrun/app/ui/ui.enums';

export const SPELL_CATEGORIES = [
  {
    id: SPELL_CATEGORY_ID.COMBAT,
    name: 'Combat',
    labels: {
      description: '',
      icon: ICON.COMBAT
    }
  },
  {
    id: SPELL_CATEGORY_ID.DETECTION,
    name: 'Detection',
    labels: {
      description: '',
      icon: ICON.DETECTION
    }
  },
  {
    id: SPELL_CATEGORY_ID.HEALTH,
    name: 'Health',
    labels: {
      description: '',
      icon: ICON.HEALTH
    }
  },
  {
    id: SPELL_CATEGORY_ID.ILLUSION,
    name: 'Illusion',
    labels: {
      description: 'No matter how realistic they are, illusions cannot directly cause physical harm. They can cause distractions, loss of balance or orientation, and even symptoms like nausea or pain. All such effects vanish, though, as soon as the magician drops the illusion. Illusions can certainly cause harm by manipulating the senses so a victim walks into traffic or off a high building, for example, but they cannot directly cause damage.\nMana-based Illusion spells affect the mind and are ineffective against technological viewing systems like cameras. Mana illusions are resisted by Logic + Willpower. Some mana illusions affect the target’s senses directly; others affect the senses of anyone perceiving the subject of the spell (though you’re never affected by your own illusion spell). Though mana-based illusions can be created on the astral plane, their magical auras give them away as illusions to anyone who makes a successful Assensing Test — illusions can’t fool Assensing and cannot be used to disguise or create auras.\nPhysical illusion spells create actual images or alter physical properties, such as light or sound. Physical illusions can be used on both living and technological systems. They are resisted by Intuition + Logic; non-living devices resist with their Object Resistance. The magician must generate more hits than the observer for the illusion to be considered real. If the spell is not completely resisted, the target is fully affected by the illusion.',
      icon: ICON.ILLUSION
    }
  },
  {
    id: SPELL_CATEGORY_ID.MANIPULATION,
    name: 'Manipulation',
    labels: {
      description: '',
      icon: ICON.MANIPULATION
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
    id: SPELL_TAG_ID.ELEMENTAL_ACID,
    name: 'Acid',
    labels: {
      description: 'Acid damage is Physical. In addition to its normal damage, it also reduces the rating of any Armor it hits by 1. If the acid isn’t removed from the target (by washing it off, or because the acid is from a spell and evaporates into mana after the spell ends), then the acid continues to burn. Each Combat Turn the base DV of the acid is decreased by 1 and damage is applied again. The acid also continues to burn through armor reducing the target’s Armor rating by 1 until the acid is removed, neutralized, or loses all its base DV. The Armor reduction should be applied to worn Armor first but could be applied to Armor accessories (+Armor items) if the gamemaster allows. At the gamemaster’s discretion, acid can also create Light Smoke conditions in an area around the target.'
    }
  },
  {
    id: SPELL_TAG_ID.ELEMENTAL_COLD,
    name: 'Cold',
    labels: {
      description: 'Cold is just the absence of heat, but it hurts when too much heat is absent, and calling cold “absent heat” doesn’t make it any less painful. Cold damage is Physical. Additionally, cold damage can make armor brittle, liquids freeze, lubricants gum up, etc. Make a simple Armor Test for anything directly hit. If the armor gets no hits, it breaks and cannot be used as armor. It can be repaired with the Building & Repairing rules, p. 145. In the case of a glitch, it’s destroyed irreparably. With a critical glitch the armor breaks irreparably in a dangerous way.'
    }
  },
  {
    id: SPELL_TAG_ID.ELEMENTAL_ELECTRICITY,
    name: 'Electricity',
    labels: {
      description: 'A wide variety of nonlethal weapons are designed to incapacitate targets with electrical shock attacks, including stun batons, tasers, cyberware shock hands, and similar electrically charged weapons. These weapons rely on a contact discharge of electricity rather than kinetic energy. Spells and critter powers such as Lightning Bolt and Energy Aura cause similar effects.\nElectrical damage is treated as Stun or Physical damage depending on the source and/or target. The Non-conductivity armor upgrade (p. 438) adds its full rating to the Armor value. The gamemaster can also decide which (if any) other factors may modify the target’s damage, such as extra conductivity for a character covered in water.\nAn Electricity attack that does damage can stun and incapacitate the target as well, though if there is no damage, there is no secondary effect at all.\nSecondary effects for characters injured by Electricity damage include a –1 dice pool penalty on all actions and Defense Tests, but not Damage Resistance Tests, for 1 Combat Turn and an immediate Initiative Score reduction of 5. The dice pool penalty and Initiative Score reduction do not accumulate with multiple attacks, but the length of the penalty is extended by 1 Combat Turn for each successful damaging attack while a character is affected. If the character’s Initiative Score is reduced to 0 or below, they lose their last action. If they have no Initiative Score left the reduction comes on the start of the next Combat Turn.\nElectronic equipment and drones can also be affected by Electricity damage. They never suffer Stun damage so Electricity damage is Physical when used against electronics and drones. They resist damage as usual and suffer a secondary effect if they take even a single box of damage.\nThe secondary effect for electronics and drones damaged by Electricity damage is shorting out or overloading. In game terms this is reflected as secondary Matrix damage equal to half the Physical damage rounded down.\nVehicles can be damaged by Electricity attacks but do not suffer any secondary effects. Specific systems of vehicles can be targeted by a Called Shots (p. 195).'
    }
  },
  {
    id: SPELL_TAG_ID.ELEMENTAL_FIRE,
    name: 'Fire',
    labels: {
      description: 'Fire damage is Physical. It can also make things catch fire. To determine if something catches fire, roll Armor Value + Fire Resistance – Fire AP (see Fire Armor Piercing Ratings table, below). The threshold on this test is the net hits rolled on the fire-based attack. If the item succeeds, it is not on fire (for now). Armor accessories are excluded from the test but the gamemaster may require them to make their own test.\n' +
        'When something catches fire, the fire has an initial Damage Value of 3. This damage is caused at the end of each Combat Turn, and the DV increases by 1 at the start of each subsequent Combat Turn until the item is completely destroyed or the fire is put out. You can fight the fire a number of ways (water, smothering, etc.), making an Agility + Intuition Test and reducing the fire’s DV by 1 for each hit. Remember, as long as the fire is burning it can ignite any nearby flammables, including furniture, vehicles, foliage, and elves.'
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
      description: 'Works in one direction, like normal sense (ex: sight).'
    }
  },
  {
    id: SPELL_TAG_ID.AREA,
    name: 'Area',
    labels: {
      description: 'The standard range of the sense a Detection spell grants is the spell’s Force x caster’s Magic in meters as a radius from the target of the spell.'
    }
  },
  {
    id: SPELL_TAG_ID.EXTENDED_AREA,
    name: 'Extended Area',
    labels: {
      description: 'Extended-range detection spells have a Force x Magic x 10 meter range. '
    }
  },
  {
    id: SPELL_TAG_ID.PSYCHIC,
    name: 'Psychic',
    labels: {
      description: 'Psychic spells providing some other special sense such as telepathy or precognition.'
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
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL_ACID],
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
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL_ACID],
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
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL_FIRE],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -3,
    specialty: false,
    labels: {
      description: 'This spell create an explosion of flames that flash into existence and scorch the target, giving them the double benefit of causing pain and being intimidating as hell. These spells deal Fire damage (p.171).These flames burn out after striking the target, but their secondary effects may ignite flammable materials that continue to burn after the spell is exhausted. Flamethrower is a single-target spell.'
    }
  },
  {
    id: SPELL_ID.FIREBALL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Fireball',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL_FIRE],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -1,
    specialty: false,
    labels: {
      description: 'This spell create an explosion of flames that flash into existence and scorch the targets, giving them the double benefit of causing pain and being intimidating as hell. These spells deal Fire damage (p.171).These flames burn out after striking the target, but their secondary effects may ignite flammable materials that continue to burn after the spell is exhausted. Fireball is an area spell.'
    }
  },
  {
    id: SPELL_ID.LIGHTNING_BOLT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Lightning Bolt',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL_ELECTRICITY],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -3,
    specialty: false,
    labels: {
      description: 'This spell create and direct vicious strikes of electricity that cause Electricity damage (p. 170). Lightning Bolt is a single target spell.'
    }
  },
  {
    id: SPELL_ID.BALL_LIGHTNING,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Ball Lightning',
    category: SPELL_CATEGORY_ID.COMBAT,
    tags: [SPELL_TAG_ID.INDIRECT, SPELL_TAG_ID.ELEMENTAL_ELECTRICITY],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.LINE_OF_SIGHT_AREA,
    damage: SPELL_DAMAGE_ID.PHYSICAL,
    duration: SPELL_DURATION_ID.INSTANTANEOUS,
    drain: -1,
    specialty: false,
    labels: {
      description: 'This spell create and direct vicious strikes of electricity that cause Electricity damage (p. 170). Ball Lightning is an area spell.'
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
      description: 'This spell channel destructive magical power into the targets causing Physical damage. The target is cooked from the inside, like magically microwaving a hot dog. As physical energies, they can affect both living and non-living targets and are resisted by the target’s Body. Shatter requires you to touch the target.'
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
      description: 'This spell channel destructive magical power into the targets causing Physical damage. The target is cooked from the inside, like magically microwaving a hot dog. As physical energies, they can affect both living and non-living targets and are resisted by the target’s Body. Powerbolt affects a single target.'
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
      description: 'This spell channel destructive magical power into the targets causing Physical damage. The target is cooked from the inside, like magically microwaving a hot dog. As physical energies, they can affect both living and non-living targets and are resisted by the target’s Body. Powerball is an area spell.'
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
      description: 'This spell channel magical energy directly into the target, causing Stun damage. It is sometimes referred to as “sleep” spell because it can render targets unconscious but keep them alive, in the cases where you’d prefer more polite violence. Knockout requires the magician to touch the target.'
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
      description: 'This spell channel magical energy directly into the target, causing Stun damage. It is sometimes referred to as “sleep” spell because it can render targets unconscious but keep them alive, in the cases where you’d prefer more polite violence. Stunbolt affects a single target.'
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
      description: 'This spell channel magical energy directly into the target, causing Stun damage. It is sometimes referred to as “sleep” spell because it can render targets unconscious but keep them alive, in the cases where you’d prefer more polite violence. Stunball is an area spell.'
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
      description: 'This spell allows the subject to analyze the purpose and operation of a device or piece of equipment within range of the sense. The casting of the spell is opposed by the object’s resistance (p. 295). Each net hit can be used to provide a piece of information about the device that would not be readily apparent (for example, it would not give the information that it is a Renraku-manufactured device if the thing is emblazoned with a huge Renraku logo, but it might say what the basic function of the thing is). Each net hit also gives the subject a bonus die while operating the device and allows the subject to ignore any skill-defaulting modifiers for using it as long as the spell is sustained.'
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
      description: 'This spell allows the subject to analyze the purpose of a magical object (e.g., foci, alchemical preparations, magical lodges, active rituals). Treat the net hits from the Spellcasting Test as hits on the Assensing Table (p. 313), except the subject isn’t required to be perceiving astrally.'
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
      description: 'The subject can tell whether a target’s statements are the truth (or at least if the subject honestly believes them to be true).The spell needs at least 1 net hit to determine validity of a selected statement. The spell does not work on written materials or items recorded through any sort of technological medium. The subject must hear a statement in person (with the target within range) to be able to judge its truth.'
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
      description: 'The subject can hear distant sounds as if physically present at a chosen point within the sensory range of the spell. The listening point may be moved to any other point within range of the spell as a Complex Action. While using Clairaudience, the subject cannot use her normal hearing. This spell doesn’t translate visual images, only sounds (and only sounds within the subject’s natural range of hearing; augmented hearing does not apply).'
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
      description: 'The subject can see distant scenes as if physically present at a chosen point within the sensory range of the spell. The visual point may be moved to any other point within range of the spell as a Complex Action. The subject can’t use normal vision or astral perception while using Clairvoyance. This spell doesn’t translate sound, only vision, and it doesn’t work with augmented vision. You can’t target spells through Clairvoyance.'
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
      description: 'The subject can subconsciously analyze combat and other dangerous situations within range, sensing events a split-second before they happen. Every hit on the Spellcasting Test adds 1 die for Reaction on Surprise Tests, and also to rolls made when defending against ranged and melee attacks as long as the spell remains in effect.'
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
      description: 'The subject can detect living targets within range who have hostile intentions toward him. The spell does not detect traps (since they aren’t alive), nor can it detect someone about to shoot into a crowd at random (since the hostility is not directed at the subject of the spell). The spell can detect targets preparing an ambush or other surprise attack directed at the subject.'
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
      description: 'The subject can detect living targets within range who have hostile intentions toward him. The spell does not detect traps (since they aren’t alive), nor can it detect someone about to shoot into a crowd at random (since the hostility is not directed at the subject of the spell). The spell can detect targets preparing an ambush or other surprise attack directed at the subject.'
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
      description: 'The subject can detect the presence of a particular individual anywhere within range of the sense. You need to specify the individual during casting, someone you know or at least have met in the past.'
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
      description: 'The subject detects all living beings (but not spirits) within range of the sense and knows their number and relative location. In a crowded area, the spell is virtually useless, picking up a blurred mass of traces of life.'
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
      description: 'The subject detects all living beings (but not spirits) within range of the sense and knows their number and relative location. In a crowded area, the spell is virtually useless, picking up a blurred mass of traces of life.'
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
      description: 'The subject detects all of a specified type of life form within the range of the sense and knows their number and relative location. This is actually several different spells that must be learned separately, one for each type of life form that a caster might like to detect (Detect Orks, Detect Elves, Detect Dragons, and so forth), which are learned separately.'
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
      description: 'The subject detects all of a specified type of life form within the range of the sense and knows their number and relative location. This is actually several different spells that must be learned separately, one for each type of life form that a caster might like to detect (Detect Orks, Detect Elves, Detect Dragons, and so forth), which are learned separately.'
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
      description: 'The subject can detect the presence of all foci, spells, wards, magical lodges, alchemical preparations, active rituals, and spirits within range of the sense. It does not detect Awakened characters or critters, astral signatures, alchemical preparations that that have expired or already triggered, or the effects of permanent spells once they have become permanent.'
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
      description: 'The subject can detect the presence of all foci, spells, wards, magical lodges, alchemical preparations, active rituals, and spirits within range of the sense. It does not detect Awakened characters or critters, astral signatures, alchemical preparations that that have expired or already triggered, or the effects of permanent spells once they have become permanent.'
    }
  },
  {
    id: SPELL_ID.DETECT_OBJECT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Detect [Object]',
    category: SPELL_CATEGORY_ID.DETECTION,
    tags: [SPELL_TAG_ID.ACTIVE, SPELL_TAG_ID.AREA],
    type: SPELL_TYPE_ID.PHYSICAL,
    range: SPELL_RANGE_ID.TOUCH,
    duration: SPELL_DURATION_ID.SUSTAINED,
    drain: -2,
    specialty: true,
    labels: {
      description: 'The subject detects all of a specified type of object within range of the sense and knows their number and relative location. Each type of object requires a separate spell (Detect Guns, Detect Computers, Detect Explosives, and so forth). These spells must all be learned and cast separately.'
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
      description: 'Mindlink allows the magician and one voluntary subject to communicate mentally, exchanging conversation, emotions, and mental images. One hit on the Spellcasting Test is enough to establish the link. The subject must remain within range of the magician for the Mindlink to work.'
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
      description: 'This spell allows the subject to telepathically probe the mind of a specific target within range of the sense (chosen when the spell is cast). The target is aware of the probing, though they may not know the source of the spell. The number of net hits you get on the spell determines what kind of information the subject can read, given on the table. The subject may probe for one piece of information per Complex Action while the spell is sustained. Additional uses of Mind Probe against the same target within a number of hours equal to the target’s Willpower inflict a –2 dice pool modifier on the Spellcasting attempt.\n\nNet Hits / Results\n1-2 - The subject can read the target’s surface thoughts only.\n3-4 - The subject can find out anything the target consciously knows and view the target’s recent memories (up to 72 hours).\n5+ - The subject can probe the target’s subconscious, gaining information the target may not even be consciously aware of, like psychological quirks, deep fears, or hidden memories.'
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
      description: 'This spell helps a poisoned subject overcome a toxin. Casters use it after the target has been poisoned, but be- fore the target needs to make her Toxin Resistance Test, based on the Speed of the toxin. Add the hits from this spell directly to the hits from the Toxin Resistance Test.'
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
      description: 'This spell is used at any point after infection to help a patient overcome illness. The infected character receives a number of additional dice on her Disease Resistance Test equal to the spell’s net hits until the patient recovers (or dies). It does not heal any damage already inflicted by the disease (that requires a separate Healing spell).'
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
      description: 'This spell weakens the target by decreasing a designated Attribute. A version of this spell exists for each Physical and Mental attribute, but not for Special attributes (Initiative, Edge, Essence, Magic, or Resonance). It affects both natural and augmented Attributes. This spell is cast with an Opposed Spellcasting + Magic [Force] v. (targeted Attribute) + Willpower Test. If the magician wins, the Attribute is reduced by the spell’s net hits. If a Physical Attribute is reduced to 0, the victim is incapacitated and paralyzed. If a Mental Attribute is reduced to 0, the victim stands still, mindlessly confused. Decreasing an Attribute also affects any other derived statistics that use it (for example, if Reaction or Intuition is lowered, Initiative is lowered as well) as long as the spell is sustained.'
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
      description: 'Detox relieves the side effects of a drug or poison. The Force of the spell must equal or exceed the toxin’s base DV. A single hit is sufficient to eliminate all symp- toms. Detox does not heal or prevent damage done by toxins, but it eliminates any side effects they may have on the victim (dizziness, hallucinations, nausea, pain, and so forth). Detox is the hangover cure of choice among those who can afford it.'
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
      description: 'Heal repairs physical injuries. It heals a number of boxes of Physical damage equal to the spell’s hits from the Spellcasting Test. Hits can also be used to reduce the base time for the spell to become permanent; each hit spent this way shaves off 1 Combat Turn (you can split hits between healing and reducing time). Any boxes of Physical damage your target still has after any boxes are healed magically can only be healed by time and rest.'
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
      description: 'This spell increases an Attribute (natural or augmented) on a voluntary subject. A version of this spell exists for each Physical and Mental attribute, but not for Special Attributes (Initiative, Edge, Essence, Magic, or Resonance). The Force of the spell must equal or exceed the (augmented) value of the Attribute being affected. The Attribute is increased by an amount equal to the hits scored, up to the target’s augmented maximum (any hits that would increase the Attribute beyond its augmented maximum are ignored). Each Attribute can only be affected by a single Increase Attribute spell at a time. Note that increasing an Attribute may affect other derived statistics (Increase Reaction also affects Initiative, for example, while Increase Body adds extra boxes to the character’s Physical Condition Monitor for as long as the spell lasts).'
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
      description: 'This spell increases the initiative of a subject. Each hit rolled on the Spellcasting Test adds +1 to the target’s Initiative, and every two hits adds one Initiative Die. A character can only be affected by a single Increase Reflexes spell at a time, and the maximum Initiative Dice anyone can have is +5D6.'
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
      description: 'This spell oxygenates the blood of a voluntary subject, providing extra Body dice (1 die for every hit) to resist suffocation, strangulation, the effects of inhaled gas, or any other effect of oxygen deprivation. The spell also allows the subject to breathe underwater.'
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
      description: 'This spell provides an extra die per hit for a subject to resist infection, drugs, or toxins. The spell does not discriminate between harmful and beneficial drugs, so the subject also resists medicines and other helpful drugs while under its effects. Reduce the bonuses of a beneficial drug by 1 for every hit rolled in the casting; three or more hits block effects that do not have a bonus or penalty associated with them.'
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
      description: 'Resist Pain allows the subject to ignore the pain of injuries, reducing penalties from Physical or Stun damage. Each hit on the Spellcasting Test removes the effect of one box of damage from each of the subject’s Condition Monitor tracks. It does not remove the damage itself; it only eliminates the modifiers. If all of the boxes on the track are filled, the character still falls unconscious. The spell is permanent in that the boost to the patient’s endorphin levels does not wear off. If the subject’s damage rises above the level at which the patient is resisting pain or if the existing injuries heal, the spell dissipates. A person can only be under the effects of one Resist Pain spell at a time (the one with the most hits).'
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
      description: 'When applied to a character with a filled Physical damage track, this spell stabilizes all vital functions and prevents the character from dying. The spell’s Force must equal or exceed the overflow damage already taken when the spell starts. The full time must be taken for the spell to become permanent before the character is truly stabilized; hits reduce the time it takes by 1 Combat Turn each. If successful, the spell prevents the character from taking further damage from Physical Damage Overflow (p. 209).'
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
      description: 'A favorite of mages going through bad break-ups, Agony inflicts an illusion of terrible pain on the target. Each net hit scored by the magician temporarily inflicts 1 box of Physical and 1 box of Stun damage on the target. It is not actual damage, only a measure of the effect of the spell. The target is affected the same as if the damage were real, with the usual injury penalties. If the target’s damage boxes are completely filled, he is racked with pain, unable to move or act. Once the spell is ended, the pain and damage boxes immediately go away. Agony affects a single target.'
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
      description: 'A favorite of mages going through bad break-ups, Agony inflicts an illusion of terrible pain on the target. Each net hit scored by the magician temporarily inflicts 1 box of Physical and 1 box of Stun damage on the target. It is not actual damage, only a measure of the effect of the spell. The target is affected the same as if the damage were real, with the usual injury penalties. If the target’s damage boxes are completely filled, he is racked with pain, unable to move or act. Once the spell is ended, the pain and damage boxes immediately go away. Mass Agony is an area spell.'
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
      description: 'This spell make the target believe that small bugs of various persuasions are crawling over their entire body, biting them, scurrying about, and crawling into assorted orifices. The bugs look, feel, smell, and even taste real. The illusion is usually enough to make any target who fails to resist freak out. For each net hit you get, the target loses 2 from their Initiative Score. If you sustain the spell, they lose the same amount from their Initiative Score at the beginning of each Combat Turn. Bugs affects a single target.'
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
      description: 'This spell make the target believe that small bugs of various persuasions are crawling over their entire body, biting them, scurrying about, and crawling into assorted orifices. The bugs look, feel, smell, and even taste real. The illusion is usually enough to make any target who fails to resist freak out. For each net hit you get, the target loses 2 from their Initiative Score. If you sustain the spell, they lose the same amount from their Initiative Score at the beginning of each Combat Turn. Swarm is an area spell.'
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
      description: 'This spell produce a storm of conflicting sensations and images to confuse the senses. For each net hit on the Spellcasting Test, the target suffers a –1 dice pool modifier to all tests due to the distraction. Confusion affects a single target.'
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
      description: 'This spell produce a storm of conflicting sensations and images to confuse the senses. For each net hit on the Spellcasting Test, the target suffers a –1 dice pool modifier to all tests due to the distraction. Mass Confusion is an area spell.'
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
      description: 'This spell produce a storm of conflicting sensations and images to confuse the senses. For each net hit on the Spellcasting Test, the target suffers a –1 dice pool modifier to all tests due to the distraction. The Chaos spell is a physical version of Confusion (affects a single target), so it also affects technological systems and sensing devices.'
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
      description: 'This spell produce a storm of conflicting sensations and images to confuse the senses. For each net hit on the Spellcasting Test, the target suffers a –1 dice pool modifier to all tests due to the distraction. The Chaotic World spell is a physical version of Mass Confusion (an area spell), so it also affects technological systems and sensing devices.'
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
