import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeaponsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
