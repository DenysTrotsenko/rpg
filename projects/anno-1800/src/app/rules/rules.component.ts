import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Attribute, Skill} from '@flames-of-freedom-1e/models';
import {ATTRIBUTES} from '@flames-of-freedom-1e/attributes';
import {SKILLS} from '@flames-of-freedom-1e/skills';

@Component({
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RulesComponent {
  readonly attributes: Attribute[] = ATTRIBUTES;
  readonly skills: Skill[] = SKILLS;
}
