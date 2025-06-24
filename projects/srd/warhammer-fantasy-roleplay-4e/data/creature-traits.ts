import { CreatureTraitId } from '@wfrp-4e/models/enums';
import { CreatureTrait } from '@wfrp-4e/models/common';

const CREATURE_TRAITS: CreatureTrait[] = [
  {
    id: CreatureTraitId.AFRAID,
    name: 'Afraid',
    grouped: true,
    labels: {
      placeholder: 'Target',
      description: 'The creature gains Fear (0) to the Target. See page 190 for Fear rules.'
    }
  }, {
    id: CreatureTraitId.AMPHIBIOUS,
    name: 'Amphibious',
    labels: {
      description: 'The creature is at home in water. It can add its Agility Bonus to the SL of all Swim Tests and move at full Movement through water.'
    }
  }, {
    id: CreatureTraitId.ARBOREAL,
    name: 'Arboreal',
    labels: {
      description: 'The creature is at home in the forests. In the woodlands, it adds its Agility Bonus to the SL of all Climb and Stealth Tests.'
    }
  }, {
    id: CreatureTraitId.ANIMOSITY,
    name: 'Animosity',
    grouped: true,
    labels: {
      placeholder: 'Target',
      description: 'The creature dislikes the Target. See page 190 for Animosity rules.'
    }
  },
  {
    id: CreatureTraitId.ARMOUR,
    name: 'Armour',
    value: true,
    labels: {
      placeholder: 'Rating',
      description: 'The creature is protected by armour or thick hide. It has Rating Armour Points on all Hit Locations.'
    }
  },
  {
    id: CreatureTraitId.BELLIGERENT,
    name: 'Belligerent',
    labels: {
      description: 'The creature loves to win a fight. As long as it has more Advantage than its opponent, it is Immune to Psychology.'
    }
  }, {
    id: CreatureTraitId.BESTIAL,
    name: 'Bestial',
    labels: {
      description: 'The creature has no rational thought or language. It shies away from fire and gains a Broken Condition if struck by it. In defence, it only uses the Dodge Skill. If it loses more than half its Wounds, it will attempt to Flee unless protecting its young or cornered, or unless it has the Territorial Trait. If so, it enters Frenzy (see page 190). Bestial creatures have no Fellowship characteristic.'
    }
  }, {
    id: CreatureTraitId.BIG,
    name: 'Big',
    labels: {
      description: 'The creature is a large example of its species. It receives +10 Strength and Toughness, and –5 Agility.'
    }
  }, {
    id: CreatureTraitId.BITE,
    name: 'Bite',
    value: true,
    labels: {
      placeholder: 'Rating',
      description: 'On its turn, the creature may make a Free Attack by spending 1 Advantage. The Damage of the attack equals Rating and includes the creature’s Strength Bonus already.'
    }
  }, {
    id: CreatureTraitId.BLESSED,
    name: 'Blessed',
    grouped: true,
    labels: {
      placeholder: 'Various',
      description: 'The creature is Blessed and can enact Blessings; the relevant deity is indicated in brackets.'
    }
  }, {
    id: CreatureTraitId.BOUNCE,
    name: 'Bounce',
    labels: {
      description: 'The creature can bounce high, perhaps with powerful limbs, magic, or stubby wings. When Charging or Running, it doubles its Movement Characteristic, and can ignore all intervening terrain and characters as it leap over them.'
    }
  }, {
    id: CreatureTraitId.BREATH,
    name: 'Breath',
    value: true,
    labels: {
      placeholder: 'Type, Rating',
      description: 'The creature’s breath is a powerful weapon. On its turn, for the cost of 2 Advantage, it can activate its Breath as a Free Attack. Choose 1 target it can see within 20+Toughness Bonus yards. All characters within Strength Bonus yards of that target are struck, as are all characters between the creature and the target. Perform an Opposed Ballistic Skill/Dodge Test against all affected targets (the creature’s single roll opposed by each individual target). All targets that fail take Damage equal to the attack’s Rating. Further, if the Trait is marked with any of the following types in brackets, apply the associated rules.\n• Cold: Targets gain a Stunned Condition for every full 5 Wounds suffered (minimum of 1).\n• Corrosion: All Armour and Weapons carried by affected targets suffer 1 Damage.\n• Fire: Any Wounds caused ignore Armour Points. Targets gain an Ablaze Condition.\n• Electricity: Any Wounds caused ignore Armour Points. Targets gain a Stunned Condition.\n• Poison: Any Wounds caused ignore Armour Points. Targets gain a Poisoned Condition.\n• Smoke: The area fills with smoke, blocking Line of Sight for Toughness Bonus Rounds.\nThe creature is immune to its own Breath. This attack is Magical.'
    }
  }, {
    id: CreatureTraitId.BRUTE,
    name: 'Brute',
    labels: {
      description: 'The creature is heavy and brutish. It receives –1 Movement, –10 Agility, and +10 Strength and Toughness.'
    }
  }, {
    id: CreatureTraitId.CHAMPION,
    name: 'Champion',
    labels: {
      description: 'The creature is an extraordinarily skilled warrior. If it wins an Opposed Test when defending in melee combat, it can cause Damage just as if it was the attacker.'
    }
  }, {
    id: CreatureTraitId.CHILL_GRASP,
    name: 'Chill Grasp',
    labels: {
      description: 'The creature’s touch chills its enemy’s souls. For the cost of 2 Advantage and its Action, it can attempt an Opposed Weapon Skill/Melee or Dodge Test. If it wins, its target loses 1d10 + SL Wounds with no modification for Toughness Bonus or Armour Points. This attack is Magical.'
    }
  }, {
    id: CreatureTraitId.CLEVER,
    name: 'Clever',
    labels: {
      description: 'The creature is particularly sharp-minded. It receives +20 Intelligence and +10 Initiative.'
    }
  }, {
    id: CreatureTraitId.COLD_BLOODED,
    name: 'Cold-blooded',
    labels: {
      description: 'The creature is cold-blooded and slow to react. It can reverse all failed Willpower Tests.'
    }
  }, {
    id: CreatureTraitId.CONSTRICTOR,
    name: 'Constrictor',
    labels: {
      description: 'The creature can squeeze and crush its prey. Any successful roll to hit gives the target an Entangled Condition. The creature may then enter a Grapple if it wishes. See page 163.'
    }
  }, {
    id: CreatureTraitId.CONSTRUCT,
    name: 'Construct',
    labels: {
      description: 'The creature is a construct of magic, quite mindless, bound together with magical sinews. It has no Intelligence, Willpower, or Fellowship Characteristics, and need never Test them. If it has no wizard controlling it, or does not possess the Territorial Trait, it meanders mindlessly, following flows of ambient magic.\nFor the purposes of calculating its Wounds, it uses its Strength Bonus whenever Willpower Bonus is required. All its attacks are Magical.'
    }
  }, {
    id: CreatureTraitId.CORROSIVE_BLOOD,
    name: 'Corrosive Blood',
    labels: {
      description: 'The creature’s blood is corrosive. Every time its is Wounded, blood splashes free, and all targets Engaged with it take 1d10 Wounds modified by Toughness Bonus and Armour Points, to a minimum of 1.'
    }
  }, {
    id: CreatureTraitId.CORRUPTION,
    name: 'Corruption',
    value: true,
    labels: {
      placeholder: 'Strength',
      description: 'The creature is tainted by Chaos, or perhaps suffused with Dark Magics. The Strength of the Corruption is marked in brackets. See page 182.'
    }
  }, {
    id: CreatureTraitId.CUNNING,
    name: 'Cunning',
    labels: {
      description: 'The creature is exceptionally cunning. It receives +10 Fellowship, Intelligence, and Initiative.'
    }
  }, {
    id: CreatureTraitId.DARK_VISION,
    name: 'Dark Vision',
    labels: {
      description: 'The creature can see in the dark as daylight.'
    }
  }, {
    id: CreatureTraitId.DAEMONIC,
    name: 'Daemonic',
    value: true,
    labels: {
      placeholder: 'Target',
      description: 'The creature’s essence is raw magic, and unholy ichor pumps through what passes for its veins. Daemonic creatures do not require the normal prerequisites for life: food, water, air...\nAll its attacks are Magical. Roll 1d10 after any blow is received, if the creature rolls the Target number or higher, the blow is ignored, even if it is a critical. Should the creature be reduced to 0 Wounds, its soul returns to the Realms of Chaos immediately, removing it from play.'
    }
  }, {
    id: CreatureTraitId.DIE_HARD,
    name: 'Die Hard',
    labels: {
      description: 'No matter how hard the creature is hit, it gets back up. All Critical Wounds not resulting in death can be healed; just attach the requisite body parts to the correct places, perhaps with staples or large spikes to hold them in place, and it’s good to go. Even ‘death’ may be ‘healed’ if the appropriate parts, such as a lost head, are attached to the body. If death occurs and all parts are in place, it may attempt a Challenging (+0) Endurance Test requiring an SL of 6 at the start of every round for Toughness Bonus Rounds after death. If a Test is successful, the creature chokes back to life with 1 Wound.'
    }
  }, {
    id: CreatureTraitId.DISEASE,
    name: 'Disease',
    grouped: true,
    labels: {
      placeholder: 'Type',
      description: 'The creature carries the disease listed. Others will have to Test as appropriate for Contraction. See page 186.'
    }
  }, {
    id: CreatureTraitId.DISTRACTING,
    name: 'Distracting',
    labels: {
      description: 'The creature distracts or confuse foes, possibly exuding a soporific musk or nauseating reek, or maybe its appearance is bizarrely horrifying. All living targets within a number of yards equal to its Toughness Bonus suffer a penalty of –20 to all Tests. A target can only suffer this penalty once, no matter how many Distracting foes there are.'
    }
  }, {
    id: CreatureTraitId.ELITE,
    name: 'Elite',
    labels: {
      description: 'The creature is a hard-nosed veteran. It receives +20 to Weapon Skill, Ballistic Skill, and Willpower.'
    }
  }, {
    id: CreatureTraitId.ETHEREAL,
    name: 'Ethereal',
    labels: {
      description: 'The creature’s form is insubstantial, allowing it to pass through solid objects. It can only be harmed by Magical attacks.'
    }
  }, {
    id: CreatureTraitId.FAST,
    name: 'Fast',
    labels: {
      description: 'The creature moves unexpectedly fast. It receives +1 Movement and +10 Agility.'
    }
  }, {
    id: CreatureTraitId.FEAR,
    name: 'Fear',
    value: true,
    labels: {
      placeholder: 'Rating',
      description: 'The creature causes supernatural Fear in other creatures, with a rating equal to its Rating. See page 190.'
    }
  }, {
    id: CreatureTraitId.FLIGHT,
    name: 'Flight',
    value: true,
    labels: {
      placeholder: 'Rating',
      description: 'As the creature’s Move, it can fly up to Rating yards. When flying, it ignores all intervening terrain, obstacles, or characters. At the end of the move, it decides whether it has landed or is still flying. It can use this move to Charge. If it starts its turn flying, it must choose to Fly for its Move. If it cannot do this, the GM decides how far the creature falls (see page 166).\nWhen targeting it, measure horizontal distance as normal, then increase range by 1 step. So, a Long Range shot would become Extreme Range, and if it was at Extreme Range it could not be shot at all.\nWhen flying, it suffers a penalty of –20 to all ranged combat attempts as it swoops and wheels in the sky.'
    }
  }, {
    id: CreatureTraitId.FRENZY,
    name: 'Frenzy',
    labels: {
      description: 'The creature can Frenzy. See page 190.'
    }
  }, {
    id: CreatureTraitId.FURY,
    name: 'Fury',
    labels: {
      description: 'The creature can work itself into an all-consuming rage. It can spend all of its Advantage (minimum of 1) to become subject to Hatred to close combat opponents. If the creature has at least 3 Advantage, it may instead expend all of its Advantage to become subject to Frenzy. See page 190.'
    }
  }, {
    id: CreatureTraitId.GHOSTLY_HOWL,
    name: 'Ghostly Howl',
    labels: {
      description: 'The creature can emit a chilling howl, capable of killing those who hear it. On its turn the creature can spend all its Advantage (minimum of 2), to unleash a hideous scream as a Free Attack.\nAll living targets within a number of yards equal to the creature’s Initiative immediately gain 3 Deafened Conditions and suffer 1d10 Wounds ignoring Toughness Bonus and Armour Points. Those affected must also pass a Average (+20) Endurance test or gain a Broken Condition.'
    }
  }, {
    id: CreatureTraitId.HARDY,
    name: 'Hardy',
    labels: {
      description: 'The creature can sustain more damage than most. Increase its Wounds by a number equal to its Toughness Bonus (applied before any Size modifiers).'
    }
  }, {
    id: CreatureTraitId.HATRED,
    name: 'Hatred',
    grouped: true,
    labels: {
      placeholder: 'Target',
      description: 'The creature really hates the Target. See Hatred on page 190.'
    }
  }, {
    id: CreatureTraitId.HORNS,
    name: 'Horns',
    grouped: true,
    value: true,
    labels: {
      placeholder: 'Feature, Rating',
      description: 'The creature has horns or some other sharp appendage (if its Horns Trait represents a different feature it will be noted in brackets). When the creature gains an Advantage for Charging, it may make a Free Attack with its Horns, performed as normal, using Rating to calculate Damage (its Strength Bonus is already included).'
    }
  }, {
    id: CreatureTraitId.HUNGRY,
    name: 'Hungry',
    labels: {
      description: 'The creature is always hungry for fresh meat. If it kills or incapacitates a living opponent (or encounters a fresh body), it must pass a Average (+20) Willpower Test or feast, losing its next Action and Move.'
    }
  }, {
    id: CreatureTraitId.IMMUNITY,
    name: 'Immunity',
    grouped: true,
    labels: {
      placeholder: 'Type',
      description: 'The creature is completely immune to a certain type of Damage, such as poison, magic, or electricity. All Damage of that type, including from a Critical Wound, is ignored.'
    }
  }, {
    id: CreatureTraitId.IMMUNITY_TO_PSYCHOLOGY,
    name: 'Immunity to Psychology',
    labels: {
      description: 'Whether brave, exceedingly stupid, or just caught up in the moment, the creature is utterly fearless. It ignores the Psychology rules. See page 190.'
    }
  }, {
    id: CreatureTraitId.INFECTED,
    name: 'Infected',
    labels: {
      description: 'The creature, or its weapon, carries a nasty infection. If it causes a living opponent to lose Wounds, it must pass an Easy (+40) Endurance Test or contract a Festering Wound (see page 187).'
    }
  }, {
    id: CreatureTraitId.INFESTATION,
    name: 'Infestation',
    labels: {
      description: 'The creature’s hide is infested with biting fleas or similar. All opponents suffer a penalty of –10 to hit it in melee combat as the parasites distract and overwhelm them.'
    }
  }, {
    id: CreatureTraitId.LEADER,
    name: 'Leader',
    labels: {
      description: 'The creature is a practiced leader. It receives a bonus of +10 to Fellowship and Willpower. Note: this Trait cannot be taken by creatures with the Bestial Trait.'
    }
  }, {
    id: CreatureTraitId.MAGICAL,
    name: 'Magical',
    labels: {
      description: 'The creature is wreathed in magic. All its attacks count as Magical, meaning it can harm creatures only susceptible to magical attacks.'
    }
  }, {
    id: CreatureTraitId.MAGIC_RESISTANCE,
    name: 'Magic Resistance',
    value: true,
    labels: {
      placeholder: 'Rating',
      description: 'Magic has a reduced effect on the creature. The SL of any spell affecting it is reduced by the Rating given. So, Magic Resistance 2 would reduce the SL by 2.'
    }
  }, {
    id: CreatureTraitId.MENTAL_CORRUPTION,
    name: 'Mental Corruption',
    labels: {
      description: 'The creature has Chaos on the mind. Roll on the Mental Corruption Table found on page 185.'
    }
  }, {
    id: CreatureTraitId.MIRACLES,
    name: 'Miracles',
    value: true,
    labels: {
      placeholder: 'Various',
      description: 'The creature can enact Miracles; the relevant deity is indicated in brackets.'
    }
  }, {
    id: CreatureTraitId.MUTATION,
    name: 'Mutation',
    labels: {
      description: 'The creature is ‘blessed’ with a Mutation. Roll on the Physical Corruption Table found on page 184.'
    }
  }, {
    id: CreatureTraitId.NIGHT_VISION,
    name: 'Night Vision',
    labels: {
      description: 'The creature has the Night Vision Talent. See page 141.'
    }
  }, {
    id: CreatureTraitId.PAINLESS,
    name: 'Painless',
    labels: {
      description: 'The creature feels no pain or can ignore it. All non-amputation penalties suffered from Critical Wounds are ignored, although Conditions are suffered as normal.'
    }
  }, {
    id: CreatureTraitId.PETRIFYING_GAZE,
    name: 'Petrifying Gaze',
    labels: {
      description: 'The creature’s gaze can turn flesh to stone. For its Action, it can spend all its Advantage to unleash its gaze (minimum of 1). The creature performs an Opposed Ballistic Skill/Initiative test, adding 1 SL per Advantage spent. Its opponent gains 1 Stunned status per 2 SL by which it wins. If it wins by at least 6 SL, its target is permanently turned to stone.\nIf the target is a spellcaster, the test can be Opposed with Language (Magick) instead of Initiative as counter spells are cast.'
    }
  }, {
    id: CreatureTraitId.PREJUDICE,
    name: 'Prejudice (Target)',
    value: true,
    labels: {
      placeholder: 'Target',
      description: 'The creature just doesn’t like the Target. See page 190 for rules on Prejudice.'
    }
  }, {
    id: CreatureTraitId.RANGED,
    name: 'Ranged',
    grouped: true,
    value: true,
    labels: {
      placeholder: 'Rating, Range',
      description: 'The creature has a ranged weapon. The weapon does Damage equal to the Rating and the range in yards is marked in brackets.'
    }
  }, {
    id: CreatureTraitId.REAR,
    name: 'Rear',
    labels: {
      description: 'For its Move, the creature may make a Stomp attack if it is larger than its opponent (see Size).'
    }
  }, {
    id: CreatureTraitId.REGENERATE,
    name: 'Regenerate',
    labels: {
      description: 'The creature is capable of healing at an extraordinary rate, even regrowing severed parts. At the start of each round, if it has more than 0 Wounds remaining, it will automatically regenerate 1d10 Wounds. If it has 0 Wounds remaining, it will regenerate a single Wound on a 1d10 roll of 8+. If it ever rolls a 10 for regenerating, it also fully regenerates a Critical Wound, losing all penalties and Conditions associated with it. Any Critical Wounds or Wounds caused by Fire may not be regenerated and should be recorded separately.'
    }
  }, {
    id: CreatureTraitId.SIZE,
    name: 'Size',
    value: true,
    labels: {
      placeholder: 'Various',
      description: 'This trait represents creatures whose size differ from the game standard (i.e. roughly human sized). There are seven steps of Size, ranging from Tiny to Monstrous.'
    }
  }, {
    id: CreatureTraitId.SKITTISH,
    name: 'Skittish',
    labels: {
      description: 'The creature is easily scared by magic or loud noises. If such occurs, it receives +3 Broken Conditions.'
    }
  }, {
    id: CreatureTraitId.SPELLCASTER,
    name: 'Spellcaster',
    value: true,
    labels: {
      placeholder: 'Various',
      description: 'The creature can cast spells; the specific Lore of Magic will be indicated in brackets.'
    }
  }, {
    id: CreatureTraitId.STEALTHY,
    name: 'Stealthy',
    labels: {
      description: 'The creature is especially stealthy. It adds a number equal to its Agility Bonus to the SL of all Stealth Tests.'
    }
  }, {
    id: CreatureTraitId.STRIDE,
    name: 'Stride',
    labels: {
      description: 'The creature has a long stride, perhaps because it is a quadruped or has especially long legs. Multiply Run Movement by 1.5 when Running.'
    }
  }, {
    id: CreatureTraitId.STUPID,
    name: 'Stupid',
    labels: {
      description: 'While not entirely devoid of self-awareness (and so lacking the Bestial trait), the creature is stupid. If it is near any allies without the Stupid Trait, they guide it and nothing happens. Otherwise, it must pass an Easy (+40) Intelligence Test at the start of each round, or become very confused. Should this occur it will drool, perhaps sitting down or picking its nose, doing little of use, losing both its Move and Action for that Turn.'
    }
  }, {
    id: CreatureTraitId.SWAMP_STRIDER,
    name: 'Swamp-strider',
    labels: {
      description: 'The creature is at home in a swamp. It suffers no Movement penalties for moving through boggy ground.'
    }
  }, {
    id: CreatureTraitId.SWARM,
    name: 'Swarm',
    labels: {
      description: 'Swarms are large numbers of the same creature acting as one. The swarm counts as a single Creature that ignores the Psychology rules (see page 190), and can ignore the Engaged rules when using its Move. If the Swarm successfully strikes an opponent it activates the Deathblow rule (even if it has not killed its opponent — see page 160). All opponents Engaged with a Swarm automatically lose 1 Wound at the end of every Round as the Swarm overwhelms anything close.The Swarm has five times the Wounds of a normal example of the creature and gains +10 Weapon Skill. Any attempts to shoot the Swarm gain a bonus of +40 to hit. Swarms ignore all the Size Creature Trait rules.'
    }
  }, {
    id: CreatureTraitId.TAIL_ATTACK,
    name: 'Tail Attack',
    value: true,
    labels: {
      placeholder: 'Rating',
      description: 'The creature’s tail is capable of sweeping foes from their feet. On its turn, it may make a Free Attack by spending 1 Advantage. The Tail does Rating Damage, which includes its Strength Bonus already. Opponents with a smaller Size than the creature, that suffer any Wounds from the attack, also gain the Prone Condition.'
    }
  }, {
    id: CreatureTraitId.TENTACLES,
    name: 'Tentacles',
    value: true,
    labels: {
      placeholder: 'Rating',
      description: 'The creature has a number of tentacles equal to #. It gains one Free Attack Action per tentacle. Each tentacle’s attack does Rating Damage, which includes its Strength Bonus already. If it causes Damage, it can also give its opponent an Entangled Condition, which will initiate a Grapple between the target and that tentacle. If a tentacle is Grappling, use the tentacle’s Free Attack Action to resolve that Grapple, not the creature’s Action (see page 338).'
    }
  }, {
    id: CreatureTraitId.TERRITORIAL,
    name: 'Territorial',
    labels: {
      description: 'This creature is protective of a particular area or location. It will fight to the death to protect it and will not normally pursue enemies if they flee this area.'
    }
  }, {
    id: CreatureTraitId.TERROR,
    name: 'Terror',
    value: true,
    labels: {
      placeholder: 'Rating',
      description: 'The creature supernaturally causes bone-chilling Terror in other creatures, at the Rating given. See page 191.'
    }
  }, {
    id: CreatureTraitId.TRAINED,
    name: 'Trained',
    grouped: true,
    labels: {
      placeholder: 'Trained Skills',
      description: 'This trait represents animals that have been trained through the Animal Training Skill. The skills the animal knows is marked in the brackets. Feel free to create your own trained skills.\nBroken: The animal is trained to ignore its Bestial trait. It receives 2d10 Fellowship.\nDrive: The animal is trained to pull a coach, cart, plough, buggy, or similar.\nEntertain: The animal is trained to entertain others. It adds a +10 bonus to appropriate Entertain, Perform, or Play Tests.\nFetch: The animal is trained to fetch. This is normal reserved for Dogs and similar.\nGuard: The animal is trained to stay in one place or prowl around as a guard, granting it the Territorial Trait.\nHome: The animal is trained to return home if it is released or lost. Magic: The animal is trained to ignore Skittish when it comes to magic, which is required for most horses used by Wizards. Mount: The animal will accept a rider. Some creatures are especially belligerent, and will not accept a rider without the correct skill. So, to ride a Griffon, you need the Ride (Griffon) skill.\nWar: The animal is trained for war, gaining +10 Weapon Skill. It can also ignore Skittish for loud noises.'
    }
  }, {
    id: CreatureTraitId.TONGUE_ATTACK,
    name: 'Tongue Attack',
    labels: {
      placeholder: 'Rating, Range',
      description: 'The creature’s prehensile tongue can wrap itself around prey, dragging it to a grisly end. On its turn, it may make a Free Attack by spending 1 Advantage. This is a ranged attack that does Damage equal to its Rating (the range is in brackets). If the attack hits, the target receives 1 Entangled Condition and, if a smaller Size, is dragged towards the creature, and is Engaged in melee combat. The creature can then choose whether to release the target, perform a Free Attack using its Weapon Trait, or to keep the target wrapped in its tongue, initiating a Grapple (see page 163).'
    }
  }, {
    id: CreatureTraitId.TOUGH,
    name: 'Tough',
    labels: {
      description: 'The creature is more resistant to damage than normal, and unlikely to back down. It receives +10 Toughness and Willpower.'
    }
  }, {
    id: CreatureTraitId.TRACKER,
    name: 'Tracker',
    labels: {
      description: 'Trackers are adept at following their prey, generally through scent or hearing. They add SL equal to their Initiative Bonus to all Track Tests.'
    }
  }, {
    id: CreatureTraitId.UNDEAD,
    name: 'Undead',
    labels: {
      description: 'The Undead are neither living, nor dead, meaning they are not reliant on the usual prerequisites for life: air, food, water... This Trait most commonly come into use when spells, miracles, or other abilities affect Undead only.'
    }
  }, {
    id: CreatureTraitId.UNSTABLE,
    name: 'Unstable',
    labels: {
      description: 'The creature’s corpus is maintained by foul magics that are inherently unstable in the material realm. Whenever it ends a Round engaged with any opponents with higher Advantage, the creature is driven back, and the magics holding it together weaken. It loses as many Wounds as the difference between its Advantage, and the highest Advantage engaged with it. So, if the creature had 1 Advantage, and its opponent had 3, the creature would lose 2 Wounds. If the creature ever reach 0 Wounds, the magics holding it in place collapse, and it ‘dies’.'
    }
  }, {
    id: CreatureTraitId.VAMPIRIC,
    name: 'Vampiric',
    labels: {
      description: 'The creature feeds on blood and draws great physical strength from this act. Whenever it performs a successful Bite attack against an appropriate opponent, it heals as many Wounds as its opponent loses. Drinking blood in this way is the only way it can heal.'
    }
  }, {
    id: CreatureTraitId.VENOM,
    name: 'Venom',
    value: true,
    labels: {
      placeholder: 'Difficulty',
      description: 'The creature’s attacks are poisoned or envenomed. When it causes Wounds, its opponent gains a Poisoned Condition. If no Difficulty is marked to resist the Venom, it is assumed to be Challenging. See page 169.'
    }
  }, {
    id: CreatureTraitId.VOMIT,
    name: 'Vomit',
    labels: {
      description: 'The creature can spew a stream of corrosive corruption, dowsing its opponents in foul, semi-digested filth. On its turn, by spending 3 Advantage, the creature can activate its Vomit as a Free Attack. The creature chooses 1 target it can see within Toughness Bonus yards and lets loose; all targets within two yards are also hit.\nThe creature performs an Opposed Ballistic Skill/Dodge Test against all affected targets (its single roll opposed by each individual target). The Test is typically Easy (+40) for the vomiting creature, due to the close range, and Challenging (+0) for opponents. All losing targets suffer a hit with a Weapon Damage of the creature’s Toughness Bonus +4 and receive a Stunned condition.\nAll Armour and Weapons carried by affected targets suffer 1 Damage as the acidic vomit corrodes it away.'
    }
  }, {
    id: CreatureTraitId.WARD,
    name: 'Ward',
    value: true,
    labels: {
      placeholder: 'Rating',
      description: 'Perhaps because they are magical, wear a special talisman, or are just plain lucky, some blows just seem to miss. Roll 1d10 after any blow is received, if the creature rolls Rating or higher, the blow is ignored, even if it is a critical.'
    }
  }, {
    id: CreatureTraitId.WALLCRAWLER,
    name: 'Wallcrawler',
    labels: {
      description: 'The creature can effortlessly scale vertical surfaces and even traverse ceilings, ready to drop on unwary prey. It moves at full Movement across any appropriate surface and automatically passes all Climb tests.'
    }
  }, {
    id: CreatureTraitId.WEAPON,
    name: 'Weapon',
    grouped: true,
    value: true,
    labels: {
      placeholder: 'Rating',
      description: 'The creature carries a melee weapon, or uses teeth, claws, or similar in combat.\nThe weapon causes Damage equal to its Rating which already includes the creature’s Strength Bonus. Typically it will be 4 + its Strength Bonus (representing a Hand Weapon).'
    }
  }, {
    id: CreatureTraitId.WEB,
    name: 'Web',
    value: true,
    labels: {
      placeholder: 'Rating',
      description: 'The creature can create webbing to trap unwary foes. Whenever it successfully hits, opponents gain 1 Entangled status, with a Strength of the Rating given. See page 168.'
    }
  },
];
