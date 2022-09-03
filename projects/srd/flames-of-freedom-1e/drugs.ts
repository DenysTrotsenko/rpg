import {Drug} from './models';
import {DrugId} from './enums';

export const DRUGS: Drug[] = [
  {
    id: DrugId.ALCOHOL,
    name: 'Alcohol',
    labels: {
      description: 'And besides, I’ll instruct you like me, to entwine the myrtle of Venus with Bacchus’s vine! Here comes the barrel fever... bleurgh!',
      resist: 'For every hour you drink, make a Toughness Test. Depending on how many hours you’ve been drinking, the Difficulty Rating eases or worsens:\n• 1 hour: (Trivial +30%) Toughness\n• 2 hours: (Easy +20%) Toughness\n• 3 hours: (Routine +10%) Toughness\n• 4 hours: (Standard +/-0%) Toughness\n • 5 hours: (Challenging -10%) Toughness\n• 6 hours: (Hard -20%) Toughness\n• 7 hours or more: (Arduous -30%) Toughness',
      effect: 'When you succeed, you may continue drinking for another hour without any negative effects. If you fail, you’re Intoxicated. While Intoxicated, temporarily add +3 to Damage Threshold & Peril Thresholds, but immediately suffer 3D10+3 Peril.',
      critical_success: 'You may drink for three hours without becoming Intoxicated.',
      critical_failure: 'You are Incapacitated! and Unconscious for twelve hours.',
      other_considerations: 'This Drug cannot be applied to a weapon. You cannot recover your Damage & Peril Condition Tracks for twenty-four hours after being Intoxicated. Furthermore, if you become Incapacitated! while Intoxicated, you are Unconscious for twelve hours.',
      duration: 'Six hours',
    }
  },
  {
    id: DrugId.ARSENIC_OR_MERCURY,
    name: 'Arsenic or Mercury',
    labels: {
      description: 'This poison will cause heart palpitations if ingested . . . perfect for doing away with a lover whose money you wish to abscond with, or a political enemy you need out of the way.',
      resist: '(Hard -20%) Toughness',
      effect: 'You temporarily suffer a -6 to all Primary Attribute Bonuses (to a minimum of 1) and 2D10+2 Peril.You must also attempt to Resist again every twenty-four hours, or else suffer the effects again. If you are Incapacitated! due to Arsenic or Mercury, you’re Slain!. Your Primary Attribute Bonuses recover +1 a day until fully restored.',
      critical_success: 'You are now permanently immune to Arsenic or Mercury.',
      critical_failure: 'You are Slain!.',
      other_considerations: 'Arsenic and Mercury cannot be discovered when placed in food or drink. Use of an Antidote allows you to immediately recover all Primary Attribute Bonuses.',
      duration: '1D10+1 days',
    }
  },
  {
    id: DrugId.COCOA,
    name: 'Cocoa',
    labels: {
      description: 'When on the road, these leaves will cessate hunger’s pang and help you maintain a steady pace. We harvest them for this very reason, and they are a staple of our diet.',
      resist: 'NONE',
      effect: 'You immediately move up the Peril Condition Track from Imperiled to Unhindered. In addition, you can ignore the effects of Starvation for six hours.',
      critical_success: null,
      critical_failure: null,
      other_considerations: 'This Drug cannot be applied to a weapon. You can only gain the benefits of chewing Cocoa once every twenty-four hours.',
      duration: 'Instantaneous',
    }
  },
  {
    id: DrugId.COFFEE_OR_TEA,
    name: 'Coffee or Tea',
    labels: {
      description: 'The coffee bean and tea leaf may be one of the New World’s smartest innovations—ensures a proper morning constitutional, keeps one awake and happy. It is the best part of waking up, after all.',
      resist: 'NONE',
      effect: 'You immediately move up the Peril Condition Track from Imperiled to Unhindered. In addition, you can ignore the effects of Sleep Deprivation for six hours.',
      critical_success: null,
      critical_failure: null,
      other_considerations: 'This Drug cannot be applied to a weapon. You can only gain the benefits of drinking Coffee once every twenty-four hours.',
      duration: 'Instantaneous',
    }
  },
  {
    id: DrugId.CYANIDE,
    name: 'Cyanide',
    labels: {
      description: 'Bitter almonds, cherry blossoms and a bit of ammonia, the fumes are dangerous, yes... but it is the most powerful drug.',
      resist: '(Arduous -30%) Toughness',
      effect: 'You immediately suffer a -9 to all Primary Attribute Bonuses (to a minimum of 1) and 3D10+3 Peril. If you are Incapacitated! due to it, you’re Slain!. Your Primary Attribute Bonuses recover +1 a day until fully restored.',
      critical_success: 'You are now permanently immune to Cyanide.',
      critical_failure: 'You are Slain!.',
      other_considerations: 'Before being drugged by Cyanide, you can attempt an (Arduous -30%) Awareness Test to discover that you’re being drugged. Use of an Antidote allows you to immediately recover all Primary Attribute Bonuses.',
      duration: 'Instantaneous',
    }
  },
  {
    id: DrugId.ERGOT,
    name: 'Ergot',
    labels: {
      description: 'Using a simple fungus, we can create a drug that can help with menstruation, cause a reddish outbreak on the skin or Saint Anthony’s Fire. Medicine in strong enough doses is poison, after all.',
      resist: '(Standard +/-0%) Toughness',
      effect: 'You must flip the results to fail vision-based Skill Tests. You must also attempt to Resist again every twenty-four hours, or else suffer the effects again.',
      critical_success: 'You are now permanently immune to Ergot.',
      critical_failure: 'You treat lighting conditions as Total Darkness for twenty-four hours.',
      other_considerations: 'Before being drugged by Ergot, you can attempt a (Standard +/0%) Awareness Test to discover that you’re being drugged.The use of an Antidote terminates its effects.',
      duration: '1D10+1 days',
    }
  },
  {
    id: DrugId.HEMLOCK,
    name: 'Hemlock',
    labels: {
      description: 'Made from a pretty plant with a purple-spotted stem and fern-like leaves, its small white flowers give off an unpleasant aroma... one that’s easy to detect.',
      resist: '(Challenging -10%) Toughness',
      effect: 'You immediately move two steps down the Damage Condition Track negatively. You do not suffer standard Injuries from Hemlock. Roll Chaos Dice as you normally would, but if any land on face ‘6,’ you are Slain!. You also cannot recover your Damage & Peril Condition Tracks during this time. You must also attempt to Resist again every twenty-four hours, or else suffer the effects again.',
      critical_success: 'You are now permanently immune to Hemlock.',
      critical_failure: 'You are Slain!.',
      other_considerations: 'Before being drugged by Hemlock, you can attempt a (Challenging -10%) Awareness Test to discover that you’re being drugged. Use of an Antidote terminates its effects, but won’t heal your Damage Condition Track.',
      duration: '1D10+1 days',
    }
  },
  {
    id: DrugId.OPIUM,
    name: 'Opium',
    labels: {
      description: 'When processed, opium can be used as a painkiller. For us, however, it expands our minds and allows us to forget the drudgeries of life.',
      resist: 'NONE',
      effect: 'After ingestion, you are Unconscious. However, your Peril Condition Track is restored to Unharmed.',
      critical_success: '',
      critical_failure: '',
      other_considerations: 'This Drug cannot be applied to a weapon. You can only take Opium once every twenty- four hours. Using it more than once causes you to move one step down the Peril Condition Track negatively.',
      duration: 'One hour',
    }
  },
  {
    id: DrugId.TOBACCO_OR_SNUFF,
    name: 'Tobacco or Snuff',
    labels: {
      description: 'I read, “The fumes purge gross humors and superfluous phlegm from the body by opening all the pores and passages”—’tis healthy, I assure you!',
      resist: 'NONE',
      effect: 'You immediately gain +10% Base Chance to Charm, Intimidate and Rumor Tests. However, if you suffer from Stress, Fear or Terror within the next twenty- four hours, you must use Tobacco again or else gain three additional Conflict.',
      critical_success: '',
      critical_failure: '',
      other_considerations: 'This Drug cannot be applied to a weapon.',
      duration: 'One hour',
    }
  },
  {
    id: DrugId.YUPA,
    name: 'Yupa',
    labels: {
      description: 'I have been to the spirit realm where all ancestors live in eternity. I have conversed with them, and they speak of the Mandoag — the shadow people who shall consume the land.',
      resist: 'NONE',
      effect: 'An hour after ingestion, you suffer a -3 to all Primary Attribute Bonuses (to a minimum of 1) and 1D10+1 Peril. If you are Incapacitated! due to Yupa, you’re Unconscious. While on Yupa, you gain a Vision. A Vision allows you to automatically succeed in any one Skill Test that pertains to your Flaw within the next month. Your Primary Attribute Bonuses recover +1 an hour until fully restored.',
      critical_success: '',
      critical_failure: '',
      other_considerations: 'This Drug cannot be applied to a weapon. The Vision cannot be gained more than once a month.You cannot recover your Damage & Peril Condition Tracks for twenty-four hours after gaining a Vision.',
      duration: '1D10+1 hours',
    }
  },
];
