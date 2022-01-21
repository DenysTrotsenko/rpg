import {Skill} from './models';
import {AttributeId, SkillId} from './enums';

export const SKILLS: Skill[] = [
  {
    id: SkillId.ALCHEMY,
    name: 'Alchemy',
    attribute: AttributeId.INTELLIGENCE,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Alchemy’s practitioners spend years divining the hidden secrets of true transmutation, although its everyday use tends to consist of concocting serums, pain relievers, abortifacients and other medicines. Although Alchemy is essentially a form of science, it borders on being a more mundane form of Magick, practiced by both the wise and the insane. Alchemical compounds are created through various processes of heating and cooling substances. Drugs, poisons and other substances useful to adventurers can be crafted using this Skill. An alchemist’s laboratory tends to be a strange amalgam of scientific notes, erudite symbols of Magick, smells and boiling baubles. Rules for using alchemy are covered in Chapter 9: Hazards & Healing.',
      focuses: 'Gunpowder, Medicine, Poison, Wytchstone',
      difficulties: ''
    }
  },
  {
    id: SkillId.ATHLETICS,
    name: 'Athletics',
    attribute: AttributeId.BRAWN,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Athletics measures physical prowess. It reflects your ability to scale up surfaces and ropes, tread and swim water without tiring, propel vessels while rowing, overpower others in contests of strength and push heavy objects. It also aids you when lifting heavy objects or great feats of stamina, such as sprinting and vaulting.',
      focuses: 'Climb, Lift, Row, Swim, Wrestle',
      difficulties: ''
    }
  },
  {
    id: SkillId.AWARENESS,
    name: 'Awareness',
    attribute: AttributeId.PERCEPTION,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Awareness represents the ability to visually notice minute details and sounds, scents within the air, watch for ambushes, find hidden objects and spot contrivances designed to trap or kill. You’ll use Awareness not only to visually see, also to sense using smell, taste and touch. You may also use Awareness to estimate numbers and distances.\nThis Skill doesn’t allow you to see through lies, sense motives or innuendo – refer to the Scrutinize Skill in those cases. If you wish to listen in on a conversation or distinctly make something out you heard, refer to the Eavesdrop Skill instead.',
      focuses: 'Count, Discern Details',
      difficulties: ''
    }
  },
  {
    id: SkillId.BARGAIN,
    name: 'Bargain',
    attribute: AttributeId.FELLOWSHIP,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Bargain allows you to interpret the underlying factors of a commercial transaction, barter with trade goods, haggle over prices, find a common ground with another party, grease the wheels of commerce through use of bribery, appraise the worth of objects d’art and even procure illegal contraband.\nYou can use this Skill in many different ways, but its most common use is to haggle over the price of goods. You may also use the Bargain Skill to appraise the worth of jewels, trade goods and even priceless relics of an age long past. Your Difficulty Rating may be improved if you have Skill Ranks in other Skills that may be related to the object you’re attempting to evaluate (such as having the Tradecraft Skill with a Focus in Tailoring to determine the value of a bolt of silk). Your GM will always let you know when there may be an existing synergy between two such Skills.',
      focuses: 'Bribery, Courtly Intrigue, Diplomacy, Evaluate, Haggle',
      difficulties: ''
    }
  },
  {
    id: SkillId.CHARM,
    name: 'Charm',
    attribute: AttributeId.FELLOWSHIP,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Charm is used to please others with flattery and pleasing words. A kind word, a soft smile, a pleasant handshake or hug may be used to illustrate your personal charms and enchant others. This Skill can modify the mood of others, persuading them towards your favor or causing them to change their opinions about things they may not necessarily support. It can be used to impress others with your affable nature or seduce those who may find you attractive.\nThis Skill doesn’t allow you to produce lies, false accounts or con games – refer to the Guile Skill in those cases.',
      focuses: 'Acting, Begging, Comedy, Mime, Mimic, Play Music, Seduce, Sing, Storytelling, Write Poetry',
      difficulties: ''
    }
  },
  {
    id: SkillId.COORDINATION,
    name: 'Coordination',
    attribute: AttributeId.AGILITY,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Coordination represents dexterity, flexibility, balance and grace in movement.You can use this Skill to perform acrobatic feats, slip out of bonds, avoid falling debris, manipulate objects with delicacy and avoid oncoming attacks by leaping out of the way. You generally use Coordination as a reaction to something else. Its most common application is to evade traps, avoid being pushed off your feet and weaseling out of bonds and shackles.',
      focuses: 'Acrobatics, Balance, Contortion, Dance, Dodge Attack, Juggle',
      difficulties: ''
    }
  },
  {
    id: SkillId.COUNTERFEIT,
    name: 'Counterfeit',
    attribute: AttributeId.INTELLIGENCE,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Counterfeit represents a pool of abilities utilized to falsify documents, making them appear official. This Skill is oftentimes used to duplicate signatures, handwriting styles and author other records. It’s also related to your ability to reproduce near-replicas of objets d’art, cobbling together a facsimile of a painting, statue, item of jewelry and a host of other items. In addition, Counterfeit can be used to forge currency and shave coins to dupe merchants and other pedlars from their wares and to embezzle money from others, providing you have made and established a bond of trust with your mark.\nIn the case of most forged documents, you should already know how to read and write (as per the Education Skill). To reproduce other works, you must be able to craft the objects in question (as per the Tradecraft Skill). If you cannot read and write or craft, having the document or object you intend to reproduce will suffice (although your chances to succeed will likely suffer). Most importantly, you will never outright know whether the reproduction was successfully created or not. The only time you’d know whether the copy was successful or not is during the transaction with a Secret Test. Whenever you attempt to resell forged objects or pass them off as official or original, you may be required to employ use of Guile to spin a tale or give credence to the legitimacy of the Counterfeit.',
      focuses: 'Clip Coins, Embezzle, Forgery',
      difficulties: ''
    }
  },
  {
    id: SkillId.DISGUISE,
    name: 'Disguise',
    attribute: AttributeId.FELLOWSHIP,
    type: 'special',
    focuses: [],
    labels: {
      description: 'The Disguise Skill represents the ability to masquerade as someone else, hide your own identity in public or conceal your true feelings from others. Theatrics and imitation are the foundation of any good disguise. The more you know about the people (or person) you’re trying to hide or mimic, the more effective your disguise.\nYou can use this Skill in its most traditional way by employing tools of the trade to change your appearance – heavy cosmetics, appropriate clothing, different posture, regional accent and different behavioral traits or personality tics. Changing your appearance to look like that of another group of people or race will be easier if you have the appropriate clothes or know enough about their culture. Dressing as the opposite sex can be tough. However, disguises to imitate specific people can be much more difficult, particularly if you intend to traffic among people they know.',
      focuses: 'Act, Assume Identity, Hide Social Class',
      difficulties: ''
    }
  },
  {
    id: SkillId.DRIVE,
    name: 'Drive',
    attribute: AttributeId.BRAWN,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Drive represents the ability to control common vehicles, such as simple carts, overland carriages, dog-drawn sleds, four-wheeled wagons and even war chariots. The Skill is also used to maneuver vehicles round tight corners, race across the countryside, plow through a hedge and even roll over others should they stand in your way.\nUnless you’re doing something out of the ordinary, a Test is not required to Drive a vehicle. However, Drive Tests are required if you want to attempt a difficult maneuver or race against others. Depending on the severity and inherent challenge of the maneuver, you may be required to roll multiple Drive Tests to successfully evade debris or navigate tight corners.',
      focuses: 'Carting, Coaching, Wagoner',
      difficulties: ''
    }
  },
  {
    id: SkillId.EAVESDROP,
    name: 'Eavesdrop',
    attribute: AttributeId.PERCEPTION,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Eavesdrop allows you to listen to and perceive low sounds, usually conversations between two or more people. By listening to them or watching the movement of their lips, you can make out distinct sounds and determine the differences between mumbling and actual words. With a clear view of the people speaking, you can even pick up slight intonations and body language, giving further indication as to what is being said. You can also use it to hide the movement of your own lips to prevent Eavesdrop attempts on your conversations.\nSucceeding at an Eavesdrop Test doesn’t give you all of the details of the conversation. Instead, you gain a general impression of what was said. For example, you see two courtiers in conversation, but do not hear exactly what they are saying, though certain words suggest that they are plotting an assassination attempt against a rival aristocrat.',
      focuses: 'Lip Reading, Listen In, Sign Language, Ventriloquism',
      difficulties: ''
    }
  },
  {
    id: SkillId.EDUCATION,
    name: 'Education',
    attribute: AttributeId.INTELLIGENCE,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Education represents both literacy and schooling, but it extends far beyond merely being able to read and write. This Skill lends significant insight into the histories and practices of the world you live within. Education covers many different fields of study, each representing the study of a body of lore, possible academic research or ’rogue scholar’ pursuits. Although anyone with a Skill Rank in Education will have a basic understanding of various scholastic subjects, Focuses give them a specific specialization in an area of knowledge. While the Focuses above are the most commonly studied by the educated in a grim & perilous world, you can work with your GM to develop new ones.',
      focuses: 'Astronomy, Cartography, Geography, Heraldry, History, Law, Politics, Science, Theology',
      difficulties: ''
    }
  },
  {
    id: SkillId.FOLKLORE,
    name: 'Folklore',
    attribute: AttributeId.INTELLIGENCE,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Folklore represents a general, broad knowledge of the world around you. Unlike academic learning (such as per the Education Skill), it represents both second-hand and first person knowledge of the histories, traditions, faith and notable figures of a particular region. Drawn from the stories  and oral traditions you’ve heard f rom merchants, troubadours and family, it indicates an understanding of cultures other than your own. Its knowledge can also include the socially- accepted norms of both behavior and belief amongst the different social classes, including the courtesies to adopt and the proper forms of address to use.\nBesides being used to gain knowledge about the law, local history and institutions of your own culture, it can also be used to represent knowledge about geography, taboos, famous personalities, faith and even customs of people other than your own. You may be able to identify landmarks, secret signs left behind by other travelers, work out the movements and migrations of people and seek to understand the basic religious practices of your own region and others outside of it. You may also know what grows in the area, which parts are possibly dangerous and what the expected weather conditions will be.',
      focuses: 'Creature Lore, Foreign Lore, Local Lore',
      difficulties: ''
    }
  },
  {
    id: SkillId.GAMBLE,
    name: 'Gamble',
    attribute: AttributeId.INTELLIGENCE,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Gambling represents a general know-how for common games of chance with cards, dice and darts. Although anyone can make wagers and play games, some are more adept at spotting common mistakes and playing upon the weaknesses of their opponents. Although this Skill does not allow you to cheat, it does provide some insight as to the outcome of the game.\nSome GMs may simply prefer Players to roll dice contests in order to resolve high stakes gambling. Others may require you and the other Players around the table to play out an actual game of cards or dice amongst each other. This can be an exciting change of pace, presenting a colorful distraction from your normal gaming schedule. You should feel encouraged to continue staying in-Character during these sort of side games.',
      focuses: 'Ball Games, Cards, Chess, Cockfighting, Dice',
      difficulties: ''
    }
  },
  {
    id: SkillId.GUILE,
    name: 'Guile',
    attribute: AttributeId.FELLOWSHIP,
    type: 'common',
    focuses: [],
    labels: {
      description: 'The Guile Skill represents general underhandedness in conversation, using trickery and lies to get what you want. It is oftentimes used to subtly manipulate others’ feelings and emotions by sewing the seeds of doubt within their mind. With this Skill, you can play word games or use irony to confuse others and engage in political mind games with kingmakers and run verbal circles around demagogues. You  can fool others in order to cover up your true intentions with this Skill. Blather, innuendo, deception and bluffing – these are the watchwords of those who use Guile to get what they want.',
      focuses: 'Appear Innocent, Blather, Con Games, Deception, Innuendo, Thieves’ Cant',
      difficulties: ''
    }
  },
  {
    id: SkillId.HANDLE_ANIMAL,
    name: 'Handle Animal',
    attribute: AttributeId.FELLOWSHIP,
    type: 'special',
    focuses: [],
    labels: {
      description: 'The Handle Animal Skill represents the ability to subdue, command and train creatures classified as Animals. Although this Skill doesn’t allow those who use it to domesticate animals that are not meant to be domesticated, it does allow one to tame creatures. This Skill also teaches the proper way to care for and groom an animal, establishing a bond of trust and submission. Use of this Skill allows for the domestication of animals for food or work as livestock.\nYou can use this Skill to coerce or tame those creatures classified as Animals. Chickens, dogs, horses, falcons, pigs and other farm creatures can easily be trained to obey you. However, should you wish to teach one of these animals more complex tricks you must teach it over nine consecutive days. If successful, you are master of the animal and it will learn one simple trick. You can never impart more than a number of tricks to a single animal in excess of your [FB], however.',
      focuses: 'Animal Care, Calm Animal, Rustling, Teach Trick',
      difficulties: ''
    }
  },
  {
    id: SkillId.HEAL,
    name: 'Heal',
    attribute: AttributeId.INTELLIGENCE,
    type: 'special',
    focuses: [],
    labels: {
      description: 'The Heal Skill represents an acute understanding of the significance in the four humours of the body, how they relate to one another and how the wounded can be treated by paying heed to these temperaments. With this Skill, you can exercise this knowledge and how it relates to the excess of fluids which cause miasma and sickness.\nYou can treat the ill and the healthy alike, tending to their needs for aches and pains, act as midwife, render abortifacients and even tend to the injured. You may adhere to a classical school of thought, using emetics and bloodletting to cure illness through humoralism. Or, you may prescribe to a mechanical school of thought, seeing the body as a complex machine that can be ’fixed’ with the right techniques. Regardless of which school you adhere to, those who practice the healing arts always pay some sort of lip service to the gods.',
      focuses: 'Bind Wounds, Bloodletting, Kiss of Life, Perform Psychosurgery, Perform Surgery, Prepare Bandages, Treat Disease, Treat Injury',
      difficulties: ''
    }
  },
  {
    id: SkillId.INCANTATION,
    name: 'Incantation',
    attribute: AttributeId.WILLPOWER,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Incantation is a Skill that’s used to tap into the Æthereal Veil and to reach beyond the stars or peer into the Abyss to command Magick. It can be used to identify strange Magickal symbols, understand occult activities, participate in rituals, research otherworldly creatures, interpret omens and even gain understanding of superstitions made real. In addition, use of Incantation is relied upon by would-be seers, diviners, tarot card readers and other types of spiritualists.\nExpressly, this Skill is used for arcane and divine Magickal practices. You can learn more about Magick in Chapter 10: Grimoire.',
      focuses: 'Astrology, Card Reading, Cast Runes, Concentration, Conduct Ritual, Counterspell, Dream Interpretation, Hypnotize, Learn Magick, Palmistry, Scapulimancy, Scrying',
      difficulties: ''
    }
  },
  {
    id: SkillId.INTERROGATION,
    name: 'Interrogation',
    attribute: AttributeId.WILLPOWER,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Interrogation is the ability to draw answers from an unwilling subject using a variety of physical and emotional methods. It allows you to cause duress in your subject, inflicting mental fatigue upon them as you begin to get down to the heart of the truth. Interrogation often relies on torture, as you inflict bodily harm upon a subject to coerce them to speak the truth. A nasty mix of hot tar, branding irons, a cat’s paw, red-hot coals, thumbscrews, pliers and sharpened spoons to scoop out eyes are the most common trappings of any worthy Jailer. Torture devices such as the brazen bull, breaking wheels, iron maiden and the pear of anguish are often used by royal torturers. The only limit to what devices and methods you use during an interrogation is how far you’re willing to go to extract the desired information.',
      focuses: 'Mental Torture, Physical Torture',
      difficulties: ''
    }
  },
  {
    id: SkillId.INTIMIDATE,
    name: 'Intimidate',
    attribute: AttributeId.BRAWN,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Intimidation is the power to bully others into doing something you want. By using both physical appearance and verbal commands, you try to cow others before you, posturing aggressively like a dog ready to pounce. You attempt to terrify others with your words and actions, suggesting that you’ll do violence upon them should they not back down. Similarly, you can use this Skill to cause others to back out of a fight, causing them to either shrink away from you or to stand proud but stay their hand.',
      focuses: 'Physical Presence, Threaten',
      difficulties: ''
    }
  },
  {
    id: SkillId.LEADERSHIP,
    name: 'Leadership',
    attribute: AttributeId.FELLOWSHIP,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Leadership is the ability to enlist the support of allies and followers, unifying them under your guidance against a common foe or cause. You can use this Skill to give tactical orders to forces under your command, much like a general does on the battlefield; to stir emotions and foment rebellion, such as an Anarchist extolling a crowd to storm the barricades; and to instill a belief in onlookers, such as a firebrand inspiring people toward a higher plane of spirituality.',
      focuses: 'Incite Rebellion, Military Command, Spiritual Leadership, Stewardship',
      difficulties: ''
    }
  },
  {
    id: SkillId.MARTIAL_MELEE,
    name: 'Martial Melee',
    attribute: AttributeId.COMBAT,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Soldiers, mercenaries and all manner of trained professionals proficient in the martial arts have a Skill Rank in Martial Melee. Besides enabling you to effectively wield weapons in hand-to-hand combat, it also allows you to maintain the quality of Martial Melee weapons and perform general maintenance to keep them in usable condition.',
      focuses: 'Bladed, Crushing, Parry Attack',
      difficulties: ''
    }
  },
  {
    id: SkillId.MARTIAL_RANGED,
    name: 'Martial Ranged',
    attribute: AttributeId.COMBAT,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Martial Ranged Skill is used by most professional targeteers and scouts. Archers, Dragoon, hunters, horse-borne Berserkers and all manner of trained professionals proficient in the martial arts have at least one Skill Rank in this Skill. Besides enabling you to effectively fire missile weapons in ranged combat, it also allows you to maintain the quality of Martial Ranged weapons and perform general maintenance to keep them in usable condition.',
      focuses: 'Gunpowder, Missile',
      difficulties: ''
    }
  },
  {
    id: SkillId.NAVIGATION,
    name: 'Navigation',
    attribute: AttributeId.INTELLIGENCE,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Navigation represents the ability to accurately determine distance, direction and routes across the world, orienteering over land and sailing over the sea. This Skill relies on landmarks and maps to find your way overland and the movement and alignment of the stars and constellations as the seasons pass, to help you find your way across the sea. You can use this Skill to plot a course towards a destination, taking into account the landscape, weather and roads so as to arrive in a faster time. Even in unfamiliar lands or on unfamiliar seas, you can chart a route should there be someone who can tell you what to look for or indicate prominent landmarks.',
      focuses: 'Guide, Orientation, Overland Travel',
      difficulties: ''
    }
  },
  {
    id: SkillId.PILOT,
    name: 'Pilot',
    attribute: AttributeId.AGILITY,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Pilot represents the ability to sail or row water-going vessels, from simple river rowing boats and barges to dinghies and the triple-masted ships of the open seas. This Skill covers vessels powered by paddle and sail. It also covers general maintenance and upkeep of these boats; scrubbing decks, unloading and reloading cargo, repairing broken oars, patching holes, attending to torn sails and a host of other repairs minor and major that are needed to keep a vessel ship-shape and in top working order.',
      focuses: 'Boating, Ocean Lore, River Lore, Sailing',
      difficulties: ''
    }
  },
  {
    id: SkillId.RESOLVE,
    name: 'Resolve',
    attribute: AttributeId.WILLPOWER,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Resolve is the ability to keep yourself calm under pressure. It allows you to steel your mind, focusing on your inner strength to maintain resolve when thrust into situations that Test your will. When confronted by the supernatural or horrifying situations, you use this Skill to let the fear wash over you and through you – for fear is the ‘little death’, as Adherents are wont to say. Stress and anger, trauma and hate – these are the sorts of things you can attempt to withstand with the Resolve Skill.\nThe most common use for the Resolve Skill is to resist the effects of madness and shake off the effects of intimidation. It also allows you to resist certain types of mind control Magick. The GM will generally call upon you to make these Tests as a reaction to a situation. Failure often results in losing your edge, while Critical Failure can cause you to completely lose it. Most of these results are handled by the GM.',
      focuses: 'Resist Fear, Resist Magick, Resist Stress, Resist Terror',
      difficulties: ''
    }
  },
  {
    id: SkillId.RIDE,
    name: 'Ride',
    attribute: AttributeId.AGILITY,
    type: 'special',
    focuses: [],
    labels: {
      description: 'The Ride Skill is primarily used to mount and ride atop animals trained to bear others, such as horses and ponies. The Skill is to gallop and race, leap over hedges and fences, ride across difficult terrain, leap atop your mount while running or jumping from a window and to calm your mount when it is stressed.\nMuch like the Drive Skill, unless you’re doing something out of the ordinary, a Test is not required to Ride an animal. However, Ride Tests are required if you want to attempt a difficult maneuver or race against others. Depending on the severity and inherent challenge of the maneuver, you may be required to roll multiple Ride Tests to successfully evade debris or navigate tight corners.\nShould you attempt to mount an untamed animal – such as a wild horse or steer –you must succeed at a Ride Test. If successful, you to gain control of the creature for a number of minutes equal to your [AB]. A Ride Test may also be required if you’re atop a dray horse, mule, palfrey horse or pony in tense situations. These animals are not accustomed to the battlefield and will often spook or attempt to bolt away when faced with the scent of blood or the clang of steel against steel.',
      focuses: 'Ride Animal, Ride Beast, Trick Riding',
      difficulties: ''
    }
  },
  {
    id: SkillId.RUMOR,
    name: 'Rumor',
    attribute: AttributeId.FELLOWSHIP,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Rumor is used to gather information from social circles, stimulating conversation by being gregarious and talkative. It can be used to interact with strangers and friends alike, appealing to them with your personality or just chewing the fat. Unlike other social Skills such as Charm, Guile and Intimidate, this Skill is used to specifically appeal to larger groups by being an extrovert. Rumor is a good way to get the latest political or social news, dissect the latest gossip and spread rumors all at the same time. There is invariably a kernel of truth to be found in all of these and perhaps even particularly harmful dirt or secrets that may be revealed by this Skill.',
      focuses: 'Etiquette, Gossip, Linguistics, Public Speaking, Secret Language',
      difficulties: ''
    }
  },
  {
    id: SkillId.SCRUTINIZE,
    name: 'Scrutinize',
    attribute: AttributeId.PERCEPTION,
    type: 'common',
    focuses: [],
    labels: {
      description: 'The Scrutinize Skill represents the ability to understand motives and underlying intentions in others. It relies on hearing and vision to assess each participant’s part in a conversation; the way they intone their words, whether they fidget or look away as they speak and if their body language is unusual. Note that you can also deduce tone and intention from the written word, providing you possess the Education Skill. Finally, it can be used to recall things from memory.\nThis Skill doesn’t allow you to see minute details, take account of numbers or see through an ambush – refer to the Awareness Skill in those cases.',
      focuses: 'Cryptography, Detect Lies, Memory, Sense Social Class',
      difficulties: ''
    }
  },
  {
    id: SkillId.SIMPLE_MELEE,
    name: 'Simple Melee',
    attribute: AttributeId.COMBAT,
    type: 'common',
    focuses: [],
    labels: {
      description: 'The Simple Melee Skill is employed when wielding common weapons in hand-to-hand fights and battles. Simple Weapons, such as a bullwhip, cudgel and woodsman’s axe are easy to use, require little training and are commonly carried on a belt.This Skill is gained by training with improvised weapons taken from the battlefield left shattered and abandoned or by being members of a militia. It also allows you to maintain the quality of Simple Melee weapons and perform general maintenance to keep them in usable condition.',
      focuses: 'Bladed, Brawling, Crushing, Parry Attack',
      difficulties: ''
    }
  },
  {
    id: SkillId.SIMPLE_RANGED,
    name: 'Simple Ranged',
    attribute: AttributeId.COMBAT,
    type: 'common',
    focuses: [],
    labels: {
      description: 'The Simple Ranged Skill is used when wielding common weapons to fight with at a distance. Most are easy to use, such as a shepherd’s sling or hunting bow. The Skill is typically used by hunters turned peasant militiamen or irregular forces and you likely gained training from one of these groups. It also allows you to maintain the quality of Simple Ranged weapons and perform general maintenance to keep them in usable condition.',
      focuses: 'Gunpowder, Missile',
      difficulties: ''
    }
  },
  {
    id: SkillId.SKULDUGGERY,
    name: 'Skulduggery',
    attribute: AttributeId.AGILITY,
    type: 'special',
    focuses: [],
    labels: {
      description: 'There is nothing that is socially acceptable about the Skulduggery Skill, since it encapsulates practically everything larcenous or illegal that you might do using your hands. You can use this Skill to bypass locked doors and chests without a key to hand, disable security contrivances and complex traps, use simple prestidigitation to palm small objects and hide cards and conduct simple robberies, such as cutting coin purses and snatching bracelets.\nSkulduggery Tests are often tough to make if someone is watching. While you may be able to use this Skill to make small objects disappear in f ront of onlookers, it requires some form of distraction to do so. This is particularly helpful when attempting to cheat at cards! Similarly, using this Skill to snatch coin purses or cut pockets can be difficult unless you are amongst a crowd. Of course, there are simple techniques you can use to draw your mark’s attention away from you and your GM will always take these under consideration.',
      focuses: 'Disable Trap, Lock Picking, Palm Object, Pick Pocket, Set Trap, Window Fishing',
      difficulties: ''
    }
  },
  {
    id: SkillId.STEALTH,
    name: 'Stealth',
    attribute: AttributeId.AGILITY,
    type: 'common',
    focuses: [],
    labels: {
      description: 'Stealth represents the ability to use concealment, shadows, foliage, people and other distractions, to move about without being seen or heard, to hide and to lay in wait to ambush others. It can also be used stalk a mark while moving among crowds of others, and even to conceal large objects such as encampments, horses and wagons.\nWhen using the Stealth Skill to hide and conceal yourself, you must be outside the line of sight of those you intend to ambush or they must be pre-occupied with something else (the distraction of close combat isn’t enough). To cause a distraction, you may need to get creative. Whipping your horse and having it storm through the battlefield away from you is a good way to take everybody’s eyes off of you. Another is to wait until dark or walk amongst the crowds during the day, hiding in plain sight. Whenever you make a Stealth Test, it is always treated as a Secret Test (as indicated in Chapter 2: How To Play).',
      focuses: 'Ambush, Hide, Scout, Shadowing, Silent Movement',
      difficulties: ''
    }
  },
  {
    id: SkillId.SURVIVAL,
    name: 'Survival',
    attribute: AttributeId.PERCEPTION,
    type: 'common',
    focuses: [],
    labels: {
      description: 'The Survival Skill represents the ability to live out in the wilderness and live off the land. The Skill can be used to forage for roots, hunt for food, find suitable shelter, follow trails left behind by animals or people and locate somewhere safe to lay your head. In addition, it allows you to prepare simple meals, construct rudimentary weapons and build simple traps to hunt with. Providing you can locate the appropriate materials, you can construct rough items such as a wattle and daub house, a well, ladders, fences and other staples of peasant life.',
      focuses: 'Build Shelter, Find Water, Forage, Game Hunting, Plant Lore, Survivalist, Tracking',
      difficulties: ''
    }
  },
  {
    id: SkillId.TOUGHNESS,
    name: 'Toughness',
    attribute: AttributeId.BRAWN,
    type: 'common',
    focuses: [],
    labels: {
      description: 'This Skill represents stamina and endurance. It reflects the ability to withstand pain and exposure to the elements, ignore the effects of physical Peril, withstand the powerful effects of chaos, endure a forced march, run for an extended period of time, resist fatigue and hold your breath underwater.',
      focuses: 'Consume Alcohol, Resist Disease, Resist Flames, Resist Magick, Resist Peril, Resist Poison, Resist Weather',
      difficulties: ''
    }
  },
  {
    id: SkillId.TRADECRAFT,
    name: 'Tradecraft',
    attribute: AttributeId.WILLPOWER,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Tradecraft represents the practice of a particular craft and the ability to run a business based off that craft. Although anyone with a Skill Rank in Tradecraft has the potential to practice any trade, Focuses give them a distinct advantage over their peers in particular fields. It takes time to learn and master such training.\nTradecraft is used to construct and create a wide variety of things. Artistry can produce frescoes, paintings and sculptures. Brewing creates alcohol and flavored drinks such as teas and coffees. Carpentry can plank wood and construct anything from carts and wagons, to carriages, to multi-story houses and wooden fortifications. Engineering can oversee the construction of stonework homes, bridges, aqueducts, walls, towers, fortified manor homes and castles. Fine Smithery can work with jewelry, clockwork parts and even gunpowder weapons. Gastronomy is used to prepare culturally- appropriate and exquisite meals, far more complex than ones prepared using Survival. Metallurgy can be used to recognize, extract and reforge ores into alloys with the appropriate tools. A Shipwright can construct anything from river-going rafts to sea-going vessels. Smithing can work with practically any metal to create horseshoes, kettles, iron bands and wire. Stoneworking can be used to cut stones to fit the construction of larger buildings. Tailoring can work with cloth and other rare materials to clothe both the drecks of society as well as the cream. Tanning can produce rawhide, furs and refined leather goods. And finally, Weaponsmithing can be used to craft all manner of weapons. The time it takes and expenses to craft objects are more fully covered in Chapter 7: Trappings.',
      focuses: 'Artistry, Brewing, Carpentry, Engineering, Fine Smithery, Gastronomy, Gunsmithing, Metallurgy, Runesmith, Shipwright, Smithing, Stoneworking, Tailoring, Tanning, Weaponsmithing',
      difficulties: ''
    }
  },
  {
    id: SkillId.WARFARE,
    name: 'Warfare',
    attribute: AttributeId.INTELLIGENCE,
    type: 'special',
    focuses: [],
    labels: {
      description: 'Warfare represents an understanding of warfare as it relates to war machines. This Skill is used to arm and reload the siege weapons intended to break down walls, smash doors, crash through an army’s defenses and wreak havoc upon an enemy’s supply lines; understand strategies utilized in warfare (both mobile and ensconced within a fortification) and how to erect appropriate defenses; and how to conduct psychological warfare upon the enemy. It also includes knowledge of how to construct siege towers, battering rams, bolt throwers, trebuchets and a host of gunpowder-type weapons. You can also use this Skill to identify wounded foes in large groups, able to isolate and strike the same one over and over amid an Engagement.\nYou can also use this Skill to arm, aim and fire war machines (as indicated in Chapter 7: Trappings). Identifying weakness in defenses is also another common use of this Skill. Although you may not be a stoneworker, you can identify where the strongest and weakest points are in a castle or other fortification.\nYou can also use the Warfare Skill to commit military investment and provisioning to the war effort, to understand how to tactically deploy armies and to array artillery against a mobile enemy. With this knowledge, you can rapidly change the mode of conflict as necessary, adapting very quickly to your opponent’s movements en masse.',
      focuses: 'Fortifications, Military Tactics, War Machines',
      difficulties: ''
    }
  },
];
