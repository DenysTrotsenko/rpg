import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavListItem } from '@ti/app/app.models';

@Component({
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent {
  readonly options: NavListItem[] = [
    { link: './afflictions', label: 'Afflictions' },
    { link: './ailments', label: 'Ailments' },
    { link: './attributes', label: 'Attributes' },
    { link: './drugs', label: 'Drugs' },
    { link: './injuries', label: 'Injuries' },
    { link: './professions', label: 'Professions' },
    { link: './qualities', label: 'Qualities' },
    { link: './skills', label: 'Skills' },
    { link: './spells', label: 'Spells' },
    { link: './talents', label: 'Talents' },
    { link: './traits', label: 'Traits' }
  ];
}
