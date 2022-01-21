import {SpecialAbilityId} from './enums';
import {SpecialAbility} from './models';

export const SPECIAL_ABILITIES: SpecialAbility[] = [
  {
    id: SpecialAbilityId.BATTLEBORN,
    name: 'Batleborn',
    labels: {
      description: 'You may expend your special armor to reduce harm from an attack in combat or to push yourself during a fight.',
      explanation: 'When you use this ability, tick the special armor box on your playbook sheet. If you “reduce harm” that means the level of harm you’re facing right now is reduced by one. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.'
    },
  },
  {
    id: SpecialAbilityId.BODYGUARD,
    name: 'Bodyguard',
    labels: {
      description: 'When you protect a teammate, take +1d to your resistance roll. When you gather info to anticipate possible threats in the current situation, you get +1 effect.',
      explanation: 'The protect teamwork maneuver lets you face a consequence for a teammate. If you choose to resist that consequence, this ability gives you +1d to your resistance roll. Also, when you read a situation to gather information about hidden dangers or potential attackers, you get +1 effect—which means more detailed information.'
    },
  },
  {
    id: SpecialAbilityId.GHOST_FIGHTER,
    name: 'Ghost Fighter',
    labels: {
      description: 'You may imbue your hands, melee weapons, or tools with spirit energy. You gain potency in combat vs. the supernatural. You may grapple with spirits to restrain and capture them.',
      explanation: 'When you imbue yourself with spirit energy, how do you do it? What does it look like when the energy manifests? When you’re imbued, you can strongly interact with ghosts and spirit-stuff, rather than weakly interact.'
    },
  },
  {
    id: SpecialAbilityId.LEADER,
    name: 'Leader',
    labels: {
      description: 'When you Command a cohort in combat, they continue to fight when they would otherwise break (they’re not taken out when they suffer level 3 harm). They gain +1 effect and 1 armor.',
      explanation: 'This ability makes your cohorts more effective in battle and also allows them to resist harm by using armor. While you lead your cohorts, they won’t stop fighting until they take fatal harm (level 4) or you order them to cease. What do you do to inspire such bravery in battle?\nFor details about cohorts, see page 96.'
    },
  },
  {
    id: SpecialAbilityId.MULE,
    name: 'Mule',
    labels: {
      description: 'Your load limits are higher. Light: 5. Normal: 7. Heavy: 8.',
      explanation: 'This ability is great if you want to wear heavy armor and pack a heavy weapon without attracting lots of attention. Since your exact gear is determined on- the-fly during an operation, having more load also gives you more options to get creative with when dealing with problems during a score.'
    },
  },
  {
    id: SpecialAbilityId.NOT_TO_BE_TRIFLED_WITH,
    name: 'Not To Be Trifled With',
    labels: {
      description: 'You can push yourself to do one of the following: perform a feat of physical force that verges on the superhuman — engage a small gang on equal footing in close combat.',
      explanation: 'When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) in addition to the special ability.\nIf you perform a feat that verges on the superhuman, you might break a metal weapon with your bare hands, tackle a galloping horse, lift a huge weight, etc. If you engage a small gang on equal footing, you don’t suffer reduced effect due to scale against a small gang (up to six people).'
    },
  },
  {
    id: SpecialAbilityId.SAVAGE,
    name: 'Savage',
    labels: {
      description: 'When you unleash physical violence, it’s especially frightening. When you Command a frightened target, take +1d.',
      explanation: 'You instill fear in those around you when you get violent. How they react depends on the person. Some people will flee from you, some will be impressed, some will get violent in return. The GM judges the response of a given NPC.\nIn addition, when you Command someone who’s affected by fear (from this ability or otherwise), take +1d to your roll.'
    },
  },
  {
    id: SpecialAbilityId.VIGOROUS,
    name: 'Vigorous',
    labels: {
      description: 'You recover from harm faster. Permanently fill in one of your healing clock segments. Take +1d to healing treatment rolls.',
      explanation: 'Your healing clock becomes a 3-clock, and you get a bonus die when you recover.'
    },
  },
  {
    id: SpecialAbilityId.SHARPSHOOTER,
    name: 'Sharpshooter',
    labels: {
      description: 'You can push yourself to do one of the following: make a ranged attack at extreme distance beyond what’s normal for the weapon—unleash a barrage of rapid fire to suppress the enemy.',
      explanation: 'When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) in addition to the special ability.\nThe first use of this ability allows you to attempt long-range sniper shots that would otherwise be impossible with the rudimentary firearms of Duskwall. The second use allows you to keep up a steady rate of fire in a battle (enough to “suppress” a small gang up to six people), rather than stopping for a slow reload or discarding a gun after each shot. When an enemy is suppressed, they’re reluctant to maneuver or attack (usually calling for a fortune roll to see if they can manage it).'
    },
  },
  {
    id: SpecialAbilityId.FOCUSED,
    name: 'Focused',
    labels: {
      description: 'You may expend your special armor to resist a consequence of surprise or mental harm (fear, confusion, losing track of someone) or to push yourself for ranged combat or tracking.',
      explanation: 'When you use this ability, tick the special armor box on your playbook sheet. If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.'
    },
  },
  {
    id: SpecialAbilityId.GHOST_HUNTER,
    name: 'Ghost Hunter',
    labels: {
      description: 'Your hunting pet is imbued with spirit energy. It gains potency when tracking or fighting the supernatural, and gains an arcane ability: ghost-form, mind-link, or arrow-swift. Take this ability again to choose an additional arcane ability for your pet.',
      explanation: 'Your pet functions as a cohort (Expert: Hunter). This ability gives them potency against supernatural targets and an arcane ability of your choice. Ghost-form allows the pet to transform into electroplasmic vapor as if it were a spirit. Mind- link allows the pet and hunter to share their senses and thoughts telepathically. Arrow-swift allows the pet to move extremely quickly, out-pacing any other creature or vehicle. For more details about cohorts, see page 96.'
    },
  },
  {
    id: SpecialAbilityId.SCOUT,
    name: 'Scout',
    labels: {
      description: 'When you gather information to discover the location of a target, you get +1 effect. When you hide in a prepared position or use camouflage you get +1d to rolls to avoid detection.',
      explanation: 'A “target” can be a person, a destination, a good ambush spot, an item, etc.'
    },
  },
  {
    id: SpecialAbilityId.SURVIVOR,
    name: 'Survivor',
    labels: {
      description: 'From hard-won experience or occult ritual, you are immune to the poisonous miasma of the deathlands and are able to subsist on the strange flora and fauna there. You get +1 stress box.',
      explanation: 'This ability gives you an additional stress box, so you have 10 instead of 9. The maximum number of stress boxes a PC can have (from any number of additional special abilities or upgrades) is 12.'
    },
  },
  {
    id: SpecialAbilityId.TOUGH_AS_NAILS,
    name: 'Tough As Nails',
    labels: {
      description: 'Penalties from harm are one level less severe (though level 4 harm is still fatal).',
      explanation: 'With this ability, level 3 harm doesn’t incapacitate you; instead you take -1d to your rolls (as if it were level 2 harm). Level 2 harm affects you as if it were level 1 (less effect). Level 1 harm has no effect on you (but you still write it on your sheet, and must recover to heal it). Record the harm at its original level—for healing purposes, the original harm level applies.'
    },
  },
  {
    id: SpecialAbilityId.VENGEFUL,
    name: 'Vengeful',
    labels: {
      description: 'You gain an additional xp trigger: You got payback against someone who harmed you or someone you care about. If your crew helped you get payback, also mark crew xp.',
      explanation: ''
    },
  },
  {
    id: SpecialAbilityId.ALCHEMIST,
    name: 'Alchemist',
    labels: {
      description: 'When you invent or craft a creation with alchemical features, you get +1 result level to your roll (a 1-3 becomes a 4/5, etc.). You begin with one special formula already known.',
      explanation: 'Follow the Inventing procedure with the GM (page 224) to define your first special alchemical formula.'
    },
  },
  {
    id: SpecialAbilityId.ANALYST,
    name: 'Analyst',
    labels: {
      description: 'During downtime, you get two ticks to distribute among any long term project clocks that involve investigation or learning a new formula or design plan.',
      explanation: ''
    },
  },
  {
    id: SpecialAbilityId.ARTIFICER,
    name: 'Artificer',
    labels: {
      description: 'When you invent or craft a creation with spark-craft features, you get +1 result level to your roll (a 1-3 becomes a 4/5, etc.). You begin with one special design already known.',
      explanation: 'Follow the Inventing procedure with the GM (page 224) to define your first spark-craft design.'
    },
  },
  {
    id: SpecialAbilityId.FORTITUDE,
    name: 'Fortitude',
    labels: {
      description: 'You may expend your special armor to resist a consequence of fatigue, weakness, or chemical effects, or to push yourself when working with technical skill or handling alchemicals.',
      explanation: 'When you use this ability, tick the special armor box on your playbook sheet. If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.'
    },
  },
  {
    id: SpecialAbilityId.GHOST_WARD,
    name: 'Ghost Ward',
    labels: {
      description: 'When you Wreck an area with arcane substances, ruining it for any other use, it becomes anathema or enticing to spirits (your choice).',
      explanation: 'If you make an area anathema to spirits, they will do everything they can to avoid it, and will suffer torment if forced inside the area. If you make an area enticing to spirits, they will seek it out and linger in the area, and will suffer torment if forced to leave. This effect lasts for several days over an area the size of a small room. Particularly powerful or prepared spirits may roll their quality or arcane magnitude to see how well they’re able to resist the effect.'
    },
  },
  {
    id: SpecialAbilityId.PHYSICKER,
    name: 'Physicker',
    labels: {
      description: 'You can Tinker with bones, blood, and bodily humours to treat wounds or stabilize the dying. You may Study a malady or corpse. Everyone in your crew (including you) gets +1d to their healing treatment rolls.',
      explanation: 'Knowledge of anatomy and healing is a rare and esoteric thing in Duskwall. Without this ability, any attempts at treatment are likely to fail or make things worse. You can use this ability to give first aid (rolling Tinker) to allow your patient to ignore a harm penalty for an hour or two.'
    },
  },
  {
    id: SpecialAbilityId.SABOTEUR,
    name: 'Saboteur',
    labels: {
      description: 'When you Wreck, your work is much quieter than it should be and the damage is very well-hidden from casual inspection.',
      explanation: 'You can drill holes in things, melt stuff with acid, even use a muffled explosive, and it will all be very quiet and extremely hard to notice.'
    },
  },
  {
    id: SpecialAbilityId.VENOMOUS,
    name: 'Venomous',
    labels: {
      description: 'Choose a drug or poison (from your bandolier stock) to which you have become immune. You can push yourself to secrete it through your skin or saliva or exhale it as a vapor.',
      explanation: 'When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) if you’re making a roll, in addition to the special ability.\nYou choose the type of drug or poison when you get this ability. You may change the drug or poison by completing a long-term project. Only a single drug or poison may be chosen—you can’t become immune to any essences, oils, or other alchemical substances.'
    },
  },
  {
    id: SpecialAbilityId.INFILTRATOR,
    name: 'Infiltrator',
    labels: {
      description: 'You are not affected by quality or Tier when you bypass security measures.',
      explanation: 'This ability lets you contend with higher-Tier enemies on equal footing. When you’re cracking a safe, picking a lock, or sneaking past elite guards, your effect level is never reduced due to superior Tier or quality level of your opposition.\nAre you a renowned safe cracker? Do people tell stories of how you slipped under the noses of two Chief Inspectors, or are your exceptional talents yet to be discovered?'
    },
  },
  {
    id: SpecialAbilityId.AMBUSH,
    name: 'Ambush',
    labels: {
      description: 'When you attack from hiding or spring a trap, you get +1d to your roll.',
      explanation: 'This ability benefits from preparation — so don’t forget you can do that in a flashback.'
    },
  },
  {
    id: SpecialAbilityId.DAREDEVIL,
    name: 'Daredevil',
    labels: {
      description: 'When you roll a desperate action, you get +1d to your roll if you also take -1d to any resistance rolls against consequences from your action.',
      explanation: 'This special ability is a bit of a gamble. The bonus die helps you, but if you suffer consequences, they’ll probably be more costly to resist. But hey, you’re a daredevil, so no big deal, right?'
    },
  },
  {
    id: SpecialAbilityId.THE_DEVILS_FOOTSTEPS,
    name: 'The Devil\'s Footsteps',
    labels: {
      description: 'You can push yourself to do one of the following: perform a feat of athletics that verges on the superhuman — maneuver to confuse your enemies so they mistakenly attack each other.',
      explanation: 'When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) if you’re making a roll, in addition to the special ability.\nIf you perform an athletic feat (running, tumbling, balance, climbing, etc.) that verges on the superhuman, you might climb a sheer surface that lacks good hand-holds, tumble safely out of a three-story fall, leap a shocking distance, etc.\nIf you maneuver to confuse your enemies, they attack each other for a moment before they realize their mistake. The GM might make a fortune roll to see how badly they harm or interfere with each other.'
    },
  },
  {
    id: SpecialAbilityId.EXPERTISE,
    name: 'Expertise',
    labels: {
      description: 'Choose one of your action ratings. When you lead a group action using that action, you can suffer only 1 stress at most, regardless of the number of failed rolls.',
      explanation: 'This special ability is good for covering for your team. If they’re all terrible at your favored action, you don’t have to worry about suffering a lot of stress when you lead their group action.'
    },
  },
  {
    id: SpecialAbilityId.GHOST_VEIL,
    name: 'Ghost Veil',
    labels: {
      description: 'You may shift partially into the ghost field, becoming shadowy and insubstantial for a few moments. Take 2 stress when you shift, plus 1 stress for each extra feature: it lasts for a few minutes rather than moments — you are invisible rather than shadowy—you may float through the air like a ghost.',
      explanation: 'This ability transforms you into an intangible shadow for a few moments. If you spend additional stress, you can extend the effect for additional benefits, which may improve your position or effect for action rolls, depending on the circumstances, as usual.'
    },
  },
  {
    id: SpecialAbilityId.REFLEXES,
    name: 'Reflexes',
    labels: {
      description: 'When there’s a question about who acts first, the answer is you.',
      explanation: 'This ability gives you the initiative in most situations. Some specially trained NPCs (and some demons and spirits) might also have reflexes, but otherwise, you’re always the first to act, and can interrupt anyone else who tries to beat you to the punch. This ability usually doesn’t negate the need to make an action roll that you would otherwise have to make, but it may improve your position or effect.'
    },
  },
  {
    id: SpecialAbilityId.SHADOW,
    name: 'Shadow',
    labels: {
      description: 'You may expend your special armor to resist a consequence from detection or security measures, or to push yourself for a feat of athletics or stealth.',
      explanation: 'When you use this ability, tick the special armor box on your playbook sheet. If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.'
    },
  },
  {
    id: SpecialAbilityId.ROOKS_GAMBIT,
    name: 'Rook\'s Gambit',
    labels: {
      description: 'Take 2 stress to roll your best action rating while performing a different action. Say how you adapt your skill to this use.',
      explanation: 'This is the “jack-of-all-trades” ability. If you want to attempt lots of different sorts of actions and still have a good dice pool to roll, this is the special ability for you.'
    },
  },
  {
    id: SpecialAbilityId.CLOAK_DAGGER,
    name: 'Cloak & Dagger',
    labels: {
      description: 'When you use a disguise or other form of covert misdirection, you get +1d to rolls to confuse or deflect suspicion. When you throw off your disguise, the resulting surprise gives you the initiative in the situation.',
      explanation: 'This ability gives you the chance to more easily get out of trouble if a covert operation goes haywire. Also, don’t forget your fine disguise kit item, which boosts the effect of your covert deception methods.'
    },
  },
  {
    id: SpecialAbilityId.GHOST_VOICE,
    name: 'Ghost Voice',
    labels: {
      description: 'You know the secret method to interact with a ghost or demon as if it were a normal human, regardless of how wild or feral it appears. You gain potency when communicating with the supernatural.',
      explanation: 'The first part of this ability gives you permission to do something that is normally impossible: when you speak to a spirit, it always listens and understands you, even if it would otherwise be too bestial or insane to do so. The second part of the ability increases your effect when you use social actions with the supernatural.'
    },
  },
  {
    id: SpecialAbilityId.LIKE_LOOKING_INTO_A_MIRROR,
    name: 'Like Looking Into A Mirror',
    labels: {
      description: 'You can always tell when someone is lying to you.',
      explanation: 'This ability works in all situations without restriction. It is very powerful, but also a bit of a curse. You see though every lie, even the kind ones.'
    },
  },
  {
    id: SpecialAbilityId.A_LITTLE_SOMETHING_ON_THE_SIDE,
    name: 'A Little Something On The Side',
    labels: {
      description: 'At the end of each downtime phase, you earn +2 stash.',
      explanation: 'Since this money comes at the end of downtime, after all downtime actions are resolved, you can’t remove it from your stash and spend it on extra activities until your next downtime phase.'
    },
  },
  {
    id: SpecialAbilityId.MESMERISM,
    name: 'Mesmerism',
    labels: {
      description: 'When you Sway someone, you may cause them to forget that it’s happened until they next interact with you.',
      explanation: 'The victim’s memory “glosses over” the missing time, so it’s not suspicious that they’ve forgotten something. When you next interact with the victim, they remember everything clearly, including the strange effect of this ability.'
    },
  },
  {
    id: SpecialAbilityId.SUBTERFUGE,
    name: 'Subterfuge',
    labels: {
      description: 'You may expend your special armor to resist a consequence from suspicion or persuasion, or to push yourself for subterfuge.',
      explanation: 'When you use this ability, tick the special armor box on your playbook sheet. If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.'
    },
  },
  {
    id: SpecialAbilityId.TRUST_IN_ME,
    name: 'Trust In Me',
    labels: {
      description: 'You get +1d vs. a target with whom you have an intimate relationship.',
      explanation: 'This ability isn’t just for social interactions. Any action can get the bonus. “Intimate” is for you and the group to define, it need not exclusively mean romantic intimacy.'
    },
  },
  {
    id: SpecialAbilityId.FORESIGHT,
    name: 'Foresight',
    labels: {
      description: 'Two times per score you can assist a teammate without paying stress. Describe how you prepared for this.',
      explanation: 'You can narrate an event in the past that helps your teammate now, or you might explain how you expected this situation and planned a helpful contingency that you reveal now.'
    },
  },
  {
    id: SpecialAbilityId.CALCULATING,
    name: 'Calculating',
    labels: {
      description: 'Due to your careful planning, during downtime, you may give yourself or another crew member +1 downtime activity.',
      explanation: 'If you forget to use this ability during downtime, you can still activate it during the score and flashback to the previous downtime when the extra activity happened.'
    },
  },
  {
    id: SpecialAbilityId.CONNECTED,
    name: 'Connected',
    labels: {
      description: 'During downtime, you get +1 result level when you acquire an asset or reduce heat.',
      explanation: 'Your array of underworld connections can be leveraged to loan assets, pressure a vendor to give you a better deal, intimidate witnesses, etc.'
    },
  },
  {
    id: SpecialAbilityId.FUNCTIONING_VICE,
    name: 'Functioning Vice',
    labels: {
      description: 'When you indulge your vice, you may adjust the dice outcome by 1 or 2 (up or down). An ally who joins you may do the same.',
      explanation: 'If you indulged your vice and rolled a 4, you could increase the result to 5 or 6, or you could reduce the result to 3 or 2 (perhaps to avoid overindulgence). Allies that join you don’t need to have the same vice as you, just one that could be indulged alongside yours somehow.'
    },
  },
  {
    id: SpecialAbilityId.GHOST_CONTRACT,
    name: 'Ghost Contract',
    labels: {
      description: 'When you shake on a deal or draft one in writing, you and your partner—human or otherwise—both bear a mark of your oath. If either breaks the contract, they take level 3 harm, “Cursed.”',
      explanation: 'The mark of the oath is obvious to anyone who sees it (perhaps a magical rune appears on the skin). When you suffer “Cursed” harm, you’re incapacitated by withering: enfeebled muscles, hair falling out, bleeding from the eyes and ears, etc., until you either fulfill the deal or discover a way to heal the curse.'
    },
  },
  {
    id: SpecialAbilityId.JAIL_BIRD,
    name: 'Jail Bird',
    labels: {
      description: 'When incarcerated, your wanted level counts as 1 less, your Tier as 1 more, and you gain +1 faction status with a faction that you help while you’re inside, in addition to whatever you get from the incarceration roll.',
      explanation: 'Zero is the minimum wanted level; this ability can’t make your wanted level negative. See the Incarceration roll, page 148.'
    },
  },
  {
    id: SpecialAbilityId.MASTERMIND,
    name: 'Mastermind',
    labels: {
      description: 'You may expend your special armor to protect a teammate, or to push yourself when you gather information or work on a long-term project.',
      explanation: 'When you use this ability, tick the special armor box on your playbook sheet. If you protect a teammate, this ability negates or reduces the severity of a consequence or harm that your teammate is facing. You don’t have to be present to use this ability—say how you prepared for this situation in the past. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.'
    },
  },
  {
    id: SpecialAbilityId.WEAVING_THE_WEB,
    name: 'Weaving THe Web',
    labels: {
      description: 'You gain +1d to Consort when you gather information on a target for a score. You get +1d to the engagement roll for that operation.',
      explanation: 'Your network of underworld connections can always be leveraged to gain insight for a job — even when your contacts aren’t aware that they’re helping you.'
    },
  },
  {
    id: SpecialAbilityId.COMPEL,
    name: 'Compel',
    labels: {
      description: 'You can Attune to the ghost field to force a nearby ghost to appear before you and obey an order you give it. You are not supernaturally terrified by a ghost you summon or attempt to compel (though your allies may be).',
      explanation: 'The GM will tell you if you sense any ghosts nearby. If you don’t, you can gather information (maybe Attune, Survey, or Study) to attempt to locate one. By default, a ghost wants to satisfy its need for life essence and to exact vengeance. When you compel it, you can give it a general or specific command, but the more general it is (like “Protect me”) the more the ghost will interpret it according to its own desires. Your control over the ghost lasts until the command is fulfilled, or until a day has passed, whichever comes first.'
    },
  },
  {
    id: SpecialAbilityId.GHOST_MIND,
    name: 'Ghost Mind',
    labels: {
      description: 'You’re always aware of supernatural entities in your presence. Take +1d whenever you gather information about the supernatural by any means.',
      explanation: ''
    },
  },
  {
    id: SpecialAbilityId.IRON_WILL,
    name: 'Iron Will',
    labels: {
      description: 'You are immune to the terror that some supernatural entities inflict on sight. When you make a resistance roll with Resolve, take +1d.',
      explanation: 'With this ability, you do not freeze up or flee when confronted by any kind of supernatural entity or strange occult event.'
    },
  },
  {
    id: SpecialAbilityId.OCCULTIST,
    name: 'Occultist',
    labels: {
      description: 'You know the secret ways to Consort with ancient powers, forgotten gods, or demons. Once you’ve consorted with one, you get +1d to Command cultists who worship it.',
      explanation: 'Consorting with a given entity may require special preparations or travel to a specific place. The GM will tell you about any requirements. You get the bonus die to your Command rolls because you can demonstrate a secret knowledge of or influence over the entity when you interact with cultists.'
    },
  },
  {
    id: SpecialAbilityId.RITUAL,
    name: 'Ritual',
    labels: {
      description: 'You know the arcane methods to perform ritual sorcery. You can Study an occult ritual (or create a new one) to summon a supernatural effect or being. You begin with one ritual already learned.',
      explanation: 'Without this special ability, the study and practice of rituals leaves you utterly vulnerable to the powers you supplicate. Such endeavors are not recommended.\nFor more details, see Rituals, page 222.'
    },
  },
  {
    id: SpecialAbilityId.STRANGE_METHODS,
    name: 'Strange Methods',
    labels: {
      description: 'When you invent or craft a creation with arcane features, get +1 result level to your roll (a 1-3 becomes a 4/5, etc.). You begin with one arcane design already known.',
      explanation: 'Follow the Inventing procedure with the GM (page 224) to define your first arcane design.'
    },
  },
  {
    id: SpecialAbilityId.TEMPEST,
    name: 'Tempest',
    labels: {
      description: 'You can push yourself to do one of the following: unleash a stroke of lightning as a weapon—summon a storm in your immediate vicinity (torrential rain, roaring winds, heavy fog, chilling frost and snow, etc.).',
      explanation: 'When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) if you’re making a roll, in addition to the special ability.\nWhen you unleash lightning as a weapon, the GM will describe its effect level and significant collateral damage. If you unleash it in combat against an enemy who’s threatening you, you’ll still make an action roll in the fight (usually with Attune).\nWhen you summon a storm, the GM will describe its effect level. If you’re using this power as cover or distraction, it’s probably a setup teamwork maneuver, using Attune.'
    },
  },
  {
    id: SpecialAbilityId.WARDED,
    name: 'Warded',
    labels: {
      description: 'You may expend your special armor to resist a supernatural consequence, or to push yourself when you contend with or employ arcane forces.',
      explanation: 'When you use this ability, tick the special armor box on your playbook sheet. If you resist a consequence, this ability negates or reduces its severity. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.'
    },
  },
];
