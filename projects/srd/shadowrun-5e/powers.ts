import {BOOK_ID, POWER_ACTION_ID, POWER_DURATION_ID, POWER_ID, POWER_RANGE_ID, POWER_TYPE_ID} from './enums';
import {Power} from './models';

export const POWERS: Power[] = [
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: 'Critters with this power can cause seemingly normal accidents to occur. The exact nature of the accident is for the gamemaster to determine, based on what the target is doing and what’s going on around him. This power isn’t, in and of itself, dangerous, but circumstance and environment can come into play to make it so. Tripping on your own feet in front of rush-hour traffic could be hazardous to your health, for instance.\nWhen a critter targets someone with this power, make an Opposed Test, using the critter’s Magic + Willpower against the target’s Reaction + Intuition. If the critter wins, treat it as if the target rolled a glitch on a test. If the critter scores 4 or more net hits, the accident is treated as a critical glitch — it’s not just an embarrassing fumble, it’s a potential catastrophe. A critter can use this power on a number of targets at once equal to its Magic rating.'
    }
  },
  {
    id: POWER_ID.ANIMAL_CONTROL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Animal Control',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.SUSTAINED,
    labels: {
      description: 'Some critters can manipulate other critters, particularly (but not always) mundane ones. This power lets the critters control the behavior of an animal or a group of animals. It has to be a normal behavior for the target animal. A flock of birds, for instance, couldn’t steal a motorcycle or fire a pistol, but they could attack someone, follow someone else, or simply be made to fly away. If the target critter leaves the controlling critter’s line of sight, it can’t be commanded any longer, but it will continue to follow any orders they had already been given for the critter’s Charisma in minutes. The critter may control a number of small animals (cats, rats, etc.) equal to its Charisma x 5, or a number of larger animals (wolves, lions, bears, etc.) equal to its Charisma. This power may not be used on any critter with the Sapience power.'
    }
  },
  {
    id: POWER_ID.ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Armor',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: 'Whether it comes in the form of dermal bone deposits, scales, or just a thick hide, a critter with this power has some inherent protection from physical attacks. The critter’s natural Armor rating is cumulative with any armor worn.'
    }
  },
  {
    id: POWER_ID.ASTRAL_FORM,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Astral Form',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: 'A critter with this power only exists in the astral plane. Only astral attacks or mana spells/powers may hurt an astral critter; physical attacks or spells/powers have no effect. The reverse is also true; an astral critter can only affect dual-natured beings or those on the astral plane, whether through astral projection or astral perception.\nCritters with this power may manifest on the physical plane in the same way as astrally projecting magicians (see p. 313).'
    }
  },
  {
    id: POWER_ID.BINDING,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Binding',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.SPECIAL,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: 'Whether it’s through webbing, a sticky tongue, or some magical force, the critter with this power can make its target stick to any surface the target happens to be touching (often, but not always, to the critter itself). The target may attempt to break free from this with a Complex Action, rolling Strength + Body against the critter’s Magic + Willpower. If the target prevails, he has escaped. If he fails, he remains immobilized until the next time he can attempt an escape. The range of this power depends on how the critter binds its targets; it may shoot webbing (Range: LOS), have a sticky body (Range: Touch), or just be good at sticking to things (Range: Self).'
    }
  },
  {
    id: POWER_ID.COMPULSION,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Compulsion',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.SUSTAINED,
    labels: {
      description: 'This power enables the critter to compel a target to perform a specific action, even if that action might not be in the target’s best interests. The critter must make an Opposed Test using its Magic + Charisma against the target’s Willpower + Logic; if the target loses, he must immediate- ly carry out the compelled action. The victim immediately recognizes that he was compelled to act after this power is used. This power can’t be used to plant suggestions for future compelled actions; once the power is dropped, the target’s mind is his own once again.'
    }
  },
  {
    id: POWER_ID.CONCEALMENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Concealment',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.SIMPLE,
    duration: POWER_DURATION_ID.SUSTAINED,
    labels: {
      description: 'Critters with this power can mystically hide themselves, other people, or things that someone else is seeking. Concealment subtracts a number of dice equal to the critter’s Magic from any Perception Tests to locate the concealed subject.\nConcealment can be used simultaneously on a number of metahuman-sized targets equal to the critter’s Magic, or a number of much smaller targets (cats, babies, rats, etc.) equal to the critter’s Magic x 5. Concealed subjects can see each other if the critter allows it. The effect lasts until the target is spotted or the critter stops sustaining the power.'
    }
  },
  {
    id: POWER_ID.CONFUSION,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Confusion',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.SUSTAINED,
    labels: {
      description: 'This power renders the target unable to think clearly. He becomes indecisive, forgetful, and befuddled. The critter makes an Opposed Test using its Magic + Willpower against the target’s Willpower + Logic. Any net hits the critter scores become a negative dice pool modifier for any action the target character takes.'
    }
  },
  {
    id: POWER_ID.CORROSIVE_SPIT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Corrosive Spit',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.SPECIAL,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: 'The critter’s saliva (or some other chemical it can shoot) is extremely caustic and can be used as a weapon. It’s treated as a standard ranged combat attack, using the critter’s Exotic Ranged Weapon skill + Agility [Physical], with range increments of (Body) meters. The spit causes Acid damage (p. 170), with a DV of (Magic x 2)P and an AP of –(critter’s Magic).'
    }
  },
  {
    id: POWER_ID.DRAGONSPEECH,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Dragonspeech',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: 'Draconic physiology is not capable of vocal speech. Dragons (and some other, possibly related, critters) are able to communicate telepathically with other beings through this power — as many as they like within line of sight — no matter what the beings’ own Language skills look like. This telepathic communication can’t be picked up by technological means, so dragons wishing to communicate with dragonspeech through modern technology must employ a metahuman as a “translator.” This power lets the critter project speech, but the target(s) cannot respond the same way without their own telepathic ability.'
    }
  },
  {
    id: POWER_ID.DUAL_NATURED,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Dual Natured',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: 'Dual-natured critters are active in both the astral plane and the physical plane at the same time. They can affect both astral and physical beings. They can perceive and interact with the astral plane like characters using astral perception (see Astral Perception, p. 312). Being dual natured, though, is different from astral perception in that a dual-natured critter always senses both the physical and astral worlds; they don’t have to shift back and forth (and, in fact, cannot do so). Their minds are accustomed to processing both astral and physical sensations, so dual-natured critters don’t suffer the –2 dice pool modifier for interacting with the physical world while astrally perceiving.'
    }
  },
  {
    id: POWER_ID.ELEMENTAL_ATTACK,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Elemental Attack',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.SPECIAL,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: 'Whether it’s a burst of flame or a bolt of lightning, a critter with this power can project a damaging stream of elemental energy. The power has a specific element type — for example, spirits of fire have Elemental Attack (Fire). The power is a ranged attack, with range increments of (Magic) meters, using the critter’s Exotic Ranged Weapon skill + Agility [Physical] to attack. The attack’s DV is (Magic x 2)P with an AP of –(critter’s Magic), plus as the appropriate elemental damage (p. 170), as listed in the critter’s statistics.'
    }
  },
  {
    id: POWER_ID.ENERGY_AURA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Energy Aura',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: 'This critter is surrounded by a field of damaging energy, which can take the form of fire, electricity, intense cold, or the like. The power has a specific element type — for example, spirits of fire have Energy Aura (Fire). The critter adds its Magic to the Damage Value of any melee attack it makes. The damage may have a specific type (Elemental Damage, p. 170) and has an AP of –(critter’s Magic).\nSuccessful melee attacks against a critter with Energy Aura also damage the attacker. The attacker makes a Damage Resistance Test against a DV equal to the critter’s Magic x 2. This attack has an AP of –(critter’s Magic). Unless indicated in the critter’s description, this power is always on and cannot be turned off.'
    }
  },
  {
    id: POWER_ID.ENGULF,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Engulf',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.TOUCH,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.SUSTAINED,
    labels: {
      description: 'This allows a critter to draw a target into itself or the terrain it controls, smothering or otherwise enveloping the target and causing damage. This is a melee attack. If it succeeds, it inflicts damage equal to its Magic x 2 (see below for specific effects by element), and the critter has engulfed its target in its grasp. Net hits on the melee attack increase this damage normally. The target gets a Damage Resistance Test as normal, using Body + Armor; the attack has an AP of –(critter’s Magic).\nOnce engulfed, a target is trapped and cannot move. Every time its Action Phase comes up after this, until the target escapes, the critter automatically inflicts damage as above; the target gets to resist each time as above. On the target’s Action Phase, he may use a Complex Action to try to escape. To attempt escape, make an Opposed Test, rolling the target’s Strength + Body against the critter’s Magic + Body. If the target wins, she escapes and takes no more damage from the attack.\nSome engulf powers have secondary effects; these are described here.\nAir Engulf: The victim resists Stun as if from an inhalation-vector toxin attack (p. 408). Armor does not protect against this attack, but other protective gear might (Toxin and Drug Protection Table, p. 408). If the victim passes out from Stun damage, she continues to take damage, with the Stun damage overflowing into Physical damage as normal.\nEarth Engulf: The target resists Physical damage.\nFire Engulf: The victim resists Fire damage (p. 171).\nWater Engulf: The victim resists Stun damage. This is rougher than normal drowning, because the critter is capable of exerting great pressure on the victim. Victims who pass out from Stun damage continue to take damage after falling unconscious, with the Stun damage overflowing into Physical damage as normal.'
    }
  },
  {
    id: POWER_ID.ENHANCED_SENSES,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Enhanced Senses',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: 'This power includes any improved or augmented senses beyond the normal human range of awareness. This includes low-light and thermographic vision, improved hearing and smell, heat-sensing organs, natural sonar, and so on. The actual enhanced senses are specified it the critter’s description. If the enhanced sense doesn’t already have a specific effect (for example, thermographic vision), this power gives a +2 dice pool modifier to tests made using that enhanced sense, as well as +1 to the appropriate limit.'
    }
  },
  {
    id: POWER_ID.ESSENCE_DRAIN,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Essence Drain',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.TOUCH,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.PERMANENT,
    labels: {
      description: 'This power allows a critter to permanently take away another being’s Essence and add it to its own. Essence Drain can only target physical, sapient beings (characters and non-astral critters with the Sapience power). The target must be sapient (or achieve sapience) on its own; attempts to use spirit pacts or other methods to imbue mundane critters with Sapience solely for use as a source of Essence do not work.\nEssence can’t be drained while the victim is actively, physically resisting. They must either be willing or subdued (restrained, paralyzed, mentally controlled, etc.). Essence transfer can only take place through a strong emotional connection, whether that emotion is passion, anger, or terror. The emotion must also be focused on the critter using the power. Abstract terror is not enough; the victim must be specifically terrified of his attacker in order for the attacker to drain the victim’s Essence. Though there is often a transfer of living material involved in an Essence Drain attack (a vampire drinking his victim’s blood, for instance), nothing but the emotional connection is actually required for this power to work.\nDraining a point of Essence takes an Extended Charisma + Magic (10 – target’s Essence, 1 minute) Test.If the critter is disturbed or interrupted before this test ends, the Essence point is not drained. Lost Essence affects a target character’s Magic or Resonance Rating (see Essence, p. 52). If a target character’s Essence is drained to 0, the character dies.\nA critter can only increase its Essence to twice its natural maximum. Any Essence drained beyond this point is lost; the critter’s astral form can only hold so much at a time.\nThe psychic stimulus of the act of draining has the side effect of creating either agony or euphoria in the victim, depending upon the circumstances of the attack. Willing victims are most likely to feel a sensation of ecstasy, which could be addictive. A willing victim being drained must make a psychological Addiction Test (p. 413) with a threshold of 2.\nA critter that drains Essence can pump their stolen life force into other attributes, including Magic, with a Simple Action. Every point of Essence spent may temporarily boost one Physical or Mental attribute, or Mag- ic, by +1. Multiple points of Essence can be pumped into a single attribute if so desired, but only one point can be used per Simple Action. While more than one attribute may be boosted at a time (for example, Strength and Intuition can both be boosted at once), only one attribute may be so increased per Simple Action. The maximum boost an attribute can receive in this fashion is +4. This attribute boost wears off after 12 hours, and the Essence points used to fuel the boost are lost.'
    }
  },
  {
    id: POWER_ID.FEAR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Fear',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.SPECIAL,
    labels: {
      description: 'This power gives a critter the power to fill its victims with overwhelming terror. The victim flees in panic and doesn’t stop until he is safely away and out of the critter’s sight. The critter makes an Opposed Test using its Willpower + Magic against the target’s Willpower + Logic. The terror lasts for 1 Combat Turn per net hit scored by the critter. Even once the fear fades, the target must succeed in a Willpower + Logic (critter’s net hits) Test to gather the nerve to face the critter again.'
    }
  },
  {
    id: POWER_ID.GUARD,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Guard',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.SUSTAINED,
    labels: {
      description: 'This power allows the critter to protect against normal environmental accidents and hazards (both natural and those induced by the Accident power), such as preventing someone from succumbing to heatstroke or saving someone from drowning. The Guard power can also be used to prevent a glitch from occurring. Guard may be used on a number of characters at once equal to the critter’s Magic attribute. Each accident averted or glitch prevented counts as a service if this power is used by a spirit.'
    }
  },
  {
    id: POWER_ID.HARDENED_ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Hardened Armor',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: 'There’s Armor, and then there’s Armor. This is the latter. This power provides its rating in Armor, and functions just like the Armor power. It differs from the Armor power as follows.\nIf the modified Damage Value of an attack is less than the Hardened Armor rating (modified by AP), the attack does no damage. Don’t make a Damage Resistance test for the critter; it might not even notice the attack was made in the first place.\nIf the modified Damage Value of an attack is greater than the Hardened Armor rating (modified by AP), then perform a Damage Resistance test for the critter as normal. Additionally, half of the Hardened Armor rating (modified by AP, rounded up) counts as automatic extra hits on this test.'
    }
  },
  {
    id: POWER_ID.HARDENED_MYSTIC_ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Hardened Mystic Armor',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: 'This power provides protection from attacks on the astral plane. This power provides its rating in Armor, and functions just like the Mystic Armor power. It differs from the Mystic Armor power as follows.\nIf the modified Damage Value of an attack is less than the Hardened Mystic Armor rating (modified by AP), the attack does no damage. Don’t make a Damage Resistance test for the critter; it might not even notice the attack was made in the first place.\nIf the modified Damage Value of an attack is greater than the Hardened Armor rating (modified by AP), then perform a Damage Resistance test for the critter as normal. Additionally, half of the Hardened Armor rating (modified by AP, rounded up) counts as automatic extra hits on this test.'
    }
  },
  {
    id: POWER_ID.IMMUNITY,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Immunity',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: 'A critter with Immunity has an enhanced resistance to a certain type of attack or affliction. Effectively, the critter has a Hardened Armor rating equal to twice its Essence against that particular kind of damage (see Hardened Armor, p. 397). This means that if the modified Damage Value of the attack does not exceed the Immunity’s rating, then the attack automatically does no damage. If the modified DV exceeds the Immunity rating, perform a Damage Resistance test as normal, adding the Immunity rating to the dice pool for this test. Additionally, half (rounded up) of the Immunity rating counts as automatic hits on this test.\nSome Immunities function slightly differently, because the attack they protect against doesn’t do damage, per se.\nImmunity to Age: Some things don’t get old. Literally. Beings with this Immunity neither age nor suffer the effects of aging.\nImmunity to Normal Weapons: This applies to all attacks that are not magical in nature; weapon foci, spells, and adept or critter powers function normally. If the critter also has the Allergy weakness, then the Immunity does not apply against non-magical attacks made using the allergen.'
    }
  },
  {
    id: POWER_ID.INFECTION,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Infection',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.TOUCH,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.PERMANENT,
    labels: {
      description: 'This power is the vector by which the human-metahuman vampiric virus (HMHVV) is transmitted. When a critter with this power uses Essence Drain to reduce the victim’s Essence to 0, this power attempts to pass the critter’s own infection on to the victim. To see if the victim is infected, make an Opposed Test of the critter’s Magic + Charisma against the victim’s Body + Willpower. If the critter wins, the victim is infected and enters a coma-like state as the virus reshapes the victim physically, mentally, and spiritually. Twenty-four hours later, the victim rises as a new Infected critter (as determined by its original metaspecies) with a single point of Essence and an insatiable, bestial hunger for more. The new Infected critter must drain Essence from another being immediately.\nPlayer characters transformed through the Infection power automatically become NPCs upon their “death” and are controlled by the gamemaster from that point forward.'
    }
  },
  {
    id: POWER_ID.INFLUENCE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Influence',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: 'This power gives the critter the ability to exert its own will on a target character. It implants a suggestion in the target’s mind. Make an Opposed Test using the critter’s Magic + Charisma against the target’s Willpower + Logic. If the critter succeeds, its target acts on the suggestion as if it was his own idea.\nIf the target is confronted with the wrongness of the suggestion, the subject can make a Willpower Test to overcome it, the same way that mental manipulation spells can be overcome (p. 292).'
    }
  },
  {
    id: POWER_ID.INNATE_SPELL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Innate Spell',
    type: POWER_TYPE_ID.SPECIAL,
    range: POWER_RANGE_ID.SPECIAL,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.SPECIAL,
    labels: {
      description: 'This power allows the critter to instinctively cast a single, specific spell. To use this power effectively, the critter has to have the Spellcasting skill. Innate Spells are chosen from the list of spells cast by magicians, and magicians can oppose them with the Counterspelling skill as normal. Innate Spells also produce Drain as normal, and suffer a –2 penalty for sustaining. Critters and Spirits resist Drain with either Intuition or Charisma, at the gamemaster’s discretion.'
    }
  },
  {
    id: POWER_ID.MATERIALIZATION,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Materialization',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.SUSTAINED,
    labels: {
      description: 'Magicians and many critters can leave their bodies and project themselves into the astral plane. Likewise, many astral critters can project themselves into the physical world and form a temporary “body” to inhabit while they’re here. This lets them interact with, and affect, physical beings. Additionally, they gain Immunity to Normal Weapons while materialized. Materializing and dematerializing to return to the astral plane both require a Complex Action.'
    }
  },
  {
    id: POWER_ID.MIMICRY,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Mimicry',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.SIMPLE,
    duration: POWER_DURATION_ID.SUSTAINED,
    labels: {
      description: 'This power allows a critter to exactly imitate sounds, including speech and the hunting calls of other creatures to which the mimicking critter has been exposed. If mimicking something from memory instead of recent exposure, the critter needs to roll a Memory Test (p. 152). Noticing that the mimicked sound is false requires a Perception Test; the threshold of this test is determined by the number of hits scored by the critter with a Charisma + Magic Test.'
    }
  },
  {
    id: POWER_ID.HARDENED_MYSTIC_ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'aaaa',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.HARDENED_MYSTIC_ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'aaaa',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.HARDENED_MYSTIC_ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'aaaa',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.HARDENED_MYSTIC_ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'aaaa',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.HARDENED_MYSTIC_ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'aaaa',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.HARDENED_MYSTIC_ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'aaaa',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.HARDENED_MYSTIC_ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'aaaa',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.HARDENED_MYSTIC_ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'aaaa',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: ''
    }
  },
  {
    id: POWER_ID.HARDENED_MYSTIC_ARMOR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'aaaa',
    type: POWER_TYPE_ID.MANA,
    range: POWER_RANGE_ID.SELF,
    action: POWER_ACTION_ID.AUTO,
    duration: POWER_DURATION_ID.ALWAYS,
    labels: {
      description: ''
    }
  },
];
