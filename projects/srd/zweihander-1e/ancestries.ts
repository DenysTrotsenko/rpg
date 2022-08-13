import {Ancestry} from './models';
import {AncestryId, AttributeId, TraitId} from './enums';

export const ANCESTRIES: Ancestry[] = [
  {
    id: AncestryId.HUMAN,
    name: 'Human',
    modifiers: {
      [AttributeId.COMBAT]: 1,
      [AttributeId.BRAWN]: 0,
      [AttributeId.AGILITY]: -1,
      [AttributeId.PERCEPTION]: 1,
      [AttributeId.INTELLIGENCE]: 1,
      [AttributeId.WILLPOWER]: -1,
      [AttributeId.FELLOWSHIP]: -1,
    },
    traits: [
      TraitId.BLESSING_IN_DISGUISE,
      TraitId.DANGER_SENSE,
      TraitId.DAUNTLESS,
      TraitId.ESOTERIC_MEMORY,
      TraitId.FORTUNES_WHEEL,
      TraitId.GRIM_RESOLVE,
      TraitId.MANIFEST_DESTINY,
      TraitId.MIXED_BLOODLINE,
      TraitId.MOUNTAIN_AMONGST_MEN,
      TraitId.NATURAL_SELECTION,
      TraitId.NOBLE_SAVAGE,
      TraitId.SEVENTH_SENSE
    ]
  },
  {
    id: AncestryId.DWARF,
    name: 'Dwarf',
    modifiers: {
      [AttributeId.COMBAT]: 1,
      [AttributeId.BRAWN]: 1,
      [AttributeId.AGILITY]: -1,
      [AttributeId.PERCEPTION]: -1,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 1,
      [AttributeId.FELLOWSHIP]: -1,
    },
    traits: [
      TraitId.CAVESIGHT,
      TraitId.CHILDREN_OF_THE_EARTH,
      TraitId.CONSUME_ALCOHOL,
      TraitId.DWARVEN_WARFARE,
      TraitId.GRUDGEBEARER,
      TraitId.IRONCLAD,
      TraitId.OATHKEEPER,
      TraitId.PHYSICAL_PROWESS,
      TraitId.RUNEMARKED_GLORY,
      TraitId.STENTORIAN_VOICE,
      TraitId.STONEHEADED,
      TraitId.STRENGTH_OF_THE_MOUNTAIN
    ]
  },
  {
    id: AncestryId.ELF,
    name: 'Elf',
    modifiers: {
      [AttributeId.COMBAT]: 0,
      [AttributeId.BRAWN]: -1,
      [AttributeId.AGILITY]: 1,
      [AttributeId.PERCEPTION]: 1,
      [AttributeId.INTELLIGENCE]: 1,
      [AttributeId.WILLPOWER]: -1,
      [AttributeId.FELLOWSHIP]: -1,
    },
    traits: [
      TraitId.BEWITCHING,
      TraitId.BEYOND_THE_VEIL,
      TraitId.DEADLY_AIM,
      TraitId.ENDURING_MORTALITY,
      TraitId.FEY_TREACHERY,
      TraitId.FIRSTBORN,
      TraitId.KINDRED_WARBAND,
      TraitId.LAMENT_OF_THE_AGES,
      TraitId.MEDITATIVE_HEALING,
      TraitId.NATURES_OWN,
      TraitId.NIGHTEYES,
      TraitId.WARRIORS_TATTOO
    ]
  },
  {
    id: AncestryId.GNOME,
    name: 'Gnome',
    modifiers: {
      [AttributeId.COMBAT]: -1,
      [AttributeId.BRAWN]: -1,
      [AttributeId.AGILITY]: 1,
      [AttributeId.PERCEPTION]: 0,
      [AttributeId.INTELLIGENCE]: 1,
      [AttributeId.WILLPOWER]: 1,
      [AttributeId.FELLOWSHIP]: -1,
    },
    traits: [
      TraitId.CLOCKWORKS_OF_WAR,
      TraitId.CRAG_FIGHTING,
      TraitId.DENIZEN_OF_STONE,
      TraitId.DUNGEONS_DEEP,
      TraitId.ESCAPE_ARTIST,
      TraitId.GOLDBERGIAN,
      TraitId.HOCUS_POCUS,
      TraitId.METROGNOME,
      TraitId.THIEVING_STUNTIES,
      TraitId.TUNNEL_VISION,
      TraitId.UNDERFOOT,
      TraitId.WRETCHED_PRANKSTER
    ]
  },
  {
    id: AncestryId.HALFLING,
    name: 'Halfling',
    modifiers: {
      [AttributeId.COMBAT]: -1,
      [AttributeId.BRAWN]: -1,
      [AttributeId.AGILITY]: 1,
      [AttributeId.PERCEPTION]: 1,
      [AttributeId.INTELLIGENCE]: -1,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 1,
    },
    traits: [
      TraitId.BEGUILER,
      TraitId.CATLIKE_REFLEXES,
      TraitId.CRAVEN,
      TraitId.FARSIGHT,
      TraitId.FETTERED_CHAOS,
      TraitId.FIELDWARDEN,
      TraitId.FLEETFOOTED,
      TraitId.HIJINKS,
      TraitId.KLEPTOMANIA,
      TraitId.LOW_BLOW,
      TraitId.MEMENTO,
      TraitId.PINTSIZED
    ]
  },
  {
    id: AncestryId.OGRE,
    name: 'Ogre',
    modifiers: {
      [AttributeId.COMBAT]: 1,
      [AttributeId.BRAWN]: 2,
      [AttributeId.AGILITY]: -2,
      [AttributeId.PERCEPTION]: -1,
      [AttributeId.INTELLIGENCE]: 0,
      [AttributeId.WILLPOWER]: 0,
      [AttributeId.FELLOWSHIP]: 0,
    },
    traits: [
      TraitId.BROADBELLIED,
      TraitId.CAST_IRON_STOMACH,
      TraitId.CRUISIN_FOR_A_BRUISIN,
      TraitId.FRIGHTENING_BELLOW,
      TraitId.GUTPLATE,
      TraitId.HUNGER_PANGS,
      TraitId.MIGHTY_THEWS,
      TraitId.ODD_COUPLE,
      TraitId.ROTGUT_SPRAY,
      TraitId.SLAMDANCE,
      TraitId.THICK_LINING,
      TraitId.WENDIGO
    ]
  }
];
