import {Metamagic} from '@shadowrun/app/5e/5e.models';
import {BOOK_ID, METAMAGIC_ID} from '@shadowrun/app/5e/5e.enums';

export const METAMAGIC: Metamagic[] = [
  {
    id: METAMAGIC_ID.ADEPT_CENTERING,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Adept Centering',
    type: 'adept',
    multiple: false,
    labels: {
      description: ''
    }
  },
  {
    id: METAMAGIC_ID.CENTERING,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Centering',
    type: 'all',
    multiple: false,
    labels: {
      description: ''
    }
  },
  {
    id: METAMAGIC_ID.FIXATION,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Fixation',
    type: 'all',
    multiple: false,
    labels: {
      description: ''
    }
  },
  {
    id: METAMAGIC_ID.FLEXIBLE_SIGNATURE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Flexible Signature',
    type: 'all',
    multiple: false,
    labels: {
      description: ''
    }
  },
  {
    id: METAMAGIC_ID.MASKING,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Masking',
    type: 'all',
    multiple: false,
    labels: {
      description: ''
    }
  },
  {
    id: METAMAGIC_ID.POWER_POINT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Power Point',
    type: 'adept',
    multiple: true,
    labels: {
      description: ''
    }
  },
  {
    id: METAMAGIC_ID.QUICKENING,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Quickening',
    type: 'all',
    multiple: false,
    labels: {
      description: ''
    }
  },
  {
    id: METAMAGIC_ID.SPELL_SHAPING,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Spell Shaping',
    type: 'all',
    multiple: false,
    labels: {
      description: ''
    }
  },
  {
    id: METAMAGIC_ID.SHIELDING,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Shielding',
    type: 'all',
    multiple: false,
    labels: {
      description: ''
    }
  },
];
