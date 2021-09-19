import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FunctionsService} from '@shared';
import {tap} from 'rxjs/operators';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent implements OnInit {
  constructor(private functions: FunctionsService) {
  }
  ngOnInit(): void {
    this.functions.sendMessage('jkjk').pipe(tap(res => console.log(res))).subscribe();
  }
}
