import { Injectable } from '@angular/core';
import {
  Age,
  Archetype,
  Attribute,
  Belief, Build,
  Culture, Eyes,
  Flaw,
  HairColor,
  HairLength,
  HairStyle,
  Language,
  Mark,
  Profession,
  Quirk, Sex,
  Skill, Stature, Style,
  Talent, Tier,
  Trait
} from '@flames-of-freedom-1e/models';
import {
  QuirkId,
  SkillId,
  TalentId,
  TraitId
} from '@flames-of-freedom-1e/enums';
import {
  Allegiance,
  Disposition
} from '@powered-by-zweihander/models';
import { ALLEGIANCES } from '@pbz-1850/allegiances';
import { ARCHETYPES } from '@flames-of-freedom-1e/archetypes';
import { ATTRIBUTES } from '@flames-of-freedom-1e/attributes';
import { BELIEFS } from '@flames-of-freedom-1e/beliefs';
import { CULTURES } from '@flames-of-freedom-1e/cultures';
import { FLAWS } from '@flames-of-freedom-1e/flaws';
import { PROFESSIONS } from '@flames-of-freedom-1e/professions';
import { TRAITS } from '@flames-of-freedom-1e/traits';
import { QUIRKS } from '@flames-of-freedom-1e/quirks';
import { SKILLS } from '@flames-of-freedom-1e/skills';
import { TALENTS } from '@flames-of-freedom-1e/talents';
import { AGES } from '@flames-of-freedom-1e/age';
import { BUILD, EYES, HAIR_COLOR, HAIR_LENGTH, HAIR_STYLE, MARKS, SEX, STATURE, STYLE } from '@flames-of-freedom-1e/appearance';
import { TIERS } from '@flames-of-freedom-1e/tiers';
import { LANGUAGES } from '@flames-of-freedom-1e/languages';
import {DISPOSITIONS} from '@powered-by-zweihander/dispositions';
import {Observable} from 'rxjs';
import {Campaign} from '@ti/app/game/models/campaign';
import {shareReplay, switchMap} from 'rxjs/operators';
import {Character} from '@ti/app/game/models/character';
import {AuthService, FirestoreService} from '@shared';

export enum FirestoreCollection {
  CHARACTERS = 'characters',
  CAMPAIGNS = 'campaigns'
}

export enum DataTypes {
  AGES = 'ages',
  ALLEGIANCES = 'allegiances',
  ARCHETYPES = 'archetypes',
  ATTRIBUTES = 'attributes',
  BELIEFS = 'beliefs',
  BUILD = 'build',
  CULTURES = 'cultures',
  DISPOSITIONS = 'dispositions',
  EYES = 'eyes',
  FLAWS = 'flaws',
  HAIR_COLOR = 'hair_color',
  HAIR_LENGTH = 'hair_length',
  HAIR_STYLE = 'hair_style',
  LANGUAGES = 'languages',
  MARKS = 'marks',
  PROFESSIONS = 'professions',
  QUIRKS = 'quirks',
  SEX = 'sex',
  SKILLS = 'skills',
  STATURE = 'stature',
  STYLE = 'style',
  TALENTS = 'talents',
  TIERS = 'tiers',
  TRAITS = 'traits'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly campaignsAll$: Observable<Campaign[]> = this.firestore.collection<Campaign>(FirestoreCollection.CAMPAIGNS).pipe(
    shareReplay(1)
  );
  readonly campaignsOwn$: Observable<Campaign[]> = this.auth.auth$.pipe(
    switchMap(user => this.firestore.collection<Campaign>(FirestoreCollection.CAMPAIGNS, ref => ref.where('author', '==', user.uid)))
  );
  readonly charactersAll$: Observable<Character[]> = this.firestore.collection<Character>(FirestoreCollection.CHARACTERS).pipe(
    shareReplay(1)
  );
  readonly charactersOwn$: Observable<Character[]> = this.auth.auth$.pipe(
    switchMap(user => this.firestore.collection<Character>(
      FirestoreCollection.CHARACTERS, ref => ref.where('author', '==', user.uid)
    )),
    shareReplay(1)
  );
  readonly charactersOwnAndMaster$: Observable<Character[]> = this.auth.auth$.pipe(
    switchMap(user => this.firestore.collection<Character>(
      FirestoreCollection.CHARACTERS, ref => ref.where('authors', 'array-contains', user.uid)
    )),
    shareReplay(1)
  );

