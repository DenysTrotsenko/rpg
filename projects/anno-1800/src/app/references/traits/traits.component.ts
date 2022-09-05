import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Trait } from '@flames-of-freedom-1e/models';

@Component({
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TraitsComponent {
  readonly traits: Trait[] = this.data[DataTypes.TRAITS];

  constructor(private data: DataService) {}

  trackById(_, item): number {
    return item.id;
  }
}
