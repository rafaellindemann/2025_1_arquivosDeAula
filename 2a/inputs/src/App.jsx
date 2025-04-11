import { useState } from 'react'
import './App.css'
import Evento from './components/Evento'
import PapaiNoel from './components/PapaiNoel'

function App() {
  const[inputUsername, setInputUsername] = useState('')
  const[inputSenha, setInputSenha] = useState('')
  const[erro, setErro] = useState(false)

  function efetuarLogin(){
    // GillBates // 1235
    if(inputUsername == 'GillBates' && inputSenha == '1235'){
      setErro(false)
      alert("Pode entrar")
    }else{
      // alert("erro #403")
      setErro(true)
    }
  }

  return (
    <div className='container-app'>

      <div>
        <h1>papai noel</h1>
        <PapaiNoel />
      </div>

      <h1>Inputs controlados</h1>
      <label htmlFor="">Username</label>
      <input type="text" 
        value={inputUsername}
        onChange={(event) => setInputUsername(event.target.value)}  
      />

      <label htmlFor="">Senha</label>
      <input type="text" 
        value={inputSenha}
        onChange={(event) => setInputSenha(event.target.value)}
      />
      {erro && 
        <span className='msg-erro'>Credenciais inválidas</span>
      }
      <button onClick={efetuarLogin}>Login</button>

      <Evento />
    
    </div>
  )
}

export default App
