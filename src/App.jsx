import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachPrev) => (eachPrev.id === id ? newTodo : eachPrev))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((eachPrev) => eachPrev.id !== id)
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachPrev) =>
        eachPrev.id === id
          ? { ...eachPrev, completed: !eachPrev.completed }
          : eachPrev
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="w-full max-w-3xl bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          <img src="https://img.icons8.com/?size=100&id=3lzRiywiDwuR&format=png&color=000000" alt="Icon" className="inline-block mr-4" />
          Todo App
        </h1>

          <TodoForm />
          <div className="mt-6 space-y-4">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
