import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Characteristic, CharacteristicId } from '@imperium-maledictum-1e/models/common';
import {
  AdvanceableValue,
  getCharacteristicBonus,
  getCharacteristicValue,
  ImperiumMaledictumCharacter
} from '@imperium-maledictum-1e/models/character';
import { DataService, sortByOrder } from '@im-common';

type CharacteristicView = Characteristic & AdvanceableValue<CharacteristicId> & {
  current: number;
  bonus: number;
};

@Component({
    selector: 'character-characteristics',
    templateUrl: './character-characteristics.component.html',
    styleUrls: ['./character-characteristics.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CharacterCharacteristicsComponent {
  readonly data = inject(DataService);
  @Input() view = 'short';
  @Input() set character(character: ImperiumMaledictumCharacter) {
    const characteristics = character?.characteristics;
    const hydrated: CharacteristicView[] = characteristics.map(i => {
      const characteristic = this.data.get<Characteristic>(i.id);
      const current = getCharacteristicValue(i);
      const bonus = getCharacteristicBonus(i);
      const vm: CharacteristicView = {
        ...i,
        ...characteristic,
        current,
        bonus
      };

      return {
        ...vm,
        labels: {
          ...vm.labels,
          tooltip: this.getCharacteristicAdvancedTooltip(vm)
        },
      };
    });

    this.characteristics = hydrated?.sort(sortByOrder);
  }

  characteristics: CharacteristicView[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }

  private getCharacteristicAdvancedTooltip(vm: CharacteristicView): string {
    return [
      `${vm.name} (${vm.labels?.abbreviation})\n`,
      `Starting: ${vm.starting}`,
      `Advances: ${vm.advances}`,
      `Total: ${vm.starting + vm.advances}`,
      `Bonus: ${vm.bonus}`,
    ].join('\n');
  }
}
