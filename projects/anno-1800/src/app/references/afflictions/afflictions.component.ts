import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import {Affliction, Injury} from '@flames-of-freedom-1e/models';
import {getRandomFromArray} from '@shared';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-afflictions',
  templateUrl: './afflictions.component.html',
  styleUrls: ['./afflictions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AfflictionsComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly afflictions: Affliction[] = this.data[DataTypes.AFFLICTIONS];

  constructor(private data: DataService, private snackbar: MatSnackBar) {}

  onRandomClick(): void {
    const random = getRandomFromArray<Affliction>(this.data[DataTypes.AFFLICTIONS]);

    this.snackbar.open(random.name, 'Ok');
  }

  trackById(_, item): number {
    return item.id;
  }
}
