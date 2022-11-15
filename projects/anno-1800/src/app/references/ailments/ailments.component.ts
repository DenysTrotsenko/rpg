import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Ailment } from '@grim-and-perilous/models/common';

@Component({
  templateUrl: './ailments.component.html',
  styleUrls: ['./ailments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AilmentsComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly ailments: Ailment[] = this.data[DataTypes.AILMENTS];

  constructor(private data: DataService) {}

  trackById(_, item): number {
    return item.id;
  }
}
