import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeMode, TreeNode } from './tree-editor.models';
import { TreeEditorService } from './tree-editor.service';

@Component({
  selector: 'std-tree-editor',
  templateUrl: './tree-editor.component.html',
  styleUrls: ['./tree-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TreeEditorService]
})
export class TreeEditorComponent implements OnInit {
  @Input() nodes: TreeNode[];
  @Input() mode: TreeMode;

  readonly treeControl = new NestedTreeControl<TreeNode>(node => node?.children);
  readonly dataSource = new MatTreeNestedDataSource<TreeNode>();

  ngOnInit(): void {
    this.dataSource.data = this.nodes;
  }

  hasChild = (_: number, node: TreeNode) => !!node?.children && node?.children?.length > 0;
}
