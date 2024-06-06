import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take, combineLatest } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import {
  CampaignService, Character,
  CharacterId,
  DialogService,
  getId16,
  setFormControlsEditable
} from '@std';
import { CharacterService } from '../../character.service';
import { DataService } from '@im-common';
import { Characteristic, Faction, FactionId, Origin, OriginId, RoleId } from '@imperium-maledictum-1e/models/common';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent {
  readonly step1: FormGroup = new FormGroup({
    characteristics: new UntypedFormArray([]),
  });
  readonly step2: FormGroup = new FormGroup({
    origin: new FormControl<OriginId>(null, [Validators.required]),
  });
  readonly step3: FormGroup = new FormGroup({
    faction: new FormControl<FactionId>(null, [Validators.required]),
  });
  readonly step4: FormGroup = new FormGroup({
    role: new FormControl<RoleId>(null, [Validators.required]),
  });
  readonly form10: FormGroup = new FormGroup({
    name: new FormControl<string>(null, [Validators.required]),
  });

  readonly character$: Observable<Character> = this.route.paramMap
    .pipe(
      map(params => params.get('id') as CharacterId),
      switchMap(id => this.character.get(id) as Observable<Character>),
      distinctUntilChanged((p: Character, q: Character) => JSON.stringify(p) === JSON.stringify(q)),
      tap(res => {
        // const isNew = !res;
        // this.form.patchValue({
        //   ...res,
        // });
        // setFormControlsEditable(this.form, ['archetype', 'trait'], isNew);
      }),
      shareReplay(1)
    );
  readonly characteristics$: Observable<Characteristic[]> = this.data.characteristics$.pipe(
    map(characteristics => characteristics?.sort((a, b) => a?.order - b?.order)),
    tap(characteristics => {
      const group = this.step1.get('characteristics') as UntypedFormArray;
      characteristics.forEach(i => group.push(new UntypedFormGroup({
        id: new UntypedFormControl(i.id),
        value: new UntypedFormControl(20, [Validators.required, Validators.min(20), Validators.max(50)]),
        advances: new UntypedFormControl(0)
      })));
    }),
    shareReplay(1)
  );
  readonly origins$: Observable<Origin[]> = this.data.origins$;
  readonly factions$: Observable<Faction[]> = this.data.factions$;
  readonly roles$: Observable<Faction[]> = this.data.roles$;

  constructor(
    private readonly character: CharacterService,
    private readonly campaign: CampaignService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly data: DataService,
    private readonly dialog: DialogService
  ) {}

  onSubmit(): void {
    const isValid = this.step1.valid && this.form10.valid;

    if (!isValid) { return; }
    console.log(this.step1.value);
    console.log(this.step2.value);
    console.log(this.step3.value);
    console.log(this.form10.value);
    // combineLatest([
    //   this.character$,
    //   this.campaign.selected$
    // ])
    //   .pipe(
    //     take(1),
    //     switchMap(([character, campaign]) => {
    //       const id = character?.id || getId16();
    //
    //       return this.character.update(id, {
    //         id,
    //         author: character?.author ?? this.route.snapshot.data?.user?.uid,
    //         campaign: character?.campaign ?? campaign.id,
    //         ...this.form1.value,
    //         ...this.form2.value
    //       });
    //     }),
    //     tap(() => this.router.navigate(['characters/list']))
    //   )
    //   .subscribe();
  }

  trackById(_: number, item): unknown {
    return item.id;
  }
}
