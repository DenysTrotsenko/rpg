import {CharacterQuality, Quality} from './5e.models';
import {ATTRIBUTE_ID, BOOK_ID, QUALITY_ID, SKILL_ID} from './5e.enums';
import {ACTIVE_SKILLS} from '@shadowrun/app/5e/5e.skills';
import {ATTRIBUTES} from '@shadowrun/app/5e/5e.attributes';

export const RACIAL_QUALITIES: Quality[] = [
  {
    id: QUALITY_ID.RACIAL_LOW_LIGHT_VISION,
    name: 'Low Light Vision',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [{ name: '', cost: 0 }],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.RACIAL_THERMOGRAPHIC_VISION,
    name: 'Thermographic Vision',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [{ name: '', cost: 0 }],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.RACIAL_PATHOGENS_RESISTANCE,
    name: 'Pathogen & Toxin Resistance',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [{ name: '+2 Dice', cost: 0 }],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.RACIAL_REACH,
    name: 'Reach',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [{ name: '+1', cost: 0 }],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.RACIAL_DERMAL_ARMOR,
    name: 'Dermal Armor',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [{ name: '+1', cost: 0 }],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.RACIAL_LIFESTYLE,
    name: 'Lifestyle Cost',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '+20%', cost: 0 },
      { name: '+100%', cost: 0 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
];

export const POSITIVE_QUALITIES: Quality[] = [
  {
    id: QUALITY_ID.AMBIDEXTROUS,
    name: 'Ambidextrous',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 4 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.ANALYTICAL_MIND,
    name: 'Analytical Mind',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 5 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.APTITUDE,
    name: 'Aptitude',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 14 }
    ],
    multiple: false,
    specialty: true,
    formulas: {
      SPECIALTIES: (quality: CharacterQuality) => ACTIVE_SKILLS.map(i => ({ id: i.id, name: i.name })),
      SKILL_MAX: (quality: CharacterQuality, id: SKILL_ID) => quality.specialty === id ? 1 : 0
    },
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.ASTRAL_CHAMELEON,
    name: 'Astral Chameleon',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.BILINGUAL,
    name: 'Bilingual',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 5 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.BLANDNESS,
    name: 'Blandness',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 8 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.CATLIKE,
    name: 'Catlike',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 7 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.CODESLINGER,
    name: 'Codeslinger',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.DOUBLE_JOINTED,
    name: 'Double-Jointed',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 6 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.EXCEPTIONAL_ATTRIBUTE,
    name: 'Exceptional Attribute',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 14 }
    ],
    multiple: false,
    specialty: true,
    formulas: {
      SPECIALTIES: (quality: CharacterQuality) => ATTRIBUTES
        .filter(i => ![ATTRIBUTE_ID.EDGE, ATTRIBUTE_ID.ESSENCE].includes(i.id))
        .map(i => ({ id: i.id, name: i.name })),
      ATTRIBUTE_MAX: (quality: CharacterQuality, id: ATTRIBUTE_ID) => [
        ATTRIBUTE_ID.BODY, ATTRIBUTE_ID.AGILITY, ATTRIBUTE_ID.REACTION, ATTRIBUTE_ID.STRENGTH,
        ATTRIBUTE_ID.WILLPOWER, ATTRIBUTE_ID.LOGIC, ATTRIBUTE_ID.INTUITION, ATTRIBUTE_ID.CHARISMA,
        ATTRIBUTE_ID.MAGIC, ATTRIBUTE_ID.RESONANCE
      ].includes(id) && quality.specialty === id ? 1 : 0
    },
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.FIRST_IMPRESSION,
    name: 'First Impression',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 11 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.FOCUSED_CONCENTRATION,
    name: 'Focused Concentration',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'I', cost: 4 },
      { name: 'II', cost: 8 },
      { name: 'III', cost: 12 },
      { name: 'IV', cost: 16 },
      { name: 'V', cost: 20 },
      { name: 'VI', cost: 24 }
    ],
    multiple: true,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.GEARHEAD,
    name: 'Gearhead',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 11 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.GUTS,
    name: 'Guts',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'When a bug spirit with dripping mandibles comes calling, the character with Guts is the one most likely to stand and fight instead of freaking the hell out. Guts gives a character a +2 dice pool modifier on tests to resist fear and intimidation, including magically induced fear from spells or critter powers.'
    }
  },
  {
    id: QUALITY_ID.HIGH_PAIN_TOLERANCE,
    name: 'High Pain Tolerance',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'I', cost: 7 },
      { name: 'II', cost: 14 },
      { name: 'III', cost: 21 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.HOME_GROUND,
    name: 'Home Ground',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 10 }
    ],
    multiple: true,
    specialty: true,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.HUMAN_LOOKING,
    name: 'Human-Looking',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 6 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'A metahuman character with the Human-Looking quality can pass for human in most circumstances. Human NPCs respond with neutral attitudes toward such characters when making Social skill tests (p. 82), even those humans who are particularly biased against metahumans. The character may suffer increased animosity from metahuman NPCs who are prejudiced against humans and who either mistake him for human or distrust his motives for trying to look human. Only elves, dwarfs, and orks can take the Human-Looking quality.'
    }
  },
  {
    id: QUALITY_ID.INDOMITABLE,
    name: 'Indomitable',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'I', cost: 8 },
      { name: 'II', cost: 16 },
      { name: 'III', cost: 24 }
    ],
    multiple: false,
    specialty: true,
    formulas: null,
    labels: {
      description: 'Bodies and minds have limits, but some people have the will to push right through those boundaries. For each level of Indomitable, a character receives a +1 increase to an Inherent limit of his choice (Mental, Physical, or Social). He can take up to three levels and can apply them in any way he chooses (+3 to one Inherent Limit, for example; or +2 to one Inherent and +1 to another; or +1 to all three).'
    }
  },
  {
    id: QUALITY_ID.JURYRIGGER,
    name: 'Juryrigger',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.LUCKY,
    name: 'Lucky',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 12 }
    ],
    multiple: false,
    specialty: false,
    formulas: {
      ATTRIBUTE_MAX: (quality: CharacterQuality, id: ATTRIBUTE_ID) => ATTRIBUTE_ID.EDGE === id ? 1 : 0
    },
    labels: {
      description: 'The dice roll and the coin flips this character’s way more often than not, giving her the chance to drop jaws in amazement at her good fortune. Lucky allows a character to possess an Edge attribute one point higher than his metatype maximum (for example, a human character could raise her Edge to 8). Note that taking this quality does not actually increase the character’s current Edge rating, it just allows her the opportunity to do so; the Karma cost for gaining the extra point must still be paid. This quality may only be taken once and must be approved by the gamemaster. The Lucky quality cannot be combined with Exceptional Attribute.'
    }
  },
  {
    id: QUALITY_ID.MAGIC_RESISTANCE,
    name: 'Magic Resistance',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'I', cost: 6 },
      { name: 'II', cost: 12 },
      { name: 'III', cost: 18 },
      { name: 'IV', cost: 24 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'This is the wonderful ability to potentially make a Fireball bounce away. For every 6 Karma spent on Magic Resistance, a character receives 1 additional die for Spell Resistance Tests. The Magical Resistance quality, however, is always “on” — the character cannot lower it to receive beneficial spells such as Heal. A character with Magic Resistance cannot take part in spells that require a voluntary subject; such spells automatically fail when used on magic-resistant characters. Characters with a Magic rating cannot take this quality.'
    }
  },
  {
    id: QUALITY_ID.MENTOR_SPIRIT,
    name: 'Mentor Spirit',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 5 }
    ],
    multiple: false,
    specialty: true,
    formulas: null,
    labels: {
      description: 'Everyone needs some help in life, even if it comes from someone relatively filmy and insubstantial. Mentor Spirit means the character follows a patron spirit (see Mentor Spirits, p. 320) that guides him in his practice of magic and provides certain advantages and disadvantages to his natural abilities. A character may change mentor spirits, but he may have only one mentor spirit at a time. To change mentor spirits, the character must first buy off the current mentor spirit as if it were a Negative quality. He can then purchase the quality again to follow a different mentor spirit. This cost represents the toll of divorcing from one mentor spirit and bonding with a new one. Each tradition has a different name for a mentor spirit. Hermetic mages prefer the term “mentor spirit,” while shamans use the word “totem” for the spirit that they follow. While the names may vary, the way the mentor works is consistent. This quality is only available to characters that pos- sess a Magic attribute rating.'
    }
  },
  {
    id: QUALITY_ID.NATURAL_ATHLETE,
    name: 'Natural Athlete',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 7 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'A character with this quality has an innate combination of physical fitness, spatial awareness, and natural athletic or gymnastic talent. While the character may not be a world-class athlete and may require training to achieve peak performance, he is in prime physical shape for his size and weight class. The Natural Athlete adds a +2 dice pool modifier for Running and Gymnastics skill tests.'
    }
  },
  {
    id: QUALITY_ID.NATURAL_HARDENING,
    name: 'Natural Hardening',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'This quality makes the character’s neural structure resistant to feedback. This gives her 1 point of natural biofeedback filtering, which is cumulative with a Biofeedback Filter program or a technomancer’s firewall (p. 251).'
    }
  },
  {
    id: QUALITY_ID.NATURAL_IMMUNITY,
    name: 'Natural Immunity',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'I', cost: 4 },
      { name: 'II', cost: 10 }
    ],
    multiple: false,
    specialty: true,
    formulas: null,
    labels: {
      description: 'The ability to casually sip poison can never be overrated. A character with Natural Immunity has an innate or developed immunity to one single disease or toxin. This quality is available at two levels. If purchased at the 4 Karma level, the character is immune to a single natural disease or toxin. If Natural Immunity is purchased at the full 10 Karma level, the character is immune to a single, synthetic (artificially created) disease or toxin. Natural Immunity does not affect diseases or toxins that are magically based, such as HMHVV. The player and gamemaster must agree on the disease, drug, or poison to which the character is immune. The character can take one dose of the drug or poison and experience one exposure to the disease every six hours with no ill effects. Any subsequent dosing or exposure during the next six hours causes normal damage, but the character’s recovery time is halved. Note that characters with Natural Immunity to a disease can be a carrier, infecting other characters while suffering no ill effects.'
    }
  },
  {
    id: QUALITY_ID.PHOTOGRAPHIC_MEMORY,
    name: 'Photographic Memory',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 6 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'A character with Photographic Memory can instantly recall facts, dates, numbers, or anything else he has seen or heard. The character gains a +2 dice pool modifier to all Memory Tests.'
    }
  },
  {
    id: QUALITY_ID.QUICK_HEALER,
    name: 'Quick Healer',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 3 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'A character with the Quick Healer quality receives a +2 dice pool modifier to all Healing Tests made on/for/by her, including magical healing.'
    }
  },
  {
    id: QUALITY_ID.RESISTANCE_TO_PATHOGENS,
    name: 'Resistance to Pathogens/Toxins',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'I', cost: 4 },
      { name: 'II', cost: 8 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'A character with Resistance to Pathogens/Toxins can fight off diseases and drugs more easily than other characters and receives a +1 dice pool modifier to Resistance Tests. This quality comes at two levels: at 4 Karma the character is resistant to either pathogens or toxins, not both. If the character purchases this quality at 8 Karma, she receives the +1 modifier for resisting both.'
    }
  },
  {
    id: QUALITY_ID.SPIRIT_AFFINITY,
    name: 'Spirit Affinity',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 7 }
    ],
    multiple: true,
    specialty: true,
    formulas: null,
    labels: {
      description: 'Available only to magic users, the Spirit Affinity quality allows a character to be attuned to one type of spirit (see Spirits, p. 303). These spirits find the character interesting, are drawn to her, and are more inclined to assist her. They may be reluctant to attack the character, and if forced to do so they are likely to use nonlethal power. Watchers and minions do not count for this quality as they are constructed and are not summoned like normal spirits. Spirit Affinity provides magicians with 1 additional spirit service for each spirit of that type, and it also provides a +1 dice pool modifier for Binding Tests. Magic users may possess this quality for a type of spirit that is not part of their magical tradition.'
    }
  },
  {
    id: QUALITY_ID.TOUGHNESS,
    name: 'Toughness',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: 9 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'Characters with the Toughness quality shrug off damage more easily than others. Such characters gain a +1 dice pool modifier to their Body when making Damage Resistance tests.'
    }
  },
  {
    id: QUALITY_ID.WILL_TO_LIVE,
    name: 'Will To Live',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'I', cost: 3 },
      { name: 'II', cost: 6 },
      { name: 'III', cost: 9 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'For each rating point in Will to Live, the character gains 1 additional Damage Overflow Box (p. 101). These additional boxes only allow the character to sustain additional damage before dying; they do not raise the threshold at which the character becomes unconscious or incapacitated, nor do they affect modifiers from the damage the character has taken.'
    }
  },
];

