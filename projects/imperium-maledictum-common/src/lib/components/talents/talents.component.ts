import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService } from '@im-common';
import {
  ImperiumMaledictumCharacter,
} from '@imperium-maledictum-1e/models/character';
import { Characteristic, Talent } from '@imperium-maledictum-1e/models/common';

type TalentView = Talent;

@Component({
  selector: 'talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsComponent {
  readonly data = inject(DataService);

  @Input() set character(character: ImperiumMaledictumCharacter) {
    const talents = character?.talents;
    const hydrated: TalentView[] = talents.map(i => {
      const talent = this.data.get<Talent>(i);

      return {
        ...talent
      };
    });

    this.talents = hydrated;
  }

  talents: TalentView[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }
}
