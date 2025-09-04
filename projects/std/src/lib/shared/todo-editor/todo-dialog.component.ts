import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character, CharacterId, getId16 } from '@std';
import { TodoTask } from './todo-editor.models';

interface Data {
  task: TodoTask;
  characters: Character[];
}

@Component({
    templateUrl: './todo-dialog.component.html',
    styleUrls: ['./todo-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TodoDialogComponent implements OnInit {
  readonly data = inject<Data>(MAT_DIALOG_DATA);
  readonly characters = this.data?.characters ?? [];
  readonly task = this.data?.task;
  readonly form: FormGroup = new FormGroup({
    id: new FormControl<string>(null),
    name: new FormControl<string>('', [Validators.required]),
    experience: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    characters: new FormControl<CharacterId[]>([]),
    hidden: new FormControl<boolean>(false)
  });

  ngOnInit(): void {
    this.form.patchValue(!!this.task ? this.task : { id: getId16() });
  }
}
