import { useState } from 'react'

import './App.css'
import OracaoDevWeb from './components/OracaoDevWeb'
import OracaoFrontend from './components/OracaoFrontend'
import OracaoBackend from './components/OracaoBackend'

function App() {
  const[painel, setPainel] = useState('')

  return (
    <>
      <div>
        <button onClick={() => setPainel(<OracaoDevWeb />)}>Oração Dev Web</button>
        <button onClick={() => setPainel(<OracaoFrontend />)}>Oração Frontend</button>
        <button onClick={() => setPainel(<OracaoBackend />)}>Oração Backend</button>
      </div>
      <div>
        {painel}
      </div>
    </>
  )
}

export default App
