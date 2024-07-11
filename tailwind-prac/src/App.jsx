import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='grid md:grid-cols-3'>
      <RevenueCard title = {"Amount Pending"} amount = {"12,432"} ordercount={13} />
    </div>
    </>
  )
}

export default App
