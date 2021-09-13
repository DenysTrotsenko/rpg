import {BOOK_ID, POWER_ACTION_ID, POWER_DURATION_ID, POWER_ID, POWER_RANGE_ID, POWER_TYPE_ID} from './5e.enums';
import {Power} from './5e.models';

export const POWERS: Power[] = [
  {
    id: POWER_ID.ACCIDENT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Accident',
    type: POWER_TYPE_ID.PHYSICAL,
    range: POWER_RANGE_ID.LINE_OF_SIGHT,
    action: POWER_ACTION_ID.COMPLEX,
    duration: POWER_DURATION_ID.INSTANT,
    labels: {
      description: ''
    }
  }
];
