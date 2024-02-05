import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoStatus, TodoMode } from '../../../../../std/src/lib/shared/todo-editor/todo-editor.models';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {
  mode: TodoMode = 'edit';
  filter: TodoStatus = null;
  tasks = [
    {
      id: 'todo-task-1',
      name: 'Test #1',
      experience: 10,
      status: 'active',
      tasks: []
    }
  ];
}