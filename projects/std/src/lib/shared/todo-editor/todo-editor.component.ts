import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { skip, tap } from 'rxjs/operators';
import { TodoTask, TodoStatus, TodoMode, TodoId } from './todo-editor.models';
import { TodoEditorService } from './todo-editor.service';
import { Character } from '@std';

@Component({
    selector: 'std-todo-editor',
    templateUrl: './todo-editor.component.html',
    styleUrls: ['./todo-editor.component.scss'],
    providers: [TodoEditorService],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TodoEditorComponent implements OnInit {
  readonly todo = inject(TodoEditorService);

  @Input() hide: boolean = true;
  @Input() mode: TodoMode = 'view';
  @Input() filter: TodoStatus[] = ['active', 'completed', 'failed'];
  @Input() tasks: TodoTask[];
  @Input() set characters(characters: Character[]) {
    this.todo.characters = characters;
  }
  @Output() valueChange: EventEmitter<TodoTask[]> = new EventEmitter();

  readonly tasks$ = this.todo.tasks$.pipe(
    takeUntilDestroyed(),
    skip(1),
    tap(tasks => this.valueChange.next(tasks))
  );
  readonly filtered$ = this.todo.filtered$;

  ngOnInit(): void {
    this.todo.tasks = this.tasks ?? [];
    this.tasks$.subscribe();
  }

  onJsonClick(): void {
    this.todo.editor();
  }

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
