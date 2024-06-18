import { useState } from 'react'
import './App.css'

function App() {
  const [todos, settodos] = useState([{
    title : "go to the gym",
    description : "gym at 6-7",
  },{
    title : "study web dev",
    description : "from 9-10",
  }])

  function addtodo(){
    settodos([...todos,{
      title : "todo title",
      description : "todo description"
    }])

  }
  return (
    <div>
      <button onClick={addtodo}>add random todo</button>
      {todos.map(function(todo){
        return (
          <Todos title = {todo.title} description = {todo.description} />
        )
      })}
    </div>
  )
}

function Todos(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2> 
    </div>
  )
}

export default App
