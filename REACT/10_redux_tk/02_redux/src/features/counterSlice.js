import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increament: (state) =>{
            state.value += 1
        },
        decreament: (state) =>{
            state.value -= 1
        },
        updateCounter: (state, action) => {
            state.value = state.value + action.payload 
        }
    }
})

export const {increament, decreament, updateCounter} = counterSlice.actions

export default counterSlice.reducer