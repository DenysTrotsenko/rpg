import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavListItem } from '@ti/app/app.models';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {
  readonly options: NavListItem[] = [
    { link: './afflictions', label: 'Afflictions' },
    { link: './ailments', label: 'Ailments' },
    { link: './drugs', label: 'Drugs' },
    { link: './qualities', label: 'Qualities' },
    { link: './quirks', label: 'Quirks' },
    { link: './settings', label: 'Settings' },
    { link: './talents', label: 'Talents' },
    { link: './threat-traits', label: 'Threat Traits' },
    { link: './traits', label: 'Traits' }
  ];
}
