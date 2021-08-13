import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AdminBaseComponent, AdminBaseConfig } from '../admin.models';
import { AdminService } from '../admin.service';
import { IMerit } from '@cod/app/data/data.models';
import { Observable } from 'rxjs';
import { DataService } from '@cod/app/data/data.service';

@Component({
  templateUrl: './merits.component.html',
  styleUrls: ['./merits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeritsComponent extends AdminBaseComponent<IMerit> {
  readonly form: FormGroup = new FormGroup({
    book: new FormControl(null, [Validators.required]),
    page: new FormControl(null, [Validators.required]),
    id: new FormControl(null),
    type: new FormControl(null, [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    maneuver: new FormControl(false),
    multiple: new FormControl(false),
    specialty: new FormControl(false),
    dots: new FormControl([], [Validators.required]),
    prerequisite: new FormControl(''),
    description: new FormControl(''),
    effect: new FormControl('', [Validators.required, Validators.minLength(1)]),
    drawback: new FormControl(''),
    maneuvers: new FormControl([]),
    ordered: new FormControl(true)
  });
  readonly maneuvers$ = this.data$
    .pipe(
      map((data: IMerit[]) => !!data ? data.filter(i => i.maneuver) : [])
    );

  constructor(public admin: AdminService, public data: DataService) {
    super({ filename: 'merits.json' } as AdminBaseConfig, admin, data);
  }

  getManeuverById$(id: number): Observable<IMerit> {
    return this.maneuvers$
      .pipe(
        map((data: IMerit[]) => data.find(i => i.id === id))
      );
  }

  onAddManeuver(id: number): void {
    const maneuvers: number[] = this.form.get('maneuvers').value;
    this.form.get('maneuvers').setValue(!!maneuvers ? [ ...maneuvers, id] : [id]);
  }

  onRemoveManeuver(id: number): void {
    const maneuvers: number[] = this.form.get('maneuvers').value;
    this.form.get('maneuvers').setValue(maneuvers.filter(i => i !== id));
  }
}
