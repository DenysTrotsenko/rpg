import {ThreatTrait} from './models';
import {ThreatTraitId} from './enums';

export const THREAT_TRAITS: ThreatTrait[] = [
  {
    id: ThreatTraitId.CONSTRICTOR,
    name: 'Constrictor',
    labels: {
      effect: 'Whenever you deal Peril on a foe using a Chokehold, you also deal an equal amount of Damage.'
    }
  },
  {
    id: ThreatTraitId.CRUSHING,
    name: 'Crushing',
    labels: {
      effect: 'Whenever a foe successfully Defends your attack, spend one Coin to negate it.'
    }
  },
  {
    id: ThreatTraitId.DARK_SENSE,
    name: 'Dark Sense',
    labels: {
      effect: 'You can see in the dark, treating it as Perfect Light.'
    }
  },
  {
    id: ThreatTraitId.LETHARGY,
    name: 'Lethargy',
    labels: {
      effect: 'Whenever you roll Initiative, roll a 1D6 instead of the normal 1D10.'
    }
  },
  {
    id: ThreatTraitId.SNEAKY,
    name: 'Sneaky',
    labels: {
      effect: 'You flip the results to succeed at Stealth and Survival Tests.'
    }
  },
  {
    id: ThreatTraitId.SWIFT,
    name: 'Swift',
    labels: {
      effect: 'Your Movement has factored in 1+[BB] to (Climb), 3+[BB] to (Swim), 6+[AB] on foot or 9+[AB] to (Fly).'
    }
  },
  {
    id: ThreatTraitId.BRAWNY,
    name: 'Brawny',
    quantifiable: true,
    labels: {
      effect: 'Your Brawn has factored in the value in parenthesis.'
    }
  },
  {
    id: ThreatTraitId.DUSK_TO_DAWN,
    name: 'Dusk To Dawn',
    quantifiable: true,
    labels: {
      effect: 'At dawn, you turn to the form indicated in parenthesis. While in this state, you cannot inflict nor suffer Damage, unless by magical means. At dusk, you return to your normal form.'
    }
  },
  {
    id: ThreatTraitId.HORRIFIC,
    name: 'Horrific',
    labels: {
      effect: 'Whenever combat begins, spend one Coin to force all foes who can see you to Resist using Resolve or else they suffer from Stress if you are Basic RFa, Fear if Intermediate RFa or Terror if Advanced or Elite RFa. However, if you are an Abyssal or Supernatural threat and the person Critically Fails their Skill Test, they gain an Affliction.'
    }
  },
  {
    id: ThreatTraitId.LIGHT_SENSITIVITY,
    name: 'Light Sensitivity',
    quantifiable: true,
    labels: {
      effect: 'When exposed to Perfect Light, reduce your Damage & Peril Thresholds by the value in parenthesis.'
    }
  },
  {
    id: ThreatTraitId.IMMUNITY,
    name: 'Immunity',
    specifiable: true,
    labels: {
      effect: 'You are immune to the effects in parenthesis.'
    }
  },
  {
    id: ThreatTraitId.LANTERN,
    name: 'Lantern',
    labels: {
      effect: 'When you deal Damage with this weapon, the foe does not suffer standard Injuries. Roll Chaos Dice as you normally would for Injuries, but if any land on face ‘6,’ they are On Fire.'
    }
  },
  {
    id: ThreatTraitId.LAY_TO_REST,
    name: 'Lay To Rest',
    specifiable: true,
    labels: {
      effect: 'Every hour, you move one step up the Damage Condition Track positively. Should the object in parenthesis be destroyed, properly buried or the situation that turned them into a threat be avenged (Historian’s choice), you are Slain!, returning to the spirit realm forever.'
    }
  },
  {
    id: ThreatTraitId.PARALYSIS,
    name: 'Paralysis',
    labels: {
      effect: 'Whenever you deal Damage to a foe, they must successfully Resist with Toughness or be Paralyzed. While Paralyzed, foes are unable to use Movement Actions until combat ends.'
    }
  },
  {
    id: ThreatTraitId.SPIRIT_SIGHT,
    name: 'Spirit Sight',
    labels: {
      effect: 'You can automatically spot foes who are hidden or Insubstantial. You can also see in the dark, treating it as Perfect Light.'
    }
  },
  {
    id: ThreatTraitId.BRAINS_OVER_BRAWN,
    name: 'Brains Over Brawn',
    labels: {
      effect: 'You may alternatively use [WB] in place of [BB] when calculating your Damage Threshold.'
    }
  },
  {
    id: ThreatTraitId.JUDGMENT_IS_HERE,
    name: 'Judgement Is Here',
    labels: {
      effect: 'Whenever you or an ally succeeds at a Skill Test, spend a Coin to turn it into a Critical Success.'
    }
  },
  {
    id: ThreatTraitId.SMOOTH_TALKER,
    name: 'Smooth Talker',
    labels: {
      effect: 'When you attempt to persuade those of Allegiances other than your own, you gain a +20% Base Chance to Charm Tests.'
    }
  },
  {
    id: ThreatTraitId.TALK_LESS_SMILE_MORE,
    name: 'Talk Less, Smile More',
    labels: {
      effect: 'When you attempt to peacefully negotiate, you gain a +10% Base Chance to Skill Tests.'
    }
  },
  {
    id: ThreatTraitId.TRUTH_SHALL_SET_YOU_FREE,
    name: 'Truth Shall Set You Free',
    labels: {
      effect: 'You can determine if someone is lying without making a Skill Test, providing you can clearly see and hear them. In addition, your lies are seen as being truthful by others, unless aided by Magic or by another Lawyer.'
    }
  },
  {
    id: ThreatTraitId.STENCH,
    name: 'Stench',
    labels: {
      effect: 'Whenever a foe starts their Turn Engaged with you, they must successfully Resist with Toughness or suffer 1D10+1 Peril.'
    }
  },
  {
    id: ThreatTraitId.PACK_TACTICS,
    name: 'Pack Tactics',
    labels: {
      effect: 'When three or more of your kind are alive in combat, flip the result to succeed at all Combat-based and Agility-based Skill Tests.'
    }
  },
  {
    id: ThreatTraitId.ASSAIL,
    name: 'Assail',
    labels: {
      effect: 'Whenever you Charge, flip the results to succeed at the next Attack Action or Rough & Tumble you make (unless it is Spell-related).'
    }
  },
  {
    id: ThreatTraitId.BRUTAL,
    name: 'Brutal',
    labels: {
      effect: 'When you inflict an Injury, you inflict two Injuries instead.'
    }
  },
  {
    id: ThreatTraitId.CHOSEN,
    name: 'Chosen',
    labels: {
      effect: 'One foe is left Defenseless to all your Attack Actions and Rough & Tumble. Once it is defeated, select a new foe.'
    }
  },
  {
    id: ThreatTraitId.FIERCE,
    name: 'Fierce',
    labels: {
      effect: 'Whenever you are Seriously or Grievously Wounded, add 1D6 Fury Die to Damage. You cannot Defend during this time and automatically Resist against effects which target your mind.'
    }
  },
  {
    id: ThreatTraitId.HYPERSENSITIVITY,
    name: 'Hypersensitivity',
    labels: {
      effect: 'You roll 2D10 to determine Initiative, instead of the normal 1D10.'
    }
  },
  {
    id: ThreatTraitId.SECOND_WIND,
    name: 'Second Wind',
    labels: {
      effect: 'Spend one Coin to automatically restore your Damage & Peril Condition Tracks by one step positively once a day.'
    }
  },
  {
    id: ThreatTraitId.THICK_HIDE,
    name: 'Thick Hide',
    quantifiable: true,
    labels: {
      effect: 'Your Damage Threshold has factored in the value in parenthesis. You also reduce Peril & Damage from fire you suffer by the same value.'
    }
  },
  {
    id: ThreatTraitId.PLANAR_ALIGNMENT,
    name: 'Planar Alignment',
    labels: {
      effect: 'Whenever you Risk Backlash, reduce the number of Chaos Dice you roll (to a minimum of one die).'
    }
  },
  {
    id: ThreatTraitId.POKER_FACE,
    name: 'Poker Face',
    labels: {
      effect: 'Your Allegiance cannot be discovered unless you tell someone, and you cannot be made the target of the Scrutinize Skill to discover your Allegiance.'
    }
  },
  {
    id: ThreatTraitId.WITCHS_MARK,
    name: 'Witch\'s Mark',
    labels: {
      effect: 'Whenever you fail or Critically Fail an Incantation Test, you may turn it into a Critical Success. You move one step down the Peril Condition Track negatively as a result.'
    }
  },
  {
    id: ThreatTraitId.FLIGHTLESS,
    name: 'Flightless',
    labels: {
      effect: 'Whenever you are Grievously Wounded, suffering from an Injury or Bleeding, you cannot fly.'
    }
  },
  {
    id: ThreatTraitId.MINDLESS,
    name: 'Mindless',
    labels: {
      effect: 'Your Intelligence, Willpower and Fellowship are 0%, and automatically Resist against effects that target you. You also can see in the dark, treating it as Perfect Light.'
    }
  },
  {
    id: ThreatTraitId.AILMENT,
    name: 'Ailment',
    labels: {
      effect: 'When you inflict Injuries, the foe suffers from the Ailment in parenthesis.'
    }
  },
  {
    id: ThreatTraitId.IMMOBILE,
    name: 'Immobile',
    labels: {
      effect: 'You cannot move or use Movement Actions in combat.'
    }
  },
  {
    id: ThreatTraitId.INESCAPABLE,
    name: 'Inescapable',
    labels: {
      effect: 'You can maintain a Chokehold for 0 AP and take other actions during this time.'
    }
  },
  {
    id: ThreatTraitId.SWALLOW,
    name: 'Swallow',
    labels: {
      effect: 'Whenever a foe is Choked, they suffer 2D10+2 Peril instead. Whenever they Resist, they must flip the results to fail. Once a foe is Incapacitated!, they are also Slain!.'
    }
  },
  {
    id: ThreatTraitId.SWARM,
    name: 'Swarm',
    labels: {
      effect: 'You never provoke Counterattacks and never cause Damage or Peril to your allies.'
    }
  },
  {
    id: ThreatTraitId.WEAKNESS,
    name: 'Weakness',
    specifiable: true,
    labels: {
      effect: 'Whenever you are exposed to the weakness in parenthesis, you suffer an additional 1D6 Fury Die to Damage.'
    }
  },
  {
    id: ThreatTraitId.DRAIN,
    name: 'Drain',
    labels: {
      effect: 'Whenever you deal Damage to a foe, they must successfully Resist with Resolve or permanently lose -3% to the Primary Attribute in parenthesis.'
    }
  },
  {
    id: ThreatTraitId.LEAPER,
    name: 'Leaper',
    labels: {
      effect: 'On the same Turn after Charging or Running, you may jump horizontally or vertically up to your [BB] in yards.'
    }
  },
  {
    id: ThreatTraitId.LIGHT_FOOTED,
    name: 'Light-Footed',
    labels: {
      effect: 'You reduce Movement Actions by 1 (to a minimum of 1).'
    }
  },
  {
    id: ThreatTraitId.BATTLE_BUDDY,
    name: 'Battle Buddy',
    labels: {
      effect: 'Select one ally whenever combat starts. You both gain a +10% Base Chance to Defend and cannot be Flanked, providing you are able to clearly see and hear one another.'
    }
  },
  {
    id: ThreatTraitId.HEAT,
    name: 'Heat',
    labels: {
      effect: 'Whenever you deal Damage to a foe, they must successfully Resist with Coordination or suffer 1D10+1 Damage from fire.'
    }
  },
  {
    id: ThreatTraitId.INFERNAL,
    name: 'Infernal',
    labels: {
      effect: 'Whenever you deal Damage, your foes must successfully Resist with Toughness or else gain 1 Conflict if you are Basic RFa, 2 Conflict if you are Intermediate RFa or 3 Conflict if you are Advanced or Elite RFa.'
    }
  },
  {
    id: ThreatTraitId.SHAPESHIFT,
    name: 'Shapeshift',
    specifiable: true,
    labels: {
      effect: 'You and your belongings can Shapeshift into the alternative form in parenthesis at any time (or by spending 2 AP in combat). Once in this form, you gain its Traits, immediately move three steps up the Damage & Peril Condition Tracks positively, but cannot Shapeshift again for twenty-four hours.'
    }
  },
  {
    id: ThreatTraitId.POLAR_STAR,
    name: 'Polar Star',
    labels: {
      effect: 'When you can see the stars, you gain a +20% Base Chance to Navigation Tests. In addition, you always know how to find true north, even during inclement weather.'
    }
  },
  {
    id: ThreatTraitId.RURAL_STALKER,
    name: 'Rural Stalker',
    labels: {
      effect: 'You automatically succeed at all Skill Tests to sneak in rural areas, unless you give yourself away by running through them or making loud noises. In addition, whenever you hide in rural environments during a Combat Encounter, it only costs 1 AP.'
    }
  },
  {
    id: ThreatTraitId.TAKE_A_GANDER,
    name: 'Take A Gander',
    labels: {
      effect: 'Ignore the effects of Concealment & Weather conditions for purposes of using ranged weapons.'
    }
  },
  {
    id: ThreatTraitId.DIAMOND_IN_THE_ROUGH,
    name: 'Diamond In The Rough',
    labels: {
      effect: 'Immediately after you suffer Damage from a melee or ranged weapon, spend a Coin to ignore it.'
    }
  },
  {
    id: ThreatTraitId.LINEAR_TACTICS,
    name: 'Linear Tactics',
    labels: {
      effect: 'Whenever you deal Damage to a foe with a ranged weapon, immediately switch places with an Engaged ally.'
    }
  },
  {
    id: ThreatTraitId.AT_A_DISTANCE,
    name: 'At A Distance',
    labels: {
      effect: 'By spending 3 Action Points, you can Inject Quicksilver, Inject Tincture, Use Laudanum or Use Smelling salts at a Distance of 3+[BB].This is mostly relevant to the action of First Aid, but can also be used outside of combat in other narrative situations.'
    }
  },
  {
    id: ThreatTraitId.DANGER_SENSE,
    name: 'Danger Sense',
    labels: {
      effect: 'Whenever you are Surprised, you are not Defenseless. In addition, permanently add +1 to your Initiative.'
    }
  },
  {
    id: ThreatTraitId.FORLORN_HOPE,
    name: 'Forlorn Hope',
    labels: {
      effect: 'You may flip the results to succeed at Warfare Tests. When you succeed, it is considered a Critical Success. In addition, add 1D6 Fury Die to Damage with any weapon with the Bomb Quality.'
    }
  },
  {
    id: ThreatTraitId.METTLE,
    name: 'Mettle',
    labels: {
      effect: 'Whenever you suffer Peril from mental activities, reduce your Peril Condition Track by one less step negatively.'
    }
  },
  {
    id: ThreatTraitId.NO_MERE_PHENOMENA,
    name: 'No Mere Phenomena',
    labels: {
      effect: 'You can manipulate physical objects no larger than a book with your mind.This allows you to automatically hit a single foe within 3+[PB], as the foe suffers 1D10+1Peril.YoucanalsopairthiswithSkulduggerytomake objects disappear and to reappear. Randomly determine three Common Magic Spells from Article 3: Professions Pamphlet. Finally, you can Risk Backlash and Unfetter your Spells.'
    }
  },
  {
    id: ThreatTraitId.IRONCLAD,
    name: 'Ironclad',
    labels: {
      effect: 'Foes must roll two face ‘6’s on Chaos Dice to Injure you. This also means you no longer suffer Moderate Injuries.'
    }
  },
  {
    id: ThreatTraitId.RICOCHET,
    name: 'Ricochet',
    labels: {
      effect: 'Whenever a foe is Slain! from an attack you’ve made with a ranged weapon, spend one Coin to inflict the same amount of Total Damage against a foe who is within 3 yards of them.'
    }
  },
  {
    id: ThreatTraitId.WHITES_OF_THEIR_EYES,
    name: 'Whites Of Their Eyes',
    labels: {
      effect: 'Whenever foes gain the benefit of Low Cover, you ignore it for purposes of hitting and dealing Damage.'
    }
  },
  {
    id: ThreatTraitId.EBB_AND_FLOW,
    name: 'Ebb & Flow',
    labels: {
      effect: 'Whenever a Coin is spent, automatically cancel its usage. You can call upon this ability once a game session.'
    }
  },
  {
    id: ThreatTraitId.IN_TUNE_WITH_THE_AETHER,
    name: 'In Tune With The Aether',
    labels: {
      effect: 'When you hold an amulet and Risk Backlash, you must roll two or more face ‘6’s on Chaos Dice to trigger it. Randomly determine three Common Magic Spells from Article 3: Professions Pamphlet. Finally, you can Risk Backlash and Unfetter your Spells.'
    }
  },
  {
    id: ThreatTraitId.TENACITY,
    name: 'Tenacity',
    labels: {
      effect: 'Permanently add +6% to your Willpower.'
    }
  },
  {
    id: ThreatTraitId.POISONOUS,
    name: 'Poisonous',
    labels: {
      effect: 'When you deal Damage, roll 1D6 Chaos Die. If the result is face ‘1–5,’ your foe suffers 2D10+2 Peril. If the result is face ‘6,’ your foe immediately begins to Suffocate. Only an antidote can save them from Suffocation.'
    }
  },
  {
    id: ThreatTraitId.SLOUGH_OFF,
    name: 'Slough Off',
    labels: {
      effect: 'When you are made to Bleed, suffer an Injury or would be Slain!, you immediately Shapeshift back into your Ghoul form.'
    }
  },
  {
    id: ThreatTraitId.HARDY,
    name: 'Hardy',
    labels: {
      effect: 'You cannot be knocked Unconscious or reduce your AP due to a Combat Condition.'
    }
  },
  {
    id: ThreatTraitId.HAUNTING,
    name: 'Haunting',
    labels: {
      effect: 'Spend one Coin to conjure an illusion (e.g., bleeding walls, phantom footsteps, rattling chains). Your foes must successfully Resist using a Secret Test with Scrutinize or else suffer from Stress if you are Basic RFa, Fear if you are Intermediate RFa or Terror if you are Advanced or Elite RFa. The illusion lasts for an hour.'
    }
  },
  {
    id: ThreatTraitId.INSUBSTANTIAL,
    name: 'Insubstantial',
    labels: {
      effect: 'You are Insubstantial. While Insubstantial, you can freely move through physical objects, but cannot inflict nor suffer Damage, unless by magical means.'
    }
  },
  {
    id: ThreatTraitId.MATERIALIZE,
    name: 'Materialize',
    labels: {
      effect: 'You can physically Materialize or become Insubstantial any time (or by spending 2 AP in combat). While Materialized, you can cause Damage to foes. If you don’t cause Damage each minute you are Materialized, you move one step down the Peril Condition Track negatively. Once Incapacitated!, you are banished to the spirit realm for twenty-four hours.'
    }
  },
  {
    id: ThreatTraitId.CAPTIVATION,
    name: 'Captivation',
    labels: {
      effect: 'When at a Distance from a foe, make a Charm Test. After successfully rolling (and the foe cannot or fails to Resist using Resolve), they are Captivated. While Captivated, a foe must move to become Engaged with you. Once they are Engaged, they are no longer Captivated. Foes can only be Captivated once every twenty-four hours.'
    }
  },
  {
    id: ThreatTraitId.SHIFT,
    name: 'Shift',
    labels: {
      effect: 'Spend one Coin to teleport 3 yards in any direction as a Reaction.'
    }
  },
  {
    id: ThreatTraitId.TAINT,
    name: 'Taint',
    labels: {
      effect: 'You cannot be harmed by normal weapons unless imbued with magic. Whenever you begin combat, foes who can clearly see you must successfully Resist with Awareness or treat Distances as if it were Fleeting Shadows until the end of combat.'
    }
  },
  {
    id: ThreatTraitId.DEAD_HANDS,
    name: 'Dead Hands',
    labels: {
      effect: 'You ignore any Damage Threshold Modifier a foe’s Determination confers.'
    }
  },
  {
    id: ThreatTraitId.MIRRORED_IMAGE,
    name: 'Mirrored Image',
    labels: {
      effect: 'Spend one Coin to create one perfect illusion of yourself, as it mimics your precise actions. Whenever a foe attacks you, they must succeed at a Scrutinize Test after dealing Damage. If they fail, they hit the image instead. Once you are Grievously Wounded, the illusion is destroyed.'
    }
  },
  {
    id: ThreatTraitId.MIMICRY,
    name: 'Mimicry',
    labels: {
      effect: 'When imitating the calls of threats classified as Animals and Beasts, you gain a +20% Base Chance to Disguise Tests (even when making calls in Languages other than your own).'
    }
  },
  {
    id: ThreatTraitId.NIMBLE_FINGERS,
    name: 'Nimble Fingers',
    labels: {
      effect: 'Reduce the Load value of all ranged weapons with the Blackpowder Quality by -1 Action Point (to a minimum of 1 Action Point).'
    }
  },
  {
    id: ThreatTraitId.WHAT_I_DO_IN_SHADOWS,
    name: 'What I Do In Shadows',
    labels: {
      effect: 'When you fail an Skulduggery or Stealth Test, you may re-roll to generate a better result, but must accept the outcome. In addition, you always succeed at Skill Tests to disable locks.'
    }
  },
  {
    id: ThreatTraitId.BEAR_GARDEN_JAW,
    name: 'Bear-Garden Jaw',
    labels: {
      effect: 'When you succeed at Skill Test meant to ridicule or taunt someone, they suffer 1D10+1 Peril.'
    }
  },
  {
    id: ThreatTraitId.CALL_TO_ARMS,
    name: 'Call To Arms',
    labels: {
      effect: 'Whenever you succeed at using the action in combat Words As Weapons, combatants double the benefits or penalties.'
    }
  },
  {
    id: ThreatTraitId.THE_THIRD_DEGREE,
    name: 'The Third Degree',
    labels: {
      effect: 'When you Injure a foe with a weapon, you inflict two Injuries instead of one.'
    }
  },
  {
    id: ThreatTraitId.BURN_BRIGHT,
    name: 'Burn Bright',
    labels: {
      effect: 'Whenever you are holding a source of light, you and your allies treat Fleeting Shadows as if they were Perfect Light. If doing so in combat, you must spend 1 Action Point every Turn to maintain this effect.'
    }
  },
  {
    id: ThreatTraitId.JADED,
    name: 'Jaded',
    labels: {
      effect: 'When suffering Peril from Stress, Fear or Terror, reduce it by your [FB].'
    }
  },
  {
    id: ThreatTraitId.CHASE_THE_PAIN,
    name: 'Chase The Pain',
    labels: {
      effect: 'Whenever you are Hurt, add +1 to Total Damage. If Moderately Wounded, add +2. If Seriously Wounded, add +3, and if Grievously Wounded, add +4 to Total Damage. You must be using a melee weapon to take advantage of this Talent.'
    }
  },
  {
    id: ThreatTraitId.FIND_THE_HIDDEN_WORD,
    name: 'Find The Hidden Word',
    labels: {
      effect: 'Whenever you bear a symbol of faith in hand, add +1 to your Damage & Peril Thresholds. Randomly determine three Common Magic Spells from Article 3: Professions Pamphlet. Finally, you can Risk Backlash and Unfetter your Spells.'
    }
  },
  {
    id: ThreatTraitId.GUT_INSTINCT,
    name: 'Gut Instinct',
    labels: {
      effect: 'You may alternatively use [BB] in place of [WB] when calculating your Peril Threshold.'
    }
  },
  {
    id: ThreatTraitId.MANNA_OF_GOD,
    name: 'Manna Of God',
    labels: {
      effect: 'Spend one Coin to automatically restore your Damage & Peril Condition Tracks by one step positively once a day.'
    }
  },
  {
    id: ThreatTraitId.STALWART,
    name: 'Stalwart',
    labels: {
      effect: 'Permanently add +6% to your Brawn.'
    }
  },
  {
    id: ThreatTraitId.AT_EASE_MY_FRIEND,
    name: 'At Ease My Friend',
    labels: {
      effect: 'You ignore Peril Condition penalties associated with Skill Tests to heal people. In addition, whenever you Bind Wounds, the person is also restored an equal number of steps up the Peril Condition Track positively.'
    }
  },
  {
    id: ThreatTraitId.STEADFAST,
    name: 'Steadfast',
    labels: {
      effect: 'Whenever you suffer Peril from physical activities, reduce your Peril Condition Track by one less step negatively.'
    }
  },
  {
    id: ThreatTraitId.PHENOMENA,
    name: 'Phenomena',
    labels: {
      effect: 'You can manipulate physical objects no larger than a book with your mind. This allows you to automatically hit a single foe within 3+[PB], as the foe suffers 1D10+1 Peril and shove the foe away from you 1 yard. You can also pair this with Skulduggery to make objects disappear and to reappear.'
    }
  },
  {
    id: ThreatTraitId.SWIMMER,
    name: 'Swimmer',
    labels: {
      effect: 'You can only swim and can breathe underwater.'
    }
  },
  {
    id: ThreatTraitId.PUGILISM,
    name: 'Pugilism',
    labels: {
      effect: 'Whenever your Brawl misses or is Resisted, immediately Brawl again for 0 Action Points. You can only take advantage of this once a Round.'
    }
  },
  {
    id: ThreatTraitId.ROUGH_WORK,
    name: 'Rough Work',
    labels: {
      effect: 'You may flip the results to succeed at Toughness Tests. When you succeed, it is always considered a Critical Success. Furthermore, you never reduce your Movement due to Overage.'
    }
  },
  {
    id: ThreatTraitId.VAMPIRIC_TEETH,
    name: 'Vampiric Teeth',
    labels: {
      effect: 'When you deal Damage, the foe begins to Bleed.'
    }
  },
  {
    id: ThreatTraitId.LYCANTHROPIC,
    name: 'Lycanthropic',
    labels: {
      effect: 'Under a full moon, you cannot Shapeshift. If you are already Shapeshifted during a full moon, you revert back to a Lycanthrope.'
    }
  },
  {
    id: ThreatTraitId.IMPREGNABLE,
    name: 'Impregnable',
    labels: {
      effect: 'Foes do not gain an advantage when they flank or outnumber you.'
    }
  },
  {
    id: ThreatTraitId.LAST_HURRAH,
    name: 'Last Hurrah',
    labels: {
      effect: 'Whenever you are Grievously Wounded, add +3 to Damage Threshold.'
    }
  },
  {
    id: ThreatTraitId.AMBUSH_TACTICS,
    name: 'Ambush Tactics',
    labels: {
      effect: 'Whenever you deal Damage, spend a Coin to immediately hide or to remain hidden (thereby gaining Surprise on your next Turn).'
    }
  },
  {
    id: ThreatTraitId.ARMED_TO_THE_TEETH,
    name: 'Armed To The Teeth',
    labels: {
      effect: 'Add both the Punishing and Vicious Qualities to any melee weapons you wield.'
    }
  },
  {
    id: ThreatTraitId.CLOSE_SHAVE,
    name: 'Close Shave',
    labels: {
      effect: 'Whenever you would suffer a Moderate Injury, spend one Coin to ignore it. When suffering a Serious Injury, spend two Coins or when suffering a Grievous Injury, spend three Coins to ignore it.'
    }
  },
  {
    id: ThreatTraitId.NO_ILLUSIONS,
    name: 'No Illusions',
    labels: {
      effect: 'You are immune to mind control and can see through illusions.'
    }
  },
  {
    id: ThreatTraitId.TWIST_OF_FATE,
    name: 'Twist Of Fate',
    labels: {
      effect: 'Whenever you spend a Coin, roll a 1D6 Chaos Die. If the result is face ‘6,’ it doesn’t convert to the other pool.'
    }
  },
  {
    id: ThreatTraitId.FRIENDLY_FIRE,
    name: 'Friendly Fire',
    labels: {
      effect: 'Provided you can clearly see and hear, you never suffer penalties to use ranged weapons when firing at foes who are Engaged with allies.'
    }
  },
  {
    id: ThreatTraitId.DEVIL_IN_THE_SADDLE,
    name: 'Devil In The Saddle',
    labels: {
      effect: 'Every time you inflict Damage on horseback using Actions In Combat, temporarily increase your Total Damage by +1 cumulatively, lasting until you are Slain! or combat ends.'
    }
  },
  {
    id: ThreatTraitId.OFF_THE_BRIDLE,
    name: 'Off The Bridle',
    labels: {
      effect: 'When riding a horse in combat, add +3 Movement. You can also Get Up in the saddle for 0 Action Points.'
    }
  },
  {
    id: ThreatTraitId.SCARS_OF_WAR,
    name: 'Scars Of War',
    labels: {
      effect: 'You never Bleed or suffer from Sepsis. Furthermore, you are never rendered Incapacitated! or made Unconscious from Injuries.'
    }
  },
  {
    id: ThreatTraitId.ACIDITY,
    name: 'Acidity',
    labels: {
      effect: 'Whenever a foe deals Damage to you with a melee weapon, they must successfully Resist with a Coordination Test, or else their weapon is Ruined.'
    }
  },
  {
    id: ThreatTraitId.MAKE_A_BEELINE,
    name: 'Make A Beeline',
    labels: {
      effect: 'Whenever you Charge, add +3 to your Damage Threshold until the beginning of your next Turn. When you Run, add +6 instead. This does not stack with the action of Take Cover in combat.'
    }
  },
  {
    id: ThreatTraitId.MILITARISTIC,
    name: 'Militaristic',
    labels: {
      effect: 'Permanently add +6% to your Combat.'
    }
  },
  {
    id: ThreatTraitId.REBEL_YELL,
    name: 'Rebel Yell',
    labels: {
      effect: 'When you attempt to incite violence, you gain a +10% Base Chance to Skill Tests.'
    }
  },
  {
    id: ThreatTraitId.RETURNER,
    name: 'Returner',
    labels: {
      effect: 'Whenever you render someone Slain!, you immediately move your spirit into their body. You are restored to Unharmed and Unhindered.'
    }
  },
  {
    id: ThreatTraitId.ITS_OWN_REWARD,
    name: 'Its Own Reward',
    labels: {
      effect: 'You never suffer Peril as a result of failed or Critically Failed Toughness Tests.'
    }
  },
  {
    id: ThreatTraitId.FLEECE_THE_SHEEP,
    name: 'Fleece The Sheep',
    labels: {
      effect: 'When picking pockets, you gain a +20% Base Chance to Skulduggery Tests.'
    }
  },
  {
    id: ThreatTraitId.NOM_DE_GUERRE,
    name: 'Nom De Guerre',
    labels: {
      effect: 'You now have a secret identity. It requires no Skill Tests to live and to interact as that identity among those who know you by the secret identity. However, when interacting with strangers who may know you outside your secret identity, you must succeed a Disguise Test or else be discovered.'
    }
  },
  {
    id: ThreatTraitId.EYES_IN_THE_BACK_OF_MY_HEAD,
    name: 'Eyes In The Back Of My Head',
    labels: {
      effect: 'Whenever you fail a Bargain or Scrutinize Test, you may re-roll to generate a better result, but must accept the outcome. In addition, you always succeed at Skill Tests to demand debt owed to you or another character.'
    }
  },
  {
    id: ThreatTraitId.FOSTERING_COMMUNITY,
    name: 'Fostering Community',
    labels: {
      effect: 'Whenever using social-based Skill Tests, gain two Assist Dice, using the best of all the results you roll.'
    }
  },
  {
    id: ThreatTraitId.TIP_THE_SCALES,
    name: 'Tip The Scales',
    labels: {
      effect: 'Whenever you fail a Bargain or Guile Test, you may re-roll to generate a better result, but must accept the outcome. In addition, you always succeed at Skill Tests to resell legal wares & weapons.'
    }
  },
  {
    id: ThreatTraitId.VAMPYRE,
    name: 'Vampyre',
    labels: {
      effect: 'You cannot cross running water on foot. Whenever you are exposed to sunlight, you suffer 2D10+2 Damage from fire each minute. Whenever you are Slain!, you immediately turn into mist.While in mist form,you can freely move through physical objects but cannot inflict nor suffer Damage. After an hour has passed, you re-materialize to your Vampyre form, and are restored to Grievously Wounded.'
    }
  },
  {
    id: ThreatTraitId.SIREN_SONG,
    name: 'Siren Song',
    labels: {
      effect: 'When at a Distance from a foe, make a Charm Test. After successfully rolling (and the foe cannot or fails to Resist using Resolve), they are Captivated. While Captivated, a foe must move to become Engaged with you. Once they are Engaged, they are no longer Captivated. Foes can only be Captivated once every twenty-four hours.'
    }
  },
  {
    id: ThreatTraitId.WE_ARE_THE_LIGHT,
    name: 'We Are The Light',
    labels: {
      effect: 'Join hands with up to two allies, and all of you make an Incantation or Resolve Test to Bind Wounds. For every successful Skill Test, the person is restored one additional step up the Damage Condition Track positively.'
    }
  },
  // {
  //   id: ThreatTraitId.CONSTRICTOR,
  //   name: '',
  //   labels: {
  //     effect: ''
  //   }
  // },
];
