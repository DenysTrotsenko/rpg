import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import {AlchemicalArt, Injury, Spell, SpellType, Tier} from '@flames-of-freedom-1e/models';
import {FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

const DEFAULT_VALUE = 'ALL';
const DEFAULT_FILTERS = { tier: DEFAULT_VALUE, type: DEFAULT_VALUE };

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellsComponent {
  readonly DEFAULT_VALUE = DEFAULT_VALUE;
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly filters: FormGroup = new FormGroup({
    tier: new FormControl(DEFAULT_VALUE),
    type: new FormControl(DEFAULT_VALUE)
  });
  readonly tiers: Tier[] = this.data[DataTypes.TIERS];
  readonly types: SpellType[] = this.data[DataTypes.SPELL_TYPES];
  readonly filters$ = this.filters.valueChanges.pipe(startWith(DEFAULT_FILTERS));
  readonly spells$: Observable<Spell[]> = this.filters$.pipe(
    map(filters => this.data[DataTypes.SPELLS]
      .filter(i => filters.tier === DEFAULT_VALUE ? true : filters?.tier === i.tier)
      .filter(i => filters.type === DEFAULT_VALUE ? true : filters?.type === i.type)
    )
  );
  readonly arts$: Observable<AlchemicalArt[]> = this.filters$.pipe(
    map(filters => this.data[DataTypes.ALCHEMICAL_ARTS]
      .filter(i => filters.tier === DEFAULT_VALUE ? true : filters?.tier === i.tier)
      .filter(i => filters.type === DEFAULT_VALUE ? true : filters?.type === i.type)
    )
  );

  constructor(private data: DataService) {}

  onFiltersResetClick(): void {
    this.filters.patchValue(DEFAULT_FILTERS);
  }

  trackById(_, item): number {
    return item.id;
  }
}
