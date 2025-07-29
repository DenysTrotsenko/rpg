import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavListItemData } from '@std';

@Component({
    templateUrl: './references.component.html',
    styleUrls: ['./references.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ReferencesComponent {
  readonly options: NavListItemData[] = [
    { link: './armoury', label: 'Armoury' },
    { link: './bestiary', label: 'Bestiary' },
    { link: './characteristics', label: 'Characteristics' },
    { link: './conditions', label: 'Conditions' },
    { link: './skills', label: 'Skills' },
    { link: './talents', label: 'Talents' },
  ];

  trackById(_, i): string { return i.id; }
}
