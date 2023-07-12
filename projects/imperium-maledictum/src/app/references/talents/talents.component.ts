import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../common/data.service';
import { Talent } from '@imperium-maledictum-1e/models/common';

@Component({
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsComponent {
  readonly talents$: Observable<Talent[]> = this.data.talents$;

  constructor(private data: DataService) {}

  trackById(_, i): string { return i.id; }
}
