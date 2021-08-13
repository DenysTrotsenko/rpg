import {Condition} from '../scion.models';

export const CONDITIONS: Condition[] = [
  {
    id: null,
    name: 'Bruised',
    labels: {
      description: 'You’re beaten up a bit.',
      effect: 'Special; see below, or Storyguide or player’s choice depending on Injury.',
      momentum: 'The injury gets in your way later in the scene, adding +1 Difficulty to an action.',
      resolution: 'Various Calling or other healing magic; otherwise, wait two days.'
    },
  },
  {
    id: null,
    name: 'Injured',
    labels: {
      description: 'You have been solidly hit, and are suffering from a serious but still heroic wound.',
      effect: 'Special; see below, or Storyguide or player’s choice depending on Injury.',
      momentum: 'The Injury gets in your way later in the scene, adding +2 Difficulty to an action.',
      resolution: 'Healing magic, or wait two weeks.'
    },
  },
  {
    id: null,
    name: 'Maimed',
    labels: {
      description: 'You have suffered an incredibly serious, and potentially permanent, wound.',
      effect: 'Special; see below, or Storyguide or player’s choice depending on Injury.',
      momentum: 'The Injury gets in your way later in the scene, adding +4 Difficulty to an action.',
      resolution: 'Healing magic, or wait two weeks.'
    }
  },
  {
    id: null,
    name: 'Taken Out',
    labels: {
      description: 'You have been hurt enough to take you out of a fight. You might be dying, trapped under serious amounts of rubble, or simply knocked out cold or too bruised to move. You might be able to talk, but can’t make any serious efforts at convincing someone of something.',
      effect: 'You may not take any more actions during the scene in which you’ve taken this Condition. Any successful hit in a later scene has the same effect until you resolve this Condition. Add three Momentum to the pool when you first acquire Taken Out, and for every time a definite lack of your presence in the fight harms your companions.',
      momentum: '',
      resolution: 'The Injury that caused you to be Taken Out, while no longer incapacitating, gets in your way in a later scene, adding +3 Difficulty to an action.'
    }
  },
  {
    id: null,
    name: 'Poisoned',
    labels: {
      description: '',
      effect: 'This Condition lasts a number of rounds equal to the number of successes that inflicted it (equal to the successes over the target’s Defense). For each round it persists, it deals damage to the target as though the Inflict Damage Stunt had been applied to the target until the target dedicates a simple action to overcoming the poison via a Resolve or Survival + Stamina roll. Armor does nothing to resist the Injuries that poison might cause.\nSome poisons are soporifics, or may paralyze their target, or deal any number of other unusual effects rather than damage. Administer the poison as you would normally. In the event that a character is poisoning another’s food or drink, make opposed rolls: Subterfuge + Dexterity or Manipulation vs. an applicable perception roll. Ties favor the defender. Instead of dealing damage that persists, this inflicts whichever kind of effect it would supply otherwise, resolving itself as listed above.',
      momentum: 'Every time the sufferer takes damage.',
      resolution: 'Overcome the poison or be the recipient of healing magic.'
    },
  },
  {
    id: null,
    name: 'Path Suspended',
    labels: {
      description: 'You’ve done something to upset your Path connections. Maybe you called on them one too many times (more than once a session, generally) and they’re tired of your constantly needy attitude. Maybe you tapped into the trust fund too deeply, or you violated some minor code. You’re on the outs with those on your Path, but they haven’t written you off completely.',
      effect: 'You suffer Complication 2 whenever you attempt to engage anyone within your Path’s group. If you attempt to access your connections again, or violate another code, you’ll gain the Revoked Condition.',
      momentum: '',
      resolution: 'This Condition ends at the end of the game session. Fulfilling a specific obligation may remove this Condition.'
    }
  },
  {
    id: null,
    name: 'Path Revoked (Persistent)',
    labels: {
      description: 'You’ve really messed up this time. Maybe you broke an inviolate code, violated your suspension, or maybe you just broke the rules one too many times. Your membership has been revoked.',
      effect: 'You are still part of the Path, but you cannot attempt to access your connections or otherwise benefit while you are still Revoked.',
      momentum: '',
      resolution: 'You must dedicate a long-term Deed to regaining your Path’s good graces.'
    }
  },
  {
    id: null,
    name: 'Virtuous',
    labels: {
      description: 'You are suffused with the philosophy of your pantheon’s ethos. While this grants you additional power and puissance, it also limits your ability to act freely.',
      effect: 'Every point of Momentum you spend to augment a roll with a Virtue receives an additional die that doesn’t come out of the pool — more bang for your buck. However, you must continue to act and fulfill the pantheon Virtue, and you cannot act against it — an Æsir Scion must attack a foe (even one far greater than they) with Audacity when they’re confronted, while a Shén suffused with Yang must indulge his passions at every opportunity.',
      momentum: 'Every time your Virtue rage causes trouble, add another point of Momentum into the pool.',
      resolution: 'Reinforcing the opposing pantheon Virtue resolves the Condition. Note that this can only occur with an action that reinforces the opposing Virtue without contradicting the Condition’s effect. The Æsir must indulge in melancholy and Fatalism without missing an opportunity to be Audacious, while the Shén must calm his chi with contemplative, cold yin.'
    }
  },
  {
    id: null,
    name: 'FOX’S TAIL (PERSISTENT CONDITION)',
    labels: {
      description: 'From that point on, every shape that the kitsune takes has a fox tail. It can be hidden under loose-fitting clothes or disguised as decoration when the kitsune is in an inanimate form, but it is always present.',
      effect: 'You’ve got a fox’s tail. It’s fluffy.',
      momentum: 'Every time your tail causes you trouble or reveals your supernatural nature, add another point of Momentum to the pool.',
      resolution: ''
    }
  },
  {
    id: null,
    name: 'HOOVES (PERSISTENT CONDITION)',
    labels: {
      description: 'Your character has hooves and may have digitigrade legs.',
      effect: 'You’ve got hooves. Clip-clop.',
      momentum: 'Every time your hooves causes you trouble or reveal your supernatural nature, add another point of Momentum to the pool.',
      resolution: ''
    }
  },
  {
    id: null,
    name: 'DRUNK',
    labels: {
      description: '',
      effect: 'You suffer Complications on nearly every action you take, especially those involving fine motor skills.',
      momentum: 'Every time your drunkenness causes social or physical trouble, add another point of Momentum into the pool.',
      resolution: 'Purge the alcohol, or simply wait until the next day and endure a killer hangover. This may involve Complications, or your character may simply be used to it.'
    }
  },
  {
    id: null,
    name: '',
    labels: {
      description: '',
      effect: '',
      momentum: '',
      resolution: ''
    }
  },
  {
    id: null,
    name: '',
    labels: {
      description: '',
      effect: '',
      momentum: '',
      resolution: ''
    }
  },
  // {
  //   id: null,
  //   name: '',
  //   labels: {
  //     description: '',
  //     effect: '',
  //     momentum: '',
  //     resolution: ''
  //   }
  // },
];
