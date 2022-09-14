import { Component, ChangeDetectionStrategy } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {DialogService, getId} from '@shared';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Threat } from '@flames-of-freedom-1e/models';
import { CombatTrackerUnit } from './combat-tracker.models';
import {Character} from '@ti/app/game/models/character';
import {ATTRIBUTES} from '@flames-of-freedom-1e/attributes';
import {getAttributeBonus, getInitiative, getRolledInitiative} from '@ti/app/game/threat.utils';
import {SkillId} from '@flames-of-freedom-1e/enums';
import {filter, tap} from 'rxjs/operators';

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

  constructor(
    private readonly data: DataService,
    private readonly dialog: DialogService
  ) {}

  onSortClick(): void {
    const units = this.units$.value;
    this.units$.next(units.sort(this.getComparedInitiative));
  }

  onCleanClick(): void {
    this.dialog
      .confirm({
        data: {
          title: 'Clean Tracker',
          description: 'Are you sure you want to remove all units from tracker?',
          ok: 'Clean'
        }
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        tap(() => {
          this.units$.next([]);
        })
      )
      .subscribe();
  }

  onCloneClick(unit: CombatTrackerUnit): void {
    const units = this.units$.value;
    const index = units.findIndex(i => i.uid === unit.uid);
    const threat = this.data[DataTypes.THREATS].find(i => i.id === unit.templateId);
    this.units$.next([
      ...units.slice(0, index + 1),
      new CombatTrackerUnit({
        ...unit,
        uid: getId(),
        initiative: getInitiative(threat) + getRolledInitiative(threat)
      }),
      ...units.slice(index + 1)
    ]);
  }

  onRemoveClick(unit: CombatTrackerUnit): void {
    this.dialog
      .confirm({
        data: {
          title: 'Remove Unit',
          description: 'Are you sure you want to remove this unit?',
          ok: 'Remove'
        }
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        tap(() => {
          const units = this.units$.value;
          this.units$.next(units.filter(i => i.uid !== unit.uid));
        })
      )
      .subscribe();
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
        attributes: [],
        skills: [],
        traits: []
      })
    ]);
  }

  onAddThreatClick(i: Threat): void {
    this.units$.next([
      ...this.units$.value,
      new CombatTrackerUnit({
        uid: getId(),
        type: 'threat',
        templateId: i.id,
        name: i.name,
        attributes: this.getAttributes(i),
        skills: Object.entries(i.advancements.skills
          .reduce((acc: object, cur: SkillId) => {
            if (acc.hasOwnProperty(cur)) {
              acc[cur] += 10;
            } else {
              acc[cur] = 10;
            }
            return acc;
          }, {}))
          .map(skill => {
            return { id: +skill[0] as SkillId, value: skill[1] as number };
          }),
        traits: i.advancements.traits,
        initiative: getInitiative(i) + getRolledInitiative(i),
        damage: 0,
        peril: 0
      })
    ]);
  }

  getComparedInitiative(a: CombatTrackerUnit, b: CombatTrackerUnit): -1 | 0 | 1 {
    if (a.initiative < b.initiative) { return 1; }
    if (a.initiative > b.initiative) { return -1; }
    return 0;
  }

  getAttributes(threat: Threat): { name: string; value: number; bonus: number; }[] {
    return Object.entries(threat.attributes).map(entry => {
      return {
        name: ATTRIBUTES.find(i => i.id === +entry[0]).name,
        value: +entry[1],
        bonus: getAttributeBonus(threat, +entry[0])
      };
    });
  }

  trackByFn(_: number, item): string {
    return item.uid;
  }
}
