import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { DialogService, getId16 } from '@shared';
import { TodoStatus, TodoTask } from './todo-editor.models';
import { TodoDialogComponent } from './todo-dialog.component';

@Injectable()
export class TodoEditorService {
  readonly dialog = inject(DialogService);

  readonly tasks$: BehaviorSubject<TodoTask[]> = new BehaviorSubject([]);
  readonly filter$: BehaviorSubject<TodoStatus> = new BehaviorSubject(null);
  readonly filtered$: Observable<TodoTask[]> = combineLatest([
    this.tasks$.asObservable(),
    this.filter$.asObservable()
  ]).pipe(
    map(([tasks, status]) => {
      return tasks.filter(task => !!status ? task.status === status : true);
    })
  );

  set filter(status: TodoStatus) {
    this.filter$.next(status);
  }

  set tasks(tasks: TodoTask[]) {
    this.tasks$.next(tasks);
  }

  add(): void {
    this.dialog.open(TodoDialogComponent, { data: null, width: '800px' }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => {
          const tasks = this.tasks$.value;

          this.tasks$.next([
            ...tasks,
            {
              ...res,
              id: getId16(),
              status: 'active',
              tasks: []
            }
          ]);
        })
      )
      .subscribe();
  }
}
