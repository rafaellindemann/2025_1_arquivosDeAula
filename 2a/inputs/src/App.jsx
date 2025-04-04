import { useState } from 'react'
import './App.css'

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
    </div>
  )
}

export default App
