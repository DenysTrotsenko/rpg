import { Component, ChangeDetectionStrategy, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { DialogService, getId } from '@shared';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { CombatTrackerUnit } from './combat-tracker.models';
import { Character } from '@ti/app/game/models/character';
import { getInitiative, getRolledInitiative } from '@ti/app/game/threat.utils';
import {
  Threat, Lighting, Obscurement, LightingId, NotchId, ObscurementId, RiskFactorId
} from '@grim-and-perilous/models/common';
import { LIGHTING_ID_PERFECT_LIGHT, OBSCUREMENT_ID_NO_OBSCUREMENT } from '@grim-and-perilous/const';

interface ThreatsOnBoard {
  risk_factor: RiskFactorId;
  notch: NotchId;
  value: number;
}

@Component({
  templateUrl: './combat-tracker.component.html',
  styleUrls: ['./combat-tracker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombatTrackerComponent implements OnInit, OnDestroy {
  readonly DataTypes = DataTypes;
  readonly lighting: Lighting[] = this.data[DataTypes.LIGHTING];
  readonly obscurement: Obscurement[] = this.data[DataTypes.OBSCUREMENT];
  readonly threats: Threat[] = this.data[DataTypes.THREATS];
  readonly form: FormGroup = new FormGroup({
    lighting: new FormControl(LIGHTING_ID_PERFECT_LIGHT),
    obscurement: new FormControl(OBSCUREMENT_ID_NO_OBSCUREMENT)
  });
  readonly units$: BehaviorSubject<CombatTrackerUnit[]> = new BehaviorSubject<CombatTrackerUnit[]>([]);
  readonly characters$: Observable<Character[]> = this.data.charactersOwnAndMaster$;
  readonly deployed$: Observable<ThreatsOnBoard[]> = this.units$.asObservable().pipe(
    map(units => {
      return units
        .filter(i => i.type === 'threat')
        .reduce((acc, unit) => {
          const threat: Threat = this.data[DataTypes.THREATS].find(i => i.id === unit.templateId);
          const exist = acc.find(i => i.risk_factor === threat.risk_factor && i.notch === threat.notch);
          if (!!exist) {
            exist.value++;
            return acc;
          } else {
            return [...acc, { risk_factor: threat.risk_factor, notch: threat.notch, value: 1 }];
          }
        }, [] as ThreatsOnBoard[]);
    }),
    map((deployed: ThreatsOnBoard[]) => deployed.sort((a, b) => {
      const riskFactorA: number = this.data[DataTypes.RISK_FACTORS].map(i => i.id).indexOf(a.risk_factor);
      const riskFactorB: number = this.data[DataTypes.RISK_FACTORS].map(i => i.id).indexOf(b.risk_factor);
      if (riskFactorA === riskFactorB) {
        return this.data[DataTypes.NOTCHES].map(i => i.id).indexOf(a.notch) - this.data[DataTypes.NOTCHES].map(i => i.id).indexOf(b.notch);
      }
      return riskFactorA - riskFactorB;
    }))
  );

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
    const environment = localStorage.getItem('tools.combat-environment');
    if (environment) {
      this.form.patchValue(JSON.parse(environment));
    }
  }

  ngOnDestroy(): void {
    localStorage.setItem('tools.combat', JSON.stringify(this.units$.value));
    localStorage.setItem('tools.combat-environment', JSON.stringify(this.form.getRawValue()));
  }

  getLighting(id: LightingId): Lighting {
    return this.data[DataTypes.LIGHTING].find(i => i.id === id);
  }

  getObscurement(id: ObscurementId): Obscurement {
    return this.data[DataTypes.OBSCUREMENT].find(i => i.id === id);
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

  trackByUid(_: number, item): string {
    return item.uid;
  }
}
