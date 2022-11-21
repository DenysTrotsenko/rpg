import {ChangeDetectionStrategy, Component} from '@angular/core';
import { NavListItem } from '@ti/app/app.models';

@Component({
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RulesComponent {
  readonly options: NavListItem[] = [
    { link: './chase', label: 'Chase' },
    { link: './combat', label: 'Combat' },
    { link: './hazards', label: 'Hazards' },
    { link: './healing', label: 'Healing' },
    { link: './horror', label: 'Horror' },
    { link: './social', label: 'Social' },
    { link: './travel', label: 'Travel' }
  ];
}
