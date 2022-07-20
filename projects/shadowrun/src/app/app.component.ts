import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(icons: MatIconRegistry) {
    icons.setDefaultFontSetClass('material-icons-outlined');
  }
}
