import {Tag} from '../scion.models';
import {BOOK_ID, TAG_TYPE_ID} from '../scion.enums';

export const TAGS: Tag[] = [
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Aggravated',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon deals grievous magical damage, such as a blade made of raw fire or lightning, or the revealed face of a God. Aggravated Injury Conditions are things like Burned Off Completely and Melted Flesh and can only be healed by magical abilities. This is meant expressly for magical and supernatural sources of injury.',
    cost: 2
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Arcing',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon can be fired in an arc, allowing shots to better maneuver around cover. When using this weapon against a target in cover, downgrade its rating by 1: Light cover is ignored, and heavy cover becomes light.',
    cost: 1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Automatic',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon is designed to fire in bursts. It may be used to make a burst fire attack, which adds +1 Enhancement to applying the Critical Hit stunt. This tag may not be added to any weapon with the Melee or Shockwave characteristic. This restriction applies even if these tags were added via a special ability, such as a Knack or a Boon. After using the Empty the Clip Stunt, the player must roll for Out of Ammo with a -2 Complication for each time they’ve rolled this scene.',
    cost: 2
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Bashing',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon deals blunt force damage. The tag allows for the Broken and Battered Injury Conditions. It cannot be used to slice or sever objects (or limbs).',
    cost: 0
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Brutal',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon can inflict massive trauma on a target. This weapon reduces the successes necessary for a Critical Stunt by 1.',
    cost: 1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Concealable',
    type: TAG_TYPE_ID.WEAPON,
    description: 'The weapon can be hidden in a pocket, up a sleeve, or inside a particularly long coat. Gain Enhancement 1 to any tasks involving sneaking the weapon into a location without someone noticing.',
    cost: 1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Firearm',
    type: TAG_TYPE_ID.WEAPON,
    description: 'The weapon is a gun. It must be used with the Firearms skill, and adds +1 Enhancement to Firearms rolls.',
    cost: 0
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Grappling',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon grants +1 Enhancement to making the Grapple attack.',
    cost: 1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Lethal',
    type: TAG_TYPE_ID.WEAPON,
    description: 'The weapon deals lethal damage, which can lead to serious injury. This tag allows for the Scratched, Cut, or Bleeding Out Injury Conditions. A weapon with this tag cannot inflict the Bruised or Battered Injury Conditions.',
    cost: 0
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Long Range',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon can be fired at far distances, extending its effective range band to long. These weapons increase the Difficulty of any attacks in the close and short range band by 1.',
    cost: 1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Loud',
    type: TAG_TYPE_ID.WEAPON,
    description: 'The weapon is noisy and cannot be silenced, and will surely draw attention if fired in a place where people can hear it.',
    cost: -1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Melee',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon can only be used at close range. It must be used with the Close Combat Skill, and adds +1 Enhancement to Close Combat rolls.',
    cost: 0
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Messy',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon does not damage cleanly, leaving ragged wounds, or blowing apart cover. A Messy weapon will leave behind a distinctive trail.',
    cost: -1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Natural',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon is part of a character’s body, such as bare fists, a ferocious bite, or wicked claws. It cannot be disarmed, though may suffer Complications or increased Difficulty from Injuries.',
    cost: 1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Piercing',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon is meant to punch through the protective layers of armor. Reduce a target’s hard armor value by 1 or soft armor value by 2 when dealing damage with a weapon with this quality.',
    cost: 2
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Pushing',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon is heavy, large, or otherwise well-adapted to pushing foes around the battlefield. After dealing Stress or an Injury Conditions to an opponent, you can also choose to knock them prone.',
    cost: 1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Ranged',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon is meant to be fired at range, up to Medium range. These weapons increase the Difficulty of any attacks in the Close range band by 1. It must be used with either Firearms or Athletics, and adds +1 Enhancement to Firearms or Athletics rolls.',
    cost: 0
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Reach',
    type: TAG_TYPE_ID.WEAPON,
    description: 'A weapon with a long haft, or one where the end of the weapon can reach up to six feet or more away (like a whip). These weapons can be used to make Close Combat attacks out to short range.',
    cost: 1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Returning',
    type: TAG_TYPE_ID.WEAPON,
    description: 'Often paired with Thrown, this weapon returns when fired or thrown away from the character. A boomerang is the most common example, but a harpoon with a retractable chain would also be Returning.',
    cost: 1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Shockwave',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon can be used to strike all targets in the same range band. This tag is reserved for weapons at large Scale, or for magical effects granted by Knacks or Boons and is not typical on mundane weaponry.',
    cost: 4
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Slow',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon requires time and effort to set up, reload, move, etc, such as a catapult or trebuchet. An action must be dedicated to the aspect of the weapon that requires work and attention.',
    cost: -1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Stun',
    type: TAG_TYPE_ID.WEAPON,
    description: 'When inflicting an Injury, this weapon can only be used to inflict the Minor Injury Conditions Bruised, Staggered, or Stunned, or the Major Injury Condition Battered. When a character is Taken Out by a weapon with the Stun tag, they are knocked unconscious.',
    cost: 1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Thrown',
    type: TAG_TYPE_ID.WEAPON,
    description: 'This weapon is meant to be fired at range, up to Medium range. These weapons increase the Difficulty of any attacks in the Close range band by 1. It must be used with either Firearms or Athletics, and adds +1 Enhancement to Firearms or Athletics rolls.',
    cost: 0
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Two-Handed',
    type: TAG_TYPE_ID.WEAPON,
    description: 'The weapon requires two hands to use. If a character loses the ability to use one of her hands, she cannot use this weapon.',
    cost: -1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Unconcealable',
    type: TAG_TYPE_ID.WEAPON,
    description: 'The weapon is too big or bulky to be easily hidden. You may be able to smuggle it into places by putting it in a container or case of some kind, but even this might be difficult without arousing suspicion.',
    cost: -1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Versatile',
    type: TAG_TYPE_ID.WEAPON,
    description: 'The weapon is useful outside of simply causing harm. Add +1 Enhancement when using the weapon to perform any Stunts.',
    cost: 2
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Worn',
    type: TAG_TYPE_ID.WEAPON,
    description: 'The weapon is strapped to the character’s body or otherwise worn, and cannot be disarmed.',
    cost: 2
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Cumbersome',
    type: TAG_TYPE_ID.ARMOR,
    description: 'The armor is big and bulky, imposing +1 Difficulty to any kind of athletic feats performed while wearing it.',
    cost: -1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Concealable',
    type: TAG_TYPE_ID.ARMOR,
    description: 'Whether a Kevlar vest or a flawlessly made chain shirt forged by dwarves, the armor can be hidden under clothing.',
    cost: 2
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Hard I',
    type: TAG_TYPE_ID.ARMOR,
    description: 'Hard armor grants the wearer one additional Injury Condition box. The one-point version of the tag gives one condition box, and the three-point version gives an additional one. Once filled, the boxes stay filled until the end of the scene. There is no Complication attached to the Injury Condition box provided by Hard armor. Armor cannot be both Hard and Soft.',
    cost: 1
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Hard II',
    type: TAG_TYPE_ID.ARMOR,
    description: 'Hard armor grants the wearer one additional Injury Condition box. The one-point version of the tag gives one condition box, and the three-point version gives an additional one. Once filled, the boxes stay filled until the end of the scene. There is no Complication attached to the Injury Condition box provided by Hard armor. Armor cannot be both Hard and Soft.',
    cost: 3
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Innocuous',
    type: TAG_TYPE_ID.ARMOR,
    description: 'This armor looks like an ordinary object. Often a motorcycle jacket, or sports pads: things someone won’t be concerned about seeing. Relic armors may have this tag as a magical property.',
    cost: 2
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Resistant',
    type: TAG_TYPE_ID.ARMOR,
    description: 'The armor is designed to protect against a certain type of damage. The most common mundane armor is bulletproof, which ignores the Piercing tag on any weapon that also has the Firearms tag. Armors made by Gods may be resistant to fire or frost or acid, protecting the character from any Complication or Condition that may come from those sources. If enough points are available, this tag may be purchased more than once.',
    cost: 2
  },
  {
    id: null,
    book: BOOK_ID.SCION_ORIGIN,
    name: 'Soft',
    type: TAG_TYPE_ID.ARMOR,
    description: 'Soft armor increases the Difficulty of the “Inflict Damage” Stunt by 1. Armor cannot be both Hard and Soft, but certain effects may grant both soft and hard armor; so long as they’re from different sources, they stack.',
    cost: 1
  },
  {
    id: null,
    name: 'Weighty',
    book: BOOK_ID.SCION_ORIGIN,
    type: TAG_TYPE_ID.ARMOR,
    description: 'The armor is heavy or tiring to wear. If a character performs extended feats of labor or sleeps in it, she must make a Difficulty 3 Athletics + Stamina roll or deal with a Fatigued Condition.',
    cost: -1
  },
];

// {
//   id: null,
//     name: '',
//   type: TAG_TYPE_ID.ARMOR,
//   description: '',
//   cost: null
// },
