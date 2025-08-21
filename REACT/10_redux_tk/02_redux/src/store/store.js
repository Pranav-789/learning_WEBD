import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import themeReducer from '../features/themeSlice'
import todoReducer from '../features/todoSlice'
import { logger } from '../features/logger'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});