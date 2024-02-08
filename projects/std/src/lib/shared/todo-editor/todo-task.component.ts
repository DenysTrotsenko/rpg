import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { TodoTask, TodoStatus } from './todo-editor.models';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TodoEditorService } from './todo-editor.service';

@Component({
  selector: 'std-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  static readonly STATUS_ORDER: TodoStatus[] = ['active', 'completed', 'failed'];

  readonly todo = inject(TodoEditorService);

  readonly task$: BehaviorSubject<TodoTask> = new BehaviorSubject<TodoTask>(null);
  readonly icon$: Observable<string> = this.task$.pipe(
    map(task => TodoTaskComponent.ICONS.get(task.status))
  );
  readonly style$: Observable<string> = this.task$.pipe(
    map(task => TodoTaskComponent.STYLES.get(task.status)),
    shareReplay(1)
  );

  @Input() set task(task: TodoTask) {
    this.task$.next(task);
  }

  onStatusClick(): void {
    const task = this.task$.value;

    task.status = this.getNextStatus(task);

    this.task$.next(task);
  }

  onAddClick(task: TodoTask): void {
    this.todo.add();
  }

  onEditClick(task: TodoTask): void {
    this.todo.edit();
  }

  onDeleteClick(task: TodoTask): void {
    this.todo.delete();
  }

  private getNextStatus(i: TodoTask): TodoStatus {
    const order = TodoTaskComponent.STATUS_ORDER;

    return order[order.indexOf(i.status) + 1] ?? order[0];
  }
}
