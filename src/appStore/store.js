import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'


// store provides useDispatch and useSelector hooks to access the state and dispatch actions
// todoReducer is a function that returns the reducer of todoSlice

export const store = configureStore({
    reducer: todoReducer
})

