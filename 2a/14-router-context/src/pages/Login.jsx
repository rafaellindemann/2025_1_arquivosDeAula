import React, { useState } from 'react'
function Login() {
    const[inputUsername, setInputUsername] = useState('')
    const[inputSenha, setInputSenha] = useState('')
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
        <button>Login</button>
    </div>
  )
}

export default Login