import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Availability, Item, ItemTrait, ItemType, Range, Specialisation } from '@imperium-maledictum-1e/models/common';
import { getId16, AdminBaseService } from '@std';
import { DataService } from '@im-common';

@Component({
    templateUrl: './items.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ItemsComponent {
  private readonly data = inject(DataService);
  private readonly item: Item = inject(MAT_DIALOG_DATA);

  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    type: new UntypedFormControl(null, [Validators.required]),
    availability: new UntypedFormControl(null, [Validators.required]),
    encumbrance: new UntypedFormControl(0, [Validators.required, Validators.min(0)]),
    cost: new UntypedFormControl(10, [Validators.required, Validators.min(0)]),
    data: new UntypedFormGroup({
      traits: new UntypedFormControl([]),
      specialisations: new UntypedFormControl([]),
      damage: new UntypedFormControl(null),
      penetration: new UntypedFormControl(null),
      rend: new UntypedFormControl(null),
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
  readonly itemTraits$: Observable<ItemTrait[]> = this.data.itemTraits$;
  readonly itemTypes$: Observable<ItemType[]> = this.data.itemTypes$;
  readonly ranges$: Observable<Range[]> = this.data.ranges$;
  readonly specialisations$: Observable<Specialisation[]> = this.data.specialisations$;
  readonly locations = ['Head', 'Body', 'Arms', 'Legs', 'All', 'Special'];

  ngOnInit(): void {
    this.form.patchValue(!!this.item ? this.item : { id: getId16() });
  }

  onSubmit(item: Item): Item {
    Object.keys(item?.data).forEach(key => {
      if (item.data[key] == null || item.data[key]?.length === 0) {
        delete item.data[key];
      }
    });

    return item;
  }

  trackById(_, i): string { return i.id; }
}
