import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavListItemData } from '@std';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrl: './world.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorldComponent {
  readonly options: NavListItemData[] = [
    { link: './timeline', label: 'Timeline' },
  ];
}
