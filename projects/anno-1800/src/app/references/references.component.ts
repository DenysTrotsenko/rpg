import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Attribute, Profession, Quirk, Skill, Talent, Trait} from '@flames-of-freedom-1e/models';
import {DataService, DataTypes} from '@ti/app/game/data.service';
import {TooltipService} from '@ti/app/game/tooltip.service';

@Component({
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesComponent {
  readonly TYPES: typeof DataTypes = DataTypes;
  readonly attributes: Attribute[] = this.data[DataTypes.ATTRIBUTES];
  readonly skills: Skill[] = this.data[DataTypes.SKILLS];
  readonly professions: Profession[] = this.data[DataTypes.PROFESSIONS];
  readonly quirks: Quirk[] = this.data[DataTypes.QUIRKS];
  readonly talents: Talent[] = this.data[DataTypes.TALENTS];
  readonly traits: Trait[] = this.data[DataTypes.TRAITS];

  constructor(private data: DataService, private tooltip: TooltipService) {}

  getTooltip(type: DataTypes, id: number): string {
    switch (type) {
      case DataTypes.SKILLS:
        return this.tooltip.getSkillTooltip(id);
      case DataTypes.TALENTS:
        return this.tooltip.getTalentTooltip(id);
      case DataTypes.TRAITS:
        return this.tooltip.getTraitTooltip(id);
      case DataTypes.QUIRKS:
        return this.tooltip.getQuirkTooltip(id);
      default:
        return `Sorry, unknown type ${type}.`;
    }
  }
}
