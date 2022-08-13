import {Vice} from './models';
import {ViceId} from './enums';

export const VICES: Vice[] = [
  {
    id: ViceId.FAITH,
    name: 'Faith',
    labels: {
      description: 'You’re dedicated to an unseen power, forgotten god, ancestor, etc.'
    }
  },
  {
    id: ViceId.GAMBLING,
    name: 'Gambling',
    labels: {
      description: 'You crave games of chance, betting on sporting events, etc.'
    }
  },
  {
    id: ViceId.LUXURY,
    name: 'Luxury',
    labels: {
      description: 'Expensive or ostentatious displays of opulence.'
    }
  },
  {
    id: ViceId.OBLIGATION,
    name: 'Obligation',
    labels: {
      description: 'You’re devoted to a family, a cause, an organization, a charity, etc.'
    }
  },
  {
    id: ViceId.PLEASURE,
    name: 'Pleasure',
    labels: {
      description: 'Gratification from lovers, food, drink, drugs, art, theater, etc.'
    }
  },
  {
    id: ViceId.STUPOR,
    name: 'Stupor',
    labels: {
      description: 'You seek oblivion in the abuse of drugs, drinking to excess, getting beaten to a pulp in the fighting pits, etc.'
    }
  },
  {
    id: ViceId.WEIRD,
    name: 'Weird',
    labels: {
      description: 'You experiment with strange essences, consort with rogue spirits, observe bizarre rituals or taboos, etc.'
    }
  }
];
