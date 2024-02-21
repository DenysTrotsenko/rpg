import { Opaque } from '@shared';

export interface TodoTask {
  id: TodoId;
  name: string;
  experience: number;
  status: TodoStatus;
  tasks: TodoTask[];
}

export type TodoId = Opaque<string, 'TodoId'>;
export type TodoStatus = 'active' | 'completed' | 'failed';
export type TodoMode = 'view' | 'edit';
