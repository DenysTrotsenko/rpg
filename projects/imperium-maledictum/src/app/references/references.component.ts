import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavListItemData } from '@shared';

@Component({
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent {
  readonly options: NavListItemData[] = [
    { link: './armoury', label: 'Armoury' },
    { link: './bestiary', label: 'Bestiary' },
    { link: './characteristics', label: 'Characteristics' },
    { link: './skills', label: 'Skills' },
    { link: './talents', label: 'Talents' },
  ];

  trackById(_, i): string { return i.id; }
}
