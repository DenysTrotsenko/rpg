import { Characteristic } from '../models/common';

export const CHARACTERISTICS: Characteristic[] = [
  {
    id: 'chr_ws',
    name: 'Weapon Skill',
    labels: {
      abbreviation: 'WS',
      description: 'Weapon Skill measures your competence in all forms of close-quarters combat. Characters with high Weapon Skill are excellent warriors, renowned with a chainsword or even their bare hands. Weapon Skill is used when making a melee attack and defending in melee combat.'
    }
  },
  {
    id: 'chr_bs',
    name: 'Ballistic Skill',
    labels: {
      abbreviation: 'BS',
      description: 'Ballistic Skill measures your accuracy with all forms of ranged weapons. A high Ballistic Skill indicates a character is an excellent sharpshooter, someone to be rightly feared in any fire-fight or shootout. Ballistic Skill is used when making a ranged attack.'
    }
  },
  {
    id: 'chr_str',
    name: 'Strength',
    labels: {
      abbreviation: 'STR',
      description: 'Strength measures your muscle and physical power. Characters with high Strength can lift heavy objects, climb sheer surfaces with ease, and deal more damage with melee weapons.'
    }
  },
  {
    id: 'chr_tgh',
    name: 'Toughness',
    labels: {
      abbreviation: 'TGH',
      description: 'Toughness measures your health, stamina, and resistance. Exceptionally tough characters are hard to kill, can withstand poisons and toxins, and survive in the galaxy’s harshest environments.'
    }
  },
  {
    id: 'chr_ag',
    name: 'Agility',
    labels: {
      abbreviation: 'AG',
      description: 'This measures your physical coordination, reflexes, and overall body awareness. High Agility allows a character to move silently, act first in dangerous situations, and dodge incoming attacks.'
    }
  },
  {
    id: 'chr_int',
    name: 'Intelligence',
    labels: {
      abbreviation: 'INT',
      description: 'Intelligence is your acumen, reason, and general knowledge. A character with a high Intelligence can recall huge volumes of data, correlate esoteric clues, or determine if an ancient archaeotech relic is genuine or not.'
    }
  },
  {
    id: 'chr_per',
    name: 'Perception',
    labels: {
      abbreviation: 'PER',
      description: 'This measures your awareness and the acuteness of your senses. A character with high Perception can pick out a stray bolter shell casing left amidst an underhive morass, tell when someone is being deceitful, or be the first to spot danger.'
    }
  },
  {
    id: 'chr_wil',
    name: 'Willpower',
    labels: {
      abbreviation: 'WIL',
      description: 'Willpower measures a character’s mental strength and resolve. High Willpower allows a character to overcome fear, and is called upon when wielding and resisting psychic powers.'
    }
  },
  {
    id: 'chr_fel',
    name: 'Fellowship',
    labels: {
      abbreviation: 'FEL',
      description: 'Fellowship measures your persuasiveness, ability to lead, and force of personality. Having a good Fellowship makes for a character who can ingratiate themself into a gathering of suspicious forge menials, make skilled trades with wily vendors, or cow others into obedience.'
    }
  }
];
