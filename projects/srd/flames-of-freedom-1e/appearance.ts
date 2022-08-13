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
  { id: EyesId.ICEY_BLUE, name: 'Icey blue' },
  { id: EyesId.INNOCENT_BLUE, name: 'Innocent blue' },
  { id: EyesId.INTELLIGENT_GREY, name: 'Intelligent grey' },
  { id: EyesId.INTENSE_HAZEL, name: 'Intense hazel' },
  { id: EyesId.KEEN_GREY, name: 'Keen grey' },
  { id: EyesId.KINDLY_BLUE, name: 'Kindly blue' },
  { id: EyesId.LARGE_GREEN, name: 'Large green' },
  { id: EyesId.LARGE_HAZEL, name: 'Large hazel' },
  { id: EyesId.MOURNFUL_BROWN, name: 'Mournful brown' },
  { id: EyesId.SHREWD_HAZEL, name: 'Shrewd hazel' },
  { id: EyesId.SMALL_BROWN, name: 'Small brown' },
  { id: EyesId.SOFT_GREEN, name: 'Soft green' },
  { id: EyesId.STARTLING_GREY, name: 'Startling grey' },
  { id: EyesId.STORMY_GREY, name: 'Stormy grey' },
  { id: EyesId.THOUGHTFUL_GREY, name: 'Thoughtful grey' },
  { id: EyesId.UNBLINKING_BLUE, name: 'Unblinking blue' }
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
  { id: MarkId.A_BIG_FOREHEAD, name: 'A big forehead' },
  { id: MarkId.A_BULBOUS_NOSE, name: 'A bulbous nose' },
  { id: MarkId.A_CHERUBIC_FACE, name: 'A cherubic face' },
  { id: MarkId.A_CHESHIRE_GRIN, name: 'A Cheshire grin' },
  { id: MarkId.A_CLEFT_LIP, name: 'A cleft lip' },
  { id: MarkId.A_CLUBFOOT, name: 'A clubfoot' },
  { id: MarkId.A_CROOKED_NOSE, name: 'A crooked nose' },
  { id: MarkId.A_DOUBLE_CHIN, name: 'A double chin' },
  { id: MarkId.A_FRECKLED_FACE, name: 'A freckled face' },
  { id: MarkId.A_GAUNT_FACE, name: 'A gaunt face' },
  { id: MarkId.A_GLASGOW_SMILE, name: 'A Glasgow smile' },
  { id: MarkId.A_GRAVELLY_VOICE, name: 'A gravelly voice' },
  { id: MarkId.A_LAZY_EYE, name: 'A lazy eye' },
  { id: MarkId.A_LEERING_SNEER, name: 'A leering sneer' },
  { id: MarkId.A_LIGHTNING_STRIKE_SCAR, name: 'A lightning-strike scar' },
  { id: MarkId.A_LONG_GAIT, name: 'A long gait' },
  { id: MarkId.A_LONG_NECK, name: 'A long neck' },
  { id: MarkId.A_MARK_OF_SHAME, name: 'A mark of shame' },
  { id: MarkId.A_MISSING_EYEBROW, name: 'A missing eyebrow' },
  { id: MarkId.A_MISSING_FINGER, name: 'A missing finger' },
  { id: MarkId.A_NARROW_FACE, name: 'A narrow face' },
  { id: MarkId.A_PERSISTENT_COUGH, name: 'A persistent cough' },
  { id: MarkId.A_PIERCED_EAR, name: 'A pierced ear' },
  { id: MarkId.A_POT_BELLY, name: 'A pot belly' },
  { id: MarkId.A_RED_BIRTHMARK, name: 'A red birthmark' },
  { id: MarkId.A_SCARRED_FACE, name: 'A scarred face' },
  { id: MarkId.A_SERIOUS_UNDERBITE, name: 'A serious underbite' },
  { id: MarkId.A_SMALL_NOSE, name: 'A small nose' },
  { id: MarkId.A_SQUARE_JAW, name: 'A square jaw' },
  { id: MarkId.A_THIN_NOSE, name: 'A thin nose' },
  { id: MarkId.A_TORN_EAR, name: 'A torn ear' },
  { id: MarkId.A_TURNED_UP_NOSE, name: 'A turned-up nose' },
  { id: MarkId.A_VISIBLE_TATTOO, name: 'A visible tattoo' },
  { id: MarkId.A_WIDE_GRIN, name: 'A wide grin' },
  { id: MarkId.A_WIDOWS_PEAK, name: 'A widow’s peak' },
  { id: MarkId.A_WINNING_SMILE, name: 'A winning smile' },
  { id: MarkId.ACNE_SCARS, name: 'Acne scars' },
  { id: MarkId.AN_AQUILINE_NOSE, name: 'An aquiline nose' },
  { id: MarkId.AN_OMINOUS_BIRTHMARK, name: 'An ominous birthmark' },
  { id: MarkId.AN_UNFRIENDLY_SMILE, name: 'An unfriendly smile' },
  { id: MarkId.BAD_ACNE, name: 'Bad acne' },
  { id: MarkId.BALDING_PATE, name: 'Balding pate' },
  { id: MarkId.BEAUTY_MARK, name: 'Beauty mark' },
  { id: MarkId.BLOODSTAINED_CLOTHES, name: 'Bloodstained clothes' },
  { id: MarkId.BROAD_SHOULDERS, name: 'Broad shoulders' },
  { id: MarkId.BROKEN_TEETH, name: 'Broken teeth' },
  { id: MarkId.BRUISED_SKIN, name: 'Bruised skin' },
  { id: MarkId.BUSHY_EYEBROWS, name: 'Bushy eyebrows' },
  { id: MarkId.CHAPPED_LIPS, name: 'Chapped lips' },
  // { id: MarkId., name: '' },
  // { id: MarkId., name: '' },
  // { id: MarkId., name: '' },
  // { id: MarkId., name: '' },
  // { id: MarkId., name: '' },
  // { id: MarkId., name: '' },
  // { id: MarkId., name: '' },
  // { id: MarkId., name: '' },
  // { id: MarkId., name: '' },
  // { id: MarkId., name: '' },
];
