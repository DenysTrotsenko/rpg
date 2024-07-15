import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService } from '@im-common';
import { ImperiumMaledictumCharacter } from '@imperium-maledictum-1e/models/character';
import { Faction, Origin, Role } from '@imperium-maledictum-1e/models/common';

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailsComponent {
  readonly data = inject(DataService);
  @Input() view = 'short';
  @Input() set character(character: ImperiumMaledictumCharacter) {
    this.image = character?.image;
    this.origin = this.data.get<Origin>(character?.origin);
    this.faction = this.data.get<Faction>(character?.faction);
    this.role = this.data.get<Role>(character?.role);
    this.fate = character?.fate ?? 3;
    this.wounds = character?.wounds ?? 0;
    this.corruption = character?.corruption ?? 0;
    this.encumbrance = 0;
  }

  image: string = null;
  origin: Origin = null;
  faction: Faction = null;
  role: Role = null;
  fate: number = 0;
  wounds: number = 0;
  corruption: number = 0;
  encumbrance: number = 0;
}
