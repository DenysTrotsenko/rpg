import { Character, Opaque } from '@shared';

export interface TodoTask {
  id: TodoId;
  name: string;
  status: TodoStatus;
  experience: number;
  characters: Character[];
  tasks: TodoTask[];
}

export type TodoId = Opaque<string, 'TodoId'>;
export type TodoStatus = 'active' | 'completed' | 'failed';
export type TodoMode = 'view' | 'edit';