  readonly [DataTypes.AGES]: Age[] = AGES;
  readonly [DataTypes.ALLEGIANCES]: Allegiance[] = ALLEGIANCES;
  readonly [DataTypes.ARCHETYPES]: Archetype[] = ARCHETYPES;
  readonly [DataTypes.ATTRIBUTES]: Attribute[] = ATTRIBUTES;
  readonly [DataTypes.BELIEFS]: Belief[] = BELIEFS;
  readonly [DataTypes.BUILD]: Build[] = BUILD;
  readonly [DataTypes.CULTURES]: Culture[] = CULTURES;
  readonly [DataTypes.DISPOSITIONS]: Disposition[] = DISPOSITIONS;
  readonly [DataTypes.EYES]: Eyes[] = EYES;
  readonly [DataTypes.FLAWS]: Flaw[] = FLAWS;
  readonly [DataTypes.HAIR_COLOR]: HairColor[] = HAIR_COLOR;
  readonly [DataTypes.HAIR_LENGTH]: HairLength[] = HAIR_LENGTH;
  readonly [DataTypes.HAIR_STYLE]: HairStyle[] = HAIR_STYLE;
  readonly [DataTypes.LANGUAGES]: Language[] = LANGUAGES;
  readonly [DataTypes.MARKS]: Mark[] = MARKS;
  readonly [DataTypes.PROFESSIONS]: Profession[] = PROFESSIONS;
  readonly [DataTypes.QUIRKS]: Quirk[] = QUIRKS.map(i => {
    i.labels.tooltip = this.getQuirkTooltip(i.id);
    return i;
  });
  readonly [DataTypes.SEX]: Sex[] = SEX;
  readonly [DataTypes.SKILLS]: Skill[] = SKILLS.map(i => {
    i.labels.tooltip = this.getSkillTooltip(i.id);
    return i;
  });
  readonly [DataTypes.STATURE]: Stature[] = STATURE;
  readonly [DataTypes.STYLE]: Style[] = STYLE;
  readonly [DataTypes.TALENTS]: Talent[] = TALENTS.map(i => {
    i.labels.tooltip = this.getTalentTooltip(i.id);
    return i;
  });
  readonly [DataTypes.TIERS]: Tier[] = TIERS;
  readonly [DataTypes.TRAITS]: Trait[] = TRAITS.map(i => {
    i.labels.tooltip = this.getTraitTooltip(i.id);
    return i;
  });

  constructor(
    private readonly auth: AuthService,
    private readonly firestore: FirestoreService
  ) {}

  private getSkillTooltip(id: SkillId): string {
    const skill: Skill = SKILLS.find(i => i.id === id);
    const attribute: Attribute = this[DataTypes.ATTRIBUTES].find(i => i.id === skill.attribute);
    return [
      `${skill.name} ${skill.type === 2 ? '*' : ''} (${attribute.name})\n`,
      `${skill.labels?.description}\n`,
      `${skill.labels?.difficulties}`,
    ].join('\n');
  }

  private getTalentTooltip(id: TalentId): string {
    const talent: Talent = TALENTS.find(i => i.id === id);
    return [
      `${talent.name}\n`,
      `${talent.labels?.description}\n`,
      `Effect: ${talent.labels?.effect}`,
    ].join('\n');
  }

  private getTraitTooltip(id: TraitId): string {
    const trait: Trait = TRAITS.find(i => i.id === id);
    return [
      `${trait.name}\n`,
      `${trait.labels?.description}\n`,
      `Effect: ${trait.labels?.effect}`,
    ].join('\n');
  }

  private getQuirkTooltip(id: QuirkId): string {
    const quirk: Quirk = QUIRKS.find(i => i.id === id);
    return [
      `${quirk.name}\n`,
      `${quirk.labels?.description}\n`,
      `Effect: ${quirk.labels?.effect}`,
    ].join('\n');
  }
}
