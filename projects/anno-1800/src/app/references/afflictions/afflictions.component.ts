import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Affliction } from '@flames-of-freedom-1e/models';

@Component({
  selector: 'app-afflictions',
  templateUrl: './afflictions.component.html',
  styleUrls: ['./afflictions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AfflictionsComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly afflictions: Affliction[] = this.data[DataTypes.AFFLICTIONS];
  constructor(private data: DataService) {}
}
