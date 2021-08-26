import {BookId, Quality, QualityId} from './5e.models';
import {BOOK_ID, QUALITY_ID} from './5e.enums';

export const POSITIVE_QUALITIES: Quality[] = [
  {
    id: QUALITY_ID.AMBIDEXTROUS as QualityId,
    name: 'Ambidextrous',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 4 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.ANALYTICAL_MIND as QualityId,
    name: 'Analytical Mind',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 5 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.APTITUDE as QualityId,
    name: 'Aptitude',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 14 }
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.ASTRAL_CHAMELEON as QualityId,
    name: 'Astral Chameleon',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.BILINGUAL as QualityId,
    name: 'Bilingual',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 5 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.BLANDNESS as QualityId,
    name: 'Blandness',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 8 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.CATLIKE as QualityId,
    name: 'Catlike',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 7 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.CODESLINGER as QualityId,
    name: 'Codeslinger',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.DOUBLE_JOINTED as QualityId,
    name: 'Double-Jointed',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 6 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.EXCEPTIONAL_ATTRIBUTE as QualityId,
    name: 'Exceptional Attribute',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 14 }
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.FIRST_IMPRESSION as QualityId,
    name: 'First Impression',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 11 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.FOCUSED_CONCENTRATION as QualityId,
    name: 'Focused Concentration',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
    id: QUALITY_ID.GEARHEAD as QualityId,
    name: 'Gearhead',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 11 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.GUTS as QualityId,
    name: 'Guts',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.HIGH_PAIN_TOLERANCE as QualityId,
    name: 'High Pain Tolerance',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
    id: QUALITY_ID.HOME_GROUND as QualityId,
    name: 'Home Ground',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: true,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.HUMAN_LOOKING as QualityId,
    name: 'Human-Looking',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 6 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.INDOMITABLE as QualityId,
    name: 'Indomitable',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
    id: QUALITY_ID.JURYRIGGER as QualityId,
    name: 'Juryrigger',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.LUCKY as QualityId,
    name: 'Lucky',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 12 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.MAGIC_RESISTANCE as QualityId,
    name: 'Magic Resistance',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
    id: QUALITY_ID.MENTOR_SPIRIT as QualityId,
    name: 'Mentor Spirit',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 5 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.NATURAL_ATHLETE as QualityId,
    name: 'Natural Athlete',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 7 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.NATURAL_HARDENING as QualityId,
    name: 'Natural Hardening',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.NATURAL_IMMUNITY as QualityId,
    name: 'Natural Immunity',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 4 },
      { name: 'Rating 2', cost: 10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.PHOTOGRAPHIC_MEMORY as QualityId,
    name: 'Photographic Memory',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 6 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.QUICK_HEALER as QualityId,
    name: 'Quick Healer',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 3 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.RESISTANCE_TO_PATHOGENS as QualityId,
    name: 'Resistance to Pathogens/Toxins',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 4 },
      { name: 'Rating 2', cost: 8 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.SPIRIT_AFFINITY as QualityId,
    name: 'Spirit Affinity',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 7 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.TOUGHNESS as QualityId,
    name: 'Toughness',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: 9 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.WILL_TO_LIVE as QualityId,
    name: 'Will To Live',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
];

export const NEGATIVE_QUALITIES: Quality[] = [
  {
    id: QUALITY_ID.ADDICTION as QualityId,
    name: 'Addiction',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
    id: QUALITY_ID.ALLERGY as QualityId,
    name: 'Allergy',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
    id: QUALITY_ID.ASTRAL_BEACON as QualityId,
    name: 'Astral Beacon',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -10 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.BAD_LUCK as QualityId,
    name: 'Bad Luck',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -12 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.BAD_REP as QualityId,
    name: 'Bad Rep',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -7 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.CODE_OF_HONOR as QualityId,
    name: 'Code of Honor',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -15 },
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.CODEBLOCK as QualityId,
    name: 'Codeblock',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -10 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.COMBAT_PARALYSIS as QualityId,
    name: 'Combat Paralysis',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Mild', cost: -12 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.DEPENDENTS as QualityId,
    name: 'Dependends',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
    id: QUALITY_ID.DISTINCTIVE_STYLE as QualityId,
    name: 'Distinctive Style',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -5 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.ELF_POSER as QualityId,
    name: 'Elf Poser',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -6 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.GREMLINS as QualityId,
    name: 'Gremlins',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
    id: QUALITY_ID.INCOMPETENT as QualityId,
    name: 'Incompetent',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -5 },
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.INSOMNIA as QualityId,
    name: 'Insomnia',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -10 },
      { name: 'Rating 2', cost: -15 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.LOSS_OF_CONFIDENCE as QualityId,
    name: 'Loss of Confidence',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -10 }
    ],
    multiple: true,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.LOW_PAIN_TOLERANCE as QualityId,
    name: 'Low Pain Tolerance',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -9 },
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.ORK_POSER as QualityId,
    name: 'Ork Poser',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -6 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.PREJUDICED as QualityId,
    name: 'Prejudiced',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
    id: QUALITY_ID.SCORCHED as QualityId,
    name: 'Scorched',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -10 }
    ],
    multiple: false,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.SENSITIVE_SYSTEM as QualityId,
    name: 'Sensitive System',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -12 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.SIMSENSE_VERTIGO as QualityId,
    name: 'Simsense Vertigo',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -5 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.SINNER as QualityId,
    name: 'Sinner',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
    id: QUALITY_ID.SOCIAL_STRESS as QualityId,
    name: 'Social Stress',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -8 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.SPIRIT_BANE as QualityId,
    name: 'Spirit Bane',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -7 }
    ],
    multiple: true,
    specialty: true,
    formula: null
  },
  {
    id: QUALITY_ID.UNCOUTH as QualityId,
    name: 'Uncouth',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -14 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.UNEDUCATED as QualityId,
    name: 'Uneducated',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -8 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.UNSTEADY_HANDS as QualityId,
    name: 'Unsteady Hands',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -7 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  {
    id: QUALITY_ID.WEAK_IMMUNE_SYSTEM as QualityId,
    name: 'Weak Immune System',
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    ratings: [
      { name: 'Rating 1', cost: -10 }
    ],
    multiple: false,
    specialty: false,
    formula: null
  },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
  // {
  //   id: QUALITY_ID.AMBIDEXTROUS as QualityId,
  //   name: '',
  //   book: BOOK_ID.CORE_RULEBOOK as BookId,
  //   ratings: [],
  //   multiple: false,
  //   specialty: false,
  //   formula: null
  // },
];
