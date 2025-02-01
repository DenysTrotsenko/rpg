import { CharacteristicId, SkillId } from '@wfrp-4e/models/enums';
import { Skill } from '@wfrp-4e/models/common';

export const SKILLS: Skill[] = [
  {
    id: SkillId.ANIMAL_CARE,
    name: 'Animal Care',
    characteristic: CharacteristicId.INTELLIGENCE,
    advanced: true
  },
  {
    id: SkillId.ANIMAL_TRAINING,
    name: 'Animal Training',
    characteristic: CharacteristicId.INTELLIGENCE,
    advanced: true,
    grouped: true,
    specialisations: ['Demigryph', 'Dog', 'Horse', 'Pegasus', 'Pigeon']
  },
  {
    id: SkillId.ART,
    name: 'Art',
    characteristic: CharacteristicId.DEXTERITY,
    grouped: true,
    specialisations: ['Cartography', 'Engraving', 'Mosaics', 'Painting', 'Sculpture', 'Tattoo', 'Weaving']
  },
  {
    id: SkillId.ATHLETICS,
    name: 'Athletics',
    characteristic: CharacteristicId.AGILITY,
  },
  {
    id: SkillId.BRIBERY,
    name: 'Bribery',
    characteristic: CharacteristicId.FELLOWSHIP,
  },
  {
    id: SkillId.CHANNELLING,
    name: 'Channelling',
    characteristic: CharacteristicId.WILLPOWER,
    advanced: true,
    grouped: true,
    specialisations: ['Aqshy', 'Azyr', 'Chamon', 'Dhar', 'Ghur', 'Ghyran', 'Hysh', 'Shyish', 'Ulgu']
  },
  {
    id: SkillId.CHARM,
    name: 'Charm',
    characteristic: CharacteristicId.FELLOWSHIP,
  },
  {
    id: SkillId.CHARM_ANIMAL,
    name: 'Charm Animal',
    characteristic: CharacteristicId.WILLPOWER,
  },
  {
    id: SkillId.CLIMB,
    name: 'Climb',
    characteristic: CharacteristicId.STRENGTH,
  },
  {
    id: SkillId.CONSUME_ALCOHOL,
    name: 'Consume Alcohol',
    characteristic: CharacteristicId.TOUGHNESS,
  },
  {
    id: SkillId.COOL,
    name: 'Cool',
    characteristic: CharacteristicId.WILLPOWER,
  },
  {
    id: SkillId.DODGE,
    name: 'Dodge',
    characteristic: CharacteristicId.AGILITY,
  },
  {
    id: SkillId.DRIVE,
    name: 'Drive',
    characteristic: CharacteristicId.AGILITY,
  },
  {
    id: SkillId.ENDURANCE,
    name: 'Endurance',
    characteristic: CharacteristicId.TOUGHNESS,
  },
  {
    id: SkillId.ENTERTAIN,
    name: 'Entertain',
    characteristic: CharacteristicId.FELLOWSHIP,
    grouped: true,
    specialisations: ['Acting', 'Comedy', 'Singing', 'Storytelling']
  },
  {
    id: SkillId.EVALUATE,
    name: 'Evaluate',
    characteristic: CharacteristicId.INTELLIGENCE,
    advanced: true,
  },
  {
    id: SkillId.GAMBLE,
    name: 'Gamble',
    characteristic: CharacteristicId.INTELLIGENCE,
  },
  {
    id: SkillId.GOSSIP,
    name: 'Gossip',
    characteristic: CharacteristicId.FELLOWSHIP,
  },
  {
    id: SkillId.HAGGLE,
    name: 'Haggle',
    characteristic: CharacteristicId.FELLOWSHIP,
  },
  {
    id: SkillId.HEAL,
    name: 'Heal',
    characteristic: CharacteristicId.INTELLIGENCE,
    advanced: true
  },
  {
    id: SkillId.INTIMIDATE,
    name: 'Intimidate',
    characteristic: CharacteristicId.STRENGTH,
  },
  {
    id: SkillId.INTUITION,
    name: 'Intuition',
    characteristic: CharacteristicId.INITIATIVE,
  },
  {
    id: SkillId.LANGUAGE,
    name: 'Language',
    characteristic: CharacteristicId.INTELLIGENCE,
    advanced: true,
    grouped: true,
    specialisations: ['Battle Tongue', 'Bretonnian', 'Classical', 'Elthárin', 'Estalian', 'Gospodarinyi', 'Guilder', 'Khazalid', 'Magick', 'Norse', 'Thief', 'Tilean', 'Wastelander']
  },
  {
    id: SkillId.LEADERSHIP,
    name: 'Leadership',
    characteristic: CharacteristicId.FELLOWSHIP,
  },
  {
    id: SkillId.LORE,
    name: 'Lore',
    characteristic: CharacteristicId.INTELLIGENCE,
    advanced: true,
    grouped: true,
    specialisations: ['Engineering', 'Geology', 'Heraldry', 'Herbs', 'History', 'Law', 'Magick', 'Metallurgy', 'Science', 'Theology']
  },
  {
    id: SkillId.MELEE,
    name: 'Melee',
    characteristic: CharacteristicId.WEAPON_SKILL,
    grouped: true,
    specialisations: ['Basic', 'Brawling', 'Cavalry', 'Fencing', 'Flail', 'Parry', 'Polearm', 'Two-Handed']
  },
  {
    id: SkillId.NAVIGATION,
    name: 'Navigation',
    characteristic: CharacteristicId.INITIATIVE,
  },
  {
    id: SkillId.OUTDOOR_SURVIVAL,
    name: 'Outdoor Survival',
    characteristic: CharacteristicId.INTELLIGENCE,
  },
  {
    id: SkillId.PERCEPTION,
    name: 'Perception',
    characteristic: CharacteristicId.INITIATIVE,
  },
  {
    id: SkillId.PERFORM,
    name: 'Perform',
    characteristic: CharacteristicId.AGILITY,
    advanced: true,
    grouped: true,
    specialisations: ['Acrobatics', 'Clowning', 'Dancing', 'Firebreathing', 'Juggling', 'Miming', 'Rope Walking']
  },
  {
    id: SkillId.PICK_LOCK,
    name: 'Pick Lock',
    characteristic: CharacteristicId.DEXTERITY,
    advanced: true,
  },
  {
    id: SkillId.PLAY,
    name: 'Play',
    characteristic: CharacteristicId.DEXTERITY,
    advanced: true,
    grouped: true,
    specialisations: ['Bagpipe', 'Lute', 'Harpsichord', 'Horn', 'Violin']
  },
  {
    id: SkillId.PRAY,
    name: 'Pray',
    characteristic: CharacteristicId.FELLOWSHIP,
    advanced: true,
  },
  {
    id: SkillId.RANGED,
    name: 'Ranged',
    characteristic: CharacteristicId.BALLISTIC_SKILL,
    advanced: true,
    grouped: true,
    specialisations: ['Blackpowder', 'Bow', 'Crossbow', 'Engineering', 'Entangling', 'Explosives', 'Sling', 'Throwing']
  },
  {
    id: SkillId.RESEARCH,
    name: 'Research',
    characteristic: CharacteristicId.INTELLIGENCE,
    advanced: true,
  },
  {
    id: SkillId.RIDE,
    name: 'Ride',
    characteristic: CharacteristicId.AGILITY,
    grouped: true,
    specialisations: ['Demigryph', 'Great Wolf', 'Griffon', 'Horse', 'Pegasus']
  },
  {
    id: SkillId.ROW,
    name: 'Row',
    characteristic: CharacteristicId.STRENGTH,
  },
  {
    id: SkillId.SAIL,
    name: 'Sail',
    characteristic: CharacteristicId.AGILITY,
    advanced: true,
    grouped: true,
    specialisations: ['Barge', 'Caravel', 'Cog', 'Frigate', 'Wolfship']
  },
  {
    id: SkillId.SECRET_SIGNS,
    name: 'Secret Signs',
    characteristic: CharacteristicId.INTELLIGENCE,
    advanced: true,
    grouped: true,
    specialisations: ['Grey Order', 'Guild (any one)', 'Ranger', 'Scout', 'Thief', 'Vagabond']
  },
  {
    id: SkillId.SET_TRAP,
    name: 'Set Trap',
    characteristic: CharacteristicId.DEXTERITY,
    advanced: true,
  },
  {
    id: SkillId.SLEIGHT_OF_HAND,
    name: 'Sleight of Hand',
    characteristic: CharacteristicId.DEXTERITY,
    advanced: true,
  },
  {
    id: SkillId.STEALTH,
    name: 'Stealth',
    characteristic: CharacteristicId.AGILITY,
    grouped: true,
    specialisations: ['Rural', 'Underground', 'Urban']
  },
  {
    id: SkillId.SWIM,
    name: 'Swim',
    characteristic: CharacteristicId.STRENGTH,
    advanced: true
  },
  {
    id: SkillId.TRACK,
    name: 'Track',
    characteristic: CharacteristicId.INITIATIVE,
    advanced: true,
  },
  {
    id: SkillId.TRADE,
    name: 'Trade',
    characteristic: CharacteristicId.DEXTERITY,
    advanced: true,
    grouped: true,
    specialisations: ['Apothecary', 'Calligrapher', 'Chandler', 'Carpenter', 'Cook', 'Embalmer', 'Smith', 'Tanner']
  },
];
