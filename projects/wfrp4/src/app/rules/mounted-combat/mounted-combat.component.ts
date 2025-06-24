import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './mounted-combat.component.html',
  styleUrl: '../rules.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MountedCombatComponent {

}
