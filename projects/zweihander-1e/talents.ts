/* tslint:disable:max-line-length */
import {Trait} from './models';
import {TalentId} from './enums';

export const TALENTS: Trait[] = [
  {
    id: TalentId.AETHEREAL_ALIGNMENT,
    name: 'Æthereal Alignment',
    labels: {
      description: 'Your ability to concentrate cannot be assuaged simply by exhaustion; no, you are indomitable when it comes to reshaping the Æther.',
      effect: 'When attempting to Counterspell, you gain a +20 Base Chance to succeed.'
    }
  },
  {
    id: TalentId.AMBIDEXTERITY,
    name: 'Ambidexterity',
    labels: {
      description: 'You can use both hands with equal finesse.',
      effect: 'You never suffer penalties when using tools or weapons in either hand. If you ever suffer an Injury where you cannot use your primary hand, you do not suffer penalties to use your off-hand.'
    }
  },
  {
    id: TalentId.APPALLING_MIEN,
    name: 'Appalling Mien',
    labels: {
      description: 'People are disturbed by your presence, as you invoke apprehension and fear in those who encounter you.',
      effect: 'When you succeed at an Intimidate Test against one foe, they cannot attack you until they succeed at a Resolve Test. However, if you or your allies harm them in any way, they immediately shake off this effect.'
    }
  },
  {
    id: TalentId.ARBALESTS_SPEED,
    name: 'Arbalest\'s Speed',
    labels: {
      description: 'Having fire one shot, you expertly prime another shot, ready another arrow or reload another stone to strike your enemy again.',
      effect: 'When you begin to Load a ranged weapon, make a successful Coordination Test to Load it without spending Action Points. If you fail, you must spend the requisite number of Action Points to finish Loading.'
    }
  },
  {
    id: TalentId.AZIMUTH,
    name: 'Azimuth',
    labels: {
      description: 'You never get lost under a starry sky.',
      effect: 'When you can see the stars, you gain a +20 Base Chance to Navigation Tests. In addition, you always know true north above ground, even during inclement weather.'
    }
  },
  {
    id: TalentId.BAD_AXX,
    name: 'Bad Axx!',
    labels: {
      description: 'Armed with two insanely vicious weapons, you relentlessly cleave into the fray with both hands. This is a particular favorite of Dwarf Slayers whose predilection for this particular fighting style cannot be denied.',
      effect: 'When you hold a one-handed melee weapon in either hand and fail a Martial Melee or Simple Melee Test, you may re-roll to generate a better result, but must accept the outcome. However, if you do not possess Ambidexterity, you must flip the results to fail the re-rolled Skill Test.'
    }
  },
  {
    id: TalentId.BATTLE_MAGICK,
    name: 'Battle Magick',
    labels: {
      description: 'The winds of Magick bend to your whim. In the face of violence, you’ve learned to control the emergent forces of chaos. You weave Æthereal energies to the betterment of your Magicks.',
      effect: 'Foes who are made subject to your Magicks must spend one additional Action Point to properly Counterspell. In addition, you penalize your foe’s ability to Resist your Magicks by a -10 Base Chance.'
    }
  },
  {
    id: TalentId.BEATDOWN,
    name: 'Beatdown',
    labels: {
      description: 'You are an unscrupulous cur, opting to strike joints and other vital areas instead of putting up a fair fight.',
      effect: 'When you Take Aim and then make a successful Melee Attack, you force a foe to Resist a Takedown. You must attack with Brawling or Crushing types of weapons to utilize this Talent.'
    }
  },
  {
    id: TalentId.BLOOD_MAGICK,
    name: 'Blood Magick',
    labels: {
      description: 'With great practice, you have learned to bend the powers of disorder to your whim. However, every dark gift requires a sacrifice in return.',
      effect: 'After you have made the appropriate sacrifice of an innocent creature (a beloved animal like a kitten or puppy for Petty Magick, a farm animal such as a cow or sheep for Lesser Magick or a living person like an Elf or Dwarf for Greater Magick), you can cause any one foe to automatically fail to Resist one cast Magick spell within the next 24 hours. You can only make a sacrifice like this once per day and will likely suffer Corruption for such a heinous act.'
    }
  },
  {
    id: TalentId.CAROUSING,
    name: 'Carousing',
    labels: {
      description: 'You’re accustomed to staying out all night and all too often to finding yourself drinking everyone else underneath the table. When you are drunk, are you a friendly drunk or a mean drunk? You choose.',
      effect: 'When you are Intoxicated, will you be a friendly drunk or a mean drunk? When you’re a friendly drunk, gain a +10 Base Chance to Charm Tests while Intoxicated. When you’re a mean drunk, gain a +10 Base Chance to Intimidate Tests while Intoxicated. You can make this choice every time you become Intoxicated.'
    }
  },
  {
    id: TalentId.CHEAP_SHOT,
    name: 'Cheap Shot',
    labels: {
      description: 'When an attacker is stupid enough to expose their groin when turning away your attack, you use that opportunity to kick them in the tender parts as a low blow.',
      effect: 'When a foe successfully Parries your Melee Attack, immediately make a bare-handed Opportunity Attack.'
    }
  },
  {
    id: TalentId.CLINCH_FIGHTER,
    name: 'Clinch Fighter',
    labels: {
      description: 'You are a natural wrestler, using paralyzing grapples in close quarters combat.',
      effect: 'You penalize your foe’s ability to Resist a Chokehold and Dirty Tricks by a -10 Base Chance to their Skill Test. In addition, when you use a Chokehold, add an additional 1D10 to determine how much physical Peril you inflict.'
    }
  },
  {
    id: TalentId.DETERMINATION,
    name: 'Determination',
    labels: {
      description: 'Your doggedness tends to slow everyone down, but your considerable foresight grants you extraordinary ability.',
      effect: 'When you attempt an Extended Test to take your time, you gain an additional +10 Base Chance to your Skill Test.'
    }
  },
  {
    id: TalentId.DIE_HARD,
    name: 'Die Hard',
    labels: {
      description: 'Pain has come to mean little to you these days, as you heal quickly.',
      effect: 'You reduce the time to Recuperate from your own Injuries by three days, to a minimum of one day. In addition, you never Bleed.'
    }
  },
  {
    id: TalentId.DOPPELGANGER,
    name: 'Doppelganger',
    labels: {
      description: 'As an acute observer of others’ habits, you’re able to mimic their mannerisms with little chance of failure.',
      effect: 'When masquerading as someone of a Social Class other than your own, you gain a +20 Base Chance to Disguise Tests.'
    }
  },
  {
    id: TalentId.EAGLE_EYES,
    name: 'Eagle Eyes',
    labels: {
      description: 'You have exceedingly focused vision, targeting foes accurately over great distances.',
      effect: 'You do not suffer additional hardship when firing ranged weapons at Medium Distance, instead treating it as Short Distance.'
    }
  },
  {
    id: TalentId.FENCERS_PANACHE,
    name: 'Fencer\'s Panache',
    labels: {
      description: 'Your intense studies of dueling have made you into an expert swordsman.',
      effect: 'When you Take Aim and then make a successful Melee Attack, you force a foe to Resist a Disarm. You must attack with weapons possessing the Fast or Finesse Quality to utilize this Talent.'
    }
  },
  {
    id: TalentId.FORKED_TONGUE,
    name: 'Forked Tongue',
    labels: {
      description: 'Lies simply spill from your lips, but others are generally none the wiser.',
      effect: 'When you attempt to deceive someone of a Social Class other than your own, you gain a +20 Base Chance to Guile Tests.'
    }
  },
  {
    id: TalentId.GALLOWS_HUMOR,
    name: 'Gallows Humor',
    labels: {
      description: 'With a morbid sense of humor, you use witticisms to counter the bleak world you live in (and its grim outcomes).',
      effect: 'At your option, you can substitute the Guile Skill in place of Resolve.'
    }
  },
  {
    id: TalentId.GANGSTER_GRIP,
    name: 'Gangster Grip',
    labels: {
      description: '“Step off, knave. If you tryin’ to plough with me, my blunderbuss go bang!”',
      effect: 'When you make an Attack Action with a weapon possessing the Gunpowder Quality within one yard of an opponent, you inflict an additional 1D6 Fury Die to Damage.'
    }
  },
  {
    id: TalentId.GATECRASHER,
    name: 'Gatecrasher',
    labels: {
      description: 'You’ve been trained amongst the martial elite, whose tutelage taught you how to break through a foe’s defenses.',
      effect: 'When you Take Aim and then make a successful Melee Attack, add 3 Damage.'
    }
  },
  {
    id: TalentId.GROUND_POUND,
    name: 'Ground & Pound',
    labels: {
      description: 'Whenever a foe escapes your hold, you sucker punch them right in the gut.',
      effect: 'When a foe successfully Resists your Chokehold, immediately make a bare-handed Opportunity Attack.'
    }
  },
  {
    id: TalentId.GRUESOME_SHOT,
    name: 'Gruesome Shot',
    labels: {
      description: 'In one masterful stroke, you strike your target clean and accurately.',
      effect: 'When you Take Aim and then make a successful Ranged Attack, add 3 Damage.'
    }
  },
  {
    id: TalentId.HANDSPRING,
    name: 'Handspring',
    labels: {
      description: 'You get knocked down, but you get up again.',
      effect: 'You can use the Movement Action called Get Up for 0 Action Points.'
    }
  },
  {
    id: TalentId.HARD_TO_KILL,
    name: 'Hard To Kill',
    labels: {
      description: 'You are stubborn and tough, incapable of being put down. With strength left within, you turn away blows with bitter resolve.',
      effect: 'When you are Grievously Wounded, temporarily add 3 to your Damage Threshold.'
    }
  },
  {
    id: TalentId.HIGHER_MYSTERIES,
    name: 'Higher Mysteries',
    labels: {
      description: 'A rare few dabble in the darkest of Magicks. In its purest of forms, it is vile and destructive to others and soul-corrupting to the magician that wields it. You force the dark to kneel before you, but only after appropriating a suitable sacrifice.',
      effect: 'While Channeling Power, you can voluntarily remove any number of Chaos Dice. However, you suffer 3 additional Corruption for each Chaos Die you remove.'
    }
  },
  {
    id: TalentId.HOLDOUT,
    name: 'Holdout',
    labels: {
      description: 'You find it easy to hide items you’ve palmed in places where no one can find them.',
      effect: 'You always succeed at Skulduggery Tests to conceal objects no larger than a knife about your person.'
    }
  },
  {
    id: TalentId.HOUSEBREAKER,
    name: 'Housebreaker',
    labels: {
      description: 'You’ve likely spent some time as a second story man or been paid to help old mothers locked out of their own cottages.',
      effect: 'When trying to open locks, you gain a +20 Base Chance to Skulduggery Tests.'
    }
  },
  {
    id: TalentId.IMPENETRABLE_WALL,
    name: 'Impenetrable Wall',
    labels: {
      description: 'When you’re surrounded, you manage to outmaneuver foes that are flanking you.',
      effect: 'Opponents do not gain an advantage (such as additional Damage or bonuses to strike) when they flank, outnumber or surround you in combat.'
    }
  },
  {
    id: TalentId.IMPERVIOUS_MIND,
    name: 'Impervious Mind',
    labels: {
      description: 'You spit in the face of fear, your mind being incredibly resilient to events that lead towards stress and madness.',
      effect: 'When you suffer mental Peril, reduce your Peril Condition Track by one less step negatively.'
    }
  },
  {
    id: TalentId.INDIFFERENCE,
    name: 'Indifference',
    labels: {
      description: 'You’ve grown accustomed to the battlefield and the smell of rotting corpses doesn’t bother you.',
      effect: 'When viewing blood-soaked and visceral scenes of death, you always succeed at Resolve Tests to withstand their potential psychological effects (such as with Stress, Fear and Terror) and don’t suffer Corruption due to such scenes.'
    }
  },
  {
    id: TalentId.INCREDIBLE_NUMERATION,
    name: 'Incredible Numeration',
    labels: {
      description: 'You are a human calculator and can determine odds with great speed.',
      effect: 'When counting or cheating, you gain a +10 Base Chance to Skill Tests.'
    }
  },
  {
    id: TalentId.INSTINCTS,
    name: 'Instincts',
    labels: {
      description: 'You do not need to be able to see your enemies clearly in order to strike them.',
      effect: 'While in fog, mist or smoke, you ignore the normal penalties associated with impaired vision.'
    }
  },
  {
    id: TalentId.KIDNEY_SHOT,
    name: 'Kidney Shot',
    labels: {
      description: 'A well-placed shot to the vitals will stagger your enemy.',
      effect: 'You penalize your foe’s ability to Resist a Stunning Blow by a -10 Base Chance to their Skill Test. In addition, when you use a Stunning Blow, your foe loses 2 Action Points, instead of 1 Action Point.'
    }
  },
  {
    id: TalentId.KNIFEWORK,
    name: 'Knifework',
    labels: {
      description: 'You are incredibly adept at using cutting weapons, striking between the chinks of your enemy’s armor and twisting the blade.',
      effect: 'When you deal Damage to a foe using a melee weapon with the Fast Quality, they must Resist with a Toughness Test or begin to Bleed.'
    }
  },
  {
    id: TalentId.LARCENY,
    name: 'Larceny',
    labels: {
      description: 'You engage in illegal activities and find a natural home in the criminal underworld.',
      effect: 'When fencing black market goods or procuring illegal information, you gain a +20 Base Chance to Bargain Tests.'
    }
  },
  {
    id: TalentId.LEFT_HANDED_PATH,
    name: 'Left-Handed Path',
    labels: {
      description: 'You possess an inexorable command over the powers of chaos and disorder and are resilient to their corrupting effects.',
      effect: 'When you Channel Power, if your Chaos Dice do not result in a Chaos Manifestation, you avoid gaining Corruption as a result.'
    }
  },
  {
    id: TalentId.LIGHTNING_REACTION,
    name: 'Lightning Reaction',
    labels: {
      description: 'You are unnaturally fast and able to assess the situation with lightning reflexes.',
      effect: 'In combat, you gain 1 additional Action Point. However,it can only be used to Dodge and Parry.This Action Point refreshes at the beginning of your Turn.'
    }
  },
  {
    id: TalentId.LIGHT_SLEEPER,
    name: 'Light Sleeper',
    labels: {
      description: 'You rest with one eye open, ever-watchful for danger.',
      effect: 'When you are sleeping, you cannot be Surprised or left Helpless.'
    }
  },
  {
    id: TalentId.LONG_WINDED,
    name: 'Long-Winded',
    labels: {
      description: 'You can exert yourself above and beyond normal limits.',
      effect: 'When you suffer physical Peril, reduce your Peril Condition Track by one less step negatively.'
    }
  },
  {
    id: TalentId.MARINER,
    name: 'Mariner',
    labels: {
      description: 'You ply waterways nearest the shore, along river ways and deep lakes with ease.',
      effect: 'When boating in waters where the shore can be seen, you gain a +20 Base Chance to Pilot Tests.'
    }
  },
  {
    id: TalentId.MENACING_DEMEANOR,
    name: 'Menacing Demeanor',
    labels: {
      description: 'You are intimidating and tend to act in a prickly manner.',
      effect: 'When you succeed at an Intimidate Test, you inflict 1D10+1 mental Peril.'
    }
  },
  {
    id: TalentId.MEETING_OF_THE_MINDS,
    name: 'Meeting Of The Minds',
    labels: {
      description: 'Your words bring harmony and accord during an exchange, persuading the bitterest of rivals towards a good middle ground.',
      effect: 'When attempting to bring compromise between two extreme positions, you gain a +10 Base Chance to Skill Tests.'
    }
  },
  {
    id: TalentId.MILITARY_FORMATION,
    name: 'Military Formation',
    labels: {
      description: 'Standing alongside your allies, you lead them towards victory as you occupy the van.',
      effect: 'When you successfully use Inspiring Words in combat, both you and the allies you inspire raise their Initiative by 3.'
    }
  },
  {
    id: TalentId.MINE_CRAFT,
    name: 'Mine Craft',
    labels: {
      description: 'You have an aptitude for not getting lost below ground, using the flow of water and the marks upon rocks to find your way.',
      effect: 'When beneath the earth, you gain a +20 Base Chance to Navigation Tests. In addition, you always know true north below ground, even in total darkness.'
    }
  },
  {
    id: TalentId.MOUNTED_DEFENSE,
    name: 'Mounted Defence',
    labels: {
      description: 'You are an expert rider, and can duck and weave with ease to defend yourself while astride a mount or on a moving vehicle.',
      effect: 'When fighting on horseback or atop a vehicle like a cart, coach or wagon, you can substitute your Drive or Ride Skill in place of Coordination when you Dodge or Parry. In addition, you always succeed at Skill Tests to retain control when your mount or the animal that’s pulling your vehicle suffers Damage.'
    }
  },
  {
    id: TalentId.MULTILINGUAL,
    name: 'Multilingual',
    labels: {
      description: 'While you may not be able to speak every language, you can convey the simplest of ideas by gesticulating and articulating words in a way that can be understood.',
      effect: 'You can communicate simple thoughts through words and hand signals with other races whom you do not share the same language with.'
    }
  },
  {
    id: TalentId.NERVES_OF_STEEL,
    name: 'Nerves Of Steel',
    labels: {
      description: 'Your will alone is often enough to withstand the rigors of fatigue and strain.',
      effect: 'When resting in unsafe places (as mentioned in Chapter 9: Hazards & Healing), your Peril Condition Track moves all steps positively to Unhindered.'
    }
  },
  {
    id: TalentId.NO_MERCY,
    name: 'No Mercy',
    labels: {
      description: 'Your implacable nature grants no man mercy, whether he begs for it or otherwise.',
      effect: 'When you Injure a foe with a melee weapon, you inflict two Injuries instead of one.'
    }
  },
  {
    id: TalentId.OVERWHELMING_FORCE,
    name: 'Overwhelming Force',
    labels: {
      description: 'When armed with a heavy weapon, you can deliver crushing blows that splinter shields and shatter weapons.',
      effect: 'If you roll a Critical Success with a Melee Attack, you inflict the Ruined! Quality to a foe’s shield, weapon or armor (your choice). Overwhelming Force has no effect on Castle- forged trappings, and you must be armed with a two-handed melee weapon.'
    }
  },
  {
    id: TalentId.RUN_AMOK,
    name: 'Run Amok',
    labels: {
      description: 'You plow through your enemies, driving the business end of your weapon home with terrible accuracy.',
      effect: 'When you Charge, you gain a +20 Base Chance to strike with a melee-based Attack Actions and Perilous Stunts.'
    }
  },
  {
    id: TalentId.RURAL_SENSIBILITY,
    name: 'Rural Sensibility',
    labels: {
      description: 'You are country-born and know how to get around unnoticed in the wilderness and countryside.',
      effect: 'When you attempt to hide in rural environments, you gain a +20 Base Chance to Stealth Tests.'
    }
  },
  {
    id: TalentId.SADDLE_BORN,
    name: 'Saddle-Born',
    labels: {
      description: 'Hi-yo and away!” You are an accomplished rider in the saddle.',
      effect: 'When fighting on horseback or atop a vehicle like a cart, coach or wagon, you gain a +10 Base Chance to strike with melee and ranged weapons.'
    }
  },
  {
    id: TalentId.SECOND_SKIN,
    name: 'Second Skin',
    labels: {
      description: 'You’ve grown accustomed to the weight of armor and move around unimpeded.',
      effect: 'You can Dodge when wearing armor with the Heavy Quality.'
    }
  },
  {
    id: TalentId.SECRET_SIGNS,
    name: 'Secret Signs',
    labels: {
      description: 'Vagabonds, rural folk and rangers use a series of intricate patterns to leave short messages and you have learned to read them.',
      effect: 'When you attempt to understand secret symbols, hand gestures or signs left behind by others as a warning, you gain a +10 Base Chance to Skill Tests.'
    }
  },
  {
    id: TalentId.SHIELD_SLAM,
    name: 'Shield Slam',
    labels: {
      description: 'You are a literal defensive wall, shoving backwards your enemies with great might and speed.',
      effect: 'When you wield a shield, the melee weapon you wield in your primary hand gains the Powerful Quality.'
    }
  },
  {
    id: TalentId.SHOOT_FROM_THE_HIP,
    name: 'Shoot From The Hip',
    labels: {
      description: 'You possess such prowess with guns that you need not line up the sights to fire.',
      effect: 'You can quick draw any one-handed ranged weapon with the Gunpowder Quality for Opportunity Attacks.'
    }
  },
  {
    id: TalentId.SIEGECRAFT,
    name: 'Siegecraft',
    labels: {
      description: 'Siege warfare and investiture are your forte, having spent time in the field perfecting the art of war.',
      effect: 'When you attempt to determine appropriate distances for siege engines and employ them to hit, you gain a +20 Base Chance to Warfare Tests.'
    }
  },
  {
    id: TalentId.SILVER_TONGUE,
    name: 'Silver Tongue',
    labels: {
      description: 'You know how to wheedle both your lesser and peers, persuading them with silky words and flattery to act in your favor.',
      effect: 'When you attempt to persuade those of a different Social Class other than your own, you gain a +20 Base Chance to Charm Tests.'
    }
  },
  {
    id: TalentId.SPIRITED_CHARGE,
    name: 'Spirited Charge',
    labels: {
      description: 'Atop a vehicle or horse, you ride like a hellion borne from the gates of hell.',
      effect: 'When you use the Drive or Ride Skills, add +3 to your Movement.'
    }
  },
  {
    id: TalentId.SPRINT,
    name: 'Sprint',
    labels: {
      description: 'You move at such a fast pace that others cannot get a bead on you when drawing their bows or aiming their guns.',
      effect: 'When you Charge or Run, you cannot be struck by attacks made with ranged weapons until your next Turn.'
    }
  },
  {
    id: TalentId.STRANGLERS_UNION,
    name: 'Stranglers Union',
    labels: {
      description: 'You’re a straight-up murderer, dealing death silently and effectively.',
      effect: 'When you make an Attack Action with a blackjack, bullwhip or garrote, your foe cannot Dodge or Parry this attack.'
    }
  },
  {
    id: TalentId.STREETWISE,
    name: 'Streetwise',
    labels: {
      description: 'You were born in the streets, and know how to get around unnoticed along the gutters and back alleys.',
      effect: 'When you attempt to hide in urban environments, you gain a +20 Base Chance to Stealth Tests.'
    }
  },
  {
    id: TalentId.STRONG_JAW,
    name: 'Strong Jaw',
    labels: {
      description: 'Dizziness and debilitation doesn’t really affect you, because you’ve learned to take your licks.',
      effect: 'When attempting to Resist Perilous Stunts, you gain a +20 Base Chance to succeed.'
    }
  },
  {
    id: TalentId.SUPERNATURAL_PARANOIA,
    name: 'Supernatural Paranoia',
    labels: {
      description: 'Your encounters with the supernatural and the terrifying have made you extremely paranoid.',
      effect: 'When your Chaos Ranks are higher than your Order Ranks, add 3 to your Initiative.'
    }
  },
  {
    id: TalentId.SWORD_BOARD,
    name: 'Sword & Board',
    labels: {
      description: 'When armed with a shield and sword, you are a whirlwind of blows.',
      effect: 'If a foe successfully Parries your Melee Attack, immediately make an Opportunity Attack using a shield as an improvised hand weapon.'
    }
  },
  {
    id: TalentId.TAKE_EM_DOWN,
    name: 'Take \'Em Down',
    labels: {
      description: 'A perfect throw can bring down your quarry as they run away. With a carefully-placed shot, you can disarm or knock down any foe.',
      effect: 'At Distance, you can substitute either your Simple Ranged or Martial Ranged Skills when you attempt to use Disarm, Stunning Blow or Takedown. Note that you do not inflict Damage when you attempt such maneuvers. You must be armed with a loaded ranged weapon in order to Take ‘Em Down.'
    }
  },
  {
    id: TalentId.THERE_WILL_BE_BLOOD,
    name: 'There Will Be Blood',
    labels: {
      description: 'After dealing a fatal blow, blood-curdling screams and convulsions always follow from your enemy.',
      effect: 'You roll an additional 1D6 Chaos Die to determine if you Injure foes.'
    }
  },
  {
    id: TalentId.TOUGH_AS_NAILS,
    name: 'Tough As Nails',
    labels: {
      description: 'Scars ripple up and down your body, telling tale of horrendous injuries you’ve suffered over the years.',
      effect: 'You no longer suffer Moderate Injuries, remaining uninjured as a result.'
    }
  },
  {
    id: TalentId.TRUE_GRIT,
    name: 'True Grit',
    labels: {
      description: 'You have an incredibly hardy physique, powering through pain and suffering with resolve.',
      effect: 'You are immune to the effects of Knockout! and Stunning Blow.'
    }
  },
  {
    id: TalentId.WINDS_OF_CHANGE,
    name: 'Winds Of Change',
    labels: {
      description: 'With a subtle ‘tug’ on the web of the Æthereal Veil, you alter the pattern of emergent chaos to take shape from the Abyss, in whatever form you may desire.',
      effect: 'When using Burst, Cone and Explosion Template Magick, you can reshape it so as to not harm your allies, hurting only your foes. See Chapter 7: Trappings to learn more about Templates.'
    }
  },
  {
    id: TalentId.WORLDLY,
    name: 'Wordly',
    labels: {
      description: 'You are highly knowledgeable about the world around you and the world at large, having either travelled or read widely. You’re innately friendly and people enjoy your company.',
      effect: 'When gossiping or spinning a tale, you gain a +20 Base Chance to Rumor Tests.'
    }
  },
];
