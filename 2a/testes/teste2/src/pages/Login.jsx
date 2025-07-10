import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { useNavigate } from 'react-router-dom';


function Login() {
    const[inputUsername, setInputUsername] = useState('')
    const[inputSenha, setInputSenha] = useState('')
    const {usuarioLogado, setUsuarioLogado, usuarios} = useContext(GlobalContext)
    const navigate = useNavigate(); // Hook para navegação 
  return (
    <div>
        <h1>Login</h1>
        username: <input type="text"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
        />
        Senha: <input type="password"
            value={inputSenha}
            onChange={(e) => setInputSenha(e.target.value)}
        />
        <button onClick={() => {
            const usuario = usuarios.find(u => u.nome === inputUsername && u.senha === inputSenha);
            if (usuario) {
                setUsuarioLogado(usuario.nome);
                navigate('/home'); // Redireciona para a página inicial após o login
            } else {
                alert('Usuário ou senha incorretos');
            }
        }}>Entrar</button>
    </div>
  )
}

export default Login