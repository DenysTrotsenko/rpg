import {TraitId} from './enums';
import {Trait} from './models';

export const ARCHETYPE_TRAIT: Trait[] = [
  {
    id: TraitId.ITS_OWN_REWARD,
    name: 'Its Own Reward',
    labels: {
      description: '',
      effect: 'You never suffer Peril because of failed or Critically Failed Toughness Tests.'
    },
  },
  {
    id: TraitId.JACK_OF_ALL_TRADES,
    name: 'Jack Of All Trades',
    labels: {
      description: '',
      effect: 'Add +5% Base Chance to any Skill you don’t have a Skill Rank in.'
    }
  },
  {
    id: TraitId.KEEP_IT_SIMPLE,
    name: 'Keep It Simple',
    labels: {
      description: '',
      effect: 'When in combat, you never gain Conflict because of failed and Critically Failed Skill Tests, nor from Injuries.'
    }
  },
  {
    id: TraitId.LOW_PROFILE,
    name: 'Low Profile',
    labels: {
      description: '',
      effect: 'All threats classified as Humanoid (including player cultures) suffer a -20% Base Chance to hit you until you initiate violence toward them or their allies.'
    }
  },
  {
    id: TraitId.MAKESHIFT_TOOLS,
    name: 'Makeshift Tools',
    labels: {
      description: '',
      effect: 'You can construct any tool smaller than an ox with materials you have on-hand without fail. After using the tool once, roll a 1D6 Chaos Die. On a result of face ‘1-5,’ nothing happens. On a result of face ‘6,’ the tool breaks and its user suffers 2D10+2 Peril.'
    }
  },
  {
    id: TraitId.NOSE_TO_THE_GRINDSTONE,
    name: 'Nose To The Grindstone',
    labels: {
      description: '',
      effect: 'Whenever you triple the time required to make a Skill Test, ignore Peril Condition Track penalties when calculating Total Chance for success.'
    }
  },
  {
    id: TraitId.SALT_OF_THE_EARTH,
    name: 'Salt Of The Earth',
    labels: {
      description: '',
      effect: 'Whenever you fail a Bargain or Rumor Test, re- roll to generate a better result (but you must accept the outcome).'
    }
  },
  {
    id: TraitId.SHOW_THE_HEELS,
    name: 'Show The Heels',
    labels: {
      description: '',
      effect: 'Whenever you Charge or Run, add +6 yards to Movement on foot.'
    }
  },
  {
    id: TraitId.SKELETON_KEY,
    name: 'Skeleton Key',
    labels: {
      description: '',
      effect: 'Providing you can narratively justify it, you can substitute any Primary Attribute in place of another when making a Skill Test.'
    }
  },
  {
    id: TraitId.WORK_WORK_WORK,
    name: 'Work, Work, Work',
    labels: {
      description: '',
      effect: 'You do not suffer the ill-effects of Peril until you are at ‘Ignore 3 Skill Ranks’ on the Peril Condition Track.'
    }
  },
  {
    id: TraitId.A_TALL_TALE,
    name: 'A Tall Tale',
    labels: {
      description: '',
      effect: 'Are you abnormally short or extraordinarily tall? Choose one. If Tall, you automatically inflict Moderate Injuries when fighting bare-handed in combat, but permanently reduce your Initiative by -1. If Slight, permanently add +1 to your Damage Threshold, but you cannot use two-handed melee weapons. When you come to determining stature, select the aforementioned size.'
    }
  },
  {
    id: TraitId.DIAMOND_IN_THE_ROUGH,
    name: 'Diamond In The Rough',
    labels: {
      description: '',
      effect: 'Immediately after you suffer Damage from a melee or ranged weapon, spend a Coin to ignore it.'
    }
  },
  {
    id: TraitId.FORTUITOUS_OUTCOMES,
    name: 'Fortuitous Outcomes',
    labels: {
      description: '',
      effect: 'Whenever you gain an Affliction, immediately gain one Belief Rank. You’ll learn more about Afflictions in Article 8: Healing, Hazards & Horror.'
    }
  },
  {
    id: TraitId.FRONTIER_WALKER,
    name: 'Frontier-Walker',
    labels: {
      description: '',
      effect: 'When moving through uninhabited rural areas, you leave no trace of your passing and cannot be found with Skills or Spells.'
    }
  },
  {
    id: TraitId.GUT_FOUNDED,
    name: 'Gut Founded',
    labels: {
      description: '',
      effect: 'In rural areas, you can always provide yourself with food and water to live on, never suffering from the effects of Starvation.'
    }
  },
  {
    id: TraitId.HANDS_OF_A_HEALER,
    name: 'Hands Of A Healer',
    labels: {
      description: '',
      effect: 'Whenever you fail or Critically Fail a Heal Test, spend a Coin to turn it into a Critical Success.'
    }
  },
  {
    id: TraitId.HIT_THE_HAY,
    name: 'Hit The Hay',
    labels: {
      description: '',
      effect: 'You only need three hours of Sleep to restore your Peril Condition Track. In addition, you are always restored to Unhindered after Sleeping, even in unsafe places or when traveling.'
    }
  },
  {
    id: TraitId.SHADOWS_BEGONE,
    name: 'Shadows Begone',
    labels: {
      description: '',
      effect: 'You treat Total Darkness as if it is Perfect Light, able to see in the dark.'
    }
  },
  {
    id: TraitId.SLEEP_TIGHT,
    name: 'Sleep Tight',
    labels: {
      description: '',
      effect: 'Whenever you awaken from six hours of Sleep, you move one step up the Damage Condition Track positively.'
    }
  },
  {
    id: TraitId.TO_THE_BITTER_END,
    name: 'To The Bitter End',
    labels: {
      description: '',
      effect: 'Whenever rolling to determine which Injury you suffer, roll twice and choose the preferred results.'
    }
  },
  {
    id: TraitId.BY_THE_BOOK,
    name: 'By The Book',
    labels: {
      description: '',
      effect: 'You treat all Special Skills as Common Skills.'
    }
  },
  {
    id: TraitId.CHAOS_IS_A_LADDER,
    name: 'Chaos Is A Ladder',
    labels: {
      description: '',
      effect: 'Whenever combat begins, you always gain the benefits of Surprise on your first Turn.'
    }
  },
  {
    id: TraitId.ENCYCLOPEDIC_MEMORY,
    name: 'Encyclopedic Memory',
    labels: {
      description: '',
      effect: 'When attempting to recall written numbers or copy content, you automatically succeed at the Skill Test.'
    }
  },
  {
    id: TraitId.ENFANT_TERRIBLE,
    name: 'Enfant Terrible',
    labels: {
      description: '',
      effect: 'Whenever someone fails an Intelligence-based Skill Test, you can interject and have them re-roll using your Base Chance without spending Coins. However, they gain 3 Conflict.'
    }
  },
  {
    id: TraitId.FIT_AS_A_FIDDLE,
    name: 'Fit As A Fiddle',
    labels: {
      description: '',
      effect: 'You are immune to Smallpox. Whenever you are exposed to an Ailment, sacrifice one Determination to become immune to it.'
    }
  },
  {
    id: TraitId.HOLD_ON_A_MOMENT,
    name: 'Hold On A Moment',
    labels: {
      description: '',
      effect: 'Foes will never attack you on their first Turn of combat.'
    }
  },
  {
    id: TraitId.KNOWLEDGE_IS_POWER,
    name: 'Knowledge Is Power',
    labels: {
      description: '',
      effect: 'When you succeed at an Education Test, spend a Coin to provoke Stress in one foe who can see and hear you clearly.'
    }
  },
  {
    id: TraitId.LOGICIAN,
    name: 'Logician',
    labels: {
      description: '',
      effect: 'You may substitute Education when it comes to Resisting Spells and Spell-like effects.'
    }
  },
  {
    id: TraitId.STIFF_UPPER_LIP,
    name: 'Stiff Upper Lip',
    labels: {
      description: '',
      effect: 'When in a social situation, you never gain Conflict because of failed or Critically Failed Skill Tests.'
    }
  },
  {
    id: TraitId.TONGUE_LASHING,
    name: 'Tongue-Lashing',
    labels: {
      description: '',
      effect: 'Whenever you inflict an Injury, your foe moves one step down the Peril Condition Track negatively if they suffer a Moderate Injury; two steps down if a Serious Injury; or, three steps down if a Grievous Injury. This only works on foes who can see and hear you clearly.'
    }
  },
  {
    id: TraitId.BETTER_LUCKY_THAN_GOOD,
    name: 'Better Lucky Than Good',
    labels: {
      description: '',
      effect: 'Whenever you spend a Coin to re-roll a Skill Test, if you fail the Test, put the Coin back into your respective pool (but you must accept the results of the die roll).'
    }
  },
  {
    id: TraitId.DEAD_TO_RIGHTS,
    name: 'Dead To Rights',
    labels: {
      description: '',
      effect: 'Any Skill Rank you gain in Eavesdrop, Guile and Skulduggery modify your Base Chance by +15, instead of +10.'
    }
  },
  {
    id: TraitId.ENTREPRENEURIAL_SPIRIT,
    name: 'Entrepreneurial Spirit',
    labels: {
      description: '',
      effect: 'Whenever you succeed at Skill Test to cheat, lie or steal, roll a D6 Chaos Die. If it lands on face ‘6,’ move one Coin from one Pool into another Pool.'
    }
  },
  {
    id: TraitId.FAKE_IT_TILL_I_MAKE_IT,
    name: 'Fake It Till I Make It',
    labels: {
      description: '',
      effect: 'You never suffer the effects of Critical Failures in Skills you don’t have Skill Ranks in.'
    }
  },
  {
    id: TraitId.MOSTLY_HARMLESS,
    name: 'Mostly Harmless',
    labels: {
      description: '',
      effect: 'Add +1 to your Damage & Peril Thresholds.'
    }
  },
  {
    id: TraitId.TAKE_A_MULLIGAN,
    name: 'Take A Mulligan',
    labels: {
      description: '',
      effect: 'Whenever you spend a Coin to re-roll a Skill Test and fail, re-roll a final time (but you must accept the results of this final roll).'
    }
  },
  {
    id: TraitId.TREACHERY,
    name: 'Treachery',
    labels: {
      description: '',
      effect: 'Whenever you deal Damage against a foe for the first time, add a 1D6 Fury Die to Total Damage. You can take advantage of this in combat by switching between multiple foes.'
    }
  },
  {
    id: TraitId.RING_OF_TRUTH,
    name: 'Ring Of Truth',
    labels: {
      description: '',
      effect: 'Add an Assist Die whenever you make Guile Tests. In addition, you always succeed at Skill Tests to tell lies.'
    }
  },
  {
    id: TraitId.WINDFALL,
    name: 'Windfall',
    labels: {
      description: '',
      effect: 'Anytime you generate a Critical Failure, gain a Coin for yourself. Once spent, discard it permanently. It must be used before the end of the game session, or else it expires.'
    }
  },
  {
    id: TraitId.WHITE_FEATHERED,
    name: 'White Feathered',
    labels: {
      description: 'I’m no coward — I am just adept at avoiding the worst of situations ... particularly when they’re delivered at the end of a musket.',
      effect: 'You may flip the results to succeed at Coordination Tests to Defend against attacks made with ranged weapons.'
    }
  },
  {
    id: TraitId.ABRACADABRA,
    name: 'Abracadabra',
    labels: {
      description: '',
      effect: 'When moving through crowded urban areas, you leave no trace of your passing and cannot be found with Skills or Spells.'
    }
  },
  {
    id: TraitId.ABSOLUTION,
    name: 'Absolution',
    labels: {
      description: '',
      effect: 'You never gain Conflict for actions you can justify to the Historian are religiously or spiritually motivated.'
    }
  },
  {
    id: TraitId.DEVIL_IN_THE_EYE,
    name: 'Devil In The Eye',
    labels: {
      description: '',
      effect: 'You can use any Fellowship-based Skill to directly communicate with Abyssal threats you can see and hear clearly. This empathy acts as an all but paranormal type of communication, the complexity determined by the Historian. In addition, you are immune to being Compelled (a Trait that some threats possess).'
    }
  },
  {
    id: TraitId.HAND_OF_GOD,
    name: 'Hand Of God',
    labels: {
      description: '',
      effect: 'Any weapon you hold is treated as magically enhanced for purposes of striking threats that can only be affected by Spells or weapons imbued with it.'
    }
  },
  {
    id: TraitId.NO_ILLUSIONS,
    name: 'No Illusions',
    labels: {
      description: '',
      effect: 'You are immune to mind control and can see through illusions.'
    }
  },
  {
    id: TraitId.RITUALISTIC,
    name: 'Ritualistic',
    labels: {
      description: '',
      effect: 'Whenever you awaken from six hours Sleep, make a Resolve Test to pray. If successful, you add +1 to three different Bonus Advances until you rest once again. These effects are not cumulative day over day.'
    }
  },
  {
    id: TraitId.SECOND_SIGHT,
    name: 'Second Sight',
    labels: {
      description: '',
      effect: 'With a successful Scrutinize Test, you can detect the presence of supernatural phenomena nearby. If you Critically Succeed this Skill Test, you can accurately track where the phenomena is (as if you were tracking someone using Survival).'
    }
  },
  {
    id: TraitId.TWIST_OF_FATE,
    name: 'Twist Of Fate',
    labels: {
      description: '',
      effect: 'Whenever you spend a Coin, roll a 1D6 Chaos Die. If the result is face ‘6,’ the Coin doesn’t convert to the other pool.'
    }
  },
  {
    id: TraitId.WELL_GROUNDED,
    name: 'Well-Grounded',
    labels: {
      description: '',
      effect: 'Whenever you suffer from Stress, Fear and Terror provoked by threats classified as Supernatural, you do not gain Conflict.'
    }
  },
  {
    id: TraitId.WITCHES_MARK,
    name: 'Witches’ Mark',
    labels: {
      description: '',
      effect: ' Whenever you fail or Critically Fail an Incantation Test, you may turn it into a Critical Success. You move one step down the Peril Condition Track negatively as a result.'
    }
  },
  {
    id: TraitId.BETWEEN_TWO_WORLDS,
    name: 'Between Two Worlds',
    labels: {
      description: '',
      effect: 'Immediately after you suffer Peril from a threat classified as Abyssal, Supernatural or other situations deemed otherworldly, spend a Coin to ignore it.'
    }
  },
  {
    id: TraitId.DYED_IN_THE_WOOL,
    name: 'Dyed In The Wool',
    labels: {
      description: '',
      effect: 'Whenever you gain Conflict, decrease the number you gain by three (to a minimum of 1). This means that if you gain 6 Conflict, you gain 3 instead.'
    }
  },
  {
    id: TraitId.E_PLURIBUS_UNUM,
    name: 'E Pluribus Unum',
    labels: {
      description: '',
      effect: 'Whenever you Assist Skill Tests, the ally you’re helping gains one additional Assist Die.'
    }
  },
  {
    id: TraitId.FOSTERING_COMMUNITY,
    name: 'Fostering Community',
    labels: {
      description: '',
      effect: 'Whenever using social-based Skill Tests, gain two Assist Dice, using the best of all the results you roll.'
    }
  },
  {
    id: TraitId.LEVEL_HEADED,
    name: 'Level-Headed',
    labels: {
      description: '',
      effect: 'At the end of the game session, roll two Conflict Dice and choose the preferred results.'
    }
  },
  {
    id: TraitId.PEOPLE_PERSON,
    name: 'People Person',
    labels: {
      description: '',
      effect: 'You can sway any number of people who can clearly see and hear you with Fellowship-based Skill Tests. This includes actions such as Words As Weapons in combat.'
    }
  },
  {
    id: TraitId.SELF_RELIANT,
    name: 'Self-Reliant',
    labels: {
      description: '',
      effect: 'You never have to spend money on clothing, food or lodging, as you always have enough spare coins to pay for yourself and stable a horse.'
    }
  },
  {
    id: TraitId.SEVENTH_SENSE,
    name: 'Seventh Sense',
    labels: {
      description: '',
      effect: 'Whenever you interact with others using Fellowship-based Skill Tests, treat their Social Disposition as Helpful. You can learn more about Dispositions in Article 6: Narrative Tools.'
    }
  },
  {
    id: TraitId.TITAN_OF_INDUSTRY,
    name: 'Titan Of Industry',
    labels: {
      description: '',
      effect: 'Any object you craft with your own hands cannot be broken or destroyed by normal means.'
    }
  },
  {
    id: TraitId.VOX_POPULI,
    name: 'Vox Populi',
    labels: {
      description: '',
      effect: 'Treat each Bonus Advance in Fellowship Bonus [FB] as if it were three times its normal value.This means if you had a [FB] 6, treat it as [FB] 18 instead.'
    }
  },
  {
    id: TraitId.ARMED_TO_THE_TEETH,
    name: 'Armed To The Teeth',
    labels: {
      description: '',
      effect: 'Add both the Punishing and Vicious Qualities to any melee weapons you wield.'
    }
  },
  {
    id: TraitId.BATTLE_HYMN,
    name: 'Battle Hymn',
    labels: {
      description: '',
      effect: 'Whenever you suffer an Injury, immediately move one step up the Damage & Peril Condition Tracks positively.'
    }
  },
  {
    id: TraitId.BITE_THE_BULLET,
    name: 'Bite The Bullet',
    labels: {
      description: '',
      effect: 'Whenever you suffer an Injury, ignore its effects until one hour later.'
    }
  },
  {
    id: TraitId.BLOODY_MINDED,
    name: 'Bloody-Minded',
    labels: {
      description: '',
      effect: 'You do not flinch from scenes of blood and viscera, nor gain Conflict because of it.'
    }
  },
  {
    id: TraitId.FEATHER_IN_THE_CAP,
    name: 'Feather In The Cap',
    labels: {
      description: '',
      effect: ' Immediately gain 1 Determination.'
    }
  },
  {
    id: TraitId.LIBERTY_OR_DEATH,
    name: 'Liberty Or Death',
    labels: {
      description: '',
      effect: 'Whenever you would be Slain!, you gain 3 Action Points that must be used immediately. If you kill the foe who slew you, you are Grievously Wounded instead.'
    }
  },
  {
    id: TraitId.LOCK_STOCK_AND_BARREL,
    name: 'Lock, Stock & Barrel',
    labels: {
      description: '',
      effect: 'When you use Fury Dice to determine ranged weapon Damage, the dice explode on face ‘5–6.’'
    }
  },
  {
    id: TraitId.MAKE_A_BEELINE,
    name: 'Make A Beeline',
    labels: {
      description: '',
      effect: 'Whenever you Charge, add +3 to your Damage Threshold until the beginning of your next Turn. When you Run, add +6 instead. This does not stack with the action of Take Cover in combat.'
    }
  },
  {
    id: TraitId.SET_MY_SIGHTS,
    name: 'Set My Sights',
    labels: {
      description: '',
      effect: 'Whenever you inflict Damage from a Targeted Attack, they also suffer an equal amount of Peril.'
    }
  },
  {
    id: TraitId.TURN_THE_TABLES,
    name: 'Turn The Tables',
    labels: {
      description: '',
      effect: 'Whenever a Coin is about to be spent, call out that you ‘turn the tables.’ The benefit of the Coin doesn’t take effect, and it is permanently discarded from both pools until the next game session. You can do this once a game session.'
    }
  },
];

