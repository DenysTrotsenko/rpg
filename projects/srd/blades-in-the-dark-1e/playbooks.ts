import {ActionId, ContactId, ItemId, PlaybookId, SpecialAbilityId} from './enums';
import {Playbook} from './models';

export const PLAYBOOKS: Playbook[] = [
  {
    id: PlaybookId.CUTTER,
    name: 'Cutter',
    actions: [
      { action: ActionId.SKIRMISH, value: 2 },
      { action: ActionId.COMMAND, value: 1 }
    ],
    abilities: [
      SpecialAbilityId.BATTLEBORN,
      SpecialAbilityId.BODYGUARD,
      SpecialAbilityId.GHOST_FIGHTER,
      SpecialAbilityId.LEADER,
      SpecialAbilityId.MULE,
      SpecialAbilityId.NOT_TO_BE_TRIFLED_WITH,
      SpecialAbilityId.SAVAGE,
      SpecialAbilityId.VIGOROUS
    ],
    contacts: [
      ContactId.MARLANE,
      ContactId.CHAEL,
      ContactId.MERCY,
      ContactId.GRACE,
      ContactId.SAWTOOTH,
    ],
    items: [
      ItemId.FINE_HAND_WEAPON,
      ItemId.FINE_HEAVY_WEAPON,
      ItemId.SCARY_WEAPON_OR_TOOL,
      ItemId.MANACLES_CHAIN,
      ItemId.RAGE_ESSENCE_VIAL,
    ],
    labels: {
      description: 'Cutters are good at winning fights, with violence and with intimidation. Play a Cutter if you want to get your way.'
    }
  },
  {
    id: PlaybookId.HOUND,
    name: 'Hound',
    actions: [
      { action: ActionId.HUNT, value: 2 },
      { action: ActionId.SURVEY, value: 1 }
    ],
    abilities: [
      SpecialAbilityId.SHARPSHOOTER,
      SpecialAbilityId.FOCUSED,
      SpecialAbilityId.GHOST_HUNTER,
      SpecialAbilityId.SCOUT,
      SpecialAbilityId.SURVIVOR,
      SpecialAbilityId.TOUGH_AS_NAILS,
      SpecialAbilityId.VENGEFUL
    ],
    contacts: [
      ContactId.STEINER,
      ContactId.CELENE,
      ContactId.MELVIR,
      ContactId.VELERIS,
      ContactId.CASTA,
    ],
    items: [
      ItemId.FINE_PAIR_OF_PISTOLS,
      ItemId.FINE_LONG_RIFLE,
      ItemId.ELECTROPLASMIC_AMMUNITION,
      ItemId.A_TRAINED_HUNTING_PET,
      ItemId.SPYGLASS,
    ],
    labels: {
      description: 'Hounds are good at tracking things down and also long-distance combat. Play a Hound if you want to choose your battles.'
    }
  },
  {
    id: PlaybookId.LEECH,
    name: 'Leech',
    actions: [
      { action: ActionId.TINKER, value: 2 },
      { action: ActionId.WRECK, value: 1 }
    ],
    abilities: [
      SpecialAbilityId.ALCHEMIST,
      SpecialAbilityId.ANALYST,
      SpecialAbilityId.ARTIFICER,
      SpecialAbilityId.FORTITUDE,
      SpecialAbilityId.GHOST_WARD,
      SpecialAbilityId.PHYSICKER,
      SpecialAbilityId.SABOTEUR,
      SpecialAbilityId.VENOMOUS
    ],
    contacts: [
      ContactId.STAZIA,
      ContactId.VELDREN,
      ContactId.ECKERD,
      ContactId.JUL,
      ContactId.MALISTA,
    ],
    items: [
      ItemId.FINE_TINKERING_TOOLS,
      ItemId.FINE_WRECKING_TOOLS,
      ItemId.BLOWGUN_DARTS_SYRINGES,
      ItemId.BANDOLIER,
      ItemId.GADGETS,
    ],
    labels: {
      description: 'Leeches are good at using alchemy and wrecking stuff with sabotage. Play a Leech if you want to be creative with weird tools.'
    }
  },
  {
    id: PlaybookId.LURK,
    name: 'Lurk',
    actions: [
      { action: ActionId.FINESSE, value: 1 },
      { action: ActionId.PROWL, value: 2 }
    ],
    abilities: [
      SpecialAbilityId.INFILTRATOR,
      SpecialAbilityId.AMBUSH,
      SpecialAbilityId.DAREDEVIL,
      SpecialAbilityId.THE_DEVILS_FOOTSTEPS,
      SpecialAbilityId.EXPERTISE,
      SpecialAbilityId.GHOST_VEIL,
      SpecialAbilityId.REFLEXES,
      SpecialAbilityId.SHADOW
    ],
    contacts: [
      ContactId.TELDA,
      ContactId.DARMOT,
      ContactId.FRAKE,
      ContactId.ROSLYN_KELLIS,
      ContactId.PETRA,
    ],
    items: [
      ItemId.FINE_LOCKPICKS,
      ItemId.FINE_SHADOW_CLOAK,
      ItemId.LIGHT_CLIMBING_GEAR,
      ItemId.SILENCE_POTION_VIAL,
      ItemId.DARK_SIGHT_GOGGLES,
    ],
    labels: {
      description: 'Lurks are good at sneaking around and breaking into places. Play a Lurk if you want to slink around in the shadows.'
    }
  },
  {
    id: PlaybookId.SLIDE,
    name: 'Slide',
    actions: [
      { action: ActionId.CONSORT, value: 1 },
      { action: ActionId.SWAY, value: 2 }
    ],
    abilities: [
      SpecialAbilityId.ROOKS_GAMBIT,
      SpecialAbilityId.CLOAK_DAGGER,
      SpecialAbilityId.GHOST_VOICE,
      SpecialAbilityId.LIKE_LOOKING_INTO_A_MIRROR,
      SpecialAbilityId.A_LITTLE_SOMETHING_ON_THE_SIDE,
      SpecialAbilityId.MESMERISM,
      SpecialAbilityId.SUBTERFUGE,
      SpecialAbilityId.TRUST_IN_ME,
    ],
    contacts: [
      ContactId.BRYL,
      ContactId.BAZSO_BAZ,
      ContactId.KLYRA,
      ContactId.NYRYX,
      ContactId.HARKER,
    ],
    items: [
      ItemId.FINE_CLOTHES_JEWELRY,
      ItemId.FINE_DISGUISE_KIT,
      ItemId.FINE_LOADED_DICE_TRICK_CARDS,
      ItemId.TRANCE_POWDER,
      ItemId.A_CANE_SWORD,
    ],
    labels: {
      description: 'Slides are good at social situations and subterfuge. Play a Slide if you want to manipulate and deceive people.'
    }
  },
  {
    id: PlaybookId.SPIDER,
    name: 'Spider',
    actions: [
      { action: ActionId.STUDY, value: 1 },
      { action: ActionId.CONSORT, value: 2 }
    ],
    abilities: [
      SpecialAbilityId.FORESIGHT,
      SpecialAbilityId.CALCULATING,
      SpecialAbilityId.CONNECTED,
      SpecialAbilityId.FUNCTIONING_VICE,
      SpecialAbilityId.GHOST_CONTRACT,
      SpecialAbilityId.JAIL_BIRD,
      SpecialAbilityId.MASTERMIND,
      SpecialAbilityId.WEAVING_THE_WEB,
    ],
    contacts: [
      ContactId.SALIA,
      ContactId.AUGUS,
      ContactId.JENNAH,
      ContactId.RIVEN,
      ContactId.JEREN,
    ],
    items: [
      ItemId.FINE_COVER_IDENTITY,
      ItemId.FINE_BOTTLE_OF_WHISKEY,
      ItemId.BLUEPRINTS,
      ItemId.VIAL_OF_SLUMBER_ESSENCE,
      ItemId.CONCEALED_PALM_PISTOL,
    ],
    labels: {
      description: 'Spiders are good at masterminding maneuvers. Play a Spider if you want to assist teammates and deal with other factions.'
    }
  },
  {
    id: PlaybookId.WHISPER,
    name: 'Whisper',
    actions: [
      { action: ActionId.STUDY, value: 1 },
      { action: ActionId.ATTUNE, value: 2 }
    ],
    abilities: [
      SpecialAbilityId.COMPEL,
      SpecialAbilityId.GHOST_MIND,
      SpecialAbilityId.IRON_WILL,
      SpecialAbilityId.OCCULTIST,
      SpecialAbilityId.RITUAL,
      SpecialAbilityId.STRANGE_METHODS,
      SpecialAbilityId.TEMPEST,
      SpecialAbilityId.WARDED
    ],
    contacts: [
      ContactId.NYRYX_2,
      ContactId.SCURLOCK,
      ContactId.SETARRA,
      ContactId.QUELLYN,
      ContactId.FLINT,
    ],
    items: [
      ItemId.FINE_LIGHTNING_HOOK,
      ItemId.FINE_SPIRIT_MASK,
      ItemId.SPIRIT_BOTTLES,
      ItemId.GHOST_KEY,
      ItemId.DEMONBANE_CHARM,
    ],
    labels: {
      description: 'Whispers are good at magical stuff and dealing with ghosts. Play a Whisper if you want to meddle with arcane powers.'
    }
  }
];
