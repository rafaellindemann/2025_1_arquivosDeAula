import { useState } from "react"
import Login from "./Login"

function Cadastro({setMostrarNavbar, usuarios, setUsuarios, setPagina}) {
  const [inputNome, setInputNome] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputSenha, setInputSenha] = useState('')

  function cadastrarUsuario() {
    if (inputNome === '' || inputEmail === '' || inputSenha === '') {
      alert('Preencha todos os campos')
      return
    }

    const usuario = {
      nome: inputNome,
      email: inputEmail,
      senha: inputSenha
    }

    setUsuarios([...usuarios, usuario])
    setMostrarNavbar(false)
    alert('Usuário cadastrado com sucesso!')
    setInputNome('')
    setInputEmail('')
    setInputSenha('')
    setPagina(<Login />)
  }

  return (
    <div>
        <h1>Cadastro</h1>
        <div className="inputContainer">
            <label htmlFor="">Nome</label>
            <input type="text" 
              value={inputNome}
              onChange={(e) => setInputNome(e.target.value)}  
            />
        </div>
        <div className="inputContainer">
            <label htmlFor="">E-mail</label>
            <input type="text" 
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
        </div>
        <div className="inputContainer">
            <label htmlFor="">Senha</label>
            <input type="text"
              value={inputSenha}
              onChange={(e) => setInputSenha(e.target.value)}
            />
        </div>
        <button onClick={cadastrarUsuario}>CADASTRAR AÍ</button>
    </div>

  )
}

export default Cadastro