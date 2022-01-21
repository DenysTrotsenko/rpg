import {Action} from './models';
import {ActionId} from './enums';

export const ACTIONS: Action[] = [
  {
    id: ActionId.ATTUNE,
    name: 'Attune',
    labels: {
      description: 'When you Attune, you open your mind to the ghost field or other arcane power.',
      examples: 'You might communicate with a ghost or understand aspects of spectrology. You could try to perceive beyond sight in order to better understand your situation (but Surveying might be better).'
    }
  },
  {
    id: ActionId.COMMAND,
    name: 'Command',
    labels: {
      description: 'When you Command, you compel swift obedience.',
      examples: 'You might intimidate or threaten to get what you want. You might lead a gang in a group action. You could try to order people around to persuade them (but Consorting might be better).'
    }
  },
  {
    id: ActionId.CONSORT,
    name: 'Consort',
    labels: {
      description: 'When you Consort, you socialize with friends and contacts.',
      examples: 'You might gain access to resources, information, people, or places. You might make a good impression or win someone over with your charm and style. You might make new friends or connect with your heritage or background. You could try to manipulate your friends with social pressure (but Sway might be better).'
    }
  },
  {
    id: ActionId.FINESSE,
    name: 'Finesse',
    labels: {
      description: 'When you Finesse, you employ dextrous manipulation or subtle misdirection.',
      examples: 'You might pick someone’s pocket. You might handle the controls of a vehicle or direct a mount. You might formally duel an opponent with graceful fighting arts. You could try to employ those arts in a chaotic melee (but Skirmishing might be better). You could try to pick a lock (but Tinkering might be better).'
    }
  },
  {
    id: ActionId.HUNT,
    name: 'Hunt',
    labels: {
      description: 'When you Hunt, you carefully track a target.',
      examples: 'You might follow a target or discover their location. You might arrange an ambush. You might attack with precision shooting from a distance. You could try to bring your guns to bear in a melee (but Skirmishing might be better).'
    }
  },
  {
    id: ActionId.PROWL,
    name: 'Prowl',
    labels: {
      description: 'When you Prowl, you traverse skillfully and quietly.',
      examples: 'You might sneak past a guard or hide in the shadows. You might run and leap across the rooftops. You might attack someone from hiding with a back- stab or blackjack. You could try to waylay a victim in the midst of battle (but Skirmishing might be better).'
    }
  },
  {
    id: ActionId.SKIRMISH,
    name: 'Skirmish',
    labels: {
      description: 'When you Skirmish, you entangle a target in close combat so they can’t easily escape.',
      examples: 'You might brawl or wrestle with them. You might hack and slash. You might seize or hold a position in battle. You could try to fight in a formal duel (but Finessing might be better).'
    }
  },
  {
    id: ActionId.STUDY,
    name: 'Study',
    labels: {
      description: 'When you Study, you scrutinize details and interpret evidence.',
      examples: 'You might gather information from documents, newspapers, and books. You might do research on an esoteric topic. You might closely analyze a person to detect lies or true feelings. You could try to examine events to understand a pressing situation (but Surveying might be better).'
    }
  },
  {
    id: ActionId.SURVEY,
    name: 'Survey',
    labels: {
      description: 'When you Survey, you observe the situation and anticipate outcomes.',
      examples: 'You might spot telltale signs of trouble before it happens. You might uncover opportunities or weaknesses. You might detect a person’s motivations or intentions. You could try to spot a good ambush point (but Hunting might be better).'
    }
  },
  {
    id: ActionId.SWAY,
    name: 'Sway',
    labels: {
      description: 'When you Sway, you influence with guile, charm, or argument.',
      examples: 'You might lie convincingly. You might persuade someone to do what you want.You might argue a compelling case that leaves no clear rebuttal. You could try to trick people into affection or obedience (but Consorting or Commanding might be better).'
    }
  },
  {
    id: ActionId.TINKER,
    name: 'Tinker',
    labels: {
      description: 'When you Tinker, you fiddle with devices and mechanisms.',
      examples: 'You might create a new gadget or alter an existing item. You might pick a lock or crack a safe. You might disable an alarm or trap. You might turn the clockwork and electroplasmic devices around the city to your advantage. You could try to use your technical expertise to control a vehicle (but Finessing might be better).'
    }
  },
  {
    id: ActionId.WRECK,
    name: 'Wreck',
    labels: {
      description: 'When you Wreck, you unleash savage force.',
      examples: 'You might smash down a door or wall with a sledgehammer, or use an explosive to do the same. You might employ chaos or sabotage to create a distraction or overcome an obstacle. You could try to overwhelm an enemy with sheer force in battle (but Skirmishing might be better).'
    }
  }
];
