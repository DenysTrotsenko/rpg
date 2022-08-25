import {Spell, SpellType} from './models';
import {SpellId, SpellTypeId, TierId} from '@flames-of-freedom-1e/enums';

export const SPELL_TYPES: SpellType[] = [
  { id: SpellTypeId.COMMON, name: 'Common Spells' },
  { id: SpellTypeId.BLACK_AND_WHITE, name: 'Black & White Spells' },
  { id: SpellTypeId.WITCHCRAFT, name: 'Witchcraft Spells' },
  { id: SpellTypeId.ALCHEMICAL_ARTS, name: 'Alchemical Arts' },
];

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
      description: 'This mausoleum shall never be trespassed against, lest the intruders risk elemental wrath...',
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
      description: 'Do not toy with me, for I see who you really are...',
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
      description: 'We shall be delivered from pain’s threshold...',
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
      description: 'The earth laughs in flowers...',
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
      description: 'The Quaker Phillip Masters taught me this Spell...',
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
      description: 'Jolly mortals, fill your glasses, let us drink and be merry...',
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
      description: 'Hear me, ancient elements, lend me your strength...',
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
      description: 'You shall move like the zephyr...',
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
  {
    id: SpellId.BLACK_WINDS,
    name: 'Black Winds',
    tier: TierId.BASIC,
    type: SpellTypeId.BLACK_AND_WHITE,
    labels: {
      description: 'I call upon you, oh spirits, to keep mine enemies at bay!',
      casting_time: 'One minute (1 AP)',
      distance: 'Cone Template, extending from you',
      reagents: 'Grave dirt gathered from the recently buried dead, thrown overhead',
      effect: 'After successfully casting (and those caught in a Cone Template cannot or fail to Resist using Coordination), they are pushed backward 3+[WB] yards.',
      critical_success: 'They also suffer 1D10+1 Peril.',
      critical_failure: 'The dirt whirls above you, and knocks you and everyone around you in a Burst Template off their feet Prone. Everyone caught in a Burst Template suffers 2D10+1 Peril.',
      duration: 'Instantaneous'
    }
  },
  {
    id: SpellId.BRIDGE_THE_REALM,
    name: 'Bridge The Realm',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.BLACK_AND_WHITE,
    labels: {
      description: 'We shall slip between the material world and where the spirits dwell, to emerge on the other side.',
      casting_time: 'Ten minutes',
      distance: 'By touch',
      reagents: 'A powdered sapphire, laid at the foot of a doorway (expended)',
      effect: 'After successfully casting, you and a number of persons equal to 6+[WB] instantaneously travel to another location. You can only travel to specific locations you have previously visited. Upon arrival, everyone except for you suffers 2D10+2 Peril.',
      critical_success: 'No one suffers Peril.',
      critical_failure: 'You and your comrades step into an ever- widening dark pit, which swallows you all whole. It spits you back out where you started, and you all are instantly Incapacitated!, gaining 6 Conflict.',
      duration: 'Instantaneous'
    }
  },
  {
    id: SpellId.CHANGELING,
    name: 'Changeling',
    tier: TierId.BASIC,
    type: SpellTypeId.BLACK_AND_WHITE,
    labels: {
      description: 'I shall turn you into the oaf you are!',
      casting_time: 'One minute (1 AP)',
      distance: 'Any one person you can clearly see',
      reagents: 'The skin of a rare frog, burnt (expended)',
      effect: 'After successfully casting (and one foe cannot or fails to Resist using Scrutinize), they are temporarily made Helpless for the duration.',
      critical_success: 'They are unable to Resist.',
      critical_failure: 'Your arms droop to the ground, and your voice turns to a low growl. You cannot cast Spells for the duration.',
      duration: '3+[WB] minutes'
    }
  },
  {
    id: SpellId.CHANNEL_THE_SPIRITS,
    name: 'Channel The Spirits',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.BLACK_AND_WHITE,
    labels: {
      description: 'I call upon you, ghost of Davy Jones, to tell us of folktales and buried treasure...',
      casting_time: 'Ten minutes',
      distance: 'By touch',
      reagents: 'A personal item of the dead person you want to channel, and a silver ring',
      effect: 'After successfully casting, you channel the soul of a specific dead person into your body. While it remains in your body, you may ask one question every minute of the spirit, and they will always answer truthfully. For every question you ask, roll 3D6 Chaos Dice. For every face ‘6,’ you drop one step down the Peril Condition Track. If you are Incapacitated! by this, you gain two Flaw Ranks. This Spell requires Concentration.',
      critical_success: 'Roll 1D6 Chaos Die instead.',
      critical_failure: 'Your body lifts into the air, as you gain the Affliction of Possessed.',
      duration: 'One hour'
    }
  },
  {
    id: SpellId.CONTACT_THE_FIRST_FALLEN,
    name: 'Contact The First Fallen',
    tier: TierId.ADVANCED,
    type: SpellTypeId.BLACK_AND_WHITE,
    labels: {
      description: 'Unto you, the First Fallen—son of Venus, Favored Son, the Morning Star, Shining One, the Light-Bearer, Lucifer: I beseech thee!',
      casting_time: 'Forty-eight hours',
      distance: 'Self',
      reagents: 'Six candles burned (expended), your own blood, chalk used to draw the Seal of Solomon and a magic circle',
      effect: 'After successfully casting, you trap a demon into the Seal of Solomon, and you may attempt to strike a Faustian bargain to convince them to carry out a malevolent deed. Example deeds include blighting a harvest, bringing plague, causing a jury to find someone innocent or guilty, gaining temporary protection from physical or mental harm, harming someone else, killing livestock or teaching Spells. The Historian will determine what is appropriate and help you shape an appropriately devilish request. Then, make a Secret Test using Bargain. The more selfish the deed, the more favorable the Difficulty Rating will be. Success and Critical Success results in the deed being done. Failure and Critical Failure results in your words being twisted against you. You begin to Bleed and gain three Flaw Ranks, no matter whether you succeeded or failed at using this Spell. This Spell requires Concentration.',
      critical_success: 'Add an Assist Die to your Bargain Test.',
      critical_failure: 'You made a misstep , and the Seal of Solomon wasn’t drawn correctly. The demon escapes, and will do as it pleases until returning to the spirit realm twenty-four hours later. You also gain one permanent Flaw Rank.',
      duration: 'One hour'
    }
  },
  {
    id: SpellId.DAMNATION,
    name: 'Damnation',
    tier: TierId.ADVANCED,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Misery loves company, but damnation needs it.',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'An ink-filled circle drawn on an object belonging to the person you wish to damn',
      effect: 'After successfully casting, an object is Damned. While Damned, the person carrying the object treats every failed Skill Test as if it were Critically Failed instead. Furthermore, should the person die while in possession of the object, they are forced to relive the last twenty- four hours of their life, including reliving their death. Finally, they cannot be healed from Damage or Injuries. A Damned object can only be discovered through use of Magic or a special circumstance the Historian dictates. You gain three Flaw Ranks.',
      critical_success: 'You gain two Flaw Ranks instead.',
      critical_failure: 'The object disintegrates to dust, and you gain one permanent Flaw Rank.',
      duration: '9+[WB] days'
    }
  },
  {
    id: SpellId.ESSENCE_THEFT,
    name: 'Essence Theft',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Your soul is mine!',
      casting_time: 'One minute (1 AP)',
      distance: 'Any one person you can clearly see',
      reagents: 'A ring of antinomy, worn upon the ring finger.',
      effect: 'After successfully casting, a foe must Resist with a Toughness Test, or else suffer 1D10+[WB] Peril. Depending on how many steps down they move negatively, you move an equal number of steps up the Peril Condition Track positively.',
      critical_success: 'The foe is paralyzed in place for one minute, left Helpless.',
      critical_failure: 'The ring crumbles to dust, as you suffer 2D10+[WB] Peril and are left Helpless for one minute. The foe moves up an equal number of steps on the Peril Condition Track positively.',
      duration: 'Instantaneous'
    }
  },
  {
    id: SpellId.FORGET,
    name: 'Forget',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Nothing lasts forever...',
      casting_time: 'One minute (2 AP)',
      distance: 'By touch',
      reagents: 'A ring of obsidian, worn on the hand you place upon your victim',
      effect: 'After successfully casting (and one foe cannot or fails to Resist using Scrutinize), they temporarily forget 6+[WB] days of memories, including the moment when you cast the Spell.',
      critical_success: 'They forget 6+[WB] days of memories permanently.',
      critical_failure: 'Your mind is suddenly awash in confusion. How did you get here? You lose 6+[WB] days of memories permanently.',
      duration: 'Instantaneous'
    }
  },
  {
    id: SpellId.HOMUNCULUS,
    name: 'Homunculus',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'I shall trap the spirit inside this familiar, and it shall obey my every command.',
      casting_time: 'One day',
      distance: 'Special',
      reagents: 'An object made from your blood and grave dirt, shaped into a small creature or person',
      effect: 'After successfully casting, you create a homunculus: a creature loyal to your every command. Homunculi can be of a shape no larger than a child is tall. Examples include brooms, dolls, a small animal or windup toy. Homunculi are able to use the power of speech. You can only command a number of homunculi equal to your [WB] at any one time, but you may replace those which have been Slain!. A homunculus takes on the stats of a Homunculus or similar threat from Article 14: Threats. The only way to heal a homunculus from Damage is to cast this Spell again, but it does not require reagents and only takes ten minutes instead of one week. You begin to Bleed, no matter whether you succeeded or failed at using this Spell.',
      critical_success: 'You create two homunculi instead.',
      critical_failure: 'You create two homunculi who are intent on your destruction. They vanish before your eyes, but will take out their revenge at a point and time the Historian decides.',
      duration: 'Forever'
    }
  },
  {
    id: SpellId.INFIRMITY,
    name: 'Infirmity',
    tier: TierId.BASIC,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Once, twice, thrice, quince for pain!',
      casting_time: 'One minute (1 AP)',
      distance: 'Any one person you can clearly see',
      reagents: 'A leg bone, which you break in hand',
      effect: 'After successfully casting (and one foe cannot or fails to Resist using Toughness), they temporarily reduce their Movement by a cumulative -1 by every minute. They may attempt to Resist every minute, until the duration is up.',
      critical_success: 'They cannot Resist the first three minutes of duration.',
      critical_failure: 'Your legs turn to jelly, as you are knocked Prone and unable to move for the duration.',
      duration: '3+[WB] minutes'
    }
  },
  {
    id: SpellId.MASK_THE_SENSES,
    name: 'Mask The Senses',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'I leave thee in anguish, stricken insensible.',
      casting_time: 'One minute (2 AP)',
      distance: 'Any one person you can clearly see',
      reagents: 'Your own blood, squeezed into your palm',
      effect: 'After successfully casting (and one foe cannot or fails to Resist using Awareness), they are unable to see for 6+[WB] days. Once the duration is up, they are unable to hear for 3+[WB] days. You begin to Bleed, no matter whether you succeeded or failed at using this Spell.',
      critical_success: 'Triple the duration.',
      critical_failure: 'You are awestruck by a presence other than your own, as you are unable to see for 18+[WB] days and unable to hear for 9+[WB] days after that.',
      duration: 'Special'
    }
  },
  {
    id: SpellId.PALL_OF_NIGHT,
    name: 'Pall Of Night',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'I am blanketed by the spirits; they shall see me to safety.',
      casting_time: 'Three days',
      distance: 'Yourself',
      reagents: 'You must Sleep in a safe place during daylight hours, and suffer 2D10+2 Peril from Starvation.',
      effect: 'After successfully casting, you are completely invisible during daylight hours, leaving no trace of your passing, and you cannot be heard (unless you wish to be).',
      critical_success: 'Triple the duration.',
      critical_failure: 'You leave a glowing trail in your wake, one that can be easily discovered.',
      duration: '6+[WB] hours'
    }
  },
  {
    id: SpellId.QUAKE,
    name: 'Quake',
    tier: TierId.ADVANCED,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'Feel the earth tremble beneath your feet!',
      casting_time: 'One minute (3 AP)',
      distance: 'Explosion Template, extending from any place you can clearly see',
      reagents: 'Two obsidian rings, worn on the fingers and pointed downwards',
      effect: 'After successfully casting (and foes in an Explosion Template cannot or fail to Resist using Athletics), they suffer 3D10+[WB] Damage. Roll Chaos Dice as you normally would for Injuries, but if any land on face ‘6,’ they are Slain! instead.',
      critical_success: 'As above, but add 3D6 Chaos Dice to determine if foes are Slain!.',
      critical_failure: 'The earth suddenly opens up below your feet, and unless you successfully Resist using Athletics, you are Slain!.',
      duration: 'Instantaneous'
    }
  },
  {
    id: SpellId.RITUAL_BINDING,
    name: 'Ritual Binding',
    tier: TierId.ADVANCED,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'The spirit contained within this knife is that of Captain John Smith, with all his ire.',
      casting_time: 'Special',
      distance: 'By touch',
      reagents: 'A ware or weapon you have crafted, and the name of a Slain! supernatural threat invoked as you finish crafting',
      effect: 'After successfully casting, the object you touch is bound with a spirit.When the object is held,it temporarily enhances one Primary Attribute by +10%. For instance, you can enchant a book to boost Intelligence or a knife to grant a benefit to Combat. Whatever you wish to enchant, the form must follow its function. Such objects may only be Ritually Bound once. Furthermore, a person cannot wield more than one Ritually Bound object at a time. Finally, the time to cast the Spell is the same length of time it takes for you to craft the object (as described in Article 5: Wares & Weapons).',
      critical_success: 'As above, but the object enhances two different Primary Attributes instead.',
      critical_failure: 'The supernatural threat is unleashed, and knocks you Unconscious for 9+[WB] days.The spirit will enact its revenge against you at a time the Historian feels appropriate.',
      duration: 'Forever'
    }
  },
  {
    id: SpellId.TRANSFER_MIND,
    name: 'Transfer Mind',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.COMMON,
    labels: {
      description: 'You shall be whisked away to the spirit realm; your body is now mine to control.',
      casting_time: 'One minute (2 AP)',
      distance: 'By touch',
      reagents: 'A personal item of a foe you seek to transfer into, held in hand',
      effect: 'After successfully casting (and one foe cannot or fails to Resist using Resolve), a threat’s mind is imprisoned in the spirit realm, and your body goes into hibernation. Your mind is instantaneously transferred into the recipient’s own body. Reference your own Primary Attributes and abilities, but you may flip the results to succeed and add an Assist Die to mimic the person whose body you’re inside.',
      critical_success: 'The person cannot Resist this Spell.',
      critical_failure: 'You have an out-of-body experience, as your mind is trapped in the spirit realm. The person who you intended to transfer into is now in control of your body for the duration! You gain one Flaw Rank.',
      duration: '6+[WB] hours'
    }
  },
  {
    id: SpellId.BEWITCHED_STONE,
    name: 'Bewitched Stone',
    tier: TierId.ADVANCED,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'Mankind’s spite, cat’s meow, death comes to steed and sow!',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'A diseased rag wrapped around a stone (expended), which is buried at a crossroads',
      effect: 'After successfully casting, you create a Bewitched Stone. Once buried, any threat that is classified as Humanoid (including player cultures) that comes within an Explosion Template of the stone must Resist with Toughness or else contract an Ailment of your choice. If the stone isn’t buried within an hour or is removed from the crossroads, the Spell ends. Once the duration is over, the stone is destroyed.',
      critical_success: 'As above, but affects those in a mile radius.',
      critical_failure: 'The stone grows with tendrils, embedding itself into your hand as you suffer the Ailment instead. You must undergo Perform Surgery, suffering the Destroyed Digits Injury if not properly healed.',
      duration: 'Thirteen days'
    }
  },
  {
    id: SpellId.CHARCOAL_OF_THE_APPERTAIN,
    name: 'Charcoal Of The Appertain',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'The flames reveal, the shadows conceal...',
      casting_time: 'Three hours',
      distance: 'By touch',
      reagents: 'Set a bonfire, and you create one piece of charcoal from it (expended)',
      effect: 'After successfully casting, you spend three hours over a bonfire until one lump of charcoal is produced. If the charcoal is thrown into any new fire, you conjure forth an illusion of anything you can imagine, guaranteeing it’s smaller than an oxen. It has no physical tangibility, nor emits a smell, sound or taste. Anyone who sees the illusion can attempt to see through it with a successful Secret Test using Awareness. Once the duration is over, the charcoal is destroyed. This Spell requires Concentration.',
      critical_success: 'You create three pieces of lump charcoal instead.',
      critical_failure: 'The fire causes you to fall to Sleep for three hours, unable to be awakened.',
      duration: '6+[WB] minutes'
    }
  },
  {
    id: SpellId.CURSED_BRANCH,
    name: 'Cursed Branch',
    tier: TierId.ADVANCED,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'Hazel twig from twisted tree, a curse upon mine enemy...',
      casting_time: 'One minute (3 AP)',
      distance: 'Cone Template, extending from you',
      reagents: 'A single branch of a witch hazel tree, pointed outward',
      effect: 'After successfully casting (and foes in a Cone Template cannot or fail to Resist using Coordination), they suffer 3D10+[WB] Damage and 9 Conflict. Roll Chaos Dice as you normally would for Injuries, but if any land on face ‘6,’ they suffer from Terror.',
      critical_success: 'As above, but your foe cannot Resist.',
      critical_failure: 'The wand snaps and the Spell rebounds toward you in a Cone Template, treated as a Critical Success.',
      duration: 'Instantaneous'
    }
  },
  {
    id: SpellId.DISTANT_EYE,
    name: 'Distant Eye',
    tier: TierId.ADVANCED,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'Over air, land and sea, mark everything that I can see...',
      casting_time: 'Nine minutes',
      distance: 'Self',
      reagents: 'A cauldron, the real name of a foe or place and a memento of the foe or place you wish to spy upon',
      effect: 'After successfully casting, you are able to spy upon a foe or place.You can view it as if you were peering from 18 yards away, and can even focus in on details. Furthermore, you can clearly see and hear anything happening within its presence. This Spell requires Concentration.',
      critical_success: 'Triple the duration.',
      critical_failure: 'You witness a vision of your doom, as you are unable to see for seventy-two hours and the cauldron is destroyed.',
      duration: '9+[WB] minutes'
    }
  },
  {
    id: SpellId.FLYING_BROOM,
    name: 'Flying Broom',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'Once you’ve got a handle on it, flying is simple...',
      casting_time: 'One minute (2 AP)',
      distance: 'Self',
      reagents: 'A hawthorn stave, held between the legs',
      effect: 'After successfully casting, you gain the power of flight. When in combat, you gain the Movement Subtype of Flying and reference the benefits of Flying Foes from Article 7: Combat Encounters. Any maneuver you attempt to do that may be perilous requires a Fail Forward Test using Awareness, or else suffer 2D10+2 Peril. Upon a Critical Failure, you fall to the ground. This Spell requires Concentration.',
      critical_success: 'Triple the duration.',
      critical_failure: 'You sail into the air for a number of yards equal to 3+[WB], and as the broom snaps, you plummet an equal number of yards to the ground.',
      duration: '6+[WB] in hours'
    }
  },
  {
    id: SpellId.GRAVE_DESCEND,
    name: 'Grave Descend',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'Rest in peace until you rise again...',
      casting_time: 'One minute (2 AP)',
      distance: 'By touch',
      reagents: 'A grave or the roots of a tree, which you sink into',
      effect: 'After successfully casting, a willing person sinks into the soil, falling asleep. They are able to avoid environmental effects of cold, heat, Starvation and Suffocation during this time.',
      critical_success: 'Triple the duration.',
      critical_failure: 'The grave or soil swallows them whole, putting them in a Chokehold. Whenever they reach Incapacitated!, they are Slain!.',
      duration: '6+[WB] days'
    }
  },
  {
    id: SpellId.INVOKE_HEX,
    name: 'Invoke Hex',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'All things foul, infectious and putrid fall upon thy head!',
      casting_time: 'One minute (2 AP)',
      distance: 'By touch',
      reagents: 'Paint your blood over an object, foe or place (expended)',
      effect: 'After successfully casting, select whether you wish to curse a foe, object or a place. If cursing a foe, they gain some sort of gross physical oddity (e.g., constant flatulence, intractable hiccups, oozing pimples), which causes them to flip the results to fail all Skill Tests related to social interactions. If cursing an object, when it is carried, the foe suffers a -20% Base Chance to all Skill Tests. If cursing a place, anyone who is standing inside of it must add an additional 1D6 Chaos Die when they Risk Backlash or are at risk to suffer Injuries. A cursed object can only be discovered through use of Magic or a special circumstance the Historian dictates. You begin to Bleed, no matter whether you succeeded or failed at casting this Spell.',
      critical_success: 'Triple the duration.',
      critical_failure: 'You immediately move three steps down the Damage Condition Track instead and begin to Bleed.',
      duration: '6+[WB] days'
    }
  },
  {
    id: SpellId.MASK_FRAGRANCE,
    name: 'Mask Fragrance',
    tier: TierId.BASIC,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'The dead shall walk these streets, with none the wiser of their true origin...',
      casting_time: 'One minute (3 AP)',
      distance: 'By touch',
      reagents: 'Grave dirt, intermingled with perfume (expended)',
      effect: 'After successfully casting, a number of allies or objects equal to 3+[WB] have their scent completely masked. This includes the rotting smell of death.',
      critical_success: 'As above, and the allies’ or objects’ movement is rendered completely silent.',
      critical_failure: 'The scent of death becomes immediately unbearable, as you and everyone else around the allies or objects you touch suffer 2D10+2 Peril every minute.',
      duration: '3+[WB] hours'
    }
  },
  {
    id: SpellId.NIGHT_TERRORS,
    name: 'Night Terrors',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'I conjure thee, creatures of the night—infest their minds, let fear take flight!',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'A vial of your own spit and bile, mixed into a draught (expended)',
      effect: 'After successfully casting, a draught is created. Once consumed, it tastes of sweet syrup. The foe must Resist with a Toughness Test, or go to Sleep for six hours. For six nights, they awaken to Incapacitated!.',
      critical_success: 'The foe cannot Resist.',
      critical_failure: 'The draught turns to fumes, and you suffer from its effects instead.',
      duration: 'Instantaneous'
    }
  },
  {
    id: SpellId.PLAGUE_STONE,
    name: 'Plague Stone',
    tier: TierId.BASIC,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'May your fields be sown with salt for a thousand years...',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'A dirty rag wrapped around a stone, which is placed beneath a floorboard (expended)',
      effect: 'After successfully casting, you create a Plague Stone. Once buried, all food and water that come within an Explosion Template of it are contaminated, and those who imbibe it cannot gain sustenance from it. If the stone isn’t placed within an hour or is removed from the floorboards, the Spell ends. Once the duration ends, the stone is destroyed.',
      critical_success: 'As above, but affects food and water within a mile radius.',
      critical_failure: 'You force yourself to consume the stone, and you suffer from Typhoid. The stone passes at the end of the duration.',
      duration: 'Thirteen days'
    }
  },
  {
    id: SpellId.QUESTIONABLE_SALVE,
    name: 'Questionable Salve',
    tier: TierId.BASIC,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'Oil of snake and sugar water, this will cure what ails you...',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'Arsenic and a bandage, combined together (expended)',
      effect: 'After successfully casting, a salve is created. Once applied, the person moves one step up or one step down the Damage & Peril Condition Tracks positively or negatively (your choice).',
      critical_success: 'They are moved two steps up or down instead (your choice).',
      critical_failure: 'The salve spreads across your hands like rot. You move two steps down the Damage & Peril Condition Tracks negatively.',
      duration: 'Instantaneous'
    }
  },
  {
    id: SpellId.SLEEPING_BEAUTY,
    name: 'Sleeping Beauty',
    tier: TierId.INTERMEDIATE,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'But thy eternal summer shall not fade...',
      casting_time: 'One minute (2 AP)',
      distance: 'Self',
      reagents: 'One whole fruit, which you polish with cloth (expended)',
      effect: 'After successfully casting, the fruit is preserved forever but filled with a sweet, vile poison. If eaten (and the foe cannot or fails to Resist using Toughness), they temporarily reduce all their Primary Attribute Bonuses by -6. If any of these values equal zero, they are knocked Unconscious. At the end of the duration, Primary Attribute Bonuses restore by +1 every twenty-four hours.',
      critical_success: 'The foe cannot Resist.',
      critical_failure: 'The fruit spoils before your eyes, and you suffer the effects instead.',
      duration: 'Thirteen days'
    }
  },
  {
    id: SpellId.TEMPT_OTHER,
    name: 'Tempt Other',
    tier: TierId.BASIC,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'Dance for me, pretty poppet! Now click your heels...',
      casting_time: 'One minute (1 AP)',
      distance: 'Any one foe you can see',
      reagents: 'A cat’s cradle made from muscle sinew',
      effect: 'After successfully casting (and the target cannot or fails to Resist using Resolve), they are Tempted. While Tempted, you can mentally speak to the person, and act as the devil or angel on their shoulder, luring them toward temptations or mortal acts they may not normally entertain. Should these temptations or mortal acts conflict with their morals, however, they will not take the action. This Spell requires Concentration.',
      critical_success: 'As above, but your foe cannot Resist.',
      critical_failure: 'The foe has now made you subject to Dominate, and the Historian can control you for the duration.',
      duration: '3+[WB] in minutes'
    }
  },
  {
    id: SpellId.WAXEN_DOLL,
    name: 'Waxen Doll',
    tier: TierId.ADVANCED,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'Vex me, and you will be as a sinner in the hands of an angry god.',
      casting_time: 'One hour',
      distance: 'By touch',
      reagents: 'A small wax doll, with a personal item of a foe you seek to torment embedded inside',
      effect: 'After successfully casting, a wax doll is created that is impervious until you are Slain!. Call out the foe’s name you wish to torment, and prick the doll with a pin as they move one, two or three steps down the Peril Condition Tracks negatively (your choice). Hold it over a fire, and they suffer from Mildly, Moderately or Seriously Dangerous Fire (your choice). Tie the doll’s legs together, and the foe is paralyzed for twenty-four hours. Tie the doll’s hands together, and the foe is unable to use their arms for twenty-four hours. Sew the mouth of the doll shut, and the foe is unable to speak for twenty-four hours. Bury it into the earth, and the foe temporarily reduces all of their Primary Attribute Bonuses by -9. If the doll isn’t used within a week or is destroyed by fire, the Spell ends. Each time you use the doll, you move one step down the Peril Condition Track and gain 3 Conflict. This Spell requires Concentration.',
      critical_success: 'Gain 1 Conflict instead.',
      critical_failure: 'The waxen doll twists and contorts, and you immediately take on every single effect. The doll then melts.',
      duration: 'Special'
    }
  },
  {
    id: SpellId.WITCH_ROD,
    name: 'Witch Rod',
    tier: TierId.BASIC,
    type: SpellTypeId.WITCHCRAFT,
    labels: {
      description: 'My will demands aim to find its target... and my will is true as steel.',
      casting_time: 'One minute (1 AP)',
      distance: 'Self',
      reagents: 'Two branches of witch hazel, crossed over one another',
      effect: 'After successfully casting, the branch either points the way toward any threat you can name who is classified as Humanoid (including player cultures), finds a source of water or points to a location you can name. This Spell requires Concentration.',
      critical_success: 'Triple the duration.',
      critical_failure: 'The branches split, as you suffer 1D10+1 Damage, but do not suffer Injuries due to it.',
      duration: '3+[WB] in minutes'
    }
  },
  // {
  //   id: SpellId.,
  //   name: '',
  //   tier: TierId.,
  //   type: SpellTypeId.WITCHCRAFT,
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
