import {Talent} from './models';
import {TalentId} from './enums';

/* tslint:disable:max-line-length */
export const TALENTS: Talent[] = [
  {
    id: TalentId.AMBIDEXTERITY,
    name: 'Ambidexterity',
    labels: {
      description: 'We were given two hands: one to receive with and the other to give with.',
      effect: 'You never suffer penalties when using tools or weapons in either hand. If you ever suffer an Injury where you cannot use your primary hand, you do not suffer penalties when using your off-hand.'
    }
  },
  {
    id: TalentId.ANIMALISTIC,
    name: 'Animalistic',
    labels: {
      description: 'Vicious and uncouth—that’s what they say behind my back because they’re afraid of what I may do.',
      effect: 'Whenever you roll Chaos Dice to determine whether you inflict an Injury, add 1D6 Chaos Die. When you inflict an Injury, you gain 3 Conflict.'
    }
  },
  {
    id: TalentId.ARITHMETIC,
    name: 'Arithmetic',
    labels: {
      description: 'Whether I’m crunching numbers or attempting to explain Descartes, I know how to break down the answer.',
      effect: 'Record this Talent name by your Skill Ranks — Arithmetic. Whenever you use a Skill that could be paired with Arithmetic, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.ARTISTRY,
    name: 'Artistry',
    labels: {
      description: 'I learned how to paint, write poetry, compose music and sing with a pitch-perfect voice.',
      effect: 'Record this Talent name by your Skill Ranks — Artistry. Whenever you use a Skill that could be paired with Artistry, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.ASTRONOMY,
    name: 'Astronomy',
    labels: {
      description: 'Whether you need to know of matters cartographical or the movement of the heavenly spheres, I am here.',
      effect: 'Record this Talent name by your Skill Ranks — Astronomy. Whenever you use a Skill that could be paired with Astronomy, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.AT_A_DISTANCE,
    name: 'At A Distance',
    labels: {
      description: 'Stand where you’re at; I’ll toss you what you need!',
      effect: 'By spending 3 Action Points, you can Inject Quicksilver, Inject Tincture, Use Laudanum or Use Smelling Salts at a Distance of 3+[BB]. This is mostly relevant to the action of First Aid, but can also be used outside of combat in other narrative situations.'
    }
  },
  {
    id: TalentId.BEAR_GARDEN_JAW,
    name: 'Bear-Garden Jaw',
    labels: {
      description: 'You don’t like my vulgar tone, eh? A pox on thee, and thy mother, too!',
      effect: 'When you succeed at a Skill Test meant to ridicule or taunt someone, they suffer 1D10+1 Peril.'
    }
  },
  {
    id: TalentId.BLACKSMITHING,
    name: 'Blacksmithing',
    labels: {
      description: 'The art of turning metals, f iling silver and smelting ores into usable objects takes a certain kind of skill.',
      effect: 'Record this Talent name by your Skill Ranks — Blacksmithing. Whenever you use a Skill that could be paired with Blacksmithing, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.BOOKBINDING,
    name: 'Bookbinding',
    labels: {
      description: 'Printmaking, vellum production and sewing the perfect binding are an art unto themselves.',
      effect: 'Record this Talent name by your Skill Ranks — Bookbinding. Whenever you use a Skill that could be paired with Bookbinding, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.BRAINS_OVER_BRAWN,
    name: 'Brains Over Brawn',
    labels: {
      description: 'Keep a clear mind and you’ll never suffer the enemy.',
      effect: 'You may alternatively use [WB] in place of [BB] when calculating your Damage Threshold.'
    }
  },
  {
    id: TalentId.BREAK_MY_FAST,
    name: 'Break My Fast',
    labels: {
      description: 'A hearty meal is the source of good nutrition, a healthy spirit and the best way to start your day.',
      effect: 'Whenever you eat in the morning, move one step up the Damage Condition Track positively.'
    }
  },
  {
    id: TalentId.BURN_BRIGHT,
    name: 'Burn Bright',
    labels: {
      description: 'Shadows begone!',
      effect: 'Whenever you are holding a source of light, you and your allies treat Fleeting Shadows as if they were Perfect Light. If doing so in combat, you must spend 1 Action Point every Turn to maintain this effect.'
    }
  },
  {
    id: TalentId.CAST_IRON_STOMACH,
    name: 'Cast-Iron Stomach',
    labels: {
      description: 'I’ve built up a tolerance for bad food and dirty water on the road.',
      effect: 'When Resisting the effects of Ailments and Drugs, you gain a +10% Base Chance to Skill Tests.'
    }
  },
  {
    id: TalentId.CHARISMATIC,
    name: 'Charismatic',
    labels: {
      description: 'They say I am affable, engaging and the life of the party.',
      effect: 'Permanently add +6% to your Fellowship.'
    }
  },
  {
    id: TalentId.CHASE_THE_PAIN,
    name: 'Chase The Pain',
    labels: {
      description: 'With... every... damned... wound... I... only... grow... stronger!',
      effect: 'Whenever you are Hurt add +1 to Total Damage. If Moderately Wounded, add +2. If Seriously Wounded, add +3, and if Grievously Wounded, add +4 to Total Damage. You must be using a melee weapon to take advantage of this Talent.'
    }
  },
  {
    id: TalentId.CHEAT_SHEET,
    name: 'Cheat Sheet',
    labels: {
      description: 'I make words sometimes stand for one thing, and sometimes for another.',
      effect: 'When counting or cheating, you gain a +10% Base Chance to Skill Tests.'
    }
  },
  {
    id: TalentId.CLOSE_SHAVE,
    name: 'Close Shave',
    labels: {
      description: 'I’ve got some fight left in me... now, have at you!',
      effect: 'Whenever you would suffer a Moderate Injury, spend one Coin, to ignore it. When suffering a Serious Injury, spend two Coins, or when suffering a Grievous Injury, spend three Coins to ignore it.'
    }
  },
  {
    id: TalentId.COMMON_SENSE,
    name: 'Common Sense',
    labels: {
      description: 'Thomas Paine says, “The mind once enlightened cannot again become dark.”',
      effect: 'Whenever you are faced with instances of Stress, Fear and Terror you’ve already been Hardened to, temporarily add +3 to your Peril Threshold. Hardened is covered more thoroughly in Article 8: Healing, Hazards & Horror.'
    }
  },
  {
    id: TalentId.COSTUMING,
    name: 'Costuming',
    labels: {
      description: 'From ball gowns to theatrical dress and even military styles, I’ve made them all.',
      effect: 'Record this Talent name by your Skill Ranks — Costuming. Whenever you use a Skill that could be paired with Costuming, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.DANGER_SENSE,
    name: 'Danger Sense',
    labels: {
      description: 'I can feel the hackles rise on the back of my neck when things are about to go amiss.',
      effect: 'Whenever you are Surprised, you are not Defenseless. In addition, permanently add +1 to your Initiative.'
    }
  },
  {
    id: TalentId.DISTILLING,
    name: 'Distilling',
    labels: {
      description: 'Beer won’t brew itself, nor will the myriad of spirits and clean water we need to survive.',
      effect: 'Record this Talent name by your Skill Ranks — Distilling. Whenever you use a Skill that could be paired with Distilling, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.DRESSED_TO_THE_NINES,
    name: 'Dressed To The Nines',
    labels: {
      description: 'I was taught how to present myself to ensure proper, seamless interaction with others.',
      effect: 'When you attempt to persuade those of a different Allegiance than your own, you gain a +20% Base Chance to Charm.'
    }
  },
  {
    id: TalentId.EBB_AND_FLOW,
    name: 'Ebb & Flow',
    labels: {
      description: 'If you only could see the strings of Fate, you’d see how easily they can be cut.',
      effect: 'Whenever a Coin is spent, automatically cancel its usage. You can call upon this ability once a game session.'
    }
  },
  {
    id: TalentId.FARMING,
    name: 'Farming',
    labels: {
      description: 'Planting, growing and harvesting crops and fish, along with keeping up the farm, was how I was raised.',
      effect: 'Record this Talent name by your Skill Ranks — Farming. Whenever you use a Skill that could be paired with Farming, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.FIELD_DRESSING,
    name: 'Field Dressing',
    labels: {
      description: 'Let me lay upon hands, and feel heaven’s grace channel through me.',
      effect: 'It takes you less than one minute (1 Action Point in combat) to Bind Wounds. In addition, you reduce the use of other First Aid-related actions by -1 Action Point (to a minimum of 1 Action Point).'
    }
  },
  {
    id: TalentId.FIELD_SURGERY,
    name: 'Field Surgery',
    labels: {
      description: 'I am only doing what is necessary for you to survive.',
      effect: 'It only takes you one minute (3 Action Points) to Treat Moderate & Serious Injuries. In addition, it only takes you ten minutes to Perform Surgery.'
    }
  },
  {
    id: TalentId.FLEECE_THE_SHEEP,
    name: 'Fleece The Sheep',
    labels: {
      description: 'My pockets aren’t going to line themselves, so why not f ill them with others’ riches?',
      effect: 'When picking pockets, you gain a +20% Base Chance to Skulduggery Tests.'
    }
  },
  {
    id: TalentId.FREERUNNING,
    name: 'Freerunning',
    labels: {
      description: 'With a hop, skip and a jump, we can make our way out of there.',
      effect: 'Provided you have a wall as tall as you are nearby, you can double your vertical Jump in combat. In addition, permanently add +1 to your Movement.'
    }
  },
  {
    id: TalentId.FRIENDLY_FIRE,
    name: 'Friendly Fire',
    labels: {
      description: 'With steady hands and careful aim, we avoid hurting our friends ...',
      effect: 'Provided you can clearly see and hear, you never suffer penalties to use ranged weapons when firing at foes who are Engaged with allies.'
    }
  },
  {
    id: TalentId.FULL_OF_BEANS,
    name: 'Full Of Beans',
    labels: {
      description: 'Nimble, lithe and quick ... just like my family before me.',
      effect: 'Permanently add +6% to your Agility.'
    }
  },
  {
    id: TalentId.GUT_INSTINCT,
    name: 'Gut Instinct',
    labels: {
      description: 'I always know there’s something deeper at play — I can feel it in my gut.',
      effect: 'You may alternatively use [BB] in place of [WB] when calculating your Peril Threshold.'
    }
  },
  {
    id: TalentId.HERCULEAN_EFFORT,
    name: 'Herculean Effort',
    labels: {
      description: 'Witness such feats of strength!',
      effect: 'You never suffer Peril due to climbing or lifting. In addition, permanently add +1 to your Encumbrance.'
    }
  },
  {
    id: TalentId.HOBNOBBERY,
    name: 'Hobnobbery',
    labels: {
      description: 'I find it incredibly easy to rub shoulders with a wide spectrum of people; chalk it up to my people skills!',
      effect: 'When gossiping or inquiring about local rumors, you gain a +20% Base Chance to Rumor Tests.'
    }
  },
  {
    id: TalentId.HOLDOUT,
    name: 'Holdout',
    labels: {
      description: 'What key are you talking about, sirrah — the one that the thief down the road stole?',
      effect: 'You always succeed at Skill Tests to conceal objects no larger than a knife in your clothing.'
    }
  },
  {
    id: TalentId.HORSE_SENSE,
    name: 'Horse Sense',
    labels: {
      description: 'My horse and I have established such a bond that we are able to intuit one another’s feelings.',
      effect: 'When you attempt to interact with horses, you gain a +20% Base Chance to Handle Animal.'
    }
  },
  {
    id: TalentId.HUSBANDRY,
    name: 'Husbandry',
    labels: {
      description: 'I’ve bred, reared and trained animals of all kinds: bison, chickens, cows, dogs, falcons — you name it.',
      effect: 'Record this Talent name by your Skill Ranks — Husbandry. Whenever you use a Skill that could be paired with Husbandry, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.IRONCLAD,
    name: 'Ironclad',
    labels: {
      description: 'I learned to survive through a trial by fire — both literally and figuratively.',
      effect: 'Foes must roll two face ‘6’s on Chaos Dice to Injure you. You also no longer suffer Moderate Injuries.'
    }
  },
  {
    id: TalentId.JADED,
    name: 'Jaded',
    labels: {
      description: 'I’ve learned that you can’t count on anything in this world but yourself.',
      effect: 'When suffering Peril from Stress, Fear or Terror, reduce it by your [FB].'
    }
  },
  {
    id: TalentId.LEATHERWORKING,
    name: 'Leatherworking',
    labels: {
      description: 'Whether it be skinning animals, cobbling, tanning or making simple accoutrements like belts and boots, I’m your person.',
      effect: 'Record this Talent name by your Skill Ranks — Leatherworking. Whenever you use a Skill that could be paired with Leatherworking, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.LINEAR_TACTICS,
    name: 'Linear Tactics',
    labels: {
      description: 'I’ll fire and retreat, and you take my place!',
      effect: 'Whenever you deal Damage to a foe with a ranged weapon, immediately switch places with an Engaged ally.'
    }
  },
  {
    id: TalentId.MANNA_OF_GOD,
    name: 'Manna Of God',
    labels: {
      description: 'Look deeper within, my child—it is there you shall find the light.',
      effect: 'Spend one Coin to automatically restore your Damage & Peril Condition Tracks by one step positively once a day.'
    }
  },
  {
    id: TalentId.METTLE,
    name: 'Mettle',
    labels: {
      description: 'My mind is an iron fortress, buttressed by an enduring willingness to keep calm.',
      effect: 'Whenever you suffer Peril from mental activities, reduce your Peril Condition Track by one less step negatively.'
    }
  },
  {
    id: TalentId.MILITARISTIC,
    name: 'Militaristic',
    labels: {
      description: 'Training and constant drilling are key for battle-readiness.',
      effect: 'Permanently add +6% to your Combat.'
    }
  },
  {
    id: TalentId.MIMICRY,
    name: 'Mimicry',
    labels: {
      description: '“Whoo, whoo,” is the sound the barn owl makes. “Squee, squee,” is what the pig says.',
      effect: 'When imitating the calls of threats classified as Animals and Beasts, you gain a +20% Base Chance to Disguise Tests (even when making calls in Languages other than your own).'
    }
  },
  {
    id: TalentId.NATURAL_WRESTLER,
    name: 'Natural Wrestler',
    labels: {
      description: 'They say you always want one throat to choke, but I can grab two with hands like these!',
      effect: 'You only require one hand to use Chokehold. In addition, you only need to spend 1 Action Point to maintain a Chokehold. Finally, you penalize your foe’s ability to Resist a Chokehold by a -10% Base Chance.'
    }
  },
  {
    id: TalentId.NIMBLE_FINGERS,
    name: 'Nimble Fingers',
    labels: {
      description: '“When you set your mind to something,” my pa always said, “you can learn to do anything faster than the person who does nothing but stares at the stars.”',
      effect: 'Reduce the Load value of all ranged weapons with the Blackpowder Quality by -1 Action Point (to a minimum of 1 Action Point).'
    }
  },
  {
    id: TalentId.NOM_DE_GUERRE,
    name: 'Nom De Guerre',
    labels: {
      description: 'I adopted a war identity so that my deeds wouldn’t bring harm to my loved ones.',
      effect: 'You now have a secret identity. It requires no Skill Tests to live and to interact as that identity among those who know you by the secret identity. However, when interacting with strangers who may know you outside your secret identity, you must succeed in a Disguise Test or else be discovered.'
    }
  },
  {
    id: TalentId.OCCULT,
    name: 'Occult',
    labels: {
      description: 'I have seen the dark truth that hides in every man’s soul, and learned to understand its esoteric meanings.',
      effect: 'Record this Talent name by your Skill Ranks — Occult. Whenever you use a Skill that could be paired with Occult, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.OFF_THE_BRIDLE,
    name: 'Off The Bridle',
    labels: {
      description: 'Like the Horsemen, we shall ride down those who stand before us!',
      effect: 'When riding a horse in combat, add +3 Movement. You can also Get Up in the saddle for 0 Action Points.'
    }
  },
  {
    id: TalentId.PERCEPTIVE,
    name: 'Perceptive',
    labels: {
      description: 'Yes, young cub, I’ve got eyes in the back of my head.',
      effect: 'Permanently add +6% to your Perception.'
    }
  },
  {
    id: TalentId.PHARMACOPOEIA,
    name: 'Pharmacopoeia',
    labels: {
      description: 'To create potions, medicines and drugs is no trivial matter.',
      effect: 'Record this Talent name by your Skill Ranks — Pharmacopoeia. Whenever you use a Skill that could be paired with Pharmacopoeia, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.PLANAR_ALIGNMENT,
    name: 'Planar Alignment',
    labels: {
      description: 'I can see where our material plane and the spirit realm coincide, and it gives me power.',
      effect: 'Whenever you Risk Backlash, reduce the number of Chaos Dice you roll (to a minimum of one die).'
    }
  },
  {
    id: TalentId.POKER_FACE,
    name: 'Poker Face',
    labels: {
      description: 'Love the game’s intuition; play the cards with spades to start.',
      effect: 'Your Allegiance cannot be discovered unless you tell someone, and you cannot be made the target of the Scrutinize Skill to determine your Allegiance.'
    }
  },
  {
    id: TalentId.POLAR_STAR,
    name: 'Polar Star',
    labels: {
      description: 'I need only to look at the heavens to understand which direction to go.',
      effect: 'When you can see the stars, you gain a +20% Base Chance to Navigation Tests. In addition, you always know how to find true north, even during inclement weather.'
    }
  },
  {
    id: TalentId.POST_HASTE,
    name: 'Post-Haste',
    labels: {
      description: 'Get moving as quickly as you can, as if your lives depend upon it!',
      effect: 'You reduce all Movement Actions by -1 Action Point (to a minimum of 1).'
    }
  },
  {
    id: TalentId.POT_VALIANT,
    name: 'Pot Valiant',
    labels: {
      description: 'Raise your cups, for tonight we either dine in hell, or we revel with Bacchus!',
      effect: 'When you are Intoxicated, will you be a merry drunk or a moody drunk? When you’re merry, gain a +10% Base Chance to Coordination Tests while Intoxicated. When you’re moody, gain a +10% Base Chance to Athletics Tests while Intoxicated. You can make this choice every time you become Intoxicated.'
    }
  },
  {
    id: TalentId.PUGILISM,
    name: 'Pugilism',
    labels: {
      description: 'There’ll be two hits: me hitting you and you hitting the ground.',
      effect: 'Whenever your Rough & Tumble misses or is Resisted, immediately Rough & Tumble again for 0 Action Points. You can only take advantage of this once a Round.'
    }
  },
  {
    id: TalentId.REBEL_YELL,
    name: 'Rebel Yell',
    labels: {
      description: 'If you lift a finger, we will destroy every last one of you!',
      effect: 'When you attempt to incite violence, you gain a +10% Base Chance to Skill Tests.'
    }
  },
  {
    id: TalentId.RIBALDRY,
    name: 'Ribaldry',
    labels: {
      description: 'Have you ever seen a poodle tip the velvet of a dandy lad?',
      effect: 'At your option, you can substitute the Charm Skill in place of Resolve when withstanding the effects of Stress, Fear and Terror.'
    }
  },
  {
    id: TalentId.RICOCHET,
    name: 'Ricochet',
    labels: {
      description: 'Well, that was a lucky shot!',
      effect: 'Whenever a foe is Slain! from an attack you’ve made with a ranged weapon, spend one Coin to inflict the same amount of Total Damage against a foe who is within 3 yards of them.'
    }
  },
  {
    id: TalentId.ROLE_REVERSAL,
    name: 'Role Reversal',
    labels: {
      description: 'My lack of ability and sheer pluck will get me out of this situation.',
      effect: 'Before a foe rolls a Skill Test, spend one Coin for them to instead refer to your Primary Attribute and Skill Ranks (or lack thereof) when determining the Total Chance for success.'
    }
  },
  {
    id: TalentId.SAGACITY,
    name: 'Sagacity',
    labels: {
      description: '“Smart, reasoned and experienced” is how I shall be remembered.',
      effect: 'Permanently add +6% to your Intelligence.'
    }
  },
  {
    id: TalentId.SAILING,
    name: 'Sailing',
    labels: {
      description: 'Swabbing decks, caulking hulls, repairing sails and piloting boats are tasks I am well acquainted with.',
      effect: 'Record this Talent name by your Skill Ranks — Sailing. Whenever you use a Skill that could be paired with Sailing, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.SCIENCE,
    name: 'Science',
    labels: {
      description: 'Sacred geometry, mathematics and life sciences are my specialties.',
      effect: 'Record this Talent name by your Skill Ranks — Science. Whenever you use a Skill that could be paired with Science, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.SELF_MEDICATION,
    name: 'Self-Medication',
    labels: {
      description: 'Madness can be a medicine in the modern world.',
      effect: 'Whenever you are suffering from Stress, Fear or Terror, add +3 Initiative.'
    }
  },
  {
    id: TalentId.SIMON_PURE,
    name: 'Simon Pure',
    labels: {
      description: 'Rest assured, fair friend, that I am indeed the great George Washington!',
      effect: 'When masquerading as someone notably famous (or infamous), you gain a +20% Base Chance to Disguise Tests.'
    }
  },
  {
    id: TalentId.SMOOTH_TALKER,
    name: 'Smooth Talker',
    labels: {
      description: 'Why, yes, I do know so-and-so—we got along famously!',
      effect: 'When you attempt to persuade those of Allegiances other than your own, you gain a +20% Base Chance to Charm Tests.'
    }
  },
  {
    id: TalentId.STALWART,
    name: 'Stalwart',
    labels: {
      description: 'Strong, rugged and steadfast are my three key strengths.',
      effect: 'Permanently add +6% to your Brawn.'
    }
  },
  {
    id: TalentId.STEADFAST,
    name: 'Steadfast',
    labels: {
      description: 'No matter the cost, I shall persevere!',
      effect: 'Whenever you suffer Peril from physical activities, reduce your Peril Condition Track by one less step negatively.'
    }
  },
  {
    id: TalentId.STONEMASONRY,
    name: 'Stonemasonry',
    labels: {
      description: 'I’ve learned to chip away at stone to create beautiful buildings, monuments and statues.',
      effect: 'Record this Talent name by your Skill Ranks — Stonemasonry. Whenever you use a Skill that could be paired with Stonemasonry, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.TAILORING,
    name: 'Tailoring',
    labels: {
      description: 'Stitching clothes, hat-making and other sundries I can readily take care of.',
      effect: 'Record this Talent name by your Skill Ranks — Tailoring. Whenever you use a Skill that could be paired with Tailoring, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.TAKE_A_GANDER,
    name: 'Take A Gander',
    labels: {
      description: 'What do you mean you cannot see them ... they are standing right in front of us!',
      effect: 'Ignore the effects of Concealment & Weather conditions for purposes of using ranged weapons.'
    }
  },
  {
    id: TalentId.TALK_LESS_SMILE_MORE,
    name: 'Talk Less, Smile More',
    labels: {
      description: 'Don’t let them know what you’re against or what you’re for.',
      effect: 'When you attempt to peacefully negotiate, you gain a +10% Base Chance to Skill Tests.'
    }
  },
  {
    id: TalentId.TENACITY,
    name: 'Tenacity',
    labels: {
      description: 'Dedication and commitment are necessary tools for survival.',
      effect: 'Permanently add +6% to your Willpower.'
    }
  },
  {
    id: TalentId.THE_THIRD_DEGREE,
    name: 'The Third Degree',
    labels: {
      description: 'I know precisely where to land my shots to make them count ... and make them hurt.',
      effect: 'When you Injure a foe with a weapon, you inflict two Injuries instead of one.'
    }
  },
  {
    id: TalentId.THEOLOGY,
    name: 'Theology',
    labels: {
      description: 'It is one thing to say you know God, but it is another to say you understand the multitude of spirits in this world and their true aims.',
      effect: 'Record this Talent name by your Skill Ranks — Theology. Whenever you use a Skill that could be paired with Theology, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.TRAIN_ANIMALS,
    name: 'Train Animals',
    labels: {
      description: 'Sit, lie down, stay and attack are the foremost (and four best) tricks you teach your dog.',
      effect: 'You can teach threats classified as Animals a number of commands. Suggested ones may include attack, fetch, go and stay—the limits are up to you and the Historian to decide. An animal can learn a number of commands equal to your [FB], but you may train multiple animals different commands. It takes a week of training to teach an animal a command. If using a command in combat, spend 1 Action Point to command it.'
    }
  },
  {
    id: TalentId.TRIVIUM,
    name: 'Trivium',
    labels: {
      description: 'The arts of grammar, rhetoric and logic are subtle, and it takes years of failure to become an expert in them.',
      effect: 'Record this Talent name by your Skill Ranks — Trivium. Whenever you use a Skill that could be paired with Trivium (the study of grammar, logic and rhetoric), ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.TURN_THE_PAGE,
    name: 'Turn The Page',
    labels: {
      description: 'Ego sum celeritate lectorem!',
      effect: 'You can read and write a number of pages equal to [IB] a minute.'
    }
  },
  {
    id: TalentId.TWISTICAL,
    name: 'Twistical',
    labels: {
      description: 'Have you ever considered that some lies are a necessary means to an end?',
      effect: 'When you attempt to deceive someone, you gain a +20% Base Chance to Guile Tests.'
    }
  },
  {
    id: TalentId.UNDER_THE_GUN,
    name: 'Under The Gun',
    labels: {
      description: 'We have no time to laze about, for there is more work to be done!',
      effect: 'You reduce the time to Recuperate from Injuries by three days. In addition, you never Bleed.'
    }
  },
  {
    id: TalentId.WEAVING,
    name: 'Weaving',
    labels: {
      description: 'Baskets, textiles and ancestral blankets are what I have practiced my hand on.',
      effect: 'Record this Talent name by your Skill Ranks — Weaving. Whenever you use a Skill that could be paired with Weaving, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  },
  {
    id: TalentId.WHIP_JACKET,
    name: 'Whip Jacket',
    labels: {
      description: 'Look, I’ve been called far worse, but simply trying to survive the city’s streets requires a certain je ne sais quoi.',
      effect: 'When you attempt to hide in urban environments, you gain a +20% Base Chance to Stealth Tests.'
    }
  },
  {
    id: TalentId.WHITES_OF_THEIR_EYES,
    name: 'Whites Of Their Eyes',
    labels: {
      description: 'Stay at my side, friends, and remain steadfast!',
      effect: 'Whenever foes gain the benefit of Low Cover, you ignore it for purposes of hitting and dealing Damage.'
    }
  },
  {
    id: TalentId.WOODWORKING,
    name: 'Woodworking',
    labels: {
      description: 'Whether it be barrel-making, carpentry or furniture-making, I can do them all with equal finesse.',
      effect: 'Record this Talent name by your Skill Ranks — Woodworking. Whenever you use a Skill that could be paired with Woodworking, ignore any penalties your character is currently suffering from due to your Peril Condition Track. You also gain a +10% Base Chance to use the Skill when paired.'
    }
  }
];
