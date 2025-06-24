import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavListItemData } from '@std';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RulesComponent {
  readonly options: NavListItemData[] = [
    { link: './mounted-combat', label: 'Mounted Combat' },
    // { link: './skills', label: 'Skills' },
    // { link: './talents', label: 'Talents' },
    // { link: './item-traits', label: 'Item Traits' }
  ];
}
