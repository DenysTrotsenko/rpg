import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FS_COLLECTION, getId16, Setting, SettingId, SettingService } from '@std';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  templateUrl: './admin-settings-edit.component.html',
  styleUrls: ['./admin-settings-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSettingsEditComponent {
  readonly form: FormGroup = new FormGroup<any>({
    id: new FormControl<SettingId>(null),
    name: new FormControl<string>(null),
    clone: new FormControl<string>(null),
    storage: new FormControl<string>(null)
  });

  readonly settings$ = this.setting.all$;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Setting,
    private readonly setting: SettingService
  ) {}

  ngOnInit(): void {
    const id = getId16();
    this.form.patchValue(!!this.data ? this.data : { id, storage: `${FS_COLLECTION.SETTINGS}/${id}` });
  }
}
