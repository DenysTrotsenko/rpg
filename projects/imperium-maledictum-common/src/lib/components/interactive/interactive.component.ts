import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'interactive',
    templateUrl: './interactive.component.html',
    styleUrls: ['./interactive.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class InteractiveComponent {
  @Input() id: unknown;
}
