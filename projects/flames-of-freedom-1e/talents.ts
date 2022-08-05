import {Talent} from './models';
import {TalentId} from './enums';

export const TALENTS: Talent[] = [
  {
    id: TalentId.AMBIDEXTERITY,
    name: 'Ambidexterity',
    labels: {
      description: '',
      effect: 'You never suffer penalties when using tools or weapons in either hand. If you ever suffer an Injury where you cannot use your primary hand, you do not suffer penalties when using your off-hand.'
    }
  },
  {
    id: TalentId.ANIMALISTIC,
    name: 'Animalistic',
    labels: {
      description: '',
      effect: 'Whenever you roll Chaos Dice to determine whether you inflict an Injury, add 1D6 Chaos Die. When you inflict an Injury, you gain 3 Conflict.'
    }
  },
  {
    id: TalentId.ARITHMETIC,
    name: 'Arithmetic',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Arithmetic. Whenever you use a Skill that could be paired with Arithmetic, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.ARTISTRY,
    name: 'Artistry',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Artistry. Whenever you use a Skill that could be paired with Artistry, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.ASTRONOMY,
    name: 'Astronomy',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Astronomy. Whenever you use a Skill that could be paired with Astronomy, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.AT_A_DISTANCE,
    name: 'At A Distance',
    labels: {
      description: '',
      effect: 'By spending 3 Action Points, you can Inject Quicksilver, Inject Tincture, Use Laudanum or Use Smelling Salts at a Distance of 3+[BB]. This is mostly relevant to the action of First Aid, but can also be used outside of combat in other narrative situations.'
    }
  },
  {
    id: TalentId.BEAR_GARDEN_JAW,
    name: 'Bear-Garden Jaw',
    labels: {
      description: '',
      effect: 'When you succeed at a Skill Test meant to ridicule or taunt someone, they suffer 1D10+1 Peril.'
    }
  },
  {
    id: TalentId.BLACKSMITHING,
    name: 'Blacksmithing',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Blacksmithing. Whenever you use a Skill that could be paired with Blacksmithing, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.BOOKBINDING,
    name: 'Bookbinding',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Bookbinding. Whenever you use a Skill that could be paired with Bookbinding, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.BRAINS_OVER_BRAWN,
    name: 'Brains Over Brawn',
    labels: {
      description: '',
      effect: 'You may alternatively use [WB] in place of [BB] when calculating your Damage Threshold.'
    }
  },
  {
    id: TalentId.BREAK_MY_FAST,
    name: 'Break My Fast',
    labels: {
      description: '',
      effect: 'Whenever you eat in the morning, move one step up the Damage Condition Track positively.'
    }
  },
  {
    id: TalentId.BURN_BRIGHT,
    name: 'Burn Bright',
    labels: {
      description: '',
      effect: 'Whenever you are holding a source of light, you and your allies treat Fleeting Shadows as if they were Perfect Light. If doing so in combat, you must spend 1 Action Point every Turn to maintain this effect.'
    }
  },
  {
    id: TalentId.CAST_IRON_STOMACH,
    name: 'Cast-Iron Stomach',
    labels: {
      description: '',
      effect: 'When Resisting the effects of Ailments and Drugs, you gain a +10% Base Chance to Skill Tests.'
    }
  },
  {
    id: TalentId.CHARISMATIC,
    name: 'Charismatic',
    labels: {
      description: '',
      effect: 'Permanently add +6% to your Fellowship.'
    }
  },
  {
    id: TalentId.CHASE_THE_PAIN,
    name: 'Chase The Pain',
    labels: {
      description: '',
      effect: 'Whenever you are Hurt add +1 to Total Damage. If Moderately Wounded, add +2. If Seriously Wounded, add +3, and if Grievously Wounded, add +4 to Total Damage. You must be using a melee weapon to take advantage of this Talent.'
    }
  },
  {
    id: TalentId.CHEAT_SHEET,
    name: 'Cheat Sheet',
    labels: {
      description: '',
      effect: 'When counting or cheating, you gain a +10% Base Chance to Skill Tests.'
    }
  },
  {
    id: TalentId.CLOSE_SHAVE,
    name: 'Close Shave',
    labels: {
      description: '',
      effect: 'Whenever you would suffer a Moderate Injury, spend one Coin, to ignore it. When suffering a Serious Injury, spend two Coins, or when suffering a Grievous Injury, spend three Coins to ignore it.'
    }
  },
  {
    id: TalentId.COMMON_SENSE,
    name: 'Common Sense',
    labels: {
      description: '',
      effect: 'Whenever you are faced with instances of Stress, Fear and Terror you’ve already been Hardened to, temporarily add +3 to your Peril Threshold. Hardened is covered more thoroughly in Article 8: Healing, Hazards & Horror.'
    }
  },
  {
    id: TalentId.COSTUMING,
    name: 'Costuming',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Costuming. Whenever you use a Skill that could be paired with Costuming, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.DANGER_SENSE,
    name: 'Danger Sense',
    labels: {
      description: '',
      effect: 'Whenever you are Surprised, you are not Defenseless. In addition, permanently add +1 to your Initiative.'
    }
  },
  {
    id: TalentId.DISTILLING,
    name: 'Distilling',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Distilling. Whenever you use a Skill that could be paired with Distilling, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.DRESSED_TO_THE_NINES,
    name: 'Dressed To The Nines',
    labels: {
      description: '',
      effect: 'When you attempt to persuade those of a different Allegiance than your own, you gain a +20% Base Chance to Charm.'
    }
  },
  {
    id: TalentId.EBB_AND_FLOW,
    name: 'Ebb & Flow',
    labels: {
      description: '',
      effect: 'Whenever a Coin is spent, automatically cancel its usage. You can call upon this ability once a game session.'
    }
  },
  {
    id: TalentId.FARMING,
    name: 'Farming',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Farming. Whenever you use a Skill that could be paired with Farming, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.FIELD_DRESSING,
    name: 'Field Dressing',
    labels: {
      description: '',
      effect: 'It takes you less than one minute (1 Action Point in combat) to Bind Wounds. In addition, you reduce the use of other First Aid-related actions by -1 Action Point (to a minimum of 1 Action Point).'
    }
  },
  {
    id: TalentId.FIELD_SURGERY,
    name: 'Field Surgery',
    labels: {
      description: '',
      effect: 'It only takes you one minute (3 Action Points) to Treat Moderate & Serious Injuries. In addition, it only takes you ten minutes to Perform Surgery.'
    }
  },
  {
    id: TalentId.FLEECE_THE_SHEEP,
    name: 'Fleece The Sheep',
    labels: {
      description: '',
      effect: 'When picking pockets, you gain a +20% Base Chance to Skulduggery Tests.'
    }
  },
  {
    id: TalentId.FREERUNNING,
    name: 'Freerunning',
    labels: {
      description: '',
      effect: 'Provided you have a wall as tall as you are nearby, you can double your vertical Jump in combat. In addition, permanently add +1 to your Movement.'
    }
  },
  {
    id: TalentId.FRIENDLY_FIRE,
    name: 'Friendly Fire',
    labels: {
      description: '',
      effect: 'Provided you can clearly see and hear, you never suffer penalties to use ranged weapons when firing at foes who are Engaged with allies.'
    }
  },
  {
    id: TalentId.FULL_OF_BEANS,
    name: 'Full Of Beans',
    labels: {
      description: '',
      effect: 'Permanently add +6% to your Agility.'
    }
  },
  {
    id: TalentId.GUT_INSTINCT,
    name: 'Gut Instinct',
    labels: {
      description: '',
      effect: 'You may alternatively use [BB] in place of [WB] when calculating your Peril Threshold.'
    }
  },
  {
    id: TalentId.HERCULEAN_EFFORT,
    name: 'Herculean Effort',
    labels: {
      description: '',
      effect: 'You never suffer Peril due to climbing or lifting. In addition, permanently add +1 to your Encumbrance.'
    }
  },
  {
    id: TalentId.HOBNOBBERY,
    name: 'Hobnobbery',
    labels: {
      description: '',
      effect: 'When gossiping or inquiring about local rumors, you gain a +20% Base Chance to Rumor Tests.'
    }
  },
  {
    id: TalentId.HOLDOUT,
    name: 'Holdout',
    labels: {
      description: '',
      effect: 'You always succeed at Skill Tests to conceal objects no larger than a knife in your clothing.'
    }
  },
  {
    id: TalentId.HORSE_SENSE,
    name: 'Horse Sense',
    labels: {
      description: '',
      effect: 'When you attempt to interact with horses, you gain a +20% Base Chance to Handle Animal.'
    }
  },
  {
    id: TalentId.HUSBANDRY,
    name: 'Husbandry',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Husbandry. Whenever you use a Skill that could be paired with Husbandry, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.IRONCLAD,
    name: 'Ironclad',
    labels: {
      description: '',
      effect: 'Foes must roll two face ‘6’s on Chaos Dice to Injure you. You also no longer suffer Moderate Injuries.'
    }
  },
  {
    id: TalentId.JADED,
    name: 'Jaded',
    labels: {
      description: '',
      effect: 'When suffering Peril from Stress, Fear or Terror, reduce it by your [FB].'
    }
  },
  {
    id: TalentId.LEATHERWORKING,
    name: 'Leatherworking',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Leatherworking. Whenever you use a Skill that could be paired with Leatherworking, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.LINEAR_TACTICS,
    name: 'Linear Tactics',
    labels: {
      description: '',
      effect: 'Whenever you deal Damage to a foe with a ranged weapon, immediately switch places with an Engaged ally.'
    }
  },
  {
    id: TalentId.MANNA_OF_GOD,
    name: 'Manna Of God',
    labels: {
      description: '',
      effect: 'Spend one Coin to automatically restore your Damage & Peril Condition Tracks by one step positively once a day.'
    }
  },
  {
    id: TalentId.METTLE,
    name: 'Mettle',
    labels: {
      description: '',
      effect: 'Whenever you suffer Peril from mental activities, reduce your Peril Condition Track by one less step negatively.'
    }
  },
  {
    id: TalentId.MILITARISTIC,
    name: 'Militaristic',
    labels: {
      description: '',
      effect: 'Permanently add +6% to your Combat.'
    }
  },
  {
    id: TalentId.MIMICRY,
    name: 'Mimicry',
    labels: {
      description: '',
      effect: 'When imitating the calls of threats classified as Animals and Beasts, you gain a +20% Base Chance to Disguise Tests (even when making calls in Languages other than your own).'
    }
  },
  {
    id: TalentId.NATURAL_WRESTLER,
    name: 'Natural Wrestler',
    labels: {
      description: '',
      effect: 'You only require one hand to use Chokehold. In addition, you only need to spend 1 Action Point to maintain a Chokehold. Finally, you penalize your foe’s ability to Resist a Chokehold by a -10% Base Chance.'
    }
  },
  {
    id: TalentId.NIMBLE_FINGERS,
    name: 'Nimble Fingers',
    labels: {
      description: '',
      effect: 'Reduce the Load value of all ranged weapons with the Blackpowder Quality by -1 Action Point (to a minimum of 1 Action Point).'
    }
  },
  {
    id: TalentId.NOM_DE_GUERRE,
    name: 'Nom De Guerre',
    labels: {
      description: '',
      effect: 'You now have a secret identity. It requires no Skill Tests to live and to interact as that identity among those who know you by the secret identity. However, when interacting with strangers who may know you outside your secret identity, you must succeed in a Disguise Test or else be discovered.'
    }
  },
  {
    id: TalentId.OCCULT,
    name: 'Occult',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Occult. Whenever you use a Skill that could be paired with Occult, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.OFF_THE_BRIDLE,
    name: 'Off The Bridle',
    labels: {
      description: '',
      effect: 'When riding a horse in combat, add +3 Movement. You can also Get Up in the saddle for 0 Action Points.'
    }
  },
  {
    id: TalentId.PERCEPTIVE,
    name: 'Perceptive',
    labels: {
      description: '',
      effect: 'Permanently add +6% to your Perception.'
    }
  },
  {
    id: TalentId.PHARMACOPOEIA,
    name: 'Pharmacopoeia',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Pharmacopoeia. Whenever you use a Skill that could be paired with Pharmacopoeia, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.PLANAR_ALIGNMENT,
    name: 'Planar Alignment',
    labels: {
      description: '',
      effect: 'Whenever you Risk Backlash, reduce the number of Chaos Dice you roll (to a minimum of one die).'
    }
  },
  {
    id: TalentId.POKER_FACE,
    name: 'Poker Face',
    labels: {
      description: '',
      effect: 'Your Allegiance cannot be discovered unless you tell someone, and you cannot be made the target of the Scrutinize Skill to determine your Allegiance.'
    }
  },
  {
    id: TalentId.POLAR_STAR,
    name: 'Polar Star',
    labels: {
      description: '',
      effect: 'When you can see the stars, you gain a +20% Base Chance to Navigation Tests. In addition, you always know how to find true north, even during inclement weather.'
    }
  },
  {
    id: TalentId.POST_HASTE,
    name: 'Post-Haste',
    labels: {
      description: '',
      effect: 'You reduce all Movement Actions by -1 Action Point (to a minimum of 1).'
    }
  },
  {
    id: TalentId.POT_VALIANT,
    name: 'Pot Valiant',
    labels: {
      description: '',
      effect: 'When you are Intoxicated, will you be a merry drunk or a moody drunk? When you’re merry, gain a +10% Base Chance to Coordination Tests while Intoxicated. When you’re moody, gain a +10% Base Chance to Athletics Tests while Intoxicated. You can make this choice every time you become Intoxicated.'
    }
  },
  {
    id: TalentId.PUGILISM,
    name: 'Pugilism',
    labels: {
      description: '',
      effect: 'Whenever your Rough & Tumble misses or is Resisted, immediately Rough & Tumble again for 0 Action Points. You can only take advantage of this once a Round.'
    }
  },
  {
    id: TalentId.REBEL_YELL,
    name: 'Rebel Yell',
    labels: {
      description: '',
      effect: 'When you attempt to incite violence, you gain a +10% Base Chance to Skill Tests.'
    }
  },
  {
    id: TalentId.RIBALDRY,
    name: 'Ribaldry',
    labels: {
      description: '',
      effect: 'At your option, you can substitute the Charm Skill in place of Resolve when withstanding the effects of Stress, Fear and Terror.'
    }
  },
  {
    id: TalentId.RICOCHET,
    name: 'Ricochet',
    labels: {
      description: '',
      effect: 'Whenever a foe is Slain! from an attack you’ve made with a ranged weapon, spend one Coin to inflict the same amount of Total Damage against a foe who is within 3 yards of them.'
    }
  },
  {
    id: TalentId.ROLE_REVERSAL,
    name: 'Role Reversal',
    labels: {
      description: '',
      effect: 'Before a foe rolls a Skill Test, spend one Coin for them to instead refer to your Primary Attribute and Skill Ranks (or lack thereof) when determining the Total Chance for success.'
    }
  },
  {
    id: TalentId.SAGACITY,
    name: 'Sagacity',
    labels: {
      description: '',
      effect: 'Permanently add +6% to your Intelligence.'
    }
  },
  {
    id: TalentId.SAILING,
    name: 'Sailing',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Sailing. Whenever you use a Skill that could be paired with Sailing, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.SCIENCE,
    name: 'Science',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Science. Whenever you use a Skill that could be paired with Science, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.SELF_MEDICATION,
    name: 'Self-Medication',
    labels: {
      description: '',
      effect: 'Whenever you are suffering from Stress, Fear or Terror, add +3 Initiative.'
    }
  },
  {
    id: TalentId.SIMON_PURE,
    name: 'Simon Pure',
    labels: {
      description: '',
      effect: 'When masquerading as someone notably famous (or infamous), you gain a +20% Base Chance to Disguise Tests.'
    }
  },
  {
    id: TalentId.SMOOTH_TALKER,
    name: 'Smooth Talker',
    labels: {
      description: '',
      effect: 'When you attempt to persuade those of Allegiances other than your own, you gain a +20% Base Chance to Charm Tests.'
    }
  },
  {
    id: TalentId.STALWART,
    name: 'Stalwart',
    labels: {
      description: '',
      effect: 'Permanently add +6% to your Brawn.'
    }
  },
  {
    id: TalentId.STEADFAST,
    name: 'Steadfast',
    labels: {
      description: '',
      effect: 'Whenever you suffer Peril from physical activities, reduce your Peril Condition Track by one less step negatively.'
    }
  },
  {
    id: TalentId.STONEMASONRY,
    name: 'Stonemasonry',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Stonemasonry. Whenever you use a Skill that could be paired with Stonemasonry, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.TAILORING,
    name: 'Tailoring',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Tailoring. Whenever you use a Skill that could be paired with Tailoring, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.TAKE_A_GANDER,
    name: 'Take A Gander',
    labels: {
      description: '',
      effect: 'Ignore the effects of Concealment & Weather conditions for purposes of using ranged weapons.'
    }
  },
  {
    id: TalentId.TALK_LESS_SMILE_MORE,
    name: 'Talk Less, Smile More',
    labels: {
      description: '',
      effect: 'When you attempt to peacefully negotiate, you gain a +10% Base Chance to Skill Tests.'
    }
  },
  {
    id: TalentId.TENACITY,
    name: 'Tenacity',
    labels: {
      description: '',
      effect: 'Permanently add +6% to your Willpower.'
    }
  },
  {
    id: TalentId.THE_THIRD_DEGREE,
    name: 'The Third Degree',
    labels: {
      description: '',
      effect: 'When you Injure a foe with a weapon, you inflict two Injuries instead of one.'
    }
  },
  {
    id: TalentId.THEOLOGY,
    name: 'Theology',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Theology. Whenever you use a Skill that could be paired with Theology, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.TRAIN_ANIMALS,
    name: 'Train Animals',
    labels: {
      description: '',
      effect: 'You can teach threats classified as Animals a number of commands. Suggested ones may include attack, fetch, go and stay—the limits are up to you and the Historian to decide. An animal can learn a number of commands equal to your [FB], but you may train multiple animals different commands. It takes a week of training to teach an animal a command. If using a command in combat, spend 1 Action Point to command it.'
    }
  },
  {
    id: TalentId.TRIVIUM,
    name: 'Trivium',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Trivium. Whenever you use a Skill that could be paired with Trivium (the study of grammar, logic and rhetoric), ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.TURN_THE_PAGE,
    name: 'Turn The Page',
    labels: {
      description: '',
      effect: 'You can read and write a number of pages equal to [IB] a minute.'
    }
  },
  {
    id: TalentId.TWISTICAL,
    name: 'Twistical',
    labels: {
      description: '',
      effect: 'When you attempt to deceive someone, you gain a +20% Base Chance to Guile Tests.'
    }
  },
  {
    id: TalentId.UNDER_THE_GUN,
    name: 'Under The Gun',
    labels: {
      description: '',
      effect: 'You reduce the time to Recuperate from Injuries by three days. In addition, you never Bleed.'
    }
  },
  {
    id: TalentId.WEAVING,
    name: 'Weaving',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Weaving. Whenever you use a Skill that could be paired with Weaving, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.WHIP_JACKET,
    name: 'Whip Jacket',
    labels: {
      description: '',
      effect: 'When you attempt to hide in urban environments, you gain a +20% Base Chance to Stealth Tests.'
    }
  },
  {
    id: TalentId.WHITES_OF_THEIR_EYES,
    name: 'Whites Of Their Eyes',
    labels: {
      description: '',
      effect: 'Whenever foes gain the benefit of Low Cover, you ignore it for purposes of hitting and dealing Damage.'
    }
  },
  {
    id: TalentId.WOODWORKING,
    name: 'Woodworking',
    labels: {
      description: '',
      effect: 'Record this Talent name by your Skill Ranks — Woodworking. Whenever you use a Skill that could be paired with Woodworking, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  }
];
