import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../core/data.service';
import { Characteristic } from '@wfrp-4e/models/common';
import { SkillId } from '@wfrp-4e/models/enums';


interface SkillView {
  id: SkillId;
  name: string;
  characteristic: string;
  special: string;
  description: string;
}

@Component({
  templateUrl: './skills.component.html',
  styleUrls: ['../references.base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  readonly opened$: BehaviorSubject<SkillId> = new BehaviorSubject<SkillId>(null);
  readonly skills$: Observable<SkillView[]> = this.data.skills$.pipe(
    map(skills => skills.map(i => {
      return {
        id: i.id,
        name: i.name,
        characteristic: this.data.get<Characteristic>(i.characteristic)?.labels?.abbreviation,
        special: [i.advanced ? 'advanced' : 'basic', i.grouped ? 'grouped' : null].filter(j => !!j).join(', '),
        description: i.labels?.description
      };
    }))
  );

  constructor(private data: DataService) {}

  trackById(_, i): string { return i.id; }
}
