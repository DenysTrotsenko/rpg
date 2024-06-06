import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, shareReplay, tap } from 'rxjs/operators';
import { Character, DialogService, getId16 } from '@std';
import { TodoId, TodoStatus, TodoTask } from './todo-editor.models';
import { TodoDialogComponent } from './todo-dialog.component';
import { JsonEditorDialogComponent } from '../json-editor-dialog/json-editor-dialog.component';

@Injectable()
export class TodoEditorService {
  static readonly STATUS_ORDER: TodoStatus[] = ['active', 'completed', 'failed'];

  readonly dialog = inject(DialogService);

  readonly charactersSrc$: BehaviorSubject<Character[]> = new BehaviorSubject([]);
  readonly tasksSrc$: BehaviorSubject<TodoTask[]> = new BehaviorSubject([]);
  readonly filterSrc$: BehaviorSubject<TodoStatus[]> = new BehaviorSubject([]);
  readonly tasks$: Observable<TodoTask[]> = this.tasksSrc$.asObservable().pipe(
    map(tasks => JSON.parse(JSON.stringify(tasks))),
    shareReplay(1)
  );
  readonly filtered$: Observable<TodoTask[]> = combineLatest([
    this.tasks$,
    this.filterSrc$.asObservable()
  ]).pipe(
    map(([tasks, statuses]) => this.getFilteredTasks(tasks, statuses)),
    shareReplay(1)
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

  set characters(characters: Character[]) {
    this.charactersSrc$.next(characters);
  }

  status(ids: TodoId[]): void {
    const tasks = this.tasksSrc$.value;
    const taskRef = this.getTaskRef(tasks, ids);

    taskRef.status = this.getNextStatus(taskRef);

    this.tasksSrc$.next(tasks);
  }

  add(ids: TodoId[]): void {
    this.dialog.open(TodoDialogComponent, {
      data: {
        characters: this.charactersSrc$.value,
        task: null
      },
      width: '800px'
    }).afterClosed()
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
      data: {
        characters: this.charactersSrc$.value,
        task: taskRef
      },
      width: '800px'
    }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => {
          taskRef.name = res.name;
          taskRef.experience = res.experience;
          taskRef.characters = res.characters;
          taskRef.hidden = res.hidden;

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

  editor(): void {
    this.dialog.open(JsonEditorDialogComponent, {
      data: this.tasksSrc$.value,
      width: '1200px'
    }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(result => {
          this.populateTaskIds(result);
          this.tasksSrc$.next(result);
        })
      )
      .subscribe();
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

  private populateTaskIds(tasks: TodoTask[]): void {
    tasks.forEach((task) => {
      task.id = task.id ?? getId16();
      this.populateTaskIds(task.tasks);
    });
  }
}
