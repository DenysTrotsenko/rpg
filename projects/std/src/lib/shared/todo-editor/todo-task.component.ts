import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TodoTask, TodoStatus, TodoMode, TodoId } from './todo-editor.models';
import { TodoEditorService } from './todo-editor.service';

@Component({
    selector: 'std-todo-task',
    templateUrl: './todo-task.component.html',
    styleUrls: ['./todo-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TodoTaskComponent {
  static readonly ICONS: Map<TodoStatus, string> = new Map()
    .set('active', 'check_box_outline_blank')
    .set('completed', 'check_box')
    .set('failed', 'indeterminate_check_box');
  static readonly STYLES: Map<TodoStatus, string> = new Map()
    .set('active', 'task-ongoing')
    .set('completed', 'task-completed')
    .set('failed', 'task-failed');

  readonly todo = inject(TodoEditorService);

  @Input() set task(task: TodoTask) { this.task$.next(task); }
  @Input() mode: TodoMode;
  @Input() hide: boolean;
  @Output() addClick: EventEmitter<TodoId[]> = new EventEmitter();
  @Output() editClick: EventEmitter<TodoId[]> = new EventEmitter();
  @Output() deleteClick: EventEmitter<TodoId[]> = new EventEmitter();
  @Output() statusClick: EventEmitter<TodoId[]> = new EventEmitter();

  readonly task$: BehaviorSubject<TodoTask> = new BehaviorSubject<TodoTask>(null);
  readonly icon$: Observable<string> = this.task$.pipe(
    map(task => TodoTaskComponent.ICONS.get(task.status))
  );
  readonly style$: Observable<string> = this.task$.pipe(
    map(task => TodoTaskComponent.STYLES.get(task.status)),
    shareReplay(1)
  );

  onStatusClick(ids: TodoId[]): void {
    if (this.mode === 'view') { return; }
    this.statusClick.emit([this.task$.value?.id, ...ids]);
  }

  onAddClick(ids: TodoId[]): void {
    if (this.mode === 'view') { return; }
    this.addClick.emit([this.task$.value?.id, ...ids]);
  }

  onEditClick(ids: TodoId[]): void {
    if (this.mode === 'view') { return; }
    this.editClick.emit([this.task$.value?.id, ...ids]);
  }

  onDeleteClick(ids: TodoId[]): void {
    if (this.mode === 'view') { return; }
    this.deleteClick.emit([this.task$.value?.id, ...ids]);
  }
}
