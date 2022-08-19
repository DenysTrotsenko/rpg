import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import { Skill } from '@flames-of-freedom-1e/models';
import {SkillTypeId} from '@flames-of-freedom-1e/enums';

@Component({
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  readonly SKILL_TYPE_SPECIAL = SkillTypeId.SPECIAL;
  readonly skills: Skill[] = this.data[DataTypes.SKILLS];
  constructor(private data: DataService) {}
}
