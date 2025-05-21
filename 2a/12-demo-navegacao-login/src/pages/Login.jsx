import {useState} from 'react'
import Cadastro from './Cadastro'
import Home from './Home'

function Login({setMostrarNavbar, usuarios, setUsuarios, setUsuarioLogado, setPagina}) {
  // const [inputNome, setInputNome] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputSenha, setInputSenha] = useState('')

  function efetuarLogin() {
    if (inputEmail === '' || inputSenha === '') {
      alert('Preencha todos os campos')
      return
    }

    const usuario = usuarios.find(usuario => usuario.email === inputEmail && usuario.senha === inputSenha)

    if (usuario) {
      setUsuarioLogado(usuario)
      setMostrarNavbar(true)
      alert('Login efetuado com sucesso!')
      setInputEmail('')
      setInputSenha('')
      setPagina(<Home />)
    } else {
      alert('Usuário ou senha incorretos')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <div className="formLogin">
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
        <button onClick={efetuarLogin}>Logar</button>
        <p>
          Não tem uma conta? <button  onClick={() => {
            setPagina(<Cadastro setMostrarNavbar={setMostrarNavbar} usuarios={usuarios} setUsuarios={setUsuarios} setPagina={setPagina}/>)
          }}>Cadastre-se</button>
        </p>

      </div>

      
      {/* <button onClick={() => setMostrarNavbar(true)}>mostrarNavbar</button> */}
      {/* <button onClick={() => setMostrarNavbar(false)}>esconder</button> */}
    </div>
    
  )
}

export default Login