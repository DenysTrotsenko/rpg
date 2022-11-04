import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-settings-edit',
  templateUrl: './settings-edit.component.html',
  styleUrls: ['./settings-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
