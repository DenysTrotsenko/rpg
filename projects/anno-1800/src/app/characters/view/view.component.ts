import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, filter, map, shareReplay, startWith, switchMap, tap} from 'rxjs/operators';
import {DialogService, FirestoreService, getId} from '@shared';
import {Character} from '@ti/app/game/models/character';
import {getBonusFromAttribute} from '@flames-of-freedom-1e/utils';
import {
  AttributeId,
  InjuryId,
  ProfessionId,
  QualityId,
  QuirkId,
  SkillId,
  SkillTypeId,
  TalentId,
  TraitId,
  WeaponId
} from '@flames-of-freedom-1e/enums';
import {DataService, DataTypes} from '@ti/app/game/data.service';
import {
  Affliction,
  AlchemicalArt,
  Belief,
  Flaw,
  Injury,
  PermanentInjury, Quality,
  Quirk,
  Spell,
  Talent,
  Trait,
  Weapon
} from '@flames-of-freedom-1e/models';
import {Language} from '@powered-by-zweihander/models';
import {ATTRIBUTES} from '@flames-of-freedom-1e/attributes';
import {
  getAttributeBonus,
  getDamageThreshold,
  getDamageThresholds,
  getEncumbranceLimit,
  getInitiative,
  getMovement,
  getPerilThreshold,
  getPerilThresholds
} from '@ti/app/game/character.utils';
import {CustomizeWeaponDialogComponent} from '@ti/app/game/components/customize-weapon-dialog/customize-weapon-dialog.component';

