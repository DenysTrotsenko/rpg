import { PatronMotivation } from '../models/common';

export const PATRON_MOTIVATIONS: PatronMotivation[] = [
  {
    id: 'pmt_conflict',
    name: 'Conflict',
    labels: {
      quote: 'Strife creates strength. Competition between allies is desirable. Eliminate the weak.',
      description: 'Your Patron achieves their goals through violence, directly or indirectly. They might assign you to assassinate a particular target, or purge a cell of suspected heretics. You might be required to conduct misinformation campaigns to agitate conflict between two groups. Your Patron’s goals may align you with a Rogue Trader Dynasty for one mission, and side with a merciless Planetary Governor crushing a revolt for the next.'
    }
  },
  {
    id: 'pmt_information',
    name: 'Information',
    labels: {
      quote: 'Knowledge is power. The best way to destroy one’s enemies is to understand them.',
      description: 'Your Patron collects and applies information to achieve their goals. You might be assigned to spy on an individual, or go undercover and infiltrate an organisation in order to discover a useful secret. Your Patron might send you far afield to explore a newly re-discovered archeotech horde, or to gather intelligence on the habits and obsessions of a rival Inquisitor.'
    }
  },
  {
    id: 'pmt_materiel',
    name: 'Materiel',
    labels: {
      quote: 'Protecting one’s assets is of utmost import. A fortress is only as strong as its foundation.',
      description: 'Your Patron is focused on the acquisition and protection of material property. This could be as simple as selling your services as hired muscle, or as complex as planning a heist to ‘liberate’ hoarded weapons from a Planetary Governor whose loyalty is not quite above suspicion. Your Patron might send you far afield to uncover lost relics of significant value, or to secure territory in their name. Even gathering new recruits to a cause or hunting psykers to supply the Emperor’s Tithe fit the motivation of a Patron focused on materiel.'
    }
  },
  {
    id: 'pmt_reputation',
    name: 'Reputation',
    labels: {
      quote: 'I am not asking for their blood. Death is easy enough to arrange. I am asking for their adoration, their faith. Only you can give me that.',
      description: 'Your Patron seeks to build their status in the Imperium. They may require you to undertake acts of heroism to spread the good word of their name, or to blacken the names of a rival so that your Patron may ascend in their place. They may assign you missions their own superiors have tasked them with, subsequently claiming credit for your deeds, or simply charge you with ensuring that productivity is optimal in the district they control — by any means necessary.'
    }
  },
  {
    id: 'pmt_unity',
    name: 'Unity',
    labels: {
      quote: 'The Imperium is strongest when all its servants cooperate. By word or by bolt, ensure they do so.',
      description: 'Your Patron believes that discord between Factions is the biggest threat to the Emperor’s realm, and seeks to unify the Imperium. You will likely operate as problem solvers, brokering deals and completing diplomatic missions. Your Patron might require you to defend an individual or a location to ensure the peace is kept, or send you to uncover and foil a plot to agitate conflict before it can blossom into all-out war.'
    }
  }
];
