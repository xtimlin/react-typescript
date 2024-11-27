export interface TodoItem {
  id: number;
  title: string;
  status: boolean;
}

export type TodoContextType = {
  todos: TodoItem[];
  saveTodo: (todoItemInput: string) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newTitle: string) => void;
};
