import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: './references.component.html',
    styleUrls: ['./references.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ReferencesComponent {
}
