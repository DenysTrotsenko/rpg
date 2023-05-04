import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavListItemData } from '@shared';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {
  readonly options: NavListItemData[] = [
    { link: './craftsmanship', label: 'Craftsmanship' }
  ];
}
