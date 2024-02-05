import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { TodoTask, TodoStatus, TodoMode } from './todo-editor.models';
import { TodoEditorService } from './todo-editor.service';

@Component({
  selector: 'std-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.scss'],
  providers: [TodoEditorService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoEditorComponent {
  readonly todo = inject(TodoEditorService);

  @Input() mode: TodoMode = 'view';
  @Input() set filter(status: TodoStatus) { this.todo.filter = status; }
  @Input() set tasks(tasks: TodoTask[]) { this.todo.tasks = tasks; }

  readonly tasks$ = this.todo.filtered$;

  onAddClick(): void {
    this.todo.add();
  }
}
