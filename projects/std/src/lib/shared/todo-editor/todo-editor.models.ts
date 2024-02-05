export interface TodoTask {
  id: string;
  name: string;
  experience: number;
  status: TodoStatus;
  tasks: TodoTask[];
}

export type TodoStatus = 'active' | 'completed' | 'failed';
export type TodoMode = 'view' | 'edit';
