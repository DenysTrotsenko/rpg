import {AfflictionId} from './enums';
import {Affliction} from './models';

export const AFFLICTIONS: Affliction[] = [
  {
    id: AfflictionId.ALWAYS_THE_JOB,
    name: 'Always The Job',
    labels: {
      description: 'There is never time to dwell on what lies in the dark if I remain consistently occupied. My work provides a haven from twisted thoughts and deep fears. Yet in those rare moments of quiet, it all comes unraveled.',
      effect: 'Whenever you have committed to achieving a goal, you add +30% Base Chance to succeed at Toughness and Resolve Tests while doing it. However, you cannot succeed at Toughness and Resolve Tests when you are not working toward some end goal.'
    }
  },
  {
    id: AfflictionId.AMBER_TEMPTATION,
    name: 'Amber Temptation',
    labels: {
      description: '',
      effect: 'Whenever you are Intoxicated, you automatically succeed at Resolve Tests. However, you must drink to the point of Intoxication at least once a week or else be unable to restore your Peril Condition Track until you do.'
    }
  },
  {
    id: AfflictionId.AS_I_AM_TOLD,
    name: 'As I Am Told',
    labels: {
      description: '',
      effect: 'You gain an Assist Die whenever you are told what to do by another in character. However, you cannot take advantage of Coins to fulfill your own self-interests.'
    }
  },
  {
    id: AfflictionId.CABIN_FEVER,
    name: 'Cabin Fever',
    labels: {
      description: '',
      effect: 'Whenever you are restrained in any way (whether by mundane or magical means), you must flip the result to succeed at Skill Tests to escape. However, whenever you are trapped or confined in a tight space, you immediately suffer from Fear.'
    }
  },
  {
    id: AfflictionId.CONSTANT_VIGILANCE,
    name: 'Constant Vigilance',
    labels: {
      description: '',
      effect: 'Whenever you are Surprised in Perfect Light, spend a Coin to ignore it. However, whenever you fight in Fleeting Shadows or Total Darkness, the Historian can spend a Coin to gain Surprise against you.'
    }
  },
  {
    id: AfflictionId.CURSE_OF_THE_GRAVE,
    name: 'Curse Of The Grave',
    labels: {
      description: '',
      effect: 'To protect yourself, you’ve become something else. Select one threat and its related hunger: Ghoul (human bones), Lycanthrope (human skin) or Vampyre (human blood). Whenever you consume one of these hungers (upon the Historian’s approval), you move three steps up the Damage & Peril Condition Tracks positively while gaining 9 Conflict. Should you gain 10 or more Conflict during a game session, or when both you and the Historian feel it’s appropriate for the story, you and your belongings shapeshift into one of these threats for twenty-four hours. Refer to its Threat Profile during this time, forgetting who your allies and enemies are. You awaken Unarmed & Incapacitated!, with no memory of what happened.'
    }
  },
  {
    id: AfflictionId.DARK_THOUGHTS,
    name: 'Dark Thoughts',
    labels: {
      description: '',
      effect: 'Whenever you are subjected to the effects of Stress, Fear or Terror, you gain a +10% Base Chance to use Skill Tests against its source until it goes away or is Slain!. However, the Historian may spend a Coin to force you to suffer Despair when under their effects.'
    }
  },
  {
    id: AfflictionId.DEBAUCHED_ESCAPISM,
    name: 'Debauched Escapism',
    labels: {
      description: '',
      effect: 'Select any one drug (from earlier in the article); you are now addicted to it. While under its effects, foes must roll two face ‘6s’ on Chaos Dice to Injure you. However, you must use that drug at least once a week, or else be unable to restore your Damage Condition Track until you do.'
    }
  },
  {
    id: AfflictionId.DELICIOUS_COMFORTS,
    name: 'Delicious Comforts',
    labels: {
      description: '',
      effect: 'Whenever you share your food with another person, you gain an Assist Die to Fellowship-based Skill Tests to interact with them. However, whenever you don’t have at least seven days of food on-hand, you must flip the result to fail all Perception-based Skill Tests.'
    }
  },
  {
    id: AfflictionId.DIRE_OBEDIENCE,
    name: 'Dire Obedience',
    labels: {
      description: '',
      effect: 'You may flip the results to succeed at Skill Tests to command others. However, when others don’t follow your orders or your Skill Test fails to command them, you must succeed at a Resolve Test or suffer from Stress.'
    }
  },
  {
    id: AfflictionId.DISTRACTED_MIND,
    name: 'Distracted Mind',
    labels: {
      description: '',
      effect: 'Whenever you are engaged one-on-one with another (whether it be an ally or a foe), you gain a +20% Base Chance to Skill Tests to interact with them. However, whenever in groups of two or more, you suffer a -20% Base Chance to Skill Tests to interact with them.'
    }
  },
  {
    id: AfflictionId.FAUSTIAN_BARGAIN,
    name: 'Faustian Bargain',
    labels: {
      description: '',
      effect: 'Once a week, attempt a Secret Test using Resolve to plead to a dark power for an ability, favor or power. If successful, they will temporarily grant it to you for twenty-four hours, but you gain 9 Conflict. However, there may be an additional cost associated with it, which you and the Historian will determine together, in keeping with the story. If you fail this Resolve Test, the dark power will call upon you to fulfill its own wishes for twenty-four hours. If you do not follow its commands, you are unable to restore your Peril Condition Track until you do so.'
    }
  },
  {
    id: AfflictionId.FISH_STORIES,
    name: 'Fish Stories',
    labels: {
      description: '',
      effect: 'You may flip the results to succeed at Bargain and Guile Tests. However, you cannot succeed at Charm or Leadership Tests unless confessing a painful truth you previously lied about.'
    }
  },
  {
    id: AfflictionId.FOOLISH_ENDEAVORS,
    name: 'Foolish Endeavors',
    labels: {
      description: '',
      effect: 'Whenever you rush into a situation without proper planning, you gain +10% Base Chance to succeed at Skill Tests during that situation. However, for every failed Skill Test, you suffer from Stress.'
    }
  },
  {
    id: AfflictionId.FRETFUL_THOUGHTS,
    name: 'Fretful Thoughts',
    labels: {
      description: '',
      effect: 'Select one player character at the start of every game session.Whenever you can see and hear them clearly, you ignore the effects of Stress. However, whenever you cannot see or hear them clearly, you treat all failed Resolve Tests to withstand Stress as if it were Fear instead.'
    }
  },
  {
    id: AfflictionId.FROM_FAR_AWAY,
    name: 'From Far Away',
    labels: {
      description: '',
      effect: 'Select any one thing: a threat, object or situation. Whenever confronted by the thing, you must flip the results to succeed at Agility-based Skill Tests to protect yourself against it (such as fleeing from it). However, whenever faced with it, you must succeed at a Resolve Test or else suffer from Stress, Fear or Terror (the Historian will determine which).'
    }
  },
  {
    id: AfflictionId.HAUNTED_DREAMS,
    name: 'Haunted Dreams',
    labels: {
      description: '',
      effect: 'You are never Helpless when Sleeping, and may spend a Coin to avoid being Surprised in this state. However, whenever you suffer Stress, Fear or Terror, you suffer an additional 1D10+1 Peril and 3 Conflict.'
    }
  },
  {
    id: AfflictionId.ITCHY_FINGERS,
    name: 'Itchy Fingers',
    labels: {
      description: '',
      effect: 'You may flip the results to succeed at Skill Tests to sneak about and steal. However, whenever you steal, you must succeed at a Resolve Test, or continue stealing until you are caught or fail.'
    }
  },
  {
    id: AfflictionId.LOST_IN_THE_FOG,
    name: 'Lost In The Fog',
    labels: {
      description: '',
      effect: 'Whenever the Historian rolls a 1D10 Conflict Die at the end of the game session, roll an additional 1D10 Conflict Die yourself and select the more favorable result. However, when in situations you’ve faced before, you cannot add Skill Ranks to Resolve to withstand Stress, Fear and Terror.'
    }
  },
  {
    id: AfflictionId.MEDICINAL_HOARDER,
    name: 'Medicinal Hoarder',
    labels: {
      description: '',
      effect: 'Whenever you suffer an Injury, spend a Coin to stave off its effects for twenty-four hours. However, whenever you don’t have at least three tinctures on hand, you are unable to restore your Damage Condition Track positively until you do.'
    }
  },
  {
    id: AfflictionId.MY_BODY_KEEPS_SCORE,
    name: 'My Body Keeps Score',
    labels: {
      description: '',
      effect: 'Whenever you suffer Damage, you may ignore it once per game session. However, you always remain Hurt.'
    }
  },
  {
    id: AfflictionId.NUMBING_IT_OUT,
    name: 'Numbing It Out',
    labels: {
      description: '',
      effect: 'You may automatically succeed at any Resolve Test by spending a Coin. However, you cannot gain Assist Dice for Fellowship-based Skill Tests.'
    }
  },
  {
    id: AfflictionId.ON_THE_OFFENSE,
    name: 'On The Offence',
    labels: {
      description: '',
      effect: 'When using Words As Weapons in combat, you may flip the results to succeed at Skill Tests. However, whenever you are the victim of the negative effects of Words As Weapons, you suffer from Stress.'
    }
  },
  {
    id: AfflictionId.PERSNICKETY_PLANNER,
    name: 'Persnickety Planner',
    labels: {
      description: '',
      effect: 'Whenever you spend a significant amount of time planning, you may flip the results to succeed in all Perception-based Skill Tests when enacting the plan. However, if you suffer Damage during this time, you are unable to succeed at Perception-based Skill Tests whatsoever.'
    }
  },
  {
    id: AfflictionId.POSSESSED,
    name: 'Possessed',
    labels: {
      description: '',
      effect: 'Should you gain 10 or more Conflict during a game session, or when both you and the Historian feel it’s appropriate for the story, you must make a Secret Test using Resolve or else become temporarily Possessed. While Possessed, temporarily increase all your Primary Attributes by +9%. You can attempt to escape being Possessed every twenty-four hours. After breaking free, you are Incapacitated! and Unconscious for one hour. However, the Affliction remains until exorcised. Unlike other Afflictions, you should keep Possessed secret from other players. Being Possessed can mean different things, as Abyssal and Supernatural threats have their own agendas to enact. Work with the Historian to understand how this may impact your character. While temporarily Possessed, it will never be of benefit to your character’s friends.'
    }
  },
  {
    id: AfflictionId.SAVIOR_COMPLEX,
    name: 'Savior Complex',
    labels: {
      description: '',
      effect: 'Every time you succeed at a Skill Test to convince others you are the answer to someone else’s problems, take a Coin from the other pool and put it into your respective pool. If you fail, remove a Coin from your respective pool and place it into the other pool.'
    }
  },
  {
    id: AfflictionId.TAINTED_SOUL,
    name: 'Tainted Soul',
    labels: {
      description: '',
      effect: 'For every Flaw Rank you have, add +1% Base Chance to Skill Tests when engaging in acts of aggression and subterfuge. Each time you take advantage of this benefit, you gain an equal amount of Conflict. For every Belief Rank you have, subtract -1% Base Chance to Skill Tests when engaging in acts of kindness and honesty.'
    }
  },
  {
    id: AfflictionId.THE_TRUTH_IS_OUT_THERE,
    name: 'The Truth Is Out There',
    labels: {
      description: '',
      effect: 'Whenever you are investigating a conspiracy or mystery where you feel compelled to know the truth, you may spend a Coin to interpret a clue. However, you cannot veer from this course and cannot restore your Peril Condition Track until the mystery is solved.'
    }
  },
  {
    id: AfflictionId.THRILL_SEEKER,
    name: 'Thrill-Seeker',
    labels: {
      description: '',
      effect: 'Whenever you face challenges that are wholly new to you, you may flip the results to succeed at any one Skill Test during this time. However, when in situations you’ve faced before, the Historian may spend a Coin to force you to flip the results to fail any one Skill Test of their choosing.'
    }
  },
  {
    id: AfflictionId.TO_BE_TASTED,
    name: 'To Be Tasted',
    labels: {
      description: '',
      effect: 'You form a deep bond with an Abyssal or Supernatural threat, and you are able to mentally communicate with one another across vast distances. Once a week, you allow them to feed on you for six hours, causing you to suffer 2D10+2 Damage. Unlike Damage during combat, you do not suffer standard Injuries from the feeding. Roll Chaos Dice as you normally would, but if any land on face ‘6,’ you gain 1 permanent Flaw Rank.\nAfter you undergo feeding, the Historian will temporarily give you access to one of the threat’s Traits for a week. This benefit cannot be gained more than once a week.\nShould you gain 10 or more Conflict during a game session, or during a period of time both you and the Historian feel appropriate for the story, the evil visits you for twenty-four hours, bleeding you nearly dry. You suffer 3D6+3 Damage (as above). Unlike Damage during combat, you do not suffer standard Injuries from the feeding. Roll Chaos Dice as you normally would, but if any land on face ‘6,’ you are Slain!.'
    }
  },
  {
    id: AfflictionId.VISIONS_OF_DOOM,
    name: 'Visions Of Doom',
    labels: {
      description: '',
      effect: 'Any time you Sleep, you may spend a Coin to gain a terrible insight as to what will pass in the next week for your character. However, you suffer from Terror at this stark realization.'
    }
  }
];
