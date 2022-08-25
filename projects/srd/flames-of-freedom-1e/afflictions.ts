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
      description: 'When night comes and the shadows mock me with their hidden evil and my mind spirals at the dreadful possibilities within, I f ind other spirits to quiet my mind. The bitter liquid chases away the dark, keeping the fear at bay, as well as my senses.',
      effect: 'Whenever you are Intoxicated, you automatically succeed at Resolve Tests. However, you must drink to the point of Intoxication at least once a week or else be unable to restore your Peril Condition Track until you do.'
    }
  },
  {
    id: AfflictionId.AS_I_AM_TOLD,
    name: 'As I Am Told',
    labels: {
      description: 'My independence found me at the gates of hell. Now I cannot trust myself, but I find comfort in the steady guiding hand of another. I will follow their lead, even if it sits poorly with me. I need stability in ways I cannot describe.',
      effect: 'You gain an Assist Die whenever you are told what to do by another in character. However, you cannot take advantage of Coins to fulfill your own self-interests.'
    }
  },
  {
    id: AfflictionId.CABIN_FEVER,
    name: 'Cabin Fever',
    labels: {
      description: 'Once I was held, rendered helpless at the whims of others or Nature herself. Now my skin crawls at the thought of containment. I will do anything to escape such a situation, refusing to let anyone or anything stand in the way of my freedom.',
      effect: 'Whenever you are restrained in any way (whether by mundane or magical means), you must flip the result to succeed at Skill Tests to escape. However, whenever you are trapped or confined in a tight space, you immediately suffer from Fear.'
    }
  },
  {
    id: AfflictionId.CONSTANT_VIGILANCE,
    name: 'Constant Vigilance',
    labels: {
      description: 'The world is full of unseen threats that are waiting for me in the dark. Yet I am ready—always—for what is coming. I am watchful of every shadow, fingers ready to find my weapon. Even if it means I cannot find rest, I will not be caught unawares again.',
      effect: 'Whenever you are Surprised in Perfect Light, spend a Coin to ignore it. However, whenever you fight in Fleeting Shadows or Total Darkness, the Historian can spend a Coin to gain Surprise against you.'
    }
  },
  {
    id: AfflictionId.CURSE_OF_THE_GRAVE,
    name: 'Curse Of The Grave',
    labels: {
      description: 'To become strong enough to endure the dark, I must embrace it. With every moment I feed my hunger, the more capable I become. This hunger comes with a price, as all evil boons do. It is a price I am willing to pay again and again.',
      effect: 'To protect yourself, you’ve become something else. Select one threat and its related hunger: Ghoul (human bones), Lycanthrope (human skin) or Vampyre (human blood). Whenever you consume one of these hungers (upon the Historian’s approval), you move three steps up the Damage & Peril Condition Tracks positively while gaining 9 Conflict. Should you gain 10 or more Conflict during a game session, or when both you and the Historian feel it’s appropriate for the story, you and your belongings shapeshift into one of these threats for twenty-four hours. Refer to its Threat Profile during this time, forgetting who your allies and enemies are. You awaken Unarmed & Incapacitated!, with no memory of what happened.'
    }
  },
  {
    id: AfflictionId.DARK_THOUGHTS,
    name: 'Dark Thoughts',
    labels: {
      description: 'My mind has become a nesting ground for the darkness, breeding new, terrible thoughts with each passing day. I believe this is to teach me, to make me immune to the terrors I have witnessed. But it comes with the price of exhaustion and a struggle to endure.',
      effect: 'Whenever you are subjected to the effects of Stress, Fear or Terror, you gain a +10% Base Chance to use Skill Tests against its source until it goes away or is Slain!. However, the Historian may spend a Coin to force you to suffer Despair when under their effects.'
    }
  },
  {
    id: AfflictionId.DEBAUCHED_ESCAPISM,
    name: 'Debauched Escapism',
    labels: {
      description: 'There was nothing I found to release the demons within my accursed mind quite like the drugs I acquired and constantly imbibed, hoping to salve the injury to my soul. They soothe as nothing else can, and that peace is one I must obtain frequently.',
      effect: 'Select any one drug (from earlier in the article); you are now addicted to it. While under its effects, foes must roll two face ‘6s’ on Chaos Dice to Injure you. However, you must use that drug at least once a week, or else be unable to restore your Damage Condition Track until you do.'
    }
  },
  {
    id: AfflictionId.DELICIOUS_COMFORTS,
    name: 'Delicious Comforts',
    labels: {
      description: 'I am uncertain when it began, but now I have come to understand my body craves the release of food. Nothing else soothes my nerves when darkness draws near, but the cravings can become intense, so much so that they drive me to distraction.',
      effect: 'Whenever you share your food with another person, you gain an Assist Die to Fellowship-based Skill Tests to interact with them. However, whenever you don’t have at least seven days of food on-hand, you must flip the result to fail all Perception-based Skill Tests.'
    }
  },
  {
    id: AfflictionId.DIRE_OBEDIENCE,
    name: 'Dire Obedience',
    labels: {
      description: 'I have learned through pain and blood that the only person I can trust is myself. Others will listen, must listen, and follow my commands. The darkness in me quiets when my plan is exactly executed. Never again will I obey another fool.',
      effect: 'You may flip the results to succeed at Skill Tests to command others. However, when others don’t follow your orders or your Skill Test fails to command them, you must succeed at a Resolve Test or suffer from Stress.'
    }
  },
  {
    id: AfflictionId.DISTRACTED_MIND,
    name: 'Distracted Mind',
    labels: {
      description: 'Ever since I felt the darkness within, my mind cannot stay in one place. The danger lurks and the devil is in the details, so I notice it all. Every movement, every gesture, every possible opening to attack... so much so I lose sight of who is right before me.',
      effect: 'Whenever you are engaged one-on-one with another (whether it be an ally or a foe), you gain a +20% Base Chance to Skill Tests to interact with them. However, whenever in groups of two or more, you suffer a -20% Base Chance to Skill Tests to interact with them.'
    }
  },
  {
    id: AfflictionId.FAUSTIAN_BARGAIN,
    name: 'Faustian Bargain',
    labels: {
      description: 'Whilst at f irst I resisted, eventually it all began to make a sort of dark sense. What it offered I could not refuse, considering what good I could do with such a gift. And so I consented to the shadow’s wishes, gaining power in exchange for favors I cannot speak of aloud.',
      effect: 'Once a week, attempt a Secret Test using Resolve to plead to a dark power for an ability, favor or power. If successful, they will temporarily grant it to you for twenty-four hours, but you gain 9 Conflict. However, there may be an additional cost associated with it, which you and the Historian will determine together, in keeping with the story. If you fail this Resolve Test, the dark power will call upon you to fulfill its own wishes for twenty-four hours. If you do not follow its commands, you are unable to restore your Peril Condition Track until you do so.'
    }
  },
  {
    id: AfflictionId.FISH_STORIES,
    name: 'Fish Stories',
    labels: {
      description: 'They can never truly trap you if they cannot discover the truth. An intricate web of lies protects me and mine from those who would destroy us. Yet the survival habit has become the norm and speaking earnestly often escapes me.',
      effect: 'You may flip the results to succeed at Bargain and Guile Tests. However, you cannot succeed at Charm or Leadership Tests unless confessing a painful truth you previously lied about.'
    }
  },
  {
    id: AfflictionId.FOOLISH_ENDEAVORS,
    name: 'Foolish Endeavors',
    labels: {
      description: 'Whether blessed by a divine being or my own good fortune, my body has learned to endure whatever comes. I no longer know fear, only the unshaken drive to stop the darkness. At times, I am awarded for this bravery, at others... well, the darkness must win at least once in a while.',
      effect: 'Whenever you rush into a situation without proper planning, you gain +10% Base Chance to succeed at Skill Tests during that situation. However, for every failed Skill Test, you suffer from Stress.'
    }
  },
  {
    id: AfflictionId.FRETFUL_THOUGHTS,
    name: 'Fretful Thoughts',
    labels: {
      description: 'We are weakest when we are alone, likely prey to the dark hunger of the world. I have found solace in my companions, a relief I did not know was possible. I dare not be without them, as to be alone is to be the next to die.',
      effect: 'Select one player character at the start of every game session.Whenever you can see and hear them clearly, you ignore the effects of Stress. However, whenever you cannot see or hear them clearly, you treat all failed Resolve Tests to withstand Stress as if it were Fear instead.'
    }
  },
  {
    id: AfflictionId.FROM_FAR_AWAY,
    name: 'From Far Away',
    labels: {
      description: 'I dare not speak of what has happened, but I can speak of what will never happen again. I devote myself to its avoidance wholeheartedly, never daring to venture toward that darkest truth. Yet I know it sits, waiting for my return...',
      effect: 'Select any one thing: a threat, object or situation. Whenever confronted by the thing, you must flip the results to succeed at Agility-based Skill Tests to protect yourself against it (such as fleeing from it). However, whenever faced with it, you must succeed at a Resolve Test or else suffer from Stress, Fear or Terror (the Historian will determine which).'
    }
  },
  {
    id: AfflictionId.HAUNTED_DREAMS,
    name: 'Haunted Dreams',
    labels: {
      description: 'When others rest, I find myself lost in memories and ghoulish nightmares, combating evil even in my slumber. The f ight is never done. Every night I dread sleep, for in it await horrors untold. Still, these morbid visions ensure I am always awake when darkness dares to strike.',
      effect: 'You are never Helpless when Sleeping, and may spend a Coin to avoid being Surprised in this state. However, whenever you suffer Stress, Fear or Terror, you suffer an additional 1D10+1 Peril and 3 Conflict.'
    }
  },
  {
    id: AfflictionId.ITCHY_FINGERS,
    name: 'Itchy Fingers',
    labels: {
      description: 'There are times the only thing I can control is the world around me, and altering that, taking from that, invokes a feeling of safety. If I can prove to myself that I can provide for myself, I will survive... even when I find the impulse overbearing.',
      effect: 'You may flip the results to succeed at Skill Tests to sneak about and steal. However, whenever you steal, you must succeed at a Resolve Test, or continue stealing until you are caught or fail.'
    }
  },
  {
    id: AfflictionId.LOST_IN_THE_FOG,
    name: 'Lost In The Fog',
    labels: {
      description: 'There was a time I could recall it all and my memories would destroy me. Now my mind rejects them, hiding them somewhere I cannot find, keeping me safe from haunted visions. I trust my mind to know what is best, yet I fear when I should encounter the thing next and not recognize it.',
      effect: 'Whenever the Historian rolls a 1D10 Conflict Die at the end of the game session, roll an additional 1D10 Conflict Die yourself and select the more favorable result. However, when in situations you’ve faced before, you cannot add Skill Ranks to Resolve to withstand Stress, Fear and Terror.'
    }
  },
  {
    id: AfflictionId.MEDICINAL_HOARDER,
    name: 'Medicinal Hoarder',
    labels: {
      description: 'I was once gravely injured by a riotous spirit, but now I am prepared. My arsenal of healing remedies keeps me and mine safe and must always be at full stock, lest we fall prey to another blight.',
      effect: 'Whenever you suffer an Injury, spend a Coin to stave off its effects for twenty-four hours. However, whenever you don’t have at least three tinctures on hand, you are unable to restore your Damage Condition Track positively until you do.'
    }
  },
  {
    id: AfflictionId.MY_BODY_KEEPS_SCORE,
    name: 'My Body Keeps Score',
    labels: {
      description: 'While my mind has recovered from the terrible things that have happened, my body reminds me constantly of what I have endured. There is always pain, but in it is the comfort of fortitude and strength. Through pain, I have learned endurance.',
      effect: 'Whenever you suffer Damage, you may ignore it once per game session. However, you always remain Hurt.'
    }
  },
  {
    id: AfflictionId.NUMBING_IT_OUT,
    name: 'Numbing It Out',
    labels: {
      description: 'The fear and agony became overwhelming, so I silenced it, inviting cold indifference into my heart where terror once resided. Others feel the distance in my presence, but ultimately, the apathy is more comfort than they could offer.',
      effect: 'You may automatically succeed at any Resolve Test by spending a Coin. However, you cannot gain Assist Dice for Fellowship-based Skill Tests.'
    }
  },
  {
    id: AfflictionId.ON_THE_OFFENSE,
    name: 'On The Offence',
    labels: {
      description: 'The element of surprise guarantees advantage and I seize the opportunity whenever it presents itself. Danger lurks everywhere and in everyone. I will be the f irst to strike so that I will never be a victim of evil again.',
      effect: 'When using Words As Weapons in combat, you may flip the results to succeed at Skill Tests. However, whenever you are the victim of the negative effects of Words As Weapons, you suffer from Stress.'
    }
  },
  {
    id: AfflictionId.PERSNICKETY_PLANNER,
    name: 'Persnickety Planner',
    labels: {
      description: 'To avoid calamity, I must prepare, and in the preparation is the salve for what ails. Methodical and knowledgeable plans provide a foundation on which I can stand rather than succumb to the horror within. Yet when the course alters, as it inevitably does, I fear I am unable to adapt.',
      effect: 'Whenever you spend a significant amount of time planning, you may flip the results to succeed in all Perception-based Skill Tests when enacting the plan. However, if you suffer Damage during this time, you are unable to succeed at Perception-based Skill Tests whatsoever.'
    }
  },
  {
    id: AfflictionId.POSSESSED,
    name: 'Possessed',
    labels: {
      description: 'I felt... different. As if someone was controlling me. I could see and hear everything, and tried as I might to scream, no words came out. My body was not my own. I now live with the grief and guilt of what these hands have wrought, all urged onward by some grim puppeteer who taunts me from the shadows.',
      effect: 'Should you gain 10 or more Conflict during a game session, or when both you and the Historian feel it’s appropriate for the story, you must make a Secret Test using Resolve or else become temporarily Possessed. While Possessed, temporarily increase all your Primary Attributes by +9%. You can attempt to escape being Possessed every twenty-four hours. After breaking free, you are Incapacitated! and Unconscious for one hour. However, the Affliction remains until exorcised. Unlike other Afflictions, you should keep Possessed secret from other players. Being Possessed can mean different things, as Abyssal and Supernatural threats have their own agendas to enact. Work with the Historian to understand how this may impact your character. While temporarily Possessed, it will never be of benefit to your character’s friends.'
    }
  },
  {
    id: AfflictionId.SAVIOR_COMPLEX,
    name: 'Savior Complex',
    labels: {
      description: 'There is no greater remedy for the fear of inadequacy than helping those who need it, and having them see me for what I am: a savior. Their adoration quiets the terror within me, reminding me I am capable and not just another victim.',
      effect: 'Every time you succeed at a Skill Test to convince others you are the answer to someone else’s problems, take a Coin from the other pool and put it into your respective pool. If you fail, remove a Coin from your respective pool and place it into the other pool.'
    }
  },
  {
    id: AfflictionId.TAINTED_SOUL,
    name: 'Tainted Soul',
    labels: {
      description: 'I have gazed into the abyss, and have seen the spirits staring back. They often speak to me in whispers and dreams; they promise influence and power. What they ask in exchange for a morsel of their power is nothing compared to what I can gain in return.',
      effect: 'For every Flaw Rank you have, add +1% Base Chance to Skill Tests when engaging in acts of aggression and subterfuge. Each time you take advantage of this benefit, you gain an equal amount of Conflict. For every Belief Rank you have, subtract -1% Base Chance to Skill Tests when engaging in acts of kindness and honesty.'
    }
  },
  {
    id: AfflictionId.THE_TRUTH_IS_OUT_THERE,
    name: 'The Truth Is Out There',
    labels: {
      description: 'Truth comes to some in dreams, and to others through the gentle word of friends. Yet my truth lies in the gloom. It is in the darkness I must pierce with the torch of knowledge. I will come to know the truth at all costs—it must never escape me.',
      effect: 'Whenever you are investigating a conspiracy or mystery where you feel compelled to know the truth, you may spend a Coin to interpret a clue. However, you cannot veer from this course and cannot restore your Peril Condition Track until the mystery is solved.'
    }
  },
  {
    id: AfflictionId.THRILL_SEEKER,
    name: 'Thrill-Seeker',
    labels: {
      description: 'The darkness is dangerous, and that danger brings a rush unlike any other. I feed that hunger inside me however I can: deadly journeys, desperate moments of intimacy... whatever the world offers. No longer can I live the life unchallenged, even when I long for tranquility.',
      effect: 'Whenever you face challenges that are wholly new to you, you may flip the results to succeed at any one Skill Test during this time. However, when in situations you’ve faced before, the Historian may spend a Coin to force you to flip the results to fail any one Skill Test of their choosing.'
    }
  },
  {
    id: AfflictionId.TO_BE_TASTED,
    name: 'To Be Tasted',
    labels: {
      description: 'There is a certain pleasure in being in control of how evil consumes you. The power of control in every offering, as they feed upon my fears, gives strength where once there was a weakness.',
      effect: 'You form a deep bond with an Abyssal or Supernatural threat, and you are able to mentally communicate with one another across vast distances. Once a week, you allow them to feed on you for six hours, causing you to suffer 2D10+2 Damage. Unlike Damage during combat, you do not suffer standard Injuries from the feeding. Roll Chaos Dice as you normally would, but if any land on face ‘6,’ you gain 1 permanent Flaw Rank.\nAfter you undergo feeding, the Historian will temporarily give you access to one of the threat’s Traits for a week. This benefit cannot be gained more than once a week.\nShould you gain 10 or more Conflict during a game session, or during a period of time both you and the Historian feel appropriate for the story, the evil visits you for twenty-four hours, bleeding you nearly dry. You suffer 3D6+3 Damage (as above). Unlike Damage during combat, you do not suffer standard Injuries from the feeding. Roll Chaos Dice as you normally would, but if any land on face ‘6,’ you are Slain!.'
    }
  },
  {
    id: AfflictionId.VISIONS_OF_DOOM,
    name: 'Visions Of Doom',
    labels: {
      description: 'When plans and research continually failed, all I could turn to was the Devil. I had to bring its stain into myself and beg for sight beyond seeing. So it came, blessing and cursing my mind with truths and promises of a world on fire.',
      effect: 'Any time you Sleep, you may spend a Coin to gain a terrible insight as to what will pass in the next week for your character. However, you suffer from Terror at this stark realization.'
    }
  }
];
