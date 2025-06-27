import { TodoContext } from "../contexts/Todo";
import { useState, useContext } from "react";

export default function AddForm() {
  const [text, setText] = useState("");
  const { addTask } = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (text.trim() === "") return; // prevent empty task

    addTask({
      id: Date.now(),
      task: text.trim(),
      completed: false,
    });

    setText("");
  };

  return (
    <div className="w-full flex justify-center items-center mt-6 mb-10 px-4">
      <form onSubmit={submitHandler} className="flex flex-col md:flex-row items-center gap-4 w-full max-w-xl">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your task..."
          className="flex-1 bg-gray-100 text-black placeholder-gray-500 px-4 py-2 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold shadow-lg transition-all duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
