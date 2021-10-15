import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Character, FifthEditionService, KnowledgeView} from '@shadowrun/app/5e';

@Component({
  selector: 's5e-view-knowledge',
  templateUrl: './view-pc-knowledge.component.html',
  styleUrls: ['./view-pc-knowledge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPcKnowledgeComponent {
  @Input() view: 'concise' | 'full' = 'full';
  @Input() set character(value: Character) {
    const knowledge: KnowledgeView[] = (value?.knowledge ?? []).map(i => this.service.getKnowledgeView(i));
    this.knowledge$.next(knowledge);
  }
  readonly knowledge$: BehaviorSubject<KnowledgeView[]> = new BehaviorSubject<KnowledgeView[]>([]);

  constructor(private readonly service: FifthEditionService) {}
}
