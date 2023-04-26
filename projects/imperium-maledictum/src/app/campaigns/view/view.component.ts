import { Component, ChangeDetectionStrategy, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { FirestoreService } from '@shared';
import { Campaign } from '@grim-and-perilous/models/campaign';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnDestroy {
  readonly form: FormGroup = new FormGroup({
    notes: new FormControl(''),
  });
  readonly campaign$: Observable<Campaign> = this.route.paramMap
    .pipe(
      map(res => res.get('id')),
      switchMap(id => this.firestore.doc(`campaigns/${id}`) as Observable<Campaign>),
      distinctUntilChanged((p: Campaign, q: Campaign) => JSON.stringify(p) === JSON.stringify(q)),
      shareReplay(1),
      tap(campaign => {
        const temporary = localStorage.getItem(campaign.id);
        if (temporary) {
          this.form.patchValue(JSON.parse(temporary), { onlySelf: false, emitEvent: true });
        }
      })
    );

  @HostListener('window:beforeunload') onBrowserClose(): void {
    this.ngOnDestroy();
  }

  constructor(
    private readonly firestore: FirestoreService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnDestroy(): void {
    const id: string = this.route.snapshot.params.id;
    const temporary = this.form.getRawValue();
    localStorage.setItem(id, JSON.stringify(temporary));
  }
}
