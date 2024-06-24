import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const divref = useRef();

  useEffect(() => {
    setTimeout(() => {
      divref.current.innerhtml = 10;
    }, 5000);
  }, [])

  return (
    <div>
        hi there, your income tax returns are <div ref={divref}>{incomeTax}</div>
    </div>
  )
}

export default App