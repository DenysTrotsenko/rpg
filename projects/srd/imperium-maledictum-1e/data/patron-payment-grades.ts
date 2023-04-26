import { PatronPaymentGrade } from '../models/common';

export const PATRON_PAYMENT_GRADES: PatronPaymentGrade[] = [
  {
    id: 'ppg_poor',
    name: 'Poor',
    value: 50
  },
  {
    id: 'ppg_standard',
    name: 'Standard',
    value: 100
  },
  {
    id: 'ppg_good',
    name: 'Good',
    value: 200
  },
  {
    id: 'ppg_excellent',
    name: 'Excellent',
    value: 600
  }
];
