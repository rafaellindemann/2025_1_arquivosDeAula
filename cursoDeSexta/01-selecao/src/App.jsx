import { useState } from 'react'
import './App.css'

function App() {
  const[inputMarujos, setInputMarujos] = useState('')
  const[inputEventos, setInputEventos] = useState('')
  const[viagem, setViagem] = useState()
  function verificar(){
    if(inputMarujos>=10 || inputEventos>=1){
      setViagem("SIM")
    }else{
      setViagem("NÃO")
    }
  }
  return (
    <>
      <div>
        <h2>Ex. 9 - Capitão Ganso</h2>
        Marujos:
        <input type="text" 
          value={inputMarujos}
          onChange={(e) => setInputMarujos(e.target.value)}
          />

        Eventos:
        <input type="text" 
          value={inputEventos}
          onChange={(e) => setInputEventos(e.target.value)}
        />

        <button onClick={verificar}>Verificar</button>
        <p>Viagem: {viagem}</p>
        
      </div>

    </>
  )
}

export default App
