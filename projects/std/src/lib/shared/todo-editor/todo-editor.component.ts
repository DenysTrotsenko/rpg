import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TodoTask, TodoStatus, TodoMode, TodoId } from './todo-editor.models';
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
  @Input() filter: TodoStatus[] = ['active', 'completed', 'failed'];
  // @Input() set filter(statuses: TodoStatus[]) { this.todo.filter = statuses; }
  @Input() set tasks(tasks: TodoTask[]) { this.todo.tasks = tasks; }
  @Output() valueChange: EventEmitter<TodoTask[]> = new EventEmitter();

  readonly tasks$ = this.todo.filtered$.pipe(
    // tap(tasks => this.valueChange.next(tasks)),
  );

  onAddClick(ids: TodoId[]): void {
    this.todo.add(ids);
  }

  onDeleteClick(ids: TodoId[]): void {
    this.todo.delete(ids);
  }

  onEditClick(ids: TodoId[]): void {
    this.todo.edit(ids);
  }

  onStatusClick(ids: TodoId[]): void {
    this.todo.status(ids);
  }

  onFilterChange(statuses: TodoStatus[]): void {
    this.todo.filter = statuses;
  }
}
