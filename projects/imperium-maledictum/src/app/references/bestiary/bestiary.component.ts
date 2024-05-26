import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../common/data.service';
import { BestiaryId } from '@imperium-maledictum-1e/models/common';

@Component({
  templateUrl: './bestiary.component.html',
  styleUrls: ['../references.base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BestiaryComponent {
  readonly data = inject(DataService);
  readonly opened$: BehaviorSubject<BestiaryId> = new BehaviorSubject<BestiaryId>(null);
  readonly bestiary$ = this.data.bestiary$;

  trackById(_, i): string { return i.id; }
}
