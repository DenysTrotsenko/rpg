import {DISPOSITIONS} from './dispositions';
import {DispositionId} from './enums';

export const DEFAULT_DISPOSITION_ID: DispositionId = DISPOSITIONS.find(i => i.name === 'Indifferent').id;
