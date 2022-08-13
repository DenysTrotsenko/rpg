import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Attribute } from '@flames-of-freedom-1e/models';

@Component({
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributesComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly attributes: Attribute[] = this.data[DataTypes.ATTRIBUTES];
  constructor(private data: DataService) {}
}
