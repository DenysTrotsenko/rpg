import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Injury, InjuryType } from '@flames-of-freedom-1e/models';
import { FormControl, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

const DEFAULT_VALUE = 'ALL';
const DEFAULT_FILTERS = { type: DEFAULT_VALUE };

@Component({
  selector: 'app-injuries',
  templateUrl: './injuries.component.html',
  styleUrls: ['./injuries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InjuriesComponent {
  readonly DEFAULT_VALUE = DEFAULT_VALUE;
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

  constructor(private data: DataService) {}

  trackById(_, item): number {
    return item.id;
  }
}
