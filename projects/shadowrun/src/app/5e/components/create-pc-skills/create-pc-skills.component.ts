import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {UnsubscribeDirective} from '@shared';
import {Awakening, AwakeningId, Metatype, MetatypeId} from '@shadowrun/app/5e/5e.models';
import {FifthEditionService} from '@shadowrun/app/5e/5e.service';
import {ATTRIBUTE_ID} from '@shadowrun/app/5e/5e.enums';

const SKILL_MIN = 0;
const SKILL_MAX = 6;

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-skills',
  templateUrl: './create-pc-skills.component.html',
  styleUrls: ['./create-pc-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcSkillsComponent),
      multi: true
    }
  ]
})
export class CreatePcSkillsComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set awakening(value: AwakeningId) { this.awakening$.next(value); }
  @Input() set metatype(value: MetatypeId) { this.metatype$.next(value); }
  readonly form: FormArray = new FormArray([]);
  private readonly awakening$: BehaviorSubject<AwakeningId> = new BehaviorSubject(null);
  private readonly metatype$: BehaviorSubject<MetatypeId> = new BehaviorSubject(null);
  private readonly skills$ = combineLatest([
    this.awakening$.asObservable(), this.metatype$.asObservable()
  ]).pipe(
    map(res => {
      this.setSkills(res[0], res[1]);
    })
  );
  propagateChange = (_: any) => {};

  constructor(public data: FifthEditionService) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.skills$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(res => this.propagateChange(res));
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}

  private setSkills(awakeningId: AwakeningId, metatypeId: MetatypeId): void {
    this.form.clear();

    const awakening: Awakening = this.data.awakenings.find(i => i.id === awakeningId);
    const metatype: Metatype = this.data.metatypes.find(i => i.id === metatypeId);

    this.data.skills
      .filter(skill => { // Filter out Magic/Resonance skills
        if (skill.attribute === ATTRIBUTE_ID.MAGIC) {
          return awakening.attributes[ATTRIBUTE_ID.MAGIC][0] > 0;
        } else if (skill.attribute === ATTRIBUTE_ID.RESONANCE) {
          return awakening.attributes[ATTRIBUTE_ID.RESONANCE][0] > 0;
        } else {
          return true;
        }
      })
      .forEach(skill => {
        this.form.push(new FormGroup({
          id: new FormControl(skill.id),
          min: new FormControl(SKILL_MIN),
          max: new FormControl(SKILL_MAX),
          rating: new FormControl(SKILL_MIN, [Validators.required, Validators.min(SKILL_MIN), Validators.max(SKILL_MAX)]),
        }));
      });
  }
}
