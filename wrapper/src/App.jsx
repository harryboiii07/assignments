
function App() {
  return <>
    <Cardwrapper innerComponent = {<Textcomponent></Textcomponent>}></Cardwrapper>
  </>
}

function Textcomponent(){
  return <div>
  hi there
  </div>
}

function Cardwrapper({innerComponent}){
  return <div style = {
    {border : "2px solid black"}
  }>
  {innerComponent}
  </div>
}

export default App
