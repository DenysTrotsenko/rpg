import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Characteristic } from '@wfrp-4e/models/common';
import { DataService } from '../../core/data.service';


@Component({
  templateUrl: './characteristics.component.html',
  styleUrls: ['../references.base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacteristicsComponent {
  readonly characteristics: Characteristic[] = this.data.characteristics;

  constructor(private data: DataService) {}

  trackById(_, i): string { return i.id; }
}
