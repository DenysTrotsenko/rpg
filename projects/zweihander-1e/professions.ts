/* tslint:disable:max-line-length */
import {AttributeId, DrawbackId, ProfessionId, SkillId, TalentId, TraitId} from './enums';
import {Profession} from './models';

export const PROFESSIONS: Profession[] = [
  {
    id: ProfessionId.ADHERENT,
    name: 'Adherent',
    traits: [
      TraitId.TURN_THE_OTHER_CHEEK,
      TraitId.DIVINE_MAGICK,
      DrawbackId.LURE_OF_POWER
    ],
    advancements: {
      bonuses: [
        AttributeId.FELLOWSHIP,
        AttributeId.FELLOWSHIP,
        AttributeId.INTELLIGENCE,
        AttributeId.INTELLIGENCE,
        AttributeId.PERCEPTION,
        AttributeId.WILLPOWER,
        AttributeId.WILLPOWER,
      ],
      skills: [
        SkillId.CHARM,
        SkillId.EDUCATION,
        SkillId.FOLKLORE,
        SkillId.HANDLE_ANIMAL,
        SkillId.HEAL,
        SkillId.INCANTATION,
        SkillId.RESOLVE,
        SkillId.RUMOR,
        SkillId.SCRUTINIZE,
        SkillId.SIMPLE_MELEE,
      ],
      talents: [
        TalentId.IMPERVIOUS_MIND,
        TalentId.INDIFFERENCE,
        TalentId.MULTILINGUAL
      ]
    },
    labels: {
      description: 'Adherents belong to ancient orders that embrace asceticism, taking vows to live lives of meditation and prayer. Generally female, most live cloistered in convents dedicated to years of religious devotion and worship, having abandoned both links and trappings to their former lives. Most orders are self-sufficient, adherents growing their own food and making their own clothes. Such cloisters also offer succor to wandering travelers and even medical treatment. Other Adherents become itinerant priests, accepting alms in return for midwifery and animal husbandry, spreading charity, and educating everyday folk. While most Adherents typically abstain from pleasures of the flesh, some convents promote hand-fasting within their order to bring harmony to the church; these are often arranged between male and female members of the order with little choice in partner.\nMany grow flinty with age, hardened and worn by their faith and chastity. Each holy order is different, but all advocate peace, charity and temperance while casting aside violence, greed and luxury. A rare few though, profess aberrant views, worshipping darker gods with profane names best left unspoken in polite company. Such Adherents take great measures to hide their true allegiance, secreting themselves into cults where sex Magick, sacred prostitution and ritual sacrifice are accepted forms of worship.'
    }
  },
  // {
  //   id: ProfessionId.ADHERENT,
  //   name: '',
  //   traits: [
  //     TraitId.BEASTMASTER
  //   ],
  //   advancements: {
  //     bonuses: [
  //       AttributeId.WILLPOWER,
  //       AttributeId.WILLPOWER,
  //       AttributeId.WILLPOWER,
  //       AttributeId.WILLPOWER,
  //       AttributeId.WILLPOWER,
  //       AttributeId.WILLPOWER,
  //       AttributeId.WILLPOWER,
  //     ],
  //     skills: [
  //       SkillId.CHARM,
  //       SkillId.CHARM,
  //       SkillId.CHARM,
  //       SkillId.CHARM,
  //       SkillId.CHARM,
  //       SkillId.CHARM,
  //       SkillId.CHARM,
  //       SkillId.CHARM,
  //       SkillId.CHARM,
  //       SkillId.CHARM,
  //     ],
  //     talents: [
  //       TalentId.AZIMUTH,
  //       TalentId.AZIMUTH,
  //       TalentId.AZIMUTH
  //     ]
  //   },
  //   labels: {
  //     description: ''
  //   }
  // },
];
