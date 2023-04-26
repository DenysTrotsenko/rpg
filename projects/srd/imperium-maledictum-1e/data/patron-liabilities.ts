import { PatronLiability } from '../models/common';

export const PATRON_LIABILITIES: PatronLiability[] = [
  {
    id: '',
    name: 'Abrupt',
    labels: {
      influence: 'Any three Factions: −1 Patron Influence',
      description: 'Your Patron is brusque and abrasive in their dealings with other Factions. Your Patron has -1 Influence with three Factions as a consequence of this behaviour.'
    }
  },
  {
    id: '',
    name: 'Argumentative',
    labels: {
      description: 'YourPatronispoliticallyactiveamongstmultiple Imperial Factions, but constantly quarrels with them. At the start of each mission, the Patron gains −1 Influence with a Faction determined by the Gamemaster. By the end of each mission the Patron has repaired the relationship, but has likely ruined another.'
    }
  },
  {
    id: '',
    name: 'Be Ever Vigilant',
    labels: {
      description: 'Your Patron believes in keeping you on your toes. They may arrange for ambushes, combat drills, examinations, or other surprise challenges to ensure you are the best of the best.'
    }
  },
  {
    id: '',
    name: 'Blackmailed',
    labels: {
      description: 'Your Patron is being blackmailed. They may request you take on additional tasks for the blackmailer, or have less supplies or solars to give you. Your Patron may task you with retrieving whatever sensitive material the blackmailer has — or simply making sure the blackmailer ‘disappears’. Your Patron has −2 Influence with the Faction blackmailing them.'
    }
  },
  {
    id: '',
    name: 'Boastful',
    labels: {
      description: 'Your Patron makes no secret of their successes and future goals, or their satisfaction with your performance. They tell allies within and without their own organisation of your deeds, and may take the step of reaching out to local authorities to facilitate cooperation. All this tends to draw plenty of unwanted attention at all stages of a mission. As word spreads and information leaks, your enemies might be expecting you well before you arrive.'
    }
  },
  {
    id: '',
    name: 'Convoluted Communicae',
    labels: {
      description: 'Your Patron insists on using only coded communications, with cyphers that change regularly and may obscure the message they are trying to convey.'
    }
  },
  {
    id: '',
    name: 'Corrupt',
    labels: {
      description: 'Your Patron secretly serves some other force than the God-Emperor. This may be as simple as succumbing to their own self-interest, exercising a criminal greed, or may be as villainous as falling to the predations of one of the Ruinous Powers.'
    }
  },
  {
    id: '',
    name: 'Craven',
    labels: {
      influence: 'Astra Militarum: −2 Patron Influence',
      description: 'Your Patron insists has a history of shameful cowardice, and will never expose themself to potential danger.'
    }
  },
  {
    id: '',
    name: 'Dangerous Debt',
    labels: {
      description: 'Your Patron owes someone a dangerous debt, and may require you to perform some service for them to ensure they do not disappear under unfortunate circumstances. Until the debt is paid, your Patron has −2 Influence with the creditor’s Faction.'
    }
  },
  {
    id: '',
    name: 'Data Addict',
    labels: {
      description: 'Your Patron suffers from a strange condition known as data addiction, an unnatural craving for knowledge that some quietly speculate is the result of neural augmetics, though this is heresy in the multifaceted eyes of the Omnissiah. Your Patron will make overwhelming requests for specific informative minutiae, often only tangentially related to your mission. Refusing or failing to produce the data your Patron craves will negatively impact their opinion of your character and capability, and may lead to docked pay.'
    }
  },
  {
    id: '',
    name: 'Dealbreaker',
    labels: {
      description: 'Your Patron failed terribly to complete an important trade with another Faction. Be it through a catastrophic mistake, purposeful malice, or a problematic circumstance, their reputation as a trader with one Faction is irreparable stained. This may make securing certain items from Chapter 5: Armoury more difficult at the Gamemaster’s discretion.\nYout Patron has -2 Influence with the Faction their failed trade deal involves. Typically this will be the Adeptus Administratum, Infractionists, or Rogue Trader Dynasties, but may be another Faction at the Gamemaster’s discretion.'
    }
  },
  {
    id: '',
    name: 'Demands Discretion',
    labels: {
      description: 'Your Patron insists on keeping their involvement in your missions private, allowing you to use the sway of their name only when absolutely necessary. Your Patron may inflict punishment, or even disappear a character entirely, should they ignore this edict.\nIn certain areas of the Imperium such secrecy can be akin to a damning admission of guilt. As the campaign progresses, characters may find themselves the target of the Administratum Adepts or even an Inquisitor\'s Acolytes, drawn by rumours of their Patron\'s obessive secrecy.'
    }
  },
  {
    id: '',
    name: 'Dogmatic',
    labels: {
      description: 'Your Patron has neither tolerance nor patience for any deviation from the Imperial Creed. Even the slightest expression of blasphemy against the God-Emperor or His Ecclesiarchy will be punished, typically with docked pay or electro-flagellation.'
    }
  },
  {
    id: '',
    name: 'Draconian',
    labels: {
      influence: 'Infractionists: −2 Patron Influence',
      description: 'Your Patron has a history of harsh treatment of lawbreakers, and will not tolerate the slightest infraction against the Lex Imperialis, under penalty of docked pay, excruciation, or worse. They will also expect you to follow a stringent operating procedure during each mission, potentially including informing local authorities of your presence and activities, or even obtaining their authorization. Whatever the particulars of your Patron’s protocols, they are certain to cost you precious time, at best.'
    }
  },
  {
    id: '',
    name: 'Enemy',
    labels: {
      influence: 'Enemy\'s Faction: −2 Patron Influence',
      description: 'Your Patron has made an enemy of another high-ranking member of a Faction. The rival may interfere with your missions, hire their own agents to accomplish the same goals before you can, or even try to bribe or coerce you into their employment. Additionally, your Patron’s enemy has enough sway to ensure your Patron has −2 Influence with the enemy’s Faction.'
    }
  },
  {
    id: '',
    name: 'Excommunicated',
    labels: {
      description: 'Your Patron has been accused of crimes against the Imperium or even declared Excommunicate Traitoris by the Inquisition. You must be very careful as to when, where, and with whom you invoke your Patron’s name or authority. If you are not careful, you may find yourself pursued by the same authorities or facing the same punishment.\nA major part of the campaign may be clearing your Patron’s name (whether they were falsely accused or not), at which point you can remove this Liability and replace it with a different one appropriate to the new situation. Note that this is an almost impossible task, as the decree of Exomunnicate Tratoris is reserved for the most heinous of heresies and those that declare it are rarely amenable to changing their minds on such damnation.\nYour Patron has -3 Influence with the Adeptus Astra Telepathica, the Adeptus Mechanicus, the Adeptus Administratum, the Astra Militarum, the Adeptus Ministorum, the Inquisition, and the Imperial Fleet.'
    }
  },
  {
    id: '',
    name: 'Frail Form',
    labels: {
      description: 'Your Patron clings desperately to the mortal coil though they are physically weak and ailing. Your Patron may be dependent on rejuvenat treatments or some other mysterious medicine fully understood only by the Magos Biologis of the Adeptus Mechanicus. Your Patron will require frequent requisitions of whatever chemical they need to continue their existence, and even when fully stocked may be unavailable to you at a crucial moment due to their frailty.'
    }
  },
  {
    id: '',
    name: 'Hallowed Ignorance',
    labels: {
      description: 'Your Patron believes that ignorance is a virtue, particularly for their underlings. Your Patron will not share any details they believe to be unnecessary for you to complete your mission, and may work to actively suppress your attempts to gather information.'
    }
  },
  {
    id: '',
    name: 'Honour The Machine Spirits',
    labels: {
      description: 'Your Patron expects you to maintain your equipment to an exacting standard. Your Patron will inspect your equipment after each mission and will dock your pay if it is not up to their specifications.'
    }
  },
  {
    id: '',
    name: 'Impostor',
    labels: {
      description: 'Your Patron is not who they say they are, but they can seemingly impersonate them quite well. Your Patron may be unable to get you any supplies or resources they are supposed to, but their Influence still works... for now.'
    }
  },
  {
    id: '',
    name: 'Incessant Updates',
    labels: {
      description: 'Your Patron is a micromanager, requiring frequent updates through vox or writing. Their constant requests may take up time or expose both your plans and position.'
    }
  },
  {
    id: '',
    name: 'Known Meddler',
    labels: {
      description: 'Your Patron has a reputation for interfering in the affairs of other Factions. Whenever you attempt to use your Patron’s Influence, the party’s next Fellowship Test is made at Disadvantage. Additionally, your Patron’s past meddlings have earned them -1 Influence with two Factions, chosen by the Gamemaster.'
    }
  },
  {
    id: '',
    name: 'Loose Cannon',
    labels: {
      influence: 'Adeptus Administratum: −2 Patron Influence',
      description: 'Your Patron is known for flaunting the conventions of the Imperium and Lex Imperialis to get things done — always ‘in the Emperor’s name’, of course, and with undeniable results. Your Patron will expect you to bend and break the rules to see their will done, accepting no excuses and providing nothing for extenuating circumstances.'
    }
  },
  {
    id: '',
    name: 'Meticulous Archivist',
    labels: {
      description: 'Your Patron is a stickler for records. At the end of every mission, your Patron expects a full report of your activities, including what you did, when, and why. If you do not supply these records your Patron may dock your pay.'
    }
  },
  {
    id: '',
    name: 'Missionary Mandate',
    labels: {
      description: 'Your Patron demands that you disseminate the word of the God-Emperor wherever they send you, playing a vital role in protecting the masses by ensuring their piety. Your Patron will assess your success at this ongoing goal whenever they meet with you, and may punish or reward you according to their judgement of your efforts.'
    }
  },
  {
    id: '',
    name: 'Miserly',
    labels: {
      description: 'Your Patron either does not have a large amount of currency, or does not want to give it to you. Decrease your Patron’s Payment Grade by 1 step.'
    }
  },
  {
    id: '',
    name: 'Nemesis',
    labels: {
      description: 'Your Patron has an arch-enemy beyond the Factions of the Imperium, a traitorous heretic, horrific daemon, or vile xenos that wants them dead., This enmity will likely spill over to the party, interrupting both missions and time between adventures as they assail the Patron and all who follow them.'
    }
  },
  {
    id: '',
    name: 'Obsolete Observer',
    labels: {
      description: 'Your Patron wants to know exactly how you operate, and has entrusted a Servitor to acquire that information. Your Patron deploys either a Servo-skull or Servitor equipped with only a Pict Recorder to document your exploits. These obsolete observers will occasionally hinder progress in missions by getting in the way, making noise, or otherwise bumbling around.'
    }
  },
  {
    id: '',
    name: 'Offended The Omnissiah',
    labels: {
      influence: 'Adeptus Mechanicus: −2 Patron Influence',
      description: 'Your Patron has angered the Tech-Priests of the Adeptus Mechanicus, and whether intentional or otherwise, has earned their enmity. Whatever your Patron did has been recorded in the vast data-vaults of the nearest Forge World, and is unlikely to be forgotten by the information-hoarding machine cult within the next ten millennia. This may mean that your Patron is simply unable to furnish you with any newer equipment, relying only on items of Common rarity from other suppliers or Shoddy equivalents sold through black markets.'
    }
  },
  {
    id: '',
    name: 'Omnissian Principles',
    labels: {
      description: 'Your Patron is a devout worshipper of the Machine God, and expects you to uphold the sanctified strictures of the Cult Mechanicus. You will be required to appease any machine spirit you encounter, any damage or destruction of the Omnissiah’s sacred technology is a punishable waste that must be corrected through docked pay.'
    }
  },
  {
    id: '',
    name: 'Overextended',
    labels: {
      description: 'Your Patron is constantly occupied with numerous plots, missions, and assignments. Despite the importance of your own missions, they seldom make themself available to you. Attempts to get more information, equipment, or money from your Patron during a mission are near impossible.'
    }
  },
  {
    id: '',
    name: 'Paranoid',
    labels: {
      description: 'Your Patron trusts no one — including you. They doubt your loyalty and might show it by questioning your reports, spying on you, or even despatching you on missions that mean certain death.'
    }
  },
  {
    id: '',
    name: 'Pious Stipulations',
    labels: {
      description: 'Your Patron demands displays of faith from their agents. This may take the form of daily prayer sessions, attending specific religious services, or performing rituals of faith. These stipulations may interfere with your missions, and cut into any time between them.'
    }
  },
  {
    id: '',
    name: 'Price Of Life',
    labels: {
      description: 'Your Patron holds the unorthodox belief that every Human life is precious, and only the Emperor can decide when one should die without justification. Your Patron will demand that you justify every life you take, and dock your pay for every unnecessary killing.'
    }
  },
  {
    id: '',
    name: 'Psyker Slayer',
    labels: {
      influence: 'Adeptus Astra Telepathica: −2 Patron Influence',
      description: 'Your Patron has succumbed to a semi-heretical superstition that all unsanctioned psykers must be slain, rather than captured. If your Patron gains any information that would suggest there is an unsanctioned psyker in the vicinity of your mission, they will demand you bring them their head.'
    }
  },
  {
    id: '',
    name: 'Revisionist',
    labels: {
      description: 'Your Patron believes that those who control history control the future. They will doctor reports, distort the truth, and effectively live their own version of reality that they expect you to keep in tune with.'
    }
  },
  {
    id: '',
    name: 'Required Recruitment',
    labels: {
      description: 'Your Patron understands the value of boots on the ground and an army of bodies to drown the enemy in. On each of your missions, your Patron will request that you recruit a number of new individuals to their cause, and will dock your pay if this responsibility is not fulfilled.'
    }
  },
  {
    id: '',
    name: 'Rumoured Dead',
    labels: {
      description: 'Tales of your Patron’s grisly demise abound. Whenever you attempt to use your Patron’s Influence, the Gamemaster may rule that you must make a Rapport (Persuasion) Test of variable difficulty to convince the target that your Patron is, indeed, alive.'
    }
  },
  {
    id: '',
    name: 'Saboteur',
    labels: {
      description: 'Your Patron’s enmity with rival Factions has grown so extreme that they will task you with undermining their adversary’s efforts. The GM chooses two Factions that the Patron has come to loathe. If you are likely to deal with either of these during your mission, your Patron will order you to sabotage them in some non-lethal way. Your Patron’s past attempts at sabotage have already earned them −1 Influence with both of these Factions.'
    }
  },
  {
    id: '',
    name: 'Shaky Authority',
    labels: {
      description: 'Your Patron’s sway over others is constantly questioned. Whenever you attempt to use your Patron’s Influence, roll a d10. If the result is 0, your Patron’s positive Influence is simply ignored.'
    }
  },
  {
    id: '',
    name: 'Shoddy Supplies',
    labels: {
      description: 'Your Patron relies on scavengers and shady back-channels to arm and armour their agents at a lower cost. All of the equipment supplied by your Patron has the Shoddy Flaw.'
    }
  },
  {
    id: '',
    name: 'Sidereal Quests',
    labels: {
      description: 'On every world and in each city you visit, your Patron owes someone a favour and offers up your group to repay it. These odd jobs might include bodyguard duties, vital negotiations, simple courier jobs, and nearly anything else. Completing these tasks might take valuable time away from your primary mission, but shirking them might earn a new enemy as well as the ire of your Patron.'
    }
  },
  {
    id: '',
    name: 'Strange Tastes',
    labels: {
      description: 'Your Patron has a desire for something, and requires your help to get it clandestinely, without asking questions. The Gamemaster determines exactly what your Patron craves, but it is doubtless reasonably rare, and likely not condoned by the Lex Imperialis.'
    }
  },
  {
    id: '',
    name: 'Suspect',
    labels: {
      description: 'Your Patron is distrusted by one or more Factions that have circumstantially linked them to crime or heresy. If you reveal your affiliation with your Patron, these Factions may follow you, surveil you, and potentially even interfere with your mission in an attempt to gather evidence. Your Patron has −2 Influence with a Faction that suspects them, typically the Inquisition.'
    }
  },
  {
    id: '',
    name: 'Territorial',
    labels: {
      description: 'Your Patron believes in the fundamental powers of land and property. Your Patron will ask you to secure territory and set up bases of operations whenever possible. Though this may be useful when returning to a location, it will undoubtedly take up time during, and potentially between, missions.'
    }
  },
  {
    id: '',
    name: 'Tithe Obsessed',
    labels: {
      description: 'Your Patron understands that the Imperium operates on a knife’s edge, and will not tolerate wanton destruction of potential resources. Your Patron will dock your pay for any kind of collateral damage you cannot justify.'
    }
  },
  {
    id: '',
    name: 'Unorthodox Beliefs',
    labels: {
      description: 'Your patron has a lamentable reputation for flaunting their somewhat unorthodox beliefs, be they part of a mildly divergent Death Cult or closer to outright heresy. Your Patron may ask you to indulge them in their beliefs, joining them in rituals that may reduce your time Between Missions. Your Patron’s Unorthodox Beliefs have earned them −2 Influence with the Adeptus Ministorum.'
    }
  },
  {
    id: '',
    name: 'Warped Visions',
    labels: {
      description: 'Your Patron is an unwilling voyeur of warp- spawned nightmares, or perhaps they experience divine, Emperor-sent foresight afforded only to the most faithful. In either case, the visions your Patron receives send you on wild goose chases. They will give you clues and objectives connected only to their spectral hallucinations, confusing your efforts to fulfil their will.'
    }
  },
  {
    id: '',
    name: 'Witch Hunter',
    labels: {
      description: 'Your Patron requires you to be ever-vigilant of sorcery, and demands you aid in capturing psykers to fulfil the Tithes of the Black Ships. If your Patron gains any information that would suggest there is a psyker in the vicinity of your mission who has not been corrupted by the Ruinous Powers, they will demand you capture them. If your Patron gains any information that there is a Rogue Psyker in the vicinity of your mission, they will demand you bring them their head.'
    }
  }
];
