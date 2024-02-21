import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Character, getId16 } from '@shared';
import { TodoTask } from './todo-editor.models';

interface Data {
  task: TodoTask;
  characters: Character[];
}

@Component({
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDialogComponent implements OnInit {
  readonly data = inject<Data>(MAT_DIALOG_DATA);
  readonly characters = this.data.characters;
  readonly form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(null),
    name: new UntypedFormControl('', [Validators.required]),
    experience: new UntypedFormControl(0, [Validators.required, Validators.min(0)]),
    characters: new UntypedFormControl([])
  });

  ngOnInit(): void {
    this.form.patchValue(!!this.data?.task ? this.data.task : { id: getId16() });
  }
}