interface AttributeView { id: AttributeId; name: string; value: number; bonus: number; }
interface SkillView { id: SkillId; name: string; type: SkillTypeId; attribute: AttributeId; value: number; tooltip: string; }

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnDestroy {
  readonly DataTypes = DataTypes;
  readonly SKILL_TYPE_SPECIAL = SkillTypeId.SPECIAL;
  readonly DEFAULT_WEAPONS = this.data[DataTypes.WEAPONS].filter(i => i.id === WeaponId.BARE_HANDED);
  readonly form: FormGroup = new FormGroup({
    damage: new FormControl(0),
    peril: new FormControl(0),
    conflict: new FormControl(0),
    belief_ranks: new FormControl(0),
    flaw_ranks: new FormControl(0),
    injuries: new FormControl([]),
    notes: new FormControl(''),
    weapons: new FormControl([]),
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
        this.languages = this.getLanguages(character);
        this.personality = this.getPersonality(character);
        this.quirks = this.getQuirks(character);
        this.skills = this.getSkills(character);
        this.spells = this.getSpells(character);
        this.talents = this.getTalents(character);
        this.traits = this.getTraits(character);
        const temporary = localStorage.getItem(character.id);
        if (temporary) {
          this.form.patchValue(JSON.parse(temporary), { onlySelf: false, emitEvent: true });
        }
      })
    );

  attributes: AttributeView[];
  description: string;
  languages: Language[];
  personality: [Belief, Flaw];
  quirks: (Quirk | Affliction | PermanentInjury)[];
  skills: SkillView[];
  spells: Spell[];
  talents: Talent[];
  traits: Trait[];

  readonly afflictions: Affliction[] = this.data[DataTypes.AFFLICTIONS];
  readonly injuries: Injury[] = this.data[DataTypes.INJURIES];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  @ViewChild('injuryInput') injuryInput: ElementRef<HTMLInputElement>;
  @HostListener('window:beforeunload') onBrowserClose(): void {
    this.ngOnDestroy();
  }

  constructor(
    private readonly dialog: DialogService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly firestore: FirestoreService,
    private readonly data: DataService,
    private readonly cd: ChangeDetectorRef
  ) {}

  ngOnDestroy(): void {
    const id: string = this.route.snapshot.params.id;
    const temporary = this.form.getRawValue();
    localStorage.setItem(id, JSON.stringify(temporary));
  }

  getAttributes(character: Character): AttributeView[] {
    const advancements: AttributeId[] = [
      ...character.advancements.basic.bonuses,
      ...character.advancements.intermediate.bonuses,
      ...character.advancements.advanced.bonuses
    ];

    return Object.entries(character.attributes).map(entry => {
      const id = +entry[0];
      const value = +entry[1];
      return {
        id,
        name: ATTRIBUTES.find(i => i.id === id).name,
        value,
        bonus: getBonusFromAttribute(value) + advancements.filter(i => i === id).length
      };
    });
  }

  getDescription(character: Character): string {
    const name = character.name;
    // const allegiances = this.data[DataTypes.ALLEGIANCES]
    //   .filter(i => character.allegiances.includes(i.id))
    //   .map(i => i.name)
    //   .join(', ');
    const allegiances = character.allegiances;
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
    const hair = `${hairLength?.name} ${hairStyle?.name} ${hairColor?.name}`;
    return `My name is ${name} and I pledge my allegiance to the ${allegiances}. I am a/an ${age?.name} ${culture?.name} ${sex?.name} and have made my life as a/an ${profession?.name}. I am of a/an ${stature?.name} stature, with a ${build?.name} build. I dress ${style?.name} and have ${eyes?.name} eyes, ${hair} hair and ${mark?.name}.`;
  }

  getLanguages(character: Character): Language[] {
    return this.data[DataTypes.LANGUAGES].filter(language => character.languages.includes(language.id));
  }

  getPersonality(character: Character): [Belief, Flaw] {
    return [
      this.data[DataTypes.BELIEFS].find(i => i.id === character.belief),
      this.data[DataTypes.FLAWS].find(i => i.id === character.flaw)
    ];
  }

  getQuirks(character: Character): (Quirk | Affliction | PermanentInjury)[] {
    const quirks: QuirkId[] = [
      ...character.advancements.basic.quirks,
      ...character.advancements.intermediate.quirks,
      ...character.advancements.advanced.quirks
    ];
    return [
      ...this.data[DataTypes.QUIRKS].filter(i => quirks.includes(i.id)),
      ...this.data[DataTypes.AFFLICTIONS].filter(i => character.afflictions.includes(i.id)),
      ...this.data[DataTypes.PERMANENT_INJURIES].filter(i => character.permanent_injuries.includes(i.id))
    ];
  }

  getSkills(character: Character): SkillView[] {
    const advancements: SkillId[] = [
      ...character.advancements.basic.skills,
      ...character.advancements.intermediate.skills,
      ...character.advancements.advanced.skills
    ];
    return this.data[DataTypes.SKILLS].map(skill => ({
      id: skill.id,
      name: skill.name,
      type: skill.type,
      attribute: skill.attribute,
      value: advancements.filter(i => i === skill.id).length * 10,
      tooltip: skill.labels?.tooltip
    }));
  }

  getSpells(character: Character): (AlchemicalArt | Spell)[] {
    return [
      ...this.data[DataTypes.SPELLS].filter(spell => character.spells.includes(spell.id)),
      ...this.data[DataTypes.ALCHEMICAL_ARTS].filter(spell => character.alchemical_arts.includes(spell.id)),
    ];
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

  getDamageThresholds(character: Character): string {
    return getDamageThresholds(getDamageThreshold(character));
  }

  getEncumbranceLimit(character: Character): string {
    return `${getEncumbranceLimit(character)}`;
  }

  getInitiative(character: Character): string {
    return `${getInitiative(character)}`;
  }

  getMovement(character: Character): string {
    return `${getMovement(character)}`;
  }

  getAllMovementsTooltip(character: Character): string {
    const agility: number = getAttributeBonus(character, AttributeId.AGILITY);
    const brawn: number = getAttributeBonus(character, AttributeId.BRAWN);
    return [
      `On foot (Athletics, AB+3): ${agility + 3}`,
      `Sneaking (Stealth, AB-1): ${Math.max(agility - 1, 1)}`,
      `Crawling (Toughness, BB-6): ${Math.max(brawn - 6, 1)}`,
      `Climbing up (Athletics, BB-6): ${Math.max(brawn - 6, 1)}`,
      `Riding a fast animal (Ride, AB+12): ${agility + 12}`,
      `Riding a slow animal (Ride, AB+6): ${agility + 6}`,
      `Swimming above water (Athletics, BB+0): ${brawn}`,
      `Swimming below water (Athletics, BB-6): ${Math.max(brawn - 6, 1)}`,
      `Climbing down (Athletics, BB+0): ${brawn}`,
      `Balancing (Coordination, AB+0): ${agility}`,
      `Rowing downriver (Athletics, BB+9): ${brawn + 9}`,
      `Rowing upriver (Athletics, BB+3): ${brawn + 3}`,
      `Driving a fast vehicle (Drive, BB+9): ${brawn + 9}`,
      `Driving a slow vehicle (Drive, BB+3): ${brawn + 3}`,
      `Flying (Awareness, AB+12): ${agility + 12}`,
    ].join('\n');
  }

  getInjuriesTooltip(): string {
    const ids: InjuryId[] = this.form.get('injuries').value ?? [];
    const injuries: Injury[] = this.data[DataTypes.INJURIES].filter(i => ids.includes(i.id));
    const effects: string[] = injuries.map(i => i.labels?.effect).filter(i => !!i).map(i => `• ${i}`);
    return effects.join('\n\n');
  }

  getPerilThresholds(character: Character): string {
    return getPerilThresholds(getPerilThreshold(character));
  }

  filterSkillsByAttribute(skills: SkillView[], id: AttributeId): SkillView[] {
    return skills.filter(skill => skill.attribute === id);
  }

  getWeapon(id: WeaponId): Weapon {
    return this.data[DataTypes.WEAPONS].find(i => i.id === id);
  }

  getAllQualities(weapon: Weapon, custom: QualityId[]): Quality[] {
    return this.data[DataTypes.QUALITIES].filter(i => {
      return [
        ...(weapon?.qualities ?? []),
        ...custom
      ].includes(i.id);
    });
  }

  onAddWeaponClick(): void {
    this.dialog
      .open(CustomizeWeaponDialogComponent)
      .afterClosed()
      .pipe(
        filter(i => !!i),
        tap(i => {
          const weapons: AbstractControl = this.form.get('weapons');
          weapons.setValue([
            ...weapons.value,
            { ...i, uid: getId() }
          ]);
          this.cd.detectChanges();
        }),
      )
      .subscribe();
  }

  onRemoveWeaponClick(uid: string): void {
    this.dialog
      .confirm({
        data: {
          title: 'Delete Weapon',
          description: `Are sure you want to delete this weapon?`,
          ok: 'Delete',
          cancel: 'Cancel'
        }
      })
      .afterClosed()
      .pipe(
        filter(i => !!i),
        tap(() => {
          const weapons: AbstractControl = this.form.get('weapons');
          weapons.setValue([...weapons.value.filter(i => i.uid !== uid)]);
          this.cd.detectChanges();
        })
      )
      .subscribe();
  }

  onQuantityChange(ev, uid: string): void {
    const value = +ev.target?.value ?? 1;
    const control = this.form.get('weapons');
    const weapons = control.value;
    const weapon = weapons.find(i => i.uid === uid);
    weapon.quantity = value;
  }

  trackById(_, item): number {
    return item.id;
  }
}
