import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Characteristic } from '@imperium-maledictum-1e/models/common';
import {
  CharacteristicValue, getCharacteristicBonus,
  getCharacteristicValue,
  ImperiumMaledictumCharacter
} from '@imperium-maledictum-1e/models/character';
import { DataService } from '@im-common';

type CharacteristicView = Characteristic & CharacteristicValue & {
  current: number;
  bonus: number;
};

@Component({
  selector: 'character-characteristics',
  templateUrl: './character-characteristics.component.html',
  styleUrls: ['./character-characteristics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCharacteristicsComponent {
  readonly data = inject(DataService);
  @Input() view = 'short';
  @Input() set character(character: ImperiumMaledictumCharacter) {
    const characteristics = character?.characteristics;
    const hydrated: CharacteristicView[] = characteristics.map(i => {
      const characteristic = this.data.get<Characteristic>(i.id);

      return {
        ...i,
        ...characteristic,
        current: getCharacteristicValue(i),
        bonus: getCharacteristicBonus(i)
      };
    });

    this.characteristics = hydrated?.sort((a, b) => a?.order - b?.order);
  }

  characteristics: CharacteristicView[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }
}
