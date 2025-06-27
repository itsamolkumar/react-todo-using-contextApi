import { useContext, useState } from "react";
import { TodoContext } from "../contexts/Todo";

export default function TaskList({ todo }) {
  const { updateTask, isCompleted, delTask } = useContext(TodoContext);
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(todo.task);

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEditable) updateHandler();
  };

  const updateHandler = () => {
    updateTask(todo.id, text);
    setIsEditable(false);
  };

  const checkboxHandler = () => {
    isCompleted(todo.id);
  };

  const deleteHandler = () => {
    delTask(todo.id);
  };

  return (
    
    <div className="flex justify-center my-4 ">
      <form
        onSubmit={submitHandler}
        className="flex items-center gap-4 bg-white shadow-xl rounded-lg px-4 py-3 w-full max-w-xl transition-transform hover:scale-[1.02] hover:shadow-2xl duration-200"
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={checkboxHandler}
          className="w-5 h-5 accent-green-600"
        />

        <input
          type="text"
          value={isEditable ? text : todo.task}
          onChange={(e) => setText(e.target.value)}
          disabled={!isEditable}
          className={`flex-1 text-lg px-3 py-1 rounded-md border ${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          } ${isEditable ? "bg-gray-100 border-gray-400" : "bg-white border-transparent"}`}
        />

        {!todo.completed && (
          <button
            type="button"
            onClick={isEditable ? updateHandler : () => setIsEditable(true)}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <i className={`fa-solid ${isEditable ? "fa-file" : "fa-pen-to-square"} text-xl`}></i>
          </button>
        )}

        <button
          type="button"
          onClick={deleteHandler}
          className="text-red-600 hover:text-red-800 transition-colors"
        >
          <i className="fa-solid fa-trash-can text-xl"></i>
        </button>
      </form>
    </div>
  );
}
