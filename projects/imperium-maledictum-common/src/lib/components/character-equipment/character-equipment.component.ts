import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService } from '@im-common';
import { ImperiumMaledictumCharacter, ItemValue } from '@imperium-maledictum-1e/models/character';
import {
  Availability,
  Characteristic,
  Item, ItemModification,
  ItemTrait,
  Range,
  Specialisation
} from '@imperium-maledictum-1e/models/common';

interface VM {
  name: string;
  qualities: ItemTrait[];
  flaws: ItemTrait[];
  traits: ItemTrait[];
  modifications: ItemModification[];
  tooltip: string;
  specialisation: string;
  damage: number;
  penetration: number;
  rend: number;
  range: string;
  magazine: number;
  encumbrance: number;
  cost: number;
  availability: string;
}

@Component({
    selector: 'character-equipment',
    templateUrl: './character-equipment.component.html',
    styleUrls: ['./character-equipment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CharacterEquipmentComponent {
  readonly data: DataService = inject(DataService);
  @Input() view = 'short';
  @Input() set character(character: ImperiumMaledictumCharacter) {
    const items: ItemValue[] = character?.items ?? [];
    this.items = items.map(i => {
      const item = this.data.get<Item>(i.id);
      const qualities = (i.qualities ?? []).map(j => this.data.get<ItemTrait>(j));
      const flaws = (i.flaws ?? []).map(j => this.data.get<ItemTrait>(j));
      const modifications = (i.modifications ?? []).map(j => this.data.get<ItemModification>(j));
      const traits = (item?.data?.traits ?? []).map(j => this.data.get<ItemTrait>(j));
      const specialisation = (item?.data?.specialisations ?? [])
        .map(s => this.data.get<Specialisation>(s))
        .map(s => s.name)
        .join(', ');
      const damage = item?.data?.damage;
      const penetration = item?.data?.penetration;
      const rend = item?.data?.rend;
      const range = this.data.get<Range>(item?.data?.range)?.name;
      const magazine = item?.data?.magazine;
      const encumbrance = item?.encumbrance;
      const cost = item?.cost;
      const availability = this.data.get<Availability>(item?.availability)?.name;

      return {
        name: item?.name,
        tooltip: item?.labels?.tooltip,
        qualities,
        flaws,
        traits,
        modifications,
        specialisation,
        damage,
        penetration,
        rend,
        range,
        magazine,
        encumbrance,
        cost,
        availability
      };
    });
  }

  items: VM[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }
}
