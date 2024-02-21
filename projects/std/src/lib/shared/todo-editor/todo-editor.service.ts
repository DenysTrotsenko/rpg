import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { DialogService, getId16 } from '@shared';
import { TodoId, TodoStatus, TodoTask } from './todo-editor.models';
import { TodoDialogComponent } from './todo-dialog.component';

@Injectable()
export class TodoEditorService {
  static readonly STATUS_ORDER: TodoStatus[] = ['active', 'completed', 'failed'];

  readonly dialog = inject(DialogService);

  readonly tasksSrc$: BehaviorSubject<TodoTask[]> = new BehaviorSubject([]);
  readonly filterSrc$: BehaviorSubject<TodoStatus[]> = new BehaviorSubject([]);
  readonly tasks$: Observable<TodoTask[]> = this.tasksSrc$.asObservable().pipe(
    map(tasks => JSON.parse(JSON.stringify(tasks)))
  );
  readonly filtered$: Observable<TodoTask[]> = combineLatest([
    this.tasks$,
    this.filterSrc$.asObservable()
  ]).pipe(
    map(([tasks, statuses]) => this.getFilteredTasks(tasks, statuses))
  );

  getFilteredTasks(tasks: TodoTask[], statuses: TodoStatus[]): TodoTask[] {
    return tasks.reduce((acc, task) => {
      if (statuses.includes(task.status)) {
        return [...acc, {...task, tasks: this.getFilteredTasks(task.tasks, statuses)}];
      } else {
        return acc;
      }
    }, []);
  }

  set filter(statuses: TodoStatus[]) {
    this.filterSrc$.next(statuses ?? [...TodoEditorService.STATUS_ORDER]);
  }

  set tasks(tasks: TodoTask[]) {
    this.tasksSrc$.next(tasks);
  }

  status(ids: TodoId[]): void {
    const tasks = this.tasksSrc$.value;
    const taskRef = this.getTaskRef(tasks, ids);

    taskRef.status = this.getNextStatus(taskRef);

    this.tasksSrc$.next(tasks);
  }

  add(ids: TodoId[]): void {
    this.dialog.open(TodoDialogComponent, { data: null, width: '800px' }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => {
          const tasks = this.tasksSrc$.value;
          let tasksRef: TodoTask[] = tasks;

          ids.forEach((id, idx) => {
            const taskIndex = tasksRef.findIndex(i => i.id === id);
            tasksRef = tasksRef[taskIndex].tasks;
          });

          tasksRef.push({
            ...res,
            id: getId16(),
            status: 'active',
            tasks: []
          });

          this.tasksSrc$.next(tasks);
        })
      )
      .subscribe();
  }

  edit(ids: TodoId[]): void {
    const tasks = this.tasksSrc$.value;
    const taskRef = this.getTaskRef(tasks, ids);

    this.dialog.open(TodoDialogComponent, {
      data: taskRef,
      width: '800px'
    }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => {
          taskRef.name = res.name;
          taskRef.experience = res.experience;

          this.tasksSrc$.next(tasks);
        })
      )
      .subscribe();
  }

  delete(ids: TodoId[]): void {
    const tasks = this.tasksSrc$.value;
    const last = ids.length - 1;
    let tasksRef = tasks;

    ids.forEach((id, idx) => {
      const taskIndex = tasksRef.findIndex(i => i.id === id);
      if (idx === last) {
        tasksRef.splice(taskIndex, 1);
      } else {
        tasksRef = tasksRef[taskIndex].tasks;
      }
    });

    this.tasksSrc$.next(tasks);
  }

  private getNextStatus(i: TodoTask): TodoStatus {
    const order = TodoEditorService.STATUS_ORDER;

    return order[order.indexOf(i.status) + 1] ?? order[0];
  }

  private getTaskRef(tasks: TodoTask[], ids: TodoId[]): TodoTask {
    const last = ids.length - 1;
    let tasksRef: TodoTask[] = tasks;
    let taskRef: TodoTask = null;

    ids.forEach((id, idx) => {
      const taskIndex = tasksRef.findIndex(i => i.id === id);
      if (idx === last) {
        taskRef = tasksRef[taskIndex];
      } else {
        tasksRef = tasksRef[taskIndex].tasks;
      }
    });

    return taskRef;
  }
}
