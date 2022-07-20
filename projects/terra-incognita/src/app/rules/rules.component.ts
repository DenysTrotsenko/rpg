import { Component } from '@angular/core';
import { Attribute, Skill } from '@fof1/models';
import { ATTRIBUTES } from '@fof1/attributes';
import { SKILLS } from '@fof1/skills';

@Component({
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {
  readonly attributes: Attribute[] = ATTRIBUTES;
  readonly skills: Skill[] = SKILLS;
}
