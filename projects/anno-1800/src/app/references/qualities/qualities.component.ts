import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Quality } from '@flames-of-freedom-1e/models';

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualitiesComponent {
  readonly qualities: Quality[] = this.data[DataTypes.QUALITIES];

  constructor(private data: DataService) {}

  trackById(_, item): number {
    return item.id;
  }
}
