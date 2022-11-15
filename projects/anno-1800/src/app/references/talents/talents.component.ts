import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Talent } from '@grim-and-perilous/models/common';

@Component({
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsComponent {
  readonly talents: Talent[] = this.data[DataTypes.TALENTS];

  constructor(private data: DataService) {}

  trackById(_, item): number {
    return item.id;
  }
}
