import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeMode, TreeNode } from './tree-editor.models';
import { TodoId } from '../todo-editor/todo-editor.models';

@Component({
  selector: 'std-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNodeComponent {
  @Input() node: TreeNode;
  @Input() mode: TreeMode;
  @Output() addClick: EventEmitter<TodoId[]> = new EventEmitter();
  @Output() editClick: EventEmitter<TodoId[]> = new EventEmitter();
  @Output() deleteClick: EventEmitter<TodoId[]> = new EventEmitter();
  @Output() statusClick: EventEmitter<TodoId[]> = new EventEmitter();

  onAddClick(): void {}
  onEditClick(): void {}
  onInfoClick(): void {}
  onDeleteClick(): void {}
}
