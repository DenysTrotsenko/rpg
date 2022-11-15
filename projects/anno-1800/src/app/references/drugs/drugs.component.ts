import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Drug } from '@grim-and-perilous/models/common';

@Component({
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrugsComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly drugs: Drug[] = this.data[DataTypes.DRUGS];

  constructor(private data: DataService) {}

  trackById(_, item): number {
    return item.id;
  }
}
