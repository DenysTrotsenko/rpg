import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeMode, TreeNode } from './tree-editor.models';

@Component({
    selector: 'std-tree-node',
    templateUrl: './tree-node.component.html',
    styleUrls: ['./tree-node.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TreeNodeComponent {
  @Input() node: TreeNode;
  @Input() mode: TreeMode;
  @Output() addClick: EventEmitter<TreeNode> = new EventEmitter();
  @Output() editClick: EventEmitter<TreeNode> = new EventEmitter();
  @Output() deleteClick: EventEmitter<TreeNode> = new EventEmitter();
  @Output() infoClick: EventEmitter<TreeNode> = new EventEmitter();

  onAddClick(node: TreeNode): void {
    if (this.mode === 'view') { return; }
    this.addClick.emit(node);
  }

  onEditClick(node: TreeNode): void {
    if (this.mode === 'view') { return; }
    this.editClick.emit(node);
  }

  onInfoClick(node: TreeNode): void {
    if (this.mode === 'view') { return; }
    this.infoClick.emit(node);
  }

  onDeleteClick(node: TreeNode): void {
    if (this.mode === 'view') { return; }
    this.deleteClick.emit(node);
  }
}
