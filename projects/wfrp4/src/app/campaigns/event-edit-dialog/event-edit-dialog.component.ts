import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  CampaignEvent,
  CampaignId,
  FS_COLLECTION,
  getId16,
  getUnixTimestamp,
  User,
  UserId,
  UserService
} from '@std';

export interface EventEditDialogData {
  title?: string;
  event: CampaignEvent;
  members: UserId[];
  campaign: CampaignId;
}

@Component({
    templateUrl: './event-edit-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class EventEditDialogComponent implements OnInit {
  readonly user = inject(UserService);
  readonly data: EventEditDialogData = inject(MAT_DIALOG_DATA);
  readonly form: FormGroup = new FormGroup({
    name: new FormControl<string>(null, [Validators.required]),
    short: new FormControl<string>(null),
    image: new FormControl<string>(null),
    description: new FormControl<string>(null),
    members: new FormControl<UserId[]>([])
  });
  isAllSelected = false;

  readonly members$: Observable<User[]> = this.user.all$.pipe(
    map(users => users.filter(i => this.data?.members.includes(i.id))),
  );

  readonly memberIds$: Observable<UserId[]> = this.members$.pipe(
    map(members => members.map(i => i.id))
  );

  readonly path = `${FS_COLLECTION.CAMPAIGNS}/${this.data.campaign}/images`;

  ngOnInit(): void {
    this.members$
      .pipe(
        take(1),
        map(members => members.map(i => i.id)),
        tap(members => {
          this.form.patchValue(!!this.data?.event ? this.data.event : {members});
          this.isAllSelected = this.form.get('members').value?.length === members?.length;
        })
      )
      .subscribe();
  }

  onSubmit(form: Partial<CampaignEvent>, event: CampaignEvent): CampaignEvent {
    return {
      ...event,
      ...form,
      id: event?.id ?? getId16(),
      createdAt: event?.createdAt ?? getUnixTimestamp()
    };
  }
}
