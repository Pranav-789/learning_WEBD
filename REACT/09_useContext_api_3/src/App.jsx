import React from 'react'
import { useState } from 'react'
import { TodoProvider } from './contexts';
import { useEffect } from 'react';

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    // setTodos([...todos, todo]);
    // or
    setTodos((prev) => [{ ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const removeTodo = (id) =>{
    setTodos((prev) => prev.filter((prevTodo)=> prevTodo.id !== id))
  }

  const toggleComplete = (id) =>{
    setTodos((prev) => prev.map((todo) => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo;
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || text.trim() === "") return;
    addTodo({
      id: Date.now(),
      todo: text,
      completed: false
    });
    setText("");
  }

  useEffect(() => {
    const todosFromlclStorage = JSON.parse(localStorage.getItem("todos")) || [];
    if (todosFromlclStorage.length > 0) {
      setTodos(todosFromlclStorage);
    }
  }, []);

  // Save todos on change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, toggleComplete, removeTodo }}
    >
      <div className="bg-sky-950 flex flex-col gap-4 justify-center items-center min-h-screen">
        <h1 className="text-3xl font-semibold text-white">Manage Your Todos</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="enter your todo here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-white p-2 rounded-l-lg w-80 outline-none"
          />
          <button
            className="p-2 bg-teal-500 rounded-r-lg"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <ul>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <li
                  key={todo.id}
                  className={`flex justify-between items-center p-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer ${
                    todo.completed
                      ? "bg-gray-200 text-gray-500 line-through"
                      : "bg-white text-black hover:bg-teal-50"
                  }`}
                >
                  <span
                    onClick={() => toggleComplete(todo.id)}
                    className="flex-1"
                  >
                    {todo.todo}
                  </span>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="ml-3 text-red-500 hover:text-red-700 font-bold"
                  >
                    ❌
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
