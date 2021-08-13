import {Quality} from '../scion.models';
import {QUALITY_TYPE_ID} from '../scion.enums';

export const QUALITIES: Quality[] = [
  {
    id: null,
    name: 'GROUP TACTICS',
    type: QUALITY_TYPE_ID.ATTACK,
    tier: 1,
    description: 'The Antagonist has been trained to operate in a group. This Quality is typically assigned to several Antagonists at once. When doing so, select one Antagonist as the leader. If that Antagonist is a Mook, promote them to Professional. If the leader is taken out, remove this Quality from all other Antagonists under their command. Antagonists with Group Tactics receive +1 Defense, +1 Health, and a +1 Enhancement to any combat action when two or more Antagonists with Group Tactics attack a single target during the same turn.'
  },
  {
    id: null,
    name: 'MARTIAL ARTIST',
    type: QUALITY_TYPE_ID.ATTACK,
    tier: 1,
    description: 'Martial Artists train their bodies to maximize their own potential. As such, they are capable of physical feats in excess of the average fighter. Rare Martial Artists may develop supernatural powers that defy rational explanation, but this is beyond the scope of this particular Quality. Mortal Martial Artists receive a +1 Enhancement to Barehanded Combat. Select a specific weapon, such as a tonfa or a sword. This weapon counts as barehanded for the purposes of this Enhancement. They also receive +1 Defense and +1 Health.'
  },
  {
    id: null,
    name: 'NATURAL WEAPON',
    type: QUALITY_TYPE_ID.ATTACK,
    tier: 1,
    description: 'Some beings are possessed of natural weaponry, such as claws, teeth, armored tails, horns, and so on. Such weapons cannot be disarmed without a (likely very gruesome) stunt.'
  },
  {
    id: null,
    name: 'SNIPER',
    type: QUALITY_TYPE_ID.ATTACK,
    tier: 1,
    description: 'Snipers are trained to engage at long ranges — sometimes, even beyond what would ordinarily be considered the effective range of their weapon. However, as a consequence of keeping their enemies at arms’ length, they are somewhat less accustomed to physical punishment, and have −1 Health as a result. All ranged weapons wielded by Snipers consider their range to be one greater than it actually is.'
  },
  {
    id: null,
    name: 'SUPER SOLDIER',
    type: QUALITY_TYPE_ID.ATTACK,
    tier: 1,
    description: 'Many cultures have oral legends of men and women who were, by their very nature, superior combatants in every way. Sometimes, this was the result of training or lineage; other times, divine guidance or blessing. In any case, a Super Soldier is an extremely dangerous foe, and likely to be a master of whatever techniques she has devoted herself to. She receives a +1 Enhancement to any Combat Ability, +1 Armor (choose Hard or Soft), and +2 Health.'
  },
  {
    id: null,
    name: 'TWITCHY',
    type: QUALITY_TYPE_ID.ATTACK,
    tier: 1,
    description: 'The Antagonist’s Initiative Pool receives a +2 Enhancement.'
  },
  {
    id: null,
    name: 'HEAVILY ARMORED',
    type: QUALITY_TYPE_ID.DEFENSE,
    tier: 1,
    description: 'The Antagonist has +3 Armor. Split this between Hard and Soft Armor.'
  },
  {
    id: null,
    name: 'INVULNERABILITY',
    type: QUALITY_TYPE_ID.DEFENSE,
    tier: 1,
    description: 'Choose a source of damage, such as toxins, fire, electricity, and so on. The Antagonist does not take Health damage from this source. Storyguides take note: “Player characters” is not a valid category for this Quality.'
  },
  {
    id: null,
    name: 'SHROUD',
    type: QUALITY_TYPE_ID.DEFENSE,
    tier: 1,
    description: 'The Antagonist is able to partially conceal her presence, along with any characters within close range. All attacks made against shrouded characters suffer a +2 Complication to the Inflict Damage Stunt.'
  },
  {
    id: null,
    name: 'STAND TALL',
    type: QUALITY_TYPE_ID.DEFENSE,
    tier: 1,
    description: 'Attempts to employ the Knock Down Stunt against this Antagonist suffer a +2 Complication.'
  },
  {
    id: null,
    name: 'CROSS-TRAINING',
    type: QUALITY_TYPE_ID.UTILITY,
    tier: 1,
    description: 'Any mixed actions the Antagonist undertakes use the higher of the two Pools, not the lower.'
  },
  {
    id: null,
    name: 'SUBTERRANEAN MOVEMENT',
    type: QUALITY_TYPE_ID.UTILITY,
    tier: 1,
    description: 'The Antagonist may elect to move through the ground rather than over it. Digging into the ground or emerging from under the ground is a basic action. While underground, she cannot be attacked; however, she cannot attack others without emerging. If she emerges beneath another character, treat this as an attack at close range and halve the Antagonist’s Defense until her next turn. If the Antagonist wishes, she may Disengage by digging into the ground and tunneling away, and cannot be followed unless her pursuer also has some means of doing so.'
  },
  {
    id: null,
    name: 'SURE FOOTED',
    type: QUALITY_TYPE_ID.UTILITY,
    tier: 1,
    description: 'Difficult Terrain doesn’t affect the movement of this Antagonist.'
  },
  {
    id: null,
    name: 'TOXIC',
    type: QUALITY_TYPE_ID.UTILITY,
    tier: 1,
    description: 'The Antagonist is poisonous or venomous. Choose a vector for the toxin (touch, consumption, fluid transfer, aerosol, etc.), and select the Poisoned Condition (p. 125). Aerosol toxins require the target to be within close range of the point of origin. All others require either a successful attack roll or a roll to trick the target into exposure.'
  },
  {
    id: null,
    name: 'A CAGE OF WORDS',
    type: QUALITY_TYPE_ID.SOCIAL,
    tier: 1,
    description: 'The Antagonist is a skilled dissembler, hiding behind veritable volumes of verbiage when pressed on a subject. Any attempts to Influence the character though reason or debate are at +2 difficulty. Additionally, if a character fails such a roll, they gain the Befuddled Condition for a scene, as they try to work out what was just said.'
  },
  {
    id: null,
    name: 'CENTER OF GRAVITY',
    type: QUALITY_TYPE_ID.SOCIAL,
    tier: 1,
    description: 'The Antagonist is the center of the social scene, and effectively controls the discourse. Attempts to shift attitude above the Antagonist’s own Attitude towards that character suffer a +2 Complication.'
  },
  {
    id: null,
    name: 'INSTITUTIONAL DISBELIEF',
    type: QUALITY_TYPE_ID.SOCIAL,
    tier: 1,
    description: 'Mortals in The World are generally aware of the supernatural in a vague sense, but this does not mean that most are willing to engage with it. Indeed, even apart from disbelief, believers themselves may be best inclined to leave well enough alone. Maybe they’re just a part of society nobody wants to deal with, like the Mob of whatever-culture. Whatever the reason, mortal authorities and organizations are largely unwilling to deal with the Antagonist. Any attempts to evoke a mun- dane Path to gain resources or leads for investigating or dealing with them automatically fail. Players may attempt to lie, mislead, or otherwise conceal the nature of their request, but must make an appropriate roll to do so, with a difficulty of 2. Should they succeed, they must still keep things quiet — retaliation may occur if the truth comes out. Explicitly supernatural or Pantheon Paths are unaffected by this Quality.'
  },
  {
    id: null,
    name: 'SLOTHFUL RESILIENCE',
    type: QUALITY_TYPE_ID.SOCIAL,
    tier: 1,
    description: 'The Antagonist is either unwilling or unable to consider action. Consider the Scale to be two higher than it normally could be for the purposes of Influencing this Antagonist, to a maximum of five.'
  },
  {
    id: null,
    name: 'INCORPOREALITY',
    type: QUALITY_TYPE_ID.OCCULT,
    tier: 1,
    description: 'Antagonists with this Quality cannot be damaged by ordinary means, and may pass through objects, walls, or other obstructions. Antagonists with this Quality must take the Vulnerability Quality — this source of damage is capable of affecting the Antagonist.'
  },
  {
    id: null,
    name: 'HELPLESS FASCINATION',
    type: QUALITY_TYPE_ID.SANDBAGS,
    tier: 1,
    description: 'The Antagonist is fascinated by a certain object, condition, or type of individual, and when confronted with one must roll her Desperation Pool to avoid becoming entranced. Entranced Antagonists suffer the effects of the Dread Gaze Flair (p. 149) until the triggering stimulus is removed.'
  },
  {
    id: null,
    name: 'HONOR BOUND',
    type: QUALITY_TYPE_ID.SANDBAGS,
    tier: 1,
    description: 'The Antagonist is bound by oaths freely given; once she’s made a promise, she must uphold it. She may try to weasel out on a technicality — this is not only acceptable, it is encouraged — but the letter of the oath cannot be contravened.'
  },
  {
    id: null,
    name: 'IMPERFECT DISGUISE',
    type: QUALITY_TYPE_ID.SANDBAGS,
    tier: 1,
    description: 'The Antagonist may be able to hide most of her supernatural qualities, but something still shows. This results in a distinguishing feature that may give them away, be it behavioral or physical — huldrefolk have a tail, for example. Spotting the feature and correctly identifying it requires a Difficulty 2 Occult roll.'
  },
  {
    id: null,
    name: 'KEYSTONE',
    type: QUALITY_TYPE_ID.SANDBAGS,
    tier: 1,
    description: 'The Antagonist’s life force is bound to an object, person, or element. Should the Antagonist’s Keystone be removed, damaged, or otherwise negated, apply the following effects: −2 Defense, −2 Health. The Health track cannot be reduced below 1; all other Traits cannot be reduced below zero. If the Antagonist has already taken damage, remove empty Health boxes first. If the Antagonist has no Health boxes remaining afterwards, she is Taken Out.'
  },
  {
    id: null,
    name: 'MIASMIC PRESENCE',
    type: QUALITY_TYPE_ID.SANDBAGS,
    tier: 1,
    description: 'The Antagonist’s very presence contaminates The World in some way, clearly showing the work of the unusual and mythic. A ghost’s presence may cause mirrors to tarnish or shadows to lengthen unnaturally, while a vampire might cause holy symbols to burst into flame. Select the condition and effect when this Quality is assigned — any character, if successful on an Occult roll (difficulty 2), may immediately recognize the presence of the specific kind of creature she is dealing with.'
  },
  {
    id: null,
    name: 'UNNATURAL HUNGER/BEHAVIOR',
    type: QUALITY_TYPE_ID.SANDBAGS,
    tier: 1,
    description: 'The Antagonist is compelled to do something or consume something outside the bounds of what is considered normal. Wendigo consume human flesh, for example (a popular choice when it comes to mythological monsters, but far from the only one). To resist this impulse (for example, to attempt to hide their true nature), the Antagonist must succeed on a difficulty 2 Desperation Pool roll. Failure does not necessarily mean immediate indulgence (this is left to the Storyguide’s discretion), but some behavioral quirk shines through. An Occult roll (difficulty 2) is necessary to discern the Antagonist’s nature if the Antagonist attempts to restrain themselves; if they indulge, the roll is difficulty 1 instead.\nIf the Antagonist has one or more Flairs on Cooldown, indulgence of the Antagonist’s Unnatural Hunger counts as satisfying one Cooldown condition — Storyguide’s pick.'
  },
  {
    id: null,
    name: 'VULNERABILITY',
    type: QUALITY_TYPE_ID.SANDBAGS,
    tier: 1,
    description: 'Choose a source of damage — for example, fire, salt, silver, etc. When the Antagonist takes any damage from this source, mark a second Health box as well.\nIf attack is a critical strike, mark four Health boxes instead of two.'
  },
  // {
  //   id: null,
  //   name: '',
  //   type: QUALITY_TYPE_ID.,
  //   tier: 1,
  //   description: ''
  // },
  // {
  //   id: null,
  //   name: '',
  //   type: QUALITY_TYPE_ID.,
  //   tier: 1,
  //   description: ''
  // },
  // {
  //   id: null,
  //   name: '',
  //   type: QUALITY_TYPE_ID.,
  //   tier: 1,
  //   description: ''
  // },
  // {
  //   id: null,
  //   name: '',
  //   type: QUALITY_TYPE_ID.,
  //   tier: 1,
  //   description: ''
  // },
];
