import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-threats',
  templateUrl: './threats.component.html',
  styleUrls: ['./threats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
