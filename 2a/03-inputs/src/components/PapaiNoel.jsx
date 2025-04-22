import React, { useState } from 'react'

function PapaiNoel() {
    const[inputNum, setInputNum] = useState('')
    const[frase, setFrase] = useState('')
    function gerarHo(){
        if(inputNum > 0 && inputNum < 10000000){

            let texto = ''
            for(let i=0; i<inputNum; i++){
                texto = texto + "Ho "
            }
            texto = texto + '!'
            setFrase(texto)
        }
    }
  return (
    <div>
        <input type="text" 
            value={inputNum}
            onChange={(event) => setInputNum(event.target.value)}
        /> 
        <button onClick={gerarHo}>Gerar</button>
        <div>
            {frase}
        </div>
    </div>
  )
}

export default PapaiNoel