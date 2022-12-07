import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { FirestoreService, getId } from '@shared';
import { combineLatest, Observable } from 'rxjs';
import { Campaign } from '@grim-and-perilous/models/campaign';
import { DataService } from '@ti/app/game/data.service';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(getId()),
    name: new FormControl('', [Validators.required]),
  });

  readonly campaigns$: Observable<Campaign[]> = this.data.campaignsAll$;
  readonly campaign$: Observable<Campaign> = this.route.paramMap
    .pipe(
      map(params => params.get('id')),
      switchMap(id => this.firestore.doc(`campaigns/${id}`) as Observable<Campaign>),
      distinctUntilChanged((p: Campaign, q: Campaign) => JSON.stringify(p) === JSON.stringify(q)),
      tap(res => {
        this.form.patchValue({
          ...res,
          id: res?.id ?? getId(),
        });
      }),
      shareReplay(1)
    );

  constructor(
    private readonly data: DataService,
    private readonly firestore: FirestoreService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  onSubmit(form): void {
    if (!this.form.valid) {
      return;
    }

    combineLatest([this.campaign$])
      .pipe(
        switchMap(([campaign]: [Campaign]) => {
          return this.firestore.update(`campaigns/${form.id}`, {
            ...form,
            author: !!campaign?.author
              ? campaign.author
              : this.route.snapshot.data?.user?.uid,
            members: !!campaign?.members
              ? [...campaign.members]
              : [...new Set([this.route.snapshot.data?.user?.uid, campaign.author])],
          });
        }),
        tap(() => this.router.navigate(['campaigns/list']))
      )
      .subscribe();
  }

}
