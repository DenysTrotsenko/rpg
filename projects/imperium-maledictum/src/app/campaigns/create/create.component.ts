import { Component, ChangeDetectionStrategy, inject, OnInit, OnDestroy } from '@angular/core';
import { FormControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, take } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, switchMap, takeUntil, tap } from 'rxjs/operators';
import {
  Campaign,
  CampaignId,
  CampaignService, Character, CharacterId,
  FirestoreService, FS_COLLECTION,
  getId16,
  Setting, SettingId,
  SettingService, User,
  UserId, UserService
} from '@std';
import { CharacterService } from '../../character.service';

@Component({
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CreateComponent implements OnInit, OnDestroy {
  readonly campaign = inject(CampaignService);
  readonly character = inject(CharacterService);
  readonly setting = inject(SettingService);
  readonly firestore = inject(FirestoreService);
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly user = inject(UserService);

  readonly form: UntypedFormGroup = new UntypedFormGroup({
    name: new FormControl<string>('', [Validators.required]),
    setting: new UntypedFormControl(null, [Validators.required]),
    modules: new FormControl<SettingId[]>([]),
    members: new FormControl<UserId[]>([]),
    characters: new FormControl<CharacterId[]>([]),
  });

  readonly destroy$: Subject<void> = new Subject();
  readonly characters$: Observable<Character[]> = this.character.all$;
  readonly settings$: Observable<Setting[]> = this.setting.all$;
  readonly users$: Observable<User[]> = this.user.all$;
  readonly campaign$: Observable<Campaign> = this.route.paramMap.pipe(
    map(params => params.get('id') as CampaignId),
    switchMap(id => this.campaign.get(id)),
    distinctUntilChanged((p: Campaign, q: Campaign) => JSON.stringify(p) === JSON.stringify(q)),
    shareReplay(1)
  );

  ngOnInit(): void {
    this.campaign$
      .pipe(
        takeUntil(this.destroy$),
        tap(campaign => this.form.patchValue(campaign))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(form): void {
    if (!this.form.valid) { return; }

    this.campaign$
      .pipe(
        take(1),
        switchMap((campaign: Campaign) => {
          const id: CampaignId = campaign?.id ?? getId16();
          const authors: UserId[] = !!campaign?.authors?.length
            ? [...campaign.authors]
            : [this.route.snapshot.data?.user?.uid];

          return this.firestore.update(`${FS_COLLECTION.CAMPAIGNS}/${id}`, {
            ...form, authors, id
          });
        }),
        tap(() => this.router.navigate(['campaigns/list']))
      )
      .subscribe();
  }

  trackById(_, item): number {
    return item.id;
  }
}
