import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './astral.component.html',
  styleUrls: ['./astral.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AstralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
