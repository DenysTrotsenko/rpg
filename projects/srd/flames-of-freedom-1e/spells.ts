import {Spell} from './models';
import {SpellId, SpellTypeId, TierId} from '@flames-of-freedom-1e/enums';

/* tslint:disable:max-line-length */
export const SPELLS: Spell[] = [
  {
    id: SpellId.BABBLEBOOK,
    name: 'Babblebook',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'The great Gotthilf first recorded this Spell in their grimoire Words of Power & Faith...',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'Drops of your own blood, ink and pages you write onto',
      effect: 'After successfully casting, a number of pages you draw or write onto equal to 3+[WB] are Encrypted. While Encrypted, they cannot be read by anyone but you and one other person you name while casting. You begin to Bleed, no matter whether you succeeded or failed at using this Spell.',
      critical_success: 'You do not Bleed.',
      critical_failure: 'The pages are instantly incinerated, as you suffer 1D10+1 Damage from fire.',
      duration: 'Until read by you or another person you selected that can read the Encryption'
    }
  },
  {
    id: SpellId.BLUDGEON_WITH_ELEMENTS,
    name: 'Bludgeon With Elements',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Begone, foul thing!',
      casting_time: 'One minute (1 AP)',
      distance: 'Any one foe you can see clearly',
      reagents: 'A breath of air, a pebble, a match or water skin—depending on the element (expended)',
      effect: 'Select one element: air, earth, fire or water. After successfully casting, a foe suffers one of the following Combat Conditions, unable to Defend or Resist its effects:\nAIR (Gutted): Must spend 1 additional AP for Movement Actions until the end of combat.\nEARTH (Strained): Must spend 1 additional AP for Attack Actions until the end of combat.\nFIRE (Intimidated): Suffer -1 to Damage Threshold & Peril Threshold until the end of combat.\nWATER (Disoriented): Must spend 1 additional AP for Reactions until the end of combat.',
      critical_success: 'The foe also drops one object either in hand or from their side 3 yards away.',
      critical_failure: 'You suffer the Combat Condition instead and drop one object either in hand or from your side 3 yards away.',
      duration: 'Until the end of combat'
    }
  },
  {
    id: SpellId.CONCEAL_TRACKS,
    name: 'Conceal Tracks',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'At first you see me, now you don’t...',
      casting_time: 'One minute (2 AP)',
      distance: 'Yourself',
      reagents: 'Your own muddy or wet footwear',
      effect: 'After successfully casting, you do not leave footprints or any trace of your passing.',
      critical_success: 'Triple the duration.',
      critical_failure: 'You leave a glowing trail in your wake, one that can be easily discovered.',
      duration: '6+[WB] minutes'
    }
  },
  {
    id: SpellId.COOL_BODY,
    name: 'Cool Body',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'I call forth an element of frost to bring us comfort in the heat...',
      casting_time: 'Nine minutes',
      distance: 'By touch',
      reagents: 'A wet towel, dabbed on allies’ heads while incanting',
      effect: 'After successfully casting, up to [WB] allies can ignore the negative effects of warm weather, also avoiding Heatstroke.',
      critical_success: 'Up to 6x your [WB] allies are affected.',
      critical_failure: 'The allies you touched experience hot flashes over the duration, as they suffer 2D10+2 Peril every hour.',
      duration: '6+[WB] hours'
    }
  },
  {
    id: SpellId.DEATH_SEAL,
    name: 'Death Seal',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'This mausoleum shall never be trespassed against, lest the intruders risk elemental wrath . . .',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'Any monument to the dead (such as a coffin, grave or undercroft), sealed with your own blood',
      effect: 'After successfully casting, the monument you touched cannot be broken or opened by normal means. You begin to Bleed, no matter whether you succeeded or failed at using this Spell.',
      critical_success: 'You do not Bleed.',
      critical_failure: 'The monument and its contents explode, causing 3D10+3 Damage from fire.',
      duration: 'Forever'
    }
  },
  {
    id: SpellId.DISCERN_PERSONA,
    name: 'Discern Persona',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Do not toy with me, for I see who you really are . . .',
      casting_time: 'One minute (1 AP)',
      distance: 'By touch',
      reagents: 'A glass or metal receptacle with a closing lid',
      effect: 'After successfully casting, you immediately learn the Disposition of one person you can clearly see and hear.',
      critical_success: 'In addition, you can discern whether they are being truthful or telling lies when you speak with them directly.',
      critical_failure: 'You are unable to tell the truth, and it is apparent to everyone who interacts with you.',
      duration: 'One hour'
    }
  },
  {
    id: SpellId.DIVINE_BREATH,
    name: 'Divine Breath',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'We shall be delivered from pain’s threshold . . .',
      casting_time: 'Three hours',
      distance: 'By touch',
      reagents: 'A fire, which you use to breathe its smoke inward to exhale over the wounded',
      effect: 'After successfully casting, you move a person one step up the Damage & Peril Condition Tracks positively.',
      critical_success: 'They are moved two steps up instead.',
      critical_failure: 'As you blow the smoke over them, they fall Asleep and experience strange dreams. When awakening six hours later, they are Incapacitated! and gain 3 Conflict.',
      duration: 'Instantaneous'
    }
  },
  {
    id: SpellId.EVERGREEN,
    name: 'Evergreen',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'The earth laughs in flowers . . .',
      casting_time: 'One minute (2 AP)',
      distance: 'By touch',
      reagents: 'Any plant you touch and a pinprick of your own blood',
      effect: 'After successfully casting, a number of plants equal to 6+[WB] cannot wither or die through normal means, remaining perfectly preserved.',
      critical_success: 'You can cast Evergreen on 9+[WB] plants instead.',
      critical_failure: 'The plants immediately die, and the earth where they grew is salted forever, as nothing can grow there ever again.',
      duration: '6+[WB] days'
    }
  },
  {
    id: SpellId.EYES_OF_THE_EAGLE,
    name: 'Eyes Of The Eagle',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'The Quaker Phillip Masters taught me this Spell . . .',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'A feather, plucked from a live eagle (expended)',
      effect: 'After successfully casting, increase Distance by 3+[WB].',
      critical_success: 'It also grants the ability to see in the dark.',
      critical_failure: 'An eagle screams overhead as it attacks you. The Historian will use the Eagle entry from Article 14: Threats.',
      duration: '3+[WB] minutes'
    }
  },
  {
    id: SpellId.FIRES_WARMTH,
    name: 'Fire\'s Warmth',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'I shall call an elemental spirit to warm our bodies and spirits...',
      casting_time: 'Nine minutes',
      distance: 'By touch',
      reagents: 'A piece of charcoal, rubbed on allies’ heads (expended)',
      effect: 'After successfully casting, up to [WB] allies can ignore the negative effects of cold weather, also avoiding Frostbite.',
      critical_success: 'Up to 6x your [WB] allies are affected.',
      critical_failure: 'The allies affected suffer 2D10+2 Peril every hour.',
      duration: '6+[WB] hours'
    }
  },
  {
    id: SpellId.FISHS_BREATH,
    name: 'Fish\'s Breath',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'I first read about this Spell in an old grimoire...',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'A freshly caught fish, cooked and eaten (expended)',
      effect: 'After successfully casting, one ally who ate the fish can breathe underwater.',
      critical_success: 'Up to 6 allies are affected.',
      critical_failure: 'The ally who ate the fish begins to Suffocate on the bones.',
      duration: '6+[WB] minutes'
    }
  },
  {
    id: SpellId.FORM_OF_CLOUD,
    name: 'Form Of Cloud',
    tier: TierId.ADVANCED,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'I join my body with the elemental spirits of air and water, transmogrifying into mist...',
      casting_time: 'One minute (3 AP)',
      distance: 'Yourself',
      reagents: 'A glass or metal receptacle with a closing lid',
      effect: 'After successfully casting,you turn into mist,unable to be harmed by normal means. You may pass through cracks, keyholes and other tight confines. You can also hover 3 yards above the ground and take on a Movement of 12+[AB] in combat. However, your trappings do not change into a mist, nor can you speak in this form or cast spells. When you turn into human form, the Spell ends.',
      critical_success: 'Triple the duration.',
      critical_failure: 'Your body turns to mist for a moment, then immediately back to flesh. You suffer 3D10+3 Damage, but do not suffer Injuries due to it.',
      duration: '9+[WB] minutes'
    }
  },
  {
    id: SpellId.INSPIRING_HOMILY,
    name: 'Inspiring Homily',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Together, we can achieve anything because the holy word inspires us...',
      casting_time: 'One hour',
      distance: 'Special',
      reagents: 'Orate a religious lesson, sermon or story',
      effect: 'After successfully casting, a number of allies equal to 3+[WB] who listen to you gain +10% Base Chance to Defend and Resist.',
      critical_success: 'Up to 3x your [WB] allies are affected.',
      critical_failure: 'Your homily is poorly told, as up to 3x your [WB] allies suffer a -10% Base Chance to Skill Tests to Defend and Resist.',
      duration: '3+[WB] hours'
    }
  },
  {
    id: SpellId.LIQUID_COURAGE,
    name: 'Liquid Courage',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Jolly mortals, fill your glasses, let us drink and be merry . . .',
      casting_time: 'Six minutes',
      distance: 'By touch',
      reagents: 'A pitcher of alcohol that you touch before singing a song',
      effect: 'After successfully casting, anyone who drinks the alcohol gains +10% Base Chance to Skill Tests to withstand Stress, Fear and Terror.',
      critical_success: 'You can also affect an entire barrel of alcohol.',
      critical_failure: 'Everyone who drinks is immediately Intoxicated for six hours.',
      duration: '3+[WB] hours'
    }
  },
  {
    id: SpellId.PETITION_THE_MOUNTAIN,
    name: 'Petition The Mountain',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Hear me, ancient elements, lend me your strength . . .',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'An expensive or rare gemstone that you crush (expended)',
      effect: 'After successfully casting, the person you touch cannot be made to Bleed or suffer Moderate Injuries.',
      critical_success: 'They do not suffer Serious Injuries, either.',
      critical_failure: 'The gemstone shards pierce your hand, as you suffer 1D10+1 Damage and one random Moderate Injury.',
      duration: '3+[WB] hours'
    }
  },
  {
    id: SpellId.PETRIFY_OTHER,
    name: 'Petrify Others',
    tier: TierId.ADVANCED,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Hark! Know that I command the spirits of the earth, and you shall know their wrath...',
      casting_time: 'One minute (3 AP)',
      distance: 'Any person who can see you clearly',
      reagents: 'A preserved cat’s eye, held in hand',
      effect: 'After successfully casting (and one foe cannot or fails to Resist using Toughness), your target is Petrified. While Petrified, the person cannot talk or move, cannot be made to bleed, and cannot suffer Damage (by normal means) or Injuries due to it.',
      critical_success: 'The person cannot Resist this Spell.',
      critical_failure: 'You are Petrified, unable to Resist the Spell.',
      duration: '9+[WB] hours'
    }
  },
  {
    id: SpellId.PRESERVATION,
    name: 'Preservation',
    tier: TierId.ADVANCED,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'An ancient spell, this has been used to preserve many musty tomes, including my own...',
      casting_time: 'Twenty-four hours',
      distance: 'By touch',
      reagents: 'Any inanimate object smaller than a child, such as a grimoire, piece of clothing or scrap of wood',
      effect: 'After successfully casting, one inanimate object is perfectly preserved, unable to be destroyed by normal means. This means it is proofed against fire, heat, rain and other natural elements the Historian feels it should appropriately be immune to. It also cannot be destroyed by normal means. If the target object is a weapon, it is now treated as if it were Superior in Grade.',
      critical_success: 'You can cast Preservation on three objects instead.',
      critical_failure: 'The inanimate object immediately crumbles to dust.',
      duration: 'Forever'
    }
  },
  {
    id: SpellId.QUICKEN_BLOOD,
    name: 'Quicken Blood',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'You shall move like the zephyr . . .',
      casting_time: 'One minute (1 AP)',
      distance: 'By touch',
      reagents: 'Orate and give commentary on a religious lesson',
      effect: 'After successfully casting, the ally may increase their Movement and Initiative by +3.',
      critical_success: 'They also gain 1 additional AP on their Turn in combat.',
      critical_failure: 'The ally feels sluggish, as they must reduce their Movement and Initiative by -3, and begins their Turn with 1 less AP.',
      duration: '3+[WB] minutes'
    }
  },
  {
    id: SpellId.RAINFALL,
    name: 'Rainfall',
    tier: TierId.ADVANCED,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'We pray to the heavens that this parched earth shall drink once again...',
      casting_time: 'One hour',
      distance: 'Any place you can see clearly',
      reagents: 'A chant, dance or ritual that would urge rain to fall from the sky',
      effect: 'After successfully casting, you conjure forth rainy weather. Based on your [WB], the strength of the weather produces the following effects in combat:\n[WB] 1 to 6: Light Obscurement (light rain), reduces foe’s Movement by -1.\n[WB] 7 to 12: Medium Obscurement (thunderstorm), reduces foe’s Movement by -2.\n[WB] 13+: Heavy Obscurement (sleet), reduces foe’s Movement by -3.',
      critical_success: 'Choose the strength of the weather instead.',
      critical_failure: 'Acidic rain will fall for 9+[WB] days in the area, killing all plants.',
      duration: '9+[WB] days'
    }
  },
  {
    id: SpellId.RAISE_THE_ALARM,
    name: 'Raise The Alarm',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Warning, intruder alert!',
      casting_time: 'One minute (1 AP)',
      distance: 'By touch',
      reagents: 'Any object, such as a chest, door, plant or rock',
      effect: 'After successfully casting, any person other than you who passes by the object you touched immediately announces any three words you select, using any language you speak. The alarm can be as soft as a whisper, at normal volume or as a yell. Once triggered, the Spell ends.',
      critical_success: 'As above, but Raise The Alarm’s Spell never ends. It can be dispelled, though.',
      critical_failure: 'You experience intestinal discomfort, suffering 2D10+2 Peril due to it.',
      duration: 'Until triggered'
    }
  },
  {
    id: SpellId.SPIRIT_OF_THE_WOOD,
    name: 'Spirit Of The Wood',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Ancient forests, elder trees—I beseech thee to stand aside...',
      casting_time: 'One minute (3 AP)',
      distance: 'Burst Template, extending from a copse of trees you can clearly see',
      reagents: 'A freshly cut green branch that you twist until snapped (expended)',
      effect: 'After successfully casting (and those caught in a Burst Template cannot or fail to Resist using Coordination), they are Entangled. Entangled people cannot use any Actions In Combat, except to Resist Entanglement. If they start their Turn in the Burst Template, they must Resist once again. Alternatively, you can use this Spell to command trees to bend their branches down to be easily climbed, or move branches to create a clear path.',
      critical_success: 'Reference an Explosion Template instead.',
      critical_failure: 'The forest grows wildly around, as you and all others within an Explosion Template must Resist being Entangled.',
      duration: '6+[WB] minutes'
    }
  },
  {
    id: SpellId.STRIKE_TRUE,
    name: 'Strike True',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'I’ve ensorcelled this bullet never to miss; don’t lose it...',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'Drops of your own blood, placed on a single piece of ammunition',
      effect: 'After successfully casting, the ammunition you touch is considered to be Magical, and will automatically Critically Succeed to hit a foe once fired. After being fired, the ammunition is destroyed. You begin to Bleed, no matter whether you succeeded or failed at using this Spell. You can cast this Spell upon a number of ammunition equal to the number of Skill Ranks in Incantation you have. Finally, you cannot cast Strike True more than once every twenty-four hours.',
      critical_success: 'As above, but you can cast Strike True on nine ammunition instead.',
      critical_failure: 'The ammunition is cursed instead, and disappears into whichever ammunition pack it’s intended for. The Historian may spend a Coin before or after an attack has been made to have the ammunition fail, returning to the attacker to Critically Strike them instead.',
      duration: 'Until fired'
    }
  },
  {
    id: SpellId.THUNDER_CLAP,
    name: 'Thunder Clap',
    tier: TierId.ADVANCED,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'French military mages developed this magic; I, however, have claimed it as my own...',
      casting_time: 'One minute (3 AP)',
      distance: 'Cone Template, extending from you',
      reagents: 'Clap your hands together, or clap one hand with another person',
      effect: 'After successfully casting (and those caught in a Cone Template cannot or fail to Resist using Toughness), foes are Surprised by all Actions In Combat, until combat ends.',
      critical_success: 'As above, but they cannot Resist.',
      critical_failure: 'You are momentarily Deafened, and foes gain the advantage of Surprise against you until the end of combat.',
      duration: 'Special'
    }
  },
  {
    id: SpellId.WINDS_GRACE,
    name: 'Wind\'s Grace',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'A breath of spring to restore your aches and pains...',
      casting_time: 'One minute (1 AP)',
      distance: 'By touch',
      reagents: 'A bottle of spring air, which you inhale and exhale over an Injured ally',
      effect: 'After successfully casting, one ally reduces the time to Recuperate from one Injury by three days.',
      critical_success: 'They reduce the time to Recuperate from all Injuries by nine days instead.',
      critical_failure: 'The wind blows you over, as you suffer 1D10+1 Damage, but do not suffer Injuries due to it.',
      duration: 'Instantaneous'
    }
  },
  {
    id: SpellId.WITHDRAW_SICKNESS,
    name: 'Withdraw Sickness',
    tier: TierId.ADVANCED,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'I dispel thee, foul disease...',
      casting_time: 'Twenty-four hours',
      distance: 'By touch',
      reagents: 'A glass or metal receptacle with a closing lid',
      effect: 'After successfully casting, you remove an Ailment or other sickness from a threat, person or plant. It is then contained as a black liquid inside the receptacle. If the receptacle is opened, it can be released upon a threat, person or plant it is poured upon as they are infected with the Ailment.',
      critical_success: 'It also restores any lost Damage, Peril and temporary Primary Attribute penalties lost due to the Ailment.',
      critical_failure: 'You now suffer from the Ailment.',
      duration: 'Instantaneous'
    }
  },
  // {
  //   id: SpellId.,
  //   name: '',
  //   tier: TierId.,
  //   type: SpellTypeId.BLACK_AND_WHITE,
  //   labels: {
  //     description: '',
  //     casting_time: '',
  //     distance: '',
  //     reagents: '',
  //     effect: '',
  //     critical_success: '',
  //     critical_failure: '',
  //     duration: ''
  //   }
  // },
  // {
  //   id: SpellId.,
  //   name: '',
  //   tier: TierId.,
  //   type: SpellTypeId.BLACK_AND_WHITE,
  //   labels: {
  //     description: '',
  //     casting_time: '',
  //     distance: '',
  //     reagents: '',
  //     effect: '',
  //     critical_success: '',
  //     critical_failure: '',
  //     duration: ''
  //   }
  // },
  // {
  //   id: SpellId.,
  //   name: '',
  //   tier: TierId.,
  //   type: SpellTypeId.BLACK_AND_WHITE,
  //   labels: {
  //     description: '',
  //     casting_time: '',
  //     distance: '',
  //     reagents: '',
  //     effect: '',
  //     critical_success: '',
  //     critical_failure: '',
  //     duration: ''
  //   }
  // },
  // {
  //   id: SpellId.,
  //   name: '',
  //   tier: TierId.,
  //   type: SpellTypeId.BLACK_AND_WHITE,
  //   labels: {
  //     description: '',
  //     casting_time: '',
  //     distance: '',
  //     reagents: '',
  //     effect: '',
  //     critical_success: '',
  //     critical_failure: '',
  //     duration: ''
  //   }
  // },
  // {
  //   id: SpellId.,
  //   name: '',
  //   tier: TierId.,
  //   type: SpellTypeId.BLACK_AND_WHITE,
  //   labels: {
  //     description: '',
  //     casting_time: '',
  //     distance: '',
  //     reagents: '',
  //     effect: '',
  //     critical_success: '',
  //     critical_failure: '',
  //     duration: ''
  //   }
  // },
  // {
  //   id: SpellId.,
  //   name: '',
  //   tier: TierId.,
  //   type: SpellTypeId.COMMON,
  //   labels: {
  //     description: '',
  //     casting_time: '',
  //     distance: '',
  //     reagents: '',
  //     effect: '',
  //     critical_success: '',
  //     critical_failure: '',
  //     duration: ''
  //   }
  // },
];
