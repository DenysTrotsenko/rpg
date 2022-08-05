import {Skill} from './models';
import {AttributeId, SkillId, SkillTypeId} from './enums';

export const SKILLS: Skill[] = [
  {
    id: SkillId.ALCHEMY,
    name: 'Alchemy',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Alchemy represents your ability to divine the hidden secrets of transmutation. Its everyday use tends to consist of concocting abortifacients, pain relievers, serums and other medicines. An alchemist’s laboratory tends to be a strange amalgam of scientific notes, erudite magical symbols and boiling baubles.',
      difficulties: ''
    }
  },
  {
    id: SkillId.ATHLETICS,
    name: 'Athletics',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Athletics represents your prowess in physical activities. It reflects your ability to scale up surfaces and ropes, tread water and swim without tiring, propel vessels while rowing, overpower others in contests of strength and push heavy objects. It also aids you when lifting heavy objects or in great feats of stamina, such as lifting a tree trunk, which has pinned an ally in place, or running many miles to deliver word of an army’s movement.',
      difficulties: ''
    }
  },
  {
    id: SkillId.AWARENESS,
    name: 'Awareness',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Awareness represents your ability to notice minute details and sounds, watch for ambushes and spot snares designed to trap or kill. You’ll also use it to gather information through smell, taste and touch. This Skill doesn’t allow you to see through lies or sense motives—refer to Scrutinize and Eavesdrop to listen to hidden conversations.',
      difficulties: ''
    }
  },
  {
    id: SkillId.BARGAIN,
    name: 'Bargain',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Bargain represents your ability to interpret the underlying factors of a commercial transaction. You also use it to haggle over prices, find common ground with another group, grease the wheels of commerce through the use of bribery, appraise the worth of objets d’art and even procure illegal contraband.',
      difficulties: ''
    }
  },
  {
    id: SkillId.CHARM,
    name: 'Charm',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.COORDINATION,
    name: 'Coordination',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.COUNTERFEIT,
    name: 'Counterfeit',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.DISGUISE,
    name: 'Disguise',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.DRIVE,
    name: 'Drive',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.EAVESDROP,
    name: 'Eavesdrop',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.EDUCATION,
    name: 'Education',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.FOLKLORE,
    name: 'Folklore',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.GAMBLE,
    name: 'Gamble',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.GUILE,
    name: 'Guile',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.HANDLE_ANIMAL,
    name: 'Handle Animal',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.HEAL,
    name: 'Heal',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.INCANTATION,
    name: 'Incantation',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.INTERROGATION,
    name: 'Interrogation',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.INTIMIDATE,
    name: 'Intimidate',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.LEADERSHIP,
    name: 'Leadership',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.MARTIAL_MELEE,
    name: 'Martial Melee',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.MARTIAL_RANGED,
    name: 'Martial Ranged',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.NAVIGATION,
    name: 'Navigation',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.PILOT,
    name: 'Pilot',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.RESOLVE,
    name: 'Resolve',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.RIDE,
    name: 'Ride',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.RUMOR,
    name: 'Rumor',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.SCRUTINIZE,
    name: 'Scrutinize',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.SIMPLE_MELEE,
    name: 'Simple Melee',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.SIMPLE_RANGED,
    name: 'Simple Ranged',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.SKULDUGGERY,
    name: 'Skulduggery',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.STEALTH,
    name: 'Stealth',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.SURVIVAL,
    name: 'Survival',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.TOUGHNESS,
    name: 'Toughness',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.TRADECRAFT,
    name: 'Tradecraft',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
  {
    id: SkillId.WARFARE,
    name: 'Warfare',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: '',
      difficulties: ''
    }
  },
];
