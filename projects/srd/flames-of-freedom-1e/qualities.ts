import {Quality} from './models';
import {QualityId} from './enums';

export const QUALITIES: Quality[] = [
  {
    id: QualityId.ACCURATE,
    name: 'Accurate',
    labels: {
      effect: 'This weapon ignores Difficulty Rating penalties associated with Long and Extreme Distances.'
    }
  },
  {
    id: QualityId.ACID,
    name: 'Acid',
    labels: {
      effect: 'When dealing Damage, reference [PB] instead of [CB]. After you deal Damage, the foe does not suffer standard Injuries. Roll Chaos Dice as you normally would, but if any land on face ‘6,’ they cannot restore their Damage or Peril Condition Tracks until using Alkali as a part of the healing practice. If you miss hitting a foe, roll 1D6 Chaos Die. On face ‘1–5,’ it bounces harmlessly elsewhere. On face ‘6,’ it bounces back to hit you.'
    }
  },
  {
    id: QualityId.BACKSLASH,
    name: 'Backslash',
    labels: {
      effect: 'When attacking with this weapon, you gain an Assist Die.'
    }
  },
  {
    id: QualityId.BLACKPOWDER,
    name: 'Blackpowder',
    labels: {
      effect: 'With this weapon, your Fury Dice explode to deal additional Damage on a face ‘1’ or face ‘6.’ You cannot attack with a Blackpowder weapon while Engaged unless it has the Pistol Quality, nor can you Load this weapon while mounted, unless it has the Carbine Quality. Finally, if you roll a Critical Failure with this weapon, reference both the Critical Failure effect of the Action In Combat you’re using and the Misfire table in Article 7: Combat Encounters.'
    }
  },
  {
    id: QualityId.BOMB,
    name: 'Bomb',
    labels: {
      effect: 'This weapon’s Damage and other effects impact multiple combatants in a Burst Template. If you miss hitting a foe, roll 1D6 Chaos Die. On face ‘1–5,’ it bounces harmlessly elsewhere. On face ‘6,’ it bounces back to hit you.'
    }
  },
  {
    id: QualityId.BREAK,
    name: 'Break',
    labels: {
      effect: 'After dealing Damage, this weapon is destroyed.'
    }
  },
  {
    id: QualityId.CARBINE,
    name: 'Carbine',
    labels: {
      effect: 'You can Load this weapon while mounted. This weapon’s Fury Dice does not explode to deal additional Damage at Long Distances, unless it has the Accurate Quality.'
    }
  },
  {
    id: QualityId.COLD_IRON,
    name: 'Cold Iron',
    labels: {
      effect: 'This weapon is considered to be magic. When you deal Damage against Abyssal foes, they suffer an equal amount of Peril. Critically Failing to hit with this weapon destroys the weapon.'
    }
  },
  {
    id: QualityId.CUMBERSOME,
    name: 'Cumbersome',
    labels: {
      effect: 'While carrying this weapon, you cannot Charge, Maneuver or Run.'
    }
  },
  {
    id: QualityId.DEFENSIVE,
    name: 'Defensive',
    labels: {
      effect: 'When using this weapon to Defend against melee weapons, add +10% Base Chance.'
    }
  },
  {
    id: QualityId.DEVASTATING,
    name: 'Devastating',
    labels: {
      effect: 'When you inflict Injuries with this weapon, they are always treated as Grievous Injuries.'
    }
  },
  {
    id: QualityId.FAST,
    name: 'Fast',
    labels: {
      effect: 'Foes suffer a -10% Base Chance to Defend against attacks you make with this weapon. When dealing Damage, reference [AB] instead of [CB].'
    }
  },
  {
    id: QualityId.HOLY,
    name: 'Holy',
    labels: {
      effect: 'This weapon is considered to be magic. It deals 2D10+2 Damage to threats classified as Abyssal or Supernatural. Exceptions may be made by the Historian. It is otherwise treated as a magical improvised weapon.'
    }
  },
  {
    id: QualityId.IMMOLATE,
    name: 'Immolate',
    labels: {
      effect: 'After you deal Damage with this weapon, it is extinguished but the foe does not suffer standard Injuries. Roll Chaos Dice as you normally would, but if any land on face ‘6,’ they are On Fire instead (see Article 8: Healing, Hazards & Horror).'
    }
  },
  {
    id: QualityId.INACCURATE,
    name: 'Inaccurate',
    labels: {
      effect: 'This weapon cannot take advantage of Long or Extreme Distances.'
    }
  },
  {
    id: QualityId.INFERIOR,
    name: 'Inferior',
    labels: {
      effect: 'When attacking with this weapon, you suffer a -5% Base Chance to hit.'
    }
  },
  {
    id: QualityId.PISTOL,
    name: 'Pistol',
    labels: {
      effect: 'You can make a Counterattack using this weapon, and can make Attack Actions with it while Engaged. In addition, this weapon’s Fury Dice do not explode to deal additional Damage at Medium & Long Distances unless it has the Accurate Quality.'
    }
  },
  {
    id: QualityId.PNEUMATIC,
    name: 'Pneumatic',
    labels: {
      effect: 'Whenever you Critically Fail to hit with this weapon, you must reload it outside of combat with a gunsmith’s air pump.'
    }
  },
  {
    id: QualityId.POWERFUL,
    name: 'Powerful',
    labels: {
      effect: 'After you deal Damage, at your option, automatically shove a foe away from you 1 yard. Their movement does not provoke Counterattacks.'
    }
  },
  {
    id: QualityId.PUMMELING,
    name: 'Pummeling',
    labels: {
      effect: 'This weapon can only inflict Moderate Injuries, and never causes a foe to Bleed. When dealing Damage, reference [BB] instead of [CB].'
    }
  },
  {
    id: QualityId.PUNISHING,
    name: 'Punishing',
    labels: {
      effect: 'When dealing Damage with this weapon, optionally spend 1 AP to roll an additional 1D6 Fury Die.'
    }
  },
  {
    id: QualityId.REACH,
    name: 'Reach',
    labels: {
      effect: 'When a foe Charges or Runs to Engage or disengage with you, make a Counterattack with this weapon.'
    }
  },
  {
    id: QualityId.REPEATING,
    name: 'Repeating',
    labels: {
      effect: 'This weapon can be fired a number of times equal to the value in parenthesis (e.g., 3) before needing to be Loaded again. Spend 2 AP to Load one ammunition.'
    }
  },
  {
    id: QualityId.RUINED,
    name: 'Ruined',
    labels: {
      effect: 'This weapon suffers -3 to Total Damage until repaired. Repair costs 25% of retail value. If this weapon is already Ruined and is once again Ruined, it is destroyed instead.'
    }
  },
  {
    id: QualityId.SKEWERING,
    name: 'Skewering',
    labels: {
      effect: 'When this weapon is held two-handed and you successfully hit a foe (but before Damage is dealt), they must Resist using Resolve or be Disarmed. Whenever they Resist, they must flip the results to fail.'
    }
  },
  {
    id: QualityId.SILENT,
    name: 'Silent',
    labels: {
      effect: 'Whenever you are Hidden and make an Attack Action using this weapon, optionally spend 2 AP to make a Stealth Test to try hiding again as a Reaction.'
    }
  },
  {
    id: QualityId.SILVER,
    name: 'Silver',
    labels: {
      effect: 'This weapon is considered to be magic. When you deal Damage against Supernatural foes, they suffer an equal amount of Peril. Critically Failing to hit with this weapon destroys the weapon.'
    }
  },
  {
    id: QualityId.SLOW,
    name: 'Slow',
    labels: {
      effect: 'Foes gain a +10% Base Chance to Defend against attacks you make with this weapon.'
    }
  },
  {
    id: QualityId.SMOKE,
    name: 'Smoke',
    labels: {
      effect: 'As this weapon lands, it emits smoke in a Burst Template, creating Heavy Obscurement. Combatants inside cannot take advantage of Medium, Long or Extreme Distances. Additional modifiers may be put in place if attackers attempt to hit combatants inside the smoke. It does not break the line of sight. The smoke’s effects remain for 1D10+1 minutes unless the Historian determines heavy wind disperses it after one minute.'
    }
  },
  {
    id: QualityId.SOCKETED,
    name: 'Socketed',
    labels: {
      effect: 'This weapon is considered an improvised weapon unless attached to a two-handed weapon with the Blackpowder Quality. It takes 1 AP to plug the weapon into the barrel and must be removed before the weapon can be fired.'
    }
  },
  {
    id: QualityId.STRANGLING,
    name: 'Strangling',
    labels: {
      effect: 'After hitting a foe with this weapon (but before Damage is dealt), they must Resist using Toughness or be caught in a Chokehold. Whenever they Resist, they must flip the results to fail. If the weapon also has the Sweeping Quality, choose which you want to use whenever you hit.'
    }
  },
  {
    id: QualityId.SUPERIOR,
    name: 'Superior',
    labels: {
      effect: 'Add +5% Base Chance to hit with this weapon.'
    }
  },
  {
    id: QualityId.SWEEPING,
    name: 'Sweeping',
    labels: {
      effect: 'After hitting a foe with this weapon (but before Damage is dealt), they must Resist using Coordination or be knocked Prone. Whenever they Resist, they must flip the results to fail.'
    }
  },
  {
    id: QualityId.THROWING,
    name: 'Throwing',
    labels: {
      effect: 'This weapon cannot take advantage of Medium, Long or Extreme Distances.'
    }
  },
  {
    id: QualityId.VICIOUS,
    name: 'Vicious',
    labels: {
      effect: 'When determining if a foe is Injured with this weapon, roll an additional 1D6 Chaos Die.'
    }
  },
  {
    id: QualityId.WEAK,
    name: 'Weak',
    labels: {
      effect: 'This weapon cannot inflict Grievous Injuries.'
    }
  },
  {
    id: QualityId.INEFFECTIVE,
    name: 'Ineffective',
    labels: {
      effect: 'Weapons of this Quality cannot deal Damage or inflict Injuries.'
    }
  },
];
