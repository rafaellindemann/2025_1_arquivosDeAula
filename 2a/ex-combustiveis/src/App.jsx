import { useState } from 'react'

import './App.css'

function App() {
  const[inputGasolina, setInputGasolina] = useState('')
  const[totalGasolina, setTotalGasolina] = useState(0)

  function venderGasolina(){
    let quantidade = Number(inputGasolina)
    setTotalGasolina(totalGasolina + quantidade)
  }

  return (
    <>
      <div>
        <label htmlFor="">Gasolina</label>
        <input type="text" 
          value={inputGasolina}
          onChange={(event) => setInputGasolina(event.target.value)}
        /> 
        <button onClick={venderGasolina}>+</button> {totalGasolina}
      </div>
      <div>
        <label htmlFor="">Alcool</label>
        <input type="text" />
        <button>+</button> 0
      </div>
      <div>
        <label htmlFor="">Diesel</label>
        <input type="text" />
        <button>+</button> 0
      </div>

      <div>
        {/* Total: {totalGasolina+Number(inputGasolina)} */}
      </div>
    </>
  )
}

export default App
