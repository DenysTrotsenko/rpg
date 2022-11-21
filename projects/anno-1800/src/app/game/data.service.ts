import { Injectable } from '@angular/core';
import { Observable, combineLatest, lastValueFrom, of } from 'rxjs';
import { catchError, shareReplay, switchMap, tap } from 'rxjs/operators';
import { AuthService, FirestoreService, StorageService } from '@shared';
import {
  Affliction,
  Age, Ailment, AlchemicalArt,
  Archetype,
  Attribute,
  Belief, Build,
  Culture, Drug, Eyes,
  Flaw,
  HairColor,
  HairLength,
  HairStyle, Injury, InjuryType, Language,
  Mark, PermanentInjury,
  Profession, Quality,
  Quirk, Sex,
  Skill, Spell, SpellType, Stature, Style,
  Talent, ThreatTrait, Tier,
  Trait, Weapon,
  Lighting, Notch, Obscurement, RiskFactor, Size, ThreatType, ArchetypeId, ProfessionId
} from '@grim-and-perilous/models/common';
import { Character } from '@grim-and-perilous/models/character';
import { StoragePath } from '@grim-and-perilous/enums';
import { Campaign } from '@grim-and-perilous/models/campaign';
import { Threat } from '@grim-and-perilous/models/threat';

export enum FirestoreCollection {
  CHARACTERS = 'characters',
  CAMPAIGNS = 'campaigns'
}

export enum DataTypes {
  AGES = 'ages',
  AILMENTS = 'ailments',
  ALCHEMICAL_ARTS = 'alchemical_arts',
  AFFLICTIONS = 'afflictions',
  ARCHETYPES = 'archetypes',
  ATTRIBUTES = 'attributes',
  BELIEFS = 'beliefs',
  BUILD = 'build',
  CULTURES = 'cultures',
  DRUGS = 'drugs',
  EYES = 'eyes',
  FLAWS = 'flaws',
  HAIR_COLOR = 'hair_color',
  HAIR_LENGTH = 'hair_length',
  HAIR_STYLE = 'hair_style',
  INJURIES = 'injuries',
  INJURY_TYPES = 'injury_types',
  LANGUAGES = 'languages',
  LIGHTING = 'lighting',
  MARKS = 'marks',
  NOTCHES = 'notches',
  OBSCUREMENT = 'obscurement',
  PERMANENT_INJURIES = 'permanent_injuries',
  PROFESSIONS = 'professions',
  QUALITIES = 'qualities',
  QUIRKS = 'quirks',
  RISK_FACTORS = 'risk_factors',
  SEX = 'sex',
  SIZES = 'sizes',
  SKILLS = 'skills',
  SPELLS = 'spells',
  SPELL_TYPES = 'spell_types',
  STATURE = 'stature',
  STYLE = 'style',
  TALENTS = 'talents',
  THREATS = 'threats',
  THREAT_TYPES = 'THREAT_TYPES',
  THREAT_TRAITS = 'threat_traits',
  TIERS = 'tiers',
  TRAITS = 'traits',
  WEAPONS = 'weapons'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  [DataTypes.AGES]: Age[];
  [DataTypes.AILMENTS]: Ailment[];
  [DataTypes.AFFLICTIONS]: Affliction[];
  [DataTypes.ALCHEMICAL_ARTS]: AlchemicalArt[];
  [DataTypes.ARCHETYPES]: Archetype[];
  [DataTypes.ATTRIBUTES]: Attribute[];
  [DataTypes.BELIEFS]: Belief[];
  [DataTypes.BUILD]: Build[];
  [DataTypes.CULTURES]: Culture[];
  [DataTypes.DRUGS]: Drug[];
  [DataTypes.EYES]: Eyes[];
  [DataTypes.FLAWS]: Flaw[];
  [DataTypes.INJURIES]: Injury[];
  [DataTypes.INJURY_TYPES]: InjuryType[];
  [DataTypes.HAIR_COLOR]: HairColor[];
  [DataTypes.HAIR_LENGTH]: HairLength[];
  [DataTypes.HAIR_STYLE]: HairStyle[];
  [DataTypes.LANGUAGES]: Language[];
  [DataTypes.LIGHTING]: Lighting[];
  [DataTypes.MARKS]: Mark[];
  [DataTypes.NOTCHES]: Notch[];
  [DataTypes.OBSCUREMENT]: Obscurement[];
  [DataTypes.PERMANENT_INJURIES]: PermanentInjury[];
  [DataTypes.PROFESSIONS]: Profession[];
  [DataTypes.RISK_FACTORS]: RiskFactor[];
  [DataTypes.QUALITIES]: Quality[];
  [DataTypes.QUIRKS]: Quirk[];
  [DataTypes.SEX]: Sex[];
  [DataTypes.SIZES]: Size[];
  [DataTypes.SKILLS]: Skill[];
  [DataTypes.SPELLS]: Spell[];
  [DataTypes.SPELL_TYPES]: SpellType[];
  [DataTypes.STATURE]: Stature[];
  [DataTypes.STYLE]: Style[];
  [DataTypes.TALENTS]: Talent[];
  [DataTypes.THREATS]: Threat[];
  [DataTypes.THREAT_TRAITS]: ThreatTrait[];
  [DataTypes.THREAT_TYPES]: ThreatType[];
  [DataTypes.TIERS]: Tier[];
  [DataTypes.TRAITS]: Trait[];
  [DataTypes.WEAPONS]: Weapon[];

