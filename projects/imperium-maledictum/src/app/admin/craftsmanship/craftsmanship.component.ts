import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminService, DialogService } from '@shared';
import { Craftsmanship, CraftsmanshipId } from '@imperium-maledictum-1e/models/common';
import { CraftsmanshipEditComponent } from './craftsmanship-edit.component';

@Component({
  selector: 'app-craftsmanship',
  templateUrl: './craftsmanship.component.html',
  styleUrls: ['./craftsmanship.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AdminService]
})
export class CraftsmanshipComponent implements OnInit {
  readonly items$: BehaviorSubject<Craftsmanship[]> = this.admin.items$;
  readonly loading$: BehaviorSubject<boolean> = this.admin.loading$;

  constructor(
    @Self() private admin: AdminService<Craftsmanship, CraftsmanshipId>,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.admin.init({
      path: '/data/craftsmanship.json',
      responseFn: this.getResponse
    });
  }

  getResponse(data): Observable<Craftsmanship> {
    return this.dialog.open(CraftsmanshipEditComponent, {
      data,
      width: '600px'
    }).afterClosed();
  }

  onAddClick(): void {
    this.admin.add();
  }

  onDeleteClick(id: CraftsmanshipId): void {
    this.admin.delete(id);
  }

  onEditClick(item: Craftsmanship): void {
    this.admin.edit(item);
  }

  onSaveClick(): void {
    this.admin.save();
  }
}
