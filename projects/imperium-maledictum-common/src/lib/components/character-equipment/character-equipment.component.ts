import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService } from '@im-common';
import { ImperiumMaledictumCharacter, ItemValue } from '@imperium-maledictum-1e/models/character';
import {
  Availability,
  Characteristic,
  Item,
  ItemTrait,
  PsychicPower,
  Range,
  Specialisation
} from '@imperium-maledictum-1e/models/common';

interface VM {
  icon?: string; // deployed_code, apparel
  name: string;
  qualities: ItemTrait[];
  flaws: ItemTrait[];
  traits: ItemTrait[];
  tooltip: string;
  specialisation: string;
  damage: number;
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
      const specialisations = (item?.data?.specialisations ?? []).map(s => this.data.get<Specialisation>(s));
      const damage = item?.data?.damage;
      const range = this.data.get<Range>(item?.data?.range);
      const magazine = item?.data?.magazine;
      const encumbrance = item?.encumbrance;
      const cost = item?.cost;
      const availability = this.data.get<Availability>(item?.availability);

      return {
        name: item?.name,
        qualities,
        flaws,
        traits,
        tooltip: item?.labels?.tooltip,
        specialisation: specialisations.map(s => s.name).join(', '),
        damage,
        range: range?.name,
        magazine,
        encumbrance,
        cost,
        availability: availability?.name,
      };
    });

    this.items = hydrated;
  }

  items: VM[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }
}
