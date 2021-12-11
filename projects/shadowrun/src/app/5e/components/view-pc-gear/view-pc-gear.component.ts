import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {Character, FifthEditionService, GearView} from '@shadowrun/app/5e';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 's5e-view-gear',
  templateUrl: './view-pc-gear.component.html',
  styleUrls: ['./view-pc-gear.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPcGearComponent {
  @Input() view: 'concise' | 'full' = 'full';
  @Input() set character(value: Character) {
    const items: GearView[] = (value?.gear ?? []).map(i => this.service.getGearView(i));
    this.items$.next(items);
  }
  readonly items$: BehaviorSubject<GearView[]> = new BehaviorSubject<GearView[]>([]);
  constructor(private readonly service: FifthEditionService) {}
}
