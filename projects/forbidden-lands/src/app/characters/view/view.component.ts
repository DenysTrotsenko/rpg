import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, take } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { AuthService, DialogService, FirestoreService, getId16 } from '@std';
import { CharacterService } from '../../character.service';
import { ImperiumMaledictumCharacter as Character } from '@imperium-maledictum-1e/models/character';
import { AdvancementDialogComponent } from '@im-common';

@Component({
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ViewComponent implements OnDestroy {
  private readonly auth = inject(AuthService);
  private readonly dialog = inject(DialogService);
  expand = false;
  // readonly form: FormGroup = new FormGroup({
  //   notes: new FormControl(''),
  //   damage: new FormControl(0),
  //   wounds: new FormControl([]),
  //   weapons: new FormControl([]),
  // });

  readonly character$: Observable<Character> = this.route.paramMap
    .pipe(
      map(res => res.get('id')),
      switchMap(id => this.firestore.doc(`characters/${id}`) as Observable<Character>),
      distinctUntilChanged((p: Character, q: Character) => JSON.stringify(p) === JSON.stringify(q)),
      shareReplay(1),
      tap(character => {
        // console.log(character);
        // const temporary = localStorage.getItem(character.id);
        // if (temporary) {
        //   this.form.patchValue(JSON.parse(temporary), { onlySelf: false, emitEvent: true });
        // }
      })
    );
  readonly canAdvance$: Observable<boolean> = combineLatest([this.auth.uid$, this.character$]).pipe(
    map(([uid, character]) => character.author === uid)
  );

  // @HostListener('window:beforeunload') onBrowserClose(): void {
  //   this.ngOnDestroy();
  // }

  constructor(
    private readonly character: CharacterService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly firestore: FirestoreService,
    // private readonly data: DataService,
    // private readonly cd: ChangeDetectorRef
  ) {
  }

  ngOnDestroy(): void {
    // const id: string = this.route.snapshot.params.id;
    // const temporary = this.form.getRawValue();
    // localStorage.setItem(id, JSON.stringify(temporary));
  }

  onAdvanceClick(id: string): void {
    this.character.all$
      .pipe(
        take(1),
        map(characters => characters.find(c => c.id === id)),
        switchMap(character => this.dialog.open(AdvancementDialogComponent, {
          data: character,
          width: '600px'
        }).afterClosed()),
        filter(character => !!character),
        switchMap(character => this.character.update(character.id, character))
      )
      .subscribe();
  }
  // onAddWeaponClick(): void {
  //   this.dialog
  //     .open(CustomizeWeaponDialogComponent)
  //     .afterClosed()
  //     .pipe(
  //       filter(i => !!i),
  //       tap(i => {
  //         const weapons: AbstractControl = this.form.get('weapons');
  //         weapons.setValue([
  //           ...weapons.value,
  //           { ...i, uid: getId() }
  //         ]);
  //         this.cd.detectChanges();
  //       }),
  //     )
  //     .subscribe();
  // }
  //
  // onRemoveWeaponClick(uid: string): void {
  //   this.dialog
  //     .confirm({
  //       data: {
  //         title: 'Delete Weapon',
  //         description: `Are sure you want to delete this weapon?`,
  //         ok: 'Delete',
  //         cancel: 'Cancel'
  //       }
  //     })
  //     .afterClosed()
  //     .pipe(
  //       filter(i => !!i),
  //       tap(() => {
  //         const weapons: AbstractControl = this.form.get('weapons');
  //         weapons.setValue([...weapons.value.filter(i => i.uid !== uid)]);
  //         this.cd.detectChanges();
  //       })
  //     )
  //     .subscribe();
  // }
  //
  // onQuantityChange(ev, uid: string, ref: HTMLInputElement): void {
  //   const numerical = +ev.target?.value || 0;
  //   const value = numerical <= 0 ? 1 : numerical;
  //   const control = this.form.get('weapons');
  //   const weapons = control.value;
  //   const weapon = weapons.find(i => i.uid === uid);
  //   weapon.quantity = value;
  //   ref.value = `${value}`;
  //   // control.setValue(weapons);
  // }
  //
  trackById(_, item): string {
    return item.id;
  }
}
