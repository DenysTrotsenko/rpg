import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Attribute } from '@grim-and-perilous/models/common';

@Component({
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributesComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly attributes: Attribute[] = this.data[DataTypes.ATTRIBUTES];

  constructor(private data: DataService) {}

  trackById(_, item): number {
    return item.id;
  }
}
