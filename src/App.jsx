
import { Provider } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { store } from './appStore/store'


function App() {
 

  return (
    <>
      <h2>redux</h2>
      <Provider store={store}>

      <AddTodo/>
      <Todos/>
    </Provider>
    </>
  )
}

export default App
