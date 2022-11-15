import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Affliction } from '@grim-and-perilous/models/common';
import { getRandomFromArray, SnackbarService } from '@shared';

@Component({
  selector: 'app-afflictions',
  templateUrl: './afflictions.component.html',
  styleUrls: ['./afflictions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AfflictionsComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly afflictions: Affliction[] = this.data[DataTypes.AFFLICTIONS];

  constructor(private data: DataService, private snackbar: SnackbarService) {}

  onRandomClick(): void {
    const random = getRandomFromArray<Affliction>(this.data[DataTypes.AFFLICTIONS]);

    this.snackbar.info(random.name);
  }

  trackById(_, item): number {
    return item.id;
  }
}
