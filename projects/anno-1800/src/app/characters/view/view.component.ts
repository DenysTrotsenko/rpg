import {Component, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, map, shareReplay, switchMap, tap} from 'rxjs/operators';
import {FirestoreService} from '@shared';
import {Character} from '@ti/app/game/models/character';
import {getAttributeBonus} from '@flames-of-freedom-1e/utils';
import {AttributeId, ProfessionId, QuirkId, SkillId, SkillTypeId, TalentId, TraitId} from '@flames-of-freedom-1e/enums';
import {DataService, DataTypes} from '@ti/app/game/data.service';
import {Quirk, Talent, Trait} from '@flames-of-freedom-1e/models';
import {FormControl, FormGroup} from '@angular/forms';

interface AttributeView { id: AttributeId; value: number; bonus: number; }
interface SkillView { id: SkillId; type: SkillTypeId; value: number; tooltip: string; }

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnDestroy {
  readonly form: FormGroup = new FormGroup({
    rp_total: new FormControl(0),
    rp_used: new FormControl(0),
    conflict: new FormControl(0),
    belief_ranks: new FormControl(0),
    flaw_ranks: new FormControl(0),
    permanent_belief_ranks: new FormControl(0),
    permanent_flaw_ranks: new FormControl(0),
    damage: new FormControl(0),
    peril: new FormControl(0),
    moderate_injuries: new FormControl([]),
    serious_injuries: new FormControl([]),
    grievous_injuries: new FormControl([])
  });
  readonly view$: BehaviorSubject<'concise' | 'full'> = new BehaviorSubject('concise');
  readonly character$: Observable<Character> = this.route.paramMap
    .pipe(
      map(res => res.get('id')),
      switchMap(id => this.firestore.doc(`characters/${id}`) as Observable<Character>),
      distinctUntilChanged((p: Character, q: Character) => JSON.stringify(p) === JSON.stringify(q)),
      shareReplay(1),
      tap(character => {
        this.attributes = this.getAttributes(character);
        this.description = this.getDescription(character);
        this.skills = this.getSkills(character);
        this.talents = this.getTalents(character);
        this.traits = this.getTraits(character);
        this.quirks = this.getQuirks(character);
        this.form.patchValue(character.parameters);
      })
    );

  attributes: AttributeView[];
  description: string;
  skills: SkillView[];
  talents: Talent[];
  traits: Trait[];
  quirks: Quirk[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly firestore: FirestoreService,
    private readonly data: DataService
  ) {}

  ngOnDestroy(): void {}

  getAttributes(character: Character): AttributeView[] {
    return Object.entries(character.attributes).map(entry => ({
      id: +entry[0],
      value: +entry[1],
      bonus: getAttributeBonus(+entry[1])
    }));
  }

  getDescription(character: Character): string {
    const name = character.name;
    const allegiance = this.data[DataTypes.ALLEGIANCES].find(i => i.id === character.allegiance);
    const age = this.data[DataTypes.AGES].find(i => i.id === character.miscellaneous.age);
    const culture = this.data[DataTypes.CULTURES].find(i => i.id === character.culture);
    const sex = this.data[DataTypes.SEX].find(i => i.id === character.miscellaneous.sex);
    const profession = this.data[DataTypes.PROFESSIONS].find(i => {
      const professions: ProfessionId[] = [
        character.professions.basic, character.professions.intermediate, character.professions.advanced
      ].filter(j => !!j);
      const current: ProfessionId = professions[professions.length - 1];
      return i.id === current;
    });
    const stature = this.data[DataTypes.STATURE].find(i => i.id === character.miscellaneous.stature);
    const build = this.data[DataTypes.BUILD].find(i => i.id === character.miscellaneous.build);
    const style = this.data[DataTypes.STYLE].find(i => i.id === character.miscellaneous.style);
    const eyes = this.data[DataTypes.EYES].find(i => i.id === character.miscellaneous.eyes);
    const mark = this.data[DataTypes.MARKS].find(i => i.id === character.miscellaneous.mark);
    const hairColor = this.data[DataTypes.HAIR_COLOR].find(i => i.id === character.miscellaneous.hair_color);
    const hairLength = this.data[DataTypes.HAIR_LENGTH].find(i => i.id === character.miscellaneous.hair_length);
    const hairStyle = this.data[DataTypes.HAIR_STYLE].find(i => i.id === character.miscellaneous.hair_style);
    const hair = `${hairLength.name} ${hairStyle.name} ${hairColor.name}`;
    return `My name is ${name} and I pledge my allegiance to the ${allegiance.name}.
      I am a/an ${age.name} ${culture.name} ${sex.name} and have made my life as a/an ${profession.name}.
      I am of a/an ${stature.name} stature, with a ${build.name} build.
      I dress ${style.name} and have ${eyes.name} eyes, ${hair} hair and ${mark.name}.`;
  }

  getSkills(character: Character): SkillView[] {
    const skills: SkillId[] = [
      ...character.advancements.basic.skills,
      ...character.advancements.intermediate.skills,
      ...character.advancements.advanced.skills
    ];
    return this.data[DataTypes.SKILLS].map(skill => ({
      id: skill.id,
      type: skill.type,
      value: skills.filter(i => i === skill.id).length * 10,
      tooltip: skill.labels?.tooltip
    }));
  }

  getTalents(character: Character): Talent[] {
    const talents: TalentId[] = [
      ...character.advancements.basic.talents,
      ...character.advancements.intermediate.talents,
      ...character.advancements.advanced.talents
    ];
    return this.data[DataTypes.TALENTS].filter(i => talents.includes(i.id));
  }

  getTraits(character: Character): Trait[] {
    const traits: TraitId[] = [
      character.trait,
      ...character.advancements.basic.traits,
      ...character.advancements.intermediate.traits,
      ...character.advancements.advanced.traits
    ];
    return this.data[DataTypes.TRAITS].filter(i => traits.includes(i.id));
  }

  getQuirks(character: Character): Quirk[] {
    const quirks: QuirkId[] = [
      ...character.advancements.basic.quirks,
      ...character.advancements.intermediate.quirks,
      ...character.advancements.advanced.quirks
    ];
    return this.data[DataTypes.QUIRKS].filter(i => quirks.includes(i.id));
  }

  trackById(_, item): number {
    return item.id;
  }
}
