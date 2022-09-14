import {Component, ChangeDetectionStrategy, HostListener, OnDestroy, OnInit} from '@angular/core';
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
export class CombatTrackerComponent implements OnInit, OnDestroy {
  readonly DataTypes = DataTypes;
  readonly threats: Threat[] = this.data[DataTypes.THREATS];
  readonly units$: BehaviorSubject<CombatTrackerUnit[]> = new BehaviorSubject<CombatTrackerUnit[]>([]);
  readonly characters$: Observable<Character[]> = this.data.charactersOwnAndMaster$;

  @HostListener('window:beforeunload') onBrowserClose(): void {
    this.ngOnDestroy();
  }

  constructor(
    private readonly data: DataService,
    private readonly dialog: DialogService
  ) {}

  ngOnInit(): void {
    const temporary = localStorage.getItem('tools.combat');
    if (temporary) {
      this.units$.next(JSON.parse(temporary));
    }
  }

  ngOnDestroy(): void {
    localStorage.setItem('tools.combat', JSON.stringify(this.units$.value));
  }

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
        initiative: getInitiative(threat) + getRolledInitiative(threat),
        damage: 0,
        peril: 0
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

  onAddPlayerClick(i: Character): void {
    this.units$.next([
      ...this.units$.value,
      new CombatTrackerUnit({
        uid: getId(),
        type: 'player',
        name: i.name
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

  trackByFn(_: number, item): string {
    return item.uid;
  }
}
