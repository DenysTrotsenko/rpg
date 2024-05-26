import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemTrait } from '@imperium-maledictum-1e/models/common';
import { DataService } from '../../common/data.service';

@Component({
  templateUrl: './armoury.component.html',
  styleUrls: ['../references.base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArmouryComponent {
  readonly itemTraits$: Observable<ItemTrait[]> = this.data.itemTraits$;
  readonly itemQualities$: Observable<ItemTrait[]> = this.data.itemQualities$;
  readonly itemFlaws$: Observable<ItemTrait[]> = this.data.itemFlaws$;

  constructor(private data: DataService) {}

  trackById(_, i): string { return i.id; }
}
