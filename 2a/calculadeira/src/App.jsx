import { useState } from 'react'
import './App.css'

function App() {
  const[inputN1, setInputN1] = useState('')
  const[inputN2, setInputN2] = useState('')
  const[resultado, setResultado] = useState('')

  function tratarN2(event){
    setInputN2(event.target.value)
    setResultado('')
  }
  function somar(){
    setResultado(Number(inputN1) + Number(inputN2))
    limpar()
  }
  function subtrair(){
    setResultado(Number(inputN1) - Number(inputN2))
  }
  function multiplicar(){
    setResultado(Number(inputN1) * Number(inputN2))
  }
  function dividir(){
    setResultado(Number(inputN1) / Number(inputN2))
  }
  function limpar(){
    setInputN1('')
    setInputN2('')
  }

  return (
    <>
      <h1>Calculadeira</h1>
      <div>
        <input type="number" step="1"
          value={inputN1} 
          onChange={(event) => setInputN1(event.target.value)} 
        />  #️⃣
        <input type="text" 
          value={inputN2}
          onChange={tratarN2}
        /> 
      </div>
      <div>
        <button onClick={somar}>➕</button>
        <button onClick={subtrair}>➖</button>
        <button onClick={multiplicar}>✖️</button>
        <button onClick={dividir}>➗</button>
        <button onClick={limpar}>🔱</button>
      </div>
      <div>
      🟰{resultado}
      </div>
    </>
  )
}

export default App
