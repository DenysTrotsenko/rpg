import {CharacterAttribute, MagicTradition} from './5e.models';
import {ATTRIBUTE_ID, BOOK_ID, MAGICAL_TRADITION_ID, SPIRIT_ID} from './5e.enums';

export const MAGIC_TRADITIONS: MagicTradition[] = [
  {
    id: MAGICAL_TRADITION_ID.HERMETIC,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'The Hermetic Mage',
    spirits: {
      combat: SPIRIT_ID.FIRE,
      health: SPIRIT_ID.MAN,
      manipulation: SPIRIT_ID.EARTH,
      detection: SPIRIT_ID.AIR,
      illusion: SPIRIT_ID.WATER,
    },
    formulas: {
      drain: (unit) => {
        const willpower: CharacterAttribute = unit.attributes.find(i => i.id === ATTRIBUTE_ID.WILLPOWER);
        const logic: CharacterAttribute = unit.attributes.find(i => i.id === ATTRIBUTE_ID.LOGIC);
        return willpower.rating + logic.rating;
      }
    },
    labels: {
      drain: 'Logic + Willpower'
    }
  },
  {
    id: MAGICAL_TRADITION_ID.SHAMAN,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'The Shaman',
    spirits: {
      combat: SPIRIT_ID.BEAST,
      health: SPIRIT_ID.EARTH,
      manipulation: SPIRIT_ID.MAN,
      detection: SPIRIT_ID.WATER,
      illusion: SPIRIT_ID.AIR,
    },
    formulas: {
      drain: (unit) => {
        const willpower: CharacterAttribute = unit.attributes.find(i => i.id === ATTRIBUTE_ID.WILLPOWER);
        const charisma: CharacterAttribute = unit.attributes.find(i => i.id === ATTRIBUTE_ID.CHARISMA);
        return willpower.rating + charisma.rating;
      }
    },
    labels: {
      drain: 'Charisma + Willpower'
    }
  }
];
