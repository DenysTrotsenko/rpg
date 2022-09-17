import {Threat} from './models';
import {AttributeId, SkillId, ThreatId, ThreatTraitId, WeaponId} from './enums';
import {NotchId, RiskFactorId, SizeId, ThreatTypeId} from '@grim-and-perilous/enums';
import {AstTransformer} from '@angular/compiler';

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
  // {
  //   id: ThreatId.GOLEM,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.GRIZZLY_BEAR,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.HEADLESS_RIDER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.HIDEBEHIND,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.HODAG,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.HOG,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.HOMUNCULUS,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.HOODED_ONE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.HORSE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.HUNTER_GATHERER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.HUNTING_DOG,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.INQUISITION_AGENT,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.INQUISITION_FISCAL,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.INQUISITION_WITCH_HUNTER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.INSECT_SWARM,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.JOURNALIST,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.KNIGHTS_TEMPLAR_INITIATE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.KNIGHTS_TEMPLAR_NOBLE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.KNIGHTS_TEMPLAR_SERGEANT,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.KNIGHTS_TEMPLAR_SQUIRE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.KNOCKER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.KRAKEN,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.LABORER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.LADY_IN_WHITE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.LEEDS_DEVIL,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.LYCANTHROPE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MAMMOTH,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MANDOAG_SEEKER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MANDOAG_SORCERER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MILITARY_CAPTAIN,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MILITARY_CAVALRY,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MILITARY_OFFICER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MILITARY_PRIVATE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MINUTEMAN,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MISCHIEF_OF_RATS,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MOUNTAIN_LION,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MOUSER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.MURDER_OF_CROWS,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.NIGHT_MARE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.OOZE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.OWL,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.POISONOUS_SNAKE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.RED_COAT_CAPTAIN,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.RED_COAT_COLONEL,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.RED_COAT_REGULAR,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.REVENANT,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.ROBBER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SABERTOOTH_TIGER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SASQUATCH,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SETTLER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SHADOW_THING,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SHARK,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SHOAL_OF_SPIKEFISH,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SKELETON,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SKIN_WALKER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SNALLYGASTER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SPLINTERCAT,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SPY,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.SWAMP_APE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.TAX_COLLECTOR,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.TIMBER_WOLF,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.TORMENTOR,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.TRADER,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.VAMPIRIC_BAT,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.VAMPYRE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.VENGEFUL_SPIRIT,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.WALKING_DEAD,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.WALRUS,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.WATER_NYMPH,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.WHALE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.WHITE_MAGE,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
  // {
  //   id: ThreatId.WILD_BOAR,
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
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
  //     traits: []
  //   },
  //   labels: {
  //     description: '',
  //     wares: ''
  //   },
  //   weapons: []
  // },
];
