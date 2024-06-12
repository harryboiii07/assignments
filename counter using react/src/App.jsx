import { useState } from "react";

function App() {
  const [count,setcount] = useState(0);

  return (
    <div>
    <Custombutton count={count} setcount={setcount}></Custombutton>
    </div>
  )
}

//component
function Custombutton(props){

  function clickhandler(){
    props.setcount(props.count+1);
  }

  return(
    <button onClick={clickhandler}>counter {props.count}</button>
  )
}

export default App
