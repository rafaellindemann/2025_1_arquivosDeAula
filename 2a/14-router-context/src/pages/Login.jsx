import React, { useContext, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'
function Login() {
    const[inputUsername, setInputUsername] = useState('')
    const[inputSenha, setInputSenha] = useState('')
    const{usuarios, setUsuarioLogado} = useContext(GlobalContext)
    const navigate = useNavigate()

    function efetuarLogin(){
      const usuario = usuarios.find((u) => u.username == inputUsername && u.senha == inputSenha)
      if(usuario){
        alert("Login efetuado com sucesso")
        setUsuarioLogado(usuario)
        navigate('/home')
      }else{
        alert("Credenciais incorretas")
      }
    }
  return (
    <div>
        <h1>Login</h1>
        <div>
            username <input type="text" 
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              /> 
        </div>
        <div>
            Senha <input type="text" 
              value={inputSenha}
              onChange={(e) => setInputSenha(e.target.value)}
            />
        </div>
        <button onClick={efetuarLogin}>Login</button>
    </div>
  )
}

export default Login