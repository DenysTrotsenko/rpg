import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Spell } from '@flames-of-freedom-1e/models';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellsComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly spells: Spell[] = this.data[DataTypes.SPELLS];
  constructor(private data: DataService) {}
}