  readonly campaignsAll$: Observable<Campaign[]> = this.firestore.collection<Campaign>(FirestoreCollection.CAMPAIGNS).pipe(
    catchError(() => of([])),
    shareReplay(1)
  );
  readonly campaignsOwn$: Observable<Campaign[]> = this.auth.auth$.pipe(
    switchMap(user => this.firestore.collection<Campaign>(FirestoreCollection.CAMPAIGNS, ref => ref.where('author', '==', user.uid)))
  );
  // readonly campaignsOwnOrIncluded$: Observable<Campaign[]> = this.auth.auth$.pipe(
  //   switchMap(user => this.firestore.collection<Campaign>(FirestoreCollection.CAMPAIGNS, ref => ref.where('members', '==', user.uid)))
  // );
  readonly charactersAll$: Observable<Character[]> = this.firestore.collection<Character>(FirestoreCollection.CHARACTERS).pipe(
    shareReplay(1)
  );
  readonly charactersOwn$: Observable<Character[]> = this.auth.auth$.pipe(
    switchMap(user => this.firestore.collection<Character>(
      FirestoreCollection.CHARACTERS, ref => ref.where('author', '==', user.uid)
    )),
    shareReplay(1)
  );
  readonly charactersOwnOrMaster$: Observable<Character[]> = this.auth.auth$.pipe(
    switchMap(user => this.firestore.collection<Character>(
      FirestoreCollection.CHARACTERS, ref => ref.where('members', 'array-contains', user.uid)
    )),
    shareReplay(1)
  );

  constructor(
    private readonly auth: AuthService,
    private readonly storage: StorageService,
    private readonly firestore: FirestoreService
  ) {}

