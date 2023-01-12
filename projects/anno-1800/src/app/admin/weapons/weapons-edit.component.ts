import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-weapons-edit',
  templateUrl: './weapons-edit.component.html',
  styleUrls: ['./weapons-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeaponsEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
