import { useState } from 'react'

function Pum() {
    const[inputNum, setInputNum] = useState('')
    const[frase, setFrase] = useState('')
    function gerarPum(){
        let texto = ''
        let pums = 0;
        let i = 1;
        while(pums<inputNum){
            if(i%4 != 0){
                texto += i + ' '
            }else{
                texto += 'PUM | '
                pums++
            }
            i++

        }

        setFrase(texto)
    }
  return (
    <div className='container'>
        <h2>PUM</h2>
        <input type="text" 
            value={inputNum}
            onChange={(event) => setInputNum(event.target.value)}
        /> 
        <button onClick={gerarPum}>Gerar</button>
        <div>
            {frase}
        </div>
    </div>
  )
}

export default Pum