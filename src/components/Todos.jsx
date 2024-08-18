import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { removeTodo ,setEditMode} from '../features/todo/todoSlice'
 

export default function Todos() {

    // use selector to get the todos from the store it provide access of states
  const todos = useSelector((state)=> state.todos)
  const dispatch = useDispatch();

  const handleUpdateTodo = (todo) => {
     dispatch(setEditMode({editMode:true, currentTodo:todo}));
  };

  


  return (
    <>
    <div>
       Todos
       {
        // below line to use to access the todos from the store
        todos.map((todo)=>(
            <li key={todo.id} className='rounded-2xl flex items-center justify-between'>
                <div className=' flex-1 space-x-2 flex w-4 h-4'> {todo["text"]}</div>
                    
                <div>

                    <button  // ()=> bacouse if we write dispatch(removeTodo(todo.id)) it will execute the function directly without clicking the button
                    onClick={ ()=>(dispatch(removeTodo(todo.id)))}
                    >❎</button>

                    <button 
                    onClick={ ()=>handleUpdateTodo(todo)} // here todo is => dispatch(updateTodo({ id: currentTodo.id, text: input })); we both pass id and text
                    >✏️</button>
                 </div>
            
            </li>
        ))
       }
    </div>
    </>
  )
}
