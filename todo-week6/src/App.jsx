import { useState } from 'react'

let count = 4;

function App() {
  const [todos, settodos] = useState([
  {
    id : 1,
    title : "going to the gym",
    description : "between 6-7"
  },
  {
    id : 2,
    title : "dsa studying",
    description : "between 7-8"
  },
  {
    id : 3,
    title : "webd studying",
    description : "between 8-9"
  }
  ]);

  function Todo(props){
    return <div>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
    </div>
  }

  function clickhandler(){
    settodos([...todos,{
      id : count++,
      title : "webd studying",
    description : "between 8-9"
    }]);
  }

  return (
    <>
      {todos.map(function(todo){
        return <>
          <Todo key = {todo.id} title = {todo.title} description = {todo.description}></Todo>
        </>
      })}
      <button onClick={clickhandler}>add todo</button>
    </>
  )
}

export default App
