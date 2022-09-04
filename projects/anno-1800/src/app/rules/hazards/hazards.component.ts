import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './hazards.component.html',
  styleUrls: ['./hazards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HazardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
