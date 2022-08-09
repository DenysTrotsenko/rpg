import {BuildId, EyesId, HairColorId, HairLengthId, HairStyleId, MarkId, StatureId, StyleId} from './enums';
import {Build, Eyes, HairColor, HairLength, HairStyle, Mark, Stature, Style} from '@flames-of-freedom-1e/models';

export const STATURE: Stature[] = [
  { id: StatureId.SLIGHT, name: 'Slight' },
  { id: StatureId.AVERAGE, name: 'Average' },
  { id: StatureId.TALL, name: 'Tall' },
];

export const BUILD: Build[] = [
  { id: BuildId.LEAN, name: 'Lean' },
  { id: BuildId.NORMAL, name: 'Normal' },
  { id: BuildId.STOCKY, name: 'Stocky' },
];

export const STYLE: Style[] = [
  { id: StyleId.SHABBILY, name: 'Shabbily' },
  { id: StyleId.MODESTLY, name: 'Modestly' },
  { id: StyleId.FASHIONABLY, name: 'Fashionably' },
];

export const EYES: Eyes[] = [
  { id: EyesId.BIG_BLUE, name: 'Big blue' },
  { id: EyesId.BRIGHT_HAZEL, name: 'Bright hazel' },
  { id: EyesId.DARK_DEEP_SET, name: 'Dark, deep-set' },
  { id: EyesId.DARK_SOULFUL, name: 'Dark, soulful' },
  { id: EyesId.DREAMY_HAZEL, name: 'Dreamy hazel' },
  { id: EyesId.EMERALD_GREEN, name: 'Emerald green' },
  { id: EyesId.FIERY_DARK, name: 'Fiery dark' },
  { id: EyesId.GRASS_GREEN, name: 'Grass green' },
  { id: EyesId.GREEN_WISTFUL, name: 'Green, wistful' },
  // { id: EyesId., name: '' },
];

export const HAIR_LENGTH: HairLength[] = [
  { id: HairLengthId.CROPPED, name: 'Cropped' },
  { id: HairLengthId.LONG, name: 'Long' },
  { id: HairLengthId.MEDIUM, name: 'Medium' },
  { id: HairLengthId.NEAR_SHAVED, name: 'Near shaved' },
  { id: HairLengthId.SHORT, name: 'Short' },
  { id: HairLengthId.VERY_LONG, name: 'Very long' }
];

export const HAIR_STYLE: HairStyle[] = [
  { id: HairStyleId.BRAIDED, name: 'Braided' },
  { id: HairStyleId.CURLY, name: 'Curly' },
  { id: HairStyleId.NATURAL, name: 'Natural' },
  { id: HairStyleId.STRAIGHT, name: 'Straight' },
  { id: HairStyleId.TEXTURED, name: 'Textured' },
  { id: HairStyleId.WAVY, name: 'Wavy' },
];

export const HAIR_COLOR: HairColor[] = [
  { id: HairColorId.AUBURN, name: 'Auburn' },
  { id: HairColorId.BLACK, name: 'Black' },
  { id: HairColorId.BLONDE, name: 'Blonde' },
  { id: HairColorId.BROWN, name: 'Brown' },
  { id: HairColorId.GREY, name: 'Grey' },
  { id: HairColorId.RED, name: 'Red' },
];

export const MARKS: Mark[] = [
  { id: MarkId.A_BALD_PATCH, name: 'A bald patch' },
  // { id: MarkId., name: '' },
];
