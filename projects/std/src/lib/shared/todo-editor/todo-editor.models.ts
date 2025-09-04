import { CharacterId, Opaque } from '@std';

export interface TodoTask {
  id: TodoId;
  name: string;
  status: TodoStatus;
  experience: number;
  characters: CharacterId[];
  hidden?: boolean;
  tasks: TodoTask[];
}

export type TodoId = Opaque<string, 'TodoId'>;
export type TodoStatus = 'active' | 'completed' | 'failed';
export type TodoMode = 'view' | 'edit';
