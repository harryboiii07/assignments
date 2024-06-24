import React, { Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const Dashboard = React.lazy(() => import('./components/dashboard'));
const Landing = React.lazy(() => import('./components/landing'));


function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback="Loading..."><Dashboard /></Suspense>} />
        <Route path='/' element={<Suspense fallback="Loading..."><Landing /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
