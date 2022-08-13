import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Talent } from '@flames-of-freedom-1e/models';

@Component({
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly talents: Talent[] = this.data[DataTypes.TALENTS];
  constructor(private data: DataService) {}
}
