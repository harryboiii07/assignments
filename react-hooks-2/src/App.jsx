import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';



function App() {
  const[sid,setsid] = useState(1);
  return <div>
    <button onClick={() => setsid(1)}>1</button>
    <button onClick={() => setsid(2)}>2</button>
    <button onClick={() => setsid(3)}>3</button>
    <button onClick={() => setsid(4)}>4</button>
    <Todo id = {sid} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(function(){
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(function(response){
      setTodo(response.data.todo);
    })
  },[id])

  return <div>
    Id : {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;