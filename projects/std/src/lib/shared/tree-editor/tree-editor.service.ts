import { Injectable } from '@angular/core';
import { TreeNode, TreeNodeId } from './tree-editor.models';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TreeEditorService {
  readonly nodeRefs: Map<TreeNodeId, TreeNode> = new Map();
  readonly nodesSrc$: BehaviorSubject<TreeNode[]> = new BehaviorSubject([]);
}
