import { useState } from 'react'
import BoasVindas from './BoasVindas'
import './Header.css'
function Header() {
  const [usuario, setUsuario] = useState('')
  const [mensagem, setMensagem] = useState(" :) ")

  function fazerLogin(){
    var nome = prompt("Digite seu nome de usuário:")
    setUsuario(nome)
  }

  return (
    <div className="container-header">
        <p>LoGo</p>
        <p>Link1</p>
        <p>Link2</p>
        <p>Link5</p>
        {/* {usuario && <BoasVindas nome={usuario} mensagem={mensagem} />}      */}
        {usuario ? <BoasVindas nome={usuario} mensagem={mensagem} /> : <button onClick={fazerLogin}>Login</button>}
        

        
    </div>
  )
}

export default Header