
import { useState } from 'react'

function Lesmas() {
    const[inputNum, setInputNum] = useState('')
    const[frase, setFrase] = useState('')
    function classificar(){
        if(inputNum < 10){
            setFrase('1')
        }else if(inputNum < 20){
            setFrase('2')
        }else{
            setFrase('3')
        }
    }
  return (
    <div className='container'>
        <h2>Lesmas</h2>
        Velocidade: 
        <input type="number" 
            value={inputNum}
            onChange={(event) => setInputNum(event.target.value)}
        /> 
        <button onClick={classificar}>Gerar</button>
        <div>
            Nível: {frase}
        </div>
    </div>
  )
}

export default Lesmas