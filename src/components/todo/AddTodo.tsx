import React, { useContext, useState } from 'react';
import TodoContext from '../../context/todoContext';
import { TodoContextType } from '../../types/todoTypes';

const AddTodo: React.FC = () => {
  const [todoItemInput, setTodoItemInput] = useState<string>('');
  const { saveTodo } = useContext(TodoContext) as TodoContextType;

  const handleSaveTodo = (e: React.FormEvent, todoItemInput: string) => {
    e.preventDefault();
    saveTodo(todoItemInput);
    setTodoItemInput('');
  };

  return (
    <form
      className="flex items-center justify-center w-full"
      onSubmit={(e) => handleSaveTodo(e, todoItemInput)}
    >
      <div className="flex w-4/5 md:w-4/5 lg:w-4/5">
        <div className="flex w-full">
          <input
            id="todoItem"
            value={todoItemInput}
            onChange={(e) => {
              setTodoItemInput(e.target.value);
            }}
            className="border border-gray-400 p-2 w-full flex items-center justify-center flex rounded-2xl"
            placeholder="add item here"
            type="text"
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center"
          disabled={todoItemInput === ''}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
