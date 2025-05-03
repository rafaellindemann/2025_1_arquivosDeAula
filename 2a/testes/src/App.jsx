import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BombaDeAr from './components/BombaDeAr'
import Passou from './components/Passou'
import PapaiNoel from './components/PapaiNoel'
import Bondinho from './components/Bondinho'
import Pum from './components/PUM'
import Combustiveis from './components/Combustiveis'
import Lesmas from './components/Lesmas'
import Vovo from './components/Vovo'
import Veia from './components/Veia'
import TrajetoPomar from './components/TrajetoPomar'
import Vovo2 from './components/Vovo2'
import Desestruturacao from './components/Desestruturacao'
import Bomba2 from './components/Bomba2'
import Bondinho2 from './components/Bondinho2'
import Combustiveis2 from './components/Combustiveis2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Combustiveis2 />
      <Bondinho2 />
      {/* <Bomba2 /> */}
      <Desestruturacao />
      <Vovo2 />
      <TrajetoPomar />
      <Vovo />
      <Lesmas />
      <Combustiveis />
      <Pum />
      <Bondinho />
      <PapaiNoel />
      <Passou />
      <BombaDeAr />
    </>
  )
}

export default App
