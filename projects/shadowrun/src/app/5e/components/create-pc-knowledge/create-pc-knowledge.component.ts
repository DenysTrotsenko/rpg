import {Component, OnInit, ChangeDetectionStrategy, Input, forwardRef} from '@angular/core';
import {UnsubscribeDirective} from '@shared';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Awakening, AwakeningId, Metatype, MetatypeId, QualityId} from '@shadowrun/app/5e/5e.models';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {FifthEditionService} from '@shadowrun/app/5e/5e.service';
import {SKILL_CATEGORY_ID} from '@shadowrun/app/5e/5e.enums';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-knowledge',
  templateUrl: './create-pc-knowledge.component.html',
  styleUrls: ['./create-pc-knowledge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcKnowledgeComponent),
      multi: true
    }
  ]
})
export class CreatePcKnowledgeComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set qualities(value: QualityId) { this.qualities$.next(value); }
  readonly form: FormArray = new FormArray([
    new FormGroup({
      id: new FormControl(`knowledge:${Date.now()}`),
      name: new FormControl('', [Validators.required]),
      category: new FormControl(SKILL_CATEGORY_ID.LANGUAGE, [Validators.required]),
      rating: new FormControl(6, [Validators.required, Validators.min(6), Validators.max(6)]),
      min: new FormControl(6),
      max: new FormControl(6),
      readonly: new FormControl(true)
    })
  ]);
  private readonly qualities$: BehaviorSubject<QualityId> = new BehaviorSubject(null);
  propagateChange = (_: any) => {};

  constructor(public data: FifthEditionService) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.qualities$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(res => this.propagateChange(res));
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}

  onAddKnowledgeClick(): void {
    this.form.push(new FormGroup({
      id: new FormControl(`knowledge:${Date.now()}`),
      name: new FormControl('', [Validators.required]),
      category: new FormControl(SKILL_CATEGORY_ID.ACADEMIC, [Validators.required]),
      rating: new FormControl(1, [Validators.required, Validators.min(0), Validators.max(6)]),
      min: new FormControl(0),
      max: new FormControl(6),
      readonly: new FormControl(false)
    }));
  }

  onRemoveKnowledgeClick(id: string): void {
    this.form.removeAt(this.form.value.map(i => i.id).indexOf(id));
  }
}
