import {Notch, RiskFactor, Threat} from './models';
import {AttributeId, NotchId, RiskFactorId, SizeId, SkillId, ThreatId, ThreatTraitId, ThreatTypeId} from './enums';

export const RISK_FACTORS: RiskFactor[] = [
  { id: RiskFactorId.BASIC, name: 'Basic' },
  { id: RiskFactorId.INTERMEDIATE, name: 'Intermediate' },
  { id: RiskFactorId.ADVANCED, name: 'Advanced' },
  { id: RiskFactorId.ELITE, name: 'Elite' }
];

export const NOTCHES: Notch[] = [
  { id: NotchId.LOW, name: 'Low' },
  { id: NotchId.MEDIUM, name: 'Medium' },
  { id: NotchId.HIGH, name: 'High' },
  { id: NotchId.UNIQUE, name: 'Unique' }
];

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
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.COMBAT,
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.AGILITY,
        AttributeId.PERCEPTION,
      ],
      skills: [
        SkillId.ATHLETICS,
        SkillId.ATHLETICS,
        SkillId.AWARENESS,
        SkillId.AWARENESS,
        SkillId.COORDINATION,
        SkillId.COORDINATION,
        SkillId.INTIMIDATE,
        SkillId.INTIMIDATE,
        SkillId.SIMPLE_MELEE,
        SkillId.SIMPLE_MELEE,
        SkillId.STEALTH,
        SkillId.SURVIVAL,
        SkillId.SURVIVAL,
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
      wares: 'Alligator hide, Meat (9)'
    }
  },
  // {
  //   id: ThreatId.ALLIGATOR,
  //   name: 'Alligator',
  //   type: ThreatTypeId.BEAST,
  //   risk_factor: RiskFactorId.INTERMEDIATE,
  //   notch: NotchId.LOW,
  //   size: SizeId.LARGE,
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
  //   }
  // },
  // {
  //   id: ThreatId.ALLIGATOR,
  //   name: 'Alligator',
  //   type: ThreatTypeId.BEAST,
  //   risk_factor: RiskFactorId.INTERMEDIATE,
  //   notch: NotchId.LOW,
  //   size: SizeId.LARGE,
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
  //   }
  // },
];
