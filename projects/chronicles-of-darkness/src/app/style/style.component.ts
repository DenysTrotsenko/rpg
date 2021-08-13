import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
