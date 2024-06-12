import { useState } from "react";

function App() {
  const [count,setcount] = useState(0);

  function clickhandler(){
    setcount(count+1);
  }
  return (
    <div>
    <button onClick={clickhandler}>counter {count}</button>
    </div>
  )
}

export default App
