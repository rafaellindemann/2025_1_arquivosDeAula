import {useState} from 'react'

function Estados() {

    const [usuario, setUsuario] = useState("Bilu")
    const [senha, setSenha] = useState()

    const [nome, setNome] = useState('Ulib')
    function lerNome(){
      // nome = prompt("Digite o nome (vou ignorar):")
      setNome(prompt("Digite o nome (vou ignorar):"))
      console.log(nome);
    }
    function lerUsuario(){
      let resposta = prompt("Digite o novo usuário:")
      setUsuario(resposta)
      let pw = prompt("Digite a nova senha: ")
      let pw2 = prompt("Confirme a senha: ")
      if(pw == pw2){
        setSenha(pw)
      }else{
        alert("As senhas são diferentes")
      }
    }
  return (
    <div>
            <h1>ESTADOS</h1>
            Nome: {nome}
            <div>
                Usuário: {usuario} <br />
                Senha: {senha}
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
    </div>
  )
}

export default Estados