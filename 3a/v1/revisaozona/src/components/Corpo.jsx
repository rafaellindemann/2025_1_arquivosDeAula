import { useState } from 'react';
import './Corpo.css'
function Corpo() {
    let pontos = 0;
    const [pontosEstado, setPontosEstado] = useState(0)
    function aumentarPontos(){
        pontos++
        console.log(pontos);
    }
    function tratarClique1(){
        alert("Clicou mesmo, olha só...")
    }
  return (
    <div className='corpo-container'>
        Corpo
        <button onClick={tratarClique1}>Clique aqui</button>
        <button onClick={() => alert("arrow function")}>Com arrow function</button>

        <div>
            <button onClick={aumentarPontos}>Pontos-var</button>
            {pontos}
        </div>

        <div>
            <button onClick={() => setPontosEstado(pontosEstado + 1)}>Pontos-state</button>
            {pontosEstado}
        </div>

    </div>
  )
}

export default Corpo