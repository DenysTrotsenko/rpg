import {Threat} from './models';
import {AttributeId, SkillId, ThreatId, ThreatTraitId, WeaponId} from './enums';
import {NotchId, RiskFactorId, SizeId, ThreatTypeId} from '@flames-of-freedom-1e/enums';

export const THREATS: Threat[] = [
  {
    id: ThreatId.ALLIGATOR,
    name: 'Alligator',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS,
      ],
      traits: [
        { id: ThreatTraitId.CONSTRICTOR },
        { id: ThreatTraitId.CRUSHING },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.SNEAKY },
        { id: ThreatTraitId.SWIFT },
      ]
    },
    labels: {
      description: '',
      wares: 'Alligator hide, Meat (9)',
      movement: '11/6 (Swim)'
    },
    weapons: [
      WeaponId.SNAPJAW
    ]
  },
  {
    id: ThreatId.APPALACHIAN_GIANT,
    name: 'Appalachian Giant',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.FOLKLORE, SkillId.FOLKLORE,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.BRAWNY, value: 2 },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.DUSK_TO_DAWN, value: 'Stone' },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.LIGHT_SENSITIVITY, value: 2 },
      ]
    },
    labels: {
      description: '',
      wares: 'Crucifix, Holy bible'
    },
    weapons: [
      WeaponId.IRON_HARD_FISTS
    ]
  },
  {
    id: ThreatId.APPARITION,
    name: 'Apparition',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 35,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.FELLOWSHIP
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.EAVESDROP, SkillId.EAVESDROP, SkillId.EAVESDROP,
        SkillId.FOLKLORE, SkillId.FOLKLORE,
        SkillId.GUILE, SkillId.GUILE, SkillId.GUILE,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.RUMOR, SkillId.RUMOR,
        SkillId.SCRUTINIZE, SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH, SkillId.STEALTH, SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.DUSK_TO_DAWN, value: 'Mist' },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.IMMUNITY, value: 'Injuries, Intimidate, Peril, Rough & Tumble' },
        { id: ThreatTraitId.LANTERN },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Lantern' },
        { id: ThreatTraitId.PARALYSIS },
        { id: ThreatTraitId.SPIRIT_SIGHT },
      ]
    },
    labels: {
      description: '',
      wares: 'Grave dirt and Lantern'
    },
    weapons: [
      WeaponId.ASPHYXIATING_HANDS, WeaponId.UNHOLY_LANTERN
    ]
  },
  {
    id: ThreatId.APPRENTICE_MAGE,
    name: 'Apprentice Mage',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 35,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.AWARENESS,
        SkillId.HEAL,
        SkillId.INCANTATION,
        SkillId.RESOLVE,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED
      ],
      traits: [
        { id: ThreatTraitId.BRAINS_OVER_BRAWN }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Knife, Laudanum (1), Overcoat pistol, Set of average clothes, Smelling salts (1), Tincture (1) and Writing kit'
    },
    weapons: [
      WeaponId.KNIFE, WeaponId.OVERCOAT_PISTOL
    ]
  },
  {
    id: ThreatId.ATTORNEY,
    name: 'Attorney',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 35,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 50,
    },
    advancements: {
      bonuses: [
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.WILLPOWER,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN, SkillId.BARGAIN,
        SkillId.CHARM, SkillId.CHARM,
        SkillId.EDUCATION,
        SkillId.GUILE, SkillId.GUILE,
        SkillId.INTERROGATION, SkillId.INTERROGATION,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED
      ],
      traits: [
        { id: ThreatTraitId.JUDGMENT_IS_HERE },
        { id: ThreatTraitId.SMOOTH_TALKER },
        { id: ThreatTraitId.TALK_LESS_SMILE_MORE },
        { id: ThreatTraitId.TRUTH_SHALL_SET_YOU_FREE }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Book (one topic), Flintlock pistol, Knife, Laudanum (1), Set of average clothes, Smelling salts (1), Tincture (1) and Writing kit.'
    },
    weapons: [
      WeaponId.KNIFE,
      WeaponId.FLINTLOCK_PISTOL,
    ]
  },
  {
    id: ThreatId.BEAVER,
    name: 'Beaver',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 50,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS,
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.STENCH },
      ]
    },
    labels: {
      description: '',
      wares: 'Beaver pelt (1), Meat (6)'
    },
    weapons: [
      WeaponId.SCRATCH
    ]
  },
  {
    id: ThreatId.BISON,
    name: 'Bison',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 50,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 35,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION, AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS,
      ],
      traits: [
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.PACK_TACTICS },
        { id: ThreatTraitId.SNEAKY },
        { id: ThreatTraitId.SWIFT },
      ]
    },
    labels: {
      description: '',
      wares: 'Bison hide, Meat (6)'
    },
    weapons: [
      WeaponId.THUNDEROUS_HOOVES
    ]
  },
  {
    id: ThreatId.BLACK_BEAR,
    name: 'Black Bear',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS,
      ],
      traits: [
        { id: ThreatTraitId.ASSAIL },
        { id: ThreatTraitId.BRUTAL },
        { id: ThreatTraitId.CHOSEN },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.HYPERSENSITIVITY },
        { id: ThreatTraitId.SECOND_WIND },
        { id: ThreatTraitId.THICK_HIDE, value: 1 },
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (4), Black Bear pelt (1)'
    },
    weapons: [
      WeaponId.BEAR_CLAW, WeaponId.BEAR_BITE
    ]
  },
  {
    id: ThreatId.BLACK_MAGE,
    name: 'Black Mage',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 35,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER,
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.AWARENESS,
        SkillId.AWARENESS,
        SkillId.EDUCATION,
        SkillId.GUILE,
        SkillId.INCANTATION,
        SkillId.INCANTATION,
        SkillId.RESOLVE,
        SkillId.RESOLVE,
        SkillId.SCRUTINIZE,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.BRAINS_OVER_BRAWN },
        { id: ThreatTraitId.PLANAR_ALIGNMENT },
        { id: ThreatTraitId.POKER_FACE },
        { id: ThreatTraitId.WITCHS_MARK },
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Knife, Laudanum (1), Overcoat pistol, Set of average clothes, Smelling salts (1), Tincture (1) and Writing kit.'
    },
    weapons: [
      WeaponId.KNIFE, WeaponId.OVERCOAT_PISTOL,
    ]
  },
  {
    id: ThreatId.BLACK_SHUCK,
    name: 'Black Shuck',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.COMBAT
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.INTIMIDATE,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.STEALTH,
        SkillId.SURVIVAL
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.FLIGHTLESS },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.LIGHT_SENSITIVITY, value: 3 },
        { id: ThreatTraitId.PACK_TACTICS },
        { id: ThreatTraitId.SWIFT },
      ]
    },
    labels: {
      description: '',
      movement: '10/13 (Fly)',
      wares: 'Black Shuck pelt, Meat (6)'
    },
    weapons: [
      WeaponId.DOG_BITE
    ]
  },
  {
    id: ThreatId.BOG_BODY,
    name: 'Bog Body',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS,
      ],
      traits: [
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.IMMUNITY, value: 'Bleeding, Intimidate, Peril' },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Amulet' },
        { id: ThreatTraitId.MINDLESS },
      ]
    },
    labels: {
      description: '',
      wares: 'Amulet, Mask, Moldy wrappings'
    },
    weapons: [
      WeaponId.IRON_HARD_FISTS
    ]
  },
  {
    id: ThreatId.CARCAJOU,
    name: 'Carcajou',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS,
      ],
      traits: [
        { id: ThreatTraitId.AILMENT, value: 'Sepsis' },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.LETHARGY }
      ]
    },
    labels: {
      description: '',
      wares: 'Carcajou pelt, Meat (6)'
    },
    weapons: [
      WeaponId.WOLVERINE_CLAWS
    ]
  },
  {
    id: ThreatId.CHOKING_TREE,
    name: 'Choking Tree',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 35,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.COORDINATION,
        SkillId.EAVESDROP,
        SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS,
      ],
      traits: [
        { id: ThreatTraitId.IMMUNITY, value: 'Intimidate, Injuries, Rough & Tumble' },
        { id: ThreatTraitId.IMMOBILE },
        { id: ThreatTraitId.INESCAPABLE },
        { id: ThreatTraitId.MINDLESS },
        { id: ThreatTraitId.SWALLOW },
        { id: ThreatTraitId.SWARM },
        { id: ThreatTraitId.WEAKNESS, value: 'Fire, Melee weapons' }
      ]
    },
    labels: {
      description: '',
      wares: 'Strong ropelike vines (9 yards)'
    },
    weapons: [
      WeaponId.VINE_LASH, WeaponId.VINE_STRIKE
    ]
  },
  {
    id: ThreatId.CHUPACABRA,
    name: 'Chupacabra',
    type: ThreatTypeId.ABYSSAL,
    risk_factor: RiskFactorId.ELITE,
    notch: NotchId.UNIQUE,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 55,
      [AttributeId.PERCEPTION]: 50,
      [AttributeId.INTELLIGENCE]: 50,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 50,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SCRUTINIZE, SkillId.SCRUTINIZE, SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH, SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.AILMENT, value: 'Morsal' },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.DRAIN, value: 'Intelligence' },
        { id: ThreatTraitId.DUSK_TO_DAWN, value: 'Smoke' },
        { id: ThreatTraitId.LEAPER },
        { id: ThreatTraitId.LIGHT_FOOTED },
        { id: ThreatTraitId.SWIFT }
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (1), Musk gland, Small pelt'
    },
    weapons: [
      WeaponId.TERRIBLE_TEETH
    ]
  },
  {
    id: ThreatId.CONSTRICTOR_SNAKE,
    name: 'Constrictor Snake',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.GUILE, SkillId.GUILE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL
      ],
      traits: [
        { id: ThreatTraitId.CONSTRICTOR },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.SWALLOW }
      ]
    },
    labels: {
      description: '',
      wares: 'Constrictor snakeskin, Meat (9)'
    },
    weapons: [
      WeaponId.DEATH_SQUEEZE
    ]
  },
  {
    id: ThreatId.COYOTE,
    name: 'Coyote',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 35,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.GUILE,
        SkillId.SIMPLE_MELEE,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.LIGHT_FOOTED },
        { id: ThreatTraitId.PACK_TACTICS },
        { id: ThreatTraitId.SNEAKY }
      ]
    },
    labels: {
      description: '',
      wares: 'Coyote pelt, Meat (6)'
    },
    weapons: [
      WeaponId.SNARLING_BITE
    ]
  },
  {
    id: ThreatId.CRAWLER,
    name: 'Crawler',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.ATHLETICS,
        SkillId.COORDINATION,
        SkillId.COORDINATION,
        SkillId.INTIMIDATE,
        SkillId.INTIMIDATE,
        SkillId.RESOLVE,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL,
        SkillId.SURVIVAL,
      ],
      traits: [
        { id: ThreatTraitId.AILMENT, value: 'Throat Distemper' },
        { id: ThreatTraitId.BATTLE_BUDDY },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.LEAPER },
        { id: ThreatTraitId.LIGHT_SENSITIVITY, value: 2 },
        { id: ThreatTraitId.MINDLESS },
        { id: ThreatTraitId.PACK_TACTICS },
        { id: ThreatTraitId.SWIFT }
      ]
    },
    labels: {
      description: '',
      movement: '7/8 (Crawler)',
      wares: 'Dirt-caked clothing and Memento of a former life'
    },
    weapons: [
      WeaponId.FILTHY_CLAWS
    ]
  },
  {
    id: ThreatId.DEVIL_DOG,
    name: 'Devil Dog',
    type: ThreatTypeId.ABYSSAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 35,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 45,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS,
      ],
      traits: [
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.HEAT },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.INFERNAL },
        { id: ThreatTraitId.SHAPESHIFT, value: 'Hunting Dog' },
        { id: ThreatTraitId.SPIRIT_SIGHT },
        { id: ThreatTraitId.SWIFT }
      ]
    },
    labels: {
      description: '',
      wares: 'Collar with their name on it, Nugget of coal, Pile of sulfur'
    },
    weapons: [
      WeaponId.SNARLING_BITE
    ]
  },
  {
    id: ThreatId.DOG_ANT,
    name: 'Dog Ant',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.CRUSHING },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.MINDLESS },
        { id: ThreatTraitId.PACK_TACTICS },
        { id: ThreatTraitId.SWIFT },
        { id: ThreatTraitId.THICK_HIDE, value: 3 }
      ]
    },
    labels: {
      description: '',
      movement: '9/5 (Climb)',
      wares: 'Ant mandible (2), Meat (6)'
    },
    weapons: [
      WeaponId.MANDIBLES
    ]
  },
  {
    id: ThreatId.EAGLE,
    name: 'Eagle',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.INTIMIDATE,
        SkillId.NAVIGATION,
        SkillId.SIMPLE_MELEE,
        SkillId.STEALTH,
        SkillId.SURVIVAL
      ],
      traits: [
        { id: ThreatTraitId.FLIGHTLESS },
        { id: ThreatTraitId.HYPERSENSITIVITY },
        { id: ThreatTraitId.SECOND_WIND },
        { id: ThreatTraitId.SWIFT }
      ]
    },
    labels: {
      description: '',
      movement: '12/15 (Fly)',
      wares: 'Eagle feathers (6), Meat (6)'
    },
    weapons: [
      WeaponId.BEAK_AND_TALONS
    ]
  },
  {
    id: ThreatId.EXPLORER,
    name: 'Explorer',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED, SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.POLAR_STAR },
        { id: ThreatTraitId.RURAL_STALKER },
        { id: ThreatTraitId.TAKE_A_GANDER }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Camping kit, Hatchet, Hunting bag, Musketoon, Laudanum (1), Set of inferior clothes, Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.HATCHET, WeaponId.MUSKETOON
    ]
  },
  {
    id: ThreatId.FARMER,
    name: 'Farmer',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.DRIVE,
        SkillId.HANDLE_ANIMAL,
        SkillId.RESOLVE,
        SkillId.RIDE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.DIAMOND_IN_THE_ROUGH }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Camping kit, Hatchet, Hunting bag, Fowler musket, Laudanum (1), Set of inferior clothes, Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.FOWLER_MUSKET, WeaponId.HATCHET
    ]
  },
  {
    id: ThreatId.FREEMASON_AGENT,
    name: 'Freemason Agent',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 35,
      [AttributeId.FELLOWSHIP]: 45,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.AGILITY
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.INTIMIDATE,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.LINEAR_TACTICS }
      ]
    },
    labels: {
      description: '',
      wares: 'Antidote (1), Blackpowder w/Bullets (18), Flintlock pistol, Knife (2), Laudanum (1), Set of dark clothes, Smelling salts (1), Tincture (1) and Tobacco (3)'
    },
    weapons: [
      WeaponId.KNIFE, WeaponId.FLINTLOCK_PISTOL
    ]
  },
  {
    id: ThreatId.FREEMASON_ALCHEMIST,
    name: 'Freemason Alchemist',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 0,
      [AttributeId.BRAWN]: 0,
      [AttributeId.AGILITY]: 0,
      [AttributeId.PERCEPTION]: 0,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.COORDINATION,
        SkillId.MARTIAL_RANGED,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH,
        SkillId.TOUGHNESS,
        SkillId.TOUGHNESS,
        SkillId.WARFARE,
      ],
      traits: [
        { id: ThreatTraitId.AT_A_DISTANCE },
        { id: ThreatTraitId.DANGER_SENSE },
        { id: ThreatTraitId.FORLORN_HOPE },
        { id: ThreatTraitId.TAKE_A_GANDER }
      ]
    },
    labels: {
      description: '',
      wares: 'Antidote (1), Flintlock pistol, Fused grenade (2) Knife (2), Laudanum (1), Powder bomb (1) Set of dark clothes, Smelling salts (1), Tincture (1) and Tobacco (3)'
    },
    weapons: [
      WeaponId.KNIFE, WeaponId.FUSED_GRENADE, WeaponId.POWDER_BOMB
    ]
  },
  {
    id: ThreatId.FREEMASON_ENTERED_APPRENTICE,
    name: 'Freemason Entered Apprentice',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.INCANTATION,
        SkillId.INTERROGATION,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.METTLE },
        { id: ThreatTraitId.NO_MERE_PHENOMENA },
        { id: ThreatTraitId.PLANAR_ALIGNMENT }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Knife, Laudanum (1), Overcoat pistol, Set of average clothes, Smelling salts (1), Tincture (1) and Writing kit'
    },
    weapons: [
      WeaponId.KNIFE, WeaponId.OVERCOAT_PISTOL
    ]
  },
  {
    id: ThreatId.FREEMASON_FELLOWCRAFT,
    name: 'Freemason Fellowcraft',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.ATHLETICS,
        SkillId.COORDINATION,
        SkillId.COORDINATION,
        SkillId.INTERROGATION,
        SkillId.INTERROGATION,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.RESOLVE,
        SkillId.TOUGHNESS,
        SkillId.TOUGHNESS,
        SkillId.WARFARE
      ],
      traits: [
        { id: ThreatTraitId.IRONCLAD },
        { id: ThreatTraitId.RICOCHET },
        { id: ThreatTraitId.TAKE_A_GANDER },
        { id: ThreatTraitId.WHITES_OF_THEIR_EYES }
      ]
    },
    labels: {
      description: '',
      wares: 'Bayonet, Bedroll, Blackpowder w/Bullets (18), Brown Bess musket, Knapsack, Laudanum (1), Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.BAYONET, WeaponId.BROWN_BESS_MUSKET
    ]
  },
  {
    id: ThreatId.FREEMASON_MASTER,
    name: 'Freemason Master',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 0,
      [AttributeId.BRAWN]: 0,
      [AttributeId.AGILITY]: 0,
      [AttributeId.PERCEPTION]: 0,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY, SkillId.ALCHEMY, SkillId.ALCHEMY,
        SkillId.INCANTATION, SkillId.INCANTATION, SkillId.INCANTATION,
        SkillId.LEADERSHIP, SkillId.LEADERSHIP, SkillId.LEADERSHIP,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS, SkillId.TOUGHNESS,
        SkillId.WARFARE, SkillId.WARFARE, SkillId.WARFARE
      ],
      traits: [
        { id: ThreatTraitId.EBB_AND_FLOW },
        { id: ThreatTraitId.IN_TUNE_WITH_THE_AETHER },
        { id: ThreatTraitId.PLANAR_ALIGNMENT },
        { id: ThreatTraitId.TENACITY }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Laudanum (1), Flintlock pistol, Infantry sword, Set of superior clothes, Symbol of the Order, Smelling salts (1), Tincture (1) and Writing kit'
    },
    weapons: [
      WeaponId.INFANTRY_SWORD, WeaponId.FLINTLOCK_PISTOL
    ]
  },
  {
    id: ThreatId.GARGANTUAN_SPIDER,
    name: 'Gargantuan Spider',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.STEALTH, SkillId.STEALTH,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.LIGHT_SENSITIVITY, value: 2 },
        { id: ThreatTraitId.POISONOUS },
        { id: ThreatTraitId.SWIFT },
        { id: ThreatTraitId.WEAKNESS, value: 'Fire' }
      ]
    },
    labels: {
      description: '',
      movement: '10/7 (Climb)',
      wares: 'Meat (6), Poison sack, Spider carapace'
    },
    weapons: [
      WeaponId.FANGS, WeaponId.WEBBING
    ]
  },
  {
    id: ThreatId.GHOUL,
    name: 'Ghoul',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.DISGUISE, SkillId.DISGUISE,
        SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.SHAPESHIFT, value: 'Laborer' },
        { id: ThreatTraitId.SLOUGH_OFF }
      ]
    },
    labels: {
      description: '',
      wares: '1D6+1 human skins'
    },
    weapons: [
      WeaponId.TONGUE_AND_CLAWS
    ]
  },
  {
    id: ThreatId.GOLEM,
    name: 'Golem',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.BRAWNY, value: 2 },
        { id: ThreatTraitId.CONSTRICTOR },
        { id: ThreatTraitId.IMMUNITY, value: 'Injuries, Intimidate, Peril' },
        { id: ThreatTraitId.INESCAPABLE },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Amulet' },
        { id: ThreatTraitId.MINDLESS },
      ]
    },
    labels: {
      description: '',
      wares: 'Amulet embedded in head'
    },
    weapons: [
      WeaponId.IRON_HARD_FISTS
    ]
  },
  {
    id: ThreatId.GRIZZLY_BEAR,
    name: 'Grizzly Bear',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.HIGH,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.ASSAIL },
        { id: ThreatTraitId.BRUTAL },
        { id: ThreatTraitId.CHOSEN },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.HARDY },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.SECOND_WIND },
        { id: ThreatTraitId.THICK_HIDE, value: 3 }
      ]
    },
    labels: {
      description: '',
      wares: 'Grizzly bear hide, Meat (9)'
    },
    weapons: [
      WeaponId.BEAR_BITE, WeaponId.BEAR_CLAW
    ]
  },
  {
    id: ThreatId.HEADLESS_RIDER,
    name: 'Headless Rider',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.FOLKLORE,
        SkillId.HANDLE_ANIMAL, SkillId.HANDLE_ANIMAL,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.RIDE, SkillId.RIDE, SkillId.RIDE,
        SkillId.STEALTH, SkillId.STEALTH, SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.CHOSEN },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.DRAIN, value: 'Combat' },
        { id: ThreatTraitId.HARDY },
        { id: ThreatTraitId.HAUNTING },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.IMMUNITY, value: 'Injuries, Intimidate, Peril' },
        { id: ThreatTraitId.INSUBSTANTIAL },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Stolen Head' },
        { id: ThreatTraitId.MATERIALIZE },
        { id: ThreatTraitId.SWIFT },
      ]
    },
    labels: {
      description: '',
      wares: 'Cavalry sabre, Horse tackle, Stallion'
    },
    weapons: [
      WeaponId.CAVALRY_SABRE
    ]
  },
  {
    id: ThreatId.HIDEBEHIND,
    name: 'Hidebehind',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 35,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.GUILE, SkillId.GUILE, SkillId.GUILE,
        SkillId.INTERROGATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH, SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.AILMENT, value: 'Typhoid' },
        { id: ThreatTraitId.CAPTIVATION },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.HARDY },
        { id: ThreatTraitId.LEAPER },
        { id: ThreatTraitId.SNEAKY },
        { id: ThreatTraitId.SWIFT }
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (6)'
    },
    weapons: [
      WeaponId.ANTLERS_AND_CLAWS
    ]
  },
  {
    id: ThreatId.HODAG,
    name: 'Hodag',
    type: ThreatTypeId.ABYSSAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.GUILE, SkillId.GUILE,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.CHOSEN },
        { id: ThreatTraitId.INFERNAL },
        { id: ThreatTraitId.SHIFT },
        { id: ThreatTraitId.SWIFT },
        { id: ThreatTraitId.TAINT },
        { id: ThreatTraitId.THICK_HIDE, value: 3 }
      ]
    },
    labels: {
      description: '',
      movement: '11/10 (Swim)',
      wares: 'Meat (6)'
    },
    weapons: [
      WeaponId.VICIOUS_MAW
    ]
  },
  {
    id: ThreatId.HOG,
    name: 'Hog',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 35,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.STENCH }
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (6), Pig skin'
    },
    weapons: [
      WeaponId.OINK_OINK
    ]
  },
  {
    id: ThreatId.HOMUNCULUS,
    name: 'Homunculus',
    type: ThreatTypeId.ABYSSAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.SMALL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.AGILITY,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.COORDINATION,
        SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH,
      ],
      traits: [
        { id: ThreatTraitId.INFERNAL },
        { id: ThreatTraitId.LIGHT_FOOTED },
        { id: ThreatTraitId.SHAPESHIFT, value: 'Mouser' },
        { id: ThreatTraitId.SNEAKY },
        { id: ThreatTraitId.SPIRIT_SIGHT }
      ]
    },
    labels: {
      description: '',
      wares: 'Child’s toy, Collar with their name on it, Nugget of coal, Pile of sulfur'
    },
    weapons: [
      WeaponId.SCRATCH
    ]
  },
  {
    id: ThreatId.HOODED_ONE,
    name: 'Hooded One',
    type: ThreatTypeId.ABYSSAL,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 35,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.EAVESDROP, SkillId.EAVESDROP,
        SkillId.EDUCATION, SkillId.EDUCATION, SkillId.EDUCATION,
        SkillId.FOLKLORE, SkillId.FOLKLORE, SkillId.FOLKLORE,
        SkillId.GUILE, SkillId.GUILE,
        SkillId.INCANTATION, SkillId.INCANTATION,
        SkillId.INTERROGATION, SkillId.INTERROGATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.SCRUTINIZE, SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH, SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.DEAD_HANDS },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.IMMUNITY, value: 'Injuries, Intimidate, Peril' },
        { id: ThreatTraitId.MIRRORED_IMAGE },
        { id: ThreatTraitId.SPIRIT_SIGHT }
      ]
    },
    labels: {
      description: '',
      wares: 'Agricultural tool, Tattered robes'
    },
    weapons: [
      WeaponId.SICKLE
    ]
  },
  {
    id: ThreatId.HORSE,
    name: 'Horse',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 35,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 45,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.CHARM,
        SkillId.COORDINATION,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.LIGHT_FOOTED },
        { id: ThreatTraitId.SWIFT }
      ]
    },
    labels: {
      description: '',
      wares: 'Horse hide, Iron horseshoe (4), Meat (6)'
    },
    weapons: [
      WeaponId.HORSE_KICK
    ]
  },
  {
    id: ThreatId.HUNTER_GATHERER,
    name: 'Hunter-Gatherer',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.CHARM,
        SkillId.HANDLE_ANIMAL,
        SkillId.MARTIAL_RANGED,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.MIMICRY },
        { id: ThreatTraitId.TAKE_A_GANDER }
      ]
    },
    labels: {
      description: '',
      wares: 'Camping kit, Hatchet, Hunting bag, Knife, Laudanum (1), Selfbow, Quiver & Arrows (18), Set of inferior clothes, Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.HATCHET, WeaponId.KNIFE, WeaponId.SELFBOW
    ]
  },
  {
    id: ThreatId.HUNTING_DOG,
    name: 'Hunting Dog',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 35,
      [AttributeId.FELLOWSHIP]: 50,
    },
    advancements: {
      bonuses: [
        AttributeId.PERCEPTION,
        AttributeId.FELLOWSHIP
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.CHARM,
        SkillId.GUILE
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.LETHARGY }
      ]
    },
    labels: {
      description: '',
      wares: 'Collar with their name on it, Dog pelt, Meat (6)'
    },
    weapons: [
      WeaponId.SNARLING_BITE
    ]
  },
  {
    id: ThreatId.INQUISITION_AGENT,
    name: 'Inquisition Agent',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 35,
      [AttributeId.FELLOWSHIP]: 45,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.GUILE,
        SkillId.RESOLVE,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.NIMBLE_FINGERS },
        { id: ThreatTraitId.WHAT_I_DO_IN_SHADOWS }
      ]
    },
    labels: {
      description: '',
      wares: 'Antidote (1), Blackpowder w/Bullets (18), Flintlock pistol, Knife, Laudanum (1), Set of dark clothes, Smelling salts (1), Tincture (1), and Tobacco (3)'
    },
    weapons: [
      WeaponId.FLINTLOCK_PISTOL, WeaponId.KNIFE
    ]
  },
  {
    id: ThreatId.INQUISITION_FISCAL,
    name: 'Inquisition Fiscal',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 50,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 45,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.INTELLIGENCE, AttributeId.INTELLIGENCE, AttributeId.INTELLIGENCE,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER,
        AttributeId.FELLOWSHIP, AttributeId.FELLOWSHIP
      ],
      skills: [
        SkillId.BARGAIN, SkillId.BARGAIN,
        SkillId.INTERROGATION, SkillId.INTERROGATION, SkillId.INTERROGATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.LEADERSHIP, SkillId.LEADERSHIP, SkillId.LEADERSHIP,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SCRUTINIZE, SkillId.SCRUTINIZE, SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.BEAR_GARDEN_JAW },
        { id: ThreatTraitId.CALL_TO_ARMS },
        { id: ThreatTraitId.EBB_AND_FLOW },
        { id: ThreatTraitId.POKER_FACE },
        { id: ThreatTraitId.THE_THIRD_DEGREE }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Flintlock pistol, Hanger sword, Laudanum (1), Ledger, Set of superior clothes, Smelling salts (1), Tincture (1) and Writing kit'
    },
    weapons: [
      WeaponId.FLINTLOCK_PISTOL, WeaponId.HANGER_SWORD
    ]
  },
  {
    id: ThreatId.INQUISITION_WITCH_HUNTER,
    name: 'Inquisition Witch Hunter',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.COORDINATION,
        SkillId.INTERROGATION, SkillId.INTERROGATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED, SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SCRUTINIZE, SkillId.SCRUTINIZE,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.BURN_BRIGHT },
        { id: ThreatTraitId.DANGER_SENSE },
        { id: ThreatTraitId.JADED },
        { id: ThreatTraitId.NIMBLE_FINGERS },
        { id: ThreatTraitId.RICOCHET }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Camping kit, Cavalry sabre, Hunting bag, Knife, Musketoon, Laudanum (1), Set of inferior clothes, Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.CAVALRY_SABRE, WeaponId.MUSKETOON
    ]
  },
  {
    id: ThreatId.INSECT_SWARM,
    name: 'Insect Swarm',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.SMALL,
    attributes: {
      [AttributeId.COMBAT]: 35,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.IMMUNITY, value: 'Intimidate, Injuries, Rough & Tumble' },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.MINDLESS },
        { id: ThreatTraitId.SWARM },
        { id: ThreatTraitId.SWIFT },
        { id: ThreatTraitId.WEAKNESS, value: 'Fire' },
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (6), Swarm shells'
    },
    weapons: [
      WeaponId.SWARMING
    ]
  },
  {
    id: ThreatId.JOURNALIST,
    name: 'Journalist',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 35,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 50,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 45,
    },
    advancements: {
      bonuses: [
        AttributeId.WILLPOWER,
        AttributeId.FELLOWSHIP
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.CHARM,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.JADED }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Flintlock pistol, Knife, Laudanum (1), Ledger, Set of superior clothes, Smelling salts (1), Tincture (1) and Writing kit'
    },
    weapons: [
      WeaponId.FLINTLOCK_PISTOL, WeaponId.KNIFE
    ]
  },
  {
    id: ThreatId.KNIGHTS_TEMPLAR_INITIATE,
    name: 'Knights Templar Initiate',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.EDUCATION,
        SkillId.HEAL,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.CHASE_THE_PAIN }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Fowler musket, Holy symbol, Infantry sword, Laudanum (1), Ledger, Set of superior clothes, Smelling salts (1), Tincture (1) and Writing kit'
    },
    weapons: [
      WeaponId.FOWLER_MUSKET, WeaponId.INFANTRY_SWORD
    ]
  },
  {
    id: ThreatId.KNIGHTS_TEMPLAR_NOBLE,
    name: 'Knights Templar Noble',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 51,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY
      ],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.INCANTATION,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED, SkillId.MARTIAL_RANGED, SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS, SkillId.TOUGHNESS,
        SkillId.WARFARE, SkillId.WARFARE, SkillId.WARFARE
      ],
      traits: [
        { id: ThreatTraitId.CHASE_THE_PAIN },
        { id: ThreatTraitId.EBB_AND_FLOW },
        { id: ThreatTraitId.FIND_THE_HIDDEN_WORD },
        { id: ThreatTraitId.GUT_INSTINCT },
        { id: ThreatTraitId.IRONCLAD },
        { id: ThreatTraitId.MANNA_OF_GOD },
        { id: ThreatTraitId.STALWART },
        { id: ThreatTraitId.THE_THIRD_DEGREE },
      ]
    },
    labels: {
      description: '',
      wares: 'Badge of Teutonic Knighthood, Blackpowder w/Bullets (18), Dutch longpistol, Holy symbol, Infantry sword, Laudanum, Ledger, Set of superior clothes, Smelling salts (1), Tincture (1), and Writing kit'
    },
    weapons: [
      WeaponId.DUTCH_LONGPISTOL, WeaponId.INFANTRY_SWORD
    ]
  },
  {
    id: ThreatId.KNIGHTS_TEMPLAR_SERGEANT,
    name: 'Knights Templar Sergeant',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER,
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.EDUCATION, SkillId.EDUCATION,
        SkillId.HEAL, SkillId.HEAL,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.AT_EASE_MY_FRIEND },
        { id: ThreatTraitId.IRONCLAD },
        { id: ThreatTraitId.METTLE },
        { id: ThreatTraitId.STEADFAST },
      ]
    },
    labels: {
      description: '',
      wares: 'Bandages, Blackpowder w/Bullets (18), Flintlock pistol, Holy symbol, Infantry sword, Laudanum (1), Ledger, Set of superior clothes, Smelling salts (1), Tincture (1) and Writing kit (4)'
    },
    weapons: [
      WeaponId.FLINTLOCK_PISTOL, WeaponId.INFANTRY_SWORD
    ]
  },
  {
    id: ThreatId.KNIGHTS_TEMPLAR_SQUIRE,
    name: 'Knights Templar Squire',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.EDUCATION,
        SkillId.HEAL,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.IRONCLAD },
        { id: ThreatTraitId.LINEAR_TACTICS }
      ]
    },
    labels: {
      description: '',
      wares: 'Flintlock pistol, Holy symbol, Infantry sword, Blackpowder w/Bullets (18), Laudanum (1), Ledger, Set of superior clothes, Smelling salts (1), Tincture (1) and Writing kit'
    },
    weapons: [
      WeaponId.FLINTLOCK_PISTOL, WeaponId.INFANTRY_SWORD
    ]
  },
  {
    id: ThreatId.KNOCKER,
    name: 'Knocker',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 35,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 45,
    },
    advancements: {
      bonuses: [],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.EAVESDROP, SkillId.EAVESDROP,
        SkillId.FOLKLORE, SkillId.FOLKLORE,
        SkillId.GUILE, SkillId.GUILE,
        SkillId.INTERROGATION, SkillId.INTERROGATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.STEALTH, SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.HAUNTING },
        { id: ThreatTraitId.IMMUNITY, value: 'Injuries, Intimidate, Peril, Rough & Tumble' },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.INSUBSTANTIAL },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Keepsake' },
        { id: ThreatTraitId.PHENOMENA },
        { id: ThreatTraitId.SPIRIT_SIGHT }
      ]
    },
    labels: {
      description: '',
      wares: 'A keepsake from the person being haunted'
    },
    weapons: []
  },
  {
    id: ThreatId.KRAKEN,
    name: 'Kraken',
    type: ThreatTypeId.ABYSSAL,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.HIGH,
    size: SizeId.HUGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL, SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.BRAWNY, value: 3 },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.SWALLOW },
        { id: ThreatTraitId.SWIMMER }
      ]
    },
    labels: {
      description: '',
      wares: 'Assorted sailor clothing, Broken harpoon, Heart of the Kraken, Kraken skin, Meat (12)'
    },
    weapons: [
      WeaponId.ENGULFING_BITE, WeaponId.LASHING_TENTACLE
    ]
  },
  {
    id: ThreatId.LABORER,
    name: 'Laborer',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 35,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.BARGAIN,
        SkillId.COORDINATION,
        SkillId.LEADERSHIP,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.PUGILISM },
        { id: ThreatTraitId.ROUGH_WORK },
      ]
    },
    labels: {
      description: '',
      wares: 'Backpack, Blackjack, Blackpowder w/Bullets (18), Candles (9), Flintlock pistol, General repair tools, Laudanum (1), Set of inferior clothes, Smelling salts and Tincture (1)'
    },
    weapons: [
      WeaponId.BLACKJACK, WeaponId.FLINTLOCK_PISTOL
    ]
  },
  {
    id: ThreatId.LADY_IN_WHITE,
    name: 'Lady In White',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 35,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.DISGUISE,
        SkillId.EAVESDROP,
        SkillId.FOLKLORE, SkillId.FOLKLORE,
        SkillId.GUILE,
        SkillId.INTERROGATION, SkillId.INTERROGATION,
        SkillId.INTIMIDATE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.STEALTH, SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.CAPTIVATION },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.IMMUNITY, value: 'Injuries, Intimidate, Peril, Rough & Tumble' },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Abandoned Remains' },
        { id: ThreatTraitId.LIGHT_SENSITIVITY, value: 2 },
        { id: ThreatTraitId.SPIRIT_SIGHT },
        { id: ThreatTraitId.SWIFT }
      ]
    },
    labels: {
      description: '',
      wares: 'Tattered white clothes\n'
    },
    weapons: [
      WeaponId.KEENING
    ]
  },
  {
    id: ThreatId.LEEDS_DEVIL,
    name: 'Leeds Devil',
    type: ThreatTypeId.ABYSSAL,
    risk_factor: RiskFactorId.ELITE,
    notch: NotchId.UNIQUE,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 55,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 50,
      [AttributeId.INTELLIGENCE]: 50,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 50,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.STEALTH, SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.CRUSHING },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.DUSK_TO_DAWN, value: 'Stone' },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.HYPERSENSITIVITY },
        { id: ThreatTraitId.IMMUNITY, value: 'Blackpowder weapons, Injuries, Intimidate, Peril' },
        { id: ThreatTraitId.SWIFT },
        { id: ThreatTraitId.TAINT },
        { id: ThreatTraitId.THICK_HIDE, value: 4 },
        { id: ThreatTraitId.VAMPIRIC_TEETH }
      ]
    },
    labels: {
      description: '',
      wares: 'Horse hide, Meat (6)'
    },
    weapons: [
      WeaponId.FORKED_TAIL, WeaponId.SQUAWK
    ]
  },
  {
    id: ThreatId.LYCANTHROPE,
    name: 'Lycanthrope',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.LOW,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.FOLKLORE, SkillId.FOLKLORE,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.CRUSHING },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.HYPERSENSITIVITY },
        { id: ThreatTraitId.LYCANTHROPIC },
        { id: ThreatTraitId.SECOND_WIND },
        { id: ThreatTraitId.SHAPESHIFT, value: 'Spy' },
        { id: ThreatTraitId.SWIFT },
        { id: ThreatTraitId.TAINT }
      ]
    },
    labels: {
      description: '',
      wares: 'Ripped clothing, Signs of their former human self'
    },
    weapons: [
      WeaponId.LYCANTHROPIC_CLAWS, WeaponId.SHREDDING_BITE
    ]
  },
  {
    id: ThreatId.MAMMOTH,
    name: 'Mammoth',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.INTIMIDATE,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.BRAWNY, value: 2 },
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.HARDY },
        { id: ThreatTraitId.IMPREGNABLE },
        { id: ThreatTraitId.LAST_HURRAH },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.SECOND_WIND }
      ]
    },
    labels: {
      description: '',
      wares: 'Mammoth hide, Meat (9), Tusk (2)'
    },
    weapons: [
      WeaponId.STOMP, WeaponId.TUSKS
    ]
  },
  {
    id: ThreatId.MANDOAG_SEEKER,
    name: 'Mandoag Seeker',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED, SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.AMBUSH_TACTICS },
        { id: ThreatTraitId.ARMED_TO_THE_TEETH },
        { id: ThreatTraitId.GUT_INSTINCT },
        { id: ThreatTraitId.WHITES_OF_THEIR_EYES }
      ]
    },
    labels: {
      description: '',
      wares: 'Arrows (18), Bedroll, Knapsack, Laudanum (1), Selfbow, Set of inferior clothes, Smelling salts (1), Tincture (1) and Tomahawk'
    },
    weapons: [
      WeaponId.TOMAHAWK, WeaponId.SELFBOW
    ]
  },
  {
    id: ThreatId.MANDOAG_SORCERER,
    name: 'Mandoag Sorcerer',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 56,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER,
        AttributeId.FELLOWSHIP, AttributeId.FELLOWSHIP
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.INCANTATION, SkillId.INCANTATION, SkillId.INCANTATION,
        SkillId.INTERROGATION, SkillId.INTERROGATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.LEADERSHIP, SkillId.LEADERSHIP,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SCRUTINIZE, SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL
      ],
      traits: [
        { id: ThreatTraitId.CALL_TO_ARMS },
        { id: ThreatTraitId.CLOSE_SHAVE },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.EBB_AND_FLOW },
        { id: ThreatTraitId.MANNA_OF_GOD },
        { id: ThreatTraitId.NO_ILLUSIONS },
        { id: ThreatTraitId.PLANAR_ALIGNMENT },
        { id: ThreatTraitId.TENACITY },
        { id: ThreatTraitId.TWIST_OF_FATE }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Knife, Laudanum (1), Overcoat pistol, Set of average clothes, Smelling salts (1), Tincture (1) and Writing kit'
    },
    weapons: [
      WeaponId.KNIFE, WeaponId.OVERCOAT_PISTOL
    ]
  },
  {
    id: ThreatId.MILITARY_CAPTAIN,
    name: 'Military Captain',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 45
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION, AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.EDUCATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.LEADERSHIP, SkillId.LEADERSHIP, SkillId.LEADERSHIP,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED, SkillId.MARTIAL_RANGED, SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.RIDE, SkillId.RIDE,
        SkillId.WARFARE, SkillId.WARFARE, SkillId.WARFARE
      ],
      traits: [
        { id: ThreatTraitId.BATTLE_BUDDY },
        { id: ThreatTraitId.CALL_TO_ARMS },
        { id: ThreatTraitId.FRIENDLY_FIRE },
        { id: ThreatTraitId.METTLE },
        { id: ThreatTraitId.STEADFAST }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Dutch longpistol, Infantry sword, Knapsack, Laudanum (1), Medal of Distinction, Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.DUTCH_LONGPISTOL, WeaponId.INFANTRY_SWORD
    ]
  },
  {
    id: ThreatId.MILITARY_CAVALRY,
    name: 'Military Cavalry',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.AGILITY
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.COORDINATION,
        SkillId.HANDLE_ANIMAL,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.RIDE,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.DEVIL_IN_THE_SADDLE },
        { id: ThreatTraitId.OFF_THE_BRIDLE }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Calvary sabre, Knapsack, Laudanum (1), Musketoon, Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.CAVALRY_SABRE, WeaponId.MUSKETOON
    ]
  },
  {
    id: ThreatId.MILITARY_OFFICER,
    name: 'Military Officer',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 45
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.LEADERSHIP, SkillId.LEADERSHIP,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.WARFARE, SkillId.WARFARE
      ],
      traits: [
        { id: ThreatTraitId.BATTLE_BUDDY },
        { id: ThreatTraitId.CALL_TO_ARMS },
        { id: ThreatTraitId.DANGER_SENSE },
        { id: ThreatTraitId.GUT_INSTINCT },
        { id: ThreatTraitId.METTLE }
      ]
    },
    labels: {
      description: '',
      wares: 'Bedroll, Blackpowder w/Bullets (18), Flintlock pistol, Infantry sword, Knapsack, Laudanum (1), Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.FLINTLOCK_PISTOL, WeaponId.INFANTRY_SWORD
    ]
  },
  {
    id: ThreatId.MILITARY_PRIVATE,
    name: 'Military Private',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 35,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.COORDINATION,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.TOUGHNESS,
        SkillId.WARFARE,
      ],
      traits: [
        { id: ThreatTraitId.WHITES_OF_THEIR_EYES }
      ]
    },
    labels: {
      description: '',
      wares: 'Bayonet, Bedroll, Blackpowder w/Bullets (18), Brown Bess musket, Knapsack, Laudanum (1), Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.BAYONET, WeaponId.BROWN_BESS_MUSKET
    ]
  },
  {
    id: ThreatId.MINUTEMAN,
    name: 'Minuteman',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 51,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS,
        SkillId.WARFARE
      ],
      traits: [
        { id: ThreatTraitId.RICOCHET },
        { id: ThreatTraitId.SCARS_OF_WAR },
        { id: ThreatTraitId.STALWART }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Hatchet, Knapsack, Laudanum (1), Pennsylvania longrifle, Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.HATCHET, WeaponId.PENNSYLVANIA_LONGRIFLE
    ]
  },
  {
    id: ThreatId.MISCHIEF_OF_RATS,
    name: 'Mischief Of Rats',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.SMALL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 35,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.RESOLVE,
        SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.AILMENT, value: 'Smallpox' },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.IMMUNITY, value: 'Injuries, Intimidate, Rough & Tumble' },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.SWARM },
        { id: ThreatTraitId.SWIFT },
        { id: ThreatTraitId.WEAKNESS, value: 'Pummeling weapons' },
      ]
    },
    labels: {
      description: '',
      wares: 'Rat pelt, Meat (3)'
    },
    weapons: [
      WeaponId.SWARMING
    ]
  },
  {
    id: ThreatId.MOUNTAIN_LION,
    name: 'Mountain Lion',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.ASSAIL },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.HYPERSENSITIVITY },
        { id: ThreatTraitId.THICK_HIDE, value: 3 },
        { id: ThreatTraitId.SNEAKY }
      ]
    },
    labels: {
      description: '',
      wares: 'Mountain Lion pelt (1), Meat (6)'
    },
    weapons: [
      WeaponId.TEETH_AND_CLAWS
    ]
  },
  {
    id: ThreatId.MOUSER,
    name: 'Mouser',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.SMALL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 35,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40,
    },
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.CHARM,
        SkillId.COORDINATION,
        SkillId.GUILE,
        SkillId.STEALTH,
        SkillId.SURVIVAL
      ],
      traits: [
        { id: ThreatTraitId.AILMENT, value: 'Sepsis' },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.LIGHT_FOOTED }
      ]
    },
    labels: {
      description: '',
      wares: 'Ball of yarn or dead rat, Cat skin, Meat (3)'
    },
    weapons: [
      WeaponId.KITTY_CLAWS
    ]
  },
  {
    id: ThreatId.MURDER_OF_CROWS,
    name: 'Murder Of Crows',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.SMALL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.AGILITY,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.RESOLVE,
        SkillId.SURVIVAL,
        SkillId.SIMPLE_MELEE,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.IMMUNITY, value: 'Injuries, Rough & Tumble' },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.SWARM },
        { id: ThreatTraitId.SWIFT },
        { id: ThreatTraitId.WEAKNESS, value: 'Blackpowder weapons' },
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (6), Raven feathers (6)'
    },
    weapons: [
      WeaponId.SWARMING
    ]
  },
  {
    id: ThreatId.NIGHT_MARE,
    name: 'Night Mare',
    type: ThreatTypeId.ABYSSAL,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 35,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.ATHLETICS, SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.COORDINATION, SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH, SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.HEAT },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Saddle' },
        { id: ThreatTraitId.LIGHT_FOOTED },
        { id: ThreatTraitId.MINDLESS },
        { id: ThreatTraitId.SWIFT },
        { id: ThreatTraitId.TAINT }
      ]
    },
    labels: {
      description: '',
      wares: 'Saddle'
    },
    weapons: [
      WeaponId.HORSE_KICK
    ]
  },
  {
    id: ThreatId.OOZE,
    name: 'Ooze',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.ACIDITY },
        { id: ThreatTraitId.IMMUNITY, value: 'Arrow, Javelin, Injuries, Rough & Tumble, Throwing weapons' },
        { id: ThreatTraitId.MINDLESS },
        { id: ThreatTraitId.SWALLOW },
        { id: ThreatTraitId.SWIFT },
        { id: ThreatTraitId.WEAKNESS, value: 'Fire, Gunpowder weapons' }
      ]
    },
    labels: {
      description: '',
      wares: 'Ruined fowler musket, Rusty knife'
    },
    weapons: [
      WeaponId.SLIME_TIME
    ]
  },
  {
    id: ThreatId.OWL,
    name: 'Owl',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 35,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.RESOLVE,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.SIMPLE_MELEE
      ],
      traits: [
        { id: ThreatTraitId.FLIGHTLESS },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.SPIRIT_SIGHT },
        { id: ThreatTraitId.SWIFT }
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (6), Owl feathers (6)'
    },
    weapons: [
      WeaponId.TALONS
    ]
  },
  {
    id: ThreatId.POISONOUS_SNAKE,
    name: 'Poisonous Snake',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.SMALL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.INTIMIDATE,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.POISONOUS },
        { id: ThreatTraitId.SNEAKY }
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (6), Poisonous snakeskin'
    },
    weapons: [
      WeaponId.FANGS
    ]
  },
  {
    id: ThreatId.RED_COAT_CAPTAIN,
    name: 'Red Coat Captain',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 56,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED, SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.RIDE, SkillId.RIDE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS,
        SkillId.WARFARE
      ],
      traits: [
        { id: ThreatTraitId.DEVIL_IN_THE_SADDLE },
        { id: ThreatTraitId.MAKE_A_BEELINE },
        { id: ThreatTraitId.MILITARISTIC },
        { id: ThreatTraitId.OFF_THE_BRIDLE },
        { id: ThreatTraitId.TAKE_A_GANDER }
      ]
    },
    labels: {
      description: '',
      wares: 'Bedroll, Blackpowder w/Bullets (18), Cavalry sabre, Knapsack, Laudanum (1), Musketoon, Set of inferior clothes, Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.CAVALRY_SABRE, WeaponId.MUSKETOON
    ]
  },
  {
    id: ThreatId.RED_COAT_COLONEL,
    name: 'Red Coat Colonel',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 50
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER,
        AttributeId.FELLOWSHIP, AttributeId.FELLOWSHIP, AttributeId.FELLOWSHIP
      ],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.LEADERSHIP, SkillId.LEADERSHIP, SkillId.LEADERSHIP,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED, SkillId.MARTIAL_RANGED, SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.RIDE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.WARFARE, SkillId.WARFARE, SkillId.WARFARE
      ],
      traits: [
        { id: ThreatTraitId.EBB_AND_FLOW },
        { id: ThreatTraitId.FRIENDLY_FIRE },
        { id: ThreatTraitId.MANNA_OF_GOD },
        { id: ThreatTraitId.REBEL_YELL }
      ]
    },
    labels: {
      description: '',
      wares: 'Bedroll, Blackpowder w/Bullets (18), Dutch longpistol, Infantry sword, Knapsack, Laudanum (1), Officer’s uniform, Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.INFANTRY_SWORD, WeaponId.DUTCH_LONGPISTOL
    ]
  },
  {
    id: ThreatId.RED_COAT_REGULAR,
    name: 'Red Coat Regular',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 35,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS,
        SkillId.WARFARE
      ],
      traits: [
        { id: ThreatTraitId.METTLE },
        { id: ThreatTraitId.NIMBLE_FINGERS }
      ]
    },
    labels: {
      description: '',
      wares: 'Bayonet, Bedroll, Blackpowder w/Bullets (18), Brown Bess musket, Knapsack, Laudanum (1), Set of inferior clothes, Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.BAYONET, WeaponId.BROWN_BESS_MUSKET
    ]
  },
  {
    id: ThreatId.REVENANT,
    name: 'Revenant',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.FOLKLORE, SkillId.FOLKLORE,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.MARTIAL_RANGED, SkillId.MARTIAL_RANGED,
        SkillId.RESOLVE,
        SkillId.RESOLVE, SkillId.STEALTH, SkillId.STEALTH,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.BRUTAL },
        { id: ThreatTraitId.CHOSEN },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.DRAIN, value: 'Willpower' },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.IMPREGNABLE },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Your original killer' },
        { id: ThreatTraitId.RETURNER },
        { id: ThreatTraitId.SECOND_WIND }
      ]
    },
    labels: {
      description: '',
      wares: 'Dutch longpistol with 9 bullets, Hanger sword, List of those who wronged them in life'
    },
    weapons: [
      WeaponId.DUTCH_LONGPISTOL, WeaponId.HANGER_SWORD
    ]
  },
  {
    id: ThreatId.ROBBER,
    name: 'Robber',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.AGILITY
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.MARTIAL_RANGED,
        SkillId.RIDE,
        SkillId.SIMPLE_MELEE,
        SkillId.STEALTH,
        SkillId.SKULDUGGERY,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.DANGER_SENSE },
        { id: ThreatTraitId.NIMBLE_FINGERS },
        { id: ThreatTraitId.OFF_THE_BRIDLE }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Camping kit, Field horse, Hatchet, Hunting bag, Knife, Laudanum (1), Musketoon, Set of inferior clothes, Smelling salts (1) and Tincture (1)'
    },
    weapons: [
      WeaponId.HATCHET, WeaponId.MUSKETOON
    ]
  },
  {
    id: ThreatId.SABERTOOTH_TIGER,
    name: 'Sabertooth Tiger',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.LOW,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.IRONCLAD },
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (9), Sabertooth (1) Sabertooth Tiger hide'
    },
    weapons: [
      WeaponId.TEETH_AND_CLAWS
    ]
  },
  {
    id: ThreatId.SASQUATCH,
    name: 'Sasquatch',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.LOW,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.NAVIGATION, SkillId.NAVIGATION, SkillId.NAVIGATION,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH, SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.CONSTRICTOR },
        { id: ThreatTraitId.CRUSHING },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.INESCAPABLE },
        { id: ThreatTraitId.SNEAKY },
        { id: ThreatTraitId.SPIRIT_SIGHT }
      ]
    },
    labels: {
      description: '',
      wares: 'Sasquatch pelt'
    },
    weapons: [
      WeaponId.SQUATCH_THROTTLE
    ]
  },
  {
    id: ThreatId.SETTLER,
    name: 'Settler',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 35,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.HANDLE_ANIMAL,
        SkillId.MARTIAL_RANGED,
        SkillId.MARTIAL_RANGED,
        SkillId.NAVIGATION,
        SkillId.RESOLVE,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SURVIVAL,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.GUT_INSTINCT },
        { id: ThreatTraitId.ITS_OWN_REWARD },
        { id: ThreatTraitId.TAKE_A_GANDER },
        { id: ThreatTraitId.WHITES_OF_THEIR_EYES }
      ]
    },
    labels: {
      description: '',
      wares: 'Backpack, Blackpowder w/Bullets (18), Candles (9), Hatchet, Laudanum (1), Pennsylvania longrifle, Set of inferior clothes, Smelling salts and Tincture (1)'
    },
    weapons: [
      WeaponId.HATCHET, WeaponId.PENNSYLVANIA_LONGRIFLE
    ]
  },
  {
    id: ThreatId.SHADOW_THING,
    name: 'Shadow Thing',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.CHARM, SkillId.CHARM, SkillId.CHARM,
        SkillId.COORDINATION, SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.EAVESDROP, SkillId.EAVESDROP, SkillId.EAVESDROP,
        SkillId.FOLKLORE, SkillId.FOLKLORE, SkillId.FOLKLORE,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.STEALTH, SkillId.STEALTH, SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.DEAD_HANDS },
        { id: ThreatTraitId.DRAIN, value: 'Agility' },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.IMMUNITY, value: 'Injuries, Rough & Tumble' },
        { id: ThreatTraitId.INSUBSTANTIAL },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Your Murderer' },
        { id: ThreatTraitId.MATERIALIZE },
        { id: ThreatTraitId.SPIRIT_SIGHT },
        { id: ThreatTraitId.TAINT }
      ]
    },
    labels: {
      description: '',
      wares: ''
    },
    weapons: [
      WeaponId.SHADOW_TOUCH
    ]
  },
  {
    id: ThreatId.SHARK,
    name: 'Shark',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.LIGHT_FOOTED },
        { id: ThreatTraitId.SECOND_WIND },
        { id: ThreatTraitId.SNEAKY },
        { id: ThreatTraitId.SWIMMER }
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (6), Shark hide, Shark teeth (5)'
    },
    weapons: [
      WeaponId.JAWS
    ]
  },
  {
    id: ThreatId.SHOAL_OF_SPIKEFISH,
    name: 'Shoal Of Spikefish',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.SIMPLE_MELEE,
        SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.IMMUNITY, value: 'Intimidate, Injuries, Rough & Tumble' },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.MINDLESS },
        { id: ThreatTraitId.SNEAKY },
        { id: ThreatTraitId.SWIMMER }
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (6)'
    },
    weapons: [
      WeaponId.SWARMING
    ]
  },
  {
    id: ThreatId.SKELETON,
    name: 'Skeleton',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.INTIMIDATE,
        SkillId.MARTIAL_MELEE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.AILMENT, value: 'Saint Vitus Dance' },
        { id: ThreatTraitId.IMMUNITY, value: 'Injuries, Intimidate, Rough & Tumble' },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Bones' },
        { id: ThreatTraitId.MINDLESS },
        { id: ThreatTraitId.WEAKNESS, value: 'Pummeling weapons' }
      ]
    },
    labels: {
      description: '',
      wares: 'Bullet rattling around in skull, Tattered clothing'
    },
    weapons: [
      WeaponId.CAVALRY_SABRE, WeaponId.TOMAHAWK
    ]
  },
  {
    id: ThreatId.SKIN_WALKER,
    name: 'Skin Walker',
    type: ThreatTypeId.ABYSSAL,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 35,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 45
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER,
        AttributeId.FELLOWSHIP, AttributeId.FELLOWSHIP
      ],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.BARGAIN, SkillId.BARGAIN, SkillId.BARGAIN,
        SkillId.CHARM, SkillId.CHARM,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.DISGUISE, SkillId.DISGUISE, SkillId.DISGUISE,
        SkillId.GUILE, SkillId.GUILE, SkillId.GUILE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SCRUTINIZE, SkillId.SCRUTINIZE,
        SkillId.STEALTH, SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.INFERNAL },
        { id: ThreatTraitId.SHAPESHIFT, value: 'Hunter-Gatherer' },
        { id: ThreatTraitId.SPIRIT_SIGHT }
      ]
    },
    labels: {
      description: '',
      wares: 'Tattered clothing'
    },
    weapons: [
      WeaponId.RIPPING_TEETH
    ]
  },
  {
    id: ThreatId.SNALLYGASTER,
    name: 'Snallygaster',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.MEDIUM,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 0,
      [AttributeId.BRAWN]: 0,
      [AttributeId.AGILITY]: 0,
      [AttributeId.PERCEPTION]: 0,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.THICK_HIDE, value: 2 },
        { id: ThreatTraitId.SWIFT }
      ]
    },
    labels: {
      description: '',
      wares: ''
    },
    weapons: [
      WeaponId.BEAK_AND_TALONS
    ]
  },
  {
    id: ThreatId.SPLINTERCAT,
    name: 'Splintercat',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.STEALTH, SkillId.STEALTH,
        SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.ASSAIL },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.HYPERSENSITIVITY },
        { id: ThreatTraitId.LIGHT_FOOTED },
        { id: ThreatTraitId.SNEAKY }
      ]
    },
    labels: {
      description: '',
      wares: 'Splintercat pelt (1), Meat (6)'
    },
    weapons: [
      WeaponId.TEETH_AND_CLAWS
    ]
  },
  {
    id: ThreatId.SPY,
    name: 'Spy',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 35,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.COORDINATION,
        SkillId.DISGUISE,
        SkillId.GUILE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY, SkillId.SKULDUGGERY,
        SkillId.STEALTH, SkillId.STEALTH,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.FLEECE_THE_SHEEP },
        { id: ThreatTraitId.NOM_DE_GUERRE },
        { id: ThreatTraitId.WHAT_I_DO_IN_SHADOWS }
      ]
    },
    labels: {
      description: '',
      wares: 'Antidote (1), Blackpowder w/Bullets (18), Knife, Laudanum (1), Set of dark clothes, Smelling salts (1), Tincture (1), Tobacco (3) and Turn-out pistol'
    },
    weapons: [
      WeaponId.KNIFE, WeaponId.TURN_OUT_SIMPLE_PISTOL
    ]
  },
  {
    id: ThreatId.SWAMP_APE,
    name: 'Swamp Ape',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.EAVESDROP,
        SkillId.INTIMIDATE,
        SkillId.NAVIGATION,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.STEALTH,
        SkillId.SURVIVAL
      ],
      traits: [
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.SNEAKY },
        { id: ThreatTraitId.STENCH }
      ]
    },
    labels: {
      description: '',
      wares: ''
    },
    weapons: [
      WeaponId.SWAMP_THROTTLE
    ]
  },
  {
    id: ThreatId.TAX_COLLECTOR,
    name: 'Tax Collector',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 35,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 50,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 45
    },
    advancements: {
      bonuses: [
        AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.FELLOWSHIP
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.GUILE,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.EYES_IN_THE_BACK_OF_MY_HEAD },
        { id: ThreatTraitId.FOSTERING_COMMUNITY },
        { id: ThreatTraitId.STEADFAST }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackjack, Blackpowder w/Bullets (18), Laudanum (1), Ledger, Set of superior clothes, Small chest & padlock w/key (Standard +/-0%), Smelling salts (1), Tincture (1), Turn-out pistol and Writing kit'
    },
    weapons: [
      WeaponId.BLACKJACK, WeaponId.TURN_OUT_SIMPLE_PISTOL
    ]
  },
  {
    id: ThreatId.TIMBER_WOLF,
    name: 'Timber Wolf',
    type: ThreatTypeId.ANIMAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 45,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 35,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [],
      skills: [],
      traits: [
        { id: ThreatTraitId.AILMENT },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.SWIFT }
      ]
    },
    labels: {
      description: '',
      wares: 'Meat (6), Wolf pelt'
    },
    weapons: [
      WeaponId.SNARLING_BITE
    ]
  },
  {
    id: ThreatId.TORMENTOR,
    name: 'Tormentor',
    type: ThreatTypeId.ABYSSAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT, AttributeId.COMBAT, AttributeId.COMBAT,
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.INTERROGATION, SkillId.INTERROGATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.LEADERSHIP, SkillId.LEADERSHIP,
        SkillId.MARTIAL_MELEE, SkillId.MARTIAL_MELEE,
        SkillId.SCRUTINIZE, SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS,
        SkillId.WARFARE, SkillId.WARFARE
      ],
      traits: [
        { id: ThreatTraitId.ASSAIL },
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.IMMUNITY, value: 'Intimidate, Peril' },
        { id: ThreatTraitId.INFERNAL },
        { id: ThreatTraitId.TAINT },
        { id: ThreatTraitId.THICK_HIDE, value: 3 }
      ]
    },
    labels: {
      description: '',
      wares: 'War shield, Zweihänder'
    },
    weapons: [
      WeaponId.HORNS_AND_TALONS, WeaponId.ZWEIHANDER
    ]
  },
  {
    id: ThreatId.TRADER,
    name: 'Trader',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 50
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.PERCEPTION,
        AttributeId.INTELLIGENCE,
        AttributeId.FELLOWSHIP, AttributeId.FELLOWSHIP
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.BARGAIN, SkillId.BARGAIN,
        SkillId.EDUCATION,
        SkillId.GAMBLE, SkillId.GAMBLE,
        SkillId.GUILE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE, SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED, SkillId.SIMPLE_RANGED
      ],
      traits: [
        { id: ThreatTraitId.JADED },
        { id: ThreatTraitId.POKER_FACE },
        { id: ThreatTraitId.REBEL_YELL },
        { id: ThreatTraitId.TIP_THE_SCALES }
      ]
    },
    labels: {
      description: '',
      wares: 'Backpack, Blackpowder w/Bullets (18), Candles (9), Flintlock pistol, Knife, Laudanum (1), Musketoon, Set of inferior clothes, Smelling salts and Tincture (1)'
    },
    weapons: [
      WeaponId.KNIFE, WeaponId.MUSKETOON
    ]
  },
  {
    id: ThreatId.VAMPIRIC_BAT,
    name: 'Vampiric Bat',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.LOW,
    size: SizeId.SMALL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 50,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.AGILITY,
        AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.AWARENESS,
        SkillId.STEALTH,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL
      ],
      traits: [
        { id: ThreatTraitId.AILMENT, value: 'Smallpox' },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.FLIGHTLESS },
        { id: ThreatTraitId.LIGHT_SENSITIVITY, value: 3 },
        { id: ThreatTraitId.PACK_TACTICS },
        { id: ThreatTraitId.SWIFT },
        { id: ThreatTraitId.VAMPIRIC_TEETH }
      ]
    },
    labels: {
      description: '',
      wares: 'Bat hide, Meat (3)'
    },
    weapons: [
      WeaponId.VAMPIRIC_FANGS
    ]
  },
  {
    id: ThreatId.VAMPYRE,
    name: 'Vampire',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.ELITE,
    notch: NotchId.UNIQUE,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 50,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 50,
      [AttributeId.PERCEPTION]: 50,
      [AttributeId.INTELLIGENCE]: 50,
      [AttributeId.WILLPOWER]: 55,
      [AttributeId.FELLOWSHIP]: 50
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY, AttributeId.AGILITY,
        AttributeId.INTELLIGENCE, AttributeId.INTELLIGENCE, AttributeId.INTELLIGENCE,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.CHARM, SkillId.CHARM,
        SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.EDUCATION, SkillId.EDUCATION, SkillId.EDUCATION,
        SkillId.GUILE, SkillId.GUILE, SkillId.GUILE,
        SkillId.INCANTATION, SkillId.INCANTATION, SkillId.INCANTATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.RIDE,
        SkillId.RUMOR, SkillId.RUMOR,
        SkillId.SCRUTINIZE, SkillId.SCRUTINIZE, SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.CAPTIVATION },
        { id: ThreatTraitId.CHOSEN },
        { id: ThreatTraitId.CONSTRICTOR },
        { id: ThreatTraitId.DRAIN, value: 'Fellowship' },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.INESCAPABLE },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Heart' },
        { id: ThreatTraitId.LIGHT_SENSITIVITY, value: 1 },
        { id: ThreatTraitId.SECOND_WIND },
        { id: ThreatTraitId.SHAPESHIFT, value: 'Murder of Crows' },
        { id: ThreatTraitId.SPIRIT_SIGHT },
        { id: ThreatTraitId.TAINT },
        { id: ThreatTraitId.VAMPIRIC_TEETH },
        { id: ThreatTraitId.VAMPYRE }
      ]
    },
    labels: {
      description: '',
      wares: 'Fancy wig, Fashionable clothing, Fine perfume, Knife'
    },
    weapons: [
      WeaponId.KNIFE, WeaponId.VAMPIRIC_CLAWS
    ]
  },
  {
    id: ThreatId.VENGEFUL_SPIRIT,
    name: 'Vengeful Spirit',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 35,
      [AttributeId.AGILITY]: 45,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.INTELLIGENCE, AttributeId.INTELLIGENCE,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.CHARM, SkillId.CHARM,
        SkillId.COORDINATION, SkillId.COORDINATION, SkillId.COORDINATION,
        SkillId.EAVESDROP, SkillId.EAVESDROP, SkillId.EAVESDROP,
        SkillId.FOLKLORE, SkillId.FOLKLORE, SkillId.FOLKLORE,
        SkillId.GUILE, SkillId.GUILE,
        SkillId.INTERROGATION,
        SkillId.INTIMIDATE, SkillId.INTIMIDATE, SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE,
        SkillId.SKULDUGGERY, SkillId.SKULDUGGERY,
        SkillId.STEALTH, SkillId.STEALTH, SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.DRAIN, value: 'Brawn' },
        { id: ThreatTraitId.HAUNTING },
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.IMMUNITY, value: 'Injuries, Rough & Tumble' },
        { id: ThreatTraitId.INSUBSTANTIAL },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Revenge' },
        { id: ThreatTraitId.MATERIALIZE },
        { id: ThreatTraitId.PHENOMENA },
        { id: ThreatTraitId.SPIRIT_SIGHT }
      ]
    },
    labels: {
      description: '',
      wares: 'Detritus from a place they haunt'
    },
    weapons: [
      WeaponId.GHOST_HANDS
    ]
  },
  {
    id: ThreatId.WALKING_DEAD,
    name: 'Walking Dead',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.MEDIUM,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 35,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.HORRIFIC },
        { id: ThreatTraitId.IMMUNITY, value: 'Blackpowder weapons' },
        { id: ThreatTraitId.LAY_TO_REST, value: 'Brain' },
        { id: ThreatTraitId.MINDLESS },
        { id: ThreatTraitId.WEAKNESS, value: 'Vicious weapons' }
      ]
    },
    labels: {
      description: '',
      wares: 'Tattered clothing'
    },
    weapons: [
      WeaponId.CANNIBAL_CLAWS
    ]
  },
  {
    id: ThreatId.WALRUS,
    name: 'Walrus',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.LARGE,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 35,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 45,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.AGILITY, AttributeId.AGILITY
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.SIMPLE_MELEE,
        SkillId.RESOLVE,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.PACK_TACTICS },
        { id: ThreatTraitId.THICK_HIDE, value: 2 }
      ]
    },
    labels: {
      description: '',
      wares: 'Blubber (3), Meat (9), Tusk, Walrus hide'
    },
    weapons: [
      WeaponId.WALRUS_TUSKS
    ]
  },
  {
    id: ThreatId.WATER_NYMPH,
    name: 'Water Nymph',
    type: ThreatTypeId.SUPERNATURAL,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 35,
      [AttributeId.BRAWN]: 40,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 40,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 45
    },
    advancements: {
      bonuses: [
        AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER,
        AttributeId.FELLOWSHIP
      ],
      skills: [
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.BARGAIN,
        SkillId.CHARM, SkillId.CHARM,
        SkillId.DISGUISE, SkillId.DISGUISE,
        SkillId.EAVESDROP,
        SkillId.GUILE, SkillId.GUILE,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL, SkillId.SURVIVAL
      ],
      traits: [
        { id: ThreatTraitId.CHOSEN },
        { id: ThreatTraitId.SHAPESHIFT, value: 'Hunter-Gatherer' },
        { id: ThreatTraitId.SIREN_SONG },
        { id: ThreatTraitId.SWIMMER }
      ]
    },
    labels: {
      description: '',
      wares: 'Belongings of former victims (6)'
    },
    weapons: [
      WeaponId.WATER_NYMPH_TALONS
    ]
  },
  {
    id: ThreatId.WHALE,
    name: 'Whale',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.ADVANCED,
    notch: NotchId.LOW,
    size: SizeId.HUGE,
    attributes: {
      [AttributeId.COMBAT]: 45,
      [AttributeId.BRAWN]: 50,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 40,
      [AttributeId.WILLPOWER]: 40,
      [AttributeId.FELLOWSHIP]: 35
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN, AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION, AttributeId.PERCEPTION, AttributeId.PERCEPTION
      ],
      skills: [
        SkillId.ATHLETICS, SkillId.ATHLETICS, SkillId.ATHLETICS,
        SkillId.AWARENESS, SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.RESOLVE, SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE, SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL, SkillId.SURVIVAL, SkillId.SURVIVAL,
        SkillId.TOUGHNESS, SkillId.TOUGHNESS, SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.BRAWNY, value: 3 },
        { id: ThreatTraitId.DARK_SENSE },
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.HARDY },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.SWALLOW },
        { id: ThreatTraitId.SWIMMER }
      ]
    },
    labels: {
      description: '',
      wares: 'Blubber (10), Meat (12), Whale skin'
    },
    weapons: [
      WeaponId.FATAL_BITE
    ]
  },
  {
    id: ThreatId.WHITE_MAGE,
    name: 'White Mage',
    type: ThreatTypeId.HUMANOID,
    risk_factor: RiskFactorId.INTERMEDIATE,
    notch: NotchId.LOW,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 40,
      [AttributeId.BRAWN]: 35,
      [AttributeId.AGILITY]: 40,
      [AttributeId.PERCEPTION]: 45,
      [AttributeId.INTELLIGENCE]: 45,
      [AttributeId.WILLPOWER]: 50,
      [AttributeId.FELLOWSHIP]: 40
    },
    advancements: {
      bonuses: [
        AttributeId.BRAWN,
        AttributeId.PERCEPTION, AttributeId.PERCEPTION,
        AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER, AttributeId.WILLPOWER
      ],
      skills: [
        SkillId.ALCHEMY,
        SkillId.AWARENESS, SkillId.AWARENESS,
        SkillId.EDUCATION,
        SkillId.HEAL,
        SkillId.INCANTATION, SkillId.INCANTATION,
        SkillId.RESOLVE, SkillId.RESOLVE,
        SkillId.SCRUTINIZE, SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_RANGED,
        SkillId.SKULDUGGERY,
        SkillId.STEALTH
      ],
      traits: [
        { id: ThreatTraitId.BURN_BRIGHT },
        { id: ThreatTraitId.PLANAR_ALIGNMENT },
        { id: ThreatTraitId.WE_ARE_THE_LIGHT }
      ]
    },
    labels: {
      description: '',
      wares: 'Blackpowder w/Bullets (18), Knife, Laudanum (1), Overcoat pistol, Set of average clothes, Smelling salts (1), Tincture (1) and Writing kit'
    },
    weapons: [
      WeaponId.KNIFE, WeaponId.OVERCOAT_PISTOL
    ]
  },
  {
    id: ThreatId.WILD_BOAR,
    name: 'Wild Boar',
    type: ThreatTypeId.BEAST,
    risk_factor: RiskFactorId.BASIC,
    notch: NotchId.HIGH,
    size: SizeId.NORMAL,
    attributes: {
      [AttributeId.COMBAT]: 0,
      [AttributeId.BRAWN]: 0,
      [AttributeId.AGILITY]: 0,
      [AttributeId.PERCEPTION]: 0,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    advancements: {
      bonuses: [
        AttributeId.COMBAT,
        AttributeId.BRAWN,
        AttributeId.BRAWN,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.INTIMIDATE,
        SkillId.RESOLVE,
        SkillId.SIMPLE_MELEE,
        SkillId.SURVIVAL,
        SkillId.TOUGHNESS
      ],
      traits: [
        { id: ThreatTraitId.ASSAIL },
        { id: ThreatTraitId.FIERCE },
        { id: ThreatTraitId.LETHARGY },
        { id: ThreatTraitId.SECOND_WIND }
      ]
    },
    labels: {
      description: '',
      wares: 'Boar skin (1), Cracked tusk (2), Meat (6)'
    },
    weapons: [
      WeaponId.WILD_BOAR_TUSKS
    ]
  },
  // {
  //   id: ThreatId.,
  //   name: '',
  //   type: ThreatTypeId.,
  //   risk_factor: RiskFactorId.,
  //   notch: NotchId.,
  //   size: SizeId.,
  //   attributes: {
  //     [AttributeId.COMBAT]: 0,
  //     [AttributeId.BRAWN]: 0,
  //     [AttributeId.AGILITY]: 0,
  //     [AttributeId.PERCEPTION]: 0,
  //     [AttributeId.INTELLIGENCE]: 0,
  //     [AttributeId.WILLPOWER]: 0,
  //     [AttributeId.FELLOWSHIP]: 0,
  //   },
  //   advancements: {
  //     bonuses: [],
  //     skills: [],
  //     traits: [
  //       { id: ThreatTraitId.IRONCLAD },
  //     ]
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
];
