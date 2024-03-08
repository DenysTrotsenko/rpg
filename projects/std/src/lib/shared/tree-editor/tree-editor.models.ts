import { Opaque } from '@shared';

export interface TreeNode {
  id: TreeNodeId;
  name: string;
  children?: TreeNode[];
}

export type TreeNodeId = Opaque<string, 'TreeNodeId'>;
export type TreeMode = 'view' | 'edit';
