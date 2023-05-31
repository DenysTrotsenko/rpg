import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, take } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
import {
  Campaign,
  CampaignService, CharacterId,
  DialogService,
  FirestoreService,
  getId16,
  setFormControlsEditable,
  UnsubscribeDirective
} from '@shared';
import { CharacterService } from '../../common/character.service';
import { Character } from '@imperium-maledictum-1e/models/character';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent extends UnsubscribeDirective implements OnInit {
  readonly form1: UntypedFormGroup = new UntypedFormGroup({
    campaign: new UntypedFormControl(null, [Validators.required]),
    name: new UntypedFormControl('', [Validators.required]),
  });
  readonly form2: UntypedFormGroup = new UntypedFormGroup({
    // attributes: new FormGroup({
    //   [ATTRIBUTE_ID_COMBAT]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
    // }),
  });
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    campaign: new UntypedFormControl(null, [Validators.required]),
    name: new UntypedFormControl('', [Validators.required]),
    // miscellaneous: new UntypedFormGroup({
    //   portrait: new UntypedFormControl(null),
    // }),
    // attributes: new FormGroup({
    //   [ATTRIBUTE_ID_COMBAT]: new FormControl(DEFAULT_ATTRIBUTE_PERCENTAGES, [Validators.required]),
    // }),
    // spells: new FormControl([]),
  });

  readonly character$: Observable<Character> = this.route.paramMap
    .pipe(
      map(params => params.get('id') as CharacterId),
      switchMap(id => this.character.get(id) as Observable<Character>),
      distinctUntilChanged((p: Character, q: Character) => JSON.stringify(p) === JSON.stringify(q)),
      tap(res => {
        const isNew = !res;
        this.form.patchValue({
          ...res,
          id: res?.id ?? getId16(),
        });

        setFormControlsEditable(this.form, [
          'archetype',
          'trait'
        ], isNew);
      }),
      shareReplay(1)
    );
  readonly campaigns$: Observable<Campaign[]> = this.campaign.all$;

  constructor(
    private readonly character: CharacterService,
    private readonly campaign: CampaignService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    // private readonly data: DataService,
    private readonly dialog: DialogService
  ) {
    super();
  }

  ngOnInit(): void {
    // this.subscriptions = this.character$.subscribe();
  }

  onSubmit(form): void {
    if (!this.form.valid) {
      return;
    }

    combineLatest([this.character$, this.campaigns$])
      .pipe(
        take(1),
        map(([character, campaigns]) => [character, campaigns.find(i => i.id === form.campaign)]),
        switchMap(([character, campaign]: [Character, Campaign]) => {
          const authors = !!character?.authors?.length
            ? character.authors
            : [this.route.snapshot.data?.user?.uid];
          const members = !!character?.members?.length
            ? character.members
            : [...new Set([this.route.snapshot.data?.user?.uid, ...authors])];
          const id = character.id || getId16();

          return this.character.update(form.id, { ...form, authors, members, id });
        }),
        tap(() => this.router.navigate(['characters/list']))
      )
      .subscribe();
  }

  trackById(_: number, item): unknown {
    return item.id;
  }
}
