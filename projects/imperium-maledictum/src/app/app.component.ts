import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { FunctionsService, MaterialIconFont } from '@shared';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(icons: MatIconRegistry, private readonly aff: AngularFireFunctions) {
    icons.setDefaultFontSetClass(MaterialIconFont.OUTLINED);

    aff.httpsCallable('helloWorld')(null).subscribe(res => console.log(res));
  }
}
