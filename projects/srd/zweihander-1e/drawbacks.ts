/* tslint:disable:max-line-length */
import {Trait} from './models';
import {DrawbackId} from './enums';

export const DRAWBACKS: Trait[] = [
  {
    id: DrawbackId.BAD_TICKER,
    name: 'Bad Ticker',
    labels: {
      description: 'You suffer from a debilitating sickness, which makes your blood stir slowly. It is slowly eating away at your precious humanity bit-by-bit, and inevitably will lead to your doom.',
      effect: 'Whenever you fail to Resist against Stress, Fear or Terror, you gain 3 additional Corruption.'
    }
  },
  {
    id: DrawbackId.BLACK_CATARACT,
    name: 'Black Cataract',
    labels: {
      description: 'Your eye has grown over with glaucoma or suffered major trauma in a fight or accident. As a result, you have difficulty making out distances and depth. It’s not to say that you cannot see, but you face extreme hardship, unable to discern between friend or foe at times.',
      effect: 'Whenever you miss with Attack Actions using a ranged weapon, you must re-roll the result with the same Difficulty Rating. If it is a success, you strike a random ally who is Engaged with your target.'
    }
  },
  {
    id: DrawbackId.BLEEDER,
    name: 'Bleeder',
    labels: {
      description: 'Your blood doesn’t easily clot. This means you bruise like a peach when hurt, and spurt like a stuck pig whenever you are injured.',
      effect: 'Whenever you are treated with the Heal Skill, a caregiver suffers an additional -20 Base Chance, unless they expend an additional bandage during treatment.'
    }
  },
  {
    id: DrawbackId.BRANDED,
    name: 'Branded',
    labels: {
      description: 'You are one of the disenfranchised of society; the bonded, a serf, slave or thrall. You are looked upon poorly by most of society, treated with some manner of contempt or apprehension, if acknowledged at all. Most of those Branded take great pains to hide the shame of their past. Perhaps you were even the bastard born progeny of an unknown father! It is up to you to decide why you were branded.',
      effect: 'Whenever you interact with those who know you’re Branded and hold you in contempt due to it, you cannot succeed at Fellowship-based Skill Tests to interact with them.'
    }
  },
  {
    id: DrawbackId.CHOLERIC_TEMPERAMENT,
    name: 'Choleric Temperament',
    labels: {
      description: 'You have a tendency of one-upmanship, are rather prickly and frankly, bossy. When things don’t go your way in a fight, you grow irritated, which only further pushes you towards embracing your Chaos Alignment.',
      effect: 'Whenever you roll Chaos Dice to determine if you Injure a foe and fail to do so, move one step down the Peril Condition Track negatively while suffering 1 Corruption.'
    }
  },
  {
    id: DrawbackId.CROP_EAR,
    name: 'Crop Ear',
    labels: {
      description: 'An unfortunate accident, or a result of birth or disease has left you partially deaf. You are barely able to hear and must rely on your other senses to process the world around you. Speech is difficult and you’re often misunderstood or even ridiculed as you converse with others.',
      effect: 'You must flip the results to fail all Skill Tests that rely on hearing.'
    }
  },
  {
    id: DrawbackId.CURSED,
    name: 'Cursed',
    labels: {
      description: 'A terrible twist of fate or dark Magick has cast a hex over you. Your curse may have originated from an act of cruelty served upon the innocent, born from mortal sin; a dreadful stigma that has afflicted your family or a terrible Magick that’s been cast upon you. Curses of this magnitude oftentimes plague individuals until their death. Only a major sacrifice can potentially lift the curse and the cost is likely greater than you can levy. It may be that your Order or Chaos Alignment is somehow tied to the curse.',
      effect: 'Whenever you intend to sacrifice a Fortune Point, roll a 1D6 Chaos Die. If the result is a face ‘6’, you must use two Fortune Points instead of one.'
    }
  },
  {
    id: DrawbackId.DEAL_WITH_THE_DEVIL,
    name: 'Deal With The Devil',
    labels: {
      description: 'Your family is cursed, having struck a Faustian bargain with a dark power. Written in blood, this contract guaranteed that your ancestors had to give up a part of their soul. Now, this deal falls to you and your offspring.',
      effect: 'You begin gameplay with one permanent Chaos Rank.'
    }
  },
  {
    id: DrawbackId.DEBTRIDDEN,
    name: 'Debt-Ridden',
    labels: {
      description: 'You have spent and spent and spent, borrowing far too much money without the possibility of return to your creditors. You may have even been committed to a debtor’s prison. This carries a social stigma, leaving a black stain upon your shield of reputation and conscience. As such, you find it exceedingly difficult – if not impossible – to come to any sort of middle ground with others given your history.',
      effect: 'You must flip the results to fail all Skill Tests that rely on your ability to barter, bargain or strike monetary deals in your favor.'
    }
  },
  {
    id: DrawbackId.DUNDERHEAD,
    name: 'Dunderhead',
    labels: {
      description: 'You are socially awkward and don’t get along well with others. You often stammer, lose focus and find it hard to compel others to listen to you. As such, you are perceived as being socially inept at times, or haughty without reason. You may even have a brain trauma! You decide.',
      effect: 'Whenever you suffer mental Peril, move one additional step down the Peril Condition Track negatively while suffering 1 Corruption.'
    }
  },
  {
    id: DrawbackId.EUNUCH,
    name: 'Eunuch',
    labels: {
      description: 'You were castrated for one reason or another. Your gelding has deeply impacted you, a harrowing memory you find difficult to suppress. Perhaps you were a monk who became a eunuch after a spiritual awakening. Or, maybe you were gelded for acts of sexual indecency. Either way, you decide what led you to this end. The sting of being unable to have children weighs heavily upon you. Your bloodline has ended.',
      effect: 'You are immune to the charms and seduction by those who find you attractive, and unable to have children. However, being made victim to these same charms and seduction causes you to suffer 1 Corruption.'
    }
  },
  {
    id: DrawbackId.LILYLIVERED,
    name: 'Lily-Livered',
    labels: {
      description: 'You get butterflies in your stomach in the most innocuous of situations. It cannot be helped, and when forced into strange and otherworldly situations, your legs tremble and you have a hard time concentrating.',
      effect: 'Whenever you fail to Resist Stress, Fear or Terror, you temporarily reduce your Initiative and Movement by -3 (to a minimum of 1). This lasts until you get a good night\'s rest.'
    }
  },
  {
    id: DrawbackId.MELANCHOLIC_TEMPERAMENT,
    name: 'Melancholic Temperament',
    labels: {
      description: 'You are prone to fits of fatigue, and oftentimes suffer from phantom pains in your muscles. In fact, it’s hard to rouse you from war-weariness without using twice the normal medication required to lift your spirits.',
      effect: 'Whenever you use Smelling Salts, you must use two instead of one. Using an additional dose of Smelling Salts in this instance has no negative effects.'
    }
  },
  {
    id: DrawbackId.NEER_DO_WELL,
    name: 'Ne\'er Do Well',
    labels: {
      description: 'You are feckless, irresponsible and prone to idleness. It doesn’t mean that you are completely useless, however, you are unreliable when the chips are down.',
      effect: 'You cannot Assist others’ Skill Tests.'
    }
  },
  {
    id: DrawbackId.NEMESIS,
    name: 'Nemesis',
    labels: {
      description: 'You have an implacable enemy that harries you at every opportunity. They may be a political rival who sabotages your ambitions or a foe who is destined to kill you. Perhaps your Nemesis may yet be unnamed, revealed at a much later date.',
      effect: 'When confronted by your Nemesis, you cannot sacrifice Fate or Fortune Points, as their presence confounds you. Your Nemesis is determined by the GM, who will likely take your ideas about your Character’s history or past rivals into consideration.'
    }
  },
  {
    id: DrawbackId.PAINKILLER,
    name: 'Painkiller',
    labels: {
      description: 'You escape the stresses of your daily life – and the horrors of what’s out there – by self-medicating.',
      effect: 'Work with your GM to select a single Addiction your Character begins play with.'
    }
  },
  {
    id: DrawbackId.PERSECUTION_COMPLEX,
    name: 'Persecution Complex',
    labels: {
      description: 'Everyone – literally, everyone – is out to get you. There is no doubt in your mind that others may be following you, are trying to trick you or are ridiculing you behind your back.',
      effect: 'You cannot rest to recover from Peril in urban environments, unless you take a dose of laudanum before resting.'
    }
  },
  {
    id: DrawbackId.PHLEGMATIC_TEMPERAMENT,
    name: 'Phlegmatic Temperament',
    labels: {
      description: 'In a nutshell, you have a tendency to withdraw from the world when things get tough. And, when subjected to horrific situations, you become indecisive and meek.',
      effect: 'Whenever you are suffering from Stress, Fear or Terror, your Fury Dice do not explode (as covered in Chapter 2: How To Play). This lasts until you get a good night\'s rest.'
    }
  },
  {
    id: DrawbackId.SANGUINE_TEMPERAMENT,
    name: 'Sanguine Temperament',
    labels: {
      description: 'You are rather outgoing, but also jittery and have a hard time sitting still. You may suffer from ‘jimmy leg’, and are unable to keep a steady hand in the thick of battle, unless concentrating.',
      effect: 'You cannot Load or Take Aim without spending an additional Action Point. In addition, whenever you use the Special Action of Wait, you lose 1 Action Point.'
    }
  },
  {
    id: DrawbackId.SOUR_STOMACH,
    name: 'Sour Stomach',
    labels: {
      description: 'You have pains in your stomach that make it difficult to keep down ‘rich’ food. This also means other kinds of substances can have a poor effect on your health, and keep you confined to the water closet.',
      effect: 'After taking a dose of Laudanum, a Delirient or consuming a substance the GM sees as being hard on your stomach, you cannot recover to Unhindered on the Peril Condition Track (only to Imperiled) for the next 24-hours.'
    }
  },
  {
    id: DrawbackId.SPLIT_FACE,
    name: 'Split Face',
    labels: {
      description: 'Whether you took the haft of an axe to the face, your nose was broken in a fight or were born with a deformity, you have a poor sense of smell.',
      effect: 'You must flip the results to fail all Skill Tests which rely on smell and taste.'
    }
  },
  {
    id: DrawbackId.VETERANS_BOOT,
    name: 'Veteran\'s Boot',
    labels: {
      description: 'Perhaps lost during an unfortunate carriage accident, during an intense battle, or in the jaws of a rabid animal, you are missing a foot. In its place is a wooden boot, which you must strap onto your leg to stand up straight. It makes a characteristic ‘CLUD’ sound as you walk, which has earned you a number of embarrassing nicknames.',
      effect: 'You cannot Charge, Maneuver or Run with Movement Actions without spending an additional Action Point.'
    }
  },
  {
    id: DrawbackId.VETERANS_EYE,
    name: 'Veteran\'s Eye',
    labels: {
      description: 'You have lost an eye. It may have been from a childhood prank gone wrong, an abnormality from birth or the ‘devil’ made you gouge it out. Regardless, you may have a glass bead where it once was, wear an eye patch over the empty socket or simply let its hollowed-out recess go uncovered.',
      effect: 'Reduce the Distance for all ranged weapons you use by -3 (to a minimum of 1).'
    }
  },
  {
    id: DrawbackId.VETERANS_HAND,
    name: 'Veteran\'s Hand',
    labels: {
      description: 'Whether it was lopped off at the hands of a vicious mercenary or somehow torn asunder in the complex cogs of a war machine, you lost use of your hand long ago. In its place is an iron prosthesis, clumsy to attach and difficult to use. A webbing of leather straps adorns your arm, from wrist to elbow.',
      effect: 'You cannot hold weapons which are two-handed and must flip the results to fail any Skill Test requiring use of both hands.'
    }
  },
  {
    id: DrawbackId.VETERANS_LEG,
    name: 'Veteran\'s Leg',
    labels: {
      description: 'With a characteristic shuffling, you draw your lame leg behind you. Attached at the knee cap with a Barber Surgeon’s contraption, the cheap prosthesis grants you the ability to walk (albeit at a slow, deliberate pace).',
      effect: 'You must reduce your Movement by 3 and cannot Run.'
    }
  },
  {
    id: DrawbackId.WEAK_LUNGS,
    name: 'Weak Lungs',
    labels: {
      description: 'You have suffered a terrible injury at some point, making it difficult to breath. You may have fallen on a fencepost as a youth and grown up with the use of only one lung. Perhaps you were stabbed by a vicious rival and now exhibit an audible wheezing.',
      effect: 'Whenever you suffer physical Peril, move one additional step down the Peril Condition Track negatively while suffering 1 Corruption.'
    }
  },
  {
    id: DrawbackId.LURE_OF_POWER,
    name: 'Lure of Power',
    labels: {
      description: 'The lust for Magickal power corrupts all, indistinct from its most brazen or conservative practitioners.',
      effect: 'Whenever you generate face ‘6’ with Chaos Dice, you invoke a Chaos Manifestation. See Chapter 10: Grimoire.'
    }
  },
  {
    id: DrawbackId.CRUEL_TUTELAGE,
    name: 'Cruel Tutelage',
    labels: {
      description: 'As Cultists are wholly self-taught in the ways of Magick, the practice of their spells is messy and chaotic. Fortunate for Abyssal Princes sensitive to this errant way of thinking, Cultists and their ilk make easy prey, leading them down a path towards the blackest and most soul-corrupting of Magicks.',
      effect: 'When you generate face ‘1’ or ‘6’ with Chaos Dice, you invoke a Chaos Manifestation. See Chapter 10: Grimoire.'
    }
  },
  {
    id: DrawbackId.THE_END_IS_NIGH,
    name: 'The End Is Nigh',
    labels: {
      description: 'Unfortunately, the process of ritual scarification has led its votaries toward the brink of madness.',
      effect: 'You can never be restored to Unharmed on your Damage Condition Track, only to Lightly Wounded.'
    }
  },
  {
    id: DrawbackId.WHEN_THE_DEALINS_DONE,
    name: 'When The Dealin’s Done',
    labels: {
      description: 'Living forever is boring and the Gambler will burn out before they fade away. And when you play the devil’s game, you eventually get the devil’s reward.',
      effect: 'When you use a Fortune Point for Luck of the Draw, you move one step down the Peril Condition Track negatively.'
    }
  },
  {
    id: DrawbackId.CRESTFALLEN,
    name: 'Crestfallen',
    labels: {
      description: 'Hedge Knights are restricted by a code, a set of principles and guidelines they adhere to. When they bend or even break this code, they make themselves susceptible to chaos’ influence.',
      effect: 'When you suffer Corruption, increase the number of points you gain by one. This means that if you suffer 3 Corruption, you gain 4 instead.'
    }
  },
  {
    id: DrawbackId.ABSTAIN_FROM_VIOLENCE,
    name: 'Abstain From Violence',
    labels: {
      description: 'You have given yourself to the god’s mercy, taking no part in the selfish passions nor acts of violence. You are a pacifist at heart and it brings you great sorrow when you do hurt another – even if they would intend to kill you.',
      effect: 'Should you intentionally bring harm upon a creature classified as a Humanoid (including player Ancestries), you are unable to call upon your White Witchery abilities for three days.'
    }
  },
  {
    id: DrawbackId.SALT_OF_THE_EARTH,
    name: 'Salt Of The Earth',
    labels: {
      description: 'Despicable wretch! Lowly worm! Kneel before your betters, and polish my boots while you’re at it!',
      effect: 'When you enter this Profession, immediately change your Social Class to Lowborn.'
    }
  },
  {
    id: DrawbackId.NOTORIOUS_MOOCHER,
    name: 'Notorious Moocher',
    labels: {
      description: 'Living off the hard work of others, you manage to get by with but what’s in your pockets or what’s been given to you. Unfortunately, this casts an ill-light upon your reliability as you burn through your associates’ charity all too quickly.',
      effect: 'When interacting with people who you know, you must flip the results to fail Fellowship-based Skill Tests.'
    }
  },
  {
    id: DrawbackId.WASHED_UP,
    name: 'Washed Up',
    labels: {
      description: 'Leaving behind the life they once lived, the Rake is now forced to rub elbows with the friends they’ve got, as opposed to the ones they had.',
      effect: 'When you enter this Profession, immediately change your Social Class to Lowborn.'
    }
  },
  {
    id: DrawbackId.DEATH_WISH,
    name: 'Death Wish',
    labels: {
      description: 'Unfortunately, the path of the Slayer is a difficult one that only the truly insane would possibly follow.',
      effect: 'In order to follow the Slayer’s Path, you can never wear armor as it violates this tenet. Should you don armor, you do not gain the benefits of any Professional Trait – Slayer or otherwise – that you possess.'
    }
  },
  {
    id: DrawbackId.ALTER_EGO,
    name: 'Alter Ego',
    labels: {
      description: 'The powers-above will not cast their favor upon you, until you don the mask of a Vigilante.',
      effect: 'When in places where you may be recognized as anyone other than your moniker, you cannot use Fate Points.'
    }
  },
  {
    id: DrawbackId.WARP_DISSONANCE,
    name: 'Warp Dissonance',
    labels: {
      description: 'The mind reels at the complexities of the Ætheric Winds and how they pass into the Material Realm. The mortal soul is not properly equipped to deal with these confounding majesties and can easily overwhelm even its most learned of practitioners. It takes solemnity and inner grace to properly balance oneself against the buffeting Winds of the Æther, one that must be unburdened by woe.',
      effect: 'Whenever you are suffering from 6 or more Corruption, you cannot Channel Power.'
    }
  },
  {
    id: DrawbackId.ASSASSINS_CREED,
    name: 'Assasin\'s Creed',
    labels: {
      description: 'One must have a callous indifference towards the sanctity of life to become an Assassin. This career tends to draw the bloodthirsty and insane to its ranks. Assassins who are consumed by the act of killing are utterly corrupted, while others who maintain proper decorum will remain untainted by their grisly work.',
      effect: 'When you take an innocent life unprovoked, you automatically gain 1 permanent Chaos Rank.'
    }
  },
  {
    id: DrawbackId.THE_CUSTODIANS_COMMANDMENTS,
    name: 'The Custodian’s Commandments',
    labels: {
      description: 'The Custodian makes specific demands from Her priesthood. They must remain steady foes to the befouled Crouching One, taking all means to bring their cult to an end. They must defend places where the dead are buried and cannot disturb those who have been chosen by the Custodian to enter Her sacred realms. But of all Her strictures, none is more demanding than that which states all necromancers and those who’d raise the dead unnaturally must be hunted down.',
      effect: 'When you would normally invoke a Chaos Manifestation, you instead provoke Punishments of the Custodian. In addition, you are bound by the commandments of your god, as outlined in Chapter 10: Grimoire. You must seek atonement if you violate these commandments.'
    }
  },
  {
    id: DrawbackId.ENJOY_THE_SILENCE,
    name: 'Enjoy The Silence',
    labels: {
      description: 'Badlanders enjoy the solitude of the wilderness more than others. They treat others with extreme discrimination, seeing their presence as more a distraction than a boon.',
      effect: 'You never Critically Succeed at Fellowship-based Skill Tests, even if you roll a Match. In addition, you cannot take advantage of Talents, Traits, Magick or Fortune Points to modify any Fellowship-based Skill Test.'
    }
  },
  {
    id: DrawbackId.UNTRUSTWORTHY,
    name: 'Untrustworthy',
    labels: {
      description: 'Despite having both the backing of the law and schooling, you are roundly mistrusted by others. Many see you as a blood-sucking, money-grubbing parasite of society. Inquisitors may even believe you may be, in fact, a blood-sucking vampire!',
      effect: 'When you fail any Fellowship-based Skill Test, you suffer 1 Corruption.'
    }
  },
  {
    id: DrawbackId.DAMNED,
    name: 'Damned',
    labels: {
      description: 'Unfortunately, the power you wield is highly destructive – not only to others, but to your very soul.',
      effect: 'Any time you gain a Disorder, you gain a Malignancy as well. Malignancies are covered in Chapter 10: Grimoire.'
    }
  },
  {
    id: DrawbackId.THE_CROUCHING_ONES_COMMANDMENTS,
    name: 'The Crouching One’s Commandments',
    labels: {
      description: 'The Crouching One makes specific demands from His priesthood. His Bloodmongers must spill the blood of animals in contrition and bleed themselves of foul humours often. Sometimes, they must carry out dangerous, ritualistic missions to assassinate specific people who displease the god. Rarer still they must indoctrinate their victim’s children into their sacred order, turning them into hired killers or worse.',
      effect: 'When you would normally invoke a Chaos Manifestation, you instead provoke Punishments of the Crouching One. In addition, you are bound by the commandments of your god, as outlined in Chapter 10: Grimoire. You must seek atonement if you violate these commandments.'
    }
  },
  {
    id: DrawbackId.PUBLIC_ENEMY,
    name: 'Public Enemy',
    labels: {
      description: 'Your face and name are well-known. Very likely, there’s a reeve, bounty hunter or worse on your tail. As such, you are forced to live a life in the shadows, using trusted confidantes to carry out your tasks in public.',
      effect: 'When in places where you may be recognized, you cannot use Fortune Points unless you make means to hide your true identity. The GM will likely ask you to make a Secret Test for Disguise when in public, only revealing the results at the most inopportune of times.'
    }
  },
  {
    id: DrawbackId.DIABOLICAL_MARK,
    name: 'Diabolical Mark',
    labels: {
      description: 'You have denied the gods outright and they have now denied you in return. It doesn’t necessarily mean that your prayers go unanswered. In fact, they’re still granted, but by new masters. For your subservience, you are branded with a mark, sealing your obedience to the Abyssal Princes of the endless pit.',
      effect: 'You no longer suffer from Divine Punishment, but instead invoke Chaos Manifestations as if you were using Arcane Magick. In addition, you must always Channel Power when casting Magick, costing 0 AP to do so in combat. When you Critically Fail an Incantation Test to cast Magick, your skin is branded with a permanent ‘devil’s mark’. For each mark, you automatically gain one Chaos Rank.'
    }
  },
  {
    id: DrawbackId.DAMNED,
    name: 'Damned',
    labels: {
      description: '',
      effect: ''
    }
  },
  {
    id: DrawbackId.DAMNED,
    name: 'Damned',
    labels: {
      description: '',
      effect: ''
    }
  },
  {
    id: DrawbackId.DAMNED,
    name: 'Damned',
    labels: {
      description: '',
      effect: ''
    }
  },
  {
    id: DrawbackId.DAMNED,
    name: 'Damned',
    labels: {
      description: '',
      effect: ''
    }
  },
  {
    id: DrawbackId.DAMNED,
    name: 'Damned',
    labels: {
      description: '',
      effect: ''
    }
  },
  {
    id: DrawbackId.DAMNED,
    name: 'Damned',
    labels: {
      description: '',
      effect: ''
    }
  },
  {
    id: DrawbackId.DAMNED,
    name: 'Damned',
    labels: {
      description: '',
      effect: ''
    }
  },
];
