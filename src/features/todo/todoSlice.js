import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Learn Redux",
          
        }], // todos are the states in reducers
            
        editMode: false, // Tracks whether we are editing a todo
        currentTodo: null, // Holds the todo being edited 
    };
export const todoSlice = createSlice({
     name: "todo",
     initialState,
     reducers:{
        addTodo:(state,action)=>{
            // below is object which is insert in todos in array form
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            console.log(todo.id);
            
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            // filter is used to remove the element from array
            console.log(action.payload.id); // we not acces payload.id because we only pass id not id within id 
            const id = action.payload; // directly use payload
            state.todos = state.todos.filter((todo)=> todo.id !== id)
        },
        updateTodo:(state,action)=>{
            
                const todo = state.todos.find((todo)=> todo.id === action.payload.id);
                if(todo)
                {
                    todo.text = action.payload.text;
                }
                else
                {
                    console.log("Todo not found");
                }
            }, 
             setEditMode: (state, action) => {
                state.editMode = action.payload.editMode;
                state.currentTodo = action.payload.currentTodo;
              },
            clearEditMode: (state) => {
                state.editMode = false;
                state.currentTodo = null;
              },
    }
})
export const {addTodo,removeTodo,updateTodo,setEditMode, clearEditMode} = todoSlice.actions; // heps to access in every where

export default todoSlice.reducer; // to notify redux store that we have created a reducer for useSelector hook and dispacher