import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import {
  CampaignId,
  CampaignService, Character,
  CharacterId,
  DialogService,
  getId16,
  setFormControlsEditable
} from '@shared';
import { CharacterService } from '../../common/character.service';
import { DataService } from '@im-common';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent {
  readonly form1: FormGroup = new FormGroup({
    campaign: new FormControl<CampaignId>(null, [Validators.required]),
    name: new FormControl<string>(null, [Validators.required]),
  });
  readonly form2: FormGroup = new FormGroup({
  });

  readonly campaigns$ = this.campaign.all$;
  readonly character$: Observable<Character> = this.route.paramMap
    .pipe(
      map(params => params.get('id') as CharacterId),
      switchMap(id => this.character.get(id) as Observable<Character>),
      distinctUntilChanged((p: Character, q: Character) => JSON.stringify(p) === JSON.stringify(q)),
      tap(res => {
        // const isNew = !res;
        // this.form.patchValue({
        //   ...res,
        //   id: res?.id ?? getId16()
        // });

        // setFormControlsEditable(this.form, ['archetype', 'trait'], isNew);
      }),
      shareReplay(1)
    );

  constructor(
    private readonly character: CharacterService,
    private readonly campaign: CampaignService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly data: DataService,
    private readonly dialog: DialogService
  ) {}

  onSubmit(): void {
    const isValid = this.form1.valid && this.form2.valid;

    if (!isValid) { return; }

    this.character$
      .pipe(
        take(1),
        switchMap(res => {
          const author = res?.author ?? this.route.snapshot.data?.user?.uid;
          const id = res?.id || getId16();
          console.log(author, id);

          const character: Character = {
            id,
            author,
            ...this.form1.value,
            ...this.form2.value
          };

          return this.character.update(id, character);
        }),
        tap(() => this.router.navigate(['characters/list']))
      )
      .subscribe();
  }

  trackById(_: number, item): unknown {
    return item.id;
  }
}
