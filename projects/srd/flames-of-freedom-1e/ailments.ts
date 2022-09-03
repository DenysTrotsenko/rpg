import {Ailment} from './models';
import {AilmentId} from './enums';

export const AILMENTS: Ailment[] = [
  {
    id: AilmentId.AGUE,
    name: 'Ague',
    labels: {
      description: 'One thing I can tell you about the Great Dismal Swamp: it’s full of mosquitoes. And ever since I got back, I cannot seem to shake off these chills and fever...',
      resist: '(Easy +20%) Toughness',
      effect: 'At the beginning of each day, Resist Ague. Otherwise, suffer 1D10+1 Peril. If you don’t successfully Resist on the final day of infection, re-roll the duration as it’s extended.',
      critical_success: 'You automatically succeed in your next Toughness Test to Resist Ague.',
      critical_failure: 'Suffer 2D10+2 Peril instead.',
      other_considerations: 'NONE',
      duration: '1D10+1 days',
    }
  },
  {
    id: AilmentId.DOCK_FEVER,
    name: 'Dock Fever',
    labels: {
      description: 'We didn’t spend much time in Barbados. There must have been something in the wine there. Since then, I’m seeing fluffy pink bunnies everywhere and can’t concentrate at all...',
      resist: '(Routine +10%) Toughness',
      effect: 'At the beginning of each day, Resist Dock Fever. Otherwise, you are Incapacitated! for twenty-four hours. If you don’t successfully Resist on the final day of infection, re-roll the duration as it’s extended.',
      critical_success: 'You automatically succeed in your next Toughness Test to Resist Dock Fever.',
      critical_failure: 'You are Slain!.',
      other_considerations: 'NONE',
      duration: '1D10+1 days',
    }
  },
  {
    id: AilmentId.FRENCH_POX,
    name: 'French Pox',
    labels: {
      description: 'I’ve had this itch since visiting a brothel in Philadelphia, and hotpisswhenImakewater...',
      resist: '(Challenging -10%) Toughness',
      effect: 'At the beginning of each week, Resist French Pox. Otherwise, permanently lose -1% from Brawn.',
      critical_success: 'You automatically succeed in your next Toughness Test to Resist French Pox.',
      critical_failure: 'Permanently lose -3% from Brawn instead.',
      other_considerations: 'NONE',
      duration: 'Forever',
    }
  },
  {
    id: AilmentId.MALAISE,
    name: 'Malaise',
    labels: {
      description: 'Bursten. Camp Fever. Chin Cough. Gripe. Lung Fever. These are all the names that students know are commonly attributed to a general condition called Malaise. Now, open your manuals to page 245...',
      resist: '(Hard -20%) Toughness',
      effect: 'At the beginning of each day, Resist Malaise. Otherwise, temporarily reduce all Primary Attribute Bonuses by -1. If you don’t successfully Resist on the final day of infection, re-roll the duration as it’s extended.',
      critical_success: 'You automatically succeed your next Toughness Test to Resist Malaise.',
      critical_failure: 'Temporarily reduce all Primary Attribute Bonuses by -3 instead.',
      other_considerations: 'At the end of the duration, Primary Attribute Bonuses restore by +1 every twenty-four hours.',
      duration: '1D10+1 days',
    }
  },
  {
    id: AilmentId.MORSAL,
    name: 'Morsal',
    labels: {
      description: 'There’s an unearthly stench coming from this here wound. It’s been buzzing with gnats for days, and turning green... is this normal?',
      resist: '(Standard +/-0) Toughness',
      effect: 'At the beginning of each day, Resist Morsal. Otherwise, permanently reduce both your Damage Threshold and Peril Threshold by -1. If you don’t successfully Resist on the final day of infection, re-roll the duration as it’s extended. Alternatively, Morsal is instantly cured if you willingly take on one of these Permanent Injuries after Perform Surgery: Prosthetic Foot, Prosthetic Joint, Prosthetic Hand or Prosthetic Leg.',
      critical_success: 'You automatically succeed your next Toughness Test to Resist Morsal.',
      critical_failure: 'Morsal is instantly cured as gain one of these Permanent Injuries: Prosthetic Foot, Prosthetic Hand, Prosthetic Joint or Prosthetic Leg.',
      other_considerations: 'Morsal is contracted whenever you undergo a Critically Failed Bloodletting.',
      duration: '1D10+1 days',
    }
  },
  {
    id: AilmentId.SAINT_VITUS_DANCE,
    name: 'Saint Vitus Dance',
    labels: {
      description: 'I remember my auntie had it—she’d jerk and act strange all around the house. It eventually developed in me — I can’t control my hands and legs, and it gets worse in tough situations...',
      resist: '(Standard +/-0%) Toughness',
      effect: 'At the beginning of each week, Resist Saint Vitus Dance. Otherwise, whenever you fail to hit a foe in combat, you must re-roll to see if you hit the nearest ally. If successful, they cannot Defend or Resist it. If you don’t successfully Resist on the final day of infection, re-roll the duration as it’s extended.',
      critical_success: 'You automatically succeed your next Toughness Test to Resist Saint Vitus Dance.',
      critical_failure: 'Permanently lose -3% from Brawn instead.',
      other_considerations: 'NONE',
      duration: '1D10+1 weeks',
    }
  },
  {
    id: AilmentId.SEPSIS,
    name: 'Sepsis',
    labels: {
      description: 'I took a bullet to the knee, and then my wound started festering. Black blood, oozing and all that. Now, I can’t feel my toes...',
      resist: 'NONE',
      effect: 'See Bloodletting in Healing Practices.',
      critical_success: 'NONE',
      critical_failure: 'NONE',
      other_considerations: 'You cannot naturally recover from Sepsis. You must undergo Bloodletting to be cured of it.',
      duration: 'Until it is successfully treated by Bloodletting.',
    }
  },
  {
    id: AilmentId.SMALLPOX,
    name: 'Smallpox',
    labels: {
      description: 'The plague spread like wildfire through the settlement. At f irst, we thought it just the children, but once the adults started breaking out, we knew we were doomed...',
      resist: '(Arduous -30%) Toughness',
      effect: 'At the beginning of each day, Resist Smallpox. Otherwise, suffer 3D10+3 Peril. If you become Incapacitated! due to it, you remain Unconscious for the remainder of the duration. If you don’t successfully Resist on the final day of infection, re-roll the duration as it’s extended.',
      critical_success: 'You automatically succeed your next Toughness Test to Resist Smallpox.',
      critical_failure: 'You are Slain!.',
      other_considerations: 'NONE',
      duration: '1D10+1 days',
    }
  },
  {
    id: AilmentId.THROAT_DISTEMPER,
    name: 'Throat Distemper',
    labels: {
      description: 'I haven’t... been able to breathe right whatsoever since contracting ‘strangling angel.’ I thought... only children were susceptible to diphtheria, but... I guess not...',
      resist: '(Standard +/-0%) Toughness',
      effect: 'At the beginning of each day, Resist Throat Distemper. Otherwise, permanently lose -1% from Willpower. If you don’t successfully Resist on the final day of infection, re-roll the duration as it’s extended.',
      critical_success: 'You automatically succeed your next Toughness Test to Resist Throat Distemper.',
      critical_failure: 'Permanently lose -3% from Willpower instead.',
      other_considerations: 'NONE',
      duration: '1D10+1 days',
    }
  },
  {
    id: AilmentId.TYPHOID,
    name: 'Typhoid',
    labels: {
      description: 'There was a diphtheria outbreak and rumors of bloody flux reported from the riverside stews. I shouldn’t have eaten it, because I knew once I woke up with cramps and watery bowels, I had it, too...',
      resist: '(Trivial +30%) Toughness',
      effect: 'At the beginning of each day, Resist Typhoid. Otherwise, suffer 2D10+2 Peril. If you don’t successfully Resist on the final day of infection, re-roll the duration as it’s extended.',
      critical_success: 'You automatically succeed your next Toughness Test to Resist Typhoid.',
      critical_failure: 'You are Slain!.',
      other_considerations: 'NONE',
      duration: '1D10+1 days',
    }
  },
];
