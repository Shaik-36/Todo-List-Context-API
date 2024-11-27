import React, { useState } from "react";
import useTodo from "../context/TodoContext";

function TodoForm() {

    // Declare local Todo for applying features using the functions from Context
    const [todo, setTodo] = useState([])

    // Get Context from TodoContext using useTodo() 
    // To apply the add funciton declared in App.jsx
    const {addTodo, } = useTodo()
    
    // Add event function form submit
    const add = (e) => {
        e.preventDefault()

        if(!todo) return 

        // Pass the data as declared in App.jsx for addTodo() function
        addTodo({
            // id: Date.now(), // This is not needed as we already declared in addTodo()
            todo,  // pass the todo directly
            completed: false
        })

        // Empty SetTodo once data is submited
        setTodo("")

    }

    return (
        <form  
        onSubmit={add}
        className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

