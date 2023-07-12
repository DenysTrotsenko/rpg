import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Skill, SkillId, Specialisation } from '@imperium-maledictum-1e/models/common';
import { DataService } from '../../common/data.service';

@Component({
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  readonly skills$: Observable<Skill[]> = this.data.skills$;
  readonly opened$: BehaviorSubject<SkillId> = new BehaviorSubject<SkillId>(null);
  readonly specialisations$: Observable<Specialisation[]> = combineLatest([
    this.data.specialisations$,
    this.opened$.asObservable()
  ]).pipe(
    map(([specialisations, id]) => specialisations.filter(i => i.skill === id))
  );

  constructor(private data: DataService) {}

  trackById(_, i): string { return i.id; }
}
