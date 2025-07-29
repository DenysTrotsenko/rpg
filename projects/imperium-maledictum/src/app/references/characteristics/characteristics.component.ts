import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Characteristic } from '@imperium-maledictum-1e/models/common';
import { DataService } from '@im-common';


@Component({
    templateUrl: './characteristics.component.html',
    styleUrls: ['../references.base.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CharacteristicsComponent {
  readonly characteristics$: Observable<Characteristic[]> = this.data.characteristics$;

  constructor(private data: DataService) {}

  trackById(_, i): string { return i.id; }
}
