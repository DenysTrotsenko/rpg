import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Condition } from '@imperium-maledictum-1e/models/common';
import { DataService } from '@im-common';


@Component({
    templateUrl: './conditions.component.html',
    styleUrls: ['../references.base.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ConditionsComponent {
  readonly data = inject(DataService);
  readonly conditions$: Observable<Condition[]> = this.data.conditions$;

  trackById(_, i): string { return i.id; }
}
