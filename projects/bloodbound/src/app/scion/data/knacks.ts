import {Knack} from '../scion.models';
import {CALLING_ID} from '../scion.enums';

export const KNACKS: Knack[] = [
  {
    id: null,
    name: 'Aura of Greatness',
    tier: 1,
    description: 'Something about the pre-Visi- tation Scion affects the people around them. They can be radically inspirational, the perfect confidant, or horrifically scary, depending on their origins and demeanor. Choose one Social Skill (Leadership, Empathy, or Persuasion), and the Scion may add Enhancement 2 as a bonus to that type of roll once per session, reflecting their Godly heritage.'
  },
  {
    id: null,
    name: 'Born to be Kings',
    tier: 1,
    description: 'Scions are masters at enforcing their will upon The World, if it means serving their parents dil- igently. The first time each scene that the character would add points to the Momentum pool, they instead add 2.'
  },
  {
    id: null,
    name: 'Scent the Divine',
    tier: 1,
    description: 'Having a touch of divinity, the Scion has an innate sense of anything divine near him. With a sniff or a knowing listen, he can detect another Scion of a particular pantheon.'
  },
  {
    id: null,
    name: 'Somebody’s Watching Me',
    tier: 1,
    description: 'A Scion’s Godly parent has eyes and ears everywhere, and even if they don’t Visit their child, they’re often ready to lend a hand to aid their child in need. During a scene where the Scion would be in danger, their parent sends in reinforcements, usually resulting in either two Mooks or one Professional (see p. 145 for more on Archetypes) to fight on their side. These allies leave at the end of the scene, however.'
  },
  {
    id: null,
    name: 'Innate Toolkit',
    tier: 1,
    description: 'You are always able to work your craft, regardless of whether or not you have the appropriate tools available. When you use your bare hands to build or create something that would otherwise require special equipment, you suffer no penalty or any kind of Injury. For example: If you were to pound your bare fist against a railroad spike like a hammer or plunge your exposed fingers into a heated forge, you would not break bones or suffer more than cosmetic burns.'
  },
  {
    id: null,
    name: 'Perfect Rendition',
    tier: 1,
    description: 'You are a master artist, able to illustrate or recreate an image of a person, place, or object you have seen with photo-perfect clarity, allowing you to flawlessly identify suspects, create detailed maps, or forge signatures. You do this without needing to roll, and can recreate these things in scant instances. If something you observed has been obscured by a supernatural power, make a Clash of Wills.'
  },
  {
    id: null,
    name: 'Reverse Engineer',
    tier: 1,
    description: 'When you take apart an object, you instantly gain an understanding of how to rebuild it, or create new versions.'
  },
  {
    id: null,
    name: 'Flawlessly Platonic Ideal',
    tier: 1,
    description: 'When you work to improve an object, you make it as flawless as possible. When creating an object using this Knack, you may ignore 1 point of Flaws. In combat, you can upgrade light cover to heavy cov- er by making a Knack Skill roll. If materials are available, you may also spend Momentum and use an action to trans- form items that would not normally be protective (stacks of newspaper, empty cardboard boxes, curtains, etc.) into light cover.'
  },
  {
    id: null,
    name: 'The Unlimited Quatermaster',
    tier: 1,
    description: 'You never need to roll to acquire mundane crafting supplies, as you always know where and how to find them. Unless the item is exceedingly rare (or being blocked from access by a rival), you get what you need with little complication — this does not make materials cost less, or arrive any faster should they need to be transported to you. If someone or something is preventing you from acquiring materials, make a Clash of Wills.'
  },
  {
    id: null,
    name: 'We Go All Night',
    tier: 1,
    description: 'When working on a creative project, you can work without ceasing for a number of days equal to your Creator Knack Skill. After this period, you must rest for a day before resuming your work.'
  },
  {
    id: null,
    name: 'Wireless Interface',
    tier: 1,
    description: 'Electronic devices respond you without needing to touch them. They must be powered on and functional, but you can use a number of devices in the same Field as you equal to your Knack Skill with your hands free. If you try to do other things while communing with technology, you must make a mixed action roll.'
  },
  {
    id: null,
    name: 'A Fortress',
    tier: 1,
    description: 'At the start of a combat scene, roll your Knack Skill with 1 Enhancement. Gain the following Stunts which you may spend the resulting successes on, each time you successfully Defend (e.g. an attack targeting you does not hit).\nGet Out of Here (1s): A target you are protecting imme- diately makes the Disengage action.\nSecond Wind (2s): Heal a Bruised Injury you have tak- en, including Injuries sustained by your Armor.\nMy Turn (1s): Make one additional attack action against an opponent that attacked your charge this round.'
  },
  {
    id: null,
    name: 'A Purpose',
    tier: 1,
    description: 'Dedicate yourself to an ideal of your choosing (fight for love and justice, defend the weak, save The World from invasion). When you take action to defend this ideal, gain +1 Enhancement to all applicable rolls and to any Stunts you may have gained from Knacks.'
  },
  {
    id: null,
    name: 'A Sentinel',
    tier: 1,
    description: 'Choose a person or group of trivial targets to be your charge. When you guard your charge, you both gain +1 Defense so long as you stay in the same range band. You also gain +1 Enhancement to rolls to keep track of or defend your charge.'
  },
  {
    id: null,
    name: 'A Talisman',
    tier: 1,
    description: 'Bless an object (usually belonging to someone you wish to protect, but not required) and make a Knack Skill roll. If any successes are achieved, it then grants the bearer 2 Enhancement to rolls made to defend or protect against a particular person, thing, or situation as defined at the time of blessing. If you are making a talisman for your charge, this happens automatically without needing to roll.'
  },
  {
    id: null,
    name: 'A Vigil',
    tier: 1,
    description: 'When you stand guard over a person, place, or thing, you do not need to eat or sleep so long as your vigil persists. This benefit extends so long as the protected target remains within your sight. You may do other things — talk, interact, move around, etc. — but must devote most of your time to keeping your vigil. You may only keep vigil over one thing at a time.'
  },
  {
    id: null,
    name: 'A Warning',
    tier: 1,
    description: 'You sense the presence of danger before it emerges. Spend Momentum and double the successes on any roll to detect ambushes or to discern whether a person means harm. If you are protecting your charge, you do not need to pay the cost.'
  },
  {
    id: null,
    name: 'The Bare Minimum',
    tier: 1,
    description: 'You are always able to safely tend to someone’s wounds, even if you have no sanitary medical tools available. Even if all you have are twigs and dirt, you’ll be able to perform surgery at no increased difficulty and at no risk to your patient.'
  },
  {
    id: null,
    name: 'Combat Medic',
    tier: 1,
    description: 'When you tend to an ally’s wounds in the heat of battle as a reflexive action, once per turn remove any Bruised Injury they may be suffering — including damage sustained to armor — without needing to roll.'
  },
  {
    id: null,
    name: 'Damage Conversion',
    tier: 1,
    description: 'When you administer medical attention to a patient or yourself as an action, convert any Injuries to one lower: Maimed becomes Injured, Injured becomes Bruised, and Bruised Injuries heal completely.'
  },
  {
    id: null,
    name: 'Doctor’s Kit',
    tier: 1,
    description: 'At the start of a combat scene, roll your Knack Skill. Spend the resulting successes on the following Stunts whenever a bandmate or allied character in the same range band as you takes an Injury:\nIce Pack (1s): Remove a Bruised Injury, including those sustained by armor\nSwift Bandaging (2s): Remove an Injured Injury\nEmergency Operation (4s): Remove a Maimed Injury until the end of the scene'
  },
  {
    id: null,
    name: 'Immunization Booster',
    tier: 1,
    description: 'Designate up to your Knack Skill in targets to be under your care. While under your protection, they get +2 Enhancement to all rolls to resist disease and poison, and to recover from Injuries. Storyguide characters you protect in this way are automatically protected — that is, the Storyguide does not need to make rolls when they would be affected by disease or poison.'
  },
  {
    id: null,
    name: 'Surgeon with the Hands of God',
    tier: 1,
    description: 'Halve the time you need to undertake any kind of medical procedure (such as surgery). You never face any increased difficulty to treat a critically ill or injured patient.'
  },
  {
    id: null,
    name: 'With a Glance',
    tier: 1,
    description: 'When you spend time interacting with an ailing target, you diagnose what is wrong with him, as well as any other pertinent medical information. In the event that she is diagnosing a patient suffering from a supernatural disease, this may require a Knack Skill roll, which is opposed by whomever afflicted the victim.'
  },
  {
    id: null,
    name: 'Apex Predator',
    tier: 1,
    description: 'When a target of lower Tier who you have been pursuing attacks you or otherwise attempts to hunt you in return, increase the difficulty of all Stunts they apply against you by 1. If this target is your quarry, increase it by an additional +1.'
  },
  {
    id: null,
    name: 'Eyes in the Blinds',
    tier: 1,
    description: 'Spend Momentum to invest a fraction of your power into a small token (a coin, a figurine, dice, an arrowhead, etc.). Place this token anywhere in a Field you are aware of, and for as long as it remains in place you have the power to observe the goings-on in the Field as if you were present. This lasts for the duration of a day in-game time, or for a session of play, whichever is longer. You do not have to deliver the token yourself, and may send an ally or animal companion to deliver it instead. If the token is destroyed or otherwise removed from the Field, the effect ends. The Difficulty to notice the token is equal to your Hunter Calling dots.'
  },
  {
    id: null,
    name: 'Internal Compass',
    tier: 1,
    description: 'You always know your precise direction — whether that be navigating while on foot or driving a car, or working your way out of a petty God’s labyrinthine prison. You do not ever have to roll to navigate somewhere, or to find your way out of being lost. If you are entrapped in a magical maze, make a Clash of Wills with 2 Enhancement.'
  },
  {
    id: null,
    name: 'Keen-Eyed Predator',
    tier: 1,
    description: 'When you enter a Field, you extend your senses to determine what might await you. Ask one question from the following list for free. You may roll your Knack Skill and spend one success per additional question. The Storyguide must answer these questions honestly:\n• What kinds of hazards (such as terrain) are present?\n• Where is the nearest exit?\n• Where is the safest way in?\n• How many hostile enemies are present?\n• Who (or what) is the biggest threat?'
  },
  {
    id: null,
    name: 'Most Dangerous Prey',
    tier: 1,
    description: 'Choose an enemy to be your quarry. When you pursue your quarry, gain +1 Enhancement to all rolls made against the target (including attack rolls) until the end of the session or until you catch them, which- ever comes first. You gain access to the following Stunts, which may be applied to any attack action made against your quarry:\nStalk (1s): After resolving your attack, spend a success to take an additional Move action.\nSnare (any successes above Defense): You trap the target in place. They may not make Move, Rush, or Disengage actions. To end the effect, the target must make Athletics + Dexterity rolls vs. your Knack Skill until they succeed or until you choose to end it, whichever comes first.'
  },
  {
    id: null,
    name: 'Silence in the Woods',
    tier: 1,
    description: 'When pursuing a target, you make no noise at all, adding +2 Enhancement to avoid detection based on hearing/sound (including things that can perceive vibrations without specifically hearing) and to set up ambushes. This Enhancement applies before you roll. Recording equipment is also unable to pick up your sound.'
  },
  {
    id: null,
    name: 'Worrying Hound',
    tier: 1,
    description: 'While pursuing a target, you do not face any increase in difficulty to track down your target, even if they were to take flight, hide in a body of water, or attempt to disappear into the back alleys of a crowded city. You always have some idea of where your target has gone, and gain +1 Enhancement to keep up with him and to apply any Stunts you may have access to from Hunter Knacks. When you hunt your quarry, add another +1 Enhancement.'
  },
  {
    id: null,
    name: 'Eye for an Eye',
    tier: 1,
    description: 'When you suffer an Injury, spend Momentum and inflict the same Injury on the target that attacked you. The target must have attacked you directly; you cannot reflect attacks that targeted someone else. If the target does not have the ability to take a similar Injury (having your arm bitten by a giant snake, for example), inflict an Injury of similar severity instead, such as a festering, envenomed bite mark. This also applies to Critical Hits inflicted.'
  },
  {
    id: null,
    name: 'Indisputable Analysis',
    tier: 1,
    description: 'You spend a moment observing the scene you wish to analyze and the player makes a Knack Skill roll. You then apply the successes on this roll as Enhancement to all rolls made to analyze and investigate the incident for the rest of the scene. These successes apply before you roll.'
  },
  {
    id: null,
    name: 'Lie Detector',
    tier: 1,
    description: 'Anyone of a Tier lower than you suffers +2 Complication to lie to you. If you are currently casing and they are somehow involved, they simply cannot lie to you at all. The Storyguide should also notify you when a lie has been told, though it does not automatically reveal the truth, and also reveals nebulous truth, such as “he has been convinced this is true” — which should always be a means for characters to pursue the person who manipulated the target in the first place.'
  },
  {
    id: null,
    name: 'Objection!',
    tier: 1,
    description: 'You mark a target, and anyone targeting them with an action gains +1 Enhancement to all rolls. This bonus applies before you roll. Gain access to the following Stunt, which you may apply to any of your attack actions:\nTerrify (any successes above Defense): After applying this Stunt, the target must make a Clash of Wills roll. On a failure, they must flee the fight or suffer +2 Difficulty to attack rolls until the fight is over.'
  },
  {
    id: null,
    name: 'On the Case',
    tier: 1,
    description: 'When you investigate an event or scene, you are casing. While casing, gain +1 Enhancement to rolls to discern motives and search for clues, which applies be- fore you roll. Casing lasts until the end of the session.'
  },
  {
    id: null,
    name: 'Quick Study',
    tier: 1,
    description: 'You sweep your eyes over a crime scene and collects clue almost immediately. Halve the time you would need to perform an investigation. Quarter it if you are also casing.'
  },
  {
    id: null,
    name: 'The Truth Arises',
    tier: 1,
    description: 'When you engage in conversation (or other such interaction) with an alleged perpetrator of a crime, make a Knack Skill roll. On a success, if the target is guilty, he will leak a piece of information that connects him to his crime. Before expending effort on using this Knack, let the Storyguide know, and she should tell you if the target does not have any valuable information to leak — which in itself can be helpful in an investigation.'
  },
  {
    id: null,
    name: 'Captain of Industry',
    tier: 1,
    description: 'When you take charge of a group, roll Knack Skill. For every two successes rolled, reduce the difficulty of all actions taken by the group you command by 1. You can inspire a number of people equal to your Leadership + 1, or can spend a point of Momentum to apply this to a much larger group, giving the action a Scale. The decrease in difficulty does not apply to you, though while you are inspiring others, you gain 2 Enhancement to apply to Social rolls involving leadership, and any Stunts you may have gained from Knacks.'
  },
  {
    id: null,
    name: 'Cloak of Dread',
    tier: 1,
    description: 'You project an aura of menace that terrifies and intimidates anyone who would dare cross you. Spend Momentum and double your successes on any Knack Skill rolls to intimidate targets. Enemies of a lesser Tier and extras simply will not attack you.'
  },
  {
    id: null,
    name: 'Good Listener',
    tier: 1,
    description: 'When you make casual conversation with an SGC, that character will reveal information or an important detail that the Leader is looking for, if they know it. Before using this ability, tell the Storyguide what you’re seeking; if the SGC doesn’t know it, you immediately become aware that the character isn’t relevant to your quest. Even the most recalcitrant of characters eventually opens up and reveals a clue — this power requires no roll.'
  },
  {
    id: null,
    name: 'Grand Entrance',
    tier: 1,
    description: 'When you make a first impression, roll your Knack Skill. On a success, the target remembers you favorably, granting you +1 Enhancement to all Social rolls made towards them until the end of the session.'
  },
  {
    id: null,
    name: 'Lighthouse of Society',
    tier: 1,
    description: 'In a tense, heated, or chaotic situation, you stand as a beacon of certain leadership. Your presence is a bulwark against fear and panic. As long as a crowd has not been frightened directly by magical means, you can get a group of people to act calm and do as you ask (such as evacuating a dangerous area) in an orderly fashion without needing to roll. A supernatural situation requires a Clash of Wills. For example, if an enemy Scion of Eris sows panic into a crowd of mortals so they’ll bolt and trample each other, a roll would be made against her. If Poseidon creates a tidal wave that happens to scare people because natural disasters are terrifying, a roll would not be made against him.'
  },
  {
    id: null,
    name: 'Perfect Poise',
    tier: 1,
    description: 'You cannot be shaken by panic or fear unless it is from another supernatural source — in which case, you gain 2 Enhancement to resist it (such as making Clash of Wills rolls) that applies before you roll. You also gain 1 Enhancement to all Social rolls involving grace, poise, or composure, and to keep a “poker face.” This also applies before you roll.'
  },
  {
    id: null,
    name: 'Beyond Memory',
    tier: 1,
    description: 'You bend the boundaries of cognition, fading from memory after an interaction. Anyone trying to describe you or recall the details of your interaction must make an Occult + Composure roll at Difficulty 2 to remember anything at all, with a 1-point Complication. If they fail to meet this Complication, your identity is safe, though the details of their interaction are not. If this is magically contested, make a Clash of Wills. You may spend Momentum and double successes on any Liminal Skill rolls to avoid passive detection, notice, or stealth otherwise; this does not work against active searching.'
  },
  {
    id: null,
    name: 'Complete Privacy',
    tier: 1,
    description: 'By reinforcing the importance of your personal boundaries, any interactions you take cannot be listened in on, your lips cannot be read, your phone can’t be tapped, etc. by use of mundane means. Add +2 difficulty to attempts to tail you. This protects only against covert attempts to invade your privacy and offers no protection against airport security going through your luggage or rivals breaking into your apartment.'
  },
  {
    id: null,
    name: 'Experienced Traveler',
    tier: 1,
    description: 'When you travel to a new place, no matter how remote, you quickly pick up the social mores and behaviors, along with enough of the language to get by. Add +1 Enhancement to any applicable rolls to blend into the culture, if the Storyguide feels a need to call for a roll at all. This bonus applies before you roll. Additionally, when you attend a social ritual (such as a wedding or a funeral or a birthday party) you always know exactly the right social mores to follow, and how to appropriately dress. Even if you were not invited, you will not read as out of place.'
  },
  {
    id: null,
    name: 'Flatlander',
    tier: 1,
    description: 'When you make a close combat, thrown, or ranged attack, you gain access and 1 Enhancement to apply any of the following Stunts to your action, in addition to the default set:\nGlimpse the Other Side (any successes above Defense): Make a Clash of Wills. If the target fails, they are stunned or disabled (leaving play entirely) until the start of their next turn. They roll initiative as normal and remain where they were standing on their action. An opponent stunned in this way cannot be targeted by any actions until they reappear.\nStutter Time (any successes above Defense): You force the target of your attack to suffer a penalty to their Initiative equal to the successes you spend on this Stunt. This pushes a fast opponent further down the initiative roster. If you are targeting an opponent who has already gone, they take this penalty at the start of the next turn.\nBend Space (any successes above Defense): Reduce the target’s range by 1 for each success spent on this Stunt, to a minimum of close, which lasts until the end of the target’s next action.'
  },
  {
    id: null,
    name: 'Neither the Minute nor the Hour',
    tier: 1,
    description: 'You make an intimidating prediction about the details of your target’s inevitable death (which does not have to be true) and make an opposed Knack Skill roll. If successful, the target suffers a +1 Difficulty to all actions for the rest of the scene.'
  },
  {
    id: null,
    name: 'Unerring Delivery',
    tier: 1,
    description: 'Send a message via another person — a stranger you choose on the street, a spirit or ghost of your pantheon, etc. — to someone in an instant, which can be done even if you are not present in The World, or somewhere else where a simple text or email might not reach.'
  },
  {
    id: null,
    name: 'Unobtrusive Visitor',
    tier: 1,
    description: 'When you would observe or infiltrate a location where you do not belong, spend a Momentum and blur the line between what is expected and unexpected. You take on the aspect of someone unassum- ing and invisible: a janitor, gardener, housekeeper, etc. So long as you collect information or remain an observer and do not take hostile action, anyone in the same Field as you overlooks your presence. This lasts until you take violent action, or until you leave the Field, whichever comes first.'
  },
  {
    id: null,
    name: 'Fluid Appeal',
    tier: 1,
    description: 'When interacting with someone, gain knowledge of whatever floats their boat. At any subsequent interaction, you can shift your features to be more appealing, adding +2 Enhancement to any persuasive social action including but not limited to seduction. This bonus applies before the roll is made. Note that this does not conceal your identity in any way.'
  },
  {
    id: null,
    name: 'I am a Fire',
    tier: 1,
    description: 'You stoke the affection one person has towards another — including yourself — which impels them towards a relationship. If it is between two Storyguide characters, work with the Storyguide to determine how their suddenly passionate relationship takes shape. If the target is one of your bandmates, this Knack does not work unless you obtain permission from the character’s player. If the target is yourself, you gain +1 Enhancement to all Social rolls involving your partner of choice until the end of the session.'
  },
  {
    id: null,
    name: 'Lover’s Intuition',
    tier: 1,
    description: 'When touching another character, which may be as brief as a handshake, you gain an understanding of your target’s romantic life. Ask one question from the following list for free. You may roll your Knack Skill and spend one success per additional question.\n• Who or what does the character love?\n• Who is the character romantically involved with?\n• Who is the character close to?\n• Who would the character like to be romantically involved with?\nThis may be used on your bandmates with consent from the player.'
  },
  {
    id: null,
    name: 'On Your Side',
    tier: 1,
    description: 'When you make a teamwork action with a person with whom you have a devoted, intimate, or romantic relationship, add your Lover dots in Enhancement to spend on Stunts including any you may have gained from Knacks.'
  },
  {
    id: null,
    name: 'Not a Fighter',
    tier: 1,
    description: 'When you are engaged in a fight, as long as you do not make attacks, enemies will not target you di- rectly with their attacks. Additionally, gain +1 Enhancement to disengage and withdrawal rolls. You must also have a partner or Followers present for this effect to apply.'
  },
  {
    id: null,
    name: 'Perfect Partner',
    tier: 1,
    description: 'You know how to work perfectly in sync with someone, down to the timed beats of their hearts. Double the usual benefit you would provide from any teamwork rolls.'
  },
  {
    id: null,
    name: 'Soothing Presence',
    tier: 1,
    description: 'When you enter an initial social encounter, reduce Attitude by 1. For any other interaction in which you attempt to get someone else to relax, calm down, or be welcoming, you have 1 Enhancement to all applicable rolls and to apply to any Stunts you may have gained from Knacks.'
  },
  {
    id: null,
    name: 'Blockade of Reason',
    tier: 1,
    description: 'You readily deflate the arguments of hucksters and con men with a sharp application of reason, or blunt denial (usually calling out the person for what they are trying to do). Targets of lower Tier cannot trick, coerce, swindle, or con you, and any supernatural attempts to do so trigger a Clash of Wills. You add 2 Enhancement to the Clash of Wills roll.'
  },
  {
    id: null,
    name: 'Master of The World',
    tier: 1,
    description: 'While inside a Field, you may define up to three points of Enhancements or Complications (or a combination of each) that are readily apparent to your perceptions (which may be enhanced by other abilities) but not obvious to other observers. They must conform to the Features of the Field, however — it makes sense for a shotgun to be behind the bar, but not a rocket launcher. The hardwood floors of a burning build- ing could be expected to be weak, but the flames can’t be cold. Only three total Enhancements or Complications can be applied to a Field at a time, regardless of how many Scions possess this ability.'
  },
  {
    id: null,
    name: 'Palace of Memory',
    tier: 1,
    description: 'When you recall past events that you have experienced or studied, you are able to recall the details flawlessly, never missing out on any clues or dropping the ball on any details you might remember. This allows the player to bypass the need to roll to remember salient details or facts, and also to declare a narrative advantage she may have remembered without needing to invoke her Path. If you missed a Procedural Clue in a prior scene, you may attempt to rediscover it.'
  },
  {
    id: null,
    name: 'Presence of Magic',
    tier: 1,
    description: 'You always know when you are near an object or place of true magical or sacred power. How this manifests is up to you. Ask the Storyguide if an object is magical or sacred, and she must tell you honestly “yes” or “no.” This bypasses the need to make any kind of Occult roll to identify a place or object of magical or sacred power.'
  },
  {
    id: null,
    name: 'Office Hours',
    tier: 1,
    description: 'When someone approaches you with a problem that you can solve, they gain +1 Enhancement to resolve it themselves if you work them through a solution. If you can’t solve it, you gain the same bonus to all rolls to solve it on your own. These bonuses apply before rolls are made. Spend Momentum to impel a Storyguide Character to come to you with a problem in need of solving.'
  },
  {
    id: null,
    name: 'Omniglot Translation',
    tier: 1,
    description: 'When you converse in or read a foreign language, your communication is flawless, without a trace of an accent. You can turn out translations in your native language in a matter of minutes without needing to roll. If you are translating mystical runes or the handwriting of Gods, you still do so swiftly, but must make a Knack Skill roll.'
  },
  {
    id: null,
    name: 'Speed Reading',
    tier: 1,
    description: 'When you read materials for your research, you do so at lightning speed, devouring thick tomes in a matter of minutes and flipping through electronic documents in the blink of an eye. Halve the time you need to do any kind of academic research. Once a scene you may establish that you’ve read up on a subject and gain 1 Enhancement to the next applicable roll. This bonus applies before the roll.'
  },
  {
    id: null,
    name: 'Blather and Skite',
    tier: 1,
    description: 'When you spout nonsense at your target, they must spend a moment trying to figure out what the heck you just said — buying you or someone else more time to accomplish any kind of underhanded task: sneaking into a place, slipping past a posted sentry, lying your way through security, and so on. This works automatically on any character of same or lower Tier, but requires a Knack Skill roll to work on someone of higher Tier. For each success rolled, you buy five minutes of in-game time or one turn of combat (whichever is more immediately applicable) before enemies realize you’ve infiltrated and go on high alert. If you use this on one of your bandmates, you only succeed with the consent of the other character’s player.'
  },
  {
    id: null,
    name: 'In Sheep’s Clothing',
    tier: 1,
    description: 'When you disguise yourself, you do without needing to roll. You have the option to change your hair, skin, and eye color, apparent gender, and height within a few inches, but cannot assume the exact appearance of someone else. The disguise cannot be seen through, though your mannerisms and turn of phrase may give you away. At Storyguide discretion, Knack Skill rolls may be required to blend in.'
  },
  {
    id: null,
    name: 'Light Fingered',
    tier: 1,
    description: 'When you steal an object or pickpocket someone, you do so without needing to roll, so long as the object is something you can conceal in your hands. If you use this ability to lift something from a member of your band, you must do so with the consent of that character’s player. You cannot steal an item that is currently in use. Stealing a weapon from an enemy would first require the Disarm or Seize stunt.'
  },
  {
    id: null,
    name: 'Rumor Miller',
    tier: 1,
    description: 'Your lies catch on like wildfire, and you need only make the smallest post on social media to get a wild rumor circulating. Make a Knack Skill roll — any successes delivers the rumor about the target to those who should hear it — his boss, his husband, his best friends, etc.'
  },
  {
    id: null,
    name: 'Smoke and Mirrors',
    tier: 1,
    description: 'Once per scene, when you would be Taken Out, you instead spend Momentum, negate the damage that would have taken you out and move one range band away from your attacker — but leave behind a brief afterimage of your outline, which crumbles into dust seconds later.'
  },
  {
    id: null,
    name: 'Takes One to Know One',
    tier: 1,
    description: 'When you are the target of a scam or a lie, you recognize that a deception is taking place. You do not know what the truth is, but you instinctively understand that you are in the company of liars and cheaters. Whether or not you call out the cheat on his dishonest actions is up to you.'
  },
  {
    id: null,
    name: 'Wasn’t Me',
    tier: 1,
    description: 'When you do something with legal or social consequences, you delay the consequence by transferring blame to someone else of the same or lower Tier. This delay lasts until the end of the session by default, but may be delayed further by making a Knack Skill roll, and spending 1 success per scene of delay. To push blame onto a member of your band, you must do so with the consent of that character’s player. Once the delay ends, anyone of higher Tier than you who had been duped by this Knack realizes they’ve been tricked, and will likely seek revenge.'
  },
  {
    id: null,
    name: 'The Biggest Threat',
    tier: 1,
    description: 'When you make a show of force or intimidate your enemy, make a Knack Skill roll. On a success, the target must focus its efforts on dealing with you first, suffering +2 Difficulty to attack anyone else.'
  },
  {
    id: null,
    name: 'Close the Gap',
    tier: 1,
    description: 'The first time you make a combat movement roll, make a Knack Skill roll instead. Spend successes on the following Stunts for the rest of the fight:\nCharge! (1s): You make the Rush action without needing to make an opposed roll. This is negation is limited by the rules for applying Knack abilities — i.e. you may not apply it to anyone two Tiers higher than you.\nInescapable (1s): Opponents of a lower Tier than you who are engaged with you in combat may not make the Disengage action. You must spend a success on this Stunt each time a different opponent would try to escape you, but only need to apply it once per target.\nSure-footed (1s): Apply this Stunt to a combat movement action; Difficult terrain does not apply to this movement.'
  },
  {
    id: null,
    name: 'Death by Teacup',
    tier: 1,
    description: 'When you use an improvised weapon, it becomes as deadly as anything designed for the job. It takes on the profile of any existing weapon of a similar size or shape: A teacup becomes brass knuckles or a punch dagger; a shard of glass becomes a knife; a thrown shoe becomes a throwing hatchet, etc. It must appropriately fit something of a similar size and shape, as described in the examples listed. This benefit lasts until you no longer hold the object, or until it breaks, or until you are no longer using the object with any Warrior Skill — whichever comes first. In the case of thrown objects, the benefit extends until impact. A hurled shoe strikes with the force of a tomahawk and then becomes ordinary footwear when it hits the ground. This is compatible with Master of Weapons, though still adheres to the set limitations.'
  },
  {
    id: null,
    name: 'Enhanced Impact',
    tier: 1,
    description: 'Whenever you successfully deal Injury with your Knack Skill, you also knock the target back one range band. This does not do any extra damage, but can put someone in a tight spot.'
  },
  {
    id: null,
    name: 'Master of Weapons',
    tier: 1,
    description: 'At the beginning of the session, choose one of your weapons to be your favored weapon. When you use your favored weapon, add a number of additional Tag points to it up to your Warrior Calling. These do not have to fit the weapon’s existing profile: A sword can be made to strike at Far range, for example. Spend Momentum to switch the benefit to another weapon. Negative cost Tags cannot be purchased with this Knack.'
  },
  {
    id: null,
    name: 'Trick Shot',
    tier: 1,
    description: 'When showing off with a ranged weapon, convert any additional Difficulty imposed because of your showmanship into Enhancement instead which may be spent on any Ranged Attack Stunt besides Inflict Damage. This applies before your roll.'
  },
  {
    id: null,
    name: 'Well Tempered',
    tier: 1,
    description: 'When you wear no armor, you are considered to have the Armored Tag. This benefit stacks with the increased difficulty of the Inflict Damage Stunt granted by any other armor you wear when you fight lesser foes (minor characters, or anyone a Tier lower than you).'
  },
  {
    id: null,
    name: 'Miracle',
    tier: 1,
    description: 'Once per session, a Saint may perform a Twist of Fate that’s not tied to their Path. This can be anything from healing the sick masses to bringing a newly-dead person back to life from being mostly-dead. This may border on the supernatural, though it’s rarely anything explicit; the dead man’s heart starts beating again, while the sufferers of plague feel their coughs recede over the course of a scene.'
  },
  {
    id: null,
    name: 'Virtuous Might',
    tier: 1,
    description: 'Once per session, a Saint may cancel out Scale (p. 65) equal to their position on the Virtue track (maximum 3, minimum 1) for the scene on a single target. This can be anything from stopping a speeding truck from killing them (Scale 2 to 0) to slapping a God like they would any other mortal (cancelling the God’s defensive Scale). Despite the name, this applies to any expression of Scale, including social and mental.'
  },
  {
    id: null,
    name: 'Do You Feel Lucky?',
    tier: 1,
    description: 'When you threaten someone with a harmless object, you gain a +1 Enhancement on your attempts to intimidate him. If the object is one that is realistically dangerous, like an unloaded gun or a dud explosive, the Enhancement is +2 instead. If your attempt to intimidate fails for any reason, you cannot bluff the same target again in the same way.'
  },
  {
    id: null,
    name: 'Dress for Success',
    tier: 1,
    description: 'When you disguise yourself as a type of person by wearing appropriate clothes, others will not question your authority in that role. Whether your disguise is a legitimate uniform or something you bought at a Halloween supply store, it’s equally convincing while you wear it, but cheap or minimal costumes require you to spend a point of Momentum to be plausible.'
  },
  {
    id: null,
    name: 'Kindness of Strangers',
    tier: 1,
    description: 'When trying to convince someone to provide for your basic needs, like paying for food or giving you somewhere to live, reduce the Difficulty of the action by 1. The Storyguide decides what form this largesse takes, depending on the situation and circumstances of your request.'
  },
  {
    id: null,
    name: 'Mortal Mask',
    tier: 1,
    description: 'You can change from fox to human and back without effort. You only have one human form at this point, and revert to your natural animal shape if you are Taken Out, sleeping, or rendered unconscious for any reason. Unlike shapes you adopt through other Knacks, this one does not reveal any sign of your true nature and does not have a tail.'
  },
  {
    id: null,
    name: 'Not a Fighter',
    tier: 1,
    description: 'As the Lover Knack of the same name (see p. 110). When you are engaged in a fight, as long as you do not make attacks, enemies will not target you directly with their attacks. Additionally, gain +1 Enhancement to disengage and withdrawal rolls. You must also have a partner or Followers present for this effect to apply.'
  },
  {
    id: null,
    name: 'Set the Stage',
    tier: 1,
    description: 'When you use props to prepare a space and occupy it, you can convince others that it has the function you claim it does. Putting a microscope on a table makes it a laboratory. A bookshelf turns it into a lawyer’s or professor’s office. The pretense only lasts while you are in the place you’ve created: Anyone entering it when you are not there quickly recognizes the truth.'
  },
  {
    id: null,
    name: 'Tongue of the Fox',
    tier: 1,
    description: 'You can speak to any canine, and they will answer you in their language. Most animals can reason in the manner of a young child, they just don’t care for much beyond sniffing things and eating unguarded hens.'
  },
  {
    id: null,
    name: 'Under the Table',
    tier: 1,
    description: 'When you spend a scene indulging in a vice with someone, you steal some of their vitality. For the next scene, they have +1 Difficulty on tasks involving one Arena of your choice and you gain +1 Enhancement in the same Arena. You can only use this Knack on another player’s character with that player’s consent.'
  },
  {
    id: null,
    name: 'Baser Instincts',
    tier: 1,
    description: 'As the Lover Knack, Lover’s Intuition (p. 110), except that you learn what the target craves or covets instead of loves. When touching another character, which may be as brief as a handshake, you gain an understanding of your target’s desires. Ask one question from the following list for free. You may roll your Knack Skill and spend one success per additional question.\n• Who or what does the character covet or crave?\n• Who fuels this addiction, or who can satiate it?\n• Who else close to the character feels the need or effects of this addiction?\nThis may be used on your bandmates with consent from the player.'
  },
  {
    id: null,
    name: 'Blind Luck',
    tier: 1,
    description: 'As the Sage Knack, Master of The World (p. 111), except that you may only use it when you are hindered by a Complication (not including Hooves). While inside a Field, you may define up to three points of Enhancements or Complications (or a combination of each) that are readily apparent to your perceptions (which may be enhanced by other abilities) but not obvious to other observers. They must conform to the Features of the Field, however — it makes sense for a shotgun to be behind the bar, but not a rocket launcher. The hardwood floors of a burning building could be expected to be weak, but the flames can’t be cold. Only three total Enhancements or Complications can be applied to a Field at a time, regardless of how many Scions possess this ability.'
  },
  {
    id: null,
    name: 'Cup of Wisdom',
    tier: 1,
    description: 'You drink heavily to obtain knowledge. When you try to solve a complex problem, take the Drunk Condition for the rest of the scene to gain a +1 Enhancement on your rolls to solve it.'
  },
  {
    id: null,
    name: 'Fruit of Passion',
    tier: 1,
    description: 'Choose a form of art as your driving passion. For the rest of the session, add an extra Success on rolls involving the creation of that art. After producing a work that you deem satisfactory, you can switch to another art form.'
  },
  {
    id: null,
    name: 'Give Me Another',
    tier: 1,
    description: 'It’s easy to convince others to keep doing something that they enjoy. Roll Subterfuge + Manipulation to make a target repeat their current willing activity for another iteration. Spend a point of Momentum if doing so would put the target at risk of harm.'
  },
  {
    id: null,
    name: 'Party Animal',
    tier: 1,
    description: 'While you pursue a passion, you can stave off the need for food, drink, or sleep for a number of days equal to your Resilience without suffering any negative effects. At the end of that period, or when you have satisfied your need, you fall into an undisturbable slumber for an equal amount of time.'
  },
  {
    id: null,
    name: 'Revels',
    tier: 1,
    description: 'While you take part in any performance, celebration, or friendly gathering, the Scale of social actions for everyone involved is reduced by 1. You must remain present and participate actively for this ability to work.'
  },
  {
    id: null,
    name: 'Wild at Heart',
    tier: 1,
    description: 'When you intimidate someone with your ferocity, spend Momentum to double the number of successes on the Knack Skill roll.'
  },
  {
    id: null,
    name: 'Bloody-Minded',
    tier: 1,
    description: 'You gain an additional Injured slot. If your Stamina is 5, you also gain an additional Maimed slot. This bonus is cumulative with the Bruised slots from having Stamina 3+.'
  },
  {
    id: null,
    name: 'Feral Grace',
    tier: 1,
    description: 'You gain +1 Enhancement to all Athletics rolls that do not involve using tools or weapons.'
  },
  {
    id: null,
    name: 'Howl',
    tier: 1,
    description: 'When you display your bestial side to intimidate another person, you gain a +1 Enhancement.'
  },
  {
    id: null,
    name: 'Keen-Eyed Predator',
    tier: 1,
    description: 'As the Hunter Knack of the same name (p. 108).'
  },
  {
    id: null,
    name: 'Predator’s Bond',
    tier: 1,
    description: 'As the Kitsune Knack, Tongue of the Fox (p. 164), except that you can only use it on predatory animals (which may be of any genus or species).'
  },
  {
    id: null,
    name: 'Scent of Blood',
    tier: 1,
    description: 'You automatically know when you are in the presence of someone with a Bruised or greater injury and the level of her injury. You have +1 Enhancement to follow the trail of that person until she either washes away the scent or covers it with something stronger.'
  },
  {
    id: null,
    name: 'Unleash the Beast',
    tier: 1,
    description: 'When you fight unarmed, spend Momentum to add the Lethal tag to your attacks for the remainder of combat.'
  },
  {
    id: null,
    name: 'Wary Beasts',
    tier: 1,
    description: 'Unless compelled by supernatural means, ordinary animals will not approach or harm you. An observer can make an Occult skill roll with Difficulty 2 to recognize your true nature if he sees animals react.'
  },
  {
    id: null,
    name: 'Favored Weapon',
    tier: 1,
    description: 'As the Warrior Knack Master of Weapons, except that you may only add one tag. At the beginning of the session, choose one of your weapons to be your favored weapon. When you use your favored weapon, add a single additional tag point. This does not have to fit the weapon’s existing profile: A sword can be made to strike at far range, for example (but good luck running over to pick it up). Spend Momentum to switch the benefit to another weapon. Negative cost tags cannot be purchased with this Knack.'
  },
  {
    id: null,
    name: 'Helping Hands Make Idle Work',
    tier: 1,
    description: 'When you look for help among people who support your cause, you can always find someone willing to offer it. Their aid is humble and limited, but can include providing shelter, sharing supplies, gathering information, or providing a distraction for your actions. Where applicable, treat this help as a +1 Enhancement.'
  },
  {
    id: null,
    name: 'I Love It When a Plan Comes Together',
    tier: 1,
    description: 'When you formulate a plan for a complex action that furthers your cause and involves your allies, roll the appropriate Knack skill. Your number of successes on that roll become a pool of Enhancement bonuses for anyone taking part in the plan to draw from when playing their part in it.'
  },
  {
    id: null,
    name: 'Inspiring Act',
    tier: 1,
    description: 'When you demonstrate how to perform a task by doing it yourself, you can give an ally a +1 Enhancement to do the same action.'
  },
  {
    id: null,
    name: 'One of the Crowd',
    tier: 1,
    description: 'When you hide in a group of people, anyone trying to locate you must roll at +1 Difficulty to identify you through any means (direct observation, record searches, divinations, etc.).'
  },
  {
    id: null,
    name: 'Rallying Presence',
    tier: 1,
    description: 'When you lead a group in combat, spend Momentum to give every member of the group an additional Bruised damage slot for the duration of the battle. The bonus does not apply to you, and goes away if you are Taken Out or otherwise defeated.'
  },
  {
    id: null,
    name: 'Still Kicking',
    tier: 1,
    description: 'Once per scene, when you would normally be Taken Out by damage, you may spend Momentum to ignore all effects of the attack that did so, including suffering an Injury Condition.'
  },
  {
    id: null,
    name: 'Strength in Numbers',
    tier: 1,
    description: 'When using Teamwork (see p.65), you increase the maximum number of successes you can add from 3 to 5 and can have multiple people rolling to assist you. To get the benefit of more than 3 successes, you must have a number of helpers at least equal to the number of successes rolled.'
  },
  {
    id: null,
    name: 'Breed Versatility',
    tier: 1,
    description: 'Cú Sith can choose any one of the following Knacks to represent their specific breed: any one Hunter Knack or Imperfect Disguise (white fur and red eyes; as the Drawback, but adds Enhancement 2 to rolls involving intimidation).'
  },
  {
    id: null,
    name: 'Call the Pack',
    tier: 1,
    description: 'Once per session, you can summon the spirits of your packmates to you (if they are not physically present) and direct them against one enemy for a single attack. Treat them as a weapon with the Lethal, Loud, and Ranged tags, using your Close Combat + Presence for the attack roll.'
  },
  {
    id: null,
    name: 'Terrifying Howl',
    tier: 1,
    description: 'Howling for more than one action has supernatural effects. On the second action you use to howl, the sound can be heard for a mile around you. On the third action, treat it as the Immobilize Antagonist Quality.'
  },
  {
    id: null,
    name: 'Shield Wall',
    tier: 1,
    description: 'Against opponents in front of you and within your line of sight, your allies in the same range band as you gain +1 Hard Armor.'
  },
  {
    id: null,
    name: 'Berserk',
    tier: 1,
    description: 'When you take an Injury Condition, you fly into a rage. For the duration of combat, you gain +1 Enhancement to all attacks and ignore any and all Injury Complications, but you cannot distinguish friend from foe.'
  },
  {
    id: null,
    name: 'Laws of the Land',
    tier: 1,
    description: 'When you enter a new location, you instinctively know the appropriate cultural values and what actions would violate them. If applicable, you gain a +1 Enhancement on rolls related to those values.'
  },
  {
    id: null,
    name: 'Go Around',
    tier: 1,
    description: 'You can declare a street intersection, a natural formation, or a structure up to the size of a house as your domain for one scene. Beings below your Tier will avoid it instinctively, and you have +1 Defense against all others while you remain within its bounds.'
  },
  {
    id: null,
    name: 'My Home is a Fortress',
    tier: 1,
    description: 'If you choose to make a house your home, it will constantly repair itself from any damage it sustains and strengthen its walls beyond normal. Treat as if you possessed the Structural Integrity (Creator) Knack, but only applicable to that structure. You can only have one home at a time.'
  },
  {
    id: null,
    name: '',
    tier: 1,
    description: ''
  },
  {
    id: null,
    name: '',
    tier: 1,
    description: ''
  },
  {
    id: null,
    name: '',
    tier: 1,
    description: ''
  },
  {
    id: null,
    name: '',
    tier: 1,
    description: ''
  },
];
