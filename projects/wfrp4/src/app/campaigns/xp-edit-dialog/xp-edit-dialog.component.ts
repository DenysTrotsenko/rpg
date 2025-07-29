import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CampaignExperience, getId16, getUnixTimestamp } from '@std';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface XpEditDialogData {
  event: CampaignExperience;
}

@Component({
    templateUrl: './xp-edit-dialog.component.html',
    styleUrls: ['./xp-edit-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class XpEditDialogComponent {
  readonly data: XpEditDialogData = inject(MAT_DIALOG_DATA);

  readonly form: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>(null)
  });

  ngOnInit(): void {
    this.form.patchValue(!!this.data?.event ? this.data.event : null);
  }

  onSubmit(form: Partial<CampaignExperience>, original: CampaignExperience): CampaignExperience {
    return {
      ...original,
      ...form,
      id: original?.id ?? getId16(),
      createdAt: original?.createdAt ?? getUnixTimestamp(),
      updatedAt: getUnixTimestamp()
    };
  }
}