  onInit(): Promise<any> {
    const dataSrc = combineLatest([
      this.storage.download<Affliction[]>(StoragePath.AFFLICTIONS),
      this.storage.download<Age[]>(StoragePath.AGES),
      this.storage.download<Ailment[]>(StoragePath.AILMENTS),
      this.storage.download<AlchemicalArt[]>(StoragePath.ALCHEMICAL_ARTS),
      this.storage.download<Archetype[]>(StoragePath.ARCHETYPES),
      this.storage.download<Attribute[]>(StoragePath.ATTRIBUTES),
      this.storage.download<Belief[]>(StoragePath.BELIEFS),
      this.storage.download<Build[]>(StoragePath.BUILDS),
      this.storage.download<Culture[]>(StoragePath.CULTURES),
      this.storage.download<Drug[]>(StoragePath.DRUGS),
      this.storage.download<Eyes[]>(StoragePath.EYES),
      this.storage.download<Flaw[]>(StoragePath.FLAWS),
      this.storage.download<HairColor[]>(StoragePath.HAIR_COLORS),
      this.storage.download<HairLength[]>(StoragePath.HAIR_LENGTHS),
      this.storage.download<HairStyle[]>(StoragePath.HAIR_STYLES),
      this.storage.download<Injury[]>(StoragePath.INJURIES),
      this.storage.download<InjuryType[]>(StoragePath.INJURY_TYPES),
      this.storage.download<Language[]>(StoragePath.LANGUAGES),
      this.storage.download<Lighting[]>(StoragePath.LIGHTINGS),
      this.storage.download<Mark[]>(StoragePath.MARKS),
      this.storage.download<Notch[]>(StoragePath.NOTCHES),
      this.storage.download<Obscurement[]>(StoragePath.OBSCUREMENTS),
      this.storage.download<PermanentInjury[]>(StoragePath.PERMANENT_INJURIES),
      this.storage.download<Profession[]>(StoragePath.PROFESSIONS),
      this.storage.download<Quality[]>(StoragePath.QUALITIES),
      this.storage.download<Quirk[]>(StoragePath.QUIRKS),
      this.storage.download<RiskFactor[]>(StoragePath.RISK_FACTORS),
      this.storage.download<Sex[]>(StoragePath.SEXES),
      this.storage.download<Size[]>(StoragePath.SIZES),
      this.storage.download<Skill[]>(StoragePath.SKILLS),
      this.storage.download<SpellType[]>(StoragePath.SPELL_TYPES),
      this.storage.download<Spell[]>(StoragePath.SPELLS),
      this.storage.download<Stature[]>(StoragePath.STATURES),
      this.storage.download<Style[]>(StoragePath.STYLES),
      this.storage.download<Talent[]>(StoragePath.TALENTS),
      this.storage.download<ThreatTrait[]>(StoragePath.THREAT_TRAITS),
      this.storage.download<ThreatType[]>(StoragePath.THREAT_TYPES),
      this.storage.download<Threat[]>(StoragePath.THREATS),
      this.storage.download<Tier[]>(StoragePath.TIERS),
      this.storage.download<Trait[]>(StoragePath.TRAITS),
      this.storage.download<Weapon[]>(StoragePath.WEAPONS)
    ]).pipe(
      tap(([
        /* tslint:disable */
        afflictions, ages, ailments, alchemical_arts, archetypes, attributes, beliefs, builds, cultures, drugs,
        eyes, flaws, hair_colors, hair_lengths, hair_styles, injuries, injury_types, languages, lightings, marks,
        notches, obscurements, permanent_injuries, professions, qualities, quirks, risk_factors, sexes, sizes,
        skills, spell_types, spells, statures, styles, talents, threat_traits, threat_types, threats, tiers,
        traits, weapons
        /* tslint:enable */
      ]) => {
        this[DataTypes.AFFLICTIONS] = afflictions.map(i => {
          i.labels.tooltip = this.getAfflictionTooltip(i);
          return i;
        });
        this[DataTypes.AGES] = ages;
        this[DataTypes.AILMENTS] = ailments.map(i => {
          i.labels.tooltip = this.getAilmentTooltip(i);
          return i;
        });
        this[DataTypes.ALCHEMICAL_ARTS] = alchemical_arts.map(i => {
          i.labels.tooltip = this.getAlchemicalArtsTooltip(i, tiers);
          return i;
        });
        this[DataTypes.AGES] = ages;
        this[DataTypes.ARCHETYPES] = archetypes;
        this[DataTypes.ATTRIBUTES] = attributes;
        this[DataTypes.BELIEFS] = beliefs;
        this[DataTypes.BUILD] = builds;
        this[DataTypes.CULTURES] = cultures;
        this[DataTypes.DRUGS] = drugs.map(i => {
          i.labels.tooltip = this.getDrugTooltip(i);
          return i;
        });
        this[DataTypes.EYES] = eyes;
        this[DataTypes.FLAWS] = flaws;
        this[DataTypes.HAIR_COLOR] = hair_colors;
        this[DataTypes.HAIR_LENGTH] = hair_lengths;
        this[DataTypes.HAIR_STYLE] = hair_styles;
        this[DataTypes.INJURIES] = injuries;
        this[DataTypes.INJURY_TYPES] = injury_types;
        this[DataTypes.LANGUAGES] = languages;
        this[DataTypes.LIGHTING] = lightings;
        this[DataTypes.MARKS] = marks;
        this[DataTypes.NOTCHES] = notches;
        this[DataTypes.OBSCUREMENT] = obscurements;
        this[DataTypes.PERMANENT_INJURIES] = permanent_injuries.map(i => {
          i.labels.tooltip = this.getPermanentInjuryTooltip(i);
          return i;
        });
        this[DataTypes.PROFESSIONS] = professions;
        this[DataTypes.RISK_FACTORS] = risk_factors;
        this[DataTypes.QUALITIES] = qualities;
        this[DataTypes.QUIRKS] = quirks.map(i => {
          i.labels.tooltip = this.getQuirkTooltip(i);
          return i;
        });
        this[DataTypes.SEX] = sexes;
        this[DataTypes.SIZES] = sizes;
        this[DataTypes.SKILLS] = skills.map(i => {
          i.labels.tooltip = this.getSkillTooltip(i, attributes);
          return i;
        });
        this[DataTypes.SPELL_TYPES] = spell_types;
        this[DataTypes.SPELLS] = spells.map(i => {
          i.labels.tooltip = this.getSpellTooltip(i, tiers);
          return i;
        });
        this[DataTypes.STATURE] = statures;
        this[DataTypes.STYLE] = styles;
        this[DataTypes.TALENTS] = talents.map(i => {
          i.labels.tooltip = this.getTalentTooltip(i);
          return i;
        });
        this[DataTypes.THREATS] = threats;
        this[DataTypes.THREAT_TYPES] = threat_types;
        this[DataTypes.THREAT_TRAITS] = threat_traits;
        this[DataTypes.TIERS] = tiers;
        this[DataTypes.TRAITS] = traits.map(i => {
          i.labels.tooltip = this.getTraitTooltip(i);
          return i;
        });
        this[DataTypes.WEAPONS] = weapons.map(i => {
          // i.labels.tooltip = this.getTraitTooltip(i);
          return i;
        });
      })
    );

    return lastValueFrom(dataSrc);
  }

