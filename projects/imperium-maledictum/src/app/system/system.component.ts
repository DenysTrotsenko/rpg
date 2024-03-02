import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavListItemData } from '@shared';

@Component({
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemComponent {
  readonly options: NavListItemData[] = [
    { link: './character-creation', label: 'Character Creation' },
    // { link: './skills', label: 'Skills' },
    // { link: './talents', label: 'Talents' },
    // { link: './item-traits', label: 'Item Traits' }
  ];
}
