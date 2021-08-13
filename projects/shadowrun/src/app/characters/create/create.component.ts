import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {combineLatest, Observable, Subject} from 'rxjs';
import {distinctUntilChanged, shareReplay, startWith, take, takeUntil, tap} from 'rxjs/operators';
import { FifthEditionService } from '@shadowrun/app/5e/5e.service';
import {Attribute, AttributeId, Awakening, AwakeningId, Metatype, MetatypeId} from '@shadowrun/app/5e/5e.models';
import {ATTRIBUTE_ID, AWAKENING_ID, METATYPE_ID} from '@shadowrun/app/5e/5e.enums';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {
  readonly config = {
    attributes: this.data.metatypes.find(i => i.id === METATYPE_ID.HUMAN).attributes
  };
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    metatype: new FormControl(METATYPE_ID.HUMAN, [Validators.required]),
    awakening: new FormControl(AWAKENING_ID.MUNDANE, [Validators.required]),
    qualities: new FormArray([]),
    attributes: new FormArray(
      this.data.attributes.reduce((acc, attribute) => {
        return [...acc, new FormGroup({
          id: new FormControl(attribute.id),
          value: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(6)]),
        })];
      }, [])
    ),
    skills: new FormArray([]),
    knowledges: new FormArray([]),
  });
  readonly unsubscribe$: Subject<void> = new Subject<void>();
  readonly onAwakeningChange$: Observable<AwakeningId> = this.form.get('awakening').valueChanges.pipe(
    takeUntil(this.unsubscribe$),
    startWith(AWAKENING_ID.MUNDANE),
    distinctUntilChanged(),
    shareReplay(1)
  );
  readonly onMetatypeChange$: Observable<MetatypeId> = this.form.get('metatype').valueChanges.pipe(
    takeUntil(this.unsubscribe$),
    startWith(METATYPE_ID.HUMAN),
    distinctUntilChanged(),
    shareReplay(1)
  );

  get attributes(): FormArray { return this.form.get('attributes') as FormArray; }
  get awakening(): FormControl { return this.form.get('awakening') as FormControl; }
  get metatype(): FormControl { return this.form.get('metatype') as FormControl; }

  constructor(public data: FifthEditionService) { }

  ngOnInit(): void {
    combineLatest([ this.onAwakeningChange$, this.onMetatypeChange$ ])
      .pipe(
        tap(([awakening, metatype]) => {
          this.setAttributeMinMax(awakening, metatype);
          this.setAttributes();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getAttributeMin(id: AttributeId): number {
    return this.config.attributes[id][0];
  }

  getAttributeMax(id: AttributeId): number {
    return this.config.attributes[id][1];
  }

  setAttributes(): void {
    const attributes = this.attributes.value;
    this.attributes.clear();
    this.data.attributes.forEach(attribute => {
      const min = this.config.attributes[attribute.id][0] ?? 1;
      const max = this.config.attributes[attribute.id][1] ?? 6;
      const clamp = Math.max(min, Math.min(attributes.find(i => i.id === attribute.id).value, max));
      this.attributes.push(new FormGroup({
        id: new FormControl(attribute.id),
        value: new FormControl(clamp, [Validators.required, Validators.min(1), Validators.max(6)]),
      }));
    });
  }

  setAttributeMinMax(awakening: AwakeningId, metatype: MetatypeId): void {
    this.config.attributes = {
      ...this.data.metatypes.find(i => i.id === metatype).attributes,
      ...(awakening === AWAKENING_ID.MUNDANE ? { [ATTRIBUTE_ID.MAGIC]: [0, 0] } : { [ATTRIBUTE_ID.MAGIC]: [1, 6] })
    };
  }

  // getCalculatedEssence(): void {}
  // getCalculatedEssence(): void {}
}
