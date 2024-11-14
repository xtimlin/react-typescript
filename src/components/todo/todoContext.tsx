import React, { createContext, useState } from 'react';
import { TodoItem, TodoContextType } from './types';

const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const saveTodo = (item: TodoItem) => {
    if (todos.length !== 0) {
      item.id = todos[todos.length - 1].id + 1;
    }
    setTodos([...todos, item]);
  };

  const updateTodo = (id: number) => {
    todos.filter((item: TodoItem) => {
      if (item.id === id) {
        item.status = !item.status;
        setTodos([...todos]);
      }
    });
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((item: TodoItem) => item.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id: number, newTitle: string) => {
    const updatedTodos = todos.map((item: TodoItem) => {
      if (item.id === id) {
        if (item.title === newTitle) {
          return item;
        }
        return { ...item, title: newTitle, status: false };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, saveTodo, updateTodo, deleteTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider };
export default TodoContext;
