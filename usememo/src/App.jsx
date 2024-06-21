import { useMemo, useEffect, useState } from 'react'

function App() {
  
  const [count,setcount] = useState(0);
  const [value,setvalue] = useState(1);
 
  let sum = useMemo(()=>{
    console.log("memo got called");
    let cnt = 0;
    for(var i = 0 ; i<=value ; i++){
      cnt = cnt+i;
    }
    return cnt;
  },[value])
 
  function Sum(){
    return (
    <>
      the sum is {sum}
    </>
    )
  }

  return(
    <>
      <input onChange = {(event)=>{setvalue(event.target.value)}} type = "text" placeholder = "number"></input><br />
      <Sum></Sum><br />
      <button onClick = {()=>{setcount(count+1)}}>counter {count}</button>
    </>
  )
}

export default App
