import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Availability, ItemModification } from '@imperium-maledictum-1e/models/common';
import { AdminBaseService, getId16 } from '@std';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '@im-common';

@Component({
    templateUrl: './item-modifications.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ItemModificationsComponent implements OnInit {
  private readonly data = inject(DataService);
  readonly item: ItemModification = inject(MAT_DIALOG_DATA);
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl<string>('', [Validators.required]),
    cost: new FormControl<number>(0, [Validators.required]),
    availability: new FormControl<number>(null, [Validators.required]),
    labels: new FormGroup({
      flavor: new FormControl<string>(null),
      description: new FormControl<string>(null),
    }),
    system: new FormControl({})
  });
  readonly availabilities$: Observable<Availability[]> = this.data.availabilities$.pipe(
    tap(items => AdminBaseService.setControlDefault(this.form.get('availability'), items))
  );

  ngOnInit(): void {
    this.form.patchValue(!!this.item ? this.item : { id: getId16() });
  }

  trackById(_, i): string { return i.id; }
}
