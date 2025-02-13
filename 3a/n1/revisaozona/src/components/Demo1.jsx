import './Demo1.css'
import { FcAlarmClock } from "react-icons/fc";
import { GiAngelWings } from "react-icons/gi";
function Demo1() {
  function responderClique(){
    alert("Parabéns, você clicou!")
  }

  // const tratarEntrada = () => {

  // }
  return (
    <div className='container-demo1'>
        <button onClick={responderClique}>Clique aqui</button>
        <button onClick={() => {alert("Eu nasci de uma arrow function")}}> ➡️ </button>

        <img className='img-dev' src="./imagens/Developer activity-amico.svg" alt="" />
        <FcAlarmClock onClick={responderClique} className='icone'/>
        <GiAngelWings />
    </div>
  )
}

export default Demo1