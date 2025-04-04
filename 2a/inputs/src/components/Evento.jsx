import { useState } from "react";

function Evento() {
    const[inputTeste, setInputTeste] = useState('')
    function testar(event){
        console.log(event);
    }
    function mudouInput(event){
        console.log(event);
        setInputTeste(event.target.value)
    }
  return (
    <div>
        <h2>
            Evento
        </h2>
        <button onClick={(event) => testar(event)}>Testar</button>
        <input type="text" 
            value={inputTeste}
            onChange={(event) => mudouInput(event)}
        />
    </div>
  )
}

export default Evento