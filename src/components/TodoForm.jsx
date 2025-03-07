import React, { useState } from "react";
import useTodo from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex gap-2">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="flex-1 p-3 bg-gray-700 text-white rounded-lg outline-none"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
<button
  type="submit"
  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all hover:bg-blue-600 hover:scale-105 active:scale-95"
>
  <span className="text-lg">➕</span> <span>Add Task</span>
</button>

    </form>
  );
}

export default TodoForm;
