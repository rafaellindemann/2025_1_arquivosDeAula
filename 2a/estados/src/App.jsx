import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("Juca")

  let nome = "Ulib"
  function lerNome(){
    nome = prompt("Digite o nome (vou ignorar):")
    console.log(nome);
    
  }
  function lerUsuario(){
    let resposta = prompt("Digite o novo usuário:")
    setUsuario(resposta)
  }

  return (
    <>
      <h1>ESTADOS</h1>
      Nome: {nome}
      <div>
        Usuário: {usuario}
      </div>
      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar usuário</button>

      <ul>
        <li>ajshgfkvsf</li>
        <li>ajshgfkvsf</li>
        <li>ajshgfkvsf</li>
        <li>ajshgfkvsf</li>
        <li>ajshgfkvsf</li>
        <li>ajshgfkvsf</li>
        <li>ajshgfkvsf</li>
        <li>ajshgfkvsf</li>
      </ul>
    </>
  )
}

export default App
