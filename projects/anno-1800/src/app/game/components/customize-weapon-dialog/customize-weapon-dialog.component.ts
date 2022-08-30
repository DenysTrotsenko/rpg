import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customize-weapon-dialog',
  templateUrl: './customize-weapon-dialog.component.html',
  styleUrls: ['./customize-weapon-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizeWeaponDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
