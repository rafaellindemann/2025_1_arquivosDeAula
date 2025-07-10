import React, { useState } from 'react'
function TrajetoPomar() {
    const[inputMaca, setInputMaca] = useState('')
    const[inputLaranja, setInputLaranja] = useState('')
    const[inputBergamota, setInputBergamota] = useState('')
    const[inputBanana, setInputBanana] = useState('')
    const[inputPera, setInputPera] = useState('')
    const[totalMaca, setTotalMaca] = useState(0)
    const[totalLaranja, setTotalLaranja] = useState(0)
    const[totalBergamota, setTotalBergamota] = useState(0)
    const[totalBanana, setTotalBanana] = useState(0)
    const[totalPera, setTotalPera] = useState(0)
  return (
    <div className='container'>
        <h2>Trajeto Pomar</h2>
        <div>
            Maçã - R$ 1,50 <input type="number" value={inputMaca} onChange={(event)=>setInputMaca(event.target.value)}/> 
            <button onClick={()=>setTotalMaca(1.5*Number(inputMaca))}>Comprar</button>
        </div>
        <div>
            Laranja - R$ 2,00 <input type="number" value={inputLaranja} onChange={(event)=>setInputLaranja(event.target.value)}/> 
            <button onClick={()=>setTotalLaranja(2*Number(inputLaranja))}>Comprar</button>
        </div>
        <div>
            Bergamota - R$ 1,00 <input type="number" value={inputBergamota} onChange={(event)=>setInputBergamota(event.target.value)}/> 
            <button onClick={()=>setTotalBergamota(Number(inputBergamota))}>Comprar</button>
        </div>
        <div>
            Banana - R$ 1,20 <input type="number" value={inputBanana} onChange={(event)=>setInputBanana(event.target.value)}/> 
            <button onClick={()=>setTotalBanana(1.2*Number(inputBanana))}>Comprar</button>
        </div>
        <div>
            Pera - R$ 0,50 <input type="number" value={inputPera} onChange={(event)=>setInputPera(event.target.value)}/> 
            <button onClick={()=>setTotalPera(0.5*Number(inputPera))}>Comprar</button>
        </div>
        { totalMaca>0 && <div>{inputMaca}x Maçã: {totalMaca}</div> }
        { totalLaranja>0 && <div>{inputLaranja}x Laranja: {totalLaranja}</div> }
        { totalBergamota>0 && <div>{inputBergamota}x Bergamota: {totalBergamota}</div> }
        { totalBanana>0 && <div>{inputBanana}x Banana: {totalBanana}</div> }
        { totalPera>0 && <div>{inputPera}x Pera: {totalPera}</div> }
        <div>Total: R$ {(totalMaca+totalLaranja+totalBergamota+totalBanana+totalPera).toFixed(2)}</div>
    </div>
  )
}
export default TrajetoPomar

