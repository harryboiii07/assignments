import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Countcontext } from './context';

function App() {
  const [count,setcount] = useState(0);
  return(
    <div>
      <Countcontext.Provider value = {{count,setcount}}>
      <Count />
      </Countcontext.Provider>
    </div>
  )
}

function Count(){
  return(
    <div>
      <Countrenderer />
      <Buttons/>
    </div>
  )
}

function Countrenderer(){
  const {count} = useContext(Countcontext);
  return <div>
      {count}
    </div>
}
function Buttons(){
  const {count,setcount} = useContext(Countcontext);
  return(
    <div>
      <button onClick={()=>{
        setcount(count+1)
      }}>increase</button>

      <button onClick={()=>{
        setcount(count-1)
      }}>decrease</button>
    </div>
  )
}


export default App