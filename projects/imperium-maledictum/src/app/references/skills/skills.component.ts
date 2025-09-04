import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Characteristic, SkillId, SpecialisationId } from '@imperium-maledictum-1e/models/common';
import { DataService } from '@im-common';


interface SkillView {
  id: SkillId;
  name: string;
  characteristic: string;
  description: string;
}

interface SpecialisationView {
  id: SpecialisationId;
  name: string;
  description: string;
}

@Component({
    templateUrl: './skills.component.html',
    styleUrls: ['../references.base.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SkillsComponent {
  readonly opened$: BehaviorSubject<SkillId> = new BehaviorSubject<SkillId>(null);
  readonly skills$: Observable<SkillView[]> = this.data.skills$.pipe(
    map(skills => skills.map(i => {
      return {
        id: i.id,
        name: i.name,
        characteristic: this.data.get<Characteristic>(i.characteristic)?.labels?.abbreviation,
        description: i.labels?.description
      };
    }))
  );
  readonly specialisations$: Observable<SpecialisationView[]> = combineLatest([
    this.data.specialisations$,
    this.opened$.asObservable()
  ]).pipe(
    map(([specialisations, id]) => specialisations.filter(i => i.skill === id).map(i => {
      const suffix = i.multiple || i.restricted
        ? [i.multiple ? 'Various' : null, i.restricted ? 'Restricted' : null].filter(res => !!res).join(', ')
        : null;

      return {
        id: i.id,
        name: `${i.name}${suffix ? ` (${suffix})` : ''}`,
        description: i.labels?.description
      };
    }))
  );

  constructor(private data: DataService) {}

  trackById(_, i): string { return i.id; }
}
