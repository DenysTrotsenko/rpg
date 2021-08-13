import { BOOK_ID } from '../scion.enums';
import { Base } from '../scion.models';

export const BOOKS: Base[] = [
  { id: BOOK_ID.SCION_ORIGIN, name: 'Scion: Origin' },
  { id: BOOK_ID.SCION_HERO, name: 'Scion: Hero' },
  { id: BOOK_ID.SCION_DEMIGOD, name: 'Scion: Demigod' },
  { id: BOOK_ID.SCION_GOD, name: 'Scion: God' },
  { id: BOOK_ID.SCION_DRAGON, name: 'Scion: Dragon' },
  { id: BOOK_ID.MASKS_OF_THE_MYTHOS, name: 'Masks of the Mythos' },
  { id: BOOK_ID.SCION_COMPANION_MYSTERIES_OF_THE_WORLD, name: 'Scion Companion: Mysteries of the World' },
  { id: BOOK_ID.TITANOMACHY, name: 'Titanomachy' }
];
