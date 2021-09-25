import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent {}
