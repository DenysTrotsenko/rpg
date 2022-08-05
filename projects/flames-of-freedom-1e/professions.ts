import {AttributeId, ProfessionId, QuirkId, SkillId, TalentId, TraitId} from './enums';
import {Profession} from './models';

export const PROFESSIONS: Profession[] = [
  {
    id: ProfessionId.ACTOR,
    name: 'Actor',
    traits: [TraitId.PERSONA_COME_FORTH],
    quirks: [QuirkId.METHOD_ACTOR],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.CHARM,
        SkillId.DISGUISE,
        SkillId.EAVESDROP,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY
      ],
      talents: [
        TalentId.CHARISMATIC,
        TalentId.COSTUMING,
        TalentId.SIMON_PURE
      ]
    }
  },
  {
    id: ProfessionId.ALCHEMIST,
    name: 'Alchemist',
    traits: [TraitId.THROUGH_MY_EYES],
    quirks: [QuirkId.BOUND_TO_THE_FORGE],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.AWARENESS,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.INCANTATION,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SKULDUGGERY,
        SkillId.TOUGHNESS,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.DISTILLING,
        TalentId.PHARMACOPOEIA,
        TalentId.SCIENCE
      ]
    }
  },
  {
    id: ProfessionId.ANIMAL_WHISPERER,
    name: 'Animal Whisperer',
    traits: [TraitId.WAY_OF_THE_BEAST],
    quirks: [QuirkId.AN_OUTSIDER_IN_ALL_WAYS],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.CHARM,
        SkillId.FOLKLORE,
        SkillId.HANDLE_ANIMAL,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.HUSBANDRY,
        TalentId.MIMICRY,
        TalentId.TRAIN_ANIMALS
      ]
    }
  },
  {
    id: ProfessionId.APOTHECARY,
    name: 'Apothecary',
    traits: [TraitId.WHATS_OLD_IS_NEW],
    quirks: [QuirkId.THEOREM_DEDUCTION_OUTCOME],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.FOLKLORE,
        SkillId.HEAL,
        SkillId.INCANTATION,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL
      ],
      talents: [
        TalentId.BRAINS_OVER_BRAWN,
        TalentId.PHARMACOPOEIA,
        TalentId.SELF_MEDICATION
      ]
    }
  },
  {
    id: ProfessionId.ARCHITECT,
    name: 'Architect',
    traits: [TraitId.THE_GOLDEN_RATIO],
    quirks: [QuirkId.THE_CORNERS_BETRAY],
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.EDUCATION,
        SkillId.NAVIGATION,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.ARITHMETIC,
        TalentId.PERCEPTIVE,
        TalentId.STONEMASONRY
      ]
    }
  },
  {
    id: ProfessionId.ARTIST,
    name: 'Artist',
    traits: [TraitId.THE_ARTISTS_EYE],
    quirks: [QuirkId.A_TORTURED_ARTIST],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.COUNTERFEIT,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.ARTISTRY,
        TalentId.BRAINS_OVER_BRAWN,
        TalentId.PERCEPTIVE
      ]
    }
  },
  {
    id: ProfessionId.ASPIRANT,
    name: 'Aspirant',
    traits: [TraitId.IN_TUNE_WITH_AETHER],
    quirks: [QuirkId.THERE_IS_SO_MUCH_TO_KNOW],
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.EAVESDROP,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.INCANTATION,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED
      ],
      talents: [
        TalentId.ASTRONOMY,
        TalentId.OCCULT,
        TalentId.PLANAR_ALIGNMENT
      ]
    }
  },
  {
    id: ProfessionId.AUXILIARY,
    name: 'Auxiliary',
    traits: [TraitId.HONED_BY_CONFLICT],
    quirks: [QuirkId.STRANGER_IN_A_STRANGE_LAND],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.FOLKLORE,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.WARFARE
      ],
      talents: [
        TalentId.ANIMALISTIC,
        TalentId.FRIENDLY_FIRE,
        TalentId.NIMBLE_FINGERS
      ]
    }
  },
  {
    id: ProfessionId.BARBER,
    name: 'Barber',
    traits: [TraitId.AT_EASE_MY_FRIEND],
    quirks: [QuirkId.MY_HUBRIS],
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.CHARM,
        SkillId.EDUCATION,
        SkillId.HEAL,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.FIELD_DRESSING,
        TalentId.RIBALDRY,
        TalentId.SAGACITY
      ]
    }
  },
  {
    id: ProfessionId.BAWD,
    name: 'Bawd',
    traits: [TraitId.YOUR_SECRETS_REVEALED],
    quirks: [QuirkId.WORLDS_OLDEST_PROFESSION],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.CHARM,
        SkillId.EAVESDROP,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH
      ],
      talents: [
        TalentId.CHARISMATIC,
        TalentId.DRESSED_TO_THE_NINES,
        TalentId.TALK_LESS_SMILE_MORE
      ]
    }
  },
  {
    id: ProfessionId.BOATSWAIN,
    name: 'Boatswain',
    traits: [TraitId.A_KNOTTED_ROPE],
    quirks: [QuirkId.TOO_MUCH_TIME_AT_SEA],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.FOLKLORE,
        SkillId.MARTIAL_MELEE,
        SkillId.PILOT,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.CAST_IRON_STOMACH,
        TalentId.FULL_OF_BEANS,
        TalentId.SAILING
      ]
    }
  },
  {
    id: ProfessionId.BOOKKEEPER,
    name: 'Bookkeeper',
    traits: [TraitId.IN_THE_MARGINS],
    quirks: [QuirkId.BAD_POSTURE],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.BARGAIN,
        SkillId.COUNTERFEIT,
        SkillId.EAVESDROP,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED
      ],
      talents: [
        TalentId.CHEAT_SHEET,
        TalentId.EBB_AND_FLOW,
        TalentId.POKER_FACE
      ]
    }
  },
  {
    id: ProfessionId.BRAUCHER,
    name: 'Braucher',
    traits: [TraitId.FIND_THE_HIDDEN_WORD],
    quirks: [QuirkId.I_ANSWER_TO_ONE_LAW],
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.INCANTATION,
        SkillId.RESOLVE,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.MANNA_OF_GOD,
        TalentId.OCCULT,
        TalentId.THEOLOGY
      ]
    }
  },
  {
    id: ProfessionId.BREWER,
    name: 'Brewer',
    traits: [TraitId.I_HAVE_TASTED_IT_ALL],
    quirks: [QuirkId.JUST_A_SIP],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.FOLKLORE,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.DISTILLING,
        TalentId.HOBNOBBERY,
        TalentId.POT_VALIANT
      ]
    }
  },
  {
    id: ProfessionId.CAVALRY,
    name: 'Cavalry',
    traits: [TraitId.DEVIL_IN_THE_SADDLE],
    quirks: [QuirkId.STABLE_STENCH],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE
      ],
      skills: [
        SkillId.COORDINATION,
        SkillId.HANDLE_ANIMAL,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.RIDE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.HORSE_SENSE,
        TalentId.OFF_THE_BRIDLE,
        TalentId.STALWART
      ]
    }
  },
  {
    id: ProfessionId.CLERGY,
    name: 'Clergy',
    traits: [TraitId.HEAVEN_SENT],
    quirks: [QuirkId.THE_ONLY_LAW],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.CHARM,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.BRAINS_OVER_BRAWN,
        TalentId.TENACITY,
        TalentId.THEOLOGY
      ]
    }
  },
  {
    id: ProfessionId.CLERK,
    name: 'Clerk',
    traits: [TraitId.STROKE_OF_MY_QUILL],
    quirks: [QuirkId.TIRED_EYES],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.COUNTERFEIT,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH
      ],
      talents: [
        TalentId.BOOKBINDING,
        TalentId.ROLE_REVERSAL,
        TalentId.TURN_THE_PAGE
      ]
    }
  },
  {
    id: ProfessionId.COUNTERFEITER,
    name: 'Counterfeiter',
    traits: [TraitId.MARK_OF_INAUTHENTICITY],
    quirks: [QuirkId.EVERYONE_SUSPECTS_ME],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.COUNTERFEIT,
        SkillId.FOLKLORE,
        SkillId.GAMBLE,
        SkillId.GUILE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.CHEAT_SHEET,
        TalentId.SAGACITY,
        TalentId.TWISTICAL
      ]
    }
  },
  {
    id: ProfessionId.CROOK,
    name: 'Crook',
    traits: [TraitId.WHAT_I_DO_IN_SHADOWS],
    quirks: [QuirkId.NOT_ABOVE_SUSPICION],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.DISGUISE,
        SkillId.FOLKLORE,
        SkillId.GAMBLE,
        SkillId.GUILE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH
      ],
      talents: [
        TalentId.FLEECE_THE_SHEEP,
        TalentId.FULL_OF_BEANS,
        TalentId.NOM_DE_GUERRE
      ]
    }
  },
  {
    id: ProfessionId.DESERTER,
    name: 'Deserter',
    traits: [TraitId.A_SENSE_FOR_DANGER],
    quirks: [QuirkId.WANTED],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.DISGUISE,
        SkillId.GUILE,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.WARFARE
      ],
      talents: [
        TalentId.LINEAR_TACTICS,
        TalentId.POKER_FACE,
        TalentId.THE_THIRD_DEGREE
      ]
    }
  },
  {
    id: ProfessionId.DILETTANTE,
    name: 'Dilettante',
    traits: [TraitId.A_LITTLE_BIT_OF_EVERYTHING],
    quirks: [QuirkId.CANT_FEND_FOR_MYSELF],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.BARGAIN,
        SkillId.CHARM,
        SkillId.EAVESDROP,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.GAMBLE,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED
      ],
      talents: [
        TalentId.CHARISMATIC,
        TalentId.COMMON_SENSE,
        TalentId.DRESSED_TO_THE_NINES
      ]
    }
  },
  {
    id: ProfessionId.DIPLOMAT,
    name: 'Diplomat',
    traits: [TraitId.READ_THE_ROOM],
    quirks: [QuirkId.THINK_BEFORE_ACTING],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.LEADERSHIP,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED
      ],
      talents: [
        TalentId.CHARISMATIC,
        TalentId.SMOOTH_TALKER,
        TalentId.TALK_LESS_SMILE_MORE
      ]
    }
  },
  {
    id: ProfessionId.DISPATCH_RIDER,
    name: 'Dispatch Rider',
    traits: [TraitId.BORN_IN_THE_SADDLE],
    quirks: [QuirkId.I_DISLIKE_CROWDS],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.INTELLIGENCE,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.HANDLE_ANIMAL,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.RIDE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.DANGER_SENSE,
        TalentId.HORSE_SENSE,
        TalentId.POLAR_STAR
      ]
    }
  },
  {
    id: ProfessionId.DOWSER,
    name: 'Dowser',
    traits: [TraitId.TELL_ME_WHAT_YOU_SEEK],
    quirks: [QuirkId.NO_RESPECT],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.FOLKLORE,
        SkillId.INCANTATION,
        SkillId.NAVIGATION,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.EBB_AND_FLOW,
        TalentId.IRONCLAD,
        TalentId.PERCEPTIVE
      ]
    }
  },
  {
    id: ProfessionId.ENGRAVER,
    name: 'Engraver',
    traits: [TraitId.STEADY_HANDS],
    quirks: [QuirkId.PHYSIQUE_OF_AN_ARTIST],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.CHARM,
        SkillId.COUNTERFEIT,
        SkillId.FOLKLORE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.BLACKSMITHING,
        TalentId.COMMON_SENSE,
        TalentId.JADED
      ]
    }
  },
  {
    id: ProfessionId.FARMER,
    name: 'Farmer',
    traits: [TraitId.FARMERS_ALMANAC],
    quirks: [QuirkId.BAD_LUCK],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.DRIVE,
        SkillId.FOLKLORE,
        SkillId.HANDLE_ANIMAL,
        SkillId.RESOLVE,
        SkillId.RIDE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.BREAK_MY_FAST,
        TalentId.FARMING,
        TalentId.HERCULEAN_EFFORT
      ]
    }
  },
  {
    id: ProfessionId.FIREBRAND,
    name: 'Firebrand',
    traits: [TraitId.OPEN_MINDED],
    quirks: [QuirkId.BIGMOUTH_STRIKES_AGAIN],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.BARGAIN,
        SkillId.EAVESDROP,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY
      ],
      talents: [
        TalentId.BEAR_GARDEN_JAW,
        TalentId.CHARISMATIC,
        TalentId.REBEL_YELL
      ]
    }
  },
  {
    id: ProfessionId.FOLK_HEALER,
    name: 'Folk Healer',
    traits: [TraitId.WE_ARE_THE_LIGHT],
    quirks: [QuirkId.LIFE_IS_PRECIOUS],
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.FOLKLORE,
        SkillId.HEAL,
        SkillId.INCANTATION,
        SkillId.LEADERSHIP,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SIMPLE_RANGED,
        SkillId.SURVIVAL
      ],
      talents: [
        TalentId.BURN_BRIGHT,
        TalentId.FIELD_SURGERY,
        TalentId.TENACITY
      ]
    }
  },
  {
    id: ProfessionId.FORTUNE_TELLER,
    name: 'Fortune Teller',
    traits: [TraitId.WANT_TO_KNOW_YOUR_FORTUNE],
    quirks: [QuirkId.UNKNOWN_FATE],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.CHARM,
        SkillId.FOLKLORE,
        SkillId.GAMBLE,
        SkillId.GUILE,
        SkillId.INCANTATION,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE
      ],
      talents: [
        TalentId.CLOSE_SHAVE,
        TalentId.METTLE,
        TalentId.OCCULT
      ]
    }
  },
  {
    id: ProfessionId.FREEBOOTER,
    name: 'Freebooter',
    traits: [TraitId.WITHIN_MY_REACH],
    quirks: [QuirkId.RISKY_BUSINESS],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.GUILE,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY
      ],
      talents: [
        TalentId.POKER_FACE,
        TalentId.TWISTICAL,
        TalentId.UNDER_THE_GUN
      ]
    }
  },
  {
    id: ProfessionId.FUR_TRAPPER,
    name: 'Fur Trapper',
    traits: [TraitId.BEAST_SLAYER],
    quirks: [QuirkId.A_HIGH_PRICE_TO_PAY],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.FOLKLORE,
        SkillId.HANDLE_ANIMAL,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.ANIMALISTIC,
        TalentId.GUT_INSTINCT,
        TalentId.LEATHERWORKING
      ]
    }
  },
  {
    id: ProfessionId.GAMBLER,
    name: 'Gambler',
    traits: [TraitId.FORTUNE_IS_PLEASED],
    quirks: [QuirkId.FORTUNE_IS_VEXED],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.CHARM,
        SkillId.GAMBLE,
        SkillId.GUILE,
        SkillId.MARTIAL_RANGED,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY
      ],
      talents: [
        TalentId.CHEAT_SHEET,
        TalentId.DRESSED_TO_THE_NINES,
        TalentId.HOLDOUT
      ]
    }
  },
  {
    id: ProfessionId.GREENGROCER,
    name: 'Greengrocer',
    traits: [TraitId.A_FAIR_PRICE],
    quirks: [QuirkId.OUT_OF_MY_DEPTH],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.COUNTERFEIT,
        SkillId.GAMBLE,
        SkillId.GUILE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.ARITHMETIC,
        TalentId.HOBNOBBERY,
        TalentId.ROLE_REVERSAL
      ]
    }
  },
  {
    id: ProfessionId.GRENADIER,
    name: 'Grenadier',
    traits: [TraitId.FORLORN_HOPE],
    quirks: [QuirkId.MY_EARS_STILL_RING],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_RANGED,
        SkillId.RIDE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.WARFARE
      ],
      talents: [
        TalentId.GUT_INSTINCT,
        TalentId.MILITARISTIC,
        TalentId.RICOCHET
      ]
    }
  },
  {
    id: ProfessionId.GUERILLA,
    name: 'Guerilla',
    traits: [TraitId.AMBUSH_TACTICS],
    quirks: [QuirkId.LONER],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS,
        SkillId.WARFARE
      ],
      talents: [
        TalentId.AMBIDEXTERITY,
        TalentId.MILITARISTIC,
        TalentId.NIMBLE_FINGERS
      ]
    }
  },
  {
    id: ProfessionId.GUNSMITH,
    name: 'Gunsmith',
    traits: [TraitId.MY_RETRIBUTION],
    quirks: [QuirkId.PHANTOM_LIMB],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.MARTIAL_RANGED,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.NIMBLE_FINGERS,
        TalentId.RICOCHET,
        TalentId.WHITES_OF_THEIR_EYES
      ]
    }
  },
  {
    id: ProfessionId.HERBALIST,
    name: 'Herbalist',
    traits: [TraitId.A_TRACE_OF_LIFE],
    quirks: [QuirkId.BLOODLESS_HANDS],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.BARGAIN,
        SkillId.FOLKLORE,
        SkillId.HANDLE_ANIMAL,
        SkillId.HEAL,
        SkillId.INCANTATION,
        SkillId.NAVIGATION,
        SkillId.RESOLVE,
        SkillId.SIMPLE_RANGED,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.FIELD_DRESSING,
        TalentId.MANNA_OF_GOD,
        TalentId.POST_HASTE
      ]
    }
  },
  {
    id: ProfessionId.HIRED_HAND,
    name: 'Hired Hand',
    traits: [TraitId.ROUGH_WORK],
    quirks: [QuirkId.STUBBORN_AS_A_MULE],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.CHARM,
        SkillId.COORDINATION,
        SkillId.EAVESDROP,
        SkillId.HANDLE_ANIMAL,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.GUT_INSTINCT,
        TalentId.POT_VALIANT,
        TalentId.WOODWORKING
      ]
    }
  },
  {
    id: ProfessionId.INFORMANT,
    name: 'Informant',
    traits: [TraitId.SHADOW_BROKER],
    quirks: [QuirkId.TOO_MANY_SECRETS],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COUNTERFEIT,
        SkillId.DISGUISE,
        SkillId.EAVESDROP,
        SkillId.GUILE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH
      ],
      talents: [
        TalentId.NOM_DE_GUERRE,
        TalentId.POKER_FACE,
        TalentId.WHIP_JACKET
      ]
    }
  },
  {
    id: ProfessionId.LAMPLIGHTER,
    name: 'Lamplighter',
    traits: [TraitId.NIGHT_SIGHT],
    quirks: [QuirkId.LIGHT_SENSITIVE],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.EAVESDROP,
        SkillId.FOLKLORE,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH
      ],
      talents: [
        TalentId.BURN_BRIGHT,
        TalentId.COMMON_SENSE,
        TalentId.WHIP_JACKET
      ]
    }
  },
  {
    id: ProfessionId.LAWYER,
    name: 'Lawyer',
    traits: [TraitId.TRUTH_SHALL_SET_YOU_FREE],
    quirks: [QuirkId.UNYIELDING_IN_ALL_THINGS],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.CHARM,
        SkillId.EDUCATION,
        SkillId.GUILE,
        SkillId.INTERROGATION,
        SkillId.RIDE,
        SkillId.RUMOR,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.CHARISMATIC,
        TalentId.SMOOTH_TALKER,
        TalentId.TALK_LESS_SMILE_MORE
      ]
    }
  },
  {
    id: ProfessionId.LIBERTINE,
    name: 'Libertine',
    traits: [TraitId.WELL_ACTUALLY],
    quirks: [QuirkId.PLUCK_THE_DAY],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.CHARM,
        SkillId.EAVESDROP,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.GAMBLE,
        SkillId.GUILE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SKULDUGGERY
      ],
      talents: [
        TalentId.CAST_IRON_STOMACH,
        TalentId.COSTUMING,
        TalentId.DRESSED_TO_THE_NINES
      ]
    }
  },
  {
    id: ProfessionId.MAGISTRATE,
    name: 'Magistrate',
    traits: [TraitId.JUDGMENT_IS_HERE],
    quirks: [QuirkId.EVEN_HANDED],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.EDUCATION,
        SkillId.GUILE,
        SkillId.INTERROGATION,
        SkillId.LEADERSHIP,
        SkillId.RIDE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.EBB_AND_FLOW,
        TalentId.SAGACITY,
        TalentId.TRIVIUM
      ]
    }
  },
  {
    id: ProfessionId.MARINER,
    name: 'Mariner',
    traits: [TraitId.A_LIFE_AT_SEA],
    quirks: [QuirkId.SEA_LEGS],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.FOLKLORE,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.PILOT,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.FULL_OF_BEANS,
        TalentId.HERCULEAN_EFFORT,
        TalentId.SAILING
      ]
    }
  },
  {
    id: ProfessionId.MENDICANT,
    name: 'Mendicant',
    traits: [TraitId.GUIDING_LIGHT],
    quirks: [QuirkId.ASCETICISM],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.CHARM,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.NAVIGATION,
        SkillId.RESOLVE,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.BRAINS_OVER_BRAWN,
        TalentId.METTLE,
        TalentId.THEOLOGY
      ]
    }
  },
  {
    id: ProfessionId.MENTALIST,
    name: 'Mentalist',
    traits: [TraitId.NO_MERE_PHENOMENA],
    quirks: [QuirkId.NOSEBLEEDS],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.CHARM,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.INCANTATION,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SKULDUGGERY
      ],
      talents: [
        TalentId.AT_A_DISTANCE,
        TalentId.HOLDOUT,
        TalentId.METTLE
      ]
    }
  },
  {
    id: ProfessionId.MERCHANT,
    name: 'Merchant',
    traits: [TraitId.TIP_THE_SCALES],
    quirks: [QuirkId.HUSTLE_AND_FLOW],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.EDUCATION,
        SkillId.GAMBLE,
        SkillId.GUILE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.ARITHMETIC,
        TalentId.JADED,
        TalentId.REBEL_YELL
      ]
    }
  },
  {
    id: ProfessionId.MIDWIFE,
    name: 'Midwife',
    traits: [TraitId.EASE_THE_PAIN],
    quirks: [QuirkId.THE_OLD_WAYS],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.ATHLETICS,
        SkillId.CHARM,
        SkillId.FOLKLORE,
        SkillId.HEAL,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.FIELD_DRESSING,
        TalentId.MANNA_OF_GOD,
        TalentId.PHARMACOPOEIA
      ]
    }
  },
  {
    id: ProfessionId.MILITIA,
    name: 'Militia',
    traits: [TraitId.DONT_TREAD_ON_ME],
    quirks: [QuirkId.TOO_INDEPENDENT],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.COORDINATION,
        SkillId.FOLKLORE,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.WARFARE
      ],
      talents: [
        TalentId.CHASE_THE_PAIN,
        TalentId.FRIENDLY_FIRE,
        TalentId.MILITARISTIC
      ]
    }
  },
  {
    id: ProfessionId.MILLINER,
    name: 'Milliner',
    traits: [TraitId.ITS_JUST_BUSINESS],
    quirks: [QuirkId.MAD_HATTER_SYNDROME],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.COUNTERFEIT,
        SkillId.EAVESDROP,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.RIDE,
        SkillId.RUMOR,
        SkillId.SIMPLE_RANGED,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.COSTUMING,
        TalentId.HOBNOBBERY,
        TalentId.TAILORING
      ]
    }
  },
  {
    id: ProfessionId.MUSICIAN,
    name: 'Musician',
    traits: [TraitId.RISING_ANTHEM],
    quirks: [QuirkId.NOT_YOUR_SOLDIER],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.CHARM,
        SkillId.COORDINATION,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.MARTIAL_RANGED,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.WARFARE
      ],
      talents: [
        TalentId.ARTISTRY,
        TalentId.PERCEPTIVE,
        TalentId.RIBALDRY
      ]
    }
  },
  {
    id: ProfessionId.MUTINEER,
    name: 'Mutineer',
    traits: [TraitId.CALL_TO_ARMS],
    quirks: [QuirkId.TROUBLEMAKER],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.INTIMIDATE,
        SkillId.LEADERSHIP,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.PILOT,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.JADED,
        TalentId.LINEAR_TACTICS,
        TalentId.UNDER_THE_GUN
      ]
    }
  },
  {
    id: ProfessionId.OFFICER,
    name: 'Officer',
    traits: [TraitId.BATTLE_BUDDY],
    quirks: [QuirkId.ARMS_FOR_THE_POOR],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.INTIMIDATE,
        SkillId.LEADERSHIP,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.RESOLVE,
        SkillId.RIDE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.CLOSE_SHAVE,
        TalentId.MILITARISTIC,
        TalentId.WHITES_OF_THEIR_EYES
      ]
    }
  },
  {
    id: ProfessionId.PARTISAN,
    name: 'Partisan',
    traits: [TraitId.MOB_RULE],
    quirks: [QuirkId.SERPENT_EATING_ITS_TAIL],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.GUILE,
        SkillId.INTIMIDATE,
        SkillId.LEADERSHIP,
        SkillId.MARTIAL_RANGED,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY
      ],
      talents: [
        TalentId.FRIENDLY_FIRE,
        TalentId.REBEL_YELL,
        TalentId.SIMON_PURE
      ]
    }
  },
  {
    id: ProfessionId.POLITICIAN,
    name: 'Politician',
    traits: [TraitId.ART_OF_COMPROMISE],
    quirks: [QuirkId.OVERLY_CAUTIOUS],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.COUNTERFEIT,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.LEADERSHIP,
        SkillId.RIDE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED
      ],
      talents: [
        TalentId.BEAR_GARDEN_JAW,
        TalentId.CHARISMATIC,
        TalentId.TWISTICAL
      ]
    }
  },
  {
    id: ProfessionId.PRECEPTOR,
    name: 'Preceptor',
    traits: [TraitId.SCHOLAR_AND_STUDENT],
    quirks: [QuirkId.OVERLY_SKEPTICAL],
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.INCANTATION,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SCRUTINIZE
      ],
      talents: [
        TalentId.BRAINS_OVER_BRAWN,
        TalentId.OCCULT,
        TalentId.SAGACITY
      ]
    }
  },
  {
    id: ProfessionId.PRINTER,
    name: 'Printer',
    traits: [TraitId.PASSIVE_KNOWLEDGE],
    quirks: [QuirkId.ANGRY_READERSHIP],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.CHARM,
        SkillId.EDUCATION,
        SkillId.LEADERSHIP,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.BOOKBINDING,
        TalentId.POKER_FACE,
        TalentId.SMOOTH_TALKER
      ]
    }
  },
  {
    id: ProfessionId.PRIVATEER,
    name: 'Privateer',
    traits: [TraitId.FIRE_IN_THE_HOLE],
    quirks: [QuirkId.NO_HOME_PORT],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.BARGAIN,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.PILOT,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.POLAR_STAR,
        TalentId.SAILING,
        TalentId.THE_THIRD_DEGREE
      ]
    }
  },
  {
    id: ProfessionId.PUBLICAN,
    name: 'Publican',
    traits: [TraitId.KNOWS_YOUR_NAME],
    quirks: [QuirkId.DEBT_IS_OWED],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.BARGAIN,
        SkillId.CHARM,
        SkillId.EAVESDROP,
        SkillId.FOLKLORE,
        SkillId.GAMBLE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.DISTILLING,
        TalentId.HOBNOBBERY,
        TalentId.METTLE
      ]
    }
  },
  {
    id: ProfessionId.PURVEYOR,
    name: 'Purveyor',
    traits: [TraitId.ALWAYS_PREPARED],
    quirks: [QuirkId.FRAIDY_CAT],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.CHARM,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_RANGED,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.AT_A_DISTANCE,
        TalentId.COMMON_SENSE,
        TalentId.PERCEPTIVE
      ]
    }
  },
  {
    id: ProfessionId.RAMBLER,
    name: 'Rambler',
    traits: [TraitId.BACK_OF_MY_HAND],
    quirks: [QuirkId.ANTISOCIAL],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.ANIMALISTIC,
        TalentId.METTLE,
        TalentId.UNDER_THE_GUN
      ]
    }
  },
  {
    id: ProfessionId.REGULAR,
    name: 'Regular',
    traits: [TraitId.DEATH_PROOF],
    quirks: [QuirkId.GUILTLESS],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.INTERROGATION,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.WARFARE
      ],
      talents: [
        TalentId.FRIENDLY_FIRE,
        TalentId.MILITARISTIC,
        TalentId.UNDER_THE_GUN
      ]
    }
  },
  {
    id: ProfessionId.RESURRECTIONIST,
    name: 'Resurrectionist',
    traits: [TraitId.VERY_SNEAKY],
    quirks: [QuirkId.GRAVE_STENCH],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.FOLKLORE,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.COMMON_SENSE,
        TalentId.TAKE_A_GANDER,
        TalentId.WHIP_JACKET
      ]
    }
  },
  {
    id: ProfessionId.ROAD_AGENT,
    name: 'Road Agent',
    traits: [TraitId.HELLO_TRAVELER],
    quirks: [QuirkId.COWARDS_HEART],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.CHARM,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_RANGED,
        SkillId.RIDE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH,
        SkillId.SURVIVAL
      ],
      talents: [
        TalentId.OFF_THE_BRIDLE,
        TalentId.PUGILISM,
        TalentId.REBEL_YELL
      ]
    }
  },
  {
    id: ProfessionId.SERVANT,
    name: 'Servant',
    traits: [TraitId.HIDE_IN_PLAIN_SIGHT],
    quirks: [QuirkId.LOW_CLASS],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.DRIVE,
        SkillId.EAVESDROP,
        SkillId.FOLKLORE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.BREAK_MY_FAST,
        TalentId.HOBNOBBERY,
        TalentId.PUGILISM
      ]
    }
  },
  {
    id: ProfessionId.SIN_EATER,
    name: 'Sin Eater',
    traits: [TraitId.GIVE_YOUR_SIN_UNTO_ME],
    quirks: [QuirkId.A_HEAVY_BURDEN],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.HEAL,
        SkillId.INCANTATION,
        SkillId.INTIMIDATE,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.BRAINS_OVER_BRAWN,
        TalentId.BURN_BRIGHT,
        TalentId.PLANAR_ALIGNMENT
      ]
    }
  },
  {
    id: ProfessionId.SMITH,
    name: 'Smith',
    traits: [TraitId.TECHNICAL_MASTERY],
    quirks: [QuirkId.FORGE_SCARRED],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_MELEE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.AMBIDEXTERITY,
        TalentId.BLACKSMITHING,
        TalentId.NATURAL_WRESTLER
      ]
    }
  },
  {
    id: ProfessionId.SPIRITUALIST,
    name: 'Spiritualist',
    traits: [TraitId.SPEAK_WITH_SPIRITS],
    quirks: [QuirkId.I_SEE_DEAD_PEOPLE],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.CHARM,
        SkillId.FOLKLORE,
        SkillId.INCANTATION,
        SkillId.RESOLVE,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.OCCULT,
        TalentId.SELF_MEDICATION,
        TalentId.TENACITY
      ]
    }
  },
  {
    id: ProfessionId.STATIONER,
    name: 'Stationer',
    traits: [TraitId.I_READ_ABOUT_IT_ONCE],
    quirks: [QuirkId.BEFUDDLED],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.COUNTERFEIT,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.INCANTATION,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED
      ],
      talents: [
        TalentId.BOOKBINDING,
        TalentId.COMMON_SENSE,
        TalentId.TURN_THE_PAGE
      ]
    }
  },
  {
    id: ProfessionId.SURVEYOR,
    name: 'Surveyor',
    traits: [TraitId.LAND_READER],
    quirks: [QuirkId.ALONE_RANGER],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.EDUCATION,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.RIDE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.ARITHMETIC,
        TalentId.POLAR_STAR,
        TalentId.SCIENCE
      ]
    }
  },
  {
    id: ProfessionId.SURVIVALIST,
    name: 'Survivalist',
    traits: [TraitId.RURAL_STALKER],
    quirks: [QuirkId.OUT_IN_THE_OPEN],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.DANGER_SENSE,
        TalentId.MIMICRY,
        TalentId.POLAR_STAR
      ]
    }
  },
  {
    id: ProfessionId.TAILOR,
    name: 'Tailor',
    traits: [TraitId.RESPECT_THE_DRIP],
    quirks: [QuirkId.DISCERNING_TASTES],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.CHARM,
        SkillId.COORDINATION,
        SkillId.COUNTERFEIT,
        SkillId.DISGUISE,
        SkillId.EAVESDROP,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.COSTUMING,
        TalentId.NIMBLE_FINGERS,
        TalentId.TAILORING
      ]
    }
  },
  {
    id: ProfessionId.TAX_COLLECTOR,
    name: 'Tax Collector',
    traits: [TraitId.EYES_IN_THE_BACK_OF_MY_HEAD],
    quirks: [QuirkId.POLITICAL_RESPONSIBILITIES],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.COUNTERFEIT,
        SkillId.EAVESDROP,
        SkillId.GUILE,
        SkillId.INTIMIDATE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.PERCEPTIVE,
        TalentId.REBEL_YELL,
        TalentId.STEADFAST
      ]
    }
  },
  {
    id: ProfessionId.TEACHER,
    name: 'Teacher',
    traits: [TraitId.WELL_READ],
    quirks: [QuirkId.FISH_OUT_OF_WATER],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.CHARM,
        SkillId.COUNTERFEIT,
        SkillId.EAVESDROP,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.INTERROGATION,
        SkillId.LEADERSHIP,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED
      ],
      talents: [
        TalentId.SAGACITY,
        TalentId.TRIVIUM,
        TalentId.TURN_THE_PAGE
      ]
    }
  },
  {
    id: ProfessionId.TOUT,
    name: 'Tout',
    traits: [TraitId.A_SIMPLE_LIFE],
    quirks: [QuirkId.HELP_ME_STRANGER],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.CHARM,
        SkillId.EAVESDROP,
        SkillId.FOLKLORE,
        SkillId.GAMBLE,
        SkillId.GUILE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH
      ],
      talents: [
        TalentId.FLEECE_THE_SHEEP,
        TalentId.FREERUNNING,
        TalentId.HOBNOBBERY
      ]
    }
  },
  {
    id: ProfessionId.TOWN_CRIER,
    name: 'Town Crier',
    traits: [TraitId.DONT_SHOOT_THE_MESSENGER],
    quirks: [QuirkId.PERSONAL_HANG_UP],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.COORDINATION,
        SkillId.DRIVE,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED
      ],
      talents: [
        TalentId.CLOSE_SHAVE,
        TalentId.DANGER_SENSE,
        TalentId.WHIP_JACKET
      ]
    }
  },
  {
    id: ProfessionId.TRACKER,
    name: 'Tracker',
    traits: [TraitId.IN_TUNE_WITH_NATURE],
    quirks: [QuirkId.URBAN_IGNORANCE],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.FOLKLORE,
        SkillId.HANDLE_ANIMAL,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.ASTRONOMY,
        TalentId.IRONCLAD,
        TalentId.NIMBLE_FINGERS
      ]
    }
  },
  {
    id: ProfessionId.TRANSLATOR,
    name: 'Translator',
    traits: [TraitId.POLYGLOT],
    quirks: [QuirkId.SKILL_DETRIMENT],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.CHARM,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.DRESSED_TO_THE_NINES,
        TalentId.JADED,
        TalentId.TALK_LESS_SMILE_MORE
      ]
    }
  },
  {
    id: ProfessionId.TURNCOAT,
    name: 'Turncoat',
    traits: [TraitId.FLUID_ALLEGIANCE],
    quirks: [QuirkId.MARKED_FOR_DEATH],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.BARGAIN,
        SkillId.DISGUISE,
        SkillId.INTERROGATION,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.POKER_FACE,
        TalentId.ROLE_REVERSAL,
        TalentId.THE_THIRD_DEGREE
      ]
    }
  },
  {
    id: ProfessionId.VAGRANT,
    name: 'Vagrant',
    traits: [TraitId.VAGRANT_STORY],
    quirks: [QuirkId.UNHEALTHY],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.EAVESDROP,
        SkillId.FOLKLORE,
        SkillId.HANDLE_ANIMAL,
        SkillId.NAVIGATION,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH,
        SkillId.SURVIVAL
      ],
      talents: [
        TalentId.CAST_IRON_STOMACH,
        TalentId.FREERUNNING,
        TalentId.WHIP_JACKET
      ]
    }
  },
  {
    id: ProfessionId.WEAVER,
    name: 'Weaver',
    traits: [TraitId.THREADS_OF_FATE],
    quirks: [QuirkId.A_TANGLED_WEB],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.COORDINATION,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_RANGED,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.EBB_AND_FLOW,
        TalentId.TENACITY,
        TalentId.WEAVING
      ]
    }
  },
  {
    id: ProfessionId.WHALER,
    name: 'Whaler',
    traits: [TraitId.BLOOD_AND_THUNDER],
    quirks: [QuirkId.WHITE_WHALE_HOLY_GRAIL],
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.INTELLIGENCE,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.FOLKLORE,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.PILOT,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      talents: [
        TalentId.CHASE_THE_PAIN,
        TalentId.GUT_INSTINCT,
        TalentId.TAKE_A_GANDER
      ]
    }
  },
  {
    id: ProfessionId.WRIGHT,
    name: 'Wright',
    traits: [TraitId.MASTER_BUILDER],
    quirks: [QuirkId.HACK_HAND],
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_RANGED,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.TRADECRAFT
      ],
      talents: [
        TalentId.HERCULEAN_EFFORT,
        TalentId.JADED,
        TalentId.WOODWORKING
      ]
    }
  },
  {
    id: ProfessionId.WRITER,
    name: 'Writer',
    traits: [TraitId.WELL_PUBLISHED],
    quirks: [QuirkId.PEN_NAME],
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.CHARM,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.GAMBLE,
        SkillId.LEADERSHIP,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED
      ],
      talents: [
        TalentId.NOM_DE_GUERRE,
        TalentId.RIBALDRY,
        TalentId.TURN_THE_PAGE
      ]
    }
  },
  // {
  //   id: ProfessionId.,
  //   name: '',
  //   traits: [TraitId.],
  //   quirks: [QuirkId.],
  //   advancements: {
  //     bonuses: [
  //       AttributeId.,
  //       AttributeId.,
  //       AttributeId.,
  //       AttributeId.,
  //       AttributeId.,
  //       AttributeId.,
  //       AttributeId.
  //     ],
  //     skills: [
  //       SkillId.,
  //       SkillId.,
  //       SkillId.,
  //       SkillId.,
  //       SkillId.,
  //       SkillId.,
  //       SkillId.,
  //       SkillId.,
  //       SkillId.,
  //       SkillId.
  //     ],
  //     talents: [
  //       TalentId.,
  //       TalentId.,
  //       TalentId.
  //     ]
  //   }
  // },
];
