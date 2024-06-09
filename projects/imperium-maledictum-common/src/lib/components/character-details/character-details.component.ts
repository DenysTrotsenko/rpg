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

  @Input() set character(character: ImperiumMaledictumCharacter) {
    this.image = character?.image;
    this.origin = this.data.get<Origin>(character?.origin);
    this.faction = this.data.get<Faction>(character?.faction);
    this.role = this.data.get<Role>(character?.role);
  }

  image: string = null;
  origin: Origin = null;
  faction: Faction = null;
  role: Role = null;
}
