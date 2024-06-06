import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewComponent } from './view.component';
import { TodoId, TodoTask } from '../../../../../std/src/lib/shared/todo-editor/todo-editor.models';
import { CharacterId } from '@std';

const tasks: TodoTask[] = [
  {
    id: 'todo-task-1' as TodoId,
    name: 'Test #1',
    experience: 10,
    characters: ['1' as CharacterId, '2' as CharacterId],
    status: 'completed',
    tasks: [
      {
        id: 'todo-task-11' as TodoId,
        name: 'Test #1-1',
        experience: 4,
        characters: ['1' as CharacterId, '2' as CharacterId],
        status: 'active',
        hidden: true,
        tasks: [
          {
            id: 'todo-task-111' as TodoId,
            name: 'Test #1-1-1',
            experience: 5,
            characters: ['1' as CharacterId, '2' as CharacterId],
            status: 'completed',
            tasks: []
          }
        ]
      },
      {
        id: 'todo-task-12' as TodoId,
        name: 'Test #1-2',
        experience: 6,
        characters: ['1' as CharacterId, '3' as CharacterId],
        status: 'completed',
        tasks: []
      }
    ]
  }
];

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly calculate xp', () => {
    const xpMap = component.updateXpMap(new Map(), tasks);
    expect(xpMap.get('1' as CharacterId)).toEqual(21);
    expect(xpMap.get('2' as CharacterId)).toEqual(15);
    expect(xpMap.get('3' as CharacterId)).toEqual(6);
  });
});
