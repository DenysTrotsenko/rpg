import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Skill } from '@flames-of-freedom-1e/models';

@Component({
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  readonly skills: Skill[] = this.data[DataTypes.SKILLS];

  constructor(private data: DataService) {}

  trackById(_, item): number {
    return item.id;
  }
}
