import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DevGotchi from './components/DevGotchi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <DevGotchi />
    </>
  )
}

export default App
