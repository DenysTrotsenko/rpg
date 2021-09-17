import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FifthEditionService, CharacterSpell, SpellView } from '@shadowrun/app/5e';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-view-spells',
  templateUrl: './view-spells.component.html',
  styleUrls: ['./view-spells.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewSpellsComponent {
  @Input() view: 'concise' | 'full' = 'full';
  @Input() set spells(value: CharacterSpell[]) {
    const spells: SpellView[] = (value ?? []).map(i => this.service.getSpellView(i));
    this.spells$.next(spells);
  }
  readonly spells$: BehaviorSubject<SpellView[]> = new BehaviorSubject<SpellView[]>([]);
  constructor(private readonly service: FifthEditionService) {}

  getTypeTooltip(i: SpellView): string {
    return (i.type?.labels ?? {}).hasOwnProperty(i.category?.id)
      ? (i.type?.labels ?? {})[i.category?.id]
      : i.type?.labels?.alias;
  }
}
