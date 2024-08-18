import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,updateTodo,clearEditMode } from '../features/todo/todoSlice'
import { useEffect } from 'react';

export default function AddTodo() {

 const editMode = useSelector((state)=>(state.editMode));  
 const currentTodo = useSelector((state)=>(state.currentTodo));
 console.log("here is edit mode= ",editMode);
 console.log("currentTodo= ",currentTodo);
 
const [input, setInput] = React.useState('');
const dispatch = useDispatch()


  useEffect(()=>{ // used automatically input filed display the current todo text 
    if(editMode && currentTodo)
        {

            setInput(currentTodo.text); 
        } 
    else
    {
        setInput('');
    }
  },[editMode, currentTodo]); // if we not pass the currentTodo in the dependency array then it will not re-render the component
 

  const addorUpdateTodoHandler = (e) => {
    e.preventDefault();
     
    if (editMode) {
         dispatch(updateTodo({id:currentTodo.id,text :input})); // input is the new todo text
         dispatch(clearEditMode());    
     }
     else {
         if(input ===" ")       
             dispatch(addTodo("{space}"));
        else
         dispatch(addTodo(input));
     }
    setInput(''); // use to clear the input field after adding the todo 
  }




  return (
    <div>
       <form  onSubmit={addorUpdateTodoHandler} className="flex">
            <input
                type="text"
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                placeholder="Write Todo..." required
                className="w-96 border border-black/10 rounded-l-lg px-3  duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg  px-3 py-1 bg-green-600 text-white shrink-0">
                {editMode ? 'Update' : 'Add'}
            </button>
        </form>
    </div>
  )
}
