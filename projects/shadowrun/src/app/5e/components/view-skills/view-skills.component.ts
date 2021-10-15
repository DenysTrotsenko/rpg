import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character, FifthEditionService, SkillView } from '@shadowrun/app/5e';

@Component({
  selector: 's5e-view-skills',
  templateUrl: './view-skills.component.html',
  styleUrls: ['./view-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewSkillsComponent {
  @Input() view: 'concise' | 'full' = 'full';
  @Input() set character(value: Character) {
    this.skills$.next((value?.skills ?? []).filter(i => !!i.rating).map(i => this.service.getSkillView(i)));
  }
  readonly skills$: BehaviorSubject<SkillView[]> = new BehaviorSubject<SkillView[]>([]);
  constructor(private readonly service: FifthEditionService) {}
}
