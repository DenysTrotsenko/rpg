import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Observable } from 'rxjs';
import { CampaignEvent, getId16, getUnixTimestamp, User, UserService } from '@shared';

@Component({
  templateUrl: './event-edit-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventEditDialogComponent implements OnInit {
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('', [Validators.required]),
    description: new UntypedFormControl('', [Validators.required]),
    members: new UntypedFormControl([])
  });

  readonly members$: Observable<User[]> = this.user.all$;

  constructor(
    @Inject(MAT_DIALOG_DATA) public original: CampaignEvent,
    private readonly user: UserService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(!!this.original ? this.original : null);
  }

  onSubmit(form: Partial<CampaignEvent>, original: CampaignEvent): CampaignEvent {
    return {
      ...original,
      ...form,
      id: original?.id ?? getId16(),
      createdAt: original?.createdAt ?? getUnixTimestamp()
    };
  }
}