export const NEGATIVE_QUALITIES: Quality[] = [
  {
    id: QUALITY_ID.ADDICTION,
    name: 'Addiction',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Mild', cost: -4 },
      { name: 'Moderate', cost: -9 },
      { name: 'Severe', cost: -20 },
      { name: 'Burnout', cost: -25 }
    ],
    multiple: true,
    specialty: true,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.ALLERGY,
    name: 'Allergy',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Uncommon Mild', cost: -5 },
      { name: 'Uncommon Moderate', cost: -10 },
      { name: 'Uncommon Severe', cost: -15 },
      { name: 'Uncommon Extreme', cost: -20 },
      { name: 'Common Mild', cost: -10 },
      { name: 'Common Moderate', cost: -15 },
      { name: 'Common Severe', cost: -20 },
      { name: 'Common Extreme', cost: -25 }
    ],
    multiple: true,
    specialty: true,
    formulas: null,
    labels: {
      description: 'A character with the Allergy quality is allergic to a substance or condition found in their environment. The value of this quality depends on two factors. The first is whether the substance or condition is Uncommon (2 Karma) or Common (7 Karma). Next, determine the severity of the symptoms: Mild (3 Karma), Moderate (8 Karma), Severe (13 Karma), or Extreme (18 Karma). Add the appropriate point values together to find the final value. For example, the value of an Uncommon Moderate Allergy (Silver) is 10 Karma (2+8 Karma). If a character is attacked with a substance to which they are allergic, they lose 1 die from their Resistance Test for each stage of severity of the Allergy (e.g., 1 die for a Mild allergy, 2 dice for a Moderate allergy, etc.).'
    }
  },
  {
    id: QUALITY_ID.ASTRAL_BEACON,
    name: 'Astral Beacon',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -10 },
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'The astral signature of a character with the Astral Beacon quality is like, well, a beacon—highly visible on the astral plane. The signature also lasts twice as long as it would without the Astral Beacon quality and others assensing it receive a –1 to the threshold of their Assensing Test for gathering information about it. Only characters with a Magic rating may take this quality.'
    }
  },
  {
    id: QUALITY_ID.BAD_LUCK,
    name: 'Bad Luck',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -12 },
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'This character is cursed—his own luck often turns against him. When the character uses Edge, roll 1D6. On a result of 1, the point of Edge is spent, but it has the exact opposite effect intended. For example, if a character hopes to gain additional dice he loses that many dice from his dice pool. If a character spends Edge to go first in an Initiative Pass, he ends up going last. If a character spent Edge to negate a glitch, Bad Luck turns it into a critical glitch. The character suffers Bad Luck on only one Edge roll per game session. After the character has suffered his Bad Luck, he does not need to roll the test for Bad Luck for any more expenditures of Edge for the duration of that game session.'
    }
  },
  {
    id: QUALITY_ID.BAD_REP,
    name: 'Bad Rep',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -7 },
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.CODE_OF_HONOR,
    name: 'Code of Honor',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -15 },
    ],
    multiple: false,
    specialty: true,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.CODEBLOCK,
    name: 'Codeblock',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -10 },
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.COMBAT_PARALYSIS,
    name: 'Combat Paralysis',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Mild', cost: -12 },
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: 'A character with Combat Paralysis freezes in combat. On the character’s first Initiative Test, the character divides their Initiative Score for that round in half (rounded up). In subsequent Combat Turns, the character may roll their normal Initiative. Combat Paralysis also gives the character a –3 dice pool modifier on Surprise Tests. If the character must make a Composure Test while under fire or in a similar combat situation, the gamemaster applies a +1 threshold modifier.'
    }
  },
  {
    id: QUALITY_ID.DEPENDENTS,
    name: 'Dependends',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'I', cost: -3 },
      { name: 'II', cost: -6 },
      { name: 'III', cost: -9 }
    ],
    multiple: false,
    specialty: true,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.DISTINCTIVE_STYLE,
    name: 'Distinctive Style',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -5 },
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.ELF_POSER,
    name: 'Elf Poser',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -6 },
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.GREMLINS,
    name: 'Gremlins',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'I', cost: -4 },
      { name: 'II', cost: -8 },
      { name: 'III', cost: -12 },
      { name: 'IV', cost: -16 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.INCOMPETENT,
    name: 'Incompetent',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -5 },
    ],
    multiple: false,
    specialty: true,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.INSOMNIA,
    name: 'Insomnia',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'I', cost: -10 },
      { name: 'II', cost: -15 },
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.LOSS_OF_CONFIDENCE,
    name: 'Loss of Confidence',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -10 }
    ],
    multiple: true,
    specialty: true,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.LOW_PAIN_TOLERANCE,
    name: 'Low Pain Tolerance',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -9 },
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.ORK_POSER,
    name: 'Ork Poser',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -6 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.PREJUDICED,
    name: 'Prejudiced',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Common Biased', cost: -5 },
      { name: 'Common Outspoken', cost: -7 },
      { name: 'Common Radical', cost: -10 },
      { name: 'Specific Biased', cost: -3 },
      { name: 'Specific Outspoken', cost: -5 },
      { name: 'Specific Radical', cost: -8 }
    ],
    multiple: true,
    specialty: true,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.SCORCHED,
    name: 'Scorched',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -10 }
    ],
    multiple: false,
    specialty: true,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.SENSITIVE_SYSTEM,
    name: 'Sensitive System',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -12 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.SIMSENSE_VERTIGO,
    name: 'Simsense Vertigo',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -5 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.SINNER,
    name: 'Sinner',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'National SIN', cost: -5 },
      { name: 'Criminal SIN', cost: -10 },
      { name: 'Corporate Limited SIN', cost: -15 },
      { name: 'Corporate SIN', cost: -25 }
    ],
    multiple: false,
    specialty: true,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.SOCIAL_STRESS,
    name: 'Social Stress',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -8 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.SPIRIT_BANE,
    name: 'Spirit Bane',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -7 }
    ],
    multiple: true,
    specialty: true,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.UNCOUTH,
    name: 'Uncouth',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -14 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.UNEDUCATED,
    name: 'Uneducated',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -8 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.UNSTEADY_HANDS,
    name: 'Unsteady Hands',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -7 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
  {
    id: QUALITY_ID.WEAK_IMMUNE_SYSTEM,
    name: 'Weak Immune System',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: '', cost: -10 }
    ],
    multiple: false,
    specialty: false,
    formulas: null,
    labels: {
      description: ''
    }
  },
];
