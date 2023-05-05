import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminService, DialogService } from '@shared';
import { Craftsmanship, CraftsmanshipId } from '@imperium-maledictum-1e/models/common';
import { CraftsmanshipEditComponent } from './craftsmanship-edit.component';
import { AdminBaseComponent } from '../../../../../std/src/lib/shared/components/admin-base/admin-base.component';

@Component({
  selector: 'app-craftsmanship',
  templateUrl: './craftsmanship.component.html',
  styleUrls: ['./craftsmanship.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class CraftsmanshipComponent extends AdminBaseComponent<Craftsmanship, CraftsmanshipId> implements OnInit {
  constructor(
    @Self() public admin: AdminService<Craftsmanship, CraftsmanshipId>,
    private dialog: DialogService
  ) {
    super(admin);
  }

  ngOnInit(): void {
    this.admin.init({
      path: '/data/craftsmanship.json',
      responseFn: (data) => this.dialog.open(CraftsmanshipEditComponent, { data, width: '800px' }).afterClosed()
    });
  }
}
