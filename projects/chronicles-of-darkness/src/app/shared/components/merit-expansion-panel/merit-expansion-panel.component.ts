import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IMerit } from '@cod/app/data/data.models';

@Component({
  selector: 'app-merit-expansion-panel',
  templateUrl: './merit-expansion-panel.component.html',
  styleUrls: ['./merit-expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeritExpansionPanelComponent {
  @Input() src: IMerit = null;
  @Input() mode: 'read' | 'edit' = 'read';
  @Output() edit: EventEmitter<IMerit> = new EventEmitter();
  @Output() delete: EventEmitter<IMerit> = new EventEmitter();
}
