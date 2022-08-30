import {Component, ChangeDetectionStrategy} from '@angular/core';
import {DataService, DataTypes} from '@ti/app/game/data.service';
import {Quality, Weapon} from '@flames-of-freedom-1e/models';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  templateUrl: './customize-weapon-dialog.component.html',
  styleUrls: ['./customize-weapon-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizeWeaponDialogComponent {
  readonly weapons: Weapon[] = this.data[DataTypes.WEAPONS];
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    custom: new FormControl([])
  });
  readonly qualities$: Observable<Quality[]> = this.form.get('id').valueChanges.pipe(
    map(id => {
      const weapon = this.data[DataTypes.WEAPONS].find(i => i.id === id);
      return !!weapon
        ? this.data[DataTypes.QUALITIES].filter(i => !weapon.qualities.includes(i.id))
        : this.data[DataTypes.QUALITIES];
    })
  );

  constructor(private data: DataService) {}
}
