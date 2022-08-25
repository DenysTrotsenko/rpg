import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { AuthService, FirestoreService } from '@shared';
import {
  Affliction,
  Age, AlchemicalArt,
  Archetype,
  Attribute,
  Belief, Build,
  Culture, Eyes,
  Flaw,
  HairColor,
  HairLength,
  HairStyle, Injury, InjuryType,
  Language,
  Mark, PermanentInjury,
  Profession,
  Quirk, Sex,
  Skill, Spell, SpellType, Stature, Style,
  Talent, Tier,
  Trait
} from '@flames-of-freedom-1e/models';
import {
  // Allegiance,
  Disposition
} from '@powered-by-zweihander/models';
import { AFFLICTIONS } from '@flames-of-freedom-1e/afflictions';
// import { ALLEGIANCES } from '@pbz-1850/allegiances';
import { ARCHETYPES } from '@flames-of-freedom-1e/archetypes';
import { ATTRIBUTES } from '@flames-of-freedom-1e/attributes';
import { BELIEFS } from '@flames-of-freedom-1e/beliefs';
import { CULTURES } from '@flames-of-freedom-1e/cultures';
import { DISPOSITIONS } from '@powered-by-zweihander/dispositions';
import { FLAWS } from '@flames-of-freedom-1e/flaws';
import { PROFESSIONS } from '@flames-of-freedom-1e/professions';
import { TRAITS } from '@flames-of-freedom-1e/traits';
import { QUIRKS } from '@flames-of-freedom-1e/quirks';
import { SKILLS } from '@flames-of-freedom-1e/skills';
import {ALCHEMICAL_ARTS, SPELL_TYPES, SPELLS} from '@flames-of-freedom-1e/spells';
import { TALENTS } from '@flames-of-freedom-1e/talents';
import { AGES } from '@flames-of-freedom-1e/age';
import { BUILD, EYES, HAIR_COLOR, HAIR_LENGTH, HAIR_STYLE, MARKS, SEX, STATURE, STYLE } from '@flames-of-freedom-1e/appearance';
import { TIERS } from '@flames-of-freedom-1e/tiers';
import { LANGUAGES } from '@flames-of-freedom-1e/languages';
import {Campaign} from '@ti/app/game/models/campaign';
import {Character} from '@ti/app/game/models/character';
import {INJURIES, INJURY_TYPES} from '@flames-of-freedom-1e/injuries';
import {PERMANENT_INJURIES} from '@flames-of-freedom-1e/permanent-injuries';


export enum FirestoreCollection {
  CHARACTERS = 'characters',
  CAMPAIGNS = 'campaigns'
}

export enum DataTypes {
  AGES = 'ages',
  // ALLEGIANCES = 'allegiances',
  ALCHEMICAL_ARTS = 'alchemical_arts',
  AFFLICTIONS = 'afflictions',
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
  INJURIES = 'injuries',
  INJURY_TYPES = 'injury_types',
  LANGUAGES = 'languages',
  MARKS = 'marks',
  PERMANENT_INJURIES = 'permanent_injuries',
  PROFESSIONS = 'professions',
  QUIRKS = 'quirks',
  SEX = 'sex',
  SKILLS = 'skills',
  SPELLS = 'spells',
  SPELL_TYPES = 'spell_types',
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
  readonly [DataTypes.AFFLICTIONS]: Affliction[] = AFFLICTIONS.map(i => {
    i.labels.tooltip = this.getAfflictionTooltip(i);
    return i;
  });
  // readonly [DataTypes.ALLEGIANCES]: Allegiance[] = ALLEGIANCES;
  readonly [DataTypes.ALCHEMICAL_ARTS]: AlchemicalArt[] = ALCHEMICAL_ARTS.map(i => {
    i.labels.tooltip = this.getAlchemicalArtsTooltip(i);
    return i;
  });
  readonly [DataTypes.ARCHETYPES]: Archetype[] = ARCHETYPES;
  readonly [DataTypes.ATTRIBUTES]: Attribute[] = ATTRIBUTES;
  readonly [DataTypes.BELIEFS]: Belief[] = BELIEFS;
  readonly [DataTypes.BUILD]: Build[] = BUILD;
  readonly [DataTypes.CULTURES]: Culture[] = CULTURES;
  readonly [DataTypes.DISPOSITIONS]: Disposition[] = DISPOSITIONS;
  readonly [DataTypes.EYES]: Eyes[] = EYES;
  readonly [DataTypes.FLAWS]: Flaw[] = FLAWS;
  readonly [DataTypes.INJURIES]: Injury[] = INJURIES;
  readonly [DataTypes.INJURY_TYPES]: InjuryType[] = INJURY_TYPES;
  readonly [DataTypes.HAIR_COLOR]: HairColor[] = HAIR_COLOR;
  readonly [DataTypes.HAIR_LENGTH]: HairLength[] = HAIR_LENGTH;
  readonly [DataTypes.HAIR_STYLE]: HairStyle[] = HAIR_STYLE;
  readonly [DataTypes.LANGUAGES]: Language[] = LANGUAGES;
  readonly [DataTypes.MARKS]: Mark[] = MARKS;
  readonly [DataTypes.PERMANENT_INJURIES]: PermanentInjury[] = PERMANENT_INJURIES.map(i => {
    i.labels.tooltip = this.getPermanentInjuryTooltip(i);
    return i;
  });
  readonly [DataTypes.PROFESSIONS]: Profession[] = PROFESSIONS;
  readonly [DataTypes.QUIRKS]: Quirk[] = QUIRKS.map(i => {
    i.labels.tooltip = this.getQuirkTooltip(i);
    return i;
  });
  readonly [DataTypes.SEX]: Sex[] = SEX;
  readonly [DataTypes.SKILLS]: Skill[] = SKILLS.map(i => {
    i.labels.tooltip = this.getSkillTooltip(i);
    return i;
  });
  readonly [DataTypes.SPELLS]: Spell[] = SPELLS.map(i => {
    i.labels.tooltip = this.getSpellTooltip(i);
    return i;
  });
  readonly [DataTypes.SPELL_TYPES]: SpellType[] = SPELL_TYPES;
  readonly [DataTypes.STATURE]: Stature[] = STATURE;
  readonly [DataTypes.STYLE]: Style[] = STYLE;
  readonly [DataTypes.TALENTS]: Talent[] = TALENTS.map(i => {
    i.labels.tooltip = this.getTalentTooltip(i);
    return i;
  });
  readonly [DataTypes.TIERS]: Tier[] = TIERS;
  readonly [DataTypes.TRAITS]: Trait[] = TRAITS.map(i => {
    i.labels.tooltip = this.getTraitTooltip(i);
    return i;
  });

