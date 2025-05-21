import { useEffect, useState } from 'react'

import './App.css'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Dinos from './pages/Dinos'

function App() {
  const [mostrarNavbar, setMostrarNavbar] = useState(false)
  const [usuarios, setUsuarios] = useState([])
  const [usuarioLogado, setUsuarioLogado] = useState(null)
  const [pagina, setPagina] = useState(null)

  useEffect(() => setPagina(
  <Login setMostrarNavbar={setMostrarNavbar} usuarios={usuarios} setUsuarios={setUsuarios} setUsuarioLogado={setUsuarioLogado} setPagina={setPagina}  
  />),[])

  useEffect(() => {console.log(usuarios)}, [usuarios])

  return (
    <div className="container-App">
      {mostrarNavbar && 
       
      <nav>
        {/* <button onClick={() => setPagina(<Login />)}>Login</button> */}
        {/* <button onClick={() => setPagina(<Cadastro />)}>Cadastro</button> */}
        <button onClick={() => setPagina(<Home />)}>Home</button>
        <button onClick={() => setPagina(<Dinos />)}>Dinossauros</button>
      </nav>
      }
      <div className='conteudo'>
        {pagina}
      </div>
    </div>
  )
}

export default App
