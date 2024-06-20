import { Children } from "react"

function App() {
  return <>
    <Cardwrapper >hi there</Cardwrapper>
  </>
}


function Cardwrapper({children}){
  return <div style = {
    {border : "2px solid black"}
  }>
  {children}
  </div>
}

export default App
