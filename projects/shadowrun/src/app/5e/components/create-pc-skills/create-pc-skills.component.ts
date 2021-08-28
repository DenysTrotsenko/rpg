import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {UnsubscribeDirective} from '@shared';
import {
  Awakening, Metatype, ATTRIBUTE_ID, AWAKENING_ID, METATYPE_ID, AWAKENINGS, METATYPES, ACTIVE_SKILLS, Skill
} from '@shadowrun/app/5e';

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
  @Input() set awakening(value: AWAKENING_ID) { this.awakening$.next(value); }
  @Input() set metatype(value: METATYPE_ID) { this.metatype$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly skills: Skill[] = ACTIVE_SKILLS;
  private readonly awakening$: BehaviorSubject<AWAKENING_ID> = new BehaviorSubject(null);
  private readonly metatype$: BehaviorSubject<METATYPE_ID> = new BehaviorSubject(null);
  private readonly skills$ = combineLatest([
    this.awakening$.asObservable(), this.metatype$.asObservable()
  ]).pipe(
    map(res => {
      this.setSkills(res[0], res[1]);
    })
  );
  propagateChange = (_: any) => {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.skills$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(res => this.propagateChange(res));
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}

  private setSkills(awakeningId: AWAKENING_ID, metatypeId: METATYPE_ID): void {
    this.form.clear();

    const awakening: Awakening = AWAKENINGS.find(i => i.id === awakeningId);
    const metatype: Metatype = METATYPES.find(i => i.id === metatypeId);

    ACTIVE_SKILLS
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
