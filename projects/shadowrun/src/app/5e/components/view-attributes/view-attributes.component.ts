import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-view-attributes',
  templateUrl: './view-attributes.component.html',
  styleUrls: ['./view-attributes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewAttributesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
