import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService } from '@im-common';
import { ImperiumMaledictumCharacter } from '@imperium-maledictum-1e/models/character';
import { Characteristic, PsychicPower } from '@imperium-maledictum-1e/models/common';

@Component({
    selector: 'character-powers',
    templateUrl: './character-powers.component.html',
    styleUrls: ['./character-powers.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CharacterPowersComponent {
  readonly data = inject(DataService);
  @Input() view = 'short';
  @Input() set character(character: ImperiumMaledictumCharacter) {
    const powers = character?.powers;
    const hydrated: PsychicPower[] = powers.map(id => {
      const power = this.data.get<PsychicPower>(id);

      return {
        ...power
      };
    });

    this.powers = hydrated;
  }

  powers: PsychicPower[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }
}
