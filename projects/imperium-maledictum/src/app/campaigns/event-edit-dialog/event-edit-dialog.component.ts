import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Observable, take } from 'rxjs';
import { CampaignEvent, getId16, getUnixTimestamp, User, UserId, UserService } from '@shared';
import { map, tap } from 'rxjs/operators';
import { MatLegacyOption } from '@angular/material/legacy-core';

export interface EventEditDialogData {
  title?: string;
  event: CampaignEvent;
  members: UserId[];
}

@Component({
  templateUrl: './event-edit-dialog.component.html',
  styles: [`.select-all{margin:5px 17px;}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventEditDialogComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl<string>(null, [Validators.required]),
    description: new FormControl<string>(null),
    members: new FormControl<UserId[]>([])
  });
  isAllSelected = false;

  readonly members$: Observable<User[]> = this.user.all$.pipe(
    map(users => users.filter(i => this.data?.members.includes(i.id))),
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EventEditDialogData,
    private readonly user: UserService
  ) {}

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

  onSelectAllClick(): void {
    this.members$
      .pipe(
        take(1),
        map(members => members.map(i => i.id)),
        tap(members => this.form.get('members').patchValue(this.isAllSelected ? members : []))
      )
      .subscribe();
  }
}
