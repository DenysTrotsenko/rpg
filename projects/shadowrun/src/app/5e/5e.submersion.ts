import {ECHO_ID} from '@shadowrun/app/5e/5e.enums';
import {CharacterQuality, Echo} from '@shadowrun/app/5e/5e.models';
import {ACTIVE_SKILLS} from '@shadowrun/app/5e/5e.skills';
import {PROGRAMS} from '@shadowrun/app/5e/5e.programs';

export const ECHOES: Echo[] = [
  {
    id: ECHO_ID.ATTACK_UPGRADE,
    name: 'Attack Upgrade',
    max: 2,
    labels: {
      description: 'The Attack rating of your living per- sona increases by 1. This echo may be taken twice.'
    }
  },
  {
    id: ECHO_ID.DATA_PROCESSING_UPGRADE,
    name: 'Data Processing Upgrade',
    max: 2,
    labels: {
      description: 'The Data Processing rating of your living persona increases by 1. This echo may be taken twice.'
    }
  },
  {
    id: ECHO_ID.FIREWALL_UPGRADE,
    name: 'Firewall Upgrade',
    max: 2,
    labels: {
      description: 'The Firewall rating of your living persona increases by 1. This echo may be taken twice.'
    }
  },
  {
    id: ECHO_ID.MIND_OVER_MACHINE,
    name: 'Mind Over Machine',
    max: 3,
    labels: {
      description: 'You get the benefit of a Rating 1 control rig. You may take this echo up to two additional times (for a total of three), with the effective control rig rating increasing by 1 each time you take it.'
    }
  },
  {
    id: ECHO_ID.NEUROFILTER,
    name: 'NeuroFilter',
    max: 2,
    labels: {
      description: 'You get a +1 dice pool bonus to resist biofeedback damage. This echo may be taken twice.'
    }
  },
  {
    id: ECHO_ID.OVERCLOCKING,
    name: 'Overclocking',
    max: 1,
    labels: {
      description: 'You accelerate your living persona to act more quickly in the Matrix. You get an additional +1D6 while you’re in hot-sim VR.'
    }
  },
  {
    id: ECHO_ID.RESONANCE_LINK,
    name: 'Resonance Link',
    max: 1,
    labels: {
      description: 'This echo gives you the ability to establish a low-level, one-way empathic link with another technomancer of your choice. As long as you’re linked, you can discern the dominant mood and emotions of your linked companion. You know whenever your companion is under attack or stress, feeling pain, or otherwise in danger. The Resonance Link works in only one direction (so your companion does not receive empathic signals from you), but if both of you take the echo with each other, you can make a two-way link.'
    }
  },
  {
    id: ECHO_ID.SLEAZE_UPGRADE,
    name: 'Sleaze Upgrade',
    max: 2,
    labels: {
      description: 'The Sleaze rating of your living persona increases by 1. This echo may be taken twice.'
    }
  },
  {
    id: ECHO_ID.RESONANCE_PROGRAM,
    name: 'Resonance [Program]',
    max: 1,
    specialty: true,
    labels: {
      description: 'This echo lets you copy the effects of one common or hacking program (p. 245). Each time you take this echo, you must specify which program you are mimicking. You can take this echo more than once, each time for a different program.'
    },
    formulas: {
      SPECIALTIES: () => PROGRAMS.map(i => ({ id: i.id, name: i.name })),
    }
  },
];
