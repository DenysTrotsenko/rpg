import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {CharacterSpell, Spell, SpellDuration, SpellRange, SpellTag, SpellType} from '@shadowrun/app/5e/5e.models';
import {
  SPELL_DURATIONS,
  SPELL_RANGES,
  SPELL_TAGS,
  SPELL_TYPES,
  SPELLS
} from '@shadowrun/app/5e';
import {BehaviorSubject} from 'rxjs';

interface SpellView {
  name: string;
  specialty: string;
  tags: SpellTag[];
  type: SpellType;
  range: SpellRange;
  duration: SpellDuration;
  drain: string;
  description: string;
}

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-view-spells',
  templateUrl: './view-spells.component.html',
  styleUrls: ['./view-spells.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewSpellsComponent implements OnInit {
  @Input() set spells(value: CharacterSpell[]) {
    const spells: SpellView[] = (value ?? []).map(i => {
      const spell: Spell = SPELLS.find(j => j.id === i.id);
      return {
        name: spell?.name,
        specialty: i.specialty,
        tags: SPELL_TAGS.filter(j => (spell.tags ?? []).includes(j.id)),
        type: SPELL_TYPES.find(j => spell?.type === j.id),
        range: SPELL_RANGES.find(j => spell?.range === j.id),
        duration: SPELL_DURATIONS.find(j => spell?.duration === j.id),
        drain: `F${!!spell?.drain ? (spell.drain > 0 ? ` + ${spell.drain}` : ` - ${Math.abs(spell.drain)}`) : ''}`,
        description: spell?.labels?.description
      } as SpellView;
      // category: SPELL_CATEGORY_ID;
      // damage?: SPELL_DAMAGE_ID;
    });
    this.spells$.next(spells);
  }
  readonly spells$: BehaviorSubject<SpellView[]> = new BehaviorSubject<SpellView[]>([]);
  constructor() {}

  ngOnInit(): void {
  }

  getSpell(i: CharacterSpell): Spell {
    return SPELLS.find(spell => spell.id === i.id);
  }
}
