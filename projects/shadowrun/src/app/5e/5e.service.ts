import { Injectable } from '@angular/core';
import { ATTRIBUTES } from './5e.attributes';
import { AWAKENINGS } from './5e.awakenings';
import { BOOKS } from './5e.books';
import { METATYPES } from './5e.metatypes';
import { Attribute, Awakening, Book, Metatype } from './5e.models';

@Injectable()
export class FifthEditionService {
  readonly attributes: Attribute[] = ATTRIBUTES;
  readonly books: Book[] = BOOKS;
  readonly awakenings: Awakening[] = AWAKENINGS;
  readonly metatypes: Metatype[] = METATYPES;
}
