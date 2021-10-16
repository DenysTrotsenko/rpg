import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Character, FifthEditionService, MAGIC_TRADITIONS, SpiritView} from '@shadowrun/app/5e';

@Component({
  selector: 's5e-view-spirits',
  templateUrl: './view-spirits.component.html',
  styleUrls: ['./view-spirits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewSpiritsComponent {
  @Input() view: 'concise' | 'full' = 'full';
  @Input() set character(value: Character) {
    const tradition = MAGIC_TRADITIONS.find(i => i.id === value?.magic_tradition);
    const spirits: SpiritView[] = Object.entries(tradition?.spirits).map(i => this.service.getSpiritView(i[1], i[0]));
    this.spirits$.next(spirits);
  }
  readonly spirits$: BehaviorSubject<SpiritView[]> = new BehaviorSubject<SpiritView[]>([]);

  constructor(private readonly service: FifthEditionService) {}
}
