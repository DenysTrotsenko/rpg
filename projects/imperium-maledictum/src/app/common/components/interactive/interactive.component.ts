import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { HasCommonFields } from '@shared';

@Component({
  selector: 'interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractiveComponent {
  readonly data = inject(DataService);

  @Input() set id(id: string) {
    this.item = this.data.get(id);
  }

  item: HasCommonFields;
}
