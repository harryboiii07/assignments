import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  const clicked = useCallback(() => {
    console.log("child clicked")
  },[])

  return <div>
    <Child inputfunction={clicked} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({inputfunction})=>{
  console.log("child render")

  return <div>
    <button>Button clicked</button>
  </div>
})

export default App;