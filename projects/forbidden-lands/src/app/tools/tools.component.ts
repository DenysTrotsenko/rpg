import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ToolsComponent {
}
