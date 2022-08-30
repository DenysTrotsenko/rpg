import {Skill} from './models';
import {AttributeId, SkillId, SkillTypeId} from './enums';

/* tslint:disable:max-line-length */
export const SKILLS: Skill[] = [
  {
    id: SkillId.ALCHEMY,
    name: 'Alchemy',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Alchemy represents your ability to divine the hidden secrets of transmutation. Its everyday use tends to consist of concocting abortifacients, pain relievers, serums and other medicines. An alchemist’s laboratory tends to be a strange amalgam of scientific notes, erudite magical symbols and boiling baubles.',
      difficulties: '(Trivial +30%): Identify an unknown alchemical\n(Easy +20%): Assemble an alchemical laboratory\n(Routine +10%): Create one dose of a poultice or blackpowder\n(Standard +/-0%): Create two doses of a poultice or blackpowder\n(Challenging -10%): Create three doses of a poultice or blackpowder\n(Hard -20%): Brew rare alchemical mixtures\n(Arduous -30%): Brew a true panacea'
    }
  },
  {
    id: SkillId.ATHLETICS,
    name: 'Athletics',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Athletics represents your prowess in physical activities. It reflects your ability to scale up surfaces and ropes, tread water and swim without tiring, propel vessels while rowing, overpower others in contests of strength and push heavy objects. It also aids you when lifting heavy objects or in great feats of stamina, such as lifting a tree trunk, which has pinned an ally in place, or running many miles to deliver word of an army’s movement.',
      difficulties: '(Trivial +30%): Climb up a tree with many branches\n(Easy +20%): Swim while wearing summer clothing\n(Routine +10%): Jump over a pit while wearing heavy clothing\n(Standard +/-0%): Row a boat through rapid water\n(Challenging -10%): Push an object three times your weight\n(Hard -20%): Pull a coach stuck in the mud out with the aid of a horse\n(Arduous -30%): Climb the sheer face of a cliff'
    }
  },
  {
    id: SkillId.AWARENESS,
    name: 'Awareness',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Awareness represents your ability to notice minute details and sounds, watch for ambushes and spot snares designed to trap or kill. You’ll also use it to gather information through smell, taste and touch. This Skill doesn’t allow you to see through lies or sense motives—refer to Scrutinize and Eavesdrop to listen to hidden conversations.',
      difficulties: '(Trivial +30%): Listen for sounds through a thin door\n(Easy +20%): Smell a distinct spice in a dish\n(Routine +10%): Spot an obvious snare\n(Standard +/-0%): Stand watch at a campfire on a clear night\n(Challenging -10%): Find someone obscured by mist or darkness\n(Hard -20%): Estimate the total value of a mountain of coins quickly\n(Arduous -30%): Spot a trap camouflaged almost perfectly into the forest'
    }
  },
  {
    id: SkillId.BARGAIN,
    name: 'Bargain',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Bargain represents your ability to interpret the underlying factors of a commercial transaction. You also use it to haggle over prices, find common ground with another group, grease the wheels of commerce through the use of bribery, appraise the worth of objets d’art and even procure illegal contraband.',
      difficulties: '(Trivial +30%): Evaluate the worth of a gem or finery you procured\n(Easy +20%): Broker a trade deal between two merchants\n(Routine +10%): Interpret the profit and loss of a major financial deal\n(Standard +/-0%): Procure black market goods from a fence\n(Challenging -10%): Find common ground between two people of different Allegiances\n(Hard -20%): Convince an innkeeper not to report criminal mischief on your part\n(Arduous -30%): Bribe the local watch to walk away from the scene of a crime'
    }
  },
  {
    id: SkillId.CHARM,
    name: 'Charm',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Charm represents your ability to please others with flattery and honeyed words. A soft smile, a pleasant handshake or hug may be used to illustrate your charisma and enchant others. You can use Charm to persuade others in your favor or cause them to change their opinions about things they may not necessarily support. For lies, false accounts or con games, refer to Guile instead.',
      difficulties: '(Trivial +30%): Whistle or sing a popular song in tune\n(Easy +20%): Remember and retell a funny joke\n(Routine +10%): Recite a famous story before an audience\n(Standard +/-0%): Read poetry with a straight face in front of a lover\n(Challenging -10%): Seduce someone outside of your Allegiance\n(Hard -20%): Pick up an instrument you’ve never played and learn a song\n(Arduous -30%): Seduce someone who does not share your values'
    }
  },
  {
    id: SkillId.COORDINATION,
    name: 'Coordination',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Coordination represents your ability to be dexterous and flexible, maintain your balance and move with grace. You can use this Skill to perform acrobatic feats, slip out of bonds, avoid falling debris, manipulate objects with delicacy and avoid oncoming attacks by leaping out of the way. Its most common applications are to evade traps, avoid being pushed off your feet and weasel out of bonds and shackles.',
      difficulties: '(Trivial +30%): Catch a small object in hand as it falls\n(Easy +20%): Walk across a tree log over a river\n(Routine +10%): Juggle otherwise innocuous objects\n(Standard +/-0%): Leap across a campfire\n(Challenging -10%): Perform an intricate dance among other cultures\n(Hard -20%): Twist your body to fit into a very small space\n(Arduous -30%): Contort your wrists to escape bonds or manacles'
    }
  },
  {
    id: SkillId.COUNTERFEIT,
    name: 'Counterfeit',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Counterfeit represents your ability to falsify documents, making them appear official. This Skill is frequently used to duplicate signatures and handwriting styles and author fake records. It’s also related to your ability to reproduce near-replicas of objets d ’art, cobbling together a facsimile of a painting, statue or item of jewelry. It also includes the forging of coins and currencies.',
      difficulties: '(Trivial +30%): Create a simple reproduction of a ring or other item of finery\n(Easy +20%): Craft a false estimate of work to collect pay\n(Routine +10%): Clip coins, producing 1 new one from the pieces of 9 others\n(Standard +/-0%): Pass off a painted wooden token as a gold piece\n(Challenging -10%): Forge a signature\n(Hard -20%): Reproduce an intricate artwork without the skills necessary to do so\n(Arduous -30%): Perfectly reproduce someone else’s writing'
    }
  },
  {
    id: SkillId.DISGUISE,
    name: 'Disguise',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Disguise represents your ability to masquerade as someone else, hide your own identity in public or conceal your emotions from others. Theatrics and imitation are the foundation of any good disguise. The more you know about the people (or person) you’re trying to hide or mimic, the more effective your disguise.',
      difficulties: '(Trivial +30%): Convincingly act as another in a cheap play\n(Easy +20%): Pretend to be someone of a different Allegiance\n(Routine +10%): Create a false identity and live behind it\n(Standard +/-0%): Impersonate someone from a foreign land\n(Challenging -10%): Convincingly act as another in a well-known playhouse\n(Hard -20%): Impersonate another’s personal appearance\n(Arduous -30%): Perfectly impersonate another person in looks and voice'
    }
  },
  {
    id: SkillId.DRIVE,
    name: 'Drive',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Drive represents your ability to control standard vehicles, such as simple carts, overland coaches, dog-drawn sleds and so forth. The Skill is also used to maneuver vehicles around tight corners, race across the countryside, plow through a hedge and roll over others who stand in your way.',
      difficulties: '(Trivial +30%): Drive a wagon overland during fair weather\n(Easy +20%): Break through a low barrier or over a hedge on horseback\n(Routine +10%): Trek overland during inclement weather\n(Standard +/-0%): Race by cart and horse\n(Challenging -10%): Take a vehicle off-road and across country\n(Hard -20%): Jump a vehicle from one road to another\n(Arduous -30%): Ford a deep river with a vehicle'
    }
  },
  {
    id: SkillId.EAVESDROP,
    name: 'Eavesdrop',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Eavesdrop represents your ability to listen in to perceive low sounds, usually conversations between two or more people. By listening to them or watching the movement of their lips, you can make out distinct sounds and determine the differences between mumbling and actual words. You can also use it to hide from lip reading.',
      difficulties: '(Trivial +30%): Listen in to a conversation next to you\n(Easy +20%): Hide your lips from being read by others\n(Routine +10%): Use hand signals to indicate simple thoughts\n(Standard +/-0%): Read a person’s lips from across a well-lit room\n(Challenging -10%): Listen to a conversation through a wooden door\n(Hard -20%): Read a person’s lips through fleeting shadows\n(Arduous -30%): Listen to a conversation through a metal door'
    }
  },
  {
    id: SkillId.EDUCATION,
    name: 'Education',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'At its most basic, Education represents your ability to read and write, but it extends far beyond simple literacy. This Skill lends significant insight into the histories and practices of the world you live in. Education covers many different fields of study, each representing a body of lore, possible academic research or ‘rogue scholar’ pursuits.',
      difficulties: '(Trivial +30%): Understand local laws\n(Easy +20%): Identify specific constellations in the night sky\n(Routine +10%): Know a specific leader of another province\n(Standard +/-0%): Understand the relationships between gods\n(Challenging -10%): Identify the flags of rival nations\n(Hard -20%): Translate ancient writings into your own tongue\n(Arduous -30%): Understand the difference between a Ghast and a Ghoul'
    }
  },
  {
    id: SkillId.FOLKLORE,
    name: 'Folklore',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Folklore represents your secondhand and first-person knowledge of the histories, traditions, faiths and notable figures of a particular region. Drawn from the stories, oral traditions and rumors you’ve heard from family, merchants and travelers, it also confers a deeper understanding of various cultures, food, religion and daily practices.',
      difficulties: '(Trivial +30%): Interpret the funerary practices of locals\n(Easy +20%): Use the proper courtesies of other cultures\n(Routine +10%): Identify a local landmark and its importance\n(Standard +/-0%): Recall legends from history\n(Challenging -10%): Know about local flora and fauna\n(Hard -20%): Identify a famous person from their burial marker\n(Arduous -30%): Forecast the weather based on historic patterns'
    }
  },
  {
    id: SkillId.GAMBLE,
    name: 'Gamble',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Gambling represents your ability to play parlor games of chance, such as cards, darts and dice. Although anyone can make wagers and play games, some are more skillful or adept when it comes to spotting common mistakes and preying upon their opponents’ weaknesses. This Skill also allows you to cheat.',
      difficulties: '(Trivial +30%): Play and win a game of cards against greenhorns\n(Easy +20%): Fix a cockfight in your favor\n(Routine +10%): Play and win a standard game of chess\n(Standard +/-0%): Guess the number of stones in a large jar\n(Challenging -10%): Fix a fistfight in your favor\n(Hard -20%): Play and win a game of dice against a veteran gambler\n(Arduous -30%): Guess the next card to be played'
    }
  },
  {
    id: SkillId.GUILE,
    name: 'Guile',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Guile represents your ability to use underhandedness, lies and bluster to get what you want. It is also used to subtly manipulate others’ feelings and emotions by sowing the seeds of doubt within their mind. You can also play word games or use irony to confuse others and engage in political machinations.',
      difficulties: '(Trivial +30%): Bluster and blather your way out of responsibility\n(Easy +20%): Use innuendo to imply one thing while saying another\n(Routine +10%): Engage in wordplay with another to appear smarter\n(Standard +/-0%): Blend into the crowd to look innocuous and harmless\n(Challenging -10%): Bluff your way into a Red Coat compound\n(Hard -20%): Understand Thieves’ Cant in the middle of hostile repartee\n(Arduous -30%): Appear innocent of a crime you clearly committed'
    }
  },
  {
    id: SkillId.HANDLE_ANIMAL,
    name: 'Handle Animal',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Handle Animal represents your ability to command, subdue and train threats classified as Animals. Although this Skill doesn’t allow those who use it to domesticate animals that are not meant to be domesticated, it does allow you to tame them. This Skill also teaches the proper way to care for and groom an animal, establishing a bond of trust and submission.',
      difficulties: '(Trivial +30%): Shoe a horse or groom a domestic animal\n(Easy +20%): Teach a simple trick to an animal, like fetch, lie down or sit\n(Routine +10%): Rustle a flock of sheep without a sheepdog\n(Standard +/-0%): Calm a frightened horse\n(Challenging -10%): Break a young horse for riding\n(Hard -20%): Calm a frightened stampede of wild cattle\n(Arduous -30%): Break a wild horse for riding'
    }
  },
  {
    id: SkillId.HEAL,
    name: 'Heal',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Heal represents your ability to understand the body’s humors and how the wounded can be treated by paying heed to these temperaments. It is also used to tend to ache and pains, act as a midwife, render abortifacients and treat the injured. It helps you identify Ailments and other patterns of sickness (such as being drugged).',
      difficulties: '(Trivial +30%): Treat Typhoid in a patient\n(Easy +20%): Perform a Trepanation on someone\n(Routine +10%): Treat an Injury to begin its recuperation\n(Standard +/-0%): Treat an Ailment in a patient\n(Challenging -10%): Treat Heatstroke on an Injured person\n(Hard -20%): Treat deadly Ailments in a Grievously Wounded patient\n(Arduous -30%): Use a Kiss of Life on someone who is at death’s door'
    }
  },
  {
    id: SkillId.INCANTATION,
    name: 'Incantation',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Incantation represents your ability to tap into powers unknown to cast Spells. It can be used to identify strange magical symbols, understand occult activities, participate in rituals, research otherworldly threats, interpret omens and gain an understanding of superstitions made real.',
      difficulties: '(Trivial +30%): Cast a spell in a place regarded as holy to your faith\n(Easy +20%): Interpret a person’s future based on their personality quirks\n(Routine +10%): Cast a spell upon an unsuspecting target while hidden\n(Standard +/-0%): Cast a spell as foes are Charging toward you\n(Challenging -10%): Hypnotize a willing subject\n(Hard -20%): Cast a spell when miscasting could harm your friends\n(Arduous -30%): Cast a spell in the midst of a riot'
    }
  },
  {
    id: SkillId.INTERROGATION,
    name: 'Interrogation',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Interrogation represents your ability to draw answers from an unwilling subject using a variety of physical and emotional methods. It allows you to cause duress in your subject, inflicting mental fatigue upon them as you begin to get at the heart of the truth. Interrogation often relies on physical torture.',
      difficulties: '(Trivial +30%): Gaslight a friend or loved one\n(Easy +20%): Pour hot tar over someone\n(Routine +10%): Strike the head off of the guilty in one stroke\n(Standard +/-0%): Force a witness to relive a traumatic experience\n(Challenging -10%): Convince someone to tell the truth, after a round of torture\n(Hard -20%): Torture a friend or an ally\n(Arduous -30%): Torture the truly innocent'
    }
  },
  {
    id: SkillId.INTIMIDATE,
    name: 'Intimidate',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Intimidation represents your ability to bully others into doing something you want. By using both your physical appearance and verbal commands, you try to cow others before you, posturing aggressively like a dog ready to pounce. You attempt to terrify others with your words and actions, suggesting that you’ll do violence upon them should they not back down.',
      difficulties: '(Trivial +30%): Bully your way to the front of a soup line\n(Easy +20%): Insinuate violence through force of presence and words\n(Routine +10%): Cause innocent people to cow before you in a public place\n(Standard +/-0%): Shove or push someone out of your way\n(Challenging -10%): Cow foes into giving up\n(Hard -20%): Make a threatening gesture to force a guard to abandon their post\n(Arduous -30%): Force an undefeated rival to kiss your boots'
    }
  },
  {
    id: SkillId.LEADERSHIP,
    name: 'Leadership',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Leadership represents your ability to gain the support of allies, unifying them under your guidance against common foes or causes. You can use this Skill to give tactical orders to forces under your command, much like a general does on the battlefield, as well as to stir emotions and foment rebellion.',
      difficulties: '(Trivial +30%): Lift the spirits of a close friend in the wake of harm\n(Easy +20%): Spread rumors and news among a crowd of people\n(Routine +10%): Use Words As Weapons when you’re Hurt\n(Standard +/-0%): Convince your flock to change their principles\n(Challenging -10%): Command a military campaign to besiege a stronghold\n(Hard -20%): Uplift a congregation which has lost its faith in God\n(Arduous -30%): Convince an enemy Allegiance to fight alongside you'
    }
  },
  {
    id: SkillId.MARTIAL_MELEE,
    name: 'Martial Melee',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Martial Melee represents your degree of proficiency in the melee weapons specific to the American Revolutionary War. Besides enabling you to effectively wield weapons in hand-to-hand combat, it also allows you to maintain the quality of Martial Melee weapons and perform general maintenance to keep them in usable condition.',
      difficulties: '(Trivial +30%): Hit a foe who’s Prone on the ground\n(Easy +20%): Use a Counterattack against an enemy who’s moving away\n(Routine +10%): Flank foes that are outnumbered in a melee engagement\n(Standard +/-0%): Fight toe-to-toe with an evenly matched aggressor\n(Challenging -10%): Strike someone in fog, mist or smoke\n(Hard -20%): Parry a two-handed weapon using a knife\n(Arduous -30%): Strike someone in the dark'
    }
  },
  {
    id: SkillId.MARTIAL_RANGED,
    name: 'Martial Ranged',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Martial Ranged represents your degree of proficiency in the ranged weapons specific to the American Revolutionary War. Besides enabling you to effectively fire missile weapons in ranged combat, it also allows you to maintain the quality of Martial Ranged weapons and perform general maintenance to keep them working.',
      difficulties: '(Trivial +30%): Fire a shot at a foe who’s climbing a tree\n(Easy +20%): Fire and land a shot in the outer rings of a stationary target\n(Routine +10%): Fire a shot from higher ground\n(Standard +/-0%): Fire a shot at someone who’s unprotected by cover\n(Challenging -10%): Fire at someone standing in fog, mist or smoke or on horseback\n(Hard -20%): Fire a ranged weapon into an Engagement with allies nearby\n(Arduous -30%): Fire at a foe in the dark'
    }
  },
  {
    id: SkillId.NAVIGATION,
    name: 'Navigation',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Navigation represents your ability to accurately determine direction, distance and routes from one place to another, orienteering over land. It relies on landmarks and maps to find your way overland, and the movement and alignment of the stars and constellations as the seasons pass to help you find your way across the sea.',
      difficulties: '(Trivial +30%): Determine true north on a cloudy day\n(Easy +20%): Discern the constellations to guide your journey by sea\n(Routine +10%): Chart out an overland route lasting several days\n(Standard +/-0%): Identify foreign landmarks to make your way without a map\n(Challenging -10%): Chart out an overland route lasting several weeks\n(Hard -20%): Realign your travels after getting lost for days in the wilderness\n(Arduous -30%): Determine true north below ground'
    }
  },
  {
    id: SkillId.PILOT,
    name: 'Pilot',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Pilot represents your ability to sail or row water-going vessels, from simple river rowing boats and barges to dinghies and the triple-masted ships of the open seas. It also covers general maintenance and upkeep of these boats: scrubbing decks, unloading and reloading cargo, repairing broken oars, patching holes, attending to torn sails and other repairs.',
      difficulties: '(Trivial +30%): Maintain the integrity of any water-going vessel\n(Easy +20%): Pilot a ship in calm conditions by sea\n(Routine +10%): Sail a riverboat through rapids\n(Standard +/-0%): Right a boat that’s being spun out of control by a river eddy\n(Challenging -10%): Pilot a ship in stormy conditions by sea\n(Hard -20%): Assure that cargo arrives unmolested if sent across a rough sea\n(Arduous -30%): Right a boat that’s threatening to be swallowed by the sea'
    }
  },
  {
    id: SkillId.RESOLVE,
    name: 'Resolve',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Resolve represents your ability to keep calm under pressure. It allows you to steel your mind, focusing on your inner strength to maintain resolve when thrust into situations that test your mettle. When confronted by the supernatural or horrifying situations, you use this Skill to let the fear wash over you and through you—for fear is the ‘little death.’',
      difficulties: '(Trivial +30%): Maintain your cool when piloting or driving a vehicle in a tense situation\n(Easy +20%): Withstand the effects of Stress\n(Routine +10%): Ignore the impact of spells which may cause anxiety\n(Standard +/-0%): Withstand the effects of Fear\n(Challenging -10%): Withstand being intimidated by out-of-touch aristocrats\n(Hard -20%): Withstand the effects of Terror\n(Arduous -30%): Steel yourself before a legendary beast'
    }
  },
  {
    id: SkillId.RIDE,
    name: 'Ride',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Ride represents your ability to mount threats classified as Animals, such as horses and ponies. This Skill enables you to gallop and race, leap over hedges and fences, ride across rugged terrain, or leap atop your mount from a window.',
      difficulties: '(Trivial +30%): Ride a horse in the water as it swims\n(Easy +20%): Break from a gallop into a charge\n(Routine +10%): Ride a horse from village to village at fast speeds\n(Standard +/-0%): Perform simple tricks\n(Challenging -10%): Drop from a window into the saddle\n(Hard -20%): Jump over hedges at a gallop\n(Arduous -30%): Take control and ride a threat that’s classified as a Beast'
    }
  },
  {
    id: SkillId.RUMOR,
    name: 'Rumor',
    attribute: AttributeId.FELLOWSHIP,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Rumor represents your ability to gather information from social circles, stimulating conversation by being gregarious and talkative. It can be used to interact with strangers and friends alike, appealing to them with your personality or just chewing the fat. It is also used to appeal to larger groups to gather the latest political or social news, dissect the newest gossip and spread rumors.',
      difficulties: '(Trivial +30%): Lubricate local gossipmongers with alcohol to learn rumors\n(Easy +20%): Hobnob with locals while participating in tavern games\n(Routine +10%): Speak in Pig Latin or other odd languages with friends\n(Standard +/-0%): Spread gossip of an impending attack with locals\n(Challenging -10%): Speak fluently before a court of your betters\n(Hard-20%): Befriend foreigners who don’t particularly care for your kind\n(Arduous -30%): Stimulate casual conversation in foreign tongues'
    }
  },
  {
    id: SkillId.SCRUTINIZE,
    name: 'Scrutinize',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Scrutinize represents your ability to sense motives and underlying intentions in others. It relies on hearing and vision to assess each participant’s part in a conversation. You can also deduce tone and intent from the written word. Finally, it can be used to recall things from memory, to describe something you saw or to quickly perform arithmetic or other feats of estimation.',
      difficulties: '(Trivial +30%): Remember what you had to eat the previous day\n(Easy +20%): Read body language to understand the Allegiance of another\n(Routine +10%): Decode a secret message in your own tongue\n(Standard +/-0%): Remember an important task you forgot to attend to\n(Challenging -10%): Decode a secret message in a foreign tongue\n(Hard -20%): Memorize the order of events after a deadly fight\n(Arduous -30%): Determine if someone with whom you aren’t familiar is telling lies'
    }
  },
  {
    id: SkillId.SIMPLE_MELEE,
    name: 'Simple Melee',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Simple Melee represents your ability to use standard weapons in hand-to-hand fights and battles. Simple Weapons, such as a knife or hatchet, are easy to use, require little training and are commonly carried on a belt. This Skill is typically gained by training with improvised weapons taken from the battlefield that were left shattered and abandoned or by being members of a militia.',
      difficulties: '(Trivial +30%): Re-wrap leather around the hilt of a broken saber\n(Easy +20%): Strike a foe who is sitting in their chair with their back turned toward you\n(Routine +10%): Use your weapon alternatively as a tool for work\n(Standard +/-0%): Grapple the haft of a boarding axe to bash a door down\n(Challenging -10%): Break a Simple Melee weapon over your knee\n(Hard -20%): Dig a shallow grave using your weapon\n(Arduous -30%): Scavenge a Simple Melee weapon to become usable'
    }
  },
  {
    id: SkillId.SIMPLE_RANGED,
    name: 'Simple Ranged',
    attribute: AttributeId.COMBAT,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Simple Ranged represents your ability to wield standard weapons to fight with at a distance. Most are easy to use, such as a short bow. The Skill is used by hunters turned militia or by irregular forces; you likely gained training from one of these groups. It also allows you to maintain the quality of your weapon.',
      difficulties: '(Trivial +30%): Fire a shot at a person who’s climbing a tree\n(Easy +20%): Fire a shot at someone who’s running away\n(Routine +10%): Fire a shot at a foe who’s pinned against a wall or in the corner\n(Standard +/-0%): Fire a warning shot at someone’s feet\n(Challenging -10%): Fire a shot at someone on horseback\n(Hard -20%): Fire into an Engagement, where you may potentially harm your allies\nK (Arduous -30%): Fire at an enemy in darkness'
    }
  },
  {
    id: SkillId.SKULDUGGERY,
    name: 'Skulduggery',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Skulduggery represents your ability to use larcenous or illegal means. It can be used to bypass locked doors and chests without a key, disable security contrivances and elaborate traps, use simple prestidigitation to palm small objects and hide cards and conduct simple robberies, such as cutting coin purses and snatching bracelets.',
      difficulties: '(Trivial +30%): Use a simple card trick to distract others\n(Easy +20%): Filch a pie off a windowsill\n(Routine +10%): Disable a wire trap intended to set off an alarm\n(Standard +/-0%): Pick the pocket of a passerby in a crowded street\n(Challenging -10%): Pick the lock off a strongbox or fortified trunk\n(Hard -20%): Pick the pocket of a passerby in a near- empty street\n(Arduous -30%): Palm an object in front of a merchant’s stall'
    }
  },
  {
    id: SkillId.STEALTH,
    name: 'Stealth',
    attribute: AttributeId.AGILITY,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Stealth represents your ability to use concealment, shadows, foliage, people and other distractions to move about without being seen or heard. You can also lie in wait to ambush others using this Skill. You can stalk a mark while moving among crowds, and even attempt to conceal a cache of armaments from enemy spies.',
      difficulties: '(Trivial +30%): Move quietly, so as to not awaken your enemies\n(Easy +20%): Stalk someone through a crowded street\n(Routine +10%): Reconnoiter the rim of a mining deposit\n(Standard +/-0%): Set up a good vantage point to waylay a Red Coat baggage train\n(Challenging -10%): Shadow an animal through the woods\n(Hard -20%): Move quietly, so as to not awaken your children\n(Arduous -30%): Hide in plain sight'
    }
  },
  {
    id: SkillId.SURVIVAL,
    name: 'Survival',
    attribute: AttributeId.PERCEPTION,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Survival represents your ability to live out in the wilderness and live off the land. It can be used to forage for roots, hunt for food, find suitable shelter, follow trails left behind by animals or people and locate somewhere safe to lay your head. In addition, it allows you to prepare simple meals, construct rudimentary weapons and build traps to hunt with.',
      difficulties: '(Trivial +30%): Go fishing with adequate supplies\n(Easy +20%): Forage for roots and berries in the wild\n(Routine +10%): Build a shelter out of limbs and grass\n(Standard +/-0%): Construct an improvised weapon\n(Challenging -10%): Track a small animal’s prints\n(Hard -20%): Track the passing of a single person through the wilderness\n(Arduous -30%): Find a source of water in the deep desert'
    }
  },
  {
    id: SkillId.TOUGHNESS,
    name: 'Toughness',
    attribute: AttributeId.BRAWN,
    type: SkillTypeId.COMMON,
    labels: {
      description: 'Toughness represents your ability to exhibit unparalleled stamina and endurance. It reflects the ability to withstand pain and exposure to the elements, withstand the powerful effects of spells, endure a forced march, run for an extended period of time, resist fatigue and hold your breath underwater.',
      difficulties: '(Trivial +30%): Resist the effects of sickness after a bad meal\n(Easy +20%): Resist the effects of Ailments after robbing the interred dead\n(Routine +10%): Withstand one dose of Throat Distemper\n(Standard +/-0%): Resist the effects of Morsal\n(Challenging -10%): Withstand the effects of French Pox\n(Hard -20%): Withstand Intoxication after drinking for six hours\n(Arduous -30%): Get back on your feet after falling off a house'
    }
  },
  {
    id: SkillId.TRADECRAFT,
    name: 'Tradecraft',
    attribute: AttributeId.WILLPOWER,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Tradecraft represents your ability to craft and the ability to run a business based on it. Anyone with a Skill Rank in Tradecraft has the potential to practice any trade. It takes time to learn and master exclusive training.',
      difficulties: '(Trivial +30%): Meltdown or repurpose materials from destroyed objects\n(Easy +20%): Make minor repairs and restore an item to like-new condition\n(Routine +10%): Conduct the last repairs to restore an object from the Ruined! Quality\n(Standard +/-0%): Create an object with minimal materials and no stressors\n(Challenging -10%): Mimic someone else’s work to appear as your own\n(Hard -20%): Invent a new ware or weapon\n(Arduous -30%): Repair a Kentucky Longrifle that’s been busted into tiny, tiny pieces'
    }
  },
  {
    id: SkillId.WARFARE,
    name: 'Warfare',
    attribute: AttributeId.INTELLIGENCE,
    type: SkillTypeId.SPECIAL,
    labels: {
      description: 'Warfare represents your ability to use war machines to break down walls, smash doors, crash through an army’s defenses and wreak havoc upon an enemy’s supply lines. This Skill helps you understand strategies utilized in warfare (both mobile and ensconced within a fortification) as well as how to erect appropriate defenses and conduct psychological warfare upon the enemy.',
      difficulties: '(Trivial +30%): Take account of supplies and provisions for a war campaign\n(Easy +20%): Load a war machine with assistance\n(Routine +10%): Determine weaknesses in enemy lines\n(Standard +/-0%): Conduct a massive troop movement in the midst of battle\n(Challenging -10%): Find soft spots in fortifications\n(Hard -20%): Prognosticate the tactics an unknown enemy is using\n(Arduous -30%): Count the number of troops remaining on a battlefield'
    }
  },
];
