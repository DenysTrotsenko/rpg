import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-view-pc-contacts',
  templateUrl: './view-pc-contacts.component.html',
  styleUrls: ['./view-pc-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPcContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
