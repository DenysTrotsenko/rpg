import { CharacteristicId, TalentId } from '@wfrp-4e/models/enums';
import { Talent } from '@wfrp-4e/models/common';
import {
  getAgilityBonus,
  getBallisticSkillBonus,
  getDexterityBonus,
  getFellowshipBonus,
  getInitiativeBonus,
  getIntelligenceBonus,
  getStrengthBonus,
  getToughnessBonus,
  getWeaponSkillBonus,
  getWillpowerBonus
} from '@wfrp-4e/models/character';

const MAX_LEVEL_1_FN = () => 1;
const MAX_LEVEL_NONE_FN = () => 99;

export const TALENTS: Talent[] = [
  {
    id: TalentId.ACCURATE_SHOT,
    name: 'Accurate Shot',
    labels: {
      max: 'Ballistic Skill Bonus',
      description: 'You are an exceptional shot and know where to shoot an enemy in order to inflict maximum damage. You deal your Accurate Shot level in extra Damage with all ranged weapons.',
    },
    system: {
      MAX_LEVEL_FN: getBallisticSkillBonus
    }
  },
  {
    id: TalentId.ACUTE_SENSE,
    name: 'Acute Sense',
    grouped: true,
    labels: {
      placeholder: 'Sense',
      max: 'Initiative Bonus',
      tests: 'Perception',
      description: 'One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else’s eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.AETHYRIC_ATTUNEMENT,
    name: 'Aethyric Attunement',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Channelling (Any)',
      description: 'Your experience, talent or training lets you more safely manipulate the Winds of Magic. You do not suffer a Miscast if you roll a double on a successful Channel Test.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.ALLEY_CAT,
    name: 'Alley Cat',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Stealth (Urban)',
      description: 'You are at home in shadowy backstreets. When using Stealth (Urban), you may reverse the dice of any failed Test if this will score a Success.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.AMBIDEXTROUS,
    name: 'Ambidextrous',
    labels: {
      max: '2',
      description: 'You can use your off-hand far better than most folk, either by training or innate talent. You only suffer a penalty of –10 to Tests relying solely on your secondary hand, not –20. If you have this Talent twice, you suffer no penalty at all.',
    },
    system: {
      MAX_LEVEL_FN: () => 2
    }
  },
  {
    id: TalentId.ANIMAL_AFFINITY,
    name: 'Animal Affinity',
    labels: {
      max: 'Willpower Bonus',
      tests: 'Charm Animal',
      description: 'Wild animals feel comfortable in your presence, and often follow your lead. All creatures with the Bestial Trait not trained to be belligerent will automatically be calm in your presence unless they have a reason not to be, such as pain, an attack, being naturally hyper-aggressive, or having nearby young.',
    },
    system: {
      MAX_LEVEL_FN: getWillpowerBonus
    }
  },
  {
    id: TalentId.ARCANE_MAGIC,
    name: 'Arcane Magic',
    grouped: true,
    labels: {
      placeholder: 'Lore',
      max: '1',
      description: '',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.ARGUMENTATIVE,
    name: 'Argumentative',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Charm Tests when arguing and debating',
      description: 'You are used to arguing your points and winning. If you roll a successful Charm Test to debate with an opponent, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 24 could be used for +4 SL.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.ARTISTIC,
    name: 'Artistic',
    labels: {
      max: 'Dexterity Bonus',
      tests: 'Art (Any)',
      description: 'You have a natural talent for art, able to produce precise sketches with nothing but time and appropriate media. This ability has several in-game uses, ranging from creating Wanted Posters to sketching accurate journals, and has spot benefits as determined by the GM. Further to this, add Art (Any) to any Career you enter; if it is already in Career, you may instead purchase the Skill for 5 XP fewer per Advance.',
    },
    system: {
      MAX_LEVEL_FN: getDexterityBonus
    }
  },
  {
    id: TalentId.ATTRACTIVE,
    name: 'Attractive',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Charm Tests to influence those attracted to you',
      description: 'Whether it’s your piercing eyes, your strong frame, or maybe the way you flash your perfect teeth, you know how to make the best use of what the gods gave you. When you successfully use Charm to influence those attracted to you, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 38 could be used for +8 SL.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.BATTLE_RAGE,
    name: 'Battle Rage',
    labels: {
      max: 'Willpower Bonus',
      tests: 'Melee Tests when Frenzied',
      description: 'You are better able to control your Frenzy in combat. You can end your Frenzy with a successful Cool Test at the end of the round.',
    },
    system: {
      MAX_LEVEL_FN: getWillpowerBonus
    }
  },
  {
    id: TalentId.BEAT_BLADE,
    name: 'Beat Blade',
    labels: {
      max: 'Weapon Skill Bonus',
      tests: 'Melee for a Beat Blade',
      description: 'You are trained to make sharp controlled blows to your opponent’s weapon, creating an opening for an attack or simply impeding an incoming attack. For your Action, you can choose to Beat Blade before rolling. Perform a Melee Test; if successful, your opponent loses –1 Advantage, and loses a further –1 per SL you score. This Test is not Opposed. This Talent is of no use if your opponent has no weapon, or has a larger Size than you (see page 341).',
    },
    system: {
      MAX_LEVEL_FN: getWeaponSkillBonus
    }
  },
  {
    id: TalentId.BENEATH_NOTICE,
    name: 'Beneath Notice',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Stealth when in plain sight',
      description: 'The high and mighty pay no attention to your presence, knowing you are well beneath their notice. Assuming you are properly attired and not in an incongruous position, those of a higher Status Tier will normally ignore you unless your presence becomes inappropriate, which can make it very easy to listen into conversations you perhaps shouldn’t. Further, characters with a higher Status Tier than you gain no Advantage for striking or wounding you in combat, as there is nothing to be gained for defeating such a lowly cur.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.BERSERK_CHARGE,
    name: 'Berserk Charge',
    labels: {
      max: 'Strength Bonus',
      tests: 'Melee on a Turn when you Charge',
      description: 'You hurl yourself at your enemies with reckless abandon, using the force of your charge to add weight to your strikes. When you Charge, you gain +1 Damage to all Melee attacks per level in this Talent.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.BLATHER,
    name: 'Blather',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Charm to Blather',
      description: 'Called ‘opening your mouth and letting your belly rumble’ in Nordland, or simply ‘bullshitting’ in Ostland, blathering involves talking rapidly and incessantly, or talking volubly and at-length, about inconsequential or nonsense matters, and is used to verbally confuse and confound a target. You use your Charm Skill to Blather. Attempt an Opposed Charm/Intelligence Test. Success gives your opponent a Stunned Condition. Further, for each level you have in Blather, your opponent gains another Stunned Condition. Targets Stunned by Blather may do nothing other than stare at you dumbfounded as they try to catch-up with or understand what you are saying. Once the last Stunned Condition comes to an end, the target finally gets a word in, and may not be best pleased with you — after all, you have been talking about nothing or nonsense for some time. Should you stop talking, your opponent immediately loses all Stunned Conditions caused by your Blather. Generally, you can only attempt to Blather at a character once per scene, or perhaps longer as determined by the GM, as the target soon wises up to your antics.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.BLESS,
    name: 'Bless',
    grouped: true,
    labels: {
      placeholder: 'Divine Lore',
      max: '1',
      description: 'You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity as listed in Chapter 7: Religion and Belief. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.BOOKISH,
    name: 'Bookish',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Research',
      description: 'You are as at home in a library as a seaman at sea or a farmer a-farming. When using Research, you may reverse the dice of any failed Test if this will score a success.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.BREAK_AND_ENTER,
    name: 'Break and Enter',
    labels: {
      max: 'Strength Bonus',
      tests: 'Melee when forcing or breaking inanimate objects',
      description: 'You are an expert at quickly breaking down doors and forcing entry. You may add +1 Damage for each level in this Talent when determining damage against inanimate objects such as windows, chests, doors, and similar.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.BRIBER,
    name: 'Briber',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Bribery',
      description: 'You are an exceedingly skilled briber. The GM should reduce the base cost of any required bribe by 10% per level you have in Briber, to a minimum of 10% of the original amount.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.CARDSHARP,
    name: 'Cardsharp',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Gamble and Sleight of Hand when playing card games',
      description: 'You are used to playing, and winning, at cards, although your methods may involve a little cheating. When you successfully use Gamble or Sleight of Hand when playing cards, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 28 could be used for +8 SL. If you play a real card game to represent what is happening in-game, you may receive an extra number of cards per deal equal to your level in Cardsharp, then discard down to the appropriate hand-size before each round of play.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.CAREFUL_STRIKE,
    name: 'Careful Strike',
    labels: {
      max: 'Initiative Bonus',
      description: 'You are skilled at hitting your enemy exactly where you want to, either at range or in melee. You may modify your Hit Location result by up to +/–10 per time you have this Talent. So, if you had this Talent twice and hit location 34, the Right Arm, you could modify this down to 14, the Left Arm, or up to 54, the Body (see page 159).',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.CAROUSER,
    name: 'Carouser',
    labels: {
      max: 'Toughness Bonus',
      tests: 'Charm at Parties, Gossip at Parties, Consume Alcohol',
      description: 'You are a seasoned drinker and know how to party hard. You may reverse the dice of any failed Consume Alcohol Test if this will score a Success.',
    },
    system: {
      MAX_LEVEL_FN: getToughnessBonus
    }
  },
  {
    id: TalentId.CATFALL,
    name: 'Catfall',
    labels: {
      max: 'Agility Bonus',
      tests: 'Athletics when falling',
      description: 'You are nimble and balanced like a cat, and are able to fall much greater distances unharmed than others might. Whenever you fall, you attempt an Athletics Test. If successful, reduce the distance fallen by 1 yard, +1 extra yard per +1 SL scored, for the purposes of calculating Damage.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.CAT_TONGUED,
    name: 'Cat-tongued',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Charm when lying',
      description: 'Like Ranald the Trickster God, you blend truth and lies as if there were no difference. When using Charm to lie, listeners do not get to oppose your Charm with their Intuition to detect if there is something fishy in what you say.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.CHAOS_MAGIC,
    name: 'Chaos Magic',
    grouped: true,
    labels: {
      placeholder: 'Lore',
      max: 'Number of Spells available in chosen Chaos Magic Lore',
      description: 'By accident or design you have lost a portion of your soul to one of the Dark Gods, and can now practice the foul magics of Chaos. Your ruinous patron immediately grants you access to a single spell from the chosen Lore (most commonly the Nurgle, Slaanesh, or Tzeentch Lores) and you gain a Corruption point as the spell infiltrates your mind, never to be forgotten. Each time you take this Talent, which always costs 100 XP per time instead of the normal cost, you learn another spell from your chosen Lore and gain a Corruption point. For more about the available spells, see Chapter 8: Magic. Under normal circumstances, you may only ever know one Lore of Chaos Magic.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_NONE_FN
    }
  },
  {
    id: TalentId.COMBAT_AWARE,
    name: 'Combat Aware',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Perception during melee',
      description: 'You are used to scanning the battlefield to make snap decisions informed by the shifting tides of war. You may take a Challenging (+0) Perception Test to ignore Surprise, which is modified by circumstance as normal.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.COMBAT_MASTER,
    name: 'Combat Master',
    labels: {
      max: 'Agility Bonus',
      description: 'Your accumulated years of combat experience allow you to keep lesser fighters at bay. For each level in this Talent, you count as one more person for the purposes of determining if one side out-numbers the other. This Talent only comes into play when you are out-numbered. See page 162 for the rules for out-numbering.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.COMBAT_REFLEXES,
    name: 'Combat Reflexes',
    labels: {
      max: 'Initiative Bonus',
      description: 'You react like a flash of lightning. Add 10 to your Initiative for each level in this Talent when determining Combat Initiative.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.COMMANDING_PRESENCE,
    name: 'Commanding Presence',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Leadership',
      description: 'Your presence fills others with hushed awe and admiration. Such is your aura of authority, those with a lower Status may not resist your Leadership tests with their Willpower. Of course, enemies are still no more likely to respect or obey you, but the common folk rarely stand against you.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.CONCOCT,
    name: 'Concoct',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Lore (Apothecary)',
      description: 'You are skilled at making potions, philtres, and draughts on the go. You may take one free Crafting Endeavour to use Lore (Apothecary) without need of a Workshop. Other Crafting Endeavours use the normal rules.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.CONTORTIONIST,
    name: 'Contortionist',
    labels: {
      max: 'Agility Bonus',
      tests: 'Perform and Agility Tests when contorting helps',
      description: 'You can bend and manipulate your body in a myriad of seemingly unnatural ways. This allows you to squeeze through unlikely gaps and bend your body in crazy ways, giving benefits determined by the GM, possibly with a successful Agility test.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.COOLHEADED,
    name: 'Coolheaded',
    labels: {
      max: '1',
      description: 'You gain a permanent +5 bonus to your starting Willpower Characteristic this does not count towards your Advances.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN,
      INC_CHARACTERISTIC_ID: CharacteristicId.WILLPOWER,
      INC_CHARACTERISTIC_VALUE: 5
    }
  },
  {
    id: TalentId.CRACK_THE_WHIP,
    name: 'Crack the Whip',
    labels: {
      max: 'Dexterity Bonus',
      tests: 'Drive or Ride Tests when Fleeing or Running',
      description: 'You know how to get the most out of your animals. When an animal you control is Fleeing or Running, it gains +1 Movement if you are using a whip.',
    },
    system: {
      MAX_LEVEL_FN: getDexterityBonus
    }
  },
  {
    id: TalentId.CRAFTSMAN,
    name: 'Craftsman',
    grouped: true,
    labels: {
      placeholder: 'Trade',
      max: 'Dexterity Bonus',
      tests: 'Trade (any one)',
      description: 'You have true creative talent. Add the associated Trade Skill to any Career you enter. If the Trade Skill is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.',
    },
    system: {
      MAX_LEVEL_FN: getDexterityBonus
    }
  },
  {
    id: TalentId.CRIMINAL,
    name: 'Criminal',
    labels: {
      max: 'None',
      description: '',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_NONE_FN
    }
  },
  {
    id: TalentId.DEADEYE_SHOT,
    name: 'Deadeye Shot',
    labels: {
      max: '1',
      description: 'You always hit an opponent right between the eyes... or wherever else you intended to hit. Instead of reversing the dice to determine which Hit Location is struck with your ranged weapons, you may pick a location.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.DEALMAKER,
    name: 'Dealmaker',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Haggle',
      description: 'You are a skilled businessman who knows how to close a deal. When using the Haggle skill, you reduce or increase the price of the products by an extra 10%. Note: The GM may put a lower limit on prices here to show a seller refusing to sell below cost.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.DETECT_ARTEFACT,
    name: 'Detect Artefact',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Intuition tests to detect magical artefacts',
      description: 'You are able to sense when magic lies within an artefact. You may attempt an Intuition Test for any magical artefact touched. If successful, you sense the item is magical; further, each SL also provides a specific special rule the item uses, if it has any. Normally, you may only attempt this Test once per artefact touched.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.DICEMAN,
    name: 'Diceman',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Gamble and Sleight of Hand when playing dice games',
      description: 'You are a dicing master, and all claims you cheat are clearly wrong. When you successfully use Gamble or Sleight of Hand when playing with dice, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 06 could be used for +6 SL. If you play any real-life dice games to represent in-game dice games, always roll extra dice equal to your Diceman level and choose the best results.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.DIRTY_FIGHTING,
    name: 'Dirty Fighting',
    labels: {
      max: 'Weapon Skill Bonus',
      tests: 'Melee (Brawling)',
      description: 'You have been taught all the dirty tricks of unarmed combat. You may choose to cause an extra +1 Damage for each level in Dirty Fighting with any successful Melee (Brawling) hit. Note: using this Talent will be seen as cheating in any formal bout.',
    },
    system: {
      MAX_LEVEL_FN: getWeaponSkillBonus
    }
  },
  {
    id: TalentId.DISARM,
    name: 'Disarm',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Melee Tests concerning this Talent',
      description: 'You are able to disarm an opponent with a careful flick of the wrist or a well-aimed blow to the hand. For your Action, you may attempt an Opposed Melee/Melee test. If you win, your opponent loses a held weapon, which flies 1d10 feet in a random direction (with further effects as determined by the GM). If you win by 2 SL, you can determine how far the weapon is flung instead of rolling randomly; if you win by 4 SL, you can also choose the direction the weapon goes in; if you win by 6 SL or more, you can take your opponent’s weapon if you have a free hand, plucking it from the air with a flourish. This Talent is of no use if your opponent has no weapon, or is a larger Size than you (see page 341).',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.DISTRACT,
    name: 'Distract',
    labels: {
      max: 'Agility Bonus',
      tests: 'Athletics to Distract',
      description: 'You are trained in simple movements to distract or startle your opponent, drawing eyes from your true intent. You may use your Move to perform a Distraction. This is resolved by an Opposed Athletics/Cool Test. If you win, your opponent can gain no Advantage until the end of the next Round.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.DOOMED,
    name: 'Doomed',
    labels: {
      max: '1',
      description: 'At the age of 10, a Priest of Morr called a Doomsayer took you aside to foretell your death in an incense-laden, coming-of-age ritual called the Dooming. In conjunction with your GM, come up with a suitable Dooming. Should your character die in a fashion that matches your Dooming, your next character gains a bonus of half the total XP your dead character accrued during play.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.DRILLED,
    name: 'Drilled',
    labels: {
      max: 'Weapon Skill Bonus',
      tests: 'Melee Tests when beside an ally with Drilled',
      description: 'You have been trained to fight shoulder-to-shoulder with other soldiers. If an enemy causes you to lose Advantage when standing beside an active ally with the Drilled Talent, you may keep 1 lost Advantage for each time you’ve taken the Drilled Talent.',
    },
    system: {
      MAX_LEVEL_FN: getWeaponSkillBonus
    }
  },
  {
    id: TalentId.DUAL_WIELDER,
    name: 'Dual Wielder',
    labels: {
      max: 'Agility Bonus',
      tests: 'Melee or Ranged when attacking with two weapons',
      description: 'When armed with two weapons, you may attack with both for your Action. Roll to hit with the weapon held in your primary hand. If you hit, determine Damage as normal, but remember to keep your dice roll, as you will use it again. If the first strike hits, once it is resolved, the weapon in your secondary hand can then target an available opponent of your choice using the same dice roll for the first strike, but reversed. So, if you rolled 34 to hit with the first weapon, you use 43 to hit with the second. Remember to modify this second roll by your off-hand penalty (–20 unless you have the Ambidextrous Talent). This second attack is Opposed with a new defending roll, and damage for this second strike is calculated as normal. The only exception to this is if you roll a Critical for your first strike. If this happens, use the roll on the Critical Table to also act as the roll for the second attack. So, if you scored a critical to the head and rolled 56 on the Critical table for a Major Eye Wound, your second attack would then strike out with a to-hit value of 56. If you choose to attack with both weapons, all your defensive rolls until the start of your next Turn suffer a penalty of –10. You do not gain an Advantage when you successfully strike or Wound an opponent when Dual Wielding unless both attacks hit.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.EMBEZZLE,
    name: 'Embezzle',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Intelligence (Embezzling)',
      description: 'You are skilled at skimming money from your employers without being detected. Whenever you secure money when Earning (during play or performing an Income Endeavour), you may attempt an Opposed Intelligence Test with your employer (assuming you have one). If you win, you skim 2d10 + SL brass pennies, 1d10 + SL silver shillings, or 1 + SL gold crowns (depending upon the size of the business in question, as determined by the GM) without being detected. If your employer wins by 6+ SL, you gain the money, but your embezzling is detected; what then happens is left to the GM. Any other result means you have failed to embezzle any money.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.ENCLOSED_FIGHTER,
    name: 'Enclosed Fighter',
    labels: {
      max: 'Agility Bonus',
      tests: 'Dodge in enclosed environments',
      description: 'You have learned to make the most benefit out of fighting in enclosed spaces. You ignore penalties to Melee caused by confined spaces such as tunnels, the frontline, small fighting pits, and similar, and can use the Dodge Skill, even if it would normally be disallowed due to lack of space.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.ETIQUETTE,
    name: 'Etiquette',
    grouped: true,
    labels: {
      placeholder: 'Social Group',
      max: 'Fellowship Bonus',
      tests: 'Charm and Gossip',
      description: 'You can blend in socially with the chosen group so long as you are dressed and acting appropriately. Example social groups for this Talent are: Criminals, Cultists, Guilders, Nobles, Scholars, Servants, and Soldiers. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM’s discretion.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.FAST_HANDS,
    name: 'Fast Hands',
    labels: {
      max: 'Dexterity Bonus',
      tests: 'Sleight of Hand, Melee (Brawling) to touch an opponent',
      description: 'You can move your hands with surprising dexterity. Bystanders get no passive Perception Tests to spot your use of the Sleight of Hand Skill, instead they only get to Oppose your Sleight of Hand Tests if they actively suspect and are looking for your movements. Further, attempts to use Melee (Brawling) to simply touch an opponent gain a bonus of +10 × your level in Fast Hands.',
    },
    system: {
      MAX_LEVEL_FN: getDexterityBonus
    }
  },
  {
    id: TalentId.FAST_SHOT,
    name: 'Fast Shot',
    labels: {
      max: 'Agility Bonus',
      tests: 'Ranged when making a Fast Shot',
      description: 'If you have a loaded ranged weapon, you can fire it outside the normal Initiative Order before any other combatant reacts in the following Round. You roll to hit using all the normal modifiers. Employing Fast Shot requires both your Action and Move for your upcoming turn, and these will count as having been spent when your next turn arrives. If two or more characters use Fast Shot, the character who has taken this Talent most goes first. If any characters have taken Fast Shot an equal number of times, both shots are fired simultaneously, and should both be handled at the same time.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.FEARLESS,
    name: 'Fearless',
    grouped: true,
    labels: {
      placeholder: 'Enemy',
      max: 'Willpower Bonus',
      tests: 'Cool to oppose your Enemy’s Intimidate, Fear, and Terror',
      description: 'You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered. Typical enemies include Beastmen, Greenskins, Outlaws, Vampires, Watchmen, and Witches.',
    },
    system: {
      MAX_LEVEL_FN: getWillpowerBonus
    }
  },
  {
    id: TalentId.FEINT,
    name: 'Feint',
    labels: {
      max: 'Weapon Skill Bonus',
      tests: 'Melee (Fencing) for Feints',
      description: 'You have trained how to make false attacks in close combat to fool your opponent. You may now make a Feint for your Action against any opponent using a weapon. This is resolved with an Opposed Melee (Fencing)/Melee Test. If you win, and you attack the same opponent before the end of the next Round, you may add the SL of your Feint to your attack roll.',
    },
    system: {
      MAX_LEVEL_FN: getWeaponSkillBonus
    }
  },
  {
    id: TalentId.FIELD_DRESSING,
    name: 'Field Dressing',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Heal during combat Rounds',
      description: 'You are used to treating wounds quickly. If you fail a Heal Test when using Bandages, you may reverse the result if this will score a success; however, if you do so, you may not score more than +1 SL as you focus on speed over accuracy.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.FISHERMAN,
    name: 'Fisherman',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Any Test involving fishing',
      description: 'You are a very capable fisherman and know all the best ways to land fish. Assuming a large enough body of water is available, you are automatically assumed to be able to fish enough to feed yourself and a number of others equal to your level in Fisherman, assuming you choose to spend at least an hour or so with a line and bait. You may secure more fish in addition to this using the normal rules for foraging (see page 127).',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.FLAGELLANT,
    name: 'Flagellant',
    labels: {
      max: 'Toughness Bonus',
      tests: 'Any for resisting the Ruinous Powers',
      description: 'You have dedicated your pain to the service of your God. Each day, you must spend half a bell (half an hour) praying as you maintain a number of Wounds suffered equal to your level in Flagellent. Until you next sleep, if you have the Frenzy Talent you may enter Frenzy immediately without testing. The Frenzy Talent is added to the Talent list of any career you are in. Should you fail to flagellate yourself on any given day, or allow your castigated flesh to be healed, you may not spend any Resilience or Resolve until you flagellate yourself again.',
    },
    system: {
      MAX_LEVEL_FN: getToughnessBonus
    }
  },
  {
    id: TalentId.FLEE,
    name: 'Flee!',
    labels: {
      max: 'Agility Bonus',
      tests: 'Athletics when Fleeing',
      description: 'When your life is on the line you are capable of impressive bursts of speed. Your Movement Attribute counts as 1 higher when Fleeing (see page 165).',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.FLEET_FOOTED,
    name: 'Fleet Footed',
    labels: {
      max: '1',
      description: 'You gain +1 to your Movement Attribute.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.FRENZY,
    name: 'Frenzy',
    labels: {
      max: '1',
      description: 'You can Frenzy as described on page 190.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.FRIGHTENING,
    name: 'Frightening',
    labels: {
      max: 'Strength Bonus',
      description: 'Anyone sane thinks twice before approaching you. If you wish, you have a Fear Rating of 1 (see page 190). Add +1 to this number per extra time you have this Talent.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.FURIOUS_ASSAULT,
    name: 'Furious Assault',
    labels: {
      max: 'Agility Bonus',
      tests: 'Melee when making extra attacks',
      description: 'Your blows follow one another in quick succession, raining down on your opponents with the fury of Ulric. Once per Round, if you hit an opponent in close combat, you may immediately spend an Advantage or your Move to make an extra attack (assuming you have your Move remaining).',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.GREGARIOUS,
    name: 'Gregarious',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Gossip Tests with travellers',
      description: 'You just like talking to other folk and it seems they like talking to you. You may reverse any failed Gossip Test if this allows the Test to succeed.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.GUNNER,
    name: 'Gunner',
    labels: {
      max: 'Dexterity Bonus',
      description: 'You can reload blackpowder weapons with practiced ease. Add SL equal to your level in Gunner to any Extended Test to reload a Blackpowder weapon.',
    },
    system: {
      MAX_LEVEL_FN: getDexterityBonus
    }
  },
  {
    id: TalentId.HARDY,
    name: 'Hardy',
    labels: {
      max: 'Toughness Bonus',
      description: 'You gain a permanent addition to your Wounds, equal to your Toughness Bonus. If your Toughness Bonus should increase, then the number of Wounds Hardy provides also increases.',
    },
    system: {
      MAX_LEVEL_FN: getToughnessBonus
    }
  },
  {
    id: TalentId.HATRED,
    name: 'Hatred',
    grouped: true,
    labels: {
      placeholder: 'Group',
      max: 'Willpower Bonus',
      tests: 'Willpower (Resist Group)',
      description: 'You are consumed with hatred for something in the Old World, as described on page 190. Each time you take this Talent you develop hatred for a new group. Examples you could take include: Beastmen, Greenskins, Monsters, Outlaws, Sigmarites, Undead, Witches.',
    },
    system: {
      MAX_LEVEL_FN: getWillpowerBonus
    }
  },
  {
    id: TalentId.HOLY_HATRED,
    name: 'Holy Hatred',
    labels: {
      max: 'Fellowship Bonus',
      description: 'Your prayers drip with the hatred you feel for your blasphemous enemies. You deal +1 Damage with Miracles for each level in this Talent.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.HOLY_VISIONS,
    name: 'Holy Visions',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Intuition Tests when on holy ground',
      description: 'You clearly see the great works of the Gods all around you. You automatically know when you enter Holy Ground, and may take an Intuition Test to receive visions (of ten obscure, and seen through the paradigm of your cult or individual belief-system) regarding the local area if significant events have occurred there in the past.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.HUNTERS_EYE,
    name: 'Hunter’s Eye',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Any Test to trail or capture game',
      description: 'You are a skilled hunter and know all the best techniques to find game. When travelling through well-stocked lands, you are automatically assumed to be able to hunt down enough game to feed yourself and a number of others equal to your level in Hunter’s Eye, so long as you have time and the correct equipment. You may secure more food in addition to this using the normal rules for foraging (see page 127).',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.IMPASSIONED_ZEAL,
    name: 'Impassioned Zeal',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Charm when speaking about your cause',
      description: 'When you talk about your cause, case, or religion, your words fill with passion and fervent zeal. You may double your Fellowship for the purposes of determining the number of people influenced by your Public Speaking (see page 142) when talking about your cause.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.IMPLACABLE,
    name: 'Implacable',
    labels: {
      max: 'Toughness Bonus',
      description: 'It takes a lot to finish you off. You can ignore the Wound loss from a Bleeding Condition. Each level in this Talent lets you ignore the Wound loss from an extra Bleeding Condition.',
    },
    system: {
      MAX_LEVEL_FN: getToughnessBonus
    }
  },
  {
    id: TalentId.IN_FIGHTER,
    name: 'In-fighter',
    labels: {
      max: 'Dexterity Bonus',
      tests: 'Melee when in-fighting, or to enter in-fighting',
      description: 'You are skilled at drawing in close to an opponent. You suffer no penalties for fighting against an opponent with a longer weapon than you. Further, if you use the optional rules for In-fighting (see page 297), gain a bonus of +10 to hit your opponent.',
    },
    system: {
      MAX_LEVEL_FN: getDexterityBonus
    }
  },
  {
    id: TalentId.INSPIRING,
    name: 'Inspiring',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Leadership during war',
      description: '',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.INSTINCTIVE_DICTION,
    name: 'Instinctive Diction',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Language (Magick) when casting',
      description: 'You instinctively understand the language of Magick, and are capable of articulating the most complex phrases rapidly without error. You do not suffer a Miscast if you roll a double on a successful Language (Magick) Test.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.INVOKE,
    name: 'Invoke',
    grouped: true,
    labels: {
      placeholder: 'Divine Lore',
      max: '1',
      description: 'You are blessed by one of the Gods and can empower one of your Cult’s Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. So, if you already know 3 miracles, your next miracle costs 300 XP to purchase. Full rules for learning new miracles are provided in Chapter 7: Religion and Belief. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God, with effects determined by your GM.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.IRON_JAW,
    name: 'Iron Jaw',
    labels: {
      max: 'Toughness Bonus',
      tests: 'Endurance tests to resist Stunned',
      description: 'You are made of sturdy stuff and can weather even the strongest blows. Whenever you gain one or more Stunned Conditions, you may make an immediate Challenging (+0) Endurance Test to not take one of them, with each SL removing an extra Stunned Condition.',
    },
    system: {
      MAX_LEVEL_FN: getToughnessBonus
    }
  },
  {
    id: TalentId.IRON_WILL,
    name: 'Iron Will',
    labels: {
      max: 'Willpower Bonus',
      tests: 'Cool Tests to oppose Intimidate',
      description: 'You have an indomitable will of iron, and will never willingly bow down before another. Use of the Intimidate skill does not cause Fear in you, and will not stop you speaking out against the intimidating party.',
    },
    system: {
      MAX_LEVEL_FN: getWillpowerBonus
    }
  },
  {
    id: TalentId.JUMP_UP,
    name: 'Jump Up',
    labels: {
      max: '1',
      description: 'You are hard to keep down. You may perform a Challenging(+0) Athletics Test to immediately regain your feet whenever you gain a Prone Condition. This Athletics Test is often modified by the Strength behind the blow that knocks you down: for every +10 Strength the blow has over your Toughness, you suffer a penalty of –10 to the Athletics Test, and vice versa.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.KINGPIN,
    name: 'Kingpin',
    labels: {
      max: '1',
      description: 'You have earned an air of respectability despite your nefarious ways. You may ignore the Status loss of the Criminal Talent.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.LIGHTNING_REFLEXES,
    name: 'Lightning Reflexes',
    labels: {
      max: '1',
      description: 'You gain a permanent +5 bonus to your starting Agility Characteristic (this does not count towards your Advances).',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN,
      INC_CHARACTERISTIC_ID: CharacteristicId.AGILITY,
      INC_CHARACTERISTIC_VALUE: 5
    }
  },
  {
    id: TalentId.LINGUISTICS,
    name: 'Linguistics',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Language (All)',
      description: 'You have a natural affinity for languages. Given a month’s exposure to any Language, you count the associated Language Skill as a Basic Skill with a successful Intelligence Test (which can be attempted once per month). Note: Linguistics only works for languages used to frequently communicate with others, so does not work with Language (Magick).',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.LIP_READING,
    name: 'Lip Reading',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Perception Tests concerning this Talent',
      description: 'You can tell what people are saying by simply watching their lips; you do not need to hear what they are saying. If you have an unobstructed view of the speaker’s lower face, you can attempt a Perception Test to understand what they are saying.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.LUCK,
    name: 'Luck',
    labels: {
      max: 'Fellowship Bonus',
      description: 'They say when you were born, Ranald smiled. Your maximum Fortune Points now equal your current Fate points plus the number of times you’ve taken Luck.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.MAGICAL_SENSE,
    name: 'Magical Sense',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Intuition Tests to detect Wizards',
      description: 'You are able to sense the Winds of Magic in others. You may attempt an Average (+20) Intuition Test whenever you encounter a spellcaster. If you pass, you sense the target is a witch. Further, if you score an Astounding Success (+6), can also determine the target’s highest Channelling Specialisation.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.MAGIC_RESISTANCE,
    name: 'Magic Resistance',
    labels: {
      max: 'Toughness Bonus',
      description: 'You are resistant to magic. The SL of any spell affecting you is reduced by 2 per point you have in this Talent. The SL of a spell is only modified by the highest Magic Resistance Talent within its target area. Further, you may never learn the Arcane Magic, Bless, Invoke, Petty Magic, or Witch! Talents.',
    },
    system: {
      MAX_LEVEL_FN: getToughnessBonus
    }
  },
  {
    id: TalentId.MAGNUM_OPUS,
    name: 'Magnum Opus',
    labels: {
      max: 'None',
      description: 'You are an undisputed master in your field, able to create work of such incredible complexity others can but sit back and marvel at your genius. Each time you take this Talent you may create a single, extraordinary work of art with one of your Art or Trade Skills. This work is unrivalled in your field, a unique piece that will always impress, giving bonuses as determined by the GM, most commonly to Fellowship Tests from those who have witnessed your astounding work. Selling the piece will net you at least ten times its normal value, and sometimes significantly more than this.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_NONE_FN
    }
  },
  {
    id: TalentId.MARKSMAN,
    name: 'Marksman',
    labels: {
      max: '1',
      description: 'You gain a permanent +5 bonus to your starting Ballistic Skill (this does not count towards your Advances).',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN,
      INC_CHARACTERISTIC_ID: CharacteristicId.BALLISTIC_SKILL,
      INC_CHARACTERISTIC_VALUE: 5
    }
  },
  {
    id: TalentId.MASTER_OF_DISGUISE,
    name: 'Master of Disguise',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Entertain (Acting) when being someone else',
      description: 'You are an expert at taking on the appearance and mannerisms of others. With nothing but posture changes, face twisting, and careful use of appropriate clothing, you no longer look like yourself without having to use a Disguise Kit.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.MASTER_ORATOR,
    name: 'Master Orator',
    labels: {
      max: 'Fellowship Bonus',
      description: 'You are skilled at firing up crowds. You gain a gain a SL bonus equal to your levels of Master Orator to any Charm Test when Public Speaking before a crowd.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.MASTER_TRADESMAN,
    name: 'Master Tradesman',
    grouped: true,
    labels: {
      placeholder: 'Trade',
      max: 'Dexterity Bonus',
      tests: 'Any appropriate Extended Trade Tests',
      description: 'You are exceptionally skilled at your specified Trade skill. You reduce the required SL of any Extended Test using your Trade Skill by the level of your Master Tradesman Talent.',
    },
    system: {
      MAX_LEVEL_FN: getDexterityBonus
    }
  },
  {
    id: TalentId.MENACING,
    name: 'Menacing',
    labels: {
      max: 'Strength Bonus',
      tests: 'Intimidate',
      description: 'You have an imposing presence. When using the Intimidate Skill, gain a SL bonus equal to your levels of Menacing.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.MIMIC,
    name: 'Mimic',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Entertain (Acting) Tests where accents are important',
      description: 'You have a good ear for accents and dialects, and can reproduce them accurately. You may replicate any accent you are exposed to for at least a day with an Initiative Test; this Test may be attempted once per day. Once passed, you may always mimic the accent, and locals will believe you to be one of their own.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.NIGHT_VISION,
    name: 'Night Vision',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Perception tests in low-light conditions',
      description: 'You can see very well in natural darkness. Assuming you have at least a faint source of light (such as starlight, moonlight, or bioluminescence) you can see clearly for 20 yards per level of Night Vision. Further, you can extend the effective illumination distance of any light sources by 20 yards per level of Night Vision.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.NIMBLE_FINGERED,
    name: 'Nimble Fingered',
    labels: {
      max: '1',
      description: 'You gain a permanent +5 bonus to your starting Dexterity (this does not count towards your Advances).',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN,
      INC_CHARACTERISTIC_ID: CharacteristicId.DEXTERITY,
      INC_CHARACTERISTIC_VALUE: 5
    }
  },
  {
    id: TalentId.NOBLE_BLOOD,
    name: 'Noble Blood',
    labels: {
      max: '1',
      tests: 'Any Test influenced by your Status',
      description: 'You are either born into the nobility, or otherwise elevated to it by in-game events. Assuming you are dressed appropriately, you are always considered of higher Status than others unless they also have the Noble Blood Talent, where Status is compared as normal.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.NOSE_FOR_TROUBLE,
    name: 'Nose for Trouble',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Any Test to spot Troublemakers',
      description: 'You are used to getting into, and preferably out of, trouble. You may attempt an Intuition Test to spot those seeking to cause trouble or seeking to cause you harm, even if normally you would not be allowed a Test (because of Talents or a Spell, for example). This Test will likely be Opposed if others are hiding, and the GM may prefer to take this Test on your behalf in secret so you do not know the results should you fail. If any troublemakers you spot start combat, you may ignore any Surprised Condition they would normally inflict.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.NUMISMATICS,
    name: 'Numismatics',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Evaluate to establish the worth of coins',
      description: 'You are well versed with the different coinage of the Old World, and are adept at determining their value. You can judge the true value of a coin by experience alone, not even requiring a Test. Further, you can identify forged coins with a Simple Evaluate Test; it is never Opposed by the SL of the Forger.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.OLD_SALT,
    name: 'Old Salt',
    labels: {
      max: 'Agility Bonus',
      tests: 'Sail (any Sea-worthy Vessels)',
      description: 'You are an experienced seaman, and are very used to sea life. You can ignore all negative modifiers to Tests at sea derived from poor weather, rolling ships, and similar. Further, you count as two seamen towards the minimum number of crew to pilot a sea-going vessel.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.ORIENTATION,
    name: 'Orientation',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Navigation',
      description: 'You have an instinctual feel for direction. You automatically know which direction is north with a glimpse at the stars, trees, or whatever other signs you are familiar with.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.PANHANDLE,
    name: 'Panhandle',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Charm (Begging)',
      description: 'You are a skilled beggar, able to get even the most jaded individual to contribute to your cause. You can perform a Charm Test every half hour when Begging, not every hour (see page 120).',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.PERFECT_PITCH,
    name: 'Perfect Pitch',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Entertain (Sing), Language (Tonal Languages, such as Elthárin, Cathayan, and Magick)',
      description: 'You have perfect pitch, able to replicate notes perfectly and identify them without even making a Test. Further, add Entertain (Sing) to any Career you enter; if it is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.PETTY_MAGIC,
    name: 'Petty Magic',
    labels: {
      max: '1',
      description: '',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.PHARMACIST,
    name: 'Pharmacist',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Trade (Apothecary)',
      description: 'You are highly skilled at pharmacy, better able than most to make pills, ointments, unguents, oils, creams, and more. You may reverse any failed Trade (Apothecary) test if this allows the Test to succeed.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.PILOT,
    name: 'Pilot',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Row or Sail Tests while navigating unsure waters',
      description: 'You are skilled at leading vessels through dangerous waters. If you fail a Test to pass through dangerous waters, you may reverse the result if it will score a success; however, if you do so, you may not score more than +1 SL as you catch the incoming danger at the last moment.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.PUBLIC_SPEAKER,
    name: 'Public Speaker',
    labels: {
      max: 'Fellowship Bonus',
      description: 'You are a skilled orator and know how to work large groups of people. Refer to the following table to see how many people you can now influence with your Charm Skill (see page 120) when Public Speaking.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.PURE_SOUL,
    name: 'Pure Soul',
    labels: {
      max: 'Willpower Bonus',
      description: 'Your soul is pure, quite resistant to the depredations of Chaos. You may gain extra Corruption points equal to your level of Pure Soul before having to Test to see if you become corrupt.',
    },
    system: {
      MAX_LEVEL_FN: getWillpowerBonus
    }
  },
  {
    id: TalentId.RAPID_RELOAD,
    name: 'Rapid Reload',
    labels: {
      max: 'Dexterity Bonus',
      description: 'You can reload ranged weapons with practiced ease. You add SL equal to your level in Rapid Reload to any Test to reload a ranged weapon.',
    },
    system: {
      MAX_LEVEL_FN: getDexterityBonus
    }
  },
  {
    id: TalentId.REACTION_STRIKE,
    name: 'Reaction Strike',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Initiative Tests concerning this Talent',
      description: 'Your fast reactions have allowed you to fell many opponents before they have even swung their blades. When you are Charged, you may attempt a Challenging (+0) Initiative Test to gain an immediate Free Attack outside the normal turn sequence. This attack is resolved with whatever weapon you are carrying in your primary hand. You may make as many Reaction Strikes in a Round as you have levels in this Talent, but can only attack each individual charger once each.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.READ_WRITE,
    name: 'Read/Write',
    labels: {
      max: '1',
      description: 'You are one of the rare literate individuals in the Old World. You are assumed to be able to read and write (if appropriate) all of the Languages you can speak.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.RELENTLESS,
    name: 'Relentless',
    labels: {
      max: 'Agility Bonus',
      description: 'When you have your mind set on a target, there is nothing anyone can do to stop you reaching them. If you use Advantage when Disengaging, you may keep a number of Advantage equal to your level of Relentless. Further, you may use Advantage to Disengage even if you have lower Advantage than your opponents.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.RESISTANCE,
    name: 'Resistance',
    grouped: true,
    labels: {
      placeholder: 'Threat',
      max: 'Toughness Bonus',
      tests: 'All those to resist the associated Threat',
      description: 'Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat, such as Magic, Poison, Disease, Mutation, every session. If SL is important, use your Toughness Bonus as SL for the Test.',
    },
    system: {
      MAX_LEVEL_FN: getToughnessBonus
    }
  },
  {
    id: TalentId.RESOLUTE,
    name: 'Resolute',
    labels: {
      max: 'Strength Bonus',
      description: 'You launch into attacks with grim determination. Add your level of Resolute to your Strength Bonus when you Charge.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.REVERSAL,
    name: 'Reversal',
    labels: {
      max: 'Weapon Skill Bonus',
      tests: 'Melee when defending',
      description: 'You are used to desperate combats, able to turn even the direst circumstances to your Advantage. If you win an Opposed Melee Test, instead of gaining +1 Advantage, you may take all your opponent’s Current Advantage. If you do this, you do not cause any Damage, even if it is your Turn in the Round.',
    },
    system: {
      MAX_LEVEL_FN: getWeaponSkillBonus
    }
  },
  {
    id: TalentId.RIPOSTE,
    name: 'Riposte',
    labels: {
      max: 'Agility Bonus',
      tests: 'Melee when defending',
      description: 'Conforming to ‘the best defence is offence’, you respond to an incoming attack with a lightning-fast counterstrike of your own. If your weapon has the Fast quality, you may cause Damage when you are attacked, just as if it was your Action. You can Riposte a number of attacks per round equal to your Riposte level.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.RIVER_GUIDE,
    name: 'River Guide',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Any Lore Test concerning river matters',
      description: 'You know all the tricks for navigating dangerous rivers. You don’t need to Test for passing through dangerous stretches of water until the Difficulty for doing so is –10 or lower — you automatically pass all Tests easier than this. Further, if you have the appropriate Lore (Local) Skill, you need never Test for navigating dangerous waters — you are assumed to know the route through.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.ROBUST,
    name: 'Robust',
    labels: {
      max: 'Toughness Bonus',
      description: 'You are as tough as old boots and just soak up damage. You reduce all incoming Damage by an extra +1 per time you have taken the Robust Talent, even if the Damage cannot normally be reduced, but still suffer a minimum of 1 Wound from any Damage source.',
    },
    system: {
      MAX_LEVEL_FN: getToughnessBonus
    }
  },
  {
    id: TalentId.ROUGHRIDER,
    name: 'Roughrider',
    labels: {
      max: 'Agility Bonus',
      tests: 'Ride (Horse) when in combat',
      description: 'You are at home in the saddle in even the most difficult of circumstances, and know how to get the best out of your mount during conflict. Assuming you have the Ride skill, you can direct your mount to take an Action, not just a Move, without a Ride test.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.ROVER,
    name: 'Rover',
    labels: {
      max: 'Agility Bonus',
      tests: 'Stealth Tests in a Rural environment',
      description: 'You are at home roaming the wild places. When using Stealth in a rural environment, bystanders do not get passive Perception Tests to detect you; they can only spot you if they are specifically on look-out, or watching for hidden spies.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.SAVANT,
    name: 'Savant',
    grouped: true,
    labels: {
      placeholder: 'Lore',
      max: 'Intelligence Bonus',
      tests: 'Lore (chosen Lore)',
      description: 'You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill. Testing, as always, will provide yet more information as normal as determined by the GM.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.SAVVY,
    name: 'Savvy',
    labels: {
      max: '1',
      description: 'You gain a permanent +5 bonus to your starting Intelligence Characteristic (this does not count towards your Advances).',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN,
      INC_CHARACTERISTIC_ID: CharacteristicId.INTELLIGENCE,
      INC_CHARACTERISTIC_VALUE: 5
    }
  },
  {
    id: TalentId.SCALE_SHEER_SURFACE,
    name: 'Scale Sheer Surface',
    labels: {
      max: 'Strength Bonus',
      tests: 'Climb',
      description: 'You are an exceptional climber. You can attempt to climb even seemingly impossible surfaces such as sheer fortifications, ice shelves, plastered walls, and similar, and you ignore any penalties to Climb Tests derived from the difficulty of the surface climbed.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.SCHEMER,
    name: 'Schemer',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Intelligence Tests concerning this Talent',
      description: 'You are a master of politics and see conspiracy around every corner. Once per session, you may ask the GM one question regarding a political situation or entangled web of social connections; the GM will perform a secret Intelligence Test and provide you some observations regarding the situation based upon your SL.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.SEA_LEGS,
    name: 'Sea Legs',
    labels: {
      max: 'Toughness Bonus',
      tests: 'All those taken to resist Sea Sickness',
      description: 'You are used to the rolling motion of the oceans, and are very unlikely to get sea sick, even in the worst storms. Under normal conditions at sea, you need never Test to see if you become Sea Sick. At other times (such as a storm, or a magically induced bout of Sea Sickness), you can ignore any penalties to Tests to avoid Sea Sickness.',
    },
    system: {
      MAX_LEVEL_FN: getToughnessBonus
    }
  },
  {
    id: TalentId.SEASONED_TRAVELLER,
    name: 'Seasoned Traveller',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Any Lore Test concerning local detail',
      description: 'You are an inquisitive soul who enjoys travelling far and wide, absorbing local customs and colour as you go. Given a month\'s exposure to any locality, you may count the associated Lore (Local) Skill as a Basic Skill with a successful Intelligence Test (which can be attempted once per month). In addition, you gain a +10 bonus lo any Fellowship related Tests with someone from a locality you have gained knowledge of using this Talent, or for which you have advances in the appropriate Lore (Local) Skill.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.SECOND_SIGHT,
    name: 'Second Sight',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Any Test to detect the Winds of Magic',
      description: 'You can perceive the shifting Winds of Magic that course from the Chaos Gates at the poles of the world. You now have the Sight (see page 233).',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.SECRET_IDENTITY,
    name: 'Secret Identity',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Entertain (Acting) Tests to support your secret identities',
      description: 'You maintain a secret identity that allows you to appear richer, or perhaps poorer, than you actually are. With GM permission, choose any one Career. As long as you are dressed appropriately, you may use the Social Status of the chosen Career you masquerade as rather than your own for modifying Fellowship Tests, and can even ignore the Criminal Talent. However, maintaining this identity will require Entertain (Acting) rolls when you encounter those who may recognise your falsehood. You may create a new Secret Identity for each level you have in this Talent.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.SHADOW,
    name: 'Shadow',
    labels: {
      max: 'Agility Bonus',
      tests: 'Any Test involving Shadowing',
      description: 'You are skilled at following people without being spotted. You may use the Shadowing rules on page 130 without doing a Combined Test. Instead you test against just your Perception or your Stealth Skill, whichever is higher.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.SHARP,
    name: 'Sharp',
    labels: {
      max: '1',
      description: 'You gain a permanent +5 bonus to your starting Initiative Characteristic (this does not count towards your Advances).',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN,
      INC_CHARACTERISTIC_ID: CharacteristicId.INITIATIVE,
      INC_CHARACTERISTIC_VALUE: 5
    }
  },
  {
    id: TalentId.SHARPSHOOTER,
    name: 'Sharpshooter',
    labels: {
      max: '1',
      description: 'You can make aimed shots of exceptional accuracy. You ignore any negative Difficulty modifiers to Ranged Tests due to the size of your target.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.SHIELDSMAN,
    name: 'Shieldsman',
    labels: {
      max: 'Strength Bonus',
      tests: 'Any Test to defend with a shield',
      description: 'You are skilled at using your shield to manoeuvre others in combat so you can take advantage of a desperate situation. When using a Shield to defend, you gain Advantage equal to the number of levels you have in Shieldsman if you lose the Opposed Test.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.SIXTH_SENSE,
    name: 'Sixth Sense',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Intuition Tests involving your Sixth Sense',
      description: 'You get a strange feeling when you are threatened, and can react accordingly. The GM may warn you if you are walking into danger; this will normally come after a secret Intuition Test on your behalf. Further, you may ignore Surprise if you pass an Intuition Test.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.SLAYER,
    name: 'Slayer',
    labels: {
      max: '1',
      description: 'When determining Damage use your opponent’s Toughness Bonus as your Strength Bonus if it is higher; always determine this before any other rules modify your Strength or Strength Bonus. Further, if your target is larger than you, and your score a Critical (see page 159), multiply all melee Damage you cause by the number of steps larger your target is (so, 2 steps = ×2, 3 steps = ×3, and so on); this multiplication is calculated after all modifiers are applied. See page 341 for more about Size.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.SMALL,
    name: 'Small',
    labels: {
      max: '1',
      description: 'You are much shorter than most folk in the Old World. The full rules for different Sizes are found in Chapter 12: Bestiary on page 341.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.SNIPER,
    name: 'Sniper',
    labels: {
      max: '4',
      tests: 'Ranged (Long–Extreme Range)',
      description: 'Distance is of no import to your shooting skills, and you are just as adept at picking off far away targets as those nearby. You suffer no penalties for shooting at Long range, and half the penalties for Extreme range.',
    },
    system: {
      MAX_LEVEL_FN: () => 4
    }
  },
  {
    id: TalentId.SPEEDREADER,
    name: 'Speedreader',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Research and Language Tests where speed of reading is important',
      description: 'You read books at a voracious pace. You may reverse a failed Research Test if this will grant success. If the speed at which you read is important during combat, a successful Language Test lets you read and fully comprehend a number of pages per Round equal to your SL plus Speedreader level (minimum of 1, even if you fail the Test).',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.SPRINTER,
    name: 'Sprinter',
    labels: {
      max: 'Strength Bonus',
      tests: 'Athletics Tests concerning Running',
      description: 'You are a swift runner. Your Movement Attribute counts as 1 higher when Running.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.STEP_ASIDE,
    name: 'Step Aside',
    labels: {
      max: 'Agility Bonus',
      tests: 'Dodge Tests to activate this Talent',
      description: 'You are skilled at being where enemy weapons are not. If you use Dodge to defend against an incoming attack and win the Opposed Test, you may move up to 2 yards as you dive away, and no longer count as Engaged. None of your opponents will gain a Free Attack when you do this.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.STONE_SOUP,
    name: 'Stone Soup',
    labels: {
      max: 'Toughness Bonus',
      tests: 'Endurance Tests to resist hunger',
      description: 'You are used to getting by with less, and know how to survive lean times. You can subsist on half the amount of food required without any negative penalties (bar feeling really hungry), and need only test for Starvation every 3 days, not 2 (see page 181).',
    },
    system: {
      MAX_LEVEL_FN: getToughnessBonus
    }
  },
  {
    id: TalentId.STOUT_HEARTED,
    name: 'Stout-hearted',
    labels: {
      max: 'Willpower Bonus',
      tests: 'Cool Tests to remove Broken Conditions',
      description: 'No matter how bad things get, you always seem to come back for more. You may attempt a Cool Test to remove a Broken Condition at the end of each of your Turns as well as at the end of the Round (see page 168 for more on this).',
    },
    system: {
      MAX_LEVEL_FN: getWillpowerBonus
    }
  },
  {
    id: TalentId.STRIDER,
    name: 'Strider',
    grouped: true,
    labels: {
      placeholder: 'Terrain',
      max: 'Agility Bonus',
      tests: 'Athletics Tests to traverse the Terrain',
      description: 'You are experienced in traversing difficult ground. You ignore all movement penalties when crossing over or through a specified terrain. Typical specialities include: Coastal, Deserts, Marshes, Rocky, Tundra, Woodlands.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.STRIKE_MIGHTY_BLOW,
    name: 'Strike Mighty Blow',
    labels: {
      max: 'Strength Bonus',
      description: 'You know how to hit hard! You deal your level of Strike Mighty Blow in extra Damage with melee weapons.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.STRIKE_TO_INJURE,
    name: 'Strike to Injure',
    labels: {
      max: 'Initiative Bonus',
      description: 'You are an expert at striking your enemies most vulnerable areas. You inflict your level of Strike to Injure in additional Wounds when you cause a Critical Wound.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.STRIKE_TO_STUN,
    name: 'Strike to Stun',
    labels: {
      max: 'Weapon Skill Bonus',
      tests: 'Melee Tests when Striking to Stun',
      description: 'You know where to hit an opponent to bring him down fast. You ignore the ‘Called Shot’ penalty to strike the Head Hit Location when using a melee weapon with the Pummel Quality (see page 298). Further, you count all improvised weapons as having the Pummel Quality.',
    },
    system: {
      MAX_LEVEL_FN: getWeaponSkillBonus
    }
  },
  {
    id: TalentId.STRONG_BACK,
    name: 'Strong Back',
    labels: {
      max: 'Strength Bonus',
      tests: 'Row and Swim',
      description: 'You have a strong back that is used to hard work. You may add your levels in Strong Back to your SL in any Opposed Strength Tests, and can carry additional Encumbrance points of trappings (see page 293) equal to your level of Strong Back.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.STRONG_LEGS,
    name: 'Strong Legs',
    labels: {
      max: 'Strength Bonus',
      description: 'You have strong legs able to carry you great distances when you jump. Add your Strong Legs level to your SL in any Athletics Tests involving Leaping (see page 166).',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.STRONG_MINDED,
    name: 'Strong-minded',
    labels: {
      max: 'Willpower Bonus',
      description: 'You are the epitome of determination and resolve. Add your level in Strong Minded to your maximum Resolve pool.',
    },
    system: {
      MAX_LEVEL_FN: getWillpowerBonus
    }
  },
  {
    id: TalentId.STRONG_SWIMMER,
    name: 'Strong Swimmer',
    labels: {
      max: 'Strength Bonus',
      tests: 'Swim',
      description: 'You are an especially strong swimmer and used to holding your breath for a long time underwater. Gain a bonus of your level in Strong Swimmer to your Toughness Bonus for the purposes of holding your breath.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.STURDY,
    name: 'Sturdy',
    labels: {
      max: 'Strength Bonus',
      tests: ' Strength Tests when lifting',
      description: 'You have a brawny physique, or are very used to carrying things. Increase the number of Encumbrance Points you can carry by your Sturdy level x 2.',
    },
    system: {
      MAX_LEVEL_FN: getStrengthBonus
    }
  },
  {
    id: TalentId.SUAVE,
    name: 'Suave',
    labels: {
      max: '1',
      description: 'You gain a permanent +5 bonus to your starting Fellowship Characteristic (this does not count towards your Advances).',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN,
      INC_CHARACTERISTIC_ID: CharacteristicId.FELLOWSHIP,
      INC_CHARACTERISTIC_VALUE: 5
    }
  },
  {
    id: TalentId.SUPER_NUMERATE,
    name: 'Super Numerate',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Evaluate, Gamble',
      description: 'You have a gift for calculation and can work out the solution to most mathematical problems with ease. You may use a simple calculator to represent what your PC is capable of mentally computing.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.SUPPORTIVE,
    name: 'Supportive',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Social Tests to influence a superior',
      description: 'You know what to say and when to make the most impact upon your superiors. When you successfully use a social Skill to influence those with a higher Status tier, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 46 could be used for +6 SL.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.SURE_SHOT,
    name: 'Sure Shot',
    labels: {
      max: 'Initiative Bonus',
      description: 'You know how to find the weak spots in a target’s armour. When you hit a target with a Ranged weapon, you may ignore Armour Points equal to your Sure Shot level.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.SURGERY,
    name: 'Surgery',
    labels: {
      max: 'Intelligence Bonus',
      tests: 'Heal Tests outside combat rounds; i.e. when you have time to do it ‘properly’',
      description: 'You are a surgeon, able to open and close the flesh in order to heal others. You can treat any Critical Wound marked as needing Surgery. You can also perform surgery to resolve internal issues with an Extended Challenging (+0) Heal Test with a target SL determined by the GM (usually 5–10) depending upon the difficulty of the procedure at hand. This will cause 1d10 Wounds and 1 Bleeding Condition per Test, meaning surgery has a high chance of killing a patient if the surgeon is not careful. After surgery, the patient must pass an Average (+20) Endurance Test or gain a Minor Infection (see page 187).',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.TENACIOUS,
    name: 'Tenacious',
    labels: {
      max: 'Toughness Bonus',
      tests: 'Endurance Tests for enduring hardships',
      description: 'You never give up, no matter how impossible your travails appear. You can double the length of time successful Endurance Tests allow you to endure a hardship. This includes enduring prolonged riding, exposure, rituals, and similar adversities.',
    },
    system: {
      MAX_LEVEL_FN: getToughnessBonus
    }
  },
  {
    id: TalentId.TINKER,
    name: 'Tinker',
    labels: {
      max: 'Dexterity Bonus',
      tests: 'Trade Tests to repair broken items',
      description: 'You are somewhat of a Johann-of-all-trades, able to repair almost anything. You count all non-magical Trade Skills as Basic when repairing broken items.',
    },
    system: {
      MAX_LEVEL_FN: getDexterityBonus
    }
  },
  {
    id: TalentId.TOWER_OF_MEMORIES,
    name: 'Tower of Memories',
    labels: {
      max: 'Intelligence Bonus',
      description: 'A recollection technique first instigated by the Cult of Verena, reputedly from Elven practices taught by the Loremasters of Hoeth, Tower of Memories allows you to perfectly recall a sequence of facts by storing them in an imaginary spire. You can recall a sequence as long as your Intelligence without having to make a Test. For every 10 more items you attempt to memorise, you must make an increasingly difficult Intelligence Test to recall the list correctly, starting at Very Easy (+60) for +10, Easy (+40) for +20, Average (+20) for +30, and so on. Beyond it’s obvious utility for Gamble Tests, where having this Talent adds a bonus of +20 to +60 depending upon how useful recalling sequences is to the game at hand, the GM can apply bonuses to other Tests as appropriate. Each time you take this Talent you may recall an extra sequence without having to forget a previously stored one.',
    },
    system: {
      MAX_LEVEL_FN: getIntelligenceBonus
    }
  },
  {
    id: TalentId.TRAPPER,
    name: 'Trapper',
    labels: {
      max: 'Initiative Bonus',
      tests: 'Perception Tests to spot traps, Set Trap',
      description: 'You are skilled at spotting and using traps. You may take a Perception Test to spot traps automatically without having to tell the GM of your intention; the GM may prefer to make some of these Tests on your behalf in private.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.TRICK_RIDING,
    name: 'Trick Riding',
    labels: {
      max: 'Agility Bonus',
      tests: 'Dodge Tests on Horseback, Ride (Horse)',
      description: 'You are capable of amazing feats of agility on horseback. You can use any of your Performer Skills and unmodified Dodge skill when on horseback. Further, when mounted, you can make your Move at the start of the Round instead of on your Turn.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.TUNNEL_RAT,
    name: 'Tunnel Rat',
    labels: {
      max: 'Agility Bonus',
      tests: 'Stealth Tests when underground',
      description: 'You are at home in tunnels, sewers, and other underground environments.When using Stealth in an underground environment, bystanders do not get passive Perception Tests to detect you; they can only spot you if they are specifically on look-out, or watching for hidden others.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.UNSHAKABLE,
    name: 'Unshakable',
    labels: {
      max: 'Willpower Bonus',
      tests: 'Cool Tests to resist Blackpowder panic',
      description: 'You are a jaded veteran who has survived more than one hail of shots from Blackpowder weapons. You need only take a Cool Test to resist a Broken Condition if you are successfully wounded by a Blackpowder weapon, not just if you are shot at.',
    },
    system: {
      MAX_LEVEL_FN: getWillpowerBonus
    }
  },
  {
    id: TalentId.VERY_RESILIENT,
    name: 'Very Resilient',
    labels: {
      max: '1',
      description: 'You gain a permanent +5 bonus to your starting Toughness Characteristic (this does not count towards your Advances).',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN,
      INC_CHARACTERISTIC_ID: CharacteristicId.TOUGHNESS,
      INC_CHARACTERISTIC_VALUE: 5
    }
  },
  {
    id: TalentId.VERY_STRONG,
    name: 'Very Strong',
    labels: {
      max: '1',
      description: 'You gain a permanent +5 bonus to your starting Strength Characteristic (this does not count towards your Advances).',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN,
      INC_CHARACTERISTIC_ID: CharacteristicId.STRENGTH,
      INC_CHARACTERISTIC_VALUE: 5
    }
  },
  {
    id: TalentId.WAR_LEADER,
    name: 'War Leader',
    labels: {
      max: 'Fellowship Bonus',
      tests: 'Leadership Tests during War',
      description: 'Your stern gaze and inspiring words motivate your soldiers to fight on to the end. All subordinates able to see you may add your level in War Leader to their SL in one Willpower Test per Round. This bonus does not stack.',
    },
    system: {
      MAX_LEVEL_FN: getFellowshipBonus
    }
  },
  {
    id: TalentId.WAR_WIZARD,
    name: 'War Wizard',
    labels: {
      max: '1',
      description: 'You are trained to cast magic while in the thick of combat. On your Turn, you may cast one Spell with a Casting Number of 5 or less for free without using your Action. However, if you do this, you may not cast another spell this Turn.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN
    }
  },
  {
    id: TalentId.WARRIOR_BORN,
    name: 'Warrior Born',
    labels: {
      max: '1',
      description: 'You gain a permanent +5 bonus to your starting Weapon Skill Characteristic (doesn’t count as Advances).',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_1_FN,
      INC_CHARACTERISTIC_ID: CharacteristicId.WEAPON_SKILL,
      INC_CHARACTERISTIC_VALUE: 5
    }
  },
  {
    id: TalentId.WATERMAN,
    name: 'Waterman',
    labels: {
      max: 'Agility Bonus',
      tests: 'Sail Tests for river-going vessels',
      description: 'You are an experienced freshwater sailor and are well-versed with river vessels. You can ignore all negatives to your Tests when onboard a barge derived from rolling waters, swaying vessels, unsure footing, and similar. Further, you count as two boatmen towards the minimum number of crew to pilot a river vessel.',
    },
    system: {
      MAX_LEVEL_FN: getAgilityBonus
    }
  },
  {
    id: TalentId.WEALTHY,
    name: 'Wealthy',
    labels: {
      max: 'None',
      description: 'You are fabulously wealthy, and are rarely ever short of coin. When Earning (including Income Endeavours) you secure +1 GC per time you have this Talent.',
    },
    system: {
      MAX_LEVEL_FN: MAX_LEVEL_NONE_FN
    }
  },
  {
    id: TalentId.WELL_PREPARED,
    name: 'Well-prepared',
    labels: {
      max: 'Initiative Bonus',
      description: 'You are used to anticipating the needs of others, and yourself. A number of times per session equal to your level of Well-Prepared, you may pull the trapping required for the current situation from your backpack (or similar) as long as it is Encumbrance 0, could feasibly been bought recently, and doesn’t stretch credibility too far. This could be anything from a flask of spirits to fortify a wounded comrade to a pfennig-whistle needed by a passing entertainer. Whenever you do this, you must deduct the cost for the prepared item from your purse, representing the coin you spent earlier.',
    },
    system: {
      MAX_LEVEL_FN: getInitiativeBonus
    }
  },
  {
    id: TalentId.WITCH,
    name: 'Witch!',
    labels: {
      max: 'Willpower Bonus',
      description: 'You have learned magic through trial and error. Add Language (Magick) to any Career you enter; if it is already in your Career, you may purchase the Skill for 5 XP fewer per Advance. Further, you may spend 1 Resilience point to immediately cast any spell as if it were one of your Arcane Lore spells; you also instantly memorise that spell as one of your Arcane Lore spells for 0 XP. You can do this a number of times equal to your level in this Talent.',
    },
    system: {
      MAX_LEVEL_FN: getWillpowerBonus
    }
  },
  // {
  //   id: TalentId.AAA,
  //   name: '',
  //   labels: {
  //     max: '',
  //     tests: '',
  //     description: '',
  //   },
  //   system: {
  //     MAX_LEVEL_FN: null
  //   }
  // },
  // {
  //   id: TalentId.AAA,
  //   name: '',
  //   labels: {
  //     max: '',
  //     tests: '',
  //     description: '',
  //   },
  //   system: {
  //     MAX_LEVEL_FN: null
  //   }
  // },
  // {
  //   id: TalentId.AAA,
  //   name: '',
  //   labels: {
  //     max: '',
  //     tests: '',
  //     description: '',
  //   },
  //   system: {
  //     MAX_LEVEL_FN: null
  //   }
  // },
];
