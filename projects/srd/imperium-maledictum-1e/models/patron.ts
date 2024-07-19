import { Opaque } from '@std';
import { FactionId } from './common';

export type PatronId = Opaque<string, 'PatronId'>;
export type PatronBoonId = Opaque<string, 'PatronBoonId'>;
export type PatronDemeanorId = Opaque<string, 'PatronDemeanorId'>;
export type PatronDutyId = Opaque<string, 'PatronDutyId'>;
export type PatronFactionId = Opaque<string, 'PatronFactionId'>;
export type PatronLiabilityId = Opaque<string, 'PatronLiabilityId'>;
export type PatronMotivationId = Opaque<string, 'PatronMotivationId'>;
export type PatronPaymentGradeId = Opaque<string, 'PatronPaymentGradeId'>;

export interface Patron {
  id: PatronId;
}

export interface PatronBoon {
  id: PatronBoonId | string;
  name: string;
  labels: {
    influence?: string;
    description: string;
  };
}

export interface PatronDemeanor {
  id: PatronDemeanorId | string;
  name: string;
  labels: {
    description: string;
  };
}

export interface PatronDuty {
  id: PatronDutyId | string;
  name: string;
  boon: PatronBoonId;
  boons: PatronBoonId[] | string[];
  liabilities: PatronLiabilityId[] | string[];
  labels: {
    description: string;
  };
}

export interface PatronFaction {
  id: PatronFactionId | string;
  name: string;
  influence?: Record<FactionId | string, number>;
  duties: PatronDutyId[] | string[];
  labels: {
    description: string;
  };
}

export interface PatronLiability {
  id: PatronLiabilityId | string;
  name: string;
  labels: {
    influence?: string;
    description: string;
  };
}

export interface PatronMotivation {
  id: PatronMotivationId | string;
  name: string;
  labels: {
    quote: string;
    description: string;
  };
}

export interface PatronPaymentGrade {
  id: PatronPaymentGradeId | string;
  name: string;
  value: number;
}
