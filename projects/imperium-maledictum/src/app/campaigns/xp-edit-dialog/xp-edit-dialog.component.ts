import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Campaign, CampaignExperience, getId16, getUnixTimestamp, User, UserService } from '@shared';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

export interface XpEditDialogData {
  campaign: Campaign;
  event: CampaignExperience;
}

@Component({
  templateUrl: './xp-edit-dialog.component.html',
  styleUrls: ['./xp-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XpEditDialogComponent {
  readonly data: XpEditDialogData = inject(MAT_DIALOG_DATA);
  readonly user = inject(UserService);

  readonly form: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>(null)
  });

  readonly members$: Observable<User[]> = this.user.all$.pipe(
    map(all => all.filter(i => this.data.campaign?.members?.includes(i.id)))
  );

  ngOnInit(): void {
    const members = this.data.campaign?.members ?? [];
    const value = this.form.get('value') as FormGroup;

    members.forEach(id => {
      value.addControl(id, new FormControl(0, Validators.required));
    });

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
