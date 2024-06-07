import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Characteristic } from '@imperium-maledictum-1e/models/common';
import { CharacteristicValue, ImperiumMaledictumCharacter } from '@imperium-maledictum-1e/models/character';
import { DataService } from '@im-common';

type CharacteristicView = Characteristic & CharacteristicValue & {
  current: number;
  bonus: number;
};

@Component({
  selector: 'characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacteristicsComponent {
  readonly data = inject(DataService);

  @Input() set character(character: ImperiumMaledictumCharacter) {
    const characteristics = character?.characteristics;
    const hydrated: CharacteristicView[] = characteristics.map(i => {
      const characteristic = this.data.get<Characteristic>(i.id);

      return {
        ...i,
        ...characteristic,
        current: i.starting + i.advances,
        bonus: Math.floor(i.starting + i.advances)
      };
    });
    console.log(hydrated);
    this.characteristics = hydrated?.sort((a, b) => a?.order - b?.order);
  }

  characteristics: CharacteristicView[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }
}
