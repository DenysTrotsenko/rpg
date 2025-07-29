import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../core/data.service';


@Component({
    templateUrl: './conditions.component.html',
    styleUrls: ['../references.base.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ConditionsComponent {
  readonly data = inject(DataService);
  // readonly conditions$: Observable<Condition[]> = this.data.conditions$;

  trackById(_, i): string { return i.id; }
}
