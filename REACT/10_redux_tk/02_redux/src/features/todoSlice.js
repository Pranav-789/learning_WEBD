import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    status: 'idle',
    error: null
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {method: "GET"});
    const data = await response.json();
    return data;
});

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            state.todos.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state)=>{
            state.status = 'loading';
        })
        .addCase(fetchTodos.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.todos = action.payload;
        })
        .addCase(fetchTodos.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer;