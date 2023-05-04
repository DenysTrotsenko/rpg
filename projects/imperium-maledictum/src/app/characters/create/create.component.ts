import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
import { DialogService, FirestoreService, getId16, setFormControlsEditable, UnsubscribeDirective } from '@shared';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent extends UnsubscribeDirective implements OnInit {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    campaign: new FormControl(null, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    full_name: new FormControl('', [Validators.required]),
    miscellaneous: new FormGroup({
      portrait: new FormControl(null),
      biography: new FormControl(''),
      hair_length: new FormControl(null),
      hair_style: new FormControl(null),
      hair_color: new FormControl(null),
      mark: new FormControl(null),
    }),
    // attributes: new FormGroup({
    //   [ATTRIBUTE_ID_COMBAT]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
    //   [ATTRIBUTE_ID_BRAWN]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
    //   [ATTRIBUTE_ID_AGILITY]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
    //   [ATTRIBUTE_ID_PERCEPTION]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
    //   [ATTRIBUTE_ID_INTELLIGENCE]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
    //   [ATTRIBUTE_ID_WILLPOWER]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
    //   [ATTRIBUTE_ID_FELLOWSHIP]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required])
    // }),
    // archetype: new FormControl(this.data[DataTypes.ARCHETYPES][0].id, [Validators.required]),
    // trait: new FormControl(null, [Validators.required]),
    // tier: new FormControl(this.data[DataTypes.TIERS][0].id, [Validators.required]),
    // professions: new FormGroup({
    //   basic: new FormControl(null, [Validators.required]),
    //   intermediate: new FormControl(null),
    //   advanced: new FormControl(null),
    // }),
    // spells: new FormControl([]),
    // alchemical_arts: new FormControl([]),
    // afflictions: new FormControl([]),
    // permanent_injuries: new FormControl([]),
    // permanent_belief_ranks: new FormControl(0),
    // permanent_flaw_ranks: new FormControl(0),
    // advancements: new FormGroup({
    //   basic: new FormGroup({
    //     traits: new FormControl([]),
    //     quirks: new FormControl([]),
    //     bonuses: new FormControl([]),
    //     skills: new FormControl([]),
    //     talents: new FormControl([]),
    //   }),
    //   intermediate: new FormGroup({
    //     traits: new FormControl([]),
    //     quirks: new FormControl([]),
    //     bonuses: new FormControl([]),
    //     skills: new FormControl([]),
    //     talents: new FormControl([]),
    //   }),
    //   advanced: new FormGroup({
    //     traits: new FormControl([]),
    //     quirks: new FormControl([]),
    //     bonuses: new FormControl([]),
    //     skills: new FormControl([]),
    //     talents: new FormControl([]),
    //   }),
    // }),
    // schemas: new FormGroup({
    //   basic: new FormGroup({
    //     traits: new FormControl([]),
    //     quirks: new FormControl([]),
    //     bonuses: new FormControl([]),
    //     skills: new FormControl([]),
    //     talents: new FormControl([]),
    //   }),
    //   intermediate: new FormGroup({
    //     traits: new FormControl([]),
    //     quirks: new FormControl([]),
    //     bonuses: new FormControl([]),
    //     skills: new FormControl([]),
    //     talents: new FormControl([]),
    //   }),
    //   advanced: new FormGroup({
    //     traits: new FormControl([]),
    //     quirks: new FormControl([]),
    //     bonuses: new FormControl([]),
    //     skills: new FormControl([]),
    //     talents: new FormControl([]),
    //   }),
    // }),
  });
  // readonly traits$: Observable<Trait[]> = this.archetype$.pipe(
  //   tap(() => this.form.get('trait').setValue(null)),
  //   map((id: ArchetypeId) => {
  //     const archetype: Archetype = this.ARCHETYPES.find(i => i.id === id);
  //     return this.data[DataTypes.TRAITS].filter(i => archetype.traits.includes(i.id));
  //   }),
  //   shareReplay(1)
  // );
  // readonly basicProfessions$: Observable<Profession[]> = this.archetype$.pipe(
  //   map((id: ArchetypeId) => {
  //     const archetype: Archetype = this.ARCHETYPES.find(i => i.id === id);
  //     return this.PROFESSIONS.filter(i => archetype.professions.includes(i.id));
  //   }),
  //   shareReplay(1)
  // );

  // readonly character$: Observable<Character> = this.route.paramMap
  //   .pipe(
  //     map(params => params.get('id')),
  //     switchMap(id => this.firestore.doc(`characters/${id}`) as Observable<Character>),
  //     distinctUntilChanged((p: Character, q: Character) => JSON.stringify(p) === JSON.stringify(q)),
  //     tap(res => {
  //       const isNew = !res;
  //       this.form.patchValue({
  //         ...res,
  //         id: res?.id ?? getId(),
  //       });
  //
  //       setFormControlsEditable(this.form, [
  //         'archetype',
  //         'trait'
  //       ], isNew);
  //     }),
  //     shareReplay(1)
  //   );
  // readonly campaigns$: Observable<Campaign[]> = this.data.campaignsAll$;

  constructor(
    // private readonly route: ActivatedRoute,
    // private readonly router: Router,
    // private readonly data: DataService,
    // private readonly firestore: FirestoreService,
    // private readonly dialog: DialogService
  ) {
    super();
  }

  ngOnInit(): void {
    // this.subscriptions = this.character$.subscribe();
  }

  // getAttributeBonus(id: AttributeId): number {
  //   return this.getBonusFromAdvances(id) + this.getBonusFromAttribute(id);
  // }
  //
  // getBonusFromAttribute(id: AttributeId): number {
  //   const attribute: number = this.form.get('attributes').get(`${id}`).value;
  //   return getBonusFromAttribute(attribute);
  // }
  //
  // getBonusFromAdvances(id: AttributeId): number {
  //   const advancements = this.form.get('advancements').value;
  //   const basic: number = advancements.basic?.bonuses.filter(i => i === id).length;
  //   const intermediate: number = advancements.intermediate?.bonuses.filter(i => i === id).length;
  //   const advanced: number = advancements.advanced?.bonuses.filter(i => i === id).length;
  //   return basic + intermediate + advanced;
  // }
  //
  // isProfessionHidden(id: ProfessionId, tier: string): boolean {
  //   const basic: ProfessionId = this.form.get('professions.basic').value;
  //   const intermediate: ProfessionId = this.form.get('professions.intermediate').value;
  //   const advanced: ProfessionId = this.form.get('professions.advanced').value;
  //   return [...(tier === 'basic' ? this.getNonArchetypeProfessions() : []), basic, intermediate, advanced].includes(id);
  // }
  //
  // getNonArchetypeProfessions(): ProfessionId[] {
  //   const archetypeId: ArchetypeId = this.form.get('archetype').value;
  //   const archetype: Archetype = this.data.getArchetype(archetypeId);
  //   return this.data[DataTypes.PROFESSIONS]
  //     .filter(i => !archetype?.professions.includes(i.id))
  //     .map(i => i.id);
  // }
  //
  // isTraitHidden(id: TraitId): boolean {
  //   const archetypeId: ArchetypeId = this.form.get('archetype').value;
  //   const archetype = this.data.getArchetype(archetypeId);
  //   return !archetype.traits.includes(id);
  // }
  //
  // isAdvancesAvailable(control: string): Profession | null {
  //   const id: ProfessionId = this.form.get(control).value;
  //   return this.data.getProfession(id);
  // }
  //
  // isMagicalProfession(id: ProfessionId): boolean {
  //   const mageIds: ProfessionId[] = this.data.getArchetype(ARCHETYPE_ID_MAGE).professions;
  //   return mageIds.includes(id);
  // }
  //
  // onProfessionChange(id: ProfessionId, tier: string): void {
  //   const profession: Profession = this.data.getProfession(id);
  //   this.form.get(`schemas.${tier}`).patchValue({
  //     traits: [...profession.traits],
  //     quirks: [...profession.quirks],
  //     bonuses: [...profession.advancements.bonuses],
  //     skills: [...profession.advancements.skills],
  //     talents: [...profession.advancements.talents]
  //   });
  //   this.form.get(`advancements.${tier}`).patchValue({
  //     traits: [...profession.traits],
  //     quirks: [...profession.quirks],
  //     bonuses: [],
  //     skills: [...(tier === 'basic' ? profession.advancements.skills : [])],
  //     talents: []
  //   });
  // }
  //
  // onEditSchemeClick(tier: string): void {
  //   this.dialog
  //     .open(CustomizeAdvancementSchemeComponent, {
  //       data: this.form.get(`schemas.${tier}`).value,
  //       width: '600px',
  //       height: '600px'
  //     })
  //     .afterClosed()
  //     .pipe(
  //       filter(schema => !!schema),
  //       tap(schema => {
  //         const advancements = this.form.get(`advancements.${tier}`).value;
  //         const skills = advancements.skills.filter(i => schema.skills.includes(i));
  //         const talents = advancements.talents.filter(i => schema.talents.includes(i));
  //         this.form.get(`schemas.${tier}`).patchValue(schema);
  //         this.form.get(`advancements.${tier}`).patchValue({
  //           skills: [...skills],
  //           talents: [...talents]
  //         });
  //       })
  //     )
  //     .subscribe();
  // }
  //
  // onSubmit(form): void {
  //   if (!this.form.valid) {
  //     return;
  //   }
  //
  //   combineLatest([this.character$, this.campaigns$])
  //     .pipe(
  //       map(([character, campaigns]) => [character, campaigns.find(i => i.id === form.campaign)]),
  //       switchMap(([character, campaign]: [Character, Campaign]) => {
  //         return this.firestore.update(`characters/${form.id}`, {
  //           ...form,
  //           author: !!character?.author
  //             ? character.author
  //             : this.route.snapshot.data?.user?.uid,
  //           members: !!character?.members
  //             ? [...character.members]
  //             : [...new Set([this.route.snapshot.data?.user?.uid, campaign.author])],
  //         });
  //       }),
  //       tap(() => this.router.navigate(['characters/list']))
  //     )
  //     .subscribe();
  // }
  //
  // trackById(_: number, item): unknown {
  //   return item.id;
  // }
}
