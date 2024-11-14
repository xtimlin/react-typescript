import React, { useContext, useState } from 'react';
import TodoContext from './todoContext';
import { TodoItem, TodoContextType } from './types';

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const { saveTodo } = useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = useState<TodoItem | object>();


  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };
  
  const handleSaveTodo = (e: React.FormEvent, formData: TodoItem | any) => {
    e.preventDefault();
    saveTodo(formData);
    setTitle('');
  };

  return (
    <form
      className="flex items-center justify-center w-full"
      onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div className="flex w-4/5 md:w-4/5 lg:w-4/5">
        <div className="flex w-full">
          <input
            id="title"
            value={title}
            onChange={handleForm}
            className="border border-gray-400 p-2 w-full flex items-center justify-center flex rounded-2xl"
            placeholder="add item here"
            type="text" />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center"
          disabled={formData === undefined ? true : false}
        >Add
        </button>
      </div>
    </form>
  );

};

export default AddTodo;