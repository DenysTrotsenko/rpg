import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-view-rituals',
  templateUrl: './view-rituals.component.html',
  styleUrls: ['./view-rituals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewRitualsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
