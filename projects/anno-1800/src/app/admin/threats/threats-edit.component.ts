import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-threats-edit',
  templateUrl: './threats-edit.component.html',
  styleUrls: ['./threats-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreatsEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
