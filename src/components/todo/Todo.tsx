import * as React from 'react';
import * as fa from 'react-icons/fa6';
import { TodoItem } from './types';

type Props = {
  todo: TodoItem;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newTitle: string) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo, editTodo }) => {
  const isDone: string = todo.status ? `line-through` : '';
  const [isEditing, setIsEditing] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState('');

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setNewTitle(todo.title);
  };

  const handleConfirmSubmit = () => {
    editTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-4/5 md:w-4/5 lg:w-4/5">
        <fa.FaRegSquareMinus
          className=" flex size-8 hover:bg-red-500 hover:text-white"
          onClick={() => deleteTodo(todo.id)}
        />

        <fa.FaPencil
          className="size-8 hover:bg-gray-500 hover:text-white"
          onClick={handleEdit}
        />


        <div
          onClick={() => updateTodo(todo.id)}
          className="flex "
        >
          {isDone ? (
            <fa.FaRegSquareCheck className="size-8 bg-green-500 text-white " />
          ) : (
            <fa.FaRegSquare className="size-8 hover:bg-green-500 hover:text-white" />
          )}
          {!isEditing && <h1 className={`${isDone} text-2xl font-bold`}>{todo.title}</h1>}
        </div>
        {
          isEditing &&
          <div className="flex w-full">
            <input
              type="text"
              className="border border-gray-400 p-2 w-full flex items-center justify-center flex rounded-2xl"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button
              onClick={handleConfirmSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center"
            >Confirm
            </button>
          </div>
        }
      </div>
      <br />
    </div>
  );
};
export default Todo;