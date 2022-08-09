import { Component, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, shareReplay, switchMap, tap} from 'rxjs/operators';
import {FirestoreService} from '@shared';
import {Character} from '@ti/app/game/models/character';
import {getAttributeBonus} from '@flames-of-freedom-1e/utils';
import {SKILLS} from '@flames-of-freedom-1e/skills';
import {AttributeId, QuirkId, SkillId, SkillTypeId, TalentId, TraitId} from '@flames-of-freedom-1e/enums';
import {TooltipService} from '@ti/app/game/tooltip.service';

interface AttributeView { id: AttributeId; value: number; bonus: number; }
interface SkillView { id: SkillId; type: SkillTypeId; value: number; tooltip: string; }
interface TalentView { id: TalentId; tooltip: string; }
interface TraitView { id: TraitId; tooltip: string; }
interface QuirkView { id: QuirkId; tooltip: string; }


@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent {
  readonly character$: Observable<Character> = this.route.paramMap
    .pipe(
      map(res => res.get('id')),
      switchMap(id => this.firestore.doc(`characters/${id}`) as Observable<Character>),
      shareReplay(1),
      tap(character => {
        this.attributes = this.getAttributes(character);
        this.skills = this.getSkills(character);
        this.talents = this.getTalents(character);
        this.traits = this.getTraits(character);
      })
    );
  readonly view$: BehaviorSubject<'concise' | 'full'> = new BehaviorSubject('concise');

  attributes: AttributeView[];
  skills: SkillView[];
  talents: TalentView[];
  traits: TraitView[];
  quirks: QuirkView[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly firestore: FirestoreService,
    private readonly tooltip: TooltipService
  ) {}

  getAttributes(character: Character): AttributeView[] {
    return Object.entries(character.attributes).map(entry => ({
      id: +entry[0],
      value: +entry[1],
      bonus: getAttributeBonus(+entry[1])
    }));
  }

  getSkills(character: Character): SkillView[] {
    const skills: SkillId[] = [
      ...character.advancements.basic.skills,
      ...character.advancements.intermediate.skills,
      ...character.advancements.advanced.skills
    ];
    return SKILLS.map(skill => ({
      id: skill.id,
      type: skill.type,
      value: skills.filter(i => i === skill.id).length * 10,
      tooltip: this.tooltip.getSkillTooltip(skill.id)
    }));
  }

  getTalents(character: Character): TalentView[] {
    const talents: TalentId[] = [
      ...character.advancements.basic.talents,
      ...character.advancements.intermediate.talents,
      ...character.advancements.advanced.talents
    ];
    return talents.map(i => ({
      id: i,
      tooltip: this.tooltip.getTalentTooltip(i)
    }));
  }

  getTraits(character: Character): TraitView[] {
    const traits: TraitId[] = [
      character.trait,
      ...character.advancements.basic.traits,
      ...character.advancements.intermediate.traits,
      ...character.advancements.advanced.traits
    ];
    return traits.map(i => ({
      id: i,
      tooltip: this.tooltip.getTraitTooltip(i)
    }));
  }

  getQuirks(character: Character): QuirkView[] {
    const quirks: QuirkId[] = [
      ...character.advancements.basic.quirks,
      ...character.advancements.intermediate.quirks,
      ...character.advancements.advanced.quirks
    ];
    return quirks.map(i => ({
      id: i,
      tooltip: this.tooltip.getQuirkTooltip(i)
    }));
  }

  trackById(_, item): number {
    return item.id;
  }
}
