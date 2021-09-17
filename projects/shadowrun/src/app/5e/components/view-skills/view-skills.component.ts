import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-view-skills',
  templateUrl: './view-skills.component.html',
  styleUrls: ['./view-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
