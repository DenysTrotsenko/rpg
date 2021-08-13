import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IEquipment } from '@cod/app/data/data.models';

@Component({
  selector: 'app-equipment-expansion-panel',
  templateUrl: './equipment-expansion-panel.component.html',
  styleUrls: ['./equipment-expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentExpansionPanelComponent {
  @Input() src: IEquipment = null;
  @Input() mode: 'read' | 'edit' = 'read';
  @Output() edit: EventEmitter<IEquipment> = new EventEmitter();
  @Output() delete: EventEmitter<IEquipment> = new EventEmitter();
}
