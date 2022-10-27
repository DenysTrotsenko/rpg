import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { getRandomFromArray, SnackbarService } from '@shared';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Injury, InjuryType, PermanentInjury } from '@flames-of-freedom-1e/models';
import { InjuryTypeId } from '@flames-of-freedom-1e/enums';

const DEFAULT_VALUE = 'ALL';
const DEFAULT_FILTERS = { type: DEFAULT_VALUE };

@Component({
  templateUrl: './injuries.component.html',
  styleUrls: ['./injuries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InjuriesComponent {
  readonly InjuryTypeId = InjuryTypeId;
  readonly DEFAULT_VALUE = DEFAULT_VALUE;
  readonly PERMANENT = InjuryTypeId.PERMANENT;
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly filters: FormGroup = new FormGroup({
    type: new FormControl(DEFAULT_VALUE)
  });
  readonly types: InjuryType[] = this.data[DataTypes.INJURY_TYPES];
  readonly filters$ = this.filters.valueChanges.pipe(startWith(DEFAULT_FILTERS));
  readonly injuries$: Observable<Injury[]> = this.filters$.pipe(
    map(filters => this.data[DataTypes.INJURIES]
      .filter(i => filters.type === DEFAULT_VALUE ? true : filters?.type === i.type)
    )
  );
  readonly permanentInjuries$: Observable<PermanentInjury[]> = this.filters$.pipe(
    map(filters => this.data[DataTypes.PERMANENT_INJURIES]
      .filter(() => filters.type === DEFAULT_VALUE ? true : filters?.type === InjuryTypeId.PERMANENT)
    )
  );

  constructor(private data: DataService, private snackbar: SnackbarService) {}

  onRandomClick(type: InjuryTypeId): void {
    const injuries = this.data[DataTypes.INJURIES].filter(i => i.type === type);
    const random = getRandomFromArray<Injury>(injuries);

    this.snackbar.info(random.name);
  }

  trackById(_, item): number {
    return item.id;
  }
}
