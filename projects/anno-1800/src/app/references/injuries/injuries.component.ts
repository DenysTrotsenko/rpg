import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Injury } from '@flames-of-freedom-1e/models';

@Component({
  selector: 'app-injuries',
  templateUrl: './injuries.component.html',
  styleUrls: ['./injuries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InjuriesComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly injuries: Injury[] = this.data[DataTypes.INJURIES];
  constructor(private data: DataService) {}
}
