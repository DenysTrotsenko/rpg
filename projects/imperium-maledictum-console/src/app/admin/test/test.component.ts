import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TreeNode, TreeNodeId } from '../../../../../std/src/lib/shared/tree-editor/tree-editor.models';

const TREE_DATA: TreeNode[] = [
  {
    id: '1' as TreeNodeId,
    name: 'Vegetables',
    children: [
      {
        id: '2' as TreeNodeId,
        name: 'Green',
        children: [
          {
            id: '3' as TreeNodeId,
            name: 'Broccoli'
          },
          {
            id: '4' as TreeNodeId,
            name: 'Brussels sprouts'
          }
        ],
      },
      {
        id: '5' as TreeNodeId,
        name: 'Orange',
        children: [
          {
            id: '6' as TreeNodeId,
            name: 'Pumpkins'
          },
          {
            id: '7' as TreeNodeId,
            name: 'Carrots'
          }
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {
  nodes = TREE_DATA;
}
