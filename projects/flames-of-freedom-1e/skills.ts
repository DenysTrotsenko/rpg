import {Skill} from './models';
import {AttributeId, SkillId, SkillTypeId} from './enums';

export const SKILLS: Skill[] = [
  {
    id: SkillId.ALCHEMY,
    name: 'Alchemy',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Alchemy represents your ability to divine the hidden secrets of transmutation. Its everyday use tends to consist of concocting abortifacients, pain relievers, serums and other medicines. An alchemist’s laboratory tends to be a strange amalgam of scientific notes, erudite magical symbols and boiling baubles.',
      difficulties: ''
    }
  },
  {
    id: SkillId.ATHLETICS,
    name: 'Athletics',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Athletics represents your prowess in physical activities. It reflects your ability to scale up surfaces and ropes, tread water and swim without tiring, propel vessels while rowing, overpower others in contests of strength and push heavy objects. It also aids you when lifting heavy objects or in great feats of stamina, such as lifting a tree trunk, which has pinned an ally in place, or running many miles to deliver word of an army’s movement.',
      difficulties: ''
    }
  },
  {
    id: SkillId.AWARENESS,
    name: 'Awareness',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Awareness represents your ability to notice minute details and sounds, watch for ambushes and spot snares designed to trap or kill. You’ll also use it to gather information through smell, taste and touch. This Skill doesn’t allow you to see through lies or sense motives—refer to Scrutinize and Eavesdrop to listen to hidden conversations.',
      difficulties: ''
    }
  },
  {
    id: SkillId.BARGAIN,
    name: 'Bargain',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Bargain represents your ability to interpret the underlying factors of a commercial transaction. You also use it to haggle over prices, find common ground with another group, grease the wheels of commerce through the use of bribery, appraise the worth of objets d’art and even procure illegal contraband.',
      difficulties: ''
    }
  },
  {
    id: SkillId.CHARM,
    name: 'Charm',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Charm represents your ability to please others with flattery and honeyed words. A soft smile, a pleasant handshake or hug may be used to illustrate your charisma and enchant others. You can use Charm to persuade others in your favor or cause them to change their opinions about things they may not necessarily support. For lies, false accounts or con games, refer to Guile instead.',
      difficulties: ''
    }
  },
  {
    id: SkillId.COORDINATION,
    name: 'Coordination',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Coordination represents your ability to be dexterous and flexible, maintain your balance and move with grace. You can use this Skill to perform acrobatic feats, slip out of bonds, avoid falling debris, manipulate objects with delicacy and avoid oncoming attacks by leaping out of the way. Its most common applications are to evade traps, avoid being pushed off your feet and weasel out of bonds and shackles.',
      difficulties: ''
    }
  },
  {
    id: SkillId.COUNTERFEIT,
    name: 'Counterfeit',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Counterfeit represents your ability to falsify documents, making them appear official. This Skill is frequently used to duplicate signatures and handwriting styles and author fake records. It’s also related to your ability to reproduce near-replicas of objets d ’art, cobbling together a facsimile of a painting, statue or item of jewelry. It also includes the forging of coins and currencies.',
      difficulties: ''
    }
  },
  {
    id: SkillId.DISGUISE,
    name: 'Disguise',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Disguise represents your ability to masquerade as someone else, hide your own identity in public or conceal your emotions from others. Theatrics and imitation are the foundation of any good disguise. The more you know about the people (or person) you’re trying to hide or mimic, the more effective your disguise.',
      difficulties: ''
    }
  },
  {
    id: SkillId.DRIVE,
    name: 'Drive',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Drive represents your ability to control standard vehicles, such as simple carts, overland coaches, dog-drawn sleds and so forth. The Skill is also used to maneuver vehicles around tight corners, race across the countryside, plow through a hedge and roll over others who stand in your way.',
      difficulties: ''
    }
  },
  {
    id: SkillId.EAVESDROP,
    name: 'Eavesdrop',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Eavesdrop represents your ability to listen in to perceive low sounds, usually conversations between two or more people. By listening to them or watching the movement of their lips, you can make out distinct sounds and determine the differences between mumbling and actual words. You can also use it to hide from lip reading.',
      difficulties: ''
    }
  },
  {
    id: SkillId.EDUCATION,
    name: 'Education',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'At its most basic, Education represents your ability to read and write, but it extends far beyond simple literacy. This Skill lends significant insight into the histories and practices of the world you live in. Education covers many different fields of study, each representing a body of lore, possible academic research or ‘rogue scholar’ pursuits.',
      difficulties: ''
    }
  },
  {
    id: SkillId.FOLKLORE,
    name: 'Folklore',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Folklore represents your secondhand and first-person knowledge of the histories, traditions, faiths and notable figures of a particular region. Drawn from the stories, oral traditions and rumors you’ve heard from family, merchants and travelers, it also confers a deeper understanding of various cultures, food, religion and daily practices.',
      difficulties: ''
    }
  },
  {
    id: SkillId.GAMBLE,
    name: 'Gamble',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Gambling represents your ability to play parlor games of chance, such as cards, darts and dice. Although anyone can make wagers and play games, some are more skillful or adept when it comes to spotting common mistakes and preying upon their opponents’ weaknesses. This Skill also allows you to cheat.',
      difficulties: ''
    }
  },
  {
    id: SkillId.GUILE,
    name: 'Guile',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Guile represents your ability to use underhandedness, lies and bluster to get what you want. It is also used to subtly manipulate others’ feelings and emotions by sowing the seeds of doubt within their mind. You can also play word games or use irony to confuse others and engage in political machinations.',
      difficulties: ''
    }
  },
  {
    id: SkillId.HANDLE_ANIMAL,
    name: 'Handle Animal',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Handle Animal represents your ability to command, subdue and train threats classified as Animals. Although this Skill doesn’t allow those who use it to domesticate animals that are not meant to be domesticated, it does allow you to tame them. This Skill also teaches the proper way to care for and groom an animal, establishing a bond of trust and submission.',
      difficulties: ''
    }
  },
  {
    id: SkillId.HEAL,
    name: 'Heal',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Heal represents your ability to understand the body’s humors and how the wounded can be treated by paying heed to these temperaments. It is also used to tend to ache and pains, act as a midwife, render abortifacients and treat the injured. It helps you identify Ailments and other patterns of sickness (such as being drugged).',
      difficulties: ''
    }
  },
  {
    id: SkillId.INCANTATION,
    name: 'Incantation',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Incantation represents your ability to tap into powers unknown to cast Spells. It can be used to identify strange magical symbols, understand occult activities, participate in rituals, research otherworldly threats, interpret omens and gain an understanding of superstitions made real.',
      difficulties: ''
    }
  },
  {
    id: SkillId.INTERROGATION,
    name: 'Interrogation',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Interrogation represents your ability to draw answers from an unwilling subject using a variety of physical and emotional methods. It allows you to cause duress in your subject, inflicting mental fatigue upon them as you begin to get at the heart of the truth. Interrogation often relies on physical torture.',
      difficulties: ''
    }
  },
  {
    id: SkillId.INTIMIDATE,
    name: 'Intimidate',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Intimidation represents your ability to bully others into doing something you want. By using both your physical appearance and verbal commands, you try to cow others before you, posturing aggressively like a dog ready to pounce. You attempt to terrify others with your words and actions, suggesting that you’ll do violence upon them should they not back down.',
      difficulties: ''
    }
  },
  {
    id: SkillId.LEADERSHIP,
    name: 'Leadership',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Leadership represents your ability to gain the support of allies, unifying them under your guidance against common foes or causes. You can use this Skill to give tactical orders to forces under your command, much like a general does on the battlefield, as well as to stir emotions and foment rebellion.',
      difficulties: ''
    }
  },
  {
    id: SkillId.MARTIAL_MELEE,
    name: 'Martial Melee',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Martial Melee represents your degree of proficiency in the melee weapons specific to the American Revolutionary War. Besides enabling you to effectively wield weapons in hand-to-hand combat, it also allows you to maintain the quality of Martial Melee weapons and perform general maintenance to keep them in usable condition.',
      difficulties: ''
    }
  },
  {
    id: SkillId.MARTIAL_RANGED,
    name: 'Martial Ranged',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Martial Ranged represents your degree of proficiency in the ranged weapons specific to the American Revolutionary War. Besides enabling you to effectively fire missile weapons in ranged combat, it also allows you to maintain the quality of Martial Ranged weapons and perform general maintenance to keep them working.',
      difficulties: ''
    }
  },
  {
    id: SkillId.NAVIGATION,
    name: 'Navigation',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Navigation represents your ability to accurately determine direction, distance and routes from one place to another, orienteering over land. It relies on landmarks and maps to find your way overland, and the movement and alignment of the stars and constellations as the seasons pass to help you find your way across the sea.',
      difficulties: ''
    }
  },
  {
    id: SkillId.PILOT,
    name: 'Pilot',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Pilot represents your ability to sail or row water-going vessels, from simple river rowing boats and barges to dinghies and the triple-masted ships of the open seas. It also covers general maintenance and upkeep of these boats: scrubbing decks, unloading and reloading cargo, repairing broken oars, patching holes, attending to torn sails and other repairs.',
      difficulties: ''
    }
  },
  {
    id: SkillId.RESOLVE,
    name: 'Resolve',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Resolve represents your ability to keep calm under pressure. It allows you to steel your mind, focusing on your inner strength to maintain resolve when thrust into situations that test your mettle. When confronted by the supernatural or horrifying situations, you use this Skill to let the fear wash over you and through you—for fear is the ‘little death.’',
      difficulties: ''
    }
  },
  {
    id: SkillId.RIDE,
    name: 'Ride',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Ride represents your ability to mount threats classified as Animals, such as horses and ponies. This Skill enables you to gallop and race, leap over hedges and fences, ride across rugged terrain, or leap atop your mount from a window.',
      difficulties: ''
    }
  },
  {
    id: SkillId.RUMOR,
    name: 'Rumor',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Rumor represents your ability to gather information from social circles, stimulating conversation by being gregarious and talkative. It can be used to interact with strangers and friends alike, appealing to them with your personality or just chewing the fat. It is also used to appeal to larger groups to gather the latest political or social news, dissect the newest gossip and spread rumors.',
      difficulties: ''
    }
  },
  {
    id: SkillId.SCRUTINIZE,
    name: 'Scrutinize',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Scrutinize represents your ability to sense motives and underlying intentions in others. It relies on hearing and vision to assess each participant’s part in a conversation. You can also deduce tone and intent from the written word. Finally, it can be used to recall things from memory, to describe something you saw or to quickly perform arithmetic or other feats of estimation.',
      difficulties: ''
    }
  },
  {
    id: SkillId.SIMPLE_MELEE,
    name: 'Simple Melee',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Simple Melee represents your ability to use standard weapons in hand-to-hand fights and battles. Simple Weapons, such as a knife or hatchet, are easy to use, require little training and are commonly carried on a belt. This Skill is typically gained by training with improvised weapons taken from the battlefield that were left shattered and abandoned or by being members of a militia.',
      difficulties: ''
    }
  },
  {
    id: SkillId.SIMPLE_RANGED,
    name: 'Simple Ranged',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Simple Ranged represents your ability to wield standard weapons to fight with at a distance. Most are easy to use, such as a short bow. The Skill is used by hunters turned militia or by irregular forces; you likely gained training from one of these groups. It also allows you to maintain the quality of your weapon.',
      difficulties: ''
    }
  },
  {
    id: SkillId.SKULDUGGERY,
    name: 'Skulduggery',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Skulduggery represents your ability to use larcenous or illegal means. It can be used to bypass locked doors and chests without a key, disable security contrivances and elaborate traps, use simple prestidigitation to palm small objects and hide cards and conduct simple robberies, such as cutting coin purses and snatching bracelets.',
      difficulties: ''
    }
  },
  {
    id: SkillId.STEALTH,
    name: 'Stealth',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Stealth represents your ability to use concealment, shadows, foliage, people and other distractions to move about without being seen or heard. You can also lie in wait to ambush others using this Skill. You can stalk a mark while moving among crowds, and even attempt to conceal a cache of armaments from enemy spies.',
      difficulties: ''
    }
  },
  {
    id: SkillId.SURVIVAL,
    name: 'Survival',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Survival represents your ability to live out in the wilderness and live off the land. It can be used to forage for roots, hunt for food, find suitable shelter, follow trails left behind by animals or people and locate somewhere safe to lay your head. In addition, it allows you to prepare simple meals, construct rudimentary weapons and build traps to hunt with.',
      difficulties: ''
    }
  },
  {
    id: SkillId.TOUGHNESS,
    name: 'Toughness',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Toughness represents your ability to exhibit unparalleled stamina and endurance. It reflects the ability to withstand pain and exposure to the elements, withstand the powerful effects of spells, endure a forced march, run for an extended period of time, resist fatigue and hold your breath underwater.',
      difficulties: ''
    }
  },
  {
    id: SkillId.TRADECRAFT,
    name: 'Tradecraft',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Tradecraft represents your ability to craft and the ability to run a business based on it. Anyone with a Skill Rank in Tradecraft has the potential to practice any trade. It takes time to learn and master exclusive training.',
      difficulties: ''
    }
  },
  {
    id: SkillId.WARFARE,
    name: 'Warfare',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Warfare represents your ability to use war machines to break down walls, smash doors, crash through an army’s defenses and wreak havoc upon an enemy’s supply lines. This Skill helps you understand strategies utilized in warfare (both mobile and ensconced within a fortification) as well as how to erect appropriate defenses and conduct psychological warfare upon the enemy.',
      difficulties: ''
    }
  },
];
