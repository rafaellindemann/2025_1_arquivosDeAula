import { useState } from 'react'

import './App.css'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Dinos from './pages/Dinos'

function App() {
  const [pagina, setPagina] = useState(<Login />)

  return (
    <>
      <nav>
        <button onClick={() => setPagina(<Login />)}>Login</button>
        <button onClick={() => setPagina(<Cadastro />)}>Cadastro</button>
        <button onClick={() => setPagina(<Home />)}>Home</button>
        <button onClick={() => setPagina(<Dinos />)}>Dinossauros</button>
      </nav>
      <div className='conteudo'>
        {pagina}
      </div>
    </>
  )
}

export default App
