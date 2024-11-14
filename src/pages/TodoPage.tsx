import React from 'react';

import { TodoProvider } from '../components/todo/todoContext';
import AddTodo from '../components/todo/AddTodo';
import Todos from '../components/todo/Todos';

const TodoPage: React.FunctionComponent = () => {
  return (
    <TodoProvider>
      <p className="page-title">Todo Page</p>
      <AddTodo />
      <Todos />
    </TodoProvider>
  );
};

export default TodoPage;
