import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IEquipment } from '@cod/app/data/data.models';

@Component({
  selector: 'app-equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentCardComponent {
  @Input() src: IEquipment = null;
  @Input() mode: 'read' | 'edit' = 'read';
  @Output() edit: EventEmitter<IEquipment> = new EventEmitter();
  @Output() delete: EventEmitter<IEquipment> = new EventEmitter();
}
