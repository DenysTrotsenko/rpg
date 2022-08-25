import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Quirk } from '@flames-of-freedom-1e/models';

@Component({
  templateUrl: './quirks.component.html',
  styleUrls: ['./quirks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuirksComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly quirks: Quirk[] = this.data[DataTypes.QUIRKS];

  constructor(private data: DataService) {}

  trackById(_, item): number {
    return item.id;
  }
}
