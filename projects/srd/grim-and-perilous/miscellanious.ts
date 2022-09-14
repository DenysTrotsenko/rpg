import {AgeId, BuildId, EyesId, HairColorId, HairLengthId, HairStyleId, MarkId, SexId, StatureId, StyleId} from './enums';
import {Age, Build, Eyes, HairColor, HairLength, HairStyle, Mark, Sex, Stature, Style} from './models';

export const AGES: Age[] = [
  { id: AgeId.YOUNG, name: 'Young' },
  { id: AgeId.ADULT, name: 'Adult' },
  { id: AgeId.MATURE, name: 'Mature' },
  { id: AgeId.AGING, name: 'Aging' },
  { id: AgeId.ELDERLY, name: 'Elderly' }
];

export const BUILD: Build[] = [
  { id: BuildId.LEAN, name: 'Lean' },
  { id: BuildId.NORMAL, name: 'Normal' },
  { id: BuildId.STOCKY, name: 'Stocky' },
];

export const STATURE: Stature[] = [
  { id: StatureId.SLIGHT, name: 'Slight' },
  { id: StatureId.AVERAGE, name: 'Average' },
  { id: StatureId.TALL, name: 'Tall' },
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
  { id: MarkId.CHICKENPOX_SCARS, name: 'Chickenpox scars' },
  { id: MarkId.CONSTANT_CONGESTION, name: 'Constant congestion' },
  { id: MarkId.CROOKED_TEETH, name: 'Crooked teeth' },
  { id: MarkId.DIMPLES, name: 'Dimples' },
  { id: MarkId.DROOPY_EYELIDS, name: 'Droopy eyelids' },
  { id: MarkId.EXCESSIVE_BODY_HAIR, name: 'Excessive body hair' },
  { id: MarkId.FACIAL_PARALYSIS, name: 'Facial paralysis' },
  { id: MarkId.FLATULENT, name: 'Flatulent' },
  { id: MarkId.GANGLY_ARMS, name: 'Gangly arms' },
  { id: MarkId.GRIMY_FINGERNAILS, name: 'Grimy fingernails' },
  { id: MarkId.HOOKWORM_RASHES, name: 'Hookworm rashes' },
  { id: MarkId.JAUNDICE, name: 'Jaundice' },
  { id: MarkId.KELOID_SCARS, name: 'Keloid scars' },
  { id: MarkId.LARGE_HANDS, name: 'Large hands' },
  { id: MarkId.LONG_FINGERS, name: 'Long fingers' },
  { id: MarkId.LUXURIOUS_HAIR, name: 'Luxurious hair' },
  { id: MarkId.MISMATCHED_EYES, name: 'Mismatched eyes' },
  { id: MarkId.MISSING_TEETH, name: 'Missing teeth' },
  { id: MarkId.PATCHY_SKIN, name: 'Patchy skin' },
  { id: MarkId.PATCHY_WHITE_HAIR, name: 'Patchy white hair' },
  { id: MarkId.PERFECT_POSTURE, name: 'Perfect posture' },
  { id: MarkId.PERFECT_SKIN, name: 'Perfect skin' },
  { id: MarkId.PERFECT_TEETH, name: 'Perfect teeth' },
  { id: MarkId.PERMANENT_MAKEUP, name: 'Permanent makeup' },
  { id: MarkId.PLUMP_LIPS, name: 'Plump lips' },
  { id: MarkId.POCKMARKED_SKIN, name: 'Pockmarked skin' },
  { id: MarkId.PROMINENT_WRINKLES, name: 'Prominent wrinkles' },
  { id: MarkId.PURPLE_BIRTHMARKS, name: 'Purple birthmarks' },
  { id: MarkId.RANCID_BREATH, name: 'Rancid breath' },
  { id: MarkId.RED_CHEEKS, name: 'Red cheeks' },
  { id: MarkId.ROTTING_TEETH, name: 'Rotting teeth' },
  { id: MarkId.RUDDY_CHEEKS, name: 'Ruddy cheeks' },
  { id: MarkId.SCARIFIED_SKIN, name: 'Scarified skin' },
  { id: MarkId.SEVERAL_MOLES, name: 'Several moles' },
  { id: MarkId.SHORT_LEGS, name: 'Short legs' },
  { id: MarkId.SKIN_TAGS, name: 'Skin tags' },
  { id: MarkId.SLEEPY_EYES, name: 'Sleepy eyes' },
  { id: MarkId.SLOPING_SHOULDERS, name: 'Sloping shoulders' },
  { id: MarkId.SLOUCHY_POSTURE, name: 'Slouchy posture' },
  { id: MarkId.SMALL_HANDS, name: 'Small hands' },
  { id: MarkId.SMALLPOX_SCARS, name: 'Smallpox scars' },
  { id: MarkId.SQUINTING_EYES, name: 'Squinting eyes' },
  { id: MarkId.STUMPY_LEGS, name: 'Stumpy legs' },
  { id: MarkId.STILTED_SPEECH, name: 'Stilted speech' },
  { id: MarkId.SUNBURNED_SKIN, name: 'Sunburned skin' },
  { id: MarkId.SWEAT_PROFUSELY, name: 'Sweat profusely' },
  { id: MarkId.THICK_LUSCIOUS_EYELASHES, name: 'Thick, luscious eyelashes' },
  { id: MarkId.UNKEMPT_HAIR, name: 'Unkempt hair' },
  { id: MarkId.WIND_CHAPPED_CHEEKS, name: 'Wind-chapped cheeks' },
  { id: MarkId.WOODEN_DENTURES, name: 'Wooden dentures' }
];

export const SEX: Sex[] = [
  { id: SexId.MALE, name: 'Male' },
  { id: SexId.FEMALE, name: 'Female' }
];