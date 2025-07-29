import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService, sortByName } from '@im-common';
import {
  ImperiumMaledictumCharacter,
} from '@imperium-maledictum-1e/models/character';
import { Characteristic, Talent } from '@imperium-maledictum-1e/models/common';

@Component({
    selector: 'character-talents',
    templateUrl: './character-talents.component.html',
    styleUrls: ['./character-talents.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CharacterTalentsComponent {
  readonly data = inject(DataService);
  @Input() view = 'short';
  @Input() set character(character: ImperiumMaledictumCharacter) {
    const talents = character?.talents;
    const hydrated: Talent[] = talents.map(i => {
      const talent = this.data.get<Talent>(i.id);

      return {
        ...talent
      };
    });

    this.talents = hydrated.sort(sortByName);
  }

  talents: Talent[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }
}
