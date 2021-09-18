import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharacterSkill, FifthEditionService, SkillView} from '@shadowrun/app/5e';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-view-skills',
  templateUrl: './view-skills.component.html',
  styleUrls: ['./view-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewSkillsComponent {
  @Input() view: 'concise' | 'full' = 'full';
  @Input() set skills(value: CharacterSkill[]) {
    this.skills$.next((value ?? []).filter(i => !!i.rating).map(i => this.service.getSkillView(i)));
  }
  readonly skills$: BehaviorSubject<SkillView[]> = new BehaviorSubject<SkillView[]>([]);
  constructor(private readonly service: FifthEditionService) {}
}
