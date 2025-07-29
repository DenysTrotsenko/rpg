import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Difficulty,
  DifficultyId, Duration,
  DurationId,
  PsychicDiscipline, PsychicDisciplineId,
  PsychicPower, PsychicPowerId, Range,
  RangeId, Target, TargetId
} from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@std';
import { Observable } from 'rxjs';
import { DataService } from '@im-common';


@Component({
    templateUrl: './psychic-powers.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PsychicPowersComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl<PsychicPowerId>(null),
    name: new FormControl<string>('', [Validators.required]),
    overt: new FormControl<boolean>(null),
    discipline: new FormControl<PsychicDisciplineId>(null, [Validators.required]),
    cost: new FormControl<number>(1, [Validators.required]),
    difficulty: new FormControl<DifficultyId>(null, [Validators.required]),
    range: new FormControl<RangeId>(null, [Validators.required]),
    target: new FormControl<TargetId[]>([], [Validators.required]),
    duration: new FormControl<DurationId>(null, [Validators.required]),
    labels: new FormGroup({
      description: new FormControl<string>('', [Validators.required]),
    }),
  });

  readonly disciplines$: Observable<PsychicDiscipline[]> = this.data.psychicDisciplines$;
  readonly difficulties$: Observable<Difficulty[]> = this.data.difficulties$;
  readonly durations$: Observable<Duration[]> = this.data.durations$;
  readonly ranges$: Observable<Range[]> = this.data.ranges$;
  readonly targets$: Observable<Target[]> = this.data.targets$;

  constructor(
    @Inject(MAT_DIALOG_DATA) public power: PsychicPower,
    private readonly data: DataService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.power ? this.power : { id: getId16() });
  }

  trackById(_, i): string { return i.id; }
}
