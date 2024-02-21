import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TodoStatus,
  TodoMode,
  TodoTask,
  TodoId
} from '../../../../../std/src/lib/shared/todo-editor/todo-editor.models';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {
  mode: TodoMode = 'edit';
  filter: TodoStatus[] = ['active', 'completed', 'failed'];
  tasks: TodoTask[] = [
    {
      id: 'todo-task-1' as TodoId,
      name: 'Test #1',
      experience: 10,
      characters: [],
      status: 'active',
      tasks: [
        {
          id: 'todo-task-11' as TodoId,
          name: 'Test #1-1',
          experience: 4,
          characters: [],
          status: 'active',
          tasks: [
            {
              id: 'todo-task-111' as TodoId,
              name: 'Test #1-1-1',
              experience: 5,
              characters: [],
              status: 'active',
              tasks: []
            }
          ]
        },
        {
          id: 'todo-task-12' as TodoId,
          name: 'Test #1-2',
          experience: 6,
          characters: [],
          status: 'active',
          tasks: []
        }
      ]
    }
  ];

  onResultChange(res: any): void {
    console.log(JSON.stringify(res));
  }
}
