import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TreeNode } from '../../../../../std/src/lib/shared/tree-editor/tree-editor.models';

const TREE_DATA: TreeNode[] = [
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'}
        ],
      },
      {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'}
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
