import { useState } from 'react'

import './App.css'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

function App() {
  const [pagina, setPagina] = useState()

  return (
    <>
      <nav>
        <button onClick={() => setPagina(<Login />)}>Login</button>
        <button onClick={() => setPagina(<Cadastro />)}>Cadastro</button>
      </nav>
      {pagina}
    </>
  )
}

export default App
