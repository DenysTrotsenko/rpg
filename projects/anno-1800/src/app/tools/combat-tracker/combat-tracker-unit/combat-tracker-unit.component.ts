import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { CombatTrackerUnit } from '../combat-tracker.models';

@Component({
  selector: 'app-combat-tracker-unit',
  templateUrl: './combat-tracker-unit.component.html',
  styleUrls: ['./combat-tracker-unit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombatTrackerUnitComponent {
  @Input() data: CombatTrackerUnit;
  @Output() changed: EventEmitter<CombatTrackerUnit> = new EventEmitter();
  @Output() selected: EventEmitter<CombatTrackerUnit> = new EventEmitter();
  @Output() clone: EventEmitter<CombatTrackerUnit> = new EventEmitter();
  @Output() remove: EventEmitter<CombatTrackerUnit> = new EventEmitter();

  constructor() {}

  onCloneClick(data): void {
    this.clone.emit(data);
  }

  onRemoveClick(data): void {
    this.remove.emit(data);
  }
}
