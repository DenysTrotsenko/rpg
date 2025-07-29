import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
// import { NestedTreeControl } from '@angular/cdk/tree';
// import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeMode, TreeNode } from './tree-editor.models';
import { TreeEditorService } from './tree-editor.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'std-tree-editor',
    templateUrl: './tree-editor.component.html',
    styleUrls: ['./tree-editor.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TreeEditorService],
    standalone: false
})
export class TreeEditorComponent implements OnInit {
  readonly tree = inject(TreeEditorService);

  @Input() nodes: TreeNode[];
  @Input() mode: TreeMode;

  // readonly treeControl = new NestedTreeControl<TreeNode>(node => node?.children);
  // readonly dataSource = new MatTreeNestedDataSource<TreeNode>();

  ngOnInit(): void {
    // this.dataSource.data = this.nodes;
  }

  // hasChild = (_: number, node: TreeNode) => !!node?.children && node?.children?.length > 0;

  onAddClick(node: TreeNode): void {

  }

  onEditClick(node: TreeNode): void {

  }

  onDeleteClick(node: TreeNode): void {

  }

  onInfoClick(node: TreeNode): void {

  }

  onDrop(event: CdkDragDrop<TreeNode[]>): void {
    moveItemInArray(this.nodes, event.previousIndex, event.currentIndex);
  }
}
