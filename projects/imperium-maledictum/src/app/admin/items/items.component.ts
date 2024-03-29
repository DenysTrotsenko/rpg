import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Availability, Item, ItemTrait, ItemType, Range, Specialisation } from '@imperium-maledictum-1e/models/common';
import { getId16 } from '@shared';
import { DataService } from '../../common/data.service';
import { AdminBaseService } from '../../../../../std/src/lib/shared/admin-base/admin-base.service';

@Component({
  templateUrl: './items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    type: new UntypedFormControl(null, [Validators.required]),
    availability: new UntypedFormControl(null, [Validators.required]),
    encumbrance: new UntypedFormControl(0, [Validators.required, Validators.min(0)]),
    cost: new UntypedFormControl(10, [Validators.required, Validators.min(0)]),
    data: new UntypedFormGroup({
      qualities: new UntypedFormControl([]),
      flaws: new UntypedFormControl([]),
      traits: new UntypedFormControl([]),
      specialisations: new UntypedFormControl([]),
      damage: new UntypedFormControl(null),
      range: new UntypedFormControl(null),
      magazine: new UntypedFormControl(null),
      magazineCost: new UntypedFormControl(null),
      armour: new UntypedFormControl(null),
      locations: new UntypedFormControl([]),
    }),
    labels: new UntypedFormGroup({
      description: new UntypedFormControl(''),
    })
  });

  readonly availabilities$: Observable<Availability[]> = this.data.availabilities$.pipe(
    tap(items => AdminBaseService.setControlDefault(this.form.get('availability'), items))
  );
  readonly itemFlaws$: Observable<ItemTrait[]> = this.data.itemFlaws$;
  readonly itemQualities$: Observable<ItemTrait[]> = this.data.itemQualities$;
  readonly itemTraits$: Observable<ItemTrait[]> = this.data.itemTraits$;
  readonly itemTypes$: Observable<ItemType[]> = this.data.itemTypes$;
  readonly ranges$: Observable<Range[]> = this.data.ranges$.pipe(
    map(ranges => ranges?.sort((a, b) => a?.order - b?.order))
  );
  readonly specialisations$: Observable<Specialisation[]> = this.data.specialisations$;
  readonly locations = ['Head', 'Body', 'Arms', 'Legs', 'All', 'Special'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: Item,
    private readonly data: DataService,
  ) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.item ? this.item : { id: getId16() });
  }

  trackById(_, i): string { return i.id; }
}
