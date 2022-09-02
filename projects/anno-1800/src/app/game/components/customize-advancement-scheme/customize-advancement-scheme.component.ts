import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DataService, DataTypes} from '@ti/app/game/data.service';
import {AdvancementScheme, Skill, Talent} from '@flames-of-freedom-1e/models';

@Component({
  templateUrl: './customize-advancement-scheme.component.html',
  styleUrls: ['./customize-advancement-scheme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizeAdvancementSchemeComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    skills: new FormControl([], [Validators.maxLength(10)]),
    talents: new FormControl([], [Validators.maxLength(3)]),
  });
  readonly skills: Skill[] = this.data[DataTypes.SKILLS];
  readonly talents: Talent[] = this.data[DataTypes.TALENTS];

  constructor(
    private readonly data: DataService,
    @Inject(MAT_DIALOG_DATA) public scheme: AdvancementScheme
  ) {}

  ngOnInit(): void {
    this.form.patchValue(this.scheme);
  }
}
