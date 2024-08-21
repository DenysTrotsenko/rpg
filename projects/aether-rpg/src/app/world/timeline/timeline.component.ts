import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TIMELINE } from './timeline.const';

@Component({
  templateUrl: './timeline.component.html',
  styleUrl: '../world.base.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {
  readonly timeline = TIMELINE;
}
