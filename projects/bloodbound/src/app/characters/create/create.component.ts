import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {ScionService} from '@bloodbound/app/scion/scion.service';
import {APPROACH_ID} from '@bloodbound/app/scion/scion.enums';
import {SKILLS} from '@bloodbound/app/scion/data/skills';
import {ATTRIBUTES} from '@bloodbound/app/scion/data/attributes';
import {CALLINGS} from '@bloodbound/app/scion/data/callings';

const ATTRIBUTE_MIN = 1;
const APPROACH_BONUS = 2;
const CALLING_MIN = 0;
const SKILL_MIN = 0;

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit, OnDestroy {
  readonly step1 = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    concept: new FormControl(null, [Validators.required]),
    pantheon: new FormControl(null, [Validators.required]),
    deeds: new FormGroup({
      short: new FormControl(null),
      long: new FormControl(null),
      band: new FormControl(null)
    })
    // bloodline: new FormControl(null, [Validators.required])
  });
  readonly step2 = new FormGroup({
    paths: new FormGroup({
      origin: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
      pantheon: new FormControl(null, [Validators.required])
    })
  });
  readonly step3 = new FormGroup({
    skills: new FormGroup(SKILLS.reduce((acc, cur) => {
      acc[cur.id] = new FormGroup({
        value: new FormControl(SKILL_MIN, [Validators.required, Validators.min(0), Validators.max(5)]),
        specialty: new FormControl(null)
      });
      return acc;
    }, {}))
  });
  readonly step4 = new FormGroup({
    approach: new FormControl(APPROACH_ID.FORCE, [Validators.required]),
    attributes: new FormGroup(ATTRIBUTES.reduce((acc, cur) => {
      acc[cur.id] = new FormControl(ATTRIBUTE_MIN, [Validators.required, Validators.min(1), Validators.max(5)]);
      return acc;
    }, {}))
  });
  readonly step5 = new FormGroup({
    callings: new FormGroup(CALLINGS.reduce((acc, cur) => {
      acc[cur.id] = new FormControl(CALLING_MIN, [Validators.min(0), Validators.max(5)]);
      return acc;
    }, {})),
    knacks: new FormArray([])
  });
  readonly step6 = new FormGroup({

  });
  readonly approaches$ = this.scion.approaches$;
  readonly paths$ = this.scion.paths$;
  readonly unsubscribe$: Subject<void> = new Subject();

  constructor(private scion: ScionService) { }

  ngOnInit(): void {
    this.step4.get('approach').valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(approach => {
          this.step4.get('attributes').patchValue(ATTRIBUTES.reduce((acc, cur) => {
            acc[cur.id] = cur.approach === approach
              ? ATTRIBUTE_MIN + APPROACH_BONUS
              : ATTRIBUTE_MIN;
            return acc;
          }, {}));
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
