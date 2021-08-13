import { BOOK_ID } from './5e.enums';
import { Book, BookId } from './5e.models';

export const BOOKS: Book[] = [
  { id: BOOK_ID.CORE_RULEBOOK as BookId, name: 'Core Rulebook' }
];
