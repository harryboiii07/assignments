import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagesAtom, networkAtom, notificationAtom, totalselector } from './atom'

function App() {
  return (
  <>
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  </>
  )
}

function MainApp(){
  const networkcount = useRecoilValue(networkAtom);
  const jobcount = useRecoilValue(jobsAtom);
  const messagescount = useRecoilValue(messagesAtom);
  const notificationcount = useRecoilValue(notificationAtom);
  const totalcount = useRecoilValue(totalselector);

  return (
    <>
      <button>Home</button>

      <button>My Network({networkcount > 100 ? "99+" : networkcount})</button>
      <button>Jobs({jobcount})</button>
      <button>Messages({messagescount})</button>
      <button>Notification({notificationcount})</button>

      <button>Me({totalcount})</button>
    </>
  )
}

export default App
