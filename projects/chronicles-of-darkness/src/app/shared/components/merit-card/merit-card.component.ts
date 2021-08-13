import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IMerit } from '@cod/app/data/data.models';

@Component({
  selector: 'app-merit-card',
  templateUrl: './merit-card.component.html',
  styleUrls: ['./merit-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeritCardComponent {
  @Input() src: IMerit = null;
  @Input() mode: 'read' | 'edit' = 'read';
  @Output() edit: EventEmitter<IMerit> = new EventEmitter();
  @Output() delete: EventEmitter<IMerit> = new EventEmitter();
}
