import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RulesComponent {
  firstName = signal('Jane');
  lastName = signal('Doe');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    effect(() => console.log('Name changed:', this.fullName()));
  }
}
