import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { FunctionsService, MaterialIconFont } from '@shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(icons: MatIconRegistry, public func: FunctionsService) {
    icons.setDefaultFontSetClass(MaterialIconFont.OUTLINED);

    func.call$('helloWorld', {}).subscribe(res => res.subscribe(console.log));
  }
}
