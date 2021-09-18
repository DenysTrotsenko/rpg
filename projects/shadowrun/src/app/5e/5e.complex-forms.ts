import {ComplexForm, ComplexFormDuration, ComplexFormTarget} from './5e.models';
import {COMPLEX_FORM_DURATION_ID, COMPLEX_FORM_ID, COMPLEX_FORM_TARGET_ID} from './5e.enums';

export const COMPLEX_FORM_TARGETS: ComplexFormTarget[] = [
  { id: COMPLEX_FORM_TARGET_ID.DEVICE, name: 'Device' },
  { id: COMPLEX_FORM_TARGET_ID.FILE, name: 'File' },
  { id: COMPLEX_FORM_TARGET_ID.SELF, name: 'Self' },
  { id: COMPLEX_FORM_TARGET_ID.SPRITE, name: 'Sprite' },
  { id: COMPLEX_FORM_TARGET_ID.PERSONA, name: 'Persona' }
];

export const COMPLEX_FORM_DURATIONS: ComplexFormDuration[] = [
  { id: COMPLEX_FORM_DURATION_ID.IMMEDIATE, name: 'Immediate', alias: 'I' },
  { id: COMPLEX_FORM_DURATION_ID.SUSTAINED, name: 'Sustained', alias: 'S' },
  { id: COMPLEX_FORM_DURATION_ID.PERMANENT, name: 'Permanent', alias: 'P' }
];

export const COMPLEX_FORMS: ComplexForm[] = [
  {
    id: COMPLEX_FORM_ID.CLEANER,
    name: 'Cleaner',
    target: COMPLEX_FORM_TARGET_ID.PERSONA,
    duration: COMPLEX_FORM_DURATION_ID.PERMANENT,
    fading: 1
  },
  {
    id: COMPLEX_FORM_ID.DIFFUSION_OF_ATTACK,
    name: 'Diffusion of Attack',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1
  },
  {
    id: COMPLEX_FORM_ID.DIFFUSION_OF_SLEAZE,
    name: 'Diffusion of Sleaze',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1
  },
  {
    id: COMPLEX_FORM_ID.DIFFUSION_OF_DATA_PROCESSING,
    name: 'Diffusion of Data Processing',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1
  },
  {
    id: COMPLEX_FORM_ID.DIFFUSION_OF_FIREWALL,
    name: 'Diffusion of Firewall',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1
  },
  {
    id: COMPLEX_FORM_ID.EDITOR,
    name: 'Editor',
    target: COMPLEX_FORM_TARGET_ID.FILE,
    duration: COMPLEX_FORM_DURATION_ID.PERMANENT,
    fading: 2
  },
  {
    id: COMPLEX_FORM_ID.INFUSION_OF_ATTACK,
    name: 'Infusion of Attack',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1
  },
  {
    id: COMPLEX_FORM_ID.INFUSION_OF_SLEAZE,
    name: 'Infusion of Sleaze',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1
  },
  {
    id: COMPLEX_FORM_ID.INFUSION_OF_DATA_PROCESSING,
    name: 'Infusion of Data Processing',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1
  },
  {
    id: COMPLEX_FORM_ID.INFUSION_OF_FIREWALL,
    name: 'Infusion of Firewall',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1
  },
  {
    id: COMPLEX_FORM_ID.STATIC_VEIL,
    name: 'Static Veil',
    target: COMPLEX_FORM_TARGET_ID.PERSONA,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: -1
  },
  {
    id: COMPLEX_FORM_ID.PULSE_STORM,
    name: 'Pulse Storm',
    target: COMPLEX_FORM_TARGET_ID.PERSONA,
    duration: COMPLEX_FORM_DURATION_ID.IMMEDIATE,
    fading: 0
  },
  {
    id: COMPLEX_FORM_ID.PUPPETEER,
    name: 'Puppeteer',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.IMMEDIATE,
    fading: 4
  },
  {
    id: COMPLEX_FORM_ID.RESONANCE_CHANNEL,
    name: 'Resonance Channel',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: -1
  },
  {
    id: COMPLEX_FORM_ID.RESONANCE_SPIKE,
    name: 'Resonance Spike',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.IMMEDIATE,
    fading: 0
  },
  {
    id: COMPLEX_FORM_ID.RESONANCE_VEIL,
    name: 'Resonance Veil',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: -1
  },
  {
    id: COMPLEX_FORM_ID.STATIC_BOMB,
    name: 'Static Bomb',
    target: COMPLEX_FORM_TARGET_ID.SELF,
    duration: COMPLEX_FORM_DURATION_ID.IMMEDIATE,
    fading: 2
  },
  {
    id: COMPLEX_FORM_ID.STITCHES,
    name: 'Stitches',
    target: COMPLEX_FORM_TARGET_ID.SPRITE,
    duration: COMPLEX_FORM_DURATION_ID.PERMANENT,
    fading: -2
  },
  {
    id: COMPLEX_FORM_ID.TRANSCENDENT_GRID,
    name: 'Transcendent Grid',
    target: COMPLEX_FORM_TARGET_ID.SELF,
    duration: COMPLEX_FORM_DURATION_ID.IMMEDIATE,
    fading: -1
  },
  {
    id: COMPLEX_FORM_ID.TATTLETALE,
    name: 'Tattletale',
    target: COMPLEX_FORM_TARGET_ID.PERSONA,
    duration: COMPLEX_FORM_DURATION_ID.PERMANENT,
    fading: -2
  }
];