export const PROFESSIONAL_TRAITS: Trait[] = [
  {
    id: TraitId.PERSONA_COME_FORTH,
    name: 'Persona, Come Forth!',
    labels: {
      description: '',
      effect: 'You may flip the results to succeed at Disguise Tests. When you succeed, it is always considered a Critical Success. In addition, when you successfully masquerade as a specific person, you can perfectly mimic their Allegiance.'
    },
  },
  {
    id: TraitId.THROUGH_MY_EYES,
    name: 'Through My Eyes',
    labels: {
      description: 'Through your time spent in the forge plumbing the hidden knowledge of God’s works, you have the ability to notice the smallest of things.',
      effect: 'You know the Alchemical Arts of Create Acid Bomb and Create Alkali (from Article 9: Hexenmeister’s Almanack) and randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. You treat all Critically Failed Alchemy Tests as regular failures, and treat all successful Alchemy Tests as Critical Successes. Finally, you can Risk Backlash and Unfetter your Spells (as covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.WAY_OF_THE_BEAST,
    name: 'Way Of The Beast',
    labels: {
      description: 'Threats classified as Animals or Beasts will never make you a target of attacks until you initiate violence toward them or their allies.',
      effect: ''
    },
  },
  {
    id: TraitId.WHATS_OLD_IS_NEW,
    name: 'What’s Old Is New',
    labels: {
      description: '',
      effect: 'You know the Alchemical Art of Create Medicine (from Article 9: Hexenmeister’s Almanack) and randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. Laudanum you create moves a person two steps up the Damage Condition Track positively, while Smelling Salt you create moves a person two steps up the Peril Condition Track positively. Finally, you can Risk Backlash and Unfetter your Spells (covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.THE_GOLDEN_RATIO,
    name: 'The Golden Ratio',
    labels: {
      description: '',
      effect: 'You automatically succeed at any Skill Test to determine distances. In addition, you treat Extreme and Long Distances as Medium Distance for purposes of using ranged weapons.'
    },
  },
  {
    id: TraitId.THE_ARTISTS_EYE,
    name: 'The Artist’s Eye',
    labels: {
      description: '',
      effect: 'You gain a muse, which may be an object, person or place. When in the presence of your muse, you ignore Peril Condition penalties when creating works of art. You’ll gain new muses at each Tier.'
    },
  },
  {
    id: TraitId.IN_TUNE_WITH_AETHER,
    name: 'In Tune With Æther',
    labels: {
      description: '',
      effect: 'When you hold an amulet and Risk Backlash, you must roll two or more face ‘6s’ on Chaos Dice to trigger it. Randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. Finally, you can Risk Backlash and Unfetter your Spells (covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.HONED_BY_CONFLICT,
    name: 'Honed By Conflict',
    labels: {
      description: '',
      effect: 'Whenever you make an Attack Action using a ranged weapon, foes must flip the results to fail to Defend or Resist it.'
    },
  },
  {
    id: TraitId.AT_EASE_MY_FRIEND,
    name: 'At Ease, My Friend',
    labels: {
      description: '',
      effect: 'You ignore Peril Condition penalties associated with Skill Tests to heal people. In addition, your medicinal practices never result in a patient suffering from Sepsis. Finally, add an Assist Die when using any Healing Practice (as indicated in Article 8: Healing, Hazards & Horror).'
    },
  },
  {
    id: TraitId.YOUR_SECRETS_REVEALED,
    name: 'Your Secrets Revealed',
    labels: {
      description: '',
      effect: 'Whenever you fail a Charm or Stealth Test, you may re-roll to generate a better result, but must accept the outcome. In addition, whenever you hide in urban environments during a Combat Encounter, it only costs 1 AP.'
    },
  },
  {
    id: TraitId.A_KNOTTED_ROPE,
    name: 'A Knotted Rope',
    labels: {
      description: '',
      effect: 'You may flip the results to succeed at Pilot Tests. When you succeed, it is always considered a Critical Success. In addition, when using the Movement subtype of Rowing, you do not have to add the additional 1 Action Point cost.'
    },
  },
  {
    id: TraitId.IN_THE_MARGINS,
    name: 'In The Margins',
    labels: {
      description: '',
      effect: 'Whenever you fail Counterfeit or Scrutinize Tests, you may re-roll to generate a better result but must accept the outcome. In addition, you always succeed at Skill Tests for mathematical exercises.'
    },
  },
  {
    id: TraitId.FIND_THE_HIDDEN_WORD,
    name: 'Find The Hidden Word',
    labels: {
      description: '',
      effect: 'Whenever you bear a symbol of faith in hand, add +1 to your Damage and Peril Thresholds. Randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. Finally, you can Risk Backlash and Unfetter your Spells (covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.I_HAVE_TASTED_IT_ALL,
    name: 'I Have Tasted It All',
    labels: {
      description: '',
      effect: 'You know the Alchemical Art of Create Drugs (from Article 9: Hexenmeister’s Almanack). With a sip, you automatically succeed at any Skill Test to determine if drinks have been drugged. Finally, you never suffer from the negative effects associated with Intoxication.'
    },
  },
  {
    id: TraitId.DEVIL_IN_THE_SADDLE,
    name: 'Devil In The Saddle',
    labels: {
      description: '',
      effect: 'Every time you inflict Damage on horseback using Actions In Combat, temporarily increase your Total Damage by +1 cumulatively, lasting until you are Slain! or combat ends.'
    },
  },
  {
    id: TraitId.HEAVEN_SENT,
    name: 'Heaven Sent',
    labels: {
      description: '',
      effect: 'All foes classified as Abyssal or Supernatural suffer a -10% Base Chance to hit you, regardless of the actions you take against them.'
    },
  },
  {
    id: TraitId.STROKE_OF_MY_QUILL,
    name: 'Stroke Of My Quill',
    labels: {
      description: '',
      effect: 'You reduce the time required to use Counterfeit Tests by half (suggestions include faking a seal, writing propaganda, determining false documentation, etc.). In addition, you automatically succeed at all Skill Tests to decipher counterfeited writing.'
    },
  },
  {
    id: TraitId.MARK_OF_INAUTHENTICITY,
    name: 'Mark Of Inauthenticity',
    labels: {
      description: '',
      effect: 'Any object you counterfeit is treated and appraised at its full value. Furthermore, you may flip the results to succeed Skill Tests to identify and create counterfeited objects.'
    },
  },
  {
    id: TraitId.WHAT_I_DO_IN_SHADOWS,
    name: 'What I Do In Shadows',
    labels: {
      description: '',
      effect: 'When you fail a Skulduggery or Stealth Test, you may re-roll to generate a better result but must accept the outcome. In addition, you always succeed at Skill Tests to disable locks.'
    },
  },
  {
    id: TraitId.A_SENSE_FOR_DANGER,
    name: 'A Sense For Danger',
    labels: {
      description: '',
      effect: 'Whenever you are Surprised, roll an Awareness Test. If successful, you and a number of allies equal to [PB] avoid Surprise.'
    },
  },
  {
    id: TraitId.A_LITTLE_BIT_OF_EVERYTHING,
    name: 'A Little Bit Of Everything',
    labels: {
      description: '',
      effect: 'Whenever you gain the benefits of an Assist Die, you gain two instead.'
    },
  },
  {
    id: TraitId.READ_THE_ROOM,
    name: 'Read The Room',
    labels: {
      description: '',
      effect: 'By presenting a passport, you determine the Allegiance, culture and Disposition of any person you interact with. Dispositions are covered in Article 6: Narrative Tools.'
    },
  },
  {
    id: TraitId.BORN_IN_THE_SADDLE,
    name: 'Born In The Saddle',
    labels: {
      description: '',
      effect: 'When you fail a Handle Animal or Ride Test, you may re-roll to generate a better result, but must accept the outcome. In addition, when using the Movement subtype of Riding, you do not have to add the additional 1 Action Point cost.'
    },
  },
  {
    id: TraitId.TELL_ME_WHAT_YOU_SEEK,
    name: 'Tell Me What You Seek',
    labels: {
      description: '',
      effect: 'Whenever attempting to track a threat classified as Humanoid (including player cultures), find a source of water or navigate to a location using a divining rod, substitute Incantation in place of other Skills required to do so. Randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. Finally, you can Risk Backlash and Unfetter your Spells (covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.STEADY_HANDS,
    name: 'Steady Hands',
    labels: {
      description: '',
      effect: 'Any object you engrave is treated and appraised at its full value. Furthermore, you may flip the results to succeed at Skill Tests to identify and create engraved objects.'
    },
  },
  {
    id: TraitId.FARMERS_ALMANAC,
    name: 'Farmer’s Almanac',
    labels: {
      description: '',
      effect: 'You can accurately predict the weather without having to make a Skill Test. In addition, you do not suffer from the effects of Rough Terrain in combat or while traveling.'
    },
  },
  {
    id: TraitId.OPEN_MINDED,
    name: 'Open-Minded',
    labels: {
      description: '',
      effect: 'Select any three Special Skills, and circle them on your character sheet. They are now treated as Common Skills.'
    },
  },
  {
    id: TraitId.WE_ARE_THE_LIGHT,
    name: 'We Are The Light',
    labels: {
      description: '',
      effect: 'Join hands with up to two allies, and all of you make an Incantation or Resolve Test to Bind Wounds. For every successful Skill Test, the person is restored one additional step up the Damage Condition Track positively. Randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. Finally, you can Risk Backlash and Unfetter your Spells (covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.WANT_TO_KNOW_YOUR_FORTUNE,
    name: 'Want To Know Your Fortune?',
    labels: {
      description: 'Through tarot, tea leaves, the flight of birds and even the bumps on your head, I can see your future.',
      effect: 'You can attempt an Incantation Test to tell a person’s future using an oracular device, providing they can clearly see and hear you. If you succeed, they gain a Coin for personal use only. If you Critically Succeed, they gain two Coins instead. Once the Coins are spent, they are discarded, not placed into the Coin pools. This benefit must be spent before they have their fortune told again. Randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. Finally, you can Risk Backlash and Unfetter your Spells (covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.WITHIN_MY_REACH,
    name: 'Within My Reach',
    labels: {
      description: '',
      effect: 'Whenever you fail a Guile or Intimidate Test, you may re-roll to generate a better result, but must accept the outcome. In addition, you always succeed at Skill Tests to resell illegal wares & weapons.'
    },
  },
  {
    id: TraitId.BEAST_SLAYER,
    name: 'Beast Slayer',
    labels: {
      description: '',
      effect: 'After you have successfully defeated any threat classified as an Animal or Beast, its kind becomes your chosen enemy. When striking chosen enemies, add an additional 1D6 Fury Die to Total Damage with ranged weapons. Note that there is no upper limit to the number of chosen enemy types you may have.'
    },
  },
  {
    id: TraitId.FORTUNE_IS_PLEASED,
    name: 'Fortune Is Pleased',
    labels: {
      description: 'I might not believe in much, but the one thing I do know is that I’m Fortune’s favorite.',
      effect: 'Whenever you spend a Coin to re-roll a failed Skill Test, you don’t need to roll, as you Critically Succeed instead.'
    },
  },
  {
    id: TraitId.A_FAIR_PRICE,
    name: 'A Fair Price',
    labels: {
      description: '',
      effect: 'Whenever you fail a Bargain or Rumor Test, you may re-roll to generate a better result but must accept the outcome. In addition, you always succeed at Skill Tests to haggle down prices for legal wares & weapons.'
    },
  },
  {
    id: TraitId.FORLORN_HOPE,
    name: 'Forlorn Hope',
    labels: {
      description: '',
      effect: 'You may flip the results to succeed at Warfare Tests. When you succeed, it is considered a Critical Success. In addition, add 1D6 Fury Die to Damage with any weapon with the Bomb Quality.'
    },
  },
  {
    id: TraitId.AMBUSH_TACTICS,
    name: 'Ambush Tactics',
    labels: {
      description: '',
      effect: 'Whenever you deal Damage, spend a Coin to hide immediately or to remain hidden (thereby gaining Surprise on your next Turn).'
    },
  },
  {
    id: TraitId.MY_RETRIBUTION,
    name: 'My Retribution',
    labels: {
      description: '',
      effect: 'You know the Alchemical Art of Create Blackpowder (from Article 9: Hexenmeister’s Almanack), as you learn it as a free Unique Ability. Any weapons you craft of the Blackpowder Quality do not take on the negative effects imparted by their Qualities and don’t misfire.'
    },
  },
  {
    id: TraitId.A_TRACE_OF_LIFE,
    name: 'A Trace Of Life',
    labels: {
      description: '',
      effect: 'Whenever attempting to track a threat classified as an Animal or find a place using a sacred tool, substitute Incantation in place of other Skills required to do so. Randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. Finally, you can Risk Backlash and Unfetter your Spells (covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.ROUGH_WORK,
    name: 'Rough Work',
    labels: {
      description: '',
      effect: 'You may flip the results to succeed at Toughness Tests. When you succeed, it is always considered a Critical Success. Furthermore, you never reduce your Movement due to Overage.'
    },
  },
  {
    id: TraitId.SHADOW_BROKER,
    name: 'Shadow Broker',
    labels: {
      description: '',
      effect: 'You can dig up sensitive information on a character who has been listed in a broadsheet (newspaper) or magazine. Using this information, you then gain an Assist Die to interact with them in social situations. You can take advantage of this Trait once a game session.'
    },
  },
  {
    id: TraitId.NIGHT_SIGHT,
    name: 'Night Sight',
    labels: {
      description: '',
      effect: 'You can see in the dark, treating Fleeting Shadows and Total Darkness as if it were Perfect Light.'
    },
  },
  {
    id: TraitId.TRUTH_SHALL_SET_YOU_FREE,
    name: 'Truth Shall Set You Free',
    labels: {
      description: '',
      effect: 'You can determine if someone is lying without making a Skill Test, providing you can clearly see and hear them. In addition, your lies are seen as being truthful by others, unless aided by Spells or by another Lawyer.'
    },
  },
  {
    id: TraitId.WELL_ACTUALLY,
    name: 'Well, Actually...',
    labels: {
      description: '',
      effect: 'Whenever you attempt to determine whether you have heard of someone, a story or other folktale, roll a 1D6 Chaos Die. If the result is face ‘6,’ you immediately recall a factoid about it.'
    },
  },
  {
    id: TraitId.JUDGMENT_IS_HERE,
    name: 'Judgment Is Here',
    labels: {
      description: '',
      effect: 'Whenever you or an ally succeeds at a Skill Test, spend a Coin to turn it into a Critical Success.'
    },
  },
  {
    id: TraitId.A_LIFE_AT_SEA,
    name: 'A Life At Sea',
    labels: {
      description: '',
      effect: 'You may flip the results to succeed at Coordination Tests. When you succeed, it is always considered a Critical Success. In addition, when using the Movement subtype of Swimming, add your Initiative value to the Distance you swim.'
    },
  },
  {
    id: TraitId.GUIDING_LIGHT,
    name: 'Guiding Light',
    labels: {
      description: '',
      effect: 'Whenever an ally fails or Critically Fails a Resolve Test to withstand Stress, Fear or Terror provoked by threats classified as Abyssal or Supernatural, make a Resolve Test. If successful, your ally ignores Stress, Fear and Terror provoked by it, providing they can see and hear you clearly. A Critical Success allows them to gain the benefit above and temporarily adds +3 to their Peril Threshold while in the presence of the threat.'
    },
  },
  {
    id: TraitId.NO_MERE_PHENOMENA,
    name: 'No Mere Phenomena',
    labels: {
      description: '',
      effect: 'You can manipulate physical objects no larger than a book with your mind. This allows you to automatically hit a single foe within 3+[PB], as the foe suffers 1D10+1 Peril. You can also pair this with Skulduggery to make objects disappear and to reappear. Randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. Finally, you can Risk Backlash and Unfetter your Spells (covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.TIP_THE_SCALES,
    name: 'Tip The Scales',
    labels: {
      description: '',
      effect: 'Whenever you fail a Bargain or Guile Test, you may re-roll to generate a better result, but must accept the outcome. In addition, you always succeed at Skill Tests to resell legal wares & weapons.'
    },
  },
  {
    id: TraitId.EASE_THE_PAIN,
    name: 'Ease The Pain',
    labels: {
      description: '',
      effect: 'You know the Alchemical Art of Create Medicine (from Article 9: Hexenmeister’s Almanack), as you learn it as a free Unique Ability. Whenever you successfully Bind Wounds to heal Damage, your patient moves one additional step up the Damage Condition Track positively and an equal number of steps up the Peril Condition Track.'
    },
  },
  {
    id: TraitId.DONT_TREAD_ON_ME,
    name: 'Don’t Tread On Me',
    labels: {
      description: '',
      effect: 'You never Bleed or suffer from Sepsis. Furthermore, you are never rendered Incapacitated! or made Unconscious from Injuries.'
    },
  },
  {
    id: TraitId.ITS_JUST_BUSINESS,
    name: 'It’s Just Business',
    labels: {
      description: '',
      effect: 'Whenever using Skill Tests to interact with those of the same or different Allegiance, you gain an Assist Die.'
    },
  },
  {
    id: TraitId.RISING_ANTHEM,
    name: 'Rising Anthem',
    labels: {
      description: '',
      effect: 'You can attempt a Charm Test to perform with a musical instrument. If successful, a number of characters equal to your [FB] are Inspired (Words As Weapons in Article 7: Combat Encounters) for twenty-four hours. If you Critically Succeed, they also gain an Assist Die to Resist Stress, Fear and Terror. A character may only gain the benefit of this performance once a day, which takes at least an hour of time to perform.'
    },
  },
  {
    id: TraitId.CALL_TO_ARMS,
    name: 'Call To Arms',
    labels: {
      description: '',
      effect: 'Whenever you succeed at using the action in combat Words As Weapons, combatants double the benefits or penalties.'
    },
  },
  {
    id: TraitId.BATTLE_BUDDY,
    name: 'Battle Buddy',
    labels: {
      description: '',
      effect: 'Select one ally as combat begins. You both gain a +10% Base Chance to Defend and cannot be Flanked, providing you are able to clearly see and hear one another.'
    },
  },
  {
    id: TraitId.MOB_RULE,
    name: 'Mob Rule',
    labels: {
      description: '',
      effect: 'Whenever you and your allies face foes 6:1, both you and a number of allies equal to [FB] add 2D6 Fury Die to Total Damage, instead of the normal 1D6.'
    },
  },
  {
    id: TraitId.ART_OF_COMPROMISE,
    name: 'Art Of Compromise',
    labels: {
      description: '',
      effect: 'When using Skill Tests, you do not suffer any additional penalties due to differences in Allegiance.'
    },
  },
  {
    id: TraitId.SCHOLAR_AND_STUDENT,
    name: 'Scholar & Student',
    labels: {
      description: '',
      effect: 'You only need to spend half the RP to buy Skill Ranks. Randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. Finally, you can Risk Backlash and Unfetter your Spells (covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.PASSIVE_KNOWLEDGE,
    name: 'Passive Knowledge',
    labels: {
      description: '',
      effect: 'You always gain access to use a printing press in any settlement you’re in. In addition, you can attempt to fluently communicate in any language you don’t know with a successful Education Test.'
    },
  },
  {
    id: TraitId.FIRE_IN_THE_HOLE,
    name: 'Fire In The Hole',
    labels: {
      description: '',
      effect: 'After you make an Attack Action, immediately make a Counterattack with any one-handed ranged weapon on the same Turn.'
    },
  },
  {
    id: TraitId.KNOWS_YOUR_NAME,
    name: 'Knows Your Name',
    labels: {
      description: '',
      effect: 'You always gain free room and board in any settlement you’re in. In addition, you always succeed at Skill Tests to recall a name, place or piece of information you’ve been told before.'
    },
  },
  {
    id: TraitId.ALWAYS_PREPARED,
    name: 'Always Prepared',
    labels: {
      description: '',
      effect: 'Whenever you need a mundane item in hand valued less than 1 pound (£), you do not have to spend a Coin to edit the situation. You may take advantage of this Trait once a game session. The Historian may impose other limits.'
    },
  },
  {
    id: TraitId.BACK_OF_MY_HAND,
    name: 'Back Of My Hand',
    labels: {
      description: '',
      effect: 'You cannot get lost in the wilderness, and characters who are with you cannot either. You also always succeed at Skill Tests to withstand Peril while traveling.'
    },
  },
  {
    id: TraitId.DEATH_PROOF,
    name: 'Death Proof',
    labels: {
      description: '',
      effect: 'Whenever you are Moderately Wounded, temporarily add +1 to Damage Threshold. Whenever you are Seriously Wounded, temporarily add +2 to Damage Threshold instead. And finally, whenever you are Grievously Wounded, temporarily add +3 to Damage Threshold instead. These benefits do not stack and only count whenever you are in combat.'
    },
  },
  {
    id: TraitId.VERY_SNEAKY,
    name: 'Very Sneaky',
    labels: {
      description: '',
      effect: 'In Perfect Light, add an Assist Die to Stealth Tests. In Fleeing Shadows, you may flip the results to succeed Stealth Tests. In Total Darkness, you automatically Critically Succeed Stealth Tests.'
    },
  },
  {
    id: TraitId.HELLO_TRAVELER,
    name: 'Hello, Traveler',
    labels: {
      description: '',
      effect: 'At your option, you may substitute the Charm Skill in place of Intimidate. In addition, you may substitute Charm in place of any Skill required to Defend against Actions In Combat.'
    },
  },
  {
    id: TraitId.HIDE_IN_PLAIN_SIGHT,
    name: 'Hide In Plain Sight',
    labels: {
      description: '',
      effect: 'When you fail an Eavesdrop or Stealth Test, you may re-roll to generate a better result, but must accept the outcome. In addition, you always succeed at Skill Tests to hide among crowds.'
    },
  },
  {
    id: TraitId.GIVE_YOUR_SIN_UNTO_ME,
    name: 'Give Your Sin Unto Me',
    labels: {
      description: '',
      effect: 'You can spend a Coin to immediately remove a curse or dispel harmful Spell or Spell-like effects that ail another. In addition, you can sacrifice Determination to immediately reduce another character’s Flaw Ranks equal to your [WB]. You must be able to touch the person in order for them to be absolved. Randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. Finally, you can Risk Backlash and Unfetter your Spells (covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.TECHNICAL_MASTERY,
    name: 'Technical Mastery',
    labels: {
      description: '',
      effect: 'Any time you use a Skill Test to create wares & weapons, add one Quality for free.'
    },
  },
  {
    id: TraitId.SPEAK_WITH_SPIRITS,
    name: 'Speak With Spirits',
    labels: {
      description: '',
      effect: 'You can use any Fellowship-based Skill to communicate with Supernatural threats using a spirit board. Randomly determine three Common Spells you learn as free Unique Abilities from the Common Spells Listings table. Finally, you can Risk Backlash and Unfetter your Spells (covered in Article 7: Combat Encounters and Article 9: Hexenmeister’s Almanack).'
    },
  },
  {
    id: TraitId.I_READ_ABOUT_IT_ONCE,
    name: 'I Read About It Once',
    labels: {
      description: '',
      effect: 'At your option, you may substitute the Education Skill in place of Incantation. In addition, you may substitute Education in place of any Skill required to Resist against Spells.'
    },
  },
  {
    id: TraitId.LAND_READER,
    name: 'Land Reader',
    labels: {
      description: '',
      effect: 'You always Critically Succeed Skill Tests to find the three basic needs: food, water and shelter.'
    },
  },
  {
    id: TraitId.RURAL_STALKER,
    name: 'Rural Stalker',
    labels: {
      description: '',
      effect: 'You automatically succeed at all Skill Tests to sneak in rural areas, unless you give yourself away by running through them or making loud noises. In addition, whenever you hide in rural environments during a Combat Encounter, it only costs 1 AP.'
    },
  },
  {
    id: TraitId.RESPECT_THE_DRIP,
    name: 'Respect The Drip',
    labels: {
      description: '',
      effect: 'When you fail a Charm or Eavesdrop Test, you may re-roll to generate a better result, but must accept the outcome. In addition, you always succeed at Skill Tests to accurately estimate Distances.'
    },
  },
  {
    id: TraitId.EYES_IN_THE_BACK_OF_MY_HEAD,
    name: 'Eyes In The Back Of My Head',
    labels: {
      description: '',
      effect: 'Whenever you fail a Bargain or Scrutinize Test, you may re-roll to generate a better result, but must accept the outcome. In addition, you always succeed at Skill Tests to demand debt owed to you or another character.'
    },
  },
  {
    id: TraitId.WELL_READ,
    name: 'Well-Read',
    labels: {
      description: '',
      effect: 'You only need to spend 25 RP to buy Unique Abilities (instead of the normal 100).'
    },
  },
  {
    id: TraitId.A_SIMPLE_LIFE,
    name: 'A Simple Life',
    labels: {
      description: '',
      effect: 'Whenever you succeed in a Fellowship-based Skill Test in urban areas, you can ask for the Historian to give you an important rumor from your investigations you may not have already thought of or overlooked. This benefit cannot be gained more than once a game session.'
    },
  },
  {
    id: TraitId.DONT_SHOOT_THE_MESSENGER,
    name: 'Don’t Shoot The Messenger',
    labels: {
      description: '',
      effect: 'You may flip the results to succeed at Skill Tests to Defend against ranged weapons and other Distance- based attacks.'
    },
  },
  {
    id: TraitId.IN_TUNE_WITH_NATURE,
    name: 'In Tune With Nature',
    labels: {
      description: 'My time in the wild has put me in touch with the rhythm of the natural world—almost to a supernatural degree.',
      effect: 'You cannot be Surprised by enemies in rural areas.'
    },
  },
  {
    id: TraitId.POLYGLOT,
    name: 'Polyglot',
    labels: {
      description: '',
      effect: 'You can read and write every language, despite your [FB].'
    },
  },
  {
    id: TraitId.FLUID_ALLEGIANCE,
    name: 'Fluid Allegiance',
    labels: {
      description: '',
      effect: 'You do not have to make Skill Tests to masquerade as someone of a different Allegiance, fitting in without fail.'
    },
  },
  {
    id: TraitId.VAGRANT_STORY,
    name: 'Vagrant Story',
    labels: {
      description: '',
      effect: 'When you fail a Folklore or Navigation Test, you may re-roll to generate a better result, but must accept the outcome.'
    },
  },
  {
    id: TraitId.THREADS_OF_FATE,
    name: 'Threads Of Fate',
    labels: {
      description: '',
      effect: 'Whenever a game session begins, roll 3D6 Chaos Dice. For every die that lands on face ‘6,’ place an additional Coin into your respective pool. Whenever they are spent, they are immediately discarded for the rest of the game session.'
    },
  },
  {
    id: TraitId.BLOOD_AND_THUNDER,
    name: 'Blood & Thunder',
    labels: {
      description: '',
      effect: 'Threats who are Large Sized or Huge Sized only reference 1D6 Fury Die due to their Size to deal Damage to you (as opposed to their normal number of Fury Dice).'
    },
  },
  {
    id: TraitId.MASTER_BUILDER,
    name: 'Master Builder',
    labels: {
      description: '',
      effect: 'You always Critically Succeed Tradecraft Skill Tests to create objects larger than an oxen.'
    },
  },
  {
    id: TraitId.WELL_PUBLISHED,
    name: 'Well-published',
    labels: {
      description: '',
      effect: 'When strangers recognize you by your real name or by your works, you treat all successful social Skill Tests as a Critical Success.'
    },
  }
];
