import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-threat-traits-edit',
  templateUrl: './threat-traits-edit.component.html',
  styleUrls: ['./threat-traits-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreatTraitsEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