  getArchetype(id: ArchetypeId): Archetype {
    return this[DataTypes.ARCHETYPES].find(i => i.id === id);
  }

  getProfession(id: ProfessionId): Profession {
    return this[DataTypes.PROFESSIONS].find(i => i.id === id);
  }

  private getAfflictionTooltip(affliction: Affliction): string {
    return [
      `${affliction.name}\n`,
      `${affliction.labels?.description}\n`,
      `Effect: ${affliction.labels?.effect}`,
    ].join('\n');
  }

  private getAilmentTooltip(ailment: Ailment): string {
    return [
      `${ailment.name}\n`,
      `${ailment.labels?.description}\n`,
      `Resist: ${ailment.labels?.resist}\n`,
      `Effect: ${ailment.labels?.effect}\n`,
      `Critical Success: ${ailment.labels?.critical_success}\n`,
      `Critical Failure: ${ailment.labels?.critical_failure}\n`,
      `Other Considerations: ${ailment.labels?.other_considerations}\n`,
      `Duration: ${ailment.labels?.duration}`,
    ].join('\n');
  }

  private getDrugTooltip(drug: Drug): string {
    return [
      `${drug.name}\n`,
      `${drug.labels?.description}\n`,
      `Resist: ${drug.labels?.resist}\n`,
      `Effect: ${drug.labels?.effect}\n`,
      `Critical Success: ${drug.labels?.critical_success}\n`,
      `Critical Failure: ${drug.labels?.critical_failure}\n`,
      `Other Considerations: ${drug.labels?.other_considerations}\n`,
      `Duration: ${drug.labels?.duration}`,
    ].join('\n');
  }

  private getPermanentInjuryTooltip(injury: PermanentInjury): string {
    return [
      `${injury.name}\n`,
      `${injury.labels?.description}\n`,
      `Effect: ${injury.labels?.effect}`,
    ].join('\n');
  }

  private getSkillTooltip(skill: Skill, attributes: Attribute[]): string {
    const attribute: Attribute = attributes.find(i => i.id === skill.attribute);
    return [
      `${skill.name} ${skill.special ? '*' : ''} (${attribute.name})\n`,
      `${skill.labels?.description}\n`,
      `${skill.labels?.difficulties}`,
    ].join('\n');
  }

  private getAlchemicalArtsTooltip(art: AlchemicalArt, tiers: Tier[]): string {
    const tier = tiers.find(i => i.id === art.tier);
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

  private getSpellTooltip(spell: Spell, tiers: Tier[]): string {
    const tier = tiers.find(i => i.id === spell.tier);
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
