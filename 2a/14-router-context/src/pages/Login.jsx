import React, { useState } from 'react'
function Login() {
    const[inputUsername, setInputUsername] = useState('')
    const[inputSenha, setInputSenha] = useState('')
  return (
    <div>
        <h1>Login</h1>
        <div>
            username <input type="text" />
        </div>
        <div>
            Senha <input type="text" />
        </div>
        <button>Login</button>
    </div>
  )
}

export default Login