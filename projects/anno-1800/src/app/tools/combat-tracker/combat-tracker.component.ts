import { Component, ChangeDetectionStrategy } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { getId } from '@shared';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Threat } from '@flames-of-freedom-1e/models';
import { CombatTrackerUnit } from './combat-tracker.models';
import {Character} from '@ti/app/game/models/character';
import {ATTRIBUTES} from '@flames-of-freedom-1e/attributes';

@Component({
  templateUrl: './combat-tracker.component.html',
  styleUrls: ['./combat-tracker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombatTrackerComponent {
  readonly DataTypes = DataTypes;
  readonly threats: Threat[] = this.data[DataTypes.THREATS];
  readonly units$: BehaviorSubject<CombatTrackerUnit[]> = new BehaviorSubject<CombatTrackerUnit[]>([]);
  readonly characters$: Observable<Character[]> = this.data.charactersOwnAndMaster$;

  constructor(private readonly data: DataService) {}

  onSortClick(): void {
    const units = this.units$.value;
    this.units$.next(units.sort(this.getComparedInitiative));
  }

  onCleanClick(): void {
    this.units$.next([]);
  }

  onCloneClick(unit: CombatTrackerUnit): void {
    const units = this.units$.value;
    const index = units.findIndex(i => i.uid === unit.uid);
    this.units$.next([
      ...units.slice(0, index + 1),
      new CombatTrackerUnit({
        ...unit,
        uid: getId()
      }),
      ...units.slice(index + 1)
    ]);
  }

  onRemoveClick(unit: CombatTrackerUnit): void {
    const units = this.units$.value;
    this.units$.next(units.filter(i => i.uid !== unit.uid));
  }

  onUnitSelect(unit: CombatTrackerUnit): void {}

  onUnitChange(unit: CombatTrackerUnit): void {}

  onAddPlayerClick(i: Character): void {
    this.units$.next([
      ...this.units$.value,
      new CombatTrackerUnit({
        uid: getId(),
        type: 'player',
        name: i.name,
        attributes: []
      })
    ]);
  }

  onAddThreatClick(i: Threat): void {
    this.units$.next([
      ...this.units$.value,
      new CombatTrackerUnit({
        uid: getId(),
        type: 'threat',
        name: i.name,
        attributes: this.getAttributes(i)
      })
    ]);
  }

  getComparedInitiative(a: CombatTrackerUnit, b: CombatTrackerUnit): -1 | 0 | 1 {
    if (a.initiative < b.initiative) { return 1; }
    if (a.initiative > b.initiative) { return -1; }
    return 0;
  }

  getAttributes(threat: Threat): { name: string; value: number; }[] {
    return Object.entries(threat.attributes).map(entry => {
      return {
        name: ATTRIBUTES.find(i => i.id === +entry[0]).name,
        value: +entry[1],
      };
    });
  }

  trackByFn(_: number, item): string {
    return item.uid;
  }
}
