import {QuirkId} from './enums';
import {Quirk} from './models';

/* tslint:disable:max-line-length */
export const QUIRKS: Quirk[] = [
  {
    id: QuirkId.METHOD_ACTOR,
    name: 'Method Actor',
    labels: {
      description: 'When I take on a role, I often lose myself so thoroughly that I can forget who I really am.',
      effect: 'Whenever you break character or fail in your Disguise, you gain 1 Conflict.'
    }
  },
  {
    id: QuirkId.BOUND_TO_THE_FORGE,
    name: 'Bound To The Forge',
    labels: {
      description: 'You have spent most of your life in a space filled with fumes, liquids and the forge’s heat.',
      effect: 'Whenever you engage in physical activities such as running, jumping and climbing, you must flip the results to fail Brawn-based Skill Tests.'
    }
  },
  {
    id: QuirkId.AN_OUTSIDER_IN_ALL_WAYS,
    name: 'An Outsider In All Ways',
    labels: {
      description: 'All see me as nothing but an animal, and I let them... after all, beasts are far more civilized.',
      effect: 'When interacting directly with anyone who is not classified as an Animal or Beast, you must flip the results to fail Fellowship-based Skill Tests.'
    }
  },
  {
    id: QuirkId.THEOREM_DEDUCTION_OUTCOME,
    name: 'Theorem, Deduction, Outcome',
    labels: {
      description: 'When treating patients, I always need to test my experimental theories—for good or for ill.',
      effect: 'After a person has used one of your medicines and goes to Sleep, roll a 1D6 Chaos Die. On a result of face ‘1–5,’ nothing happens. On a result of face ‘6,’ the person awakens Imperiled.'
    }
  },
  {
    id: QuirkId.THE_CORNERS_BETRAY,
    name: 'The Corners Betray',
    labels: {
      description: 'When flat planes converge, the corners turn to shadowed portals, and from them emerge unspeakable shapes and vistas.',
      effect: 'Whenever you fail a Resolve Test to withstand Stress, Fear or Terror afflicted by threats classified as Abyssal or Supernatural, you suffer an additional 1D10+1 Peril and 3 Conflict.'
    }
  },
  {
    id: QuirkId.A_TORTURED_ARTIST,
    name: 'A Tortured Artist',
    labels: {
      description: 'Evil seeps from the shadows and covers purity’s light in corruption—the darkness has eyes, and it is in these eyes I see something, or someone, familiar.',
      effect: 'Whenever in Fleeting Shadows and Total Darkness, you must flip the results to fail Resolve Tests.'
    }
  },
  {
    id: QuirkId.THERE_IS_SO_MUCH_TO_KNOW,
    name: 'There Is So Much To Know',
    labels: {
      description: 'In my pursuit for the true path, something new always pulls me away from that one thing.',
      effect: 'When attempting Intelligence-based Skill Tests, you cannot take advantage of the Coin Pool or gain Assist Dice.'
    }
  },
  {
    id: QuirkId.STRANGER_IN_A_STRANGE_LAND,
    name: 'Stranger In A Strange Land',
    labels: {
      description: 'You have little in common with the plights of strangers.',
      effect: 'You must flip the results to fail all Fellowship- based Skill Tests when interacting with cultures other than your own.'
    }
  },
  {
    id: QuirkId.MY_HUBRIS,
    name: 'My Hubris',
    labels: {
      description: 'I am always busy because I am the only person dedicated and knowledgeable enough to complete the task the right way.',
      effect: 'Whenever your Flaw causes you to gain Conflict, you gain 3 additional Conflict.'
    }
  },
  {
    id: QuirkId.WORLDS_OLDEST_PROFESSION,
    name: 'Worlds Oldest Profession',
    labels: {
      description: 'Some consider my work tawdry in the streets, but they tend to think differently in the sheets.',
      effect: 'When foes or strangers recognize you as a Bawd, you cannot gain an Assist for Skill Tests.'
    }
  },
  {
    id: QuirkId.TOO_MUCH_TIME_AT_SEA,
    name: 'Too Much Time At Sea',
    labels: {
      description: 'Though I would not trade my life for anything, working and living at sea has taken its toll.',
      effect: 'Reduce your Willpower by -9%.'
    }
  },
  {
    id: QuirkId.BAD_POSTURE,
    name: 'Bad Posture',
    labels: {
      description: 'My life has been a soft one — my eyes are strained, and my back bent from spending countless hours hunched at a desk.',
      effect: 'You cannot take advantage of Long or Extreme Distances with ranged weapons.'
    }
  },
  {
    id: QuirkId.I_ANSWER_TO_ONE_LAW,
    name: 'I Answer To One Law',
    labels: {
      description: 'There is no greater law than the Law of God, and I adhere to it, even if it costs me my life.',
      effect: 'If you reach 10 Conflict during a game session, you temporarily lose your ability to cast Spells until the next game session.'
    }
  },
  {
    id: QuirkId.JUST_A_SIP,
    name: 'Just A Sip',
    labels: {
      description: 'I adore the taste of booze and its aroma—just a nip or two in the morning is enough to get me started.',
      effect: 'You never gain the positive effects associated with Intoxication.'
    }
  },
  {
    id: QuirkId.STABLE_STENCH,
    name: 'Stable Stench',
    labels: {
      description: 'I spend so much time around horses, I’ve forgotten how to pick up on social cues and feel ill at ease in social situations.',
      effect: 'Whenever you spend a Coin in a social situation, roll a 1D6 Chaos Die. If the result is face ‘6,’ you must spend two Coins instead.'
    }
  },
  {
    id: QuirkId.THE_ONLY_LAW,
    name: 'The Only Law',
    labels: {
      description: 'There is only but one law, and that law is found in the book of our faith.',
      effect: 'Whenever your Flaw causes you to gain Conflict, you gain 3 additional Conflict.'
    }
  },
  {
    id: QuirkId.TIRED_EYES,
    name: 'Tired Eyes',
    labels: {
      description: 'All of that time spent writing might have given me the hands of an artist, but it has done a number on my eyesight.',
      effect: 'You have difficulty seeing in low-light conditions, treating Fleeting Shadows as if it were Total Darkness.'
    }
  },
  {
    id: QuirkId.EVERYONE_SUSPECTS_ME,
    name: 'Everyone Suspects Me',
    labels: {
      description: 'My reputation precedes me, and various run-ins with the law have not made me many friends.',
      effect: 'Whenever attempting to buy, sell or trade counterfeited objects or fake cash, you cannot use Coins to modify your Skill Test results.'
    }
  },
  {
    id: QuirkId.NOT_ABOVE_SUSPICION,
    name: 'Not Above Suspicion',
    labels: {
      description: 'While I pride myself on being able to steal things without being noticed, there is always the chance that I will get caught.',
      effect: 'When foes or strangers recognize you by your real name or by your crimes, you suffer from Stress.'
    }
  },
  {
    id: QuirkId.WANTED,
    name: 'Wanted',
    labels: {
      description: 'I must always be careful and cautious with whom I trust — if anyone uncovers my secret, it’s to the gallows for me.',
      effect: 'When foes or strangers recognize you as a Deserter, you cannot take advantage of Determination.'
    }
  },
  {
    id: QuirkId.CANT_FEND_FOR_MYSELF,
    name: 'Can’t Fend For Myself',
    labels: {
      description: 'I am adequate at most things, but very rarely good at anything.',
      effect: 'Whenever you fail or Critically Fail at Skill Tests, gain 1 Conflict.'
    }
  },
  {
    id: QuirkId.THINK_BEFORE_ACTING,
    name: 'Think Before Acting',
    labels: {
      description: 'Every action needs careful consideration, and actions must never be rushed.',
      effect: 'Whenever your Turn in combat comes up, roll a 1D6 Chaos Die. If it results in face ‘6,’ you lose 1 Action Point on this Turn.'
    }
  },
  {
    id: QuirkId.I_DISLIKE_CROWDS,
    name: 'I Dislike Crowds',
    labels: {
      description: 'I have spent the majority of my life alone, and this has put me at a disadvantage.',
      effect: 'When foes outnumber you 3:1 or more in an Engagement, they add a 1D6 Chaos Die to determine Injuries against you.'
    }
  },
  {
    id: QuirkId.NO_RESPECT,
    name: 'No Respect',
    labels: {
      description: 'Many look down upon me and believe my talents are a farce.',
      effect: 'Whenever you attempt to re-roll Fellowship-based Skill Tests using Coins, you must spend two Coins instead.'
    }
  },
  {
    id: QuirkId.PHYSIQUE_OF_AN_ARTIST,
    name: 'Physique Of An Artist',
    labels: {
      description: 'Hunched over a table, often working by dim candlelight, I do not exactly lead what many would call a healthy life.',
      effect: 'Reduce your Combat by -9%.'
    }
  },
  {
    id: QuirkId.BAD_LUCK,
    name: 'Bad Luck',
    labels: {
      description: 'If life has taught me one thing, it’s that there is no such thing as good luck.',
      effect: 'Whenever you generate a Critical Success, roll 1D6 Chaos Die. If it lands on a face ‘6,’ it is instead treated as a Critical Failure.'
    }
  },
  {
    id: QuirkId.BIGMOUTH_STRIKES_AGAIN,
    name: 'Bigmouth Strikes Again',
    labels: {
      description: 'Though I’m comfortable with my decisions and mistakes, my headstrong nature often pits me against our more conventional society.',
      effect: 'When foes attempt to hit you with Attack Actions and Rough & Tumble, they gain a +10% Base Chance to hit.'
    }
  },
  {
    id: QuirkId.LIFE_IS_PRECIOUS,
    name: 'Life Is Precious',
    labels: {
      description: 'I am so dedicated to the preservation of life that I am incapable of even contemplating taking the life of any living being.',
      effect: 'Whenever you take an innocent life of another threat classified as an Animal or Humanoid (including player cultures) unprovoked, you are unable to call upon your Spells for three days.'
    }
  },
  {
    id: QuirkId.UNKNOWN_FATE,
    name: 'Unknown Fate',
    labels: {
      description: 'I may know what the future holds, but my own fate remains obscured.',
      effect: 'If the person whose fortune you told fails their Skill Test using their personal Coins, you suffer 2D10+2 Peril. If they Critically Fail, you suffer 3D10+3 Peril instead.'
    }
  },
  {
    id: QuirkId.RISKY_BUSINESS,
    name: 'Risky Business',
    labels: {
      description: 'I rely on a lot of contacts in my line of work, but unfortunately, there is no honor among thieves.',
      effect: 'Any time you sell illegal or stolen wares & weapons to a contact, roll 1D6 Chaos Die. If it results in face ‘6,’ you’ve been ‘sold out’ and will have to contend with an important NPC in the next twenty-four hours.'
    }
  },
  {
    id: QuirkId.A_HIGH_PRICE_TO_PAY,
    name: 'A High Price To Pay',
    labels: {
      description: 'The scars I bear serve as a warning to pay more attention to my surroundings.',
      effect: 'Reduce your Perception by -9%.'
    }
  },
  {
    id: QuirkId.FORTUNE_IS_VEXED,
    name: 'Fortune Is Vexed',
    labels: {
      description: 'Divine Providence is f ickle: one minute She shines down upon you, and the next, She reminds you that nothing is certain.',
      effect: 'When you spend a Coin for Fortune Is Pleased, you move one step down the Peril Condition Track negatively.'
    }
  },
  {
    id: QuirkId.OUT_OF_MY_DEPTH,
    name: 'Out Of My Depth',
    labels: {
      description: 'I might be a shrewd negotiator, but when I’m away from my sales, I am lost.',
      effect: 'Any time you use Simple Ranged or Martial Ranged, each Skill Rank counts for +5% instead of the normal +10%.'
    }
  },
  {
    id: QuirkId.MY_EARS_STILL_RING,
    name: 'My Ears Still Ring',
    labels: {
      description: 'Gunfire is loud — so loud that I’ve lost part of my hearing.',
      effect: 'You must flip the results to fail Skill Tests that rely on hearing.'
    }
  },
  {
    id: QuirkId.LONER,
    name: 'Loner',
    labels: {
      description: 'Alone, I am a killing machine, but when it comes to fighting in coordination with others... that is a different story.',
      effect: 'You cannot give nor gain the benefits of Assist Dice unless you’re 3 yards or closer to an Assisting ally.'
    }
  },
  {
    id: QuirkId.PHANTOM_LIMB,
    name: 'Phantom Limb',
    labels: {
      description: 'No weapon but a gunpowder weapon feels quite right in my hands — everything else feels alien and strange.',
      effect: 'You cannot Take Aim with weapons other than those with the Blackpowder Quality.'
    }
  },
  {
    id: QuirkId.BLOODLESS_HANDS,
    name: 'Bloodless Hands',
    labels: {
      description: 'I respect the preciousness of life, and the thought of taking a life runs counter to my beliefs.',
      effect: 'When you take an innocent life unprovoked, you gain 9 Conflict.'
    }
  },
  {
    id: QuirkId.STUBBORN_AS_A_MULE,
    name: 'Stubborn As A Mule',
    labels: {
      description: 'People tend to treat me like I’m some common criminal or vagabond — I’m not here to cause trouble.',
      effect: 'Whenever attempting to buy, sell or trade wares & weapons, you cannot use Coins to modify your Skill Test results.'
    }
  },
  {
    id: QuirkId.TOO_MANY_SECRETS,
    name: 'Too Many Secrets',
    labels: {
      description: 'I know everyone’s dirty secrets, which has earned me some enemies along the way.',
      effect: 'You begin gameplay with a nemesis, a ‘named’ enemy you will create with the Historian. Whenever you are face-to-face with this enemy, you cannot take advantage of the Coin Pool. Once this enemy is defeated, the Historian will secretly create another nemesis and will tell you who they are only at the most inopportune moment.'
    }
  },
  {
    id: QuirkId.LIGHT_SENSITIVE,
    name: 'Light Sensitive',
    labels: {
      description: 'Though darkness doesn’t harm my vision, in an ironic twist of fate, my eyes are now quite sensitive to the light.',
      effect: 'In Perfect Light, reduce Distances by -3.'
    }
  },
  {
    id: QuirkId.UNYIELDING_IN_ALL_THINGS,
    name: 'Unyielding In All Things',
    labels: {
      description: 'While being stubborn and obstinate in court is a boon, in other aspects of life, it has caused me nothing but despair.',
      effect: 'Any time your die rolls result in a Critical Failure, gain 3 Conflict.'
    }
  },
  {
    id: QuirkId.PLUCK_THE_DAY,
    name: 'Pluck The Day',
    labels: {
      description: 'Life should be enjoyed to its fullest, with indulgence and fervor — damn the consequences!',
      effect: 'Whenever confronted with drugs, luxurious things and new experiences, you must indulge or else gain 3 Conflict.'
    }
  },
  {
    id: QuirkId.EVEN_HANDED,
    name: 'Even-Handed',
    labels: {
      description: 'Law has no sides, and as a magistrate, I speak my mind and hold my position, no matter how stubborn or tenacious it may make me.',
      effect: 'After you use Judgment Is Here, the Coin is immediately discarded for the rest of the game session.'
    }
  },
  {
    id: QuirkId.SEA_LEGS,
    name: 'Sea Legs',
    labels: {
      description: 'I live for the sea, and when on land, I don’t feel at home.',
      effect: 'When not borne upon water or a boat, reduce your Initiative by your Flaw Ranks.'
    }
  },
  {
    id: QuirkId.ASCETICISM,
    name: 'Asceticism',
    labels: {
      description: 'I take with me only that which I truly need, and give all else away to those in need.',
      effect: 'You cannot own more than 10 pounds (£) in coins, or have more wares & weapons than you can carry. If you do, you cannot take advantage of Skill Ranks until you donate it or give it away.'
    }
  },
  {
    id: QuirkId.NOSEBLEEDS,
    name: 'Nosebleeds',
    labels: {
      description: 'My power frightens me, for if I push too hard or too often, my body begins to break down.',
      effect: 'Whenever you manipulate objects using No Mere Phenomena, you move one step down the Peril Condition Track negatively. If you become Incapacitated! due to this, you also begin Bleeding.'
    }
  },
  {
    id: QuirkId.HUSTLE_AND_FLOW,
    name: 'Hustle & Flow',
    labels: {
      description: 'Everything takes a backseat to income and profit, and when I lose out, the sting is unbearable.',
      effect: 'Whenever you fail a Fellowship-based Skill Test, you move one step down the Peril Condition Track negatively.'
    }
  },
  {
    id: QuirkId.THE_OLD_WAYS,
    name: 'The Old Ways',
    labels: {
      description: 'There are some things beyond my own skills, treatments that exceed my medical knowledge.',
      effect: 'Whenever attempting to Perform Surgery or Trepanation, you must flip the results to fail Heal Tests.'
    }
  },
  {
    id: QuirkId.TOO_INDEPENDENT,
    name: 'Too Independent',
    labels: {
      description: 'Life has made me fiercely independent, and I want nothing to do with those on the other side of the war.',
      effect: 'When interacting directly with those of an Allegiance other than your primary one, you must flip the results to fail Fellowship-based Skill Tests.'
    }
  },
  {
    id: QuirkId.MAD_HATTER_SYNDROME,
    name: 'Mad Hatter Syndrome',
    labels: {
      description: 'Hat making is not the most glamorous of professions, and it even carries the stigma of being quite batty.',
      effect: 'You gain one permanent Flaw Rank.'
    }
  },
  {
    id: QuirkId.NOT_YOUR_SOLDIER,
    name: 'Not Your Soldier',
    labels: {
      description: 'When thrown in any kind of fracas, my instrument makes for a very poor — and very expensive — weapon.',
      effect: 'Any time you use the Simple Ranged or Martial Ranged Skills, each Skill Rank counts for +5% instead of the normal +10%.'
    }
  },
  {
    id: QuirkId.TROUBLEMAKER,
    name: 'Troublemaker',
    labels: {
      description: 'I have a reputation of being a rabble-rouser and an upstart, which means very few in power trust me.',
      effect: 'When foes or strangers recognize you as a Mutineer, you must attempt to hide your true identity. The Historian will likely ask you to make a Secret Test for Disguise when in public, only revealing the results at the most inopportune of times.'
    }
  },
  {
    id: QuirkId.ARMS_FOR_THE_POOR,
    name: 'Arms For The Poor',
    labels: {
      description: 'Though the Devil may dance in my pocket, I must supply the greater war effort out of my own coin purse.',
      effect: 'You must donate one out of 9 pence (p) you have to the local militia.'
    }
  },
  {
    id: QuirkId.SERPENT_EATING_ITS_TAIL,
    name: 'Serpent Eating Its Tail',
    labels: {
      description: 'It’s not too hard to instigate a mob, but one false move or careless word, and your allies will turn against you quickly.',
      effect: 'For every failed Skill Test in combat, you suffer 1D10+1 Peril.'
    }
  },
  {
    id: QuirkId.OVERLY_CAUTIOUS,
    name: 'Overly Cautious',
    labels: {
      description: 'Careful consideration might be the hallmark of my career, but it is a detriment outside of the political chamber.',
      effect: 'You must triple the time required to make Skill Tests outside of combat.'
    }
  },
  {
    id: QuirkId.OVERLY_SKEPTICAL,
    name: 'Overly Skeptical',
    labels: {
      description: 'When my assumptions are proven false, I am shaken to my very core.',
      effect: 'Whenever you fail at Skill Tests to withstand Peril, you suffer an additional 1D10+1 Peril.'
    }
  },
  {
    id: QuirkId.ANGRY_READERSHIP,
    name: 'Angry Readership',
    labels: {
      description: 'Though I print for everyone for a price, I do have certain biases that my reading public don’t always agree with.',
      effect: 'When foes or strangers recognize you as a Printer, you cannot succeed at Charm or Leadership Tests.'
    }
  },
  {
    id: QuirkId.NO_HOME_PORT,
    name: 'No Home Port',
    labels: {
      description: 'Though I may sail ships for a certain flag, I still have no port of call that I am truly at home with.',
      effect: 'When foes or strangers recognize you as a Privateer, you cannot succeed at Bargain or Rumor Tests.'
    }
  },
  {
    id: QuirkId.DEBT_IS_OWED,
    name: 'Debt Is Owed',
    labels: {
      description: 'Having friends in high places is wonderful, but it’s a drain on time, money and sometimes even my own needs.',
      effect: 'You must donate one out of 9 pence (p) you have to the local tavern.'
    }
  },
  {
    id: QuirkId.FRAIDY_CAT,
    name: 'Fraidy Cat',
    labels: {
      description: 'What do you mean there’s something evil prowling out there in the dark?',
      effect: 'You treat failed Resolve Skill Tests to withstand Stress, Fear and Terror as Critical Failures instead.'
    }
  },
  {
    id: QuirkId.ANTISOCIAL,
    name: 'Antisocial',
    labels: {
      description: 'The wild may not hold surprises for me any longer, but civilization — that is where the real monsters reside.',
      effect: 'You cannot recover your Peril Condition Track in urban areas.'
    }
  },
  {
    id: QuirkId.GUILTLESS,
    name: 'Guiltless',
    labels: {
      description: 'At night I see the faces of the many people I have killed over the years, but I feel completely numb when I stare at these phantoms.',
      effect: 'Any time you take the life of a threat classified as a Humanoid (including player cultures), you gain 6 Conflict instead of the normal 3.'
    }
  },
  {
    id: QuirkId.GRAVE_STENCH,
    name: 'Grave Stench',
    labels: {
      description: 'The smell of grave soil and decay does not readily come out in the wash.',
      effect: 'You treat failed Fellowship-based Skill Tests as Critical Failures instead.'
    }
  },
  {
    id: QuirkId.COWARDS_HEART,
    name: 'Coward’s Heart',
    labels: {
      description: 'Getting the jump on someone is great, but I really need your help here!',
      effect: 'When foes outnumber you 3:1 or more in an Engagement, you cannot Defend.'
    }
  },
  {
    id: QuirkId.LOW_CLASS,
    name: 'Low Class',
    labels: {
      description: 'No matter what I do or how hard I work, my betters will never see me as their equal.',
      effect: 'You must flip the result to fail at Skill Tests to interact with threats classified as Humanoid (including player cultures) of a Risk Factor or Tier higher than your Tier. As an example, if you are of Basic Tier and they are of Intermediate Risk Factor or Tier, you flip the results to fail to interact with them.'
    }
  },
  {
    id: QuirkId.A_HEAVY_BURDEN,
    name: 'A Heavy Burden',
    labels: {
      description: 'Every sin I have ever absorbed weighs on my mind and soul — they are not others’ misdeeds anymore, but my own.',
      effect: 'Any time you spend Coins or sacrifice Determination for the benefits above, you take on the effects yourself.'
    }
  },
  {
    id: QuirkId.FORGE_SCARRED,
    name: 'Forge-Scarred',
    labels: {
      description: 'You don’t become as good a Smith as I without walking away with burns, bruises and hands as tough as leather.',
      effect: 'Reduce your Fellowship by -9%.'
    }
  },
  {
    id: QuirkId.I_SEE_DEAD_PEOPLE,
    name: 'I See Dead People',
    labels: {
      description: 'Spirits are intensely powerful entities, and I would be lying if I said they did not scare me.',
      effect: 'Whenever you Critically Fail to communicate with Supernatural threats, you suffer from Terror.'
    }
  },
  {
    id: QuirkId.BEFUDDLED,
    name: 'Befuddled',
    labels: {
      description: 'Well, I did read about it in a book once... I guess I was wrong!',
      effect: 'When you fail to Resist Spells and Spell-like effects, treat it as a Critical Failure instead.'
    }
  },
  {
    id: QuirkId.ALONE_RANGER,
    name: 'Alone Ranger',
    labels: {
      description: 'My job is a lonely one, and my years of facing danger and distress alone have pushed me away from others.',
      effect: 'You treat failed Charm and Rumor Skill Tests to interact with others as Critical Failures instead.'
    }
  },
  {
    id: QuirkId.OUT_IN_THE_OPEN,
    name: 'Out In The Open',
    labels: {
      description: 'I prefer the quiet of the woods and frontier settlements, as opposed to the hard cobbled streets.',
      effect: 'Whenever you fail to use Charm or Bargain, you cannot use Coins to change the results.'
    }
  },
  {
    id: QuirkId.DISCERNING_TASTES,
    name: 'Discerning Tastes',
    labels: {
      description: 'I covet the finer things in life — what does a person’s worth matter if their riches are not on display?',
      effect: 'You must pay the full price for anything you buy.'
    }
  },
  {
    id: QuirkId.POLITICAL_RESPONSIBILITIES,
    name: 'Political Responsibilities',
    labels: {
      description: 'You’re not the only person who owes a tax; I pay a ludicrous amount to maintain my title!',
      effect: 'You must donate one out of 9 pence (p) you have to the local government.'
    }
  },
  {
    id: QuirkId.FISH_OUT_OF_WATER,
    name: 'Fish Out Of Water',
    labels: {
      description: 'You’ll find me in the recesses of my library before you’ll find me at a fête.',
      effect: 'Whenever you enter public spaces, you must succeed at a Resolve Test or else suffer Stress.'
    }
  },
  {
    id: QuirkId.HELP_ME_STRANGER,
    name: 'Help Me, Stranger',
    labels: {
      description: 'I love my city like it’s my child, but honestly, I’m a bit out of sorts when outside the confines of civilization.',
      effect: 'Whenever you fail in a Skill Test in rural areas, you gain 1 Conflict.'
    }
  },
  {
    id: QuirkId.PERSONAL_HANG_UP,
    name: 'Personal Hang-Up',
    labels: {
      description: 'Sometimes people feel I am the personified will of a certain faction, which can get me in trouble with the more passionate parts of the public.',
      effect: 'You cannot use Fellowship-based Skill Tests to interact with those of an opposing Allegiance unless you spend one Coin first.'
    }
  },
  {
    id: QuirkId.URBAN_IGNORANCE,
    name: 'Urban Ignorance',
    labels: {
      description: 'I might put on a brave face, but the time I have spent in the wilderness has left me unable to cope with the hustle and bustle of city life.',
      effect: 'You cannot Surprise enemies in urban areas.'
    }
  },
  {
    id: QuirkId.SKILL_DETRIMENT,
    name: 'Skill Detriment',
    labels: {
      description: 'I have spent so much time studying other cultures that I have let all my other skills be pushed to the wayside.',
      effect: 'You must spend an additional 50 RP for Skill Ranks outside those the Translator provides to you.'
    }
  },
  {
    id: QuirkId.MARKED_FOR_DEATH,
    name: 'Marked For Death',
    labels: {
      description: 'My shifting attitudes and alliances have made me a lot of enemies, some of whom hunt me to this day.',
      effect: 'You begin gameplay with a nemesis, a ‘named’ enemy you will create with the Historian. Whenever you are face-to-face with this enemy, you cannot take advantage of the Coin pool. Once this enemy is defeated, the Historian will secretly create another nemesis and will tell you who they are only at the most inopportune moment.'
    }
  },
  {
    id: QuirkId.UNHEALTHY,
    name: 'Unhealthy',
    labels: {
      description: 'Being constantly on the move hasn’t done my health any favors, and most times, I feel worn down and tired.',
      effect: 'Reduce your Brawn by -9%.'
    }
  },
  {
    id: QuirkId.A_TANGLED_WEB,
    name: 'A Tangled Web',
    labels: {
      description: 'Humans live complicated and tangled lives, and sometimes the knots become too much to unravel.',
      effect: 'Whenever there are no Coins remaining in your respective pool, you cannot use Determination.'
    }
  },
  {
    id: QuirkId.WHITE_WHALE_HOLY_GRAIL,
    name: 'White Whale, Holy Grail',
    labels: {
      description: 'Below the bounty of the waters, strange things stir within the depths.',
      effect: 'When you’re immersed and you cannot see the water’s bottom, you must succeed at a Resolve Test or suffer from Stress.'
    }
  },
  {
    id: QuirkId.HACK_HAND,
    name: 'Hack-Hand',
    labels: {
      description: 'Measure twice, cut once — unfortunately, wood isn’t the only thing I’ve cut!',
      effect: 'Reduce your Agility by -9%.'
    }
  },
  {
    id: QuirkId.PEN_NAME,
    name: 'Pen Name',
    labels: {
      description: 'I don’t always publish my most fiery opinions under my true name — to do so would risk the safety of me and my loved ones.',
      effect: 'When foes or strangers recognize you by your real name or by your works, you suffer from Stress.'
    }
  }
];
