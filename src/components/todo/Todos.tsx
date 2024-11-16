import React, { useContext } from 'react';
import { TodoContextType, TodoItem } from '../../types/todoTypes';
import TodoContext from '../../context/todoContext';
import Todo from './Todo';

const Todos: React.FunctionComponent = () => {
  const { todos, updateTodo, deleteTodo, editTodo } = useContext(
    TodoContext,
  ) as TodoContextType;
  return (
    <div className="p-11">
      {todos.map((todo: TodoItem) => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