  constructor(
    private readonly auth: AuthService,
    private readonly firestore: FirestoreService
  ) {}

  private getAfflictionTooltip(affliction: Affliction): string {
    return [
      `${affliction.name}\n`,
      `${affliction.labels?.description}\n`,
      `Effect: ${affliction.labels?.effect}`,
    ].join('\n');
  }

  private getPermanentInjuryTooltip(injury: PermanentInjury): string {
    return [
      `${injury.name}\n`,
      `${injury.labels?.description}\n`,
      `Effect: ${injury.labels?.effect}`,
    ].join('\n');
  }

  private getSkillTooltip(skill: Skill): string {
    const attribute: Attribute = this[DataTypes.ATTRIBUTES].find(i => i.id === skill.attribute);
    return [
      `${skill.name} ${skill.type === 2 ? '*' : ''} (${attribute.name})\n`,
      `${skill.labels?.description}\n`,
      `${skill.labels?.difficulties}`,
    ].join('\n');
  }

  private getAlchemicalArtsTooltip(art: AlchemicalArt): string {
    const tier = TIERS.find(i => i.id === art.tier);
    return [
      `${art.name}\n`,
      `${art.labels?.description}\n`,
      `Requirement: ${tier?.name}\n`,
      `Preparation Time: ${art.labels?.preparation_time}\n`,
      `Create: ${art.labels?.create}\n`,
      `Effect: ${art.labels?.effect}\n`,
      `Critical Success: ${art.labels?.critical_success}\n`,
      `Critical Failure: ${art.labels?.critical_failure}\n`,
      `Other Considerations: ${art.labels?.other_considerations}`,
    ].join('\n');
  }

  private getSpellTooltip(spell: Spell): string {
    const tier = TIERS.find(i => i.id === spell.tier);
    return [
      `${spell.name}\n`,
      `${spell.labels?.description}\n`,
      `Requirement: ${tier?.name}\n`,
      `Casting Time: ${spell.labels?.casting_time}\n`,
      `Distance: ${spell.labels?.distance}\n`,
      `Reagents: ${spell.labels?.reagents}\n`,
      `Effect: ${spell.labels?.effect}\n`,
      `Critical Success: ${spell.labels?.critical_success}\n`,
      `Critical Failure: ${spell.labels?.critical_failure}\n`,
      `Duration: ${spell.labels?.duration}`,
    ].join('\n');
  }

  private getTalentTooltip(talent: Talent): string {
    return [
      `${talent.name}\n`,
      `${talent.labels?.description}\n`,
      `Effect: ${talent.labels?.effect}`,
    ].join('\n');
  }

  private getTraitTooltip(trait: Trait): string {
    return [
      `${trait.name}\n`,
      `${trait.labels?.description}\n`,
      `Effect: ${trait.labels?.effect}`,
    ].join('\n');
  }

  private getQuirkTooltip(quirk: Quirk): string {
    return [
      `${quirk.name}\n`,
      `${quirk.labels?.description}\n`,
      `Effect: ${quirk.labels?.effect}`,
    ].join('\n');
  }
}
