import { PatronDemeanor } from '../models/common';

export const PATRON_DEMEANORS: PatronDemeanor[] = [
  {
    id: 'pdm_wrathful',
    name: 'Wrathful',
    labels: {
      description: 'Your Patron is ambitious and decisive. They are quick to act. They demand results and accept no excuses. They may also be vengeful or quick to anger.'
    }
  },
  {
    id: 'pdm_sombre',
    name: 'Sombre',
    labels: {
      description: 'Your Patron is thoughtful and analytical. They are slow to act, and consider the ramifications of each decision. They expect perfection in their servants as much as themself.'
    }
  },
  {
    id: 'pdm_pragmatic',
    name: 'Pragmatic',
    labels: {
      description: 'Your Patron is serene and quiet. They have a knack for seeing other perspectives and recognize the necessity of compromise more so than most leaders of the Imperium.'
    }
  },
  {
    id: 'pdm_zealous',
    name: 'Zealous',
    labels: {
      description: 'Your Patron is loquacious, active, and enthusiastic. They surround themself with servants and allies. They despise idleness but may act rashly.'
    }
  },
  {
    id: 'pdm_inscrutable',
    name: 'Inscrutable',
    labels: {
      description: 'Your Patron conceals their personality behind a veneer of stoic professionalism or smooth geniality.'
    }
  }
];
