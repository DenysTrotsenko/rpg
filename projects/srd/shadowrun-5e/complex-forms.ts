import {ComplexForm, ComplexFormDuration, ComplexFormTarget} from './models';
import {COMPLEX_FORM_DURATION_ID, COMPLEX_FORM_ID, COMPLEX_FORM_TARGET_ID} from './enums';

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
    fading: 1,
    labels: {
      description: 'Illegal actions leave traces in the Matrix, but the Resonance can erase a few of them. Make a Simple Software + Resonance [Level] test. For each hit, reduce the target’s Overwatch Score by 1.'
    }
  },
  {
    id: COMPLEX_FORM_ID.DIFFUSION_OF_ATTACK,
    name: 'Diffusion of Attack',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1,
    labels: {
      description: 'Make an Opposed Software + Resonance [Level] v. Willpower + Firewall test. If you win, the target’s Attack is reduced by your net hits. You can’t reduce an attribute to less than 1.'
    }
  },
  {
    id: COMPLEX_FORM_ID.DIFFUSION_OF_SLEAZE,
    name: 'Diffusion of Sleaze',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1,
    labels: {
      description: 'Make an Opposed Software + Resonance [Level] v. Willpower + Firewall test. If you win, the target’s Sleaze is reduced by your net hits. You can’t reduce an attribute to less than 1.'
    }
  },
  {
    id: COMPLEX_FORM_ID.DIFFUSION_OF_DATA_PROCESSING,
    name: 'Diffusion of Data Processing',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1,
    labels: {
      description: 'Make an Opposed Software + Resonance [Level] v. Willpower + Firewall test. If you win, the target’s Data Processing is reduced by your net hits. You can’t reduce an attribute to less than 1.'
    }
  },
  {
    id: COMPLEX_FORM_ID.DIFFUSION_OF_FIREWALL,
    name: 'Diffusion of Firewall',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1,
    labels: {
      description: 'Make an Opposed Software + Resonance [Level] v. Willpower + Firewall test. If you win, the target’s Firewall is reduced by your net hits. You can’t reduce an attribute to less than 1.'
    }
  },
  {
    id: COMPLEX_FORM_ID.EDITOR,
    name: 'Editor',
    target: COMPLEX_FORM_TARGET_ID.FILE,
    duration: COMPLEX_FORM_DURATION_ID.PERMANENT,
    fading: 2,
    labels: {
      description: 'You infuse a file with Resonance long enough to manipulate its contents. Make a Software + Resonance [Level] test against the Intuition + Data Processing of the file’s owner. You can make the same amount of changes to the file that you would be able to make with your net hits in Edit File actions.'
    }
  },
  {
    id: COMPLEX_FORM_ID.INFUSION_OF_ATTACK,
    name: 'Infusion of Attack',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1,
    labels: {
      description: 'Resonance floods the target device, boosting the specified attribute. The Level of the complex form must equal or exceed the value of the attribute being affected. The attribute is increased by the number of hits scored, up to twice the target’s normal rating (any hits that would increase the attribute beyond this maximum are ignored). Each attribute can only be affected by a single Infusion at a time. If an attribute boosted by this complex form is swapped in a Reconfigure action, this complex form ends.'
    }
  },
  {
    id: COMPLEX_FORM_ID.INFUSION_OF_SLEAZE,
    name: 'Infusion of Sleaze',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1,
    labels: {
      description: 'Resonance floods the target device, boosting the specified attribute. The Level of the complex form must equal or exceed the value of the attribute being affected. The attribute is increased by the number of hits scored, up to twice the target’s normal rating (any hits that would increase the attribute beyond this maximum are ignored). Each attribute can only be affected by a single Infusion at a time. If an attribute boosted by this complex form is swapped in a Reconfigure action, this complex form ends.'
    }
  },
  {
    id: COMPLEX_FORM_ID.INFUSION_OF_DATA_PROCESSING,
    name: 'Infusion of Data Processing',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1,
    labels: {
      description: 'Resonance floods the target device, boosting the specified attribute. The Level of the complex form must equal or exceed the value of the attribute being affected. The attribute is increased by the number of hits scored, up to twice the target’s normal rating (any hits that would increase the attribute beyond this maximum are ignored). Each attribute can only be affected by a single Infusion at a time. If an attribute boosted by this complex form is swapped in a Reconfigure action, this complex form ends.'
    }
  },
  {
    id: COMPLEX_FORM_ID.INFUSION_OF_FIREWALL,
    name: 'Infusion of Firewall',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: 1,
    labels: {
      description: 'Resonance floods the target device, boosting the specified attribute. The Level of the complex form must equal or exceed the value of the attribute being affected. The attribute is increased by the number of hits scored, up to twice the target’s normal rating (any hits that would increase the attribute beyond this maximum are ignored). Each attribute can only be affected by a single Infusion at a time. If an attribute boosted by this complex form is swapped in a Reconfigure action, this complex form ends.'
    }
  },
  {
    id: COMPLEX_FORM_ID.STATIC_VEIL,
    name: 'Static Veil',
    target: COMPLEX_FORM_TARGET_ID.PERSONA,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: -1,
    labels: {
      description: 'Resonance energy coils around you, hiding you from GOD. Make a Simple Software + Resonance [Level] test with a threshold of 1 if the target is on the public grid and 2 on any other grid. As long as you sustain this complex form and the target doesn’t hop to another grid, the veiled persona’s Overwatch Score doesn’t increase due to time (p. 231). It still increases as a result of the target’s illegal actions, though.'
    }
  },
  {
    id: COMPLEX_FORM_ID.PULSE_STORM,
    name: 'Pulse Storm',
    target: COMPLEX_FORM_TARGET_ID.PERSONA,
    duration: COMPLEX_FORM_DURATION_ID.IMMEDIATE,
    fading: 0,
    labels: {
      description: 'You pull signals out of the Resonance and surround the target with them. Make a Software + Resonance [Level] v. Logic + Data Processing test. For each net hit you get, the target’s noise is increased by 1.'
    }
  },
  {
    id: COMPLEX_FORM_ID.PUPPETEER,
    name: 'Puppeteer',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.IMMEDIATE,
    fading: 4,
    labels: {
      description: 'You push Resonance commands into a target, forcing it to perform a Matrix action. Pick a target and a Matrix action for it to perform. Make a Software + Resonance [Level] v. Willpower + Firewall test with a threshold based on the type of action: 1 for a Free Action, 2 for Simple, and 3 for Complex. If you succeed, the target performs that Matrix action as its next available action.'
    }
  },
  {
    id: COMPLEX_FORM_ID.RESONANCE_CHANNEL,
    name: 'Resonance Channel',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: -1,
    labels: {
      description: 'Instead of using Matrix channels, you communicate through a Resonance channel. Make a Simple Software + Resonance [Level] test. For each net hit, reduce the noise due to distance from the target device by 1.'
    }
  },
  {
    id: COMPLEX_FORM_ID.RESONANCE_SPIKE,
    name: 'Resonance Spike',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.IMMEDIATE,
    fading: 0,
    labels: {
      description: 'You send a spike of raw destructive Resonance into the target, causing errors and mayhem. Make a Software + Resonance [Level] v. Willpower + Firewall test. Your target takes 1 box of Matrix damage per net hit, with no chance to resist.'
    }
  },
  {
    id: COMPLEX_FORM_ID.RESONANCE_VEIL,
    name: 'Resonance Veil',
    target: COMPLEX_FORM_TARGET_ID.DEVICE,
    duration: COMPLEX_FORM_DURATION_ID.SUSTAINED,
    fading: -1,
    labels: {
      description: 'This complex form lets you make the target believe something has happened in the Matrix. It’s a convincing illusion if you can succeed in a Software + Resonance [Level] v. Intuition + Data Processing test. Even if the target has reason to believe what it’s seeing is fake, it needs to make a Matrix Perception Test with a threshold equal to your net hits to see through the illusion.'
    }
  },
  {
    id: COMPLEX_FORM_ID.STATIC_BOMB,
    name: 'Static Bomb',
    target: COMPLEX_FORM_TARGET_ID.SELF,
    duration: COMPLEX_FORM_DURATION_ID.IMMEDIATE,
    fading: 2,
    labels: {
      description: 'Make a Software + Resonance [Level] v. Intuition + Data Processing test against all icons that have spotted you. If there’s more than one, compare your hits to each of theirs separately. Each icon you beat loses you, and you’re no longer spotted by those icons. Any icon that has a mark on you doesn’t lose you, of course.'
    }
  },
  {
    id: COMPLEX_FORM_ID.STITCHES,
    name: 'Stitches',
    target: COMPLEX_FORM_TARGET_ID.SPRITE,
    duration: COMPLEX_FORM_DURATION_ID.PERMANENT,
    fading: -2,
    labels: {
      description: 'You knit the Resonance patterns in a sprite back together. Make a Simple Software + Resonance [Level] test. For each hit, remove 1 box of Matrix damage from the target sprite.'
    }
  },
  {
    id: COMPLEX_FORM_ID.TRANSCENDENT_GRID,
    name: 'Transcendent Grid',
    target: COMPLEX_FORM_TARGET_ID.SELF,
    duration: COMPLEX_FORM_DURATION_ID.IMMEDIATE,
    fading: -1,
    labels: {
      description: 'You broaden your connection to the Matrix and connect to all grids at once. You take no penalty for acting across grids (because you’re on all of them), but neither do others targeting you. You also don’t take a penalty from the public grid. Make a Simple Software + Resonance [Level] Test. The effect persists for one minute for every hit you get. When you run out of hits, the complex form ends.'
    }
  },
  {
    id: COMPLEX_FORM_ID.TATTLETALE,
    name: 'Tattletale',
    target: COMPLEX_FORM_TARGET_ID.PERSONA,
    duration: COMPLEX_FORM_DURATION_ID.PERMANENT,
    fading: -2,
    labels: {
      description: 'The Resonance can be used to mimic the telltale signs of illegal activity in the Matrix — to your target’s sorrow. Make a Simple Software + Resonance [Level] test. For each hit, increase the target’s Overwatch Score by 1. This only works if your target has an Overwatch Score.'
    }
  }
];
