import {Background} from './models';
import {BackgroundId} from './enums';

export const BACKGROUNDS: Background[] = [
  {
    id: BackgroundId.ACADEMIC,
    name: 'Academic',
    labels: {
      description: 'A scholar, a professor or student from Doskvol Academy, a philosopher or journalist, etc.'
    }
  },
  {
    id: BackgroundId.LABOR,
    name: 'Labor',
    labels: {
      description: 'A servant, a factory worker, a coach driver, a docker, a sailor, a Rail Jack, etc. A stevedore for the North Hook Company.'
    }
  },
  {
    id: BackgroundId.LAW,
    name: 'Law',
    labels: {
      description: 'An advocate or barrister, a Bluecoat or inspector (or even Spirit Warden), a prison guard from Ironhook, etc.'
    }
  },
  {
    id: BackgroundId.TRADE,
    name: 'Trade',
    labels: {
      description: 'A shopkeeper, a merchant, a skilled crafts-person, a shipping agent, etc. A liaison to the Ministry of Preservation.'
    }
  },
  {
    id: BackgroundId.MILITARY,
    name: 'Military',
    labels: {
      description: 'An Imperial or Skovlander soldier, a mercenary, an intelligence operative, a strategist, a training instructor, etc.'
    }
  },
  {
    id: BackgroundId.NOBLE,
    name: 'Noble',
    labels: {
      description: 'A dilettante, a courtier, the scion of a fallen house, etc.'
    }
  },
  {
    id: BackgroundId.UNDERWORLD,
    name: 'Underworld',
    labels: {
      description: 'A street urchin, gang member, young thug, or other outcast who grew up on the streets.'
    }
  }
];
