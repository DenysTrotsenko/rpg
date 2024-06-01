import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { HasCommonFields } from '@shared';
import { DataService } from '@im-common';

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
