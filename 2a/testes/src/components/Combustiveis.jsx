import React, { useState } from 'react'

function Combustiveis() {
    const[inputAlcool, setInputAlcool] = useState('')
    const[inputGasolina, setInputGasolina] = useState('')
    const[inputDiesel, setInputDiesel] = useState('')
    const[totalAlcool, setTotalAlcool] = useState(0)
    const[totalGasolina, setTotalGasolina] = useState(0)
    const[totalDiesel, setTotalDiesel] = useState(0)

  return (
    <div className='container'>
        <h2>Combustiveis</h2>
        <div>
            Álcool <input type="number" value={inputAlcool} onChange={(event)=>setInputAlcool(event.target.value)}/> 
            <button onClick={()=>setTotalAlcool(totalAlcool+Number(inputAlcool))}>Comprar</button>
        </div>
        <div>
            Gasolina <input type="number" value={inputGasolina} onChange={(event)=>setInputGasolina(event.target.value)}/> 
            <button onClick={()=>setTotalGasolina(totalGasolina+Number(inputGasolina))}>Comprar</button>
        </div>
        <div>
            Diesel <input type="number" value={inputDiesel} onChange={(event)=>setInputDiesel(event.target.value)}/> 
            <button onClick={()=>setTotalDiesel(totalDiesel+Number(inputDiesel))}>Comprar</button>
        </div>

        <div>
            Total Álcool: {totalAlcool}
        </div>
        <div>
            Total Gasolina: {totalGasolina}
        </div>
        <div>
            Total Diesel: {totalDiesel}
        </div>



    </div>
  )
}

export default Combustiveis