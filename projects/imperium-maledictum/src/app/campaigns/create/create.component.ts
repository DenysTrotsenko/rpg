import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { Campaign, CampaignId, CampaignService, FirestoreService, getId16, Setting, SettingService } from '@shared';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    setting: new UntypedFormControl(null, [Validators.required]),
  });

  readonly campaigns$: Observable<Campaign[]> = this.campaign.all$;
  readonly settings$: Observable<Setting[]> = this.setting.all$;
  readonly campaign$: Observable<Campaign> = this.route.paramMap.pipe(
    map(params => params.get('id') as CampaignId),
    switchMap(id => this.campaign.get(id)),
    distinctUntilChanged((p: Campaign, q: Campaign) => JSON.stringify(p) === JSON.stringify(q)),
    shareReplay(1)
  );

  constructor(
    private readonly campaign: CampaignService,
    private readonly setting: SettingService,
    private readonly firestore: FirestoreService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  onSubmit(form): void {
    if (!this.form.valid) {
      return;
    }

    this.campaign$
      .pipe(
        take(1),
        switchMap((campaign: Campaign) => {
          const authors = !!campaign?.authors?.length
            ? campaign.authors
            : [this.route.snapshot.data?.user?.uid];
          const members = !!campaign?.members?.length
              ? campaign.members
              : [...new Set([this.route.snapshot.data?.user?.uid, ...authors])];
          const id = campaign?.id || getId16();

          return this.firestore.update(`campaigns/${id}`, {
            ...form, authors, members, id
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
