import { useState } from 'react'
import './App.css'

function App() {
  const [min, setMin] = useState([])
  const [max, setMax] = useState([])
  const [med, setMed] = useState([])

  function gerar(){
    let tempMin = min
    let tempMax = max
    for(let i=0; i<30; i++){

      let n1 = Math.floor(Math.random() * 24 + 12)
      let n2 = Math.floor(Math.random() * 24 + 12)
  
      if(n1 > n2){
        tempMax.push(n1)
        tempMin.push(n2)
      }else{
        tempMax.push(n2)
        tempMin.push(n1)
      }
    }
    // console.table(tempMin)
    // console.table(tempMax)
    setMax(tempMax)
    setMin(tempMin)
  }
  
  return (
    <>
      <button onClick={gerar}>gerar número</button>
      {min.length}
      {max.length}
      <div>
        {min.map((minima, index) => (
          <p key={index}>
            {minima}
          </p>
        ))}
      </div>
    </>
  )
}

export default App

// sempre arredonda pra baixo {0..9}
// Math.floor() 

// sempre arrendonda pra cima {1..10}
// Math.ceil()

// arredonda pro inteiro mais próximo {0..10}
// Math.round()