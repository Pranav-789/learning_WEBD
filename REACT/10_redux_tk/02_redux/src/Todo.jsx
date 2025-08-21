import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { fetchTodos } from './features/todoSlice';
import { addTodo } from './features/todoSlice';

const Todo = () => {
    const dispatch = useDispatch();
    const {todos, status, error} = useSelector(state => state.todos);

    useEffect(()=>{
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleAdd = () =>{
      dispatch(addTodo({
        id: Date.now(),
        title: "New Todo"
      }))
    }
    
    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className='flex flex-col'>
      <ul className="p-4">
        {todos.map((todo) => (
          <li key={todo.id} className="border-b py-2">
            {todo.title}
          </li>
        ))}
      </ul>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={()=> {
        dispatch(fetchTodos());
      }}> Refetch Todos</button>
      
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleAdd}> Add Todo</button>
    </div>
  );
}

export default Todo
