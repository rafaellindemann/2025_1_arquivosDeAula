import { useState } from 'react'

import './App.css'
import OracaoDevWeb from './components/OracaoDevWeb'
import OracaoFrontend from './components/OracaoFrontend'
import OracaoBackend from './components/OracaoBackend'

function App() {
  const[painel, setPainel] = useState('')

  function tratarDevWeb(){
    if(painel == ''){
      setPainel(<OracaoDevWeb />)
    }else{
      setPainel('')
    }
  }

  return (
    <>
      <div>
        <button onClick={tratarDevWeb}>Oração Dev Web</button>
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
