import React, { useState } from "react";
import useTodo from "../context/TodoContext";

function TodoItem({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isEditable, setIsEditable] = useState(false);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md transition-all border border-gray-700">
      {/* Custom Checkbox */}
      <label className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="peer hidden"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <div className="w-6 h-6 border-2 border-gray-400 rounded-md peer-checked:bg-green-500 peer-checked:border-green-500 flex items-center justify-center transition-all">
          {todo.completed && "✔️"}
        </div>
      </label>

      {/* Editable Todo Text */}
      <input
        type="text"
        className={`flex-1 mx-3 bg-transparent outline-none text-lg font-medium transition-all ${
          todo.completed ? "line-through text-gray-500" : "text-white"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
      />

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          className="flex items-center justify-center w-10 h-10  text-black rounded-lg shadow-md transition-all hover:bg-yellow-400 hover:scale-105 active:scale-95"
          onClick={() => (isEditable ? editTodo() : setIsEditable(true))}
        >
          {isEditable ? "📁" : "✏️"}
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 text-white rounded-lg shadow-md transition-all hover:bg-red-400 hover:scale-105 active:scale-95"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
