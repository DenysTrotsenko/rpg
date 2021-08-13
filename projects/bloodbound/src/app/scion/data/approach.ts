import {APPROACH_ID} from '../scion.enums';
import {Base} from '@bloodbound/app/scion/scion.models';

export const APPROACHES: Base[] = [
  { id: APPROACH_ID.FORCE, name: 'Force' },
  { id: APPROACH_ID.FINESSE, name: 'Finesse' },
  { id: APPROACH_ID.RESILIENCE, name: 'Resilience' },
];
