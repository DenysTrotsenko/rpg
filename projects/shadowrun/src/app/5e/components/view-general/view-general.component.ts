import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character, FifthEditionService, GeneralView } from '@shadowrun/app/5e';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-view-general',
  templateUrl: './view-general.component.html',
  styleUrls: ['./view-general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewGeneralComponent {
  @Input() view: 'concise' | 'full' = 'full';
  @Input() set character(value: Character) {
    this.general$.next(this.service.getGeneralView({
      portrait: value?.portrait,
      name: value?.name,
      miscellaneous: value?.miscellaneous,
      awakening: value?.awakening,
      metatype: value?.metatype
    }));
  }
  readonly general$: BehaviorSubject<GeneralView> = new BehaviorSubject<GeneralView>(null);
  constructor(private readonly service: FifthEditionService) {}
}
