import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: './notes.component.html',
    styleUrl: '../world.base.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class NotesComponent {

}
