import {Threat} from './models';
import {AttributeId, SkillId, ThreatId, ThreatTraitId, WeaponId} from './enums';
import {NotchId, RiskFactorId, SizeId, ThreatTypeId} from '@grim-and-perilous/enums';

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
  // {
  //   id: ThreatId.APPRENTICE_MAGE,
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
  //   id: ThreatId.ATTORNEY,
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
  //   id: ThreatId.BEAVER,
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
  //   id: ThreatId.BISON,
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
  //   id: ThreatId.BLACK_BEAR,
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
  //   id: ThreatId.BLACK_MAGE,
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
  //   id: ThreatId.BLACK_SHUCK,
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
  //   id: ThreatId.BOG_BODY,
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
  //   id: ThreatId.CARCAJOU,
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
  //   id: ThreatId.CHOKING_TREE,
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
  //   id: ThreatId.CHUPACABRA,
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
  //   id: ThreatId.CONSTRICTOR_SNAKE,
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
  //   id: ThreatId.COYOTE,
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
  //   id: ThreatId.CRAWLER,
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
  //   id: ThreatId.DEVIL_DOG,
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
  //   id: ThreatId.DOG_ANT,
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
  //   id: ThreatId.EAGLE,
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
  //   id: ThreatId.EXPLORER,
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
  //   id: ThreatId.FARMER,
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
  //   id: ThreatId.FREEMASON_AGENT,
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
  //   id: ThreatId.FREEMASON_ALCHEMIST,
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
  //   id: ThreatId.FREEMASON_ENTERED_APPRENTICE,
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
  //   id: ThreatId.FREEMASON_FELLOWCRAFT,
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
  //   id: ThreatId.FREEMASON_MASTER,
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
  //   id: ThreatId.GARGANTUAN_SPIDER,
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
  //   id: ThreatId.GHOUL,
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
