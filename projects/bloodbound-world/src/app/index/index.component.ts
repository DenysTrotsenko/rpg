import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  expanded = true;
  constructor() {}

  ngOnInit(): void {}

  onToggleSidenavClick(): void {
    this.expanded = !this.expanded;
  }
}
