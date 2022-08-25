import {InjuryId, InjuryTypeId} from '@flames-of-freedom-1e/enums';
import {Injury, InjuryType} from '@flames-of-freedom-1e/models';

export const INJURY_TYPES: InjuryType[] = [
  {id: InjuryTypeId.MODERATE, name: 'Moderate'},
  {id: InjuryTypeId.SERIOUS, name: 'Serious'},
  {id: InjuryTypeId.GRIEVOUS, name: 'Grievous'},
  {id: InjuryTypeId.PERMANENT, name: 'Permanent'},
];

export const INJURIES: Injury[] = [
  {
    id: InjuryId.NARROW_ESCAPE_1,
    name: 'Narrow Escape!',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You don’t suffer an Injury.'
    }
  },
  {
    id: InjuryId.ANKLE_GRAZE,
    name: 'Ankle Graze',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, reduce your Encumbrance Limit by -3.'
    }
  },
  {
    id: InjuryId.BLURRED_VISION,
    name: 'Blurred Vision',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, reduce your Damage Threshold & Peril Threshold by -1.'
    }
  },
  {
    id: InjuryId.BOXED_EAR,
    name: 'Boxed Ear',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must flip the results to fail Skill Tests which rely on hearing.'
    }
  },
  {
    id: InjuryId.BROKEN_FINGERS,
    name: 'Broken Fingers',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must succeed at a Coordination Test to Load & Quickload ranged weapons.'
    }
  },
  {
    id: InjuryId.BRUISED_EYE_SOCKET,
    name: 'Bruised Eye Socket',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must flip the results to fail Skill Tests which rely on vision.'
    }
  },
  {
    id: InjuryId.CHEST_WOUND_1,
    name: 'Chest Wound',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, reduce Distances with ranged weapons by -3.'
    }
  },
  {
    id: InjuryId.CRACKED_WRIST,
    name: 'Cracked Wrist',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot add Skill Ranks when wielding weapons in combat.'
    }
  },
  {
    id: InjuryId.DISLOCATED_SHOULDER,
    name: 'Dislocated Shoulder',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, start your Turn with 1 fewer AP.'
    }
  },
  {
    id: InjuryId.GRAZED_SHOULDER,
    name: 'Grazed Shoulder',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must succeed at a Toughness Test to use ranged weapons.'
    }
  },
  {
    id: InjuryId.GUT_BUSTER,
    name: 'Gut Buster',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you suffer 1D10+1 Peril after eating.'
    }
  },
  {
    id: InjuryId.HYPEREXTENDED_ELBOW,
    name: 'Hyperextended Elbow',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. Until fully Recuperated, you must flip the results to fail all Actions In Combat that rely on ranged weapons.'
    }
  },
  {
    id: InjuryId.JAMMED_FINGER,
    name: 'Jammed Finger',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must flip the results to fail all melee weapon attacks with your primary hand.'
    }
  },
  {
    id: InjuryId.JAMMED_TOES,
    name: 'Jammed Toes',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must spend 1 additional AP to Maneuver and Take Cover.'
    }
  },
  {
    id: InjuryId.NECK_SPASM,
    name: 'Neck Spasm',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot take advantage of weapons or Spells that have Burst, Cone and Explosion Template effects.'
    }
  },
  {
    id: InjuryId.PIERCED_THROAT,
    name: 'Pierced Throat',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you suffer 1D10+1 Peril after speaking.'
    }
  },
  {
    id: InjuryId.PULLED_MUSCLE,
    name: 'Pulled Muscle',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must flip the results to fail all Brawn-based Skill Tests.'
    }
  },
  {
    id: InjuryId.RATTLED_BRAIN_1,
    name: 'Rattled Brain',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, reduce your Initiative by -3.'
    }
  },
  {
    id: InjuryId.SCRAPPED_BUTTOCK,
    name: 'Scrapped Buttock',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot sleep soundly, awakening to Imperiled.'
    }
  },
  {
    id: InjuryId.SPRAINED_WRIST,
    name: 'Sprained Wrist',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot hold anything in your primary hand or wield two-handed weapons.'
    }
  },
  {
    id: InjuryId.STRAINED_GROIN,
    name: 'Strained Groin',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you remain Strained.'
    }
  },
  {
    id: InjuryId.SWOLLEN_EYELID,
    name: 'Swollen Eyelid',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you suffer 1D10+1 Peril after reading and writing.'
    }
  },
  {
    id: InjuryId.TWISTED_ANKLE,
    name: 'Twisted Ankle',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, reduce your Movement by -3.'
    }
  },
  {
    id: InjuryId.VICIOUS_HAIRCUT,
    name: 'Vicious Haircut',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, all failed Fellowship-based Skill Tests are treated as Critically Failed instead.'
    }
  },
  {
    id: InjuryId.IT_GETS_WORSE_1,
    name: 'It Gets Worse...',
    type: InjuryTypeId.MODERATE,
    labels: {
      effect: 'Roll on the Serious Injury table instead!'
    }
  },
  {
    id: InjuryId.NARROW_ESCAPE_2,
    name: 'Narrow Escape!',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You don’t suffer an Injury.'
    }
  },
  {
    id: InjuryId.BASHED_SKULL,
    name: 'Bashed Skull',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot use Special Actions in combat.'
    }
  },
  {
    id: InjuryId.BLEEDING_GROIN,
    name: 'Bleeding Groin',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you wake up every morning having suffered 2D10+2 Peril.'
    }
  },
  {
    id: InjuryId.BLOODY_HAMSTRING,
    name: 'Bloody Hamstring',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you begin Bleeding at the end of your Turn if you use a Movement Action.'
    }
  },
  {
    id: InjuryId.BUSTED_KNEECAP,
    name: 'Busted Kneecap',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, any time you fail a Skill Test that relies on Agility or Brawn, you suffer 2D10+2 Peril.'
    }
  },
  {
    id: InjuryId.CHEST_WOUND_2,
    name: 'Chest Wound',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you are Shaken.'
    }
  },
  {
    id: InjuryId.CLEFT_SKULL,
    name: 'Cleft Skull',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot give or gain the benefits of Assisted Skill Tests.'
    }
  },
  {
    id: InjuryId.CRACKED_COLLARBONE,
    name: 'Cracked Collarbone',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot use Rough & Tumble.'
    }
  },
  {
    id: InjuryId.DEVASTATED_FOOT,
    name: 'Devastated Foot',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, reduce your Movement by -6.'
    }
  },
  {
    id: InjuryId.ELBOW_CRUSHED,
    name: 'Elbow Crushed',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot use two-handed weapons.'
    }
  },
  {
    id: InjuryId.GRAZED_BROW,
    name: 'Grazed Brow',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you suffer 2D10+2 Peril whenever you fail Intelligence-based and Willpower-based Skill Tests.'
    }
  },
  {
    id: InjuryId.HACKED_CALF_2,
    name: 'Hacked Calf',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must add an additional 1 AP to Charge, Maneuver and Run.'
    }
  },
  {
    id: InjuryId.LACERATED_SHOULDER,
    name: 'Lacerated Shoulder',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you start your Turn with 2 less AP.'
    }
  },
  {
    id: InjuryId.MINOR_CONCUSSION,
    name: 'Minor Concussion',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot add Skill Ranks to your Skill Test.'
    }
  },
  {
    id: InjuryId.PUNCTURED_ARMPIT,
    name: 'Punctured Armpit',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, reduce your Encumbrance Limit by -6.'
    }
  },
  {
    id: InjuryId.RIB_WOUND,
    name: 'Rib Wound',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot add Skill Ranks to Agility or Brawn-based based Skill Tests.'
    }
  },
  {
    id: InjuryId.RUPTURED_TENDON,
    name: 'Ruptured Tendon',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot stand on your own.'
    }
  },
  {
    id: InjuryId.SHELL_SHOCKED,
    name: 'Shell Shocked',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot add any Fury Dice to Damage.'
    }
  },
  {
    id: InjuryId.SHIN_CRUSHED,
    name: 'Shin Crushed',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must flip the results to fail all Reactions.'
    }
  },
  {
    id: InjuryId.SHREDDED_MUSCLE,
    name: 'Shredded Muscle',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must roll 1D6 Chaos Die at the end of your combat Turns. If it lands on face ‘6,’ you are knocked Prone.'
    }
  },
  {
    id: InjuryId.SKULL_FRACTURE,
    name: 'Skull Fracture',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, reduce all Primary Attribute Bonuses by -1.'
    }
  },
  {
    id: InjuryId.SLASHED_LARYNX,
    name: 'Slashed Larynx',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must succeed at a Toughness Test to speak.'
    }
  },
  {
    id: InjuryId.SMASHED_MOUTH,
    name: 'Smashed Mouth',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you must flip the results to fail all Skill Tests that rely on using your voice.'
    }
  },
  {
    id: InjuryId.STAB_WOUND,
    name: 'Stab Wound',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'You are Bleeding. A caregiver must Treat Injury. Until fully Recuperated, you cannot Defend.'
    }
  },
  {
    id: InjuryId.IT_GETS_WORSE_2,
    name: 'It Gets Worse...',
    type: InjuryTypeId.SERIOUS,
    labels: {
      effect: 'Roll on the Grievous Injury table instead!'
    }
  },
  {
    id: InjuryId.NARROW_ESCAPE_3,
    name: 'Narrow Escape!',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You don’t suffer an Injury.'
    }
  },
  {
    id: InjuryId.BASHED_HEAD,
    name: 'Bashed Head',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Sanguine Temperament Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Perception.'
    }
  },
  {
    id: InjuryId.BATTERED_FACE,
    name: 'Battered Face',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Phlegmatic Temperament Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Brawn.'
    }
  },
  {
    id: InjuryId.BRAIN_ABSCESS,
    name: 'Brain Abscess',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Planet-Struck Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Willpower.'
    }
  },
  {
    id: InjuryId.BUTCHERED_SHANK,
    name: 'Butchered Shank',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain a Prosthetic Leg Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Agility.'
    }
  },
  {
    id: InjuryId.CEREBRAL_CONTUSION,
    name: 'Cerebral Contusion',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Headmould-Shot Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Intelligence.'
    }
  },
  {
    id: InjuryId.CRACKED_SKULL,
    name: 'Cracked Skull',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Choleric Temperament Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Intelligence.'
    }
  },
  {
    id: InjuryId.CRUSHED_TOES,
    name: 'Crushed Toes',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain a Prosthetic Foot Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Brawn.'
    }
  },
  {
    id: InjuryId.CUT_ARTERY,
    name: 'Cut Artery',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Bleeder Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Brawn.'
    }
  },
  {
    id: InjuryId.DESTROYED_DIGITS,
    name: 'Destroyed Digits',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain a Prosthetic Hand Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Agility.'
    }
  },
  {
    id: InjuryId.HACKED_CALF_3,
    name: 'Hacked Calf',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Falling Sickness Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Agility.'
    }
  },
  {
    id: InjuryId.MANGLED_ORGAN,
    name: 'Mangled Organ',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the End of Line Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Fellowship.'
    }
  },
  {
    id: InjuryId.MAULED_LUGHOLE,
    name: 'Mauled Lughole',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Ruptured Eardrum Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Perception.'
    }
  },
  {
    id: InjuryId.MUTILATED_PALM,
    name: 'Mutilated Palm',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Butterfingers Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Agility.'
    }
  },
  {
    id: InjuryId.PENETRATED_GUT,
    name: 'Penetrated Gut',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Sour Stomach Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Brawn.'
    }
  },
  {
    id: InjuryId.PIERCED_STERNUM,
    name: 'Pierced Sternum',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Failing Heart Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Combat.'
    }
  },
  {
    id: InjuryId.PUNCTURED_CHEST,
    name: 'Punctured Chest',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Weak Lungs Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Willpower.'
    }
  },
  {
    id: InjuryId.RATTLED_BRAIN_3,
    name: 'Rattled Brain',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Melancholic Temperament Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Willpower.'
    }
  },
  {
    id: InjuryId.RIPPED_ELBOW,
    name: 'Ripped Elbow',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain a Prosthetic Joint Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Combat.'
    }
  },
  {
    id: InjuryId.RUPTURED_DISK,
    name: 'Ruptured Disk',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Hemiplegy Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Agility.'
    }
  },
  {
    id: InjuryId.SEVERED_TENDON,
    name: 'Severed Tendon',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Tendonitis Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Combat.'
    }
  },
  {
    id: InjuryId.SHATTERED_ORBIT,
    name: 'Shattered Orbit',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Missing Eye Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Perception.'
    }
  },
  {
    id: InjuryId.SLASHED_NOSE,
    name: 'Slashed Nose',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Split Face Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Fellowship.'
    }
  },
  {
    id: InjuryId.SMASHED_JAW,
    name: 'Smashed Jaw',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'You are Bleeding. A caretaker must Perform Surgery. If the surgery is failed or if 24 hours pass, you gain the Disfluency Permanent Injury. If you already have this Permanent Injury, you are Slain! instead. Until fully Recuperated, you suffer -9% Fellowship.'
    }
  },
  {
    id: InjuryId.HEADSHOT,
    name: 'Headshot!',
    type: InjuryTypeId.GRIEVOUS,
    labels: {
      effect: 'Leather, steel, blood & bone marks your doom. You are Slain!.'
    }
  },
];
