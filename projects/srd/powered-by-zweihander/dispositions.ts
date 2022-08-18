import {Disposition} from './models';
import {DispositionId} from '@powered-by-zweihander/enums';

export const DISPOSITIONS: Disposition[] = [
  {
    id: DispositionId.ANTAGONISTIC,
    name: 'Antagonistic',
    labels: {
      description: 'NPCs intend malicious harm to the characters. They actively participate in efforts to bring them down or destroy their reputations. It would take the movement of mountains for them to cede to the characters’ demands.',
      interact_check: '(Arduous -30%) Skill Test',
      social_tactics_same_allegiance: '(Challenging -10%) Skill Test',
      social_tactics_different_allegiance: '(Arduous -30%) Skill Test',
    }
  },
  {
    id: DispositionId.UNFRIENDLY,
    name: 'Unfriendly',
    labels: {
      description: 'NPCs do not like the characters. Their reasoning is grounded in their own misgivings, or maybe due to their own personal hang-ups. Unfriendly people can rarely be convinced to work in the characters’ favor and entertain conspiracies to take them down.',
      interact_check: '(Hard -20%) Skill Test',
      social_tactics_same_allegiance: '(Standard +/-0%) Skill Test',
      social_tactics_different_allegiance: '(Arduous -30%) Skill Test',
    }
  },
  {
    id: DispositionId.IMPOLITE,
    name: 'Impolite',
    labels: {
      description: 'NPCs have a general disdain toward the characters. This mistrust may be in relation to the characters’ misdeeds or general outlook of the NPC they’re interacting with. They certainly won’t entertain an alliance and are difficult to convince otherwise.',
      interact_check: '(Challenging -10%) Skill Test',
      social_tactics_same_allegiance: '(Routine +10%) Skill Test',
      social_tactics_different_allegiance: '(Hard -20%) Skill Test',
    }
  },
  {
    id: DispositionId.INDIFFERENT,
    name: 'Indifferent',
    labels: {
      description: 'NPCs have no particular feelings toward the characters, either for good or ill. They can be bargained with, but only if persuaded with favors or compensation. They will likely follow orders out of duty, but won’t put themselves into harm’s way.',
      interact_check: '(Standard +/-0%) Skill Test',
      social_tactics_same_allegiance: '(Easy +20%) Skill Test',
      social_tactics_different_allegiance: '(Hard -20%) Skill Test',
    }
  },
  {
    id: DispositionId.POLITE,
    name: 'Polite',
    labels: {
      description: 'NPCs view the characters favorably. While they would not go so far as to state that they’re friends, acquaintanceship may guarantee some sort of benefit. They won’t quickly put themselves at risk unless there is something to be gained from doing so.',
      interact_check: '(Routine +10%) Skill Test',
      social_tactics_same_allegiance: '(Easy +20%) Skill Test',
      social_tactics_different_allegiance: '(Challenging -10%) Skill Test',
    }
  },
  {
    id: DispositionId.FRIENDLY,
    name: 'Friendly',
    labels: {
      description: 'NPCs share a bond of fealty with the characters, one that would be shared between those who have deep loyalties to the party. Although they still need to be persuaded, it would be quite common for the NPC to help the characters to the best of their ability.',
      interact_check: '(Easy +20%) Skill Test',
      social_tactics_same_allegiance: '(Trivial +30%) Skill Test',
      social_tactics_different_allegiance: '(Standard +/-0%) Skill Test',
    }
  },
  {
    id: DispositionId.HELPFUL,
    name: 'Helpful',
    labels: {
      description: 'NPCs will go out of their way to aid the characters, either out of admiration, duty or notoriety. They share an almost familial bond, willingly putting their fortunes at stake to ensure that the characters come out on top.',
      interact_check: '(Trivial +30%) Skill Test',
      social_tactics_same_allegiance: '(Trivial +30%) Skill Test',
      social_tactics_different_allegiance: '(Routine +10%) Skill Test',
    }
  },
];
