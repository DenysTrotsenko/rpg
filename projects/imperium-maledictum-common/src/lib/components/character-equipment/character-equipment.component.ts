import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService } from '@im-common';
import { ImperiumMaledictumCharacter, ItemValue } from '@imperium-maledictum-1e/models/character';
import { Characteristic, Item, ItemTrait, PsychicPower } from '@imperium-maledictum-1e/models/common';

interface VM {
  name: string;
  qualities: ItemTrait[];
  flaws: ItemTrait[];
  traits: ItemTrait[];
  tooltip: string;
}

@Component({
  selector: 'character-equipment',
  templateUrl: './character-equipment.component.html',
  styleUrls: ['./character-equipment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterEquipmentComponent {
  readonly data: DataService = inject(DataService);
  @Input() view = 'short';
  @Input() set character(character: ImperiumMaledictumCharacter) {
    const items = character?.items;
    const hydrated: VM[] = items.map(i => {
      const item = this.data.get<Item>(i.id);
      const qualities = (i.qualities ?? []).map(j => this.data.get<ItemTrait>(j));
      const flaws = (i.flaws ?? []).map(j => this.data.get<ItemTrait>(j));
      const traits = (item?.data?.traits ?? []).map(j => this.data.get<ItemTrait>(j));

      return {
        name: item?.name,
        qualities,
        flaws,
        traits,
        tooltip: item?.labels?.tooltip
      };
    });

    this.items = hydrated;
  }

  items: VM[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }
}
