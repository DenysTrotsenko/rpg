import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
