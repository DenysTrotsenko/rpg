import {ThreatType} from './models';
import {ThreatTypeId} from './enums';

export const THREAT_TYPE: ThreatType[] = [
  {
    id: ThreatTypeId.ABYSSAL,
    name: 'Abyssal'
  },
  {
    id: ThreatTypeId.ANIMAL,
    name: 'Animal'
  },
  {
    id: ThreatTypeId.BEAST,
    name: 'Beast'
  },
  {
    id: ThreatTypeId.HUMANOID,
    name: 'Humanoid'
  },
  {
    id: ThreatTypeId.SUPERNATURAL,
    name: 'Supernatural'
  },
];
