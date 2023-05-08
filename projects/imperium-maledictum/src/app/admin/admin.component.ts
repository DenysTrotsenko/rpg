import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavListItemData } from '@shared';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {
  readonly options: NavListItemData[] = [
    { link: './conditions', label: 'Conditions' },
    { link: './talents', label: 'Talents' },
    { link: './item-qualities', label: 'Qualities' },
    { link: './item-flaws', label: 'Flaws' },
    { link: './item-traits', label: 'Traits' }
  ];
}
