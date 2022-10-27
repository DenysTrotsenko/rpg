import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-drugs-edit',
  templateUrl: './drugs-edit.component.html',
  styleUrls: ['./drugs-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrugsEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
