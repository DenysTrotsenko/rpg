import {BOOK_ID, POWER_ACTION_ID, POWER_DURATION_ID, POWER_ID, POWER_RANGE_ID, POWER_TYPE_ID} from './5e.enums';
import {Power} from './5e.models';

export const POWERS: Power[] = [
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: 'Critters with this power can cause seemingly normal accidents to occur. The exact nature of the accident is for the gamemaster to determine, based on what the target is doing and what’s going on around him. This power isn’t, in and of itself, dangerous, but circumstance and environment can come into play to make it so. Tripping on your own feet in front of rush-hour traffic could be hazardous to your health, for instance.\nWhen a critter targets someone with this power, make an Opposed Test, using the critter’s Magic + Willpower against the target’s Reaction + Intuition. If the critter wins, treat it as if the target rolled a glitch on a test. If the critter scores 4 or more net hits, the accident is treated as a critical glitch — it’s not just an embarrassing fumble, it’s a potential catastrophe. A critter can use this power on a number of targets at once equal to its Magic rating.'
    }
  },
  {
    id: POWER_ID.ANIMAL_CONTROL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Animal Control',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.SUSTAINED,
    labels: {
      description: 'Some critters can manipulate other critters, particularly (but not always) mundane ones. This power lets the critters control the behavior of an animal or a group of animals. It has to be a normal behavior for the target animal. A flock of birds, for instance, couldn’t steal a motorcycle or fire a pistol, but they could attack someone, follow someone else, or simply be made to fly away. If the target critter leaves the controlling critter’s line of sight, it can’t be commanded any longer, but it will continue to follow any orders they had already been given for the critter’s Charisma in minutes. The critter may control a number of small animals (cats, rats, etc.) equal to its Charisma x 5, or a number of larger animals (wolves, lions, bears, etc.) equal to its Charisma. This power may not be used on any critter with the Sapience power.'
    }
  },
  {
    id: POWER_ID.ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Armor',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: 'Whether it comes in the form of dermal bone deposits, scales, or just a thick hide, a critter with this power has some inherent protection from physical attacks. The critter’s natural Armor rating is cumulative with any armor worn.'
    }
  },
  {
    id: POWER_ID.ASTRAL_FORM,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Astral Form',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  },
];
