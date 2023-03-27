import { configureStore } from '@reduxjs/toolkit'
import myReducer from './Countredux'

export const store = configureStore({
  reducer: {
    myStore: myReducer
  },
})