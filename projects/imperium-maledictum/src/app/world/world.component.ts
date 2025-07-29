import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavListItemData } from '@std';

@Component({
    templateUrl: './world.component.html',
    styleUrl: './world.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class WorldComponent {
  readonly options: NavListItemData[] = [
    { link: './notes', label: 'Notes' },
    { link: './timeline', label: 'Timeline' },
  ];
}
