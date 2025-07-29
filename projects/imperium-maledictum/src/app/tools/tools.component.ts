import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavListItemData } from '@std';

@Component({
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ToolsComponent {
  readonly options: NavListItemData[] = [
    // { link: './webgl', label: 'WebGL' },
  ];

  trackById(_, i): string { return i.id; }
}
