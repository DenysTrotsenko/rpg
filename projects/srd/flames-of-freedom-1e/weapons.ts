import {Weapon} from './models';
import {QualityId, SkillId, WeaponId} from './enums';

export const WEAPONS: Weapon[] = [
  {
    id: WeaponId.ACID_BOMB,
    name: 'Acid Bomb',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.ACID, QualityId.BREAK, QualityId.THROWING],
    encumbrance: 1,
    price: 0,
    quantifiable: true,
    labels: {
      description: 'This distillation of elements is the foremost tool of alchemists on the battlefield.',
      handling: '1H',
      load: '1AP',
      ammo: 'NONE',
      distance: '1+[PB] yards',
      damage: 'PB'
    }
  },
  {
    id: WeaponId.ATLATL,
    name: 'Atlatl',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.SILENT, QualityId.THROWING],
    encumbrance: 2,
    price: 0,
    labels: {
      description: 'A weapon that uses levers to throw a javelin. The atlatl has a shaft with a cup at one end in which the butt of a javelin is placed. It is a favored weapon of Indigenous cultures.',
      handling: '1H',
      load: '1AP',
      ammo: 'Javelins',
      distance: '6+[PB] yards'
    }
  },
  {
    id: WeaponId.BLUNDERBUSS,
    name: 'Blunderbuss',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.VICIOUS, QualityId.WEAK],
    encumbrance: 2,
    price: 0,
    labels: {
      description: 'A favored weapon of Mutineers and Privateers, the blunderbuss is loaded with a mixture of gunpowder and small pellets, and the shot scatters into a cloud, hitting anything in its path.',
      handling: '2H',
      load: '4AP',
      ammo: 'Bullets',
      distance: 'Cone Template',
      damage: 'PB'
    }
  },
  {
    id: WeaponId.BROWN_BESS_MUSKET,
    name: 'Brown Bess Musket',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.ACCURATE, QualityId.BLACKPOWDER],
    encumbrance: 3,
    price: 0,
    labels: {
      description: 'Those who find a Brown Bess use a musket leftover from the French and Indian War.They’re commonly found in the hands of the British Empire and Loyalists.',
      handling: '2H',
      load: '3AP',
      ammo: 'Bullets',
      distance: '9+[PB] yards'
    }
  },
  {
    id: WeaponId.CHARLEVILLE_MUSKET,
    name: 'Charleville Musket',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.CARBINE, QualityId.BLACKPOWDER, QualityId.WEAK],
    encumbrance: 2,
    price: 0,
    labels: {
      description: 'Considered to be superior by the French, this particular musket will give the Brown Bess a run for its money in the heat of battle.',
      handling: '2H',
      load: '3AP',
      ammo: 'Bullets',
      distance: '9+[PB] yards'
    }
  },
  {
    id: WeaponId.DOUBLE_BARREL_PISTOL,
    name: 'Double-Barrel Pistol',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.WEAK, QualityId.REPEATING],
    encumbrance: 1,
    price: 0,
    labels: {
      description: 'Designed for naval boarding, this pistol is deadly in close fighting but loses its punch at farther distances.',
      handling: '1H',
      load: 'SPECIAL',
      ammo: 'Bullets (2)',
      distance: '1+[PB] yards'
    }
  },
  {
    id: WeaponId.DUCK_FOOT_PISTOL,
    name: 'Duck-Foot Pistol',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.SLOW, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: 'A pistol with four splayed barrels, the duck-foot is particularly useful against rowdy crowds but impossible to aim precisely. Also, every trigger blast carries a significant amount of kickback.',
      handling: '1H',
      load: '3AP',
      ammo: 'Bullets',
      distance: 'Cone Template',
      damage: 'PB'
    }
  },
  {
    id: WeaponId.DUTCH_LONGPISTOL,
    name: 'Dutch Longpistol',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.ACCURATE, QualityId.BLACKPOWDER, QualityId.PISTOL],
    encumbrance: 1,
    price: 0,
    labels: {
      description: 'These 14-inch barreled pistols are manufactured in the Netherlands and have slowly become available for sale in the Thirteen Colonies. They are renowned for their deadly accuracy.',
      handling: '1H',
      load: '2AP',
      ammo: 'Bullets',
      distance: '3+[PB] yards'
    }
  },
  {
    id: WeaponId.FERGUSON_RIFLE,
    name: 'Ferguson Rifle',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.CARBINE],
    encumbrance: 2,
    price: 0,
    labels: {
      description: 'This breech-loading rifle is exceedingly expensive to carry and quite deadly to those caught on the wrong end of the barrel.',
      handling: '2H',
      load: '2AP',
      ammo: 'Bullets',
      distance: '9+[PB] yards'
    }
  },
  {
    id: WeaponId.FLINTLOCK_PISTOL,
    name: 'Flintlock Pistol',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: 'With a 9-inch barrel length, the flintlock is the most common type of pistol found in the Colonies. Flintlocks are produced by a variety of gunsmiths, both in the Thirteen Colonies and abroad.',
      handling: '1H',
      load: '2AP',
      ammo: 'Bullets',
      distance: '3+[PB] yards'
    }
  },
  {
    id: WeaponId.FOWLER_MUSKET,
    name: 'Fowler Musket',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.INACCURATE, QualityId.WEAK],
    encumbrance: 2,
    price: 0,
    labels: {
      description: 'Sometimes called the Hudson Valley Fowler or New England Fowler, this musket is the most commonly found musket in the Thirteen Colonies. With a 48-inch barrel, it is primarily used for hunting.',
      handling: '2H',
      load: '3AP',
      ammo: 'Bullets',
      distance: '9+[PB] yards'
    }
  },
  {
    id: WeaponId.FUSED_GRENADE,
    name: 'Fused Grenade',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.BOMB, QualityId.BREAK, QualityId.THROWING],
    encumbrance: 1,
    price: 0,
    quantifiable: true,
    labels: {
      description: 'It is a hollow iron ball packed with gunpowder, ignited using a string fuse. When detonated, the ball shatters, sending iron shards in all directions.',
      handling: '1H',
      load: '1AP',
      ammo: 'NONE',
      distance: '1+[PB] yards'
    }
  },
  {
    id: WeaponId.FUSED_GRENADE_MORTAR,
    name: 'Fused Grenade Mortar',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.BOMB, QualityId.THROWING],
    encumbrance: 3,
    price: 0,
    labels: {
      description: 'This is the ubiquitous grenade lobber. Though it looks like a blunderbuss, it fires a grenade much farther than it is typically thrown.',
      handling: '2H',
      load: '4AP',
      ammo: 'NONE',
      distance: '6+[PB] yards'
    }
  },
  {
    id: WeaponId.GIRARDONI_AIR_RIFLE,
    name: 'Girardoni Air Rifle',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.PNEUMATIC, QualityId.REPEATING, QualityId.SILENT],
    encumbrance: 3,
    price: 0,
    labels: {
      description: 'These curious devices are powered by pneumatics, producing little noise and no smoke. However, they also have one decisive disadvantage: empty reservoirs must be refilled using a large air-pump, which is not portable.',
      handling: '2H',
      load: 'SPECIAL',
      ammo: 'Bullets (20)',
      distance: '6+[PB] yards'
    }
  },
  {
    id: WeaponId.MUSKETOON,
    name: 'Musketoon',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.CARBINE],
    encumbrance: 2,
    price: 0,
    labels: {
      description: 'This is a shorter version of the fowler musket. Its shorter length means even less accuracy but offers the possibility to reload while on the back of a horse or in confined spaces.',
      handling: '2H',
      load: '2AP',
      ammo: 'Bullets',
      distance: '6+[PB] yards'
    }
  },
  {
    id: WeaponId.NET,
    name: 'Net',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.SWEEPING, QualityId.INEFFECTIVE],
    encumbrance: 2,
    price: 0,
    labels: {
      description: 'Nets have been used for centuries to catch fish or fowl, and the more adventurous sometimes use heavy nets to secure live specimens or legendary creatures.',
      handling: '1H',
      load: '1AP',
      ammo: 'NONE',
      distance: '1+[PB] yards'
    }
  },
  {
    id: WeaponId.OVERCOAT_PISTOL,
    name: 'Overcoat Pistol',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: 'This is a small pistol designed to hide in a jacket pocket or muff, and many wealthy merchants and travelers carry it.',
      handling: '1H',
      load: '2AP',
      ammo: 'Bullets',
      distance: '1+[PB] yards'
    }
  },
  {
    id: WeaponId.PENNSYLVANIA_LONGRIFLE,
    name: 'Pennsylvania Longrifle',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.ACCURATE, QualityId.BLACKPOWDER, QualityId.PUNISHING],
    encumbrance: 4,
    price: 0,
    labels: {
      description: 'Created by German gunsmiths living in southern Pennsylvania, these rifles are favored by those moving to the frontier areas. With barrels ranging from 44 to 46 inches, these rifles are feared for their deadly accuracy.',
      handling: '2H',
      load: '4AP',
      ammo: 'Bullets',
      distance: '12+[PB] yards'
    }
  },
  {
    id: WeaponId.POWDER_BOMB,
    name: 'Powder Bomb',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BOMB, QualityId.BREAK, QualityId.SMOKE, QualityId.INEFFECTIVE],
    encumbrance: 1,
    price: 0,
    quantifiable: true,
    labels: {
      description: 'This bomb is not deadly; instead, it produces a cloud of smoke that obscures vision.',
      handling: '1H',
      load: '1AP',
      ammo: 'NONE',
      distance: '1+[PB]'
    }
  },
  {
    id: WeaponId.RAMPART_GUN,
    name: 'Rampart Gun',
    skills: [SkillId.MARTIAL_RANGED, SkillId.WARFARE],
    qualities: [QualityId.ACCURATE, QualityId.BLACKPOWDER, QualityId.CUMBERSOME, QualityId.DEVASTATING],
    encumbrance: 6,
    price: 0,
    labels: {
      description: 'With a 46-inch barrel, these muskets are more like mini-cannons than shoulder arms. Used aboard ships and atop palisades, these guns are a rarity in the Colonies.',
      handling: '2H',
      load: '6AP',
      ammo: 'Bullets',
      distance: '15+[PB]'
    }
  },
  {
    id: WeaponId.SCREW_PISTOL,
    name: 'Screw Pistol',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: 'Sometimes called a cannon barrel pistol, this pistol is designed to be deadly at close range. It is readily hidden, as its barrel can be released by unscrewing it from the stock.',
      handling: '1H',
      load: '3AP',
      ammo: 'Bullets',
      distance: '3+[PB]'
    }
  },
  {
    id: WeaponId.SELFBOW,
    name: 'Selfbow',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.FAST, QualityId.SILENT],
    encumbrance: 2,
    price: 0,
    labels: {
      description: 'Carved from a single piece of wood and with a draw range of 2 feet, a selfbow is capable of taking down a buffalo with multiple shots, or a rabbit with one shot.',
      handling: '2H',
      load: '1AP',
      ammo: 'Arrows',
      distance: '9+[PB]'
    }
  },
  {
    id: WeaponId.TURN_OUT_SIMPLE_PISTOL,
    name: 'Turn-Out Simple Pistol',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.INACCURATE, QualityId.PISTOL, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: 'This pistol does not require loading the conventional way: wadding, powder and shot and shoved down with a ramrod. Instead, a turn-out pistol’s barrel is unscrewed, allowing both the powder and shot to be loaded into the firing chamber.',
      handling: '1H',
      load: '1AP',
      ammo: 'Bullets',
      distance: '1+[PB]'
    }
  },
  {
    id: WeaponId.MANHATTAN_PEPPERBOX,
    name: 'Manhattan Pepperbox',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.REPEATING, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '2AP',
      ammo: 'Bullets (3)',
      distance: '3+[PB] yards'
    }
  },
  {
    id: WeaponId.ALLEN_THURBER_PEPPERBOX,
    name: 'Allen & Thurber Pepperbox',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.REPEATING, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '2AP',
      ammo: 'Bullets (4)',
      distance: '3+[PB] yards'
    }
  },
  {
    id: WeaponId.COLT_NAVY_PEPPERBOX,
    name: 'Colt Navy Pepperbox',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.REPEATING, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '2AP',
      ammo: 'Bullets (6)',
      distance: '3+[PB] yards'
    }
  },
  {
    id: WeaponId.AGRICULTURAL_TOOL,
    name: 'Agricultural Tool',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.SWEEPING, QualityId.SLOW, QualityId.WEAK],
    encumbrance: 2,
    price: 0,
    labels: {
      description: '',
      handling: '2H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.BARE_HANDED,
    name: 'Bare-handed',
    skills: [SkillId.SIMPLE_MELEE, SkillId.ATHLETICS],
    qualities: [QualityId.PUMMELING, QualityId.SLOW],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '1H or 2H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.BAYONET,
    name: 'Bayonet',
    skills: [SkillId.MARTIAL_MELEE],
    qualities: [QualityId.SOCKETED, QualityId.VICIOUS],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '2H',
      load: '1AP',
      ammo: 'NONE',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.BLACKJACK,
    name: 'Blackjack',
    skills: [SkillId.SIMPLE_MELEE, SkillId.ATHLETICS],
    qualities: [QualityId.PUMMELING, QualityId.SILENT, QualityId.SLOW],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.BOARDING_AXE,
    name: 'Boarding Axe',
    skills: [SkillId.MARTIAL_MELEE],
    qualities: [QualityId.BACKSLASH, QualityId.FAST],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H or 2H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.CAVALRY_SABRE,
    name: 'Cavalry Sabre',
    skills: [SkillId.MARTIAL_MELEE],
    qualities: [QualityId.BACKSLASH, QualityId.SLOW],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.GARROTE,
    name: 'Garrote',
    skills: [SkillId.SIMPLE_MELEE, SkillId.ATHLETICS],
    qualities: [QualityId.SILENT, QualityId.STRANGLING, QualityId.INEFFECTIVE],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '2H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.GUNSTOCK_CLUB,
    name: 'Gunstock Club',
    skills: [SkillId.MARTIAL_MELEE, SkillId.MARTIAL_RANGED],
    qualities: [QualityId.BACKSLASH, QualityId.THROWING],
    encumbrance: 2,
    price: 0,
    labels: {
      description: '',
      handling: '1H or 2H',
      load: '0AP (1AP thrown)',
      ammo: 'NONE',
      distance: 'Engaged or 1+[PB]'
    }
  },
  {
    id: WeaponId.HANGER_SWORD,
    name: 'Hanger Sword',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.HARPOON,
    name: 'Harpoon',
    skills: [SkillId.SIMPLE_MELEE, SkillId.SIMPLE_RANGED],
    qualities: [QualityId.FAST, QualityId.SKEWERING, QualityId.THROWING, QualityId.WEAK],
    encumbrance: 2,
    price: 0,
    labels: {
      description: '',
      handling: '1H or 2H',
      load: '0AP (1AP thrown)',
      ammo: 'NONE',
      distance: 'Engaged or 1+[PB] yards'
    }
  },
  {
    id: WeaponId.HATCHET,
    name: 'Hatchet',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.SLOW, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged',
    }
  },
  {
    id: WeaponId.HOLY_WATER,
    name: 'Holy Water',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.BREAK, QualityId.HOLY, QualityId.THROWING],
    encumbrance: 1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '1H',
      load: '1AP',
      ammo: 'NONE',
      distance: 'Engaged or 1+[PB] yards',
      damage: 'SPECIAL'
    }
  },
  {
    id: WeaponId.HORSEWHIP,
    name: 'Horsewhip',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.STRANGLING, QualityId.SWEEPING, QualityId.INEFFECTIVE],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.IMPROVISED,
    name: 'Improvised',
    skills: [SkillId.SIMPLE_MELEE, SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BREAK, QualityId.PUMMELING, QualityId.THROWING],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H or 2H',
      load: '0AP (1AP thrown)',
      ammo: 'NONE',
      distance: 'Engaged or 1+[PB] yards'
    }
  },
  {
    id: WeaponId.INFANTRY_SWORD,
    name: 'Infantry Sword',
    skills: [SkillId.MARTIAL_MELEE],
    qualities: [QualityId.DEFENSIVE],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.KNIFE,
    name: 'Knife',
    skills: [SkillId.SIMPLE_MELEE, SkillId.SIMPLE_RANGED],
    qualities: [QualityId.FAST, QualityId.THROWING, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP (1AP thrown)',
      ammo: 'NONE',
      distance: 'Engaged or 1+[PB] yard'
    }
  },
  {
    id: WeaponId.LOADED_STICK,
    name: 'Loaded Stick',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.DEFENSIVE, QualityId.SLOW, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.SPEAR,
    name: 'Spear',
    skills: [SkillId.SIMPLE_MELEE, SkillId.SIMPLE_RANGED],
    qualities: [QualityId.FAST, QualityId.THROWING, QualityId.WEAK],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H or 2H',
      load: '0AP (1AP thrown)',
      ammo: 'NONE',
      distance: '3+[PB] yards'
    }
  },
  {
    id: WeaponId.SPONTOON,
    name: 'Spontoon',
    skills: [SkillId.MARTIAL_MELEE],
    qualities: [QualityId.REACH, QualityId.SKEWERING],
    encumbrance: 2,
    price: 0,
    labels: {
      description: '',
      handling: '2H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.STAKE,
    name: 'Stake',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.BREAK, QualityId.COLD_IRON, QualityId.PUMMELING],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.TOMAHAWK,
    name: 'Tomahawk',
    skills: [SkillId.MARTIAL_MELEE, SkillId.MARTIAL_RANGED],
    qualities: [QualityId.THROWING],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP (1AP thrown)',
      ammo: 'NONE',
      distance: 'Engaged or 1+[PB] yards'
    }
  },
  {
    id: WeaponId.TORCH,
    name: 'Torch',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.BREAK, QualityId.IMMOLATE, QualityId.PUMMELING],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.WAR_SHIELD,
    name: 'War Shield',
    skills: [SkillId.SIMPLE_MELEE, SkillId.ATHLETICS],
    qualities: [QualityId.DEFENSIVE, QualityId.PUMMELING, QualityId.SLOW],
    encumbrance: 2,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.ZWEIHANDER,
    name: 'Zweihänder',
    skills: [SkillId.MARTIAL_MELEE],
    qualities: [QualityId.PUNISHING, QualityId.REACH],
    encumbrance: 3,
    price: 0,
    labels: {
      description: '',
      handling: '2H',
      load: '0AP',
      ammo: 'NONE',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.ARROW,
    name: 'Arrow',
    skills: [],
    qualities: [],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.JAVELIN,
    name: 'Javelin',
    skills: [],
    qualities: [],
    encumbrance: .5,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.BULLET,
    name: 'Bullet',
    skills: [],
    qualities: [],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.BULLET_COLD_IRON,
    name: 'Bullet (Cold Iron)',
    skills: [],
    qualities: [QualityId.COLD_IRON],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.BULLET_SILVER,
    name: 'Bullet (Silver)',
    skills: [],
    qualities: [QualityId.SILVER],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.ROUND,
    name: 'Round',
    skills: [],
    qualities: [],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.ROUND_COLD_IRON,
    name: 'Round (Cold Iron)',
    skills: [],
    qualities: [QualityId.COLD_IRON],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.ROUND_SILVER,
    name: 'Round (Silver)',
    skills: [],
    qualities: [QualityId.SILVER],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.CARTRIDGE,
    name: 'Cartridge',
    skills: [],
    qualities: [],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.CARTRIDGE_COLD_IRON,
    name: 'Cartridge (Cold Iron)',
    skills: [],
    qualities: [QualityId.COLD_IRON],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.CARTRIDGE_SILVER,
    name: 'Cartridge (Silver)',
    skills: [],
    qualities: [QualityId.SILVER],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.SHELL,
    name: 'Shell',
    skills: [],
    qualities: [],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.SHELL_COLD_IRON,
    name: 'Shell (Cold Iron)',
    skills: [],
    qualities: [],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.SHELL_SILVER,
    name: 'Shell (Silver)',
    skills: [],
    qualities: [QualityId.SILVER],
    encumbrance: .1,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.CANON_BALL,
    name: 'Canon Ball',
    skills: [],
    qualities: [],
    encumbrance: .5,
    price: 0,
    quantifiable: true,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: '',
      damage: '-'
    }
  },
  {
    id: WeaponId.SNAPJAW,
    name: 'Snapjaw',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.DEVASTATING, QualityId.STRANGLING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.IRON_HARD_FISTS,
    name: 'Iron-Hard Fists',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.POWERFUL, QualityId.PUMMELING, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.ASPHYXIATING_HANDS,
    name: 'Asphyxiating Hands',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.SLOW, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.UNHOLY_LANTERN,
    name: 'Unholy Lantern',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.FAST],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '1AP',
      ammo: '',
      distance: 'Cone Template'
    }
  },
  {
    id: WeaponId.SCRATCH,
    name: 'Scratch',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.THUNDEROUS_HOOVES,
    name: 'Thunderous Hooves',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.POWERFUL, QualityId.PUMMELING, QualityId.SLOW, QualityId.SWEEPING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.BEAR_CLAW,
    name: 'Bear Claw',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.SWEEPING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.BEAR_BITE,
    name: 'Bear Bite',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.STRANGLING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.DOG_BITE,
    name: 'Dog Bite',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUNISHING, QualityId.SLOW, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.WOLVERINE_CLAWS,
    name: 'Wolverine Claws',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.SWEEPING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.VINE_LASH,
    name: 'Vine Lash',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.INEFFECTIVE, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.VINE_STRIKE,
    name: 'Vine Strike',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Burst Template'
    }
  },
  {
    id: WeaponId.TERRIBLE_TEETH,
    name: 'Terrible Teeth',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.FAST, QualityId.VICIOUS, QualityId.SWEEPING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.DEATH_SQUEEZE,
    name: 'Death Squeeze',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SLOW, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard',
    }
  },
  {
    id: WeaponId.SNARLING_BITE,
    name: 'Snarling Bite',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SWEEPING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged',
    }
  },
  {
    id: WeaponId.FILTHY_CLAWS,
    name: 'Filthy Claws',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SLOW],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged',
    }
  },
  {
    id: WeaponId.MANDIBLES,
    name: 'Mandibles',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.STRANGLING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged',
    }
  },
  {
    id: WeaponId.BEAK_AND_TALONS,
    name: 'Beak And Talons',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.FAST, QualityId.SWEEPING, QualityId.WEAK],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard',
    }
  },
  {
    id: WeaponId.FANGS,
    name: 'Fangs',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.SLOW, QualityId.VICIOUS, QualityId.WEAK],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard',
    }
  },
  {
    id: WeaponId.WEBBING,
    name: 'Webbing',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.INEFFECTIVE, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Cone Template',
    }
  },
  {
    id: WeaponId.TONGUE_AND_CLAWS,
    name: 'Tongue And Claws',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SLOW, QualityId.SWEEPING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.ANTLERS_AND_CLAWS,
    name: 'Antlers And Claws',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.FAST, QualityId.POWERFUL, QualityId.SKEWERING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.VICIOUS_MAW,
    name: 'Vicious Maw',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SWEEPING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.OINK_OINK,
    name: 'Oink Oink',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SLOW],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.SICKLE,
    name: 'Sickle',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.FAST, QualityId.SWEEPING, QualityId.WEAK],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.HORSE_KICK,
    name: 'Horse Kick',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SLOW],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.SWARMING,
    name: 'Swarming',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Burst Template'
    }
  },
  {
    id: WeaponId.ENGULFING_BITE,
    name: 'Engulfing Bite',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 2 yards'
    }
  },
  {
    id: WeaponId.LASHING_TENTACLE,
    name: 'Lashing Tentacle',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SWEEPING, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Cone Template'
    }
  },
  {
    id: WeaponId.KEENING,
    name: 'Keening',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.FAST, QualityId.POWERFUL, QualityId.WEAK],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '1AP',
      ammo: '',
      distance: 'Cone Template'
    }
  },
  {
    id: WeaponId.FORKED_TAIL,
    name: 'Forked Tail',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SKEWERING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.SQUAWK,
    name: 'Squawk',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.FAST, QualityId.POWERFUL, QualityId.WEAK],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '1AP',
      ammo: '',
      distance: 'Cone Template'
    }
  },
  {
    id: WeaponId.LYCANTHROPIC_CLAWS,
    name: 'Lycanthropic Claws',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.DEVASTATING, QualityId.FAST, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.SHREDDING_BITE,
    name: 'Shredding Bite',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SWEEPING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.STOMP,
    name: 'Stomp',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SWEEPING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.TUSKS,
    name: 'Tusks',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.POWERFUL, QualityId.PUMMELING, QualityId.SKEWERING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.TEETH_AND_CLAWS,
    name: 'Teeth And Claws',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SWEEPING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.KITTY_CLAWS,
    name: 'Kitty Claws',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.INEFFECTIVE],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.SLIME_TIME,
    name: 'Slime Time',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SLOW, QualityId.SWEEPING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.TALONS,
    name: 'Talons',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.POWERFUL, QualityId.PUMMELING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.SQUATCH_THROTTLE,
    name: 'Squatch Throttle',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.POWERFUL, QualityId.PUMMELING, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  {
    id: WeaponId.SHADOW_TOUCH,
    name: 'Shadow Touch',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SLOW],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.JAWS,
    name: 'Jaws',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUNISHING, QualityId.SILENT, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.RIPPING_TEETH,
    name: 'Ripping Teeth',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SWEEPING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.SWAMP_THROTTLE,
    name: 'Swamp Throttle',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.POWERFUL, QualityId.PUMMELING, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.HORNS_AND_TALONS,
    name: 'Horns And Talons',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.FAST, QualityId.SWEEPING, QualityId.WEAK],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.VAMPIRIC_FANGS,
    name: 'Vampiric Fangs',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SILENT],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.VAMPIRIC_CLAWS,
    name: 'Vampiric Claws',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.DEVASTATING, QualityId.FAST, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.GHOST_HANDS,
    name: 'Ghost Hands',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.SLOW, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.CANNIBAL_CLAWS,
    name: 'Cannibal Claws',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.PUMMELING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.FATAL_BITE,
    name: 'Fatal Bite',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.DEVASTATING, QualityId.PUMMELING, QualityId.PUNISHING, QualityId.SWEEPING, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 2 yard'
    }
  },
  {
    id: WeaponId.WILD_BOAR_TUSKS,
    name: 'Tusks',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.FAST, QualityId.POWERFUL, QualityId.SKEWERING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.WATER_NYMPH_TALONS,
    name: 'Talons',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.FAST, QualityId.SILENT, QualityId.STRANGLING],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged'
    }
  },
  {
    id: WeaponId.WALRUS_TUSKS,
    name: 'Tusks',
    skills: [SkillId.SIMPLE_MELEE],
    qualities: [QualityId.FAST, QualityId.SKEWERING, QualityId.VICIOUS],
    encumbrance: 0,
    price: 0,
    labels: {
      description: '',
      handling: '',
      load: '',
      ammo: '',
      distance: 'Engaged or 1 yard'
    }
  },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
  // {
  //   id: WeaponId.SLIME_TIME,
  //   name: '',
  //   skills: [SkillId.SIMPLE_MELEE],
  //   qualities: [],
  //   encumbrance: 0,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: 'Engaged or 1 yard'
  //   }
  // },
];
