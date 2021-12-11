import {AttributeId} from './enums';
import {Attribute} from './models';

export const ATTRIBUTES: Attribute[] = [
  {
    id: AttributeId.COMBAT,
    name: 'Combat',
    labels: {
      description: 'Combat represents your Character’s overall proficiency while fighting with weapons in close quarters and from afar, as well as defending yourself. It also determines your Base Chance for success with the Martial Melee, Martial Ranged, Simple Melee and Simple Ranged Skills. Your [CB] directly affects Total Damage inflicted with melee and ranged weapons.'
    }
  },
  {
    id: AttributeId.BRAWN,
    name: 'Brawn',
    labels: {
      description: 'Brawn represents your Character’s physical prowess, muscle, durability and overall endurance. It controls your ability to overpower others using might and force, withstand pain and carry equipment without being encumbered. It also determines your Base Chance to succeed at Skill Tests with the Athletics, Drive, Intimidate and Toughness Skills. Your [BB] directly affects Damage Threshold and Encumbrance Limit.'
    }
  },
  {
    id: AttributeId.AGILITY,
    name: 'Agility',
    labels: {
      description: 'Agility represents your Character’s speed and nimbleness. It controls your ability to outmaneuver others and allows you to duck out of the way from falling hazards. It also determines your Base Chance to succeed at Skill Tests with the Coordination, Pilot, Ride, Skulduggery and Stealth Skills. Your [AB] directly affects Movement.'
    }
  },
  {
    id: AttributeId.PERCEPTION,
    name: 'Perception',
    labels: {
      description: 'Perception represents your Character’s mental acuity and insight. It controls your ability to observe the world around you. It also determines your Base Chance to succeed at Skill Tests with the Awareness, Eavesdrop, Scrutinize and Survival Skills. Your [PB] directly affects Initiative and Distances for ranged weapons.'
    }
  },
  {
    id: AttributeId.INTELLIGENCE,
    name: 'Intelligence',
    labels: {
      description: 'Intelligence represents your Character’s ability to learn and memorize. It controls your ability to understand the written word and recall important facts. It also determines your Base Chance to succeed at Skill Tests with the Alchemy, Counterfeit, Education, Folklore, Gamble, Heal, Navigation and Warfare Skills. Your [IB] directly affects the number of Magick spells that can be learned and number of Focuses acquired.'
    }
  },
  {
    id: AttributeId.WILLPOWER,
    name: 'Willpower',
    labels: {
      description: 'Willpower represents your Character’s resolve and fortitude. It controls your ability to act decisively in the face of hardship and exercise self-control in dangerous or frightening situations. It also determines your Base Chance to succeed at Skill Tests with the Incantation, Interrogation, Resolve and Tradecraft Skills. Your [WB] directly affects Peril Threshold and several miscellaneous modifiers for Magick.'
    }
  },
  {
    id: AttributeId.FELLOWSHIP,
    name: 'Fellowship',
    labels: {
      description: 'Fellowship represents your Character’s charisma and social savvy. It controls your ability to persuade others, adapt to social situations, and project personal confidence. It also determines your Base Chance to succeed at Skill Tests with the Bargain, Charm, Disguise, Guile, Handle Animal, Leadership and Rumor Skills. Your [FB] is the first number of the Primary Attribute, which directly affects how many people you influence with Fellowship-based Skill Tests and how many languages you may speak.'
    }
  }
];
