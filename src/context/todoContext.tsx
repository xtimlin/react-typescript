import React, { createContext, useState } from 'react';
import { TodoItem, TodoContextType } from '../types/todoTypes';

const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const saveTodo = (todoItemInput: string) => {
    const item: TodoItem = {
      id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
      title: todoItemInput,
      status: false,
    };
    setTodos([...todos, item]);
  };

  const updateTodo = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((item: TodoItem) => item.id !== id));
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
