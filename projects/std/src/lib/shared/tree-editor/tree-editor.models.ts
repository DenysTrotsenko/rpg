export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export type TreeMode = 'view' | 'edit';
