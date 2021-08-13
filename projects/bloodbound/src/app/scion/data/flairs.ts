import {Flair} from '../scion.models';
import {FLAIR_TYPE_ID} from '../scion.enums';

export const FLAIRS: Flair[] = [
  {
    id: null,
    name: 'DREAD GAZE',
    tier: 1,
    type: FLAIR_TYPE_ID.ATTACK,
    labels: {
      cost: 'None',
      duration: 'Varies',
      subject: 'One character',
      range: 'Short',
      action: 'Simple',
      cooldown: 'Immediate',
      description: 'When the Antagonist makes eye contact with another character (which, if used in combat, requires a roll — successes must exceed the target’s Defense), she may functionally incapacitate that character. The actual effect may vary; the target may be paralyzed, terrified, helplessly enamored, etc. In any case, she is unable to break away from the Antagonist’s stare. However, the Antagonist cannot take mixed actions while using this Flair, and cannot Move without using a basic action — otherwise, she loses eye contact, and her target is freed.\nIf the target is Blind, Dread Gaze is ineffective.'
    }
  },
  {
    id: null,
    name: 'SEEING RED',
    tier: 1,
    type: FLAIR_TYPE_ID.ATTACK,
    labels: {
      cost: 'None',
      duration: '(filled Health boxes) turns',
      subject: 'Self',
      range: 'Self',
      action: 'Reflexive',
      cooldown: 'The Antagonist takes damage',
      description: 'The Antagonist may enter a frenzied state, during which they feel no pain and are largely incapable of doing anything but attacking the nearest target. This adds a general +1 Enhancement to Close Combat rolls, which rises to +2 if the Antagonist has only a single Health box remaining.'
    }
  },
  {
    id: null,
    name: 'SPRAY N’ PRAY',
    tier: 1,
    type: FLAIR_TYPE_ID.ATTACK,
    labels: {
      cost: 'None',
      duration: 'Instant',
      subject: 'One target; all targets within close range of that target',
      range: 'Medium',
      action: 'Simple',
      cooldown: 'One round',
      description: 'The Antagonist makes a single attack roll, subtracting three dice. If successful, the attack is applied not only to the intended target, but to any other potential targets within close range of the intended target. The attack exhausts the weapon’s magazine, if it has one.'
    }
  },
  {
    id: null,
    name: 'SELFLESS SHIELD',
    tier: 1,
    type: FLAIR_TYPE_ID.DEFENSE,
    labels: {
      cost: 'None',
      duration: 'One round',
      subject: 'All allies within close range',
      range: 'Self',
      action: 'Simple',
      cooldown: 'The Antagonist personally lands a blow against a player character',
      description: 'The Antagonist takes a full defense action. If any allied Antagonists within close range take damage from attacks during the Antagonist’s turn, that damage is removed. The defending Antagonist takes a single level of damage for every ally so defended.'
    }
  },
  {
    id: null,
    name: 'MAKING SPACE',
    tier: 1,
    type: FLAIR_TYPE_ID.UTILITY,
    labels: {
      cost: 'None',
      duration: 'Instant',
      subject: 'One target',
      range: 'Short',
      action: 'Simple',
      cooldown: 'The Antagonist closes to close range with an opponent; or 3 turns',
      description: 'The Antagonist knocks the target back two range bands.'
    }
  },
  {
    id: null,
    name: 'LONG ARM',
    tier: 1,
    type: FLAIR_TYPE_ID.UTILITY,
    labels: {
      cost: 'None',
      duration: 'Instant',
      subject: 'One target',
      range: 'Medium',
      action: 'Simple',
      cooldown: 'Two turns',
      description: 'The Antagonist moves a player character at short or further range to close range. This can be a magical or mundane effect.'
    }
  },
  {
    id: null,
    name: 'HERE I COME',
    tier: 1,
    type: FLAIR_TYPE_ID.UTILITY,
    labels: {
      cost: 'None',
      duration: 'Instant',
      subject: 'Self',
      range: 'Long',
      action: 'Reflexive',
      cooldown: 'The Antagonist retreats to long range from the original target; or 3 turns',
      description: 'The Antagonist moves instantly to close range with a player character within the Antagonist’s line of sight. This can either be a magical effect, a mechanical contrivance of some kind, or simply a burst of speed on the Antagonist’s part.'
    }
  },
  {
    id: null,
    name: 'ILLUSIONS',
    tier: 1,
    type: FLAIR_TYPE_ID.UTILITY,
    labels: {
      cost: 'None; or 1 Tension',
      duration: 'One scene',
      subject: 'One illusion',
      range: 'Medium',
      action: 'Simple',
      cooldown: 'End of scene; or the illusion is successfully dispelled',
      description: 'The Antagonist can create vivid, lifelike illusions that, to onlookers, seem quite real. Attempting to pierce an illusion requires an Integrity + Cunning roll, opposed by the Antagonist’s Illusion pool (or her Desperation Pool, if she does not have Illusion listed as Primary or Secondary). If the illusion created is of an additional Antagonist, roll the Initiative of the Antagonist using Illusions and add an SGC slot to the Initiative roster, creating an appropriate Antagonist to fill it — doing so costs 1 Tension. This Antagonist deals Illusory damage, which lasts either until the end of the scene or until the illusion that created it is dispelled, forcibly or otherwise. This damage can Take Out characters, though they will cease to be Taken Out if the illusion is dispelled early. Dispelling an illusion is always an Occult roll, but the Attribute required will vary depending on the method used.'
    }
  },
  {
    id: null,
    name: 'IMMOBILIZE',
    tier: 1,
    type: FLAIR_TYPE_ID.UTILITY,
    labels: {
      cost: 'None',
      duration: '3 turns; or the target escapes',
      subject: 'One target',
      range: 'Medium',
      action: 'Simple',
      cooldown: 'The target is no longer immobilized',
      description: 'The Antagonist is able to immobilize a character without grappling. (This is a physical immobilization, rather than the immobilization of Dread Gaze, above.) Any character so Immobilized must succeed on a Athletics + Might roll to make use of any action requiring movement, with a difficulty equal to the Antagonist’s successes.'
    }
  },
  {
    id: null,
    name: 'POSSESSION',
    tier: 1,
    type: FLAIR_TYPE_ID.UTILITY,
    labels: {
      cost: 'None',
      duration: 'One scene',
      subject: 'One target',
      range: 'Short',
      action: 'Simple',
      cooldown: 'End of scene; or the Antagonist is exorcised',
      description: 'The Antagonist is capable of taking over another person’s mind, effectively wearing their body like a glove. If the Antagonist’s body vanishes or they must physically enter the target to use this power, they must be exorcised by an appropriate ritual. If the Antagonist’s body remains, add a temporary Vulnerability (True Body), representing its defenselessness as the Antagonist controls another. Non-trivial characters may make a Clash of Wills against the Antagonist.'
    }
  },
  {
    id: null,
    name: 'SHAPESHIFTER',
    tier: 1,
    type: FLAIR_TYPE_ID.UTILITY,
    labels: {
      cost: 'None',
      duration: 'Indefinite',
      subject: 'Self',
      range: 'Self',
      action: 'Simple',
      cooldown: 'The Antagonist returns to her true form',
      description: 'The character is able to transform into the shape of a certain animal, chosen by the Storyguide when this Flair is assigned. The transformation is perfect and undetectable through any means save magic. The Antagonist’s pools do not change when this Flair is used. However, if her form has a certain method of travel, such as flying or swimming while breathing underwater, she may use those. Additionally, she has access to whatever natural weapons her new form may have, including teeth, claws, and even venom. Animals larger than humans add a single Health box; smaller animals subtract one.'
    }
  },
  {
    id: null,
    name: 'SORCERY',
    tier: 1,
    type: FLAIR_TYPE_ID.UTILITY,
    labels: {
      cost: '1 Tension',
      duration: 'Varies',
      subject: 'Varies',
      range: 'Varies',
      action: 'Varies',
      cooldown: 'One scene',
      prerequisite: 'Villain or higher Archetype',
      description: 'Choose a Purview (see Scion: Hero). The Antagonist may channel that Purview to create marvels, at a cost of 1 Tension.'
    }
  },
  {
    id: null,
    name: 'THOUSAND FACES',
    tier: 1,
    type: FLAIR_TYPE_ID.UTILITY,
    labels: {
      cost: 'None; or 1 Tension',
      duration: 'Variable; see description',
      subject: 'Self',
      range: 'Self',
      action: 'Simple',
      cooldown: 'Variable; see description',
      description: 'The Antagonist is able to imitate another being’s face. Choose the means and requirements by which they do so when this Flair is assigned, which may be as simple as being able to see the target and as demanding as needing to consume the target’s heart or liver first. The transformation may last for only a scene or it may be a permanent theft of form. For all intents and purposes, the Antagonist becomes the character she is copying. While she retains her own dice pools, Qualities, and Flairs, she cannot be identified as an impostor through ordinary means. An Empathy roll, contested by the Antagonist with an appropriate Pool, is required for close acquaintances to realize something is wrong, but anything deeper will require Occult knowledge.\nIf Thousand Faces is used to target a player character, it costs 1 Tension.'
    }
  },
  {
    id: null,
    name: 'I HAVE FRIENDS',
    tier: 1,
    type: FLAIR_TYPE_ID.SUPPORT,
    labels: {
      cost: 'None',
      duration: 'Instant',
      subject: 'Summoned Mooks',
      range: 'Self',
      action: 'Reflexive',
      cooldown: '5 rounds; or the summoned Mooks are all defeated',
      prerequisite: 'Villain or higher Archetype',
      description: 'The Antagonist summons a number of Mook Archetype Antagonists equal to the number of player characters to aid them in combat.'
    }
  },
  {
    id: null,
    name: 'INSPIRATION',
    tier: 1,
    type: FLAIR_TYPE_ID.SUPPORT,
    labels: {
      cost: 'None',
      duration: 'One scene',
      subject: 'All allies',
      range: 'Medium',
      action: 'Reflexive',
      cooldown: 'End of scene',
      description: 'The Antagonist’s presence lends strength to her allies. When invoked, all allied characters within near range temporarily remove one Injury Complication, or if they do not currently have one, gain a blanket +1 Enhancement to all actions. The Injury Complications return and the Enhancement fades when the Flair ends, when allies subject to it move out of range of the Antagonist, or when the Antagonist with this Flair is Taken Out.\nAs Antagonists do not use Injury Complications, Antagonists affected by this Flair gain +1 Health, or +1 Enhancement if undamaged.'
    }
  },
  {
    id: null,
    name: 'ON YOUR FEET',
    tier: 1,
    type: FLAIR_TYPE_ID.SUPPORT,
    labels: {
      cost: 'None',
      duration: 'Instant',
      subject: 'Allies previously Taken Out',
      range: 'Short',
      action: 'Simple',
      cooldown: 'Antagonist numbers are reduced to half or less of what they were when this Flair was used previously',
      description: 'The Antagonist clears the rightmost Health Box of an ally within close range. This can bring characters back into a fight they were Taken Out of.'
    }
  },
  {
    id: null,
    name: 'SHARE AND SHARE ALIKE',
    tier: 1,
    type: FLAIR_TYPE_ID.SUPPORT,
    labels: {
      cost: 'None',
      duration: 'One scene',
      subject: 'All Allied Antagonists',
      range: 'Short',
      action: 'Reflexive',
      cooldown: 'End of scene',
      prerequisite: 'Professional or higher Archetype',
      description: 'The Antagonist shares one of her Qualities (chosen when this Flair is assigned) with other Antagonists within near range for the duration of the scene. If she is Taken Out, the effects of this Flair fade.'
    }
  },
  {
    id: null,
    name: 'HYPNOTIC CHARM',
    tier: 1,
    type: FLAIR_TYPE_ID.SOCIAL,
    labels: {
      cost: 'None',
      duration: 'Five minutes',
      subject: 'One character',
      range: 'Short',
      action: 'Simple',
      cooldown: 'One scene; or the target successfully resists the Antagonist’s influence',
      description: 'The Antagonist’s charms become preternaturally potent for a brief instant — long enough to convince another character of just about anything. The effective Scale of whatever she is asking for is considered to be two lower than it actually is. The other character will realize relatively quickly that they’ve been had, but it’s more than long enough for the Antagonist to make her getaway.'
    }
  },
  {
    id: null,
    name: 'LIKE A SIEVE',
    tier: 1,
    type: FLAIR_TYPE_ID.SOCIAL,
    labels: {
      cost: 'None',
      duration: 'One interrogation',
      subject: 'Interrogating character or characters',
      range: 'Short',
      action: 'Simple',
      cooldown: 'One scene; or players intentionally reveal information to the Antagonist',
      prerequisite: 'Villain or higher Archetype',
      description: 'The interrogation is a familiar scene — one person trying to get information out of the other. Sometimes, however, the subject of the interrogation is the one in control, leading the questioner on to reveal more than they meant to. Antagonists with this Flair, when interrogated or otherwise directly investigated, learn more from the player characters than they do from the Antagonist. The Storyguide may ask a single question on the Antagonists’ behalf, and the players must answer truthfully — whatever their answer is becomes known to the Antagonist.'
    }
  },
  {
    id: null,
    name: 'RED HERRING',
    tier: 1,
    type: FLAIR_TYPE_ID.SOCIAL,
    labels: {
      cost: '1 Tension',
      duration: 'One investigation',
      subject: 'Investigating characters',
      range: 'Self',
      action: 'Reflexive',
      cooldown: 'One story',
      prerequisite: 'Villain or higher Archetype',
      description: 'The Antagonist may activate Red Herring in response to an Investigation into her. Every interval of the investigation after Red Herring is invoked suffers a cumulative +1 Complication — eventually rendering the roll all but impossible, as leads dry up and evidence leads nowhere. When players realize they’ve followed the wrong chain of evidence, the investigating character may make an Intellect roll using a suitable Skill to learn where the investigation went off the rails. In doing so, she learns something valuable about her opposition, and Red Herring’s effects are removed.'
    }
  },
  // {
  //   id: null,
  //   name: '',
  //   tier: 1,
  //   type: FLAIR_TYPE_ID.,
  //   labels: {
  //     cost: '',
  //     duration: '',
  //     subject: '',
  //     range: '',
  //     action: '',
  //     cooldown: '',
  //     description: ''
  //   }
  // },
];
