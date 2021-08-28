import { Quality } from './5e.models';
import { BOOK_ID, QUALITY_ID } from './5e.enums';

export const RACIAL_QUALITIES: Quality[] = [
  {
    id: QUALITY_ID.RACIAL_LOW_LIGHT_VISION,
    name: 'Low Light Vision',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [{ name: '', cost: 0 }],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.RACIAL_THERMOGRAPHIC_VISION,
    name: 'Thermographic Vision',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [{ name: '', cost: 0 }],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.RACIAL_PATHOGENS_RESISTANCE,
    name: 'Pathogen & Toxin Resistance',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [{ name: '+2 Dice', cost: 0 }],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.RACIAL_REACH,
    name: 'Reach',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [{ name: '+1', cost: 0 }],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.RACIAL_DERMAL_ARMOR,
    name: 'Dermal Armor',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [{ name: '+1', cost: 0 }],
    multiple: false,
    specialty: false,
    formula: null
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
    formula: null
  },
];

export const POSITIVE_QUALITIES: Quality[] = [
  {
    id: QUALITY_ID.AMBIDEXTROUS,
    name: 'Ambidextrous',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 4 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.ANALYTICAL_MIND,
    name: 'Analytical Mind',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 5 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.APTITUDE,
    name: 'Aptitude',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 14 }
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.ASTRAL_CHAMELEON,
    name: 'Astral Chameleon',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.BILINGUAL,
    name: 'Bilingual',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 5 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.BLANDNESS,
    name: 'Blandness',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 8 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.CATLIKE,
    name: 'Catlike',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 7 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.CODESLINGER,
    name: 'Codeslinger',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.DOUBLE_JOINTED,
    name: 'Double-Jointed',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 6 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.EXCEPTIONAL_ATTRIBUTE,
    name: 'Exceptional Attribute',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 14 }
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.FIRST_IMPRESSION,
    name: 'First Impression',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 11 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.FOCUSED_CONCENTRATION,
    name: 'Focused Concentration',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 4 },
      { name: 'Rating 2', cost: 8 },
      { name: 'Rating 3', cost: 12 },
      { name: 'Rating 4', cost: 16 },
      { name: 'Rating 5', cost: 20 },
      { name: 'Rating 6', cost: 24 }
    ],
    multiple: true,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.GEARHEAD,
    name: 'Gearhead',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 11 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.GUTS,
    name: 'Guts',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.HIGH_PAIN_TOLERANCE,
    name: 'High Pain Tolerance',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 7 },
      { name: 'Rating 2', cost: 14 },
      { name: 'Rating 3', cost: 21 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.HOME_GROUND,
    name: 'Home Ground',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: true,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.HUMAN_LOOKING,
    name: 'Human-Looking',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 6 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.INDOMITABLE,
    name: 'Indomitable',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 8 },
      { name: 'Rating 2', cost: 16 },
      { name: 'Rating 3', cost: 24 }
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.JURYRIGGER,
    name: 'Juryrigger',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.LUCKY,
    name: 'Lucky',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 12 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.MAGIC_RESISTANCE,
    name: 'Magic Resistance',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 6 },
      { name: 'Rating 2', cost: 12 },
      { name: 'Rating 3', cost: 18 },
      { name: 'Rating 4', cost: 24 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.MENTOR_SPIRIT,
    name: 'Mentor Spirit',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 5 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.NATURAL_ATHLETE,
    name: 'Natural Athlete',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 7 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.NATURAL_HARDENING,
    name: 'Natural Hardening',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.NATURAL_IMMUNITY,
    name: 'Natural Immunity',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 4 },
      { name: 'Rating 2', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.PHOTOGRAPHIC_MEMORY,
    name: 'Photographic Memory',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 6 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.QUICK_HEALER,
    name: 'Quick Healer',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 3 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.RESISTANCE_TO_PATHOGENS,
    name: 'Resistance to Pathogens/Toxins',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 4 },
      { name: 'Rating 2', cost: 8 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.SPIRIT_AFFINITY,
    name: 'Spirit Affinity',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 7 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.TOUGHNESS,
    name: 'Toughness',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 9 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.WILL_TO_LIVE,
    name: 'Will To Live',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: 3 },
      { name: 'Rating 2', cost: 6 },
      { name: 'Rating 3', cost: 9 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
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
    formula: null
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
    formula: null
  },
  {
    id: QUALITY_ID.ASTRAL_BEACON,
    name: 'Astral Beacon',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -10 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.BAD_LUCK,
    name: 'Bad Luck',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -12 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.BAD_REP,
    name: 'Bad Rep',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -7 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.CODE_OF_HONOR,
    name: 'Code of Honor',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -15 },
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.CODEBLOCK,
    name: 'Codeblock',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -10 },
    ],
    multiple: false,
    specialty: false,
    formula: null
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
    formula: null
  },
  {
    id: QUALITY_ID.DEPENDENTS,
    name: 'Dependends',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -3 },
      { name: 'Rating 2', cost: -6 },
      { name: 'Rating 3', cost: -9 }
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.DISTINCTIVE_STYLE,
    name: 'Distinctive Style',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -5 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.ELF_POSER,
    name: 'Elf Poser',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -6 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.GREMLINS,
    name: 'Gremlins',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -4 },
      { name: 'Rating 2', cost: -8 },
      { name: 'Rating 3', cost: -12 },
      { name: 'Rating 4', cost: -16 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.INCOMPETENT,
    name: 'Incompetent',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -5 },
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.INSOMNIA,
    name: 'Insomnia',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -10 },
      { name: 'Rating 2', cost: -15 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.LOSS_OF_CONFIDENCE,
    name: 'Loss of Confidence',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -10 }
    ],
    multiple: true,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.LOW_PAIN_TOLERANCE,
    name: 'Low Pain Tolerance',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -9 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.ORK_POSER,
    name: 'Ork Poser',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -6 }
    ],
    multiple: false,
    specialty: false,
    formula: null
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
    formula: null
  },
  {
    id: QUALITY_ID.SCORCHED,
    name: 'Scorched',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -10 }
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.SENSITIVE_SYSTEM,
    name: 'Sensitive System',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -12 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.SIMSENSE_VERTIGO,
    name: 'Simsense Vertigo',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -5 }
    ],
    multiple: false,
    specialty: false,
    formula: null
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
    formula: null
  },
  {
    id: QUALITY_ID.SOCIAL_STRESS,
    name: 'Social Stress',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -8 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.SPIRIT_BANE,
    name: 'Spirit Bane',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -7 }
    ],
    multiple: true,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.UNCOUTH,
    name: 'Uncouth',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -14 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.UNEDUCATED,
    name: 'Uneducated',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -8 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.UNSTEADY_HANDS,
    name: 'Unsteady Hands',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -7 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.WEAK_IMMUNE_SYSTEM,
    name: 'Weak Immune System',
    book: BOOK_ID.CORE_RULEBOOK,
    ratings: [
      { name: 'Rating 1', cost: -10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
];
