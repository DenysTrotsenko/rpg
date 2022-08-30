/*
* Shotgun
* Double-Barreled Gun
* Whitworth rifle, which outperformed the Lancaster, Richards, and Enfield
* Sharps rifle
* Colt First Model Ring Lever rifle
* */
import {QualityId, SkillId} from '@powered-by-zweihander/enums';
import {WeaponId} from './enums';

export const WEAPONS = [
  {
    id: WeaponId.COLT_ARMY,
    name: 'Colt Army',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.CYLINDER, QualityId.WEAK],
    encumbrance: 1,
    price: 1000,
    labels: {
      description: '',
      handling: '1H',
      load: 'Special',
      ammo: 'Bullets (6)',
      distance: '3+[PB]',
      damage: 'CB'
    }
  },
  {
    id: WeaponId.LEMAT_REVOLVER,
    name: 'LeMat Revolver',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.CYLINDER, QualityId.WEAK, QualityId.INACCURATE],
    encumbrance: 1,
    price: 1500,
    labels: {
      description: '',
      handling: '1H',
      load: 'Special',
      ammo: 'Bullets (9)',
      distance: '3+[PB]',
      damage: 'CB'
    }
  },
  {
    id: WeaponId.COLT_FRONTIER,
    name: 'Colt Frontier',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.CYLINDER, QualityId.INACCURATE, QualityId.WEAK],
    encumbrance: 1,
    price: 800,
    labels: {
      description: '',
      handling: '1H',
      load: 'Special',
      ammo: 'Bullets (6)',
      distance: '3+[PB]',
      damage: 'CB'
    }
  },
  {
    id: WeaponId.COLT_PEACEKEEPER,
    name: 'Colt Peacekeeper',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.CYLINDER, QualityId.INACCURATE],
    encumbrance: 1,
    price: 1500,
    labels: {
      description: '',
      handling: '1H',
      load: 'Special',
      ammo: 'Bullets (6)',
      distance: '',
      damage: 'CB'
    }
  },
  {
    id: WeaponId.COLT_DERRINGER,
    name: 'Colt Derringer',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.REPEATING, QualityId.WEAK],
    encumbrance: 1,
    price: 800,
    labels: {
      description: '',
      handling: '1H',
      load: 'Special',
      ammo: 'Bullets (2)',
      distance: '',
      damage: 'CB'
    }
  },
  {
    id: WeaponId.REMINGTON_ELIOT_DERRINGER,
    name: 'Remington-Eliot Derringer',
    skills: [SkillId.SIMPLE_RANGED],
    qualities: [QualityId.BLACKPOWDER, QualityId.PISTOL, QualityId.REPEATING, QualityId.WEAK, QualityId.INACCURATE],
    encumbrance: 1,
    price: 0,
    labels: {
      description: '',
      handling: '1H',
      load: 'Special',
      ammo: 'Bullets (4)',
      distance: '',
      damage: 'CB'
    }
  },
  // {
  //   id: WeaponId.ACID_BOMB,
  //   name: '',
  //   skills: [SkillId.SIMPLE_RANGED],
  //   qualities: [],
  //   encumbrance: 1,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: '',
  //     damage: ''
  //   }
  // },
  // {
  //   id: WeaponId.ACID_BOMB,
  //   name: '',
  //   skills: [SkillId.SIMPLE_RANGED],
  //   qualities: [],
  //   encumbrance: 1,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: '',
  //     damage: ''
  //   }
  // },
  // {
  //   id: WeaponId.ACID_BOMB,
  //   name: '',
  //   skills: [SkillId.SIMPLE_RANGED],
  //   qualities: [],
  //   encumbrance: 1,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: '',
  //     damage: ''
  //   }
  // },
  {
    id: WeaponId.WHITWORTH_RIFLE,
    name: 'Whitworth Rifle',
    skills: [SkillId.MARTIAL_RANGED],
    qualities: [QualityId.ACCURATE, QualityId.BLACKPOWDER, QualityId.VICIOUS],
    encumbrance: 3,
    price: 12000,
    labels: {
      description: '',
      handling: '2H',
      load: '3AP',
      ammo: 'Bullets (1)',
      distance: '50+[PB]',
      damage: 'PB'
    }
  },
  // {
  //   id: WeaponId.ACID_BOMB,
  //   name: '',
  //   skills: [SkillId.SIMPLE_RANGED],
  //   qualities: [],
  //   encumbrance: 1,
  //   price: 0,
  //   labels: {
  //     description: '',
  //     handling: '',
  //     load: '',
  //     ammo: '',
  //     distance: '',
  //     damage: ''
  //   }
  // },
];
