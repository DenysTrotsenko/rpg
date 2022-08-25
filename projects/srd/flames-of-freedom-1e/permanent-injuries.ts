import {PermanentInjury} from '@flames-of-freedom-1e/models';
import {PermanentInjuryId} from '@flames-of-freedom-1e/enums';

export const PERMANENT_INJURIES: PermanentInjury[] = [
  {
    id: PermanentInjuryId.BLEEDER,
    name: 'Bleeder',
    labels: {
      description: 'Some folks inherit this disease. As for me, something just never sat right after I got looked after by a Barber. I tend to sputter blood when things go amiss.',
      effect: 'Whenever you are treated with the Heal Skill, a caregiver suffers an additional -20% Base Chance unless they expend an additional bandage during treatment.'
    }
  },
  {
    id: PermanentInjuryId.BUTTERFINGERS,
    name: 'Butterfingers',
    labels: {
      description: 'Look at this scar, right down the middle of my palm! It’s nasty, isn’t it? Ever since I suffered it, I’ve become a bit of a Nervous Nellie.',
      effect: 'Whenever you suffer from Stress, Fear or Terror, you immediately drop whatever you are holding. In addition, when you suffer from Bleeding or an Injury, you must succeed a Toughness Test or else drop what you’re holding.'
    }
  },
  {
    id: PermanentInjuryId.CHOLERIC_TEMPERAMENT,
    name: 'Choleric Temperament',
    labels: {
      description: 'Look — I know what’s best for us. I’ve taken us to the limit and know where my pain threshold starts and stops. If you don’t come along with me, you’ll have hell to pay!',
      effect: 'Whenever you deal Damage and don’t inflict an Injury upon your foe, you gain 1 Conflict.'
    }
  },
  {
    id: PermanentInjuryId.DISFLUENCY,
    name: 'Disfluency',
    labels: {
      description: '“When the chips are down,” as they say, I tend to get a little more than agitated. If not only because I have difficulty forming words, but because no one can seem to understand me when I am being perfectly clear!',
      effect: 'You must flip the results to fail all Skill Tests that rely on your ability to barter, bargain or strike monetary deals in your favor.'
    }
  },
  {
    id: PermanentInjuryId.END_OF_LINE,
    name: 'End Of Line',
    labels: {
      description: 'I’ve taken a terrible blow to the very center of my bloodline; thus, it has ended. I may or may not care about passing on my lineage, but the sting still pains me to this day.',
      effect: 'You are unable to have children.'
    }
  },
  {
    id: PermanentInjuryId.FAILING_HEART,
    name: 'Failing Heart',
    labels: {
      description: 'My blood stirs slowly, and I have to be cautious about everything I do. Should I push too much, I am afraid I’ll die in the worst of ways.',
      effect: 'Whenever you fail to Resist against Stress, Fear or Terror, you gain 3 additional Conflict.'
    }
  },
  {
    id: PermanentInjuryId.FALLING_SICKNESS,
    name: 'Falling Heart',
    labels: {
      description: 'You know that feeling you get when you’re sweet on someone? Well, I get that. A lot. I get jittery and have to take a breath to calm myself.',
      effect: 'Whenever you fail to Resist Stress, Fear or Terror, you temporarily reduce your Initiative and Movement by -3. This lasts until you get a good night’s rest.'
    }
  },
  {
    id: PermanentInjuryId.HEADMOULD_SHOT,
    name: 'Headmould Shot',
    labels: {
      description: 'I used to be a soldier like you until I took a wallop to the head. The migraines never seem to go away, so please be patient with me... it takes a minute to compose my thoughts.',
      effect: 'Whenever you suffer Peril, move one additional step down the Peril Condition Track negatively while gaining 1 Conflict.'
    }
  },
  {
    id: PermanentInjuryId.HEMIPLEGY,
    name: 'Hemiplegy',
    labels: {
      description: 'Sometimes my back gives way to what I like to call ‘the molasses.’ I have a hard time getting started, and the pain is so incredible, I have to take a moment to get up and goin’.',
      effect: 'Whenever your Turn starts in combat, make a Resolve Test. If failed, you refresh 1 fewer AP.'
    }
  },
  {
    id: PermanentInjuryId.MELANCHOLIC_TEMPERAMENT,
    name: 'Melancholic Temperament',
    labels: {
      description: 'Admittedly, it’s hard to really care about anything. If it weren’t for all this constant pain in my back, I’d likely spend my days in bed.',
      effect: 'Whenever you Use Laudanum, you must use two instead of one. Using additional laudanum in this instance has no negative effects.'
    }
  },
  {
    id: PermanentInjuryId.MISSING_EYE,
    name: 'Missing Eye',
    labels: {
      description: 'Don’t be afraid, it’s just an eye, after all. “You mess with the bull,” as they say, “you get the horns.” But I got my payback — they won’t be coming back for revenge, rest assured.',
      effect: 'You must flip the results to fail all Perception-based Skill Tests.'
    }
  },
  {
    id: PermanentInjuryId.PHLEGMATIC_TEMPERAMENT,
    name: 'Phlegmatic Temperament',
    labels: {
      description: 'You see that thing over there? There’s no chance I’m going near it...',
      effect: 'Whenever you are suffering from Stress, Fear or Terror, your Fury Dice do not explode. This lasts until you go to Sleep.'
    }
  },
  {
    id: PermanentInjuryId.PLANET_STRUCK,
    name: 'Planet-Struck',
    labels: {
      description: 'The movement of the stars has affected us so. I’ve seen the horrors that have been wrought by humankind’s hand, and the vault of night will foretell of our doom...',
      effect: 'Whenever you fail to Resist Stress, Fear or Terror, you temporarily reduce your Initiative and Movement by -3. This lasts until you get a good night’s rest.'
    }
  },
  {
    id: PermanentInjuryId.PROSTHETIC_FOOT,
    name: 'Prosthetic Foot',
    labels: {
      description: 'It was an unfortunate accident, yes, but I’ve learned to live with a missing foot. I sort of like the noise it makes when I walk; makes me sound taller than I am!',
      effect: 'You must spend a Coin to Charge and Maneuver.'
    }
  },
  {
    id: PermanentInjuryId.PROSTHETIC_HAND,
    name: 'Prosthetic Hand',
    labels: {
      description: 'I lost my hand in a pretty nasty fight. As you can see, however, with a combination of straps, wooden digits and other mechanics, I still have use of it.',
      effect: 'You must spend a Coin to attack with a two-handed melee weapon.'
    }
  },
  {
    id: PermanentInjuryId.PROSTHETIC_JOINT,
    name: 'Prosthetic Joint',
    labels: {
      description: 'My elbow and forearm never quite healed upright. I suppose I should have followed the doctor’s orders and done my exercises...',
      effect: 'You must spend a Coin to Assist others’ Skill Tests.'
    }
  },
  {
    id: PermanentInjuryId.PROSTHETIC_LEG,
    name: 'Prosthetic Leg',
    labels: {
      description: 'I didn’t blame anyone for the loss of my leg. I’ve paid my dues and made the ultimate sacrifice!',
      effect: 'You must spend a Coin to Charge, Maneuver and Run.'
    }
  },
  {
    id: PermanentInjuryId.RUPTURED_EARDRUM,
    name: 'Ruptured Eardrum',
    labels: {
      description: 'It was an unfortunate accident; I guess I wasn’t paying attention. I was watching one way, and they came from around the corner... wait, what did you say?',
      effect: 'You must flip the results to fail all Skill Tests that rely on hearing.'
    }
  },
  {
    id: PermanentInjuryId.SANGUINE_TEMPERAMENT,
    name: 'Sanguine Temperament',
    labels: {
      description: 'Maybe it was my brush with death, but I feel more alive than ever. Admittedly, it’s made me a bit jittery — ignore my jimmy leg and unsteady hands; I am just so excited to see you!',
      effect: 'You cannot Fire Through Cover, Load or Take Aim without spending an additional AP. In addition, whenever you use the Special Action of Wait, you lose 1 AP.'
    }
  },
  {
    id: PermanentInjuryId.SOUR_STOMACH,
    name: 'Sour Stomach',
    labels: {
      description: 'Ever since I took some lead to my belly, I cannot keep down ‘rich’ food. It just upsets my tummy. Laudanum doesn’t seem to really help, either.',
      effect: 'After drinking alcohol, using drugs, laudanum, poisons, smelling salt, injecting tincture or consuming substances the Historian sees as being hard on your stomach, you cannot recover to Unhindered on the Peril Condition Track (only to Imperiled) for the next twenty-four hours.'
    }
  },
  {
    id: PermanentInjuryId.SPLIT_FACE,
    name: 'Split Face',
    labels: {
      description: 'My nose may be broken and lip cleft, but I’m still considered handsome. After all, I got this pretty smile now to greet others who find me attractive, and a right grimace on my face to welcome my enemies.',
      effect: 'You must flip the results to fail all Skill Tests which rely on smell and taste.'
    }
  },
  {
    id: PermanentInjuryId.TENDONITIS,
    name: 'Tendonitis',
    labels: {
      description: 'I can’t hold this here musket up for too long, else I’d drop it. I also cannot draw the bowstring back like when I was a young ’un.',
      effect: 'You cannot take advantage of Extreme or Long Distances with ranged weapons.'
    }
  },
  {
    id: PermanentInjuryId.WEAK_LUNGS,
    name: 'Weak Lungs',
    labels: {
      description: 'Whew! It’s sometimes... tough... to keep... up with you all. Just give me a moment to catch my breath...',
      effect: 'Whenever you suffer Peril from physical activities, move one additional step down the Peril Condition Track negatively while suffering 1 Conflict.'
    }
  }
];
