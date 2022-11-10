import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {
  readonly options = [
    { link: './ailments', label: 'Ailments' },
    { link: './drugs', label: 'Drugs' },
    { link: './qualities', label: 'Qualities' },
    { link: './quirks', label: 'Quirks' },
    { link: './talents', label: 'Talents' },
    { link: './traits', label: 'Traits' },
    { link: './settings', label: 'Settings' }
  ];
}
