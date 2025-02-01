import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Talent } from '@wfrp-4e/models/common';
import { DataService } from '../../core/data.service';


@Component({
  templateUrl: './talents.component.html',
  styleUrls: ['../references.base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsComponent {
  readonly talents$: Observable<Talent[]> = this.data.talents$;

  constructor(private data: DataService) {}

  trackById(_, i): string { return i.id; }
}
